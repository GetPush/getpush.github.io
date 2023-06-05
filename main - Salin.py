import os
import datetime
import signal
import socket
import mimetypes
import zipfile
import subprocess
from flask import Flask, request, send_file, jsonify
from werkzeug.utils import secure_filename
from gevent.pywsgi import WSGIServer
from colorama import Fore, Style

app = Flask("botstart")
port = None
app.access_history = []
http_server = None

def find_available_port():
    s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    port = 8080
    while True:
        try:
            s.bind(('localhost', port))
            break
        except OSError:
            port += 1
    s.close()
    return port

def get_real_path(path):
    return os.path.join(os.getcwd(), path)

def is_file_in_zip(zip_file, path):
    with zipfile.ZipFile(zip_file, 'r') as z:
        return path in z.namelist()

def is_file_outside_zip(path):
    return not os.path.isfile(path)

def is_directory_outside_zip(path):
    return not os.path.isdir(path)

def send_file_from_zip(zip_file, path):
    password = b'langsungimport'  # Mengubah password menjadi bytes

    with zipfile.ZipFile(zip_file, 'r') as z:
        try:
            file_data = z.read(path, pwd=password)
            return file_data
        except KeyError:
            return f"File '{path}' not found in the zip."

def send_file_from_disk(path):
    try:
        with open(path, 'rb') as f:
            file_data = f.read()
            return file_data
    except IOError:
        return f"File '{path}' not found."

def get_file_mimetype(path):
    mime_type, _ = mimetypes.guess_type(path)
    return mime_type

@app.route('/')
def home():
    client_ip_address = request.headers.get('X-Forwarded-For', request.remote_addr)
    print(f"Client IP address: {client_ip_address}")

    return send_file_from_zip('botstart.zip', 'page/home.html')

@app.route('/access-history')
def access_history():
    return jsonify(app.access_history)

@app.route('/<path:path>')
def serve_file(path):
    if is_file_in_zip('botstart.zip', path):
        file_data = send_file_from_zip('botstart.zip', path)
        if file_data.startswith(b'PK'):  # Menyaring file zip
            return "File not found."
    elif is_file_outside_zip(path) or is_directory_outside_zip(path):
        file_data = send_file_from_disk(get_real_path(path))
    else:
        return "File not found."

    mime_type = get_file_mimetype(path)
    response = app.make_response(file_data)
    response.headers.set('Content-Type', mime_type)
    return response

def stop_server(signal, frame):
    global http_server
    if http_server is not None:
        http_server.stop()
        print(f"{Fore.GREEN}Server stopped{Style.RESET_ALL}")
    sys.exit(0)

import sys

# Fungsi untuk menampilkan log
def log(message):
    print(message)
    sys.stdout.flush()  # Memastikan output segera ditampilkan di terminal

# Contoh penggunaan log
log(" - success... 🚬")
log(" - subscribe channel YouTube Toppay Official")

if __name__ == '__main__':
    port = find_available_port()
    signal.signal(signal.SIGINT, stop_server)
    signal.signal(signal.SIGTERM, stop_server)
    http_server = WSGIServer(("0.0.0.0", port), app)
    print(f"{Fore.GREEN}Server running on {Fore.BLUE}http://localhost:{port}{Style.RESET_ALL}")
    print(f"{Fore.GREEN}Server running on {Fore.BLUE}http://{socket.gethostbyname(socket.gethostname())}:{port}{Style.RESET_ALL}")

    if 'RENDER' in os.environ:
        http_server.serve_forever()
    else:
        http_server.serve_forever()

