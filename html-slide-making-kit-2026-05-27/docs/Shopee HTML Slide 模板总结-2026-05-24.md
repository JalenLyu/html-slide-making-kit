---
type: report
topic: shopee-html-slide-theme
created: 2026-05-24
status: draft
---

# Shopee HTML Slide 模板总结

## 结论

这次读到的三类素材可以共同支撑一个 Shopee 风格的 HTML slide 体系，但不建议追求“一键完整复制 PPT”。更稳的方向是：

- 用 Google Slides 模板做视觉标定和 layout 参考。
- 用 Shopee Design 作为品牌素材、字体和官方模板来源。
- 用 HTML theme 沉淀长期可复用的页面骨架、组件和质量检查规则。

第一阶段目标应该是 **Shopee HTML Slide Theme + Layout Library + QA Rubric**，先不做完整 Google Slides 导入器。

## 已读素材

| 来源 | 链接 | 主要价值 | 建议用途 |
|---|---|---|---|
| Shopee Slide Template | https://docs.google.com/presentation/d/1nGnINg_lhIBACvURIv4w_ZeYugCtGqX_/edit?slide=id.p18#slide=id.p18 | 正式业务汇报模板，结构完整，咨询式表达明显 | HTML slide 基础主题和业务汇报 layout |
| Slide Training Deck | https://docs.google.com/presentation/d/16rA88ECE38Rsrvl50uf3Ir6DjGVQc4H5lTYSisCbGww/edit?slide=id.g342e8268875_0_26#slide=id.g342e8268875_0_26 | Slide 设计规范、正反例、质量检查规则 | 生成后 QA rubric / lint 规则 |
| Shopee Design Templates | https://shopee.design/download#templates | 官方品牌资产、字体、logo、模板入口 | Brand tokens 和素材库入口 |

## 模板 1：Shopee Slide Template

定位：正式业务汇报 / 项目汇报 / 管理咨询式 deck。

读到的结构：

- Cover
- Executive Summary
- Context and Objectives
- Background Facts and Data
- Findings and Discussion Points
- Conclusion and Next Steps
- Checklist for PowerPoint Document
- 多个 Section Tracker 页面

视觉特征：

- 16:9 白底画布。
- 左上角 Shopee icon。
- 标题使用 Shopee orange，标题下有细橙色横线。
- 页脚中间是 `Private & Confidential`，右下是页码。
- 正文以黑色/深灰为主，bullet marker 用橙色。
- 页面更偏“结论 + 证据”的咨询式结构，不是营销页风格。

可沉淀成 HTML layout：

- `cover`
- `executive-summary`
- `section-tracker`
- `context-objectives`
- `chart-with-insight`
- `findings-list`
- `conclusion-next-steps`
- `checklist`

## 模板 2：Slide Training Deck

定位：slide 设计培训 / 质量标准 / 正反例讲解。

读到的结构：

- Agenda
- Storylining
- SCR framework
- WWWH framework
- Pyramid Principle
- Slide design principles
- Positive / negative examples
- Practice and refined examples

核心规则：

- 标题应该传达 key message，而不只是 topic。
- 页面内容需要支持标题结论。
- 读者应能在 30 秒内理解主信息。
- 页面阅读顺序应符合从左到右、从上到下。
- 字号不要过小，推荐最低约 10pt 等效尺寸。
- 数据页需要 takeaway，不只是放图表。
- 颜色、对齐、边距、bullet 层级要一致。

可沉淀成 QA rubric：

- `title-has-message`
- `one-key-message-per-slide`
- `evidence-supports-title`
- `visual-hierarchy-clear`
- `font-size-readable`
- `footer-and-page-number-present`
- `palette-within-shopee-theme`
- `chart-has-takeaway`
- `layout-follows-reading-order`

## Shopee Design 下载页

已看到的相关素材入口：

- Brand Guideline
- Logo
- Typography
- Mascot
- Templates
- Icon Library
- Illustration Library
- Image Library
- Shopee PPT Internal / External
- ShopeePay / ShopeeFood / SPX / SeaBank 等业务线 PPT 模板

字体入口包括：

- ShopeeFont
- Noto Sans CJK
- Roboto

当前建议：

- 如果只做 HTML slide theme，先使用 `Arial, sans-serif` 兜底，保持和现有 Google Slides 模板一致。
- 如果后续能拿到 ShopeeFont 授权文件，再升级为正式 brand font。
- Shopee Design 的 Source File 暂时不自动下载，等确定集成范围后再处理。

## HTML Slide Theme 抽象

### Brand Tokens

| Token | 建议值 | 用途 |
|---|---|---|
| `--shopee-orange` | `#EE4D2D` | 主标题、强调、关键线条 |
| `--shopee-orange-2` | `#FF6600` | bullet、辅助强调 |
| `--text-primary` | `#111111` | 正文 |
| `--text-muted` | `#808080` | 页脚、辅助说明 |
| `--bg-canvas` | `#FFFFFF` | slide 背景 |
| `--accent-navy` | `#1F3A78` | 图形辅助色 |
| `--accent-brick` | `#B03A2E` | 图形辅助色 |
| `--accent-tan` | `#FCE5CD` | training deck callout / 框架块 |

### Global Frame

每一页默认包含：

- 16:9 canvas。
- 左上角 Shopee icon。
- 顶部 key message title。
- 标题下方 orange rule。
- 底部居中 `Private & Confidential`。
- 右下页码。

例外：

- Cover 页可以弱化 orange rule。
- Section divider 可以放大 section number / section title。
- Practice / example 页可以增加批注层。

### Layout Library

优先做这些 layout：

| Layout | 适合内容 | 关键要求 |
|---|---|---|
| `cover` | 标题、日期、团队 | 大标题清晰，品牌露出明确 |
| `executive-summary` | 结论摘要 | 最多 3-5 个主点，每点有明确 implication |
| `section-tracker` | 章节导航 | 当前章节高亮，其他章节弱化 |
| `two-column` | 背景 + 目标 / 问题 + 方案 | 左右信息量平衡 |
| `chart-with-insight` | 指标、趋势、对比 | 标题写 takeaway，图表服务结论 |
| `findings-list` | 多个发现点 | 编号清晰，每点有证据 |
| `framework-flow` | SCR / WWWH / Pyramid | 信息流向可读，不堆文字 |
| `venn-or-overlap` | 多因素关系 | 图形辅助概念，不替代解释 |
| `checklist` | 规范、验收项 | 分组明确，可逐项检查 |
| `before-after-review` | 正反例、改稿前后 | 批注明确，避免页面过载 |

## Google Slides 读取方案

### 当前可用路径

Chrome / Google Slides HTML view 已经可以直接读取：

- slide 文本
- 页面顺序
- 可见 layout
- 主要字体
- 主要颜色
- 页脚和页码样式

这个路径不需要用户先把 PPT 保存到本地，适合做人工辅助的模板分析和初版 theme 设计。

### 后续自动化路径

Google Slides API 可以读取：

- `presentations.get`
- masters / layouts / slides
- page elements
- images
- speaker notes
- page thumbnail

但当前本机 `gws` OAuth token 报 `invalid_grant`，需要重新执行 `gws auth login` 后才能稳定使用 API。API 路径适合后续做自动抽取，不是第一阶段阻塞项。

### 保真策略

| 方式 | 保真度 | 可维护性 | 建议 |
|---|---:|---:|---|
| 直接用 thumbnail / screenshot 当背景 | 最高 | 低 | 只适合少量高保真复刻页 |
| API 抽取 page elements 再转 HTML | 中高 | 中 | 后续自动化阶段再做 |
| 手工沉淀 Shopee HTML theme | 中 | 高 | 第一阶段优先 |
| Theme + layout + QA rubric | 中高 | 最高 | 推荐主路线 |

## 推荐执行顺序

1. 建立 Shopee HTML slide theme tokens。
2. 实现 global frame：logo、title、orange rule、footer、page number。
3. 先做 5 个核心 layout：cover、executive-summary、section-tracker、chart-with-insight、checklist。
4. 把 training deck 规则转成 QA checklist。
5. 用两份 Google Slides 模板截图做视觉对照，调 spacing、font size、title hierarchy。
6. 再决定是否接 Google Slides API 自动读取。

## 暂不做

- 不直接编辑原 Google Slides。
- 不自动下载 Shopee Design Source File。
- 不做完整 PPT / Google Slides 到 HTML 的通用转换器。
- 不把原 PPT 逐页硬编码成 HTML。

## 后续集成问题

下一步讨论 HTML slide / slice 集成时，需要确认：

- 当前 HTML slide 生成器是什么技术栈：纯 HTML、Slidev、Reveal.js，还是自研。
- 样式是全局 CSS theme，还是每页 inline style。
- 是否需要导出为图片 / PDF / PPTX。
- 是否需要从 Google Slides URL 自动读模板。
- 是否允许使用 ShopeeFont、logo、icon 等本地/远程资产。
