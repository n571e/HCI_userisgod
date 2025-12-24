from flask import Flask, render_template
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

@app.route('/')
def index():
    """主页路由 - 显示幻灯片演示"""
    return render_template('index.html')

@app.route('/pdf')
def pdf_viewer():
    """PDF阅读页面 - 展示论文原文"""
    return render_template('pdf_viewer.html')

@app.errorhandler(404)
def not_found(error):
    """404错误处理"""
    return render_template('404.html'), 404

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
