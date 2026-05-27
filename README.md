# HTML Slide Making Kit

一个用于分享的 HTML slide 制作包：包含可直接打开的 Shopee 风格 HTML 模板、带 product motion 的示例 deck，以及可复用的 Codex slide skills。

这个包的主题是 **HTML slide 制作方法**。`pm-os-workbench-product-motion-example.html` 只是一个完整示例，用来演示如何把产品界面、点击路径、输出结果和讲述文案放进 HTML slides。

## What's Included

- `index.html`：GitHub Pages 首页，链接到模板和示例 deck。
- `shopee-html-template-real-assets.html`：基于真实 Shopee 资产的 HTML slide 模板。
- `pm-os-workbench-product-motion-example.html`：带 product motion 的完整示例 deck。
- `assets/shopee-design/`：模板和示例 deck 需要的本地图片、字体、图标和 KV 资产。
- `slide-2026-05-25-ai-workflow-concept.png`：示例 deck 使用的概念图。
- `skills/html-slide-copilot/`：通用 HTML slide 迭代、文案 QA、偏好沉淀和打包 skill。
- `skills/frontend-slides/`：零依赖 HTML slides 的基础生成、动效和 viewport fitting skill。
- `skills/shopee-html-slides/`：Shopee 风格 HTML slide 生成和 QA skill。
- `skills/product-demo-motion/`：产品动效 slide 的检查与实现 skill。
- `skills/imagegen/`：概念图、位图视觉资产和 reference image 生成 skill。
- `docs/`：模板学习和设计来源总结。

## Open Locally

直接打开：

```bash
open index.html
```

或者打开具体 deck：

```bash
open pm-os-workbench-product-motion-example.html
open shopee-html-template-real-assets.html
```

## GitHub Pages

把这个目录作为一个 GitHub repository 的根目录上传后，在 GitHub Pages 里选择：

- Source: `Deploy from a branch`
- Branch: `main`
- Folder: `/root`

发布后默认打开 `index.html`。

## Recommended Workflow

1. 用 `skills/frontend-slides/SKILL.md` 确定 HTML deck 的零依赖结构、动效和 viewport fitting。
2. 用 `shopee-html-template-real-assets.html` 作为视觉基线，再读取 `skills/shopee-html-slides/SKILL.md` 生成 Shopee 风格 slide。
3. 如果需要概念图或位图资产，读取 `skills/imagegen/SKILL.md`，生成后放回当前包的本地 assets。
4. 如果需要产品演示动效，读取 `skills/product-demo-motion/SKILL.md`，先确认点击目标、处理函数、输出文件和结果状态。
5. 用 `skills/html-slide-copilot/references/copywriting.md` 做文案 QA，避免把内部设计思路写进 slide。
6. 用浏览器检查 16:9 PC 投影比例，优先修掉文本溢出、模块拥挤和动效错位。

## Quick QA

示例 deck 已通过本地快速检查：

- HTML section / product motion structure check
- banned wording scan for known copy issues
- 1280x720 Chrome render overflow check on key slides
- browser console error check

如果你在本地修改 deck，可以重新运行：

```bash
node skills/product-demo-motion/scripts/validate-product-demo-motion.mjs pm-os-workbench-product-motion-example.html
```
