# Flask Web Presentation - Social-RAG

这是一个基于Flask框架的模块化网页演示应用，展示Social-RAG研究。

## 项目结构

```
flask_app/
├── app.py                    # Flask主应用
├── config.py                 # 应用配置
├── requirements.txt          # Python依赖
├── static/                   # 静态文件
│   ├── css/
│   │   ├── base.css         # 基础样式（CSS变量、重置、工具类）
│   │   ├── slides.css       # 幻灯片核心样式
│   │   ├── components.css   # UI组件样式
│   │   ├── animations.css   # 动画效果
│   │   └── fixes.css        # 响应式修复
│   └── js/
│       ├── navigation.js    # 导航逻辑
│       └── visualizations.js # 图表绘制
└── templates/               # HTML模板
    ├── base.html           # 基础模板（未使用）
    └── index.html          # 主页面（包含所有20个幻灯片）
```

## 快速开始

### 1. 安装依赖

```bash
cd d:\git\HCI_userisgod\class_report\flask_app
pip install -r requirements.txt
```

### 2. 运行应用

```bash
python app.py
```

应用将在 `http://localhost:5000` 启动。

### 3. 访问演示

在浏览器中打开 `http://localhost:5000`

## 架构特点

### CSS模块化
- **base.css**: CSS变量定义、重置样式、字体、通用工具类
- **slides.css**: 幻灯片容器、过渡动画、标题页布局
- **components.css**: 导航控件、卡片、时间轴、问题卡等UI组件
- **animations.css**: 关键帧动画、动画延迟类、响应式设计
- **fixes.css**: 特定幻灯片的布局修复（8、10、13、18页）

### JavaScript模块化
- **navigation.js**: 幻灯片切换、键盘导航、进度条、指示器
- **visualizations.js**: Chart.js图表绘制

### Flask特性
- 使用 `url_for()` 动态生成静态文件路径
- 易于部署和扩展
- 清晰的模板继承结构（可在未来扩展）

## 进一步优化建议

### 1. 拆分HTML幻灯片
目前所有20个幻灯片都在 `index.html` 中。进一步模块化可以：

```
templates/
└── slides/
    ├── slide_01_title.html
    ├── slide_02_toc.html
    ├── ...
    └── slide_20_conclusion.html
```

在 `index.html` 中使用Jinja模板包含：
```html
{% include 'slides/slide_01_title.html' %}
{% include 'slides/slide_02_toc.html' %}
...
```

### 2. 使用基础模板
修改 `index.html` 继承 `base.html`:

```html
{% extends 'base.html' %}
{% block content %}
    <div class="presentation-container">
        <!-- 所有幻灯片 -->
    </div>
{% endblock %}
```

### 3. 添加API路由
可以添加RESTful API路由用于:
- 获取单个幻灯片内容
- 管理演示配置
- 导出演示为PDF

### 4. 生产部署
```bash
# 使用Gunicorn
pip install gunicorn
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

## 与原版对比

| 特性 | 原版 (try2) | Flask版 (flask_app) |
|------|------------|---------------------|
| HTML文件 | 1个大文件 (40KB) | 1个文件（可拆分为20个） |
| CSS文件 | 1个文件 (32KB) | 5个模块化文件 (~15KB 总计) |
| JavaScript | 2个文件 (22KB) | 2个文件（保持不变） |
| 框架 | 静态HTML | Flask Web应用 |
| 可维护性 | 低 | 高 |
| 部署方式 | 静态托管 | Web服务器 |

## 技术栈

- **后端**: Flask 3.0.0
- **前端**: HTML5, CSS3, JavaScript ES6
- **图表**: Chart.js 4.4.0
- **字体**: System fonts (PingFang SC, Microsoft YaHei等)

## 许可证

本项目为学术演示用途。

## 作者

本重构由AI助手根据用户需求完成。
