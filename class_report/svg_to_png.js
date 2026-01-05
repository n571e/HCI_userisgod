const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function svgToPng(svgPath, pngPath) {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    
    // 读取 SVG 内容
    const svgContent = fs.readFileSync(svgPath, 'utf8');
    
    // 设置大视口
    await page.setViewport({ width: 2400, height: 4000, deviceScaleFactor: 2 });
    
    // 创建简单 HTML
    const html = `<!DOCTYPE html>
<html><head><meta charset="UTF-8">
<style>*{margin:0;padding:0;}body{background:white;}</style>
</head><body>${svgContent}</body></html>`;
    
    await page.setContent(html, { waitUntil: 'load', timeout: 60000 });
    
    // 等待一下确保渲染完成
    await new Promise(r => setTimeout(r, 1000));
    
    // 截图
    const svgElement = await page.$('svg');
    if (svgElement) {
        await svgElement.screenshot({ path: pngPath });
        console.log(`✓ ${svgPath} -> ${pngPath}`);
    } else {
        console.log(`✗ No SVG found in ${svgPath}`);
    }
    
    await browser.close();
}

async function main() {
    const files = [
        ['Social_RAG_Mind_Map.svg', 'Social_RAG_Mind_Map_browser.png'],
        ['Social_RAG_Mind_Map_CN.svg', 'Social_RAG_Mind_Map_CN_browser.png']
    ];
    
    for (const [svg, png] of files) {
        if (fs.existsSync(svg)) {
            await svgToPng(svg, png);
        }
    }
}

main().catch(e => console.error(e));
