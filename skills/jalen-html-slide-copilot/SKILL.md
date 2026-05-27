---
name: jalen-html-slide-copilot
description: Use when the user asks to create, revise, QA, or keep iterating HTML slides in `/Users/jialun.lv/Documents/jalen-vault`, especially Shopee-style HTML slide decks, `Reports/PM OS Workbench Team Share-*.html`, current-slide feedback, browser QA, reusable slide preference extraction, or updating this vault-owned slide skill.
---

# Jalen HTML Slide Copilot

## Role

This is the vault-owned overlay for Jialun's HTML slide work. Use it together with `shopee-html-slides`: that skill owns Shopee visual style and deck QA; this skill owns local target selection, source-material routing, current deck iteration, and reusable preference learning.

## Default Targets

- Work in `/Users/jialun.lv/Documents/jalen-vault`.
- If the user says "current slide" or "当前 slide", default to the newest `Reports/PM OS Workbench Team Share-*.html` unless the user gives another path.
- Treat `Reports/` HTML files and referenced PNGs as generated slide artifacts; do not edit old generated reports unless they are the explicit target.
- Use `Reports/Shopee HTML Slide 模板总结-2026-05-24.md` as the local summary of Shopee slide theme decisions.
- Use `Reports/shopee-html-template-real-assets.html` as the local reusable Shopee HTML template example when the user asks for a template, "templete", real-asset calibration, or stronger Shopee fidelity.
- Prefer stable slide source material from `Projects/Portfolio/分享亮点素材.md`, project cards, `Workbench.md`, and existing `Reports/reference-*.png` / `Reports/obsidian-*.png` assets.
- For visual design, layout, style, animation, or aesthetic feedback, read `references/design.md` before editing.
- For slide narrative, title wording, audience-facing PM copy, or copy feedback, read `references/copywriting.md` before editing.
- For Shopee fidelity, real brand assets, font use, or reference-template comparison, read `references/shopee-design-sources.md`.
- For stronger visual design beyond the base Shopee template, read `references/beautiful-html-templates.md` and borrow only compatible layout/tone patterns.

## Workflow

1. Resolve the target deck and state it before editing.
2. Read only the relevant slice of the HTML/CSS/JS, assets, and source notes needed for the requested change.
3. Apply the user's concrete slide change first.
4. For visual, interaction, or navigation changes, run browser QA on the local HTML file and check the actual rendered slide, not just the source.
5. Run the learning check when feedback contains "以后", "默认", "我希望", "不太习惯", "不要", "可以执行", "优化 skill", "提炼到 skill", or when the same correction appears across slide tasks.
6. Persist durable rules to `references/preferences.md`; update this `SKILL.md` only when the workflow itself changes.
7. Final response should list the slide file changed, any preference/skill file changed, and the verification performed.

## Reference Loading

- Read `references/design.md` for visual design, layout, typography, color, motion, or "审美" work.
- Read `references/copywriting.md` for slide titles, storyline, terminology translation, and copy QA whenever writing or revising slide text.
- Read `references/preferences.md` when deciding whether a user correction should become a durable default.
- Read `references/shopee-design-sources.md` when using Shopee logo, font, Campaign KV, or Google Slides template screenshots.
- Read `references/beautiful-html-templates.md` when the user asks to use `beautiful-html-templates`, asks for more design sense, or wants template-library learning.
- Read Shopee global references through `shopee-html-slides` when the deck must follow Shopee template conventions.

## Learning Check

Before writing a preference or skill update, classify the feedback:

| # | 用户反馈 | 判断 | 更新位置 | 是否写入 |
|---|---|---|---|---|
| 1 | `<feedback>` | durable preference / one-off fact / unclear | `references/preferences.md` or `SKILL.md` | yes / no / confirm |

If the user explicitly says "可以", "继续", "以后默认这样", "优化 skill", "提炼到 skill", or asks to automatically iterate the slide skill, treat durable slide-work preferences as approved. Do not store one-off deck copy, temporary paths, meeting dates, private links, or specific metric values unless the user says they are reusable.

## Editing Boundaries

- Do not directly edit Google Slides, Google Sheets, Confluence, Jira, Gmail, or Calendar.
- Do not invent brand assets, logos, file paths, or data sources.
- Do not make broad vault cleanup changes while editing a slide.
- Keep current-deck fixes in the current deck; keep reusable rules in this skill's references.

## QA Baseline

- For HTML source-only copy edits: inspect the changed fragment and run a quick syntax sanity check where practical.
- For copy-heavy edits: run the copy QA checklist in `references/copywriting.md` before final response.
- For CSS, layout, animation, navigation, or asset changes: open the HTML in the browser and verify desktop 16:9 rendering first, using 1280x720 as the minimum PC projection target unless the user specifies another ratio.
- Check that text does not overflow buttons, panels, or slide bounds; prefer smaller content blocks or slide splits over cramped text.
- Check keyboard/click navigation if the deck includes custom navigation.
