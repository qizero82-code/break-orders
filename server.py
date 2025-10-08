#!/usr/bin/env python3
"""
Server HTTP semplice per testare l'app PWA
Uso: python server.py
Poi apri: http://localhost:8000
"""

import http.server
import socketserver
import os
import webbrowser
from pathlib import Path

PORT = 8000

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        # Aggiungi headers per evitare cache
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

def main():
    # Cambia directory alla cartella del progetto
    project_dir = Path(__file__).parent
    os.chdir(project_dir)
    
    with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
        import socket
        hostname = socket.gethostname()
        local_ip = socket.gethostbyname(hostname)
        
        print(f"🚀 Server avviato su:")
        print(f"   💻 Desktop: http://localhost:{PORT}")
        print(f"   📱 Mobile:  http://{local_ip}:{PORT}")
        print(f"📁 Servendo files da: {project_dir}")
        print("🔧 Headers no-cache attivati")
        print("⏹️  Premi Ctrl+C per fermare")
        
        # Apri automaticamente il browser
        webbrowser.open(f'http://localhost:{PORT}')
        
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\n👋 Server fermato")

if __name__ == "__main__":
    main()
