from flask import Flask, send_from_directory
import os

app = Flask(__name__)

# PDF文件路径
PDF_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static', 'pdf')

@app.route('/')
def pdf_viewer():
    """直接展示PDF阅读页面"""
    return '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Social-RAG 论文阅读</title>
    <style>
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #1a1a2e;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
        }
        header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        .header-title {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .header-title h1 {
            font-size: 1.4rem;
            font-weight: 600;
        }
        .header-title .badge {
            background: rgba(255, 255, 255, 0.2);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.85rem;
        }
        .header-actions a {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.15);
            transition: all 0.3s ease;
            font-size: 0.9rem;
        }
        .header-actions a:hover {
            background: rgba(255, 255, 255, 0.3);
            transform: translateY(-2px);
        }
        .pdf-container {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: stretch;
            padding: 1rem;
        }
        .pdf-wrapper {
            width: 100%;
            max-width: 1200px;
            background: white;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
        }
        .pdf-wrapper iframe {
            width: 100%;
            height: calc(100vh - 100px);
            border: none;
        }
        @media (max-width: 768px) {
            header { flex-direction: column; gap: 1rem; padding: 1rem; }
            .header-title h1 { font-size: 1.1rem; }
            .pdf-wrapper iframe { height: calc(100vh - 160px); }
        }
    </style>
</head>
<body>
    <header>
        <div class="header-title">
            <h1>📄 Social-RAG: Retrieving from Group Interactions to Socially Ground AI Generation</h1>
            <span class="badge">CHI 2025</span>
        </div>
        <div class="header-actions">
            <a href="/download" title="下载PDF">⬇️ 下载PDF</a>
        </div>
    </header>
    <div class="pdf-container">
        <div class="pdf-wrapper">
            <iframe src="/pdf/social_rag.pdf" type="application/pdf"></iframe>
        </div>
    </div>
</body>
</html>'''

@app.route('/pdf/<path:filename>')
def serve_pdf(filename):
    """提供PDF文件"""
    return send_from_directory(PDF_DIR, filename)

@app.route('/download')
def download_pdf():
    """下载PDF文件"""
    return send_from_directory(PDF_DIR, 'social_rag.pdf', as_attachment=True)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5002, debug=True)
