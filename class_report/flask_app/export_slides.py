#!/usr/bin/env python3
"""
将网页PPT每页渲染为图片

使用 Playwright 自动化浏览器来截取每张幻灯片。
需要先安装依赖:
    pip install playwright
    playwright install chromium

使用方法:
    1. 先启动 Flask 应用: python app.py
    2. 在另一个终端运行: python export_slides.py

导出的图片将保存在 ./slides_images/ 目录下
"""

import asyncio
import os
from pathlib import Path

try:
    from playwright.async_api import async_playwright
except ImportError:
    print("请先安装 playwright:")
    print("    pip install playwright")
    print("    playwright install chromium")
    exit(1)


# 配置
FLASK_URL = "http://localhost:5001"  # Flask 应用地址
OUTPUT_DIR = Path(__file__).parent / "slides_images"  # 输出目录
TOTAL_SLIDES = 20  # 总幻灯片数
VIEWPORT_WIDTH = 1920  # 视口宽度
VIEWPORT_HEIGHT = 1080  # 视口高度
WAIT_TIME = 500  # 每张幻灯片等待渲染时间(毫秒)


async def export_slides():
    """导出所有幻灯片为图片"""
    
    # 创建输出目录
    OUTPUT_DIR.mkdir(exist_ok=True)
    print(f"📁 输出目录: {OUTPUT_DIR}")
    
    async with async_playwright() as p:
        # 启动浏览器
        print("🚀 启动浏览器...")
        browser = await p.chromium.launch(headless=True)
        
        # 创建页面并设置视口
        page = await browser.new_page(
            viewport={"width": VIEWPORT_WIDTH, "height": VIEWPORT_HEIGHT}
        )
        
        try:
            # 访问演示页面
            print(f"🌐 访问 {FLASK_URL}")
            await page.goto(FLASK_URL, wait_until="networkidle")
            
            # 等待演示加载完成
            await page.wait_for_selector(".presentation-container")
            print("✅ 演示页面加载完成")
            
            # 隐藏导航控件，使截图更干净
            await page.evaluate("""
                // 隐藏导航控件
                const navControls = document.querySelector('.nav-controls');
                const progressBar = document.querySelector('.progress-bar');
                const indicators = document.querySelector('.slide-indicators');
                
                if (navControls) navControls.style.display = 'none';
                if (progressBar) progressBar.style.display = 'none';
                if (indicators) indicators.style.display = 'none';
            """)
            
            # 逐张截取幻灯片
            for slide_num in range(1, TOTAL_SLIDES + 1):
                print(f"📸 正在截取幻灯片 {slide_num}/{TOTAL_SLIDES}...")
                
                # 切换到指定幻灯片
                await page.evaluate(f"""
                    // 移除所有幻灯片的 active 类
                    document.querySelectorAll('.slide').forEach((slide, index) => {{
                        slide.classList.remove('active', 'prev');
                        if (index + 1 < {slide_num}) {{
                            slide.classList.add('prev');
                        }}
                    }});
                    
                    // 激活当前幻灯片
                    const currentSlide = document.querySelector('.slide[data-slide="{slide_num}"]');
                    if (currentSlide) {{
                        currentSlide.classList.add('active');
                    }}
                """)
                
                # 等待动画完成
                await page.wait_for_timeout(WAIT_TIME)
                
                # 获取当前幻灯片元素并截图
                slide_element = await page.query_selector(f'.slide[data-slide="{slide_num}"]')
                
                if slide_element:
                    # 截取整个页面（幻灯片全屏）
                    output_path = OUTPUT_DIR / f"slide_{slide_num:02d}.png"
                    await page.screenshot(path=str(output_path), full_page=False)
                    print(f"   ✅ 已保存: {output_path.name}")
                else:
                    print(f"   ❌ 未找到幻灯片 {slide_num}")
            
            print(f"\n🎉 完成! 共导出 {TOTAL_SLIDES} 张幻灯片到 {OUTPUT_DIR}")
            
        except Exception as e:
            print(f"❌ 错误: {e}")
            raise
        finally:
            await browser.close()


async def export_slides_as_pdf():
    """导出幻灯片为PDF（可选功能）"""
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page()
        
        await page.goto(FLASK_URL, wait_until="networkidle")
        
        pdf_path = OUTPUT_DIR / "presentation.pdf"
        await page.pdf(path=str(pdf_path), format="A4", landscape=True)
        
        print(f"📄 PDF 已保存: {pdf_path}")
        await browser.close()


if __name__ == "__main__":
    print("=" * 60)
    print("🖼️  网页PPT导出工具")
    print("=" * 60)
    print()
    print("确保 Flask 应用正在运行于 http://localhost:5001")
    print()
    
    asyncio.run(export_slides())
