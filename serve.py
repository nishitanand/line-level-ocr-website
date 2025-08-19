#!/usr/bin/env python3
"""
Simple HTTP server for the Line-Level OCR research paper website.
Run this script to serve the website locally.
"""

import http.server
import socketserver
import webbrowser
import sys
import os
from pathlib import Path

def find_free_port(start_port=8000, max_attempts=50):
    """Find a free port starting from start_port."""
    import socket
    
    for port in range(start_port, start_port + max_attempts):
        try:
            with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
                s.bind(('localhost', port))
                return port
        except OSError:
            continue
    return None

def serve_website():
    """Serve the website locally."""
    # Change to the script directory
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    # Check if index.html exists
    if not Path('index.html').exists():
        print("❌ Error: index.html not found in current directory!")
        print(f"Current directory: {os.getcwd()}")
        print("Make sure you're running this script from the website directory.")
        return
    
    # Find a free port
    port = find_free_port()
    if port is None:
        print("❌ Error: Could not find a free port to serve the website.")
        return
    
    try:
        # Create server
        handler = http.server.SimpleHTTPRequestHandler
        httpd = socketserver.TCPServer(("", port), handler)
        
        print("🚀 Line-Level OCR Research Paper Website")
        print("=" * 50)
        print(f"✅ Server running at: http://localhost:{port}")
        print(f"📁 Serving from: {os.getcwd()}")
        print("🌐 Opening browser...")
        print("\n💡 Press Ctrl+C to stop the server")
        print("=" * 50)
        
        # Open browser automatically
        webbrowser.open(f'http://localhost:{port}')
        
        # Serve forever
        httpd.serve_forever()
        
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except Exception as e:
        print(f"❌ Error starting server: {e}")
    finally:
        if 'httpd' in locals():
            httpd.shutdown()

if __name__ == "__main__":
    serve_website() 