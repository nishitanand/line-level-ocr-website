#!/bin/bash

echo "🚀 Starting Line-Level OCR Research Paper Website..."
echo "================================================================"

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found!"
    echo "Please run this script from the website directory."
    exit 1
fi

# Try different methods to start the server
echo "📍 Current directory: $(pwd)"
echo ""

# Method 1: Python 3 HTTP server
if command -v python3 &> /dev/null; then
    echo "✅ Python 3 found. Starting server..."
    echo "🌐 Website will be available at: http://localhost:8000"
    echo "💡 Press Ctrl+C to stop the server"
    echo ""
    python3 -m http.server 8000
else
    echo "❌ Python 3 not found. Please install Python 3."
    exit 1
fi 