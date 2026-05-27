# HTML Slide Making Kit

一个 HTML slide 制作包：包含可直接打开的 Shopee 风格 HTML 模板、带 product motion 的示例 deck，以及可复用的 Codex slide skills。

## Included Examples

### `shopee-html-template-real-assets.html`

一个基于真实 Shopee 风格资产的 HTML slide 模板。

它用于展示如何把 logo、字体、配色、图片和常见 PPT 版式转成浏览器可打开的 HTML slide。

### `pm-os-workbench-product-motion-example.html`

一个完整的 product-motion 示例 deck。

它用一个个人工作台案例演示：如何把工具方法、产品界面、点击路径、输出结果和讲述文案组合在同一个 deck 里。

### `index.html`

一个简单的入口页，适合用于公开预览或本地预览。

## Skills

这个包同时包含几组可复用的 Codex skills：

- `skills/frontend-slides`：生成零依赖 HTML slides，处理 viewport、动效和基础结构。
- `skills/shopee-html-slides`：沉淀 Shopee 风格 slide 的视觉规则和 QA 标准。
- `skills/product-demo-motion`：把产品点击、聚焦、结果反馈做成 slide 内 product motion。
- `skills/imagegen`：生成概念图、说明图和其他位图视觉资产。
- `skills/html-slide-copilot`：沉淀 slide 文案偏好、审美规则、打包检查和迭代习惯。

## Recommended Starting Point

打开 `index.html`，先看两个示例：

1. `Shopee HTML Template`：理解视觉基线和模板结构。
2. `Product Motion Example`：理解如何把产品界面和动作链路做成演示型 slides。

之后可以从现有 HTML 复制一页，替换标题、正文、资产和动效模块，逐步形成自己的 slide deck。

## Repository Structure

```text
.
├── index.html
├── shopee-html-template-real-assets.html
├── pm-os-workbench-product-motion-example.html
├── assets/
├── docs/
├── skills/
└── slide-2026-05-25-ai-workflow-concept.png
```

## Design Intent

这套包的核心原则是：

- 先讲清楚 slide 的主信息，再做视觉。
- 优先使用真实资产，不用随意生成的装饰图替代品牌元素。
- 产品演示要表现真实动作链路：点击了什么、触发了什么、结果落在哪里。
- 文案要服务听众理解，避免把作者自己的制作思路写进 slide。
- 每次迭代后把可复用的审美判断、文案偏好和检查项沉淀回 skill。
