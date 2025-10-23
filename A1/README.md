# AI 群聊摘要助手 — 访谈材料

本目录包含：
- `interviews_presentation.tex`：演示稿（Beamer）
- `interviews_report.tex`：普通报告（ctexart）

## 构建（Windows，PowerShell）
建议安装 `TeX Live` 或 `MiKTeX`，并确保 `xelatex` 可用。

- 演示稿（Beamer）PDF：
```powershell
latexmk -xelatex -synctex=1 -interaction=nonstopmode -file-line-error .\interviews_presentation.tex
```

- 普通报告（ctexart）PDF：
```powershell
latexmk -xelatex -synctex=1 -interaction=nonstopmode -file-line-error .\interviews_report.tex
```

如出现中文字体缺失，可将源文件中的字体设置替换为系统可用中文字体（如 `Microsoft YaHei`）。
