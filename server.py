import os
import ipaddress
import subprocess
import socket
import sys
import platform
import time
from datetime import datetime
import json
from flask import Flask, send_file, jsonify
from gevent.pywsgi import WSGIServer

app = Flask(__name__)

required_modules = ['flask', 'pathlib', 'os', 'ipaddress', 'subprocess', 'datetime', 'json', 'socket', 'cron', 'net', 'gevent']

def check_modules():
    for module_name in required_modules:
        try:
            __import__(module_name)
            print(f"Modul {module_name} sudah terpasang.")
        except ImportError:
            print(f"Modul {module_name} tidak ditemukan. Menginstal modul...")
            install_command = f"pip install {module_name}"
            subprocess.check_call(install_command, shell=True)
            print(f"Modul {module_name} berhasil diinstal.")

def get_open_command():
    platform_name = platform.system()
    if platform_name == 'Windows':
        return 'start chrome'
    elif platform_name == 'Darwin':
        return 'open -a "Google Chrome"'
    elif platform_name == 'Linux':
        if 'termux' in platform_name:
            return 'termux-open-url || xdg-open || sensible-browser || x-www-browser || gnome-open'
        else:
            return 'google-chrome || x-www-browser || gnome-open'
    return 'xdg-open'

@app.route('/')
def home():
    client_ip_address = request.headers.get('X-Forwarded-For', request.remote_addr)
    print(f"Client IP address: {client_ip_address}")
    return send_file(os.path.join(os.path.dirname(__file__), 'page', 'home.html'))

@app.route('/access-history')
def access_history():
    return jsonify(accessHistory)

def find_available_port(port):
    while True:
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind(('0.0.0.0', port))
            return port
        except OSError:
            port += 1

def reset_log():
    with open('log.txt', 'w') as file:
        file.write('')

if __name__ == '__main__':
    check_modules()
    port = 3000
    app.debug = True
    app.use_reloader = False
    accessHistory = []

    http_server = WSGIServer(('0.0.0.0', find_available_port(port)), app)
    http_server.serve_forever()
