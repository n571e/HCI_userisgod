from flask import Flask, send_from_directory
import os

app = Flask(__name__)

# PDF文件路径
PDF_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'static', 'pdf')

@app.route('/')
def pdf_viewer():
    """直接展示PDF阅读页面 - 使用PDF.js渲染，无需浏览器插件"""
    return '''<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Social-RAG 论文阅读</title>
    <!-- PDF.js CDN -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
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
            padding: 0.8rem 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        .header-title {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .header-title h1 {
            font-size: 1.2rem;
            font-weight: 600;
        }
        .header-title .badge {
            background: rgba(255, 255, 255, 0.2);
            padding: 0.3rem 0.8rem;
            border-radius: 20px;
            font-size: 0.85rem;
        }
        .header-actions {
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }
        .header-actions a, .header-actions button {
            color: white;
            text-decoration: none;
            padding: 0.5rem 1rem;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.15);
            transition: all 0.3s ease;
            font-size: 0.9rem;
            border: none;
            cursor: pointer;
            font-family: inherit;
        }
        .header-actions a:hover, .header-actions button:hover {
            background: rgba(255, 255, 255, 0.3);
        }
        .page-info {
            background: rgba(0,0,0,0.3);
            padding: 0.4rem 1rem;
            border-radius: 20px;
            font-size: 0.9rem;
        }
        .pdf-container {
            flex: 1;
            overflow-y: auto;
            padding: 1rem;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }
        .pdf-page {
            background: white;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
            border-radius: 4px;
        }
        .pdf-page canvas {
            display: block;
            max-width: 100%;
            height: auto !important;
        }
        .loading {
            color: white;
            font-size: 1.2rem;
            padding: 2rem;
            text-align: center;
        }
        .loading .spinner {
            width: 40px;
            height: 40px;
            border: 4px solid rgba(255,255,255,0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 1rem;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        @media (max-width: 768px) {
            header { flex-direction: column; gap: 0.8rem; padding: 0.8rem 1rem; }
            .header-title h1 { font-size: 1rem; }
            .header-actions { flex-wrap: wrap; justify-content: center; }
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
            <span class="page-info" id="pageInfo">加载中...</span>
            <button onclick="zoomOut()" title="缩小">➖</button>
            <button onclick="zoomIn()" title="放大">➕</button>
            <button onclick="resetZoom()" title="适应宽度">📐</button>
            <a href="/download" title="下载PDF">⬇️ 下载</a>
        </div>
    </header>
    <div class="pdf-container" id="pdfContainer">
        <div class="loading">
            <div class="spinner"></div>
            <div>正在加载PDF...</div>
        </div>
    </div>

    <script>
        // 设置PDF.js worker
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        
        let pdfDoc = null;
        let scale = 1.5;
        const container = document.getElementById('pdfContainer');
        const pageInfo = document.getElementById('pageInfo');
        
        // 加载PDF
        async function loadPDF() {
            try {
                pdfDoc = await pdfjsLib.getDocument('/pdf/social_rag.pdf').promise;
                pageInfo.textContent = `共 ${pdfDoc.numPages} 页`;
                container.innerHTML = '';
                
                // 渲染所有页面
                for (let i = 1; i <= pdfDoc.numPages; i++) {
                    await renderPage(i);
                }
            } catch (error) {
                container.innerHTML = `
                    <div class="loading">
                        <div style="font-size: 3rem; margin-bottom: 1rem;">😕</div>
                        <div>PDF加载失败</div>
                        <a href="/download" style="display: inline-block; margin-top: 1rem; padding: 0.8rem 2rem; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; text-decoration: none; border-radius: 8px;">点击下载PDF</a>
                    </div>
                `;
                console.error('PDF加载错误:', error);
            }
        }
        
        // 渲染单页
        async function renderPage(pageNum) {
            const page = await pdfDoc.getPage(pageNum);
            const viewport = page.getViewport({ scale: scale });
            
            const wrapper = document.createElement('div');
            wrapper.className = 'pdf-page';
            wrapper.id = `page-${pageNum}`;
            
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            
            wrapper.appendChild(canvas);
            container.appendChild(wrapper);
            
            await page.render({
                canvasContext: context,
                viewport: viewport
            }).promise;
        }
        
        // 重新渲染所有页面
        async function rerender() {
            if (!pdfDoc) return;
            container.innerHTML = '<div class="loading"><div class="spinner"></div><div>重新渲染中...</div></div>';
            container.innerHTML = '';
            for (let i = 1; i <= pdfDoc.numPages; i++) {
                await renderPage(i);
            }
        }
        
        function zoomIn() {
            scale = Math.min(scale + 0.25, 3);
            rerender();
        }
        
        function zoomOut() {
            scale = Math.max(scale - 0.25, 0.5);
            rerender();
        }
        
        function resetZoom() {
            scale = 1.5;
            rerender();
        }
        
        // 启动加载
        loadPDF();
    </script>
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
