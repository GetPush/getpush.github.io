import datetime
import signal
import os
import sys
import socket
from flask import Flask, request, send_from_directory, jsonify
from gevent.pywsgi import WSGIServer

app = Flask("gretongrs")
app.access_history = []

@app.before_request
def log_request():
    method = request.method
    original_url = request.url
    headers = request.headers
    client_ip_address = headers.get('X-Forwarded-For', request.remote_addr)
    user_agent = headers.get('User-Agent')
    timestamp = datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    access_log = f"{timestamp} - {method} {original_url} ({client_ip_address}) - User Agent: {user_agent}"
    app.access_history.append(access_log)
    print(access_log)

    # Menyimpan log ke file log.txt
    with open('log.txt', 'a') as log_file:
        log_file.write(access_log + '\n')

@app.route('/')
def home():
    client_ip_address = request.headers.get('X-Forwarded-For', request.remote_addr)
    print(f"Client IP address: {client_ip_address}")

    return send_from_directory('page', 'home.html')

@app.route('/access-history')
def access_history():
    return jsonify(app.access_history)

@app.route('/page/<path:path>')
def serve_page(path):
    return send_from_directory('page', path)

@app.route('/<path:path>')
def serve_file(path):
    base_dir = os.path.dirname(os.path.abspath(__file__))
    return send_from_directory(base_dir, path)

def stop_server(signal, frame):
    global http_server
    if http_server is not None:
        http_server.stop()
        print("Server stopped")
    sys.exit(0)

def find_available_port(start_port=8080):
    port = start_port
    while True:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
        result = s.connect_ex(('localhost', port))
        s.close()
        if result != 0:
            return port
        port += 1

signal.signal(signal.SIGINT, stop_server)
signal.signal(signal.SIGTERM, stop_server)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", find_available_port()))
    http_server = WSGIServer(("0.0.0.0", port), app)
    print(f"Server running on http://localhost:{port}")

    http_server.serve_forever()

