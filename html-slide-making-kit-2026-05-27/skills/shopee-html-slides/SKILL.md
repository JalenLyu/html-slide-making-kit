---
name: shopee-html-slides
description: Generate, adapt, and review Shopee-style HTML slides or slide decks. Use when the user asks to create HTML slides, Slidev/reveal.js/frontend slides, presentation pages, or deck previews that should follow Shopee company PPT templates, Shopee Design brand assets, Google Slides template references, business report decks, slide training rules, or Shopee-style QA checks.
---

# Shopee HTML Slides

## Purpose

Use this skill to turn content into Shopee-style HTML slides, or to review existing HTML slides against Shopee deck conventions. Treat it as a brand and presentation-quality layer on top of general HTML/Slidev/frontend slide generation.

## Core Workflow

1. Clarify the output target: pure HTML, Slidev, reveal.js, a frontend app, screenshots, PDF, or PPTX export.
2. Choose the closest Shopee layout from `references/layouts.md`.
3. Apply the style tokens and global frame from `references/shopee-style.md`.
4. When real Shopee Design or Google Slides references are available, use verified assets and screenshots as calibration before adding extra design treatment.
5. For interaction-effect slides, inspect the source relationship first: clicked DOM/component, event handler, route/tab target, command mapping, and output surface.
   If the slide needs camera-style product motion, use `$product-demo-motion` as the interaction module layer.
6. Generate or adapt the slide content with a message-first structure.
7. Run the checks in `references/qa-rubric.md` before calling the deck done.
8. If the user provides Google Slides links, use `references/google-slides-read.md` for read-only template inspection.
9. When the user gives preference feedback or says the output feels off, run the learning check in `references/reusable-viewpoints.md` before deciding whether to update the skill.

## Default Design Rules

- Use a 16:9 white canvas unless the user gives a stronger template.
- Include the Shopee-style frame by default: top-left brand mark area, orange key-message title, orange rule, centered `Private & Confidential`, and right-bottom page number.
- Prefer key-message titles over topic-only titles.
- Keep one main message per slide.
- Use charts, tables, diagrams, or short grouped bullets as evidence for the title.
- Keep colors within the Shopee palette unless the deck needs another business-line theme.
- For interaction demos, never infer the clicked target and result from visuals alone. Verify the code relationship first, then animate that actual cause-and-effect path.
- Do not directly edit Google Slides, Google Sheets, Confluence, or external brand sources unless the user explicitly asks and confirms the target.

## Reference Loading

- Read `references/shopee-style.md` whenever implementing visual style, CSS tokens, typography, frame, or brand colors.
- Read `references/layouts.md` whenever choosing slide templates or composing a deck structure.
- Read `references/qa-rubric.md` whenever reviewing a generated deck or before final delivery.
- Read `references/google-slides-read.md` only when the user gives Google Slides/PPT template links or asks to extract style from source decks.
- Read `references/reusable-viewpoints.md` when the user says "以后", "默认", "我希望", "不太习惯", "可以执行", or gives repeated slide-style corrections.
- If the package has `skills/html-slide-copilot/references/shopee-design-sources.md`, read it before using logos, ShopeeFont, Campaign KV, or downloaded Shopee Design assets.
- If the package has `skills/html-slide-copilot/references/beautiful-html-templates.md`, use it as a refinement guide when the user asks for stronger design sense or explicitly mentions `beautiful-html-templates`.
- If the package has `shopee-html-template-real-assets.html`, use it as the first local HTML template reference when the user asks to convert, start, or calibrate a Shopee HTML template with real assets.

## Integration Guidance

Use this skill as a layer, not a renderer replacement:

- For Slidev: map layouts to Vue/Markdown components and put Shopee tokens in the theme CSS.
- For frontend HTML slides: create reusable CSS classes/components for frame, title, tracker, callout, chart, and checklist blocks.
- For product operation demos: let `$product-demo-motion` own the verified click-to-result motion block, then wrap it with this skill's Shopee frame, title, and business narrative.
- For high-fidelity reference matching: compare browser screenshots against the source template; use thumbnails only as visual references unless the user explicitly wants background-image slides.
- For long-term maintainability: prefer reusable layouts and tokens over hard-coded per-slide coordinates.
