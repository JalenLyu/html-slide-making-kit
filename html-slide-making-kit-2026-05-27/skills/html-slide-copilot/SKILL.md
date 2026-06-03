---
name: html-slide-copilot
description: Use when creating, revising, QAing, or packaging HTML slide decks, especially zero-dependency decks with reusable templates, browser-verifiable layout, Shopee-style business slides, product-motion demos, generated concept visuals, and reusable slide preferences.
---

# HTML Slide Copilot

## Role

This is a public, reusable overlay for HTML slide work. Use it together with:

- `frontend-slides` for zero-dependency HTML deck structure and viewport fitting.
- `shopee-html-slides` for Shopee-style business deck conventions.
- `product-demo-motion` for product click-path and output-result animations.
- `imagegen` for generated concept images or bitmap assets.

This skill owns target selection, source-material routing, copy quality, reusable preference learning, and packaging discipline.

## Default Targets

- Work in the current workspace unless the user gives a specific path.
- If the user says "current slide" or "当前 slide", resolve the newest relevant HTML deck in the current workspace, then state the target before editing.
- Treat HTML files, referenced images, local fonts, and local assets as one package; keep relative paths portable.
- Use `examples/`, `assets/`, `templates/`, and `docs/` when building a shareable kit.
- For visual design, layout, style, animation, or aesthetic feedback, read `references/design.md` before editing.
- For slide narrative, title wording, audience-facing copy, or copy feedback, read `references/copywriting.md` before editing.
- For Shopee fidelity, real brand assets, font use, or reference-template comparison, read `references/shopee-design-sources.md`.
- For stronger visual design beyond the base template, read `references/beautiful-html-templates.md` and borrow only compatible layout or tone patterns.

## Workflow

1. Resolve the target deck and state it before editing.
2. Read only the relevant slice of HTML/CSS/JS, assets, source notes, and skill references needed for the requested change.
3. Apply the user's concrete slide change first.
4. For visual, interaction, or navigation changes, run browser QA on the local HTML file and check the actual rendered slide, not just the source.
5. For product-motion slides, verify the click target, visible motion, handler/command relationship, output surface, and final result state.
6. Run the learning check when feedback contains "以后", "默认", "我希望", "不太习惯", "不要", "可以执行", "优化 skill", "提炼到 skill", or when the same correction appears across slide tasks.
7. Persist durable rules to `references/preferences.md`; update this `SKILL.md` only when the workflow itself changes.
8. For shareable kits, package the HTML, assets, examples, docs, and skills together, then validate relative references and zip integrity.

## Reference Loading

- Read `references/design.md` for visual design, layout, typography, color, motion, or aesthetic work.
- Read `references/copywriting.md` for slide titles, storyline, terminology translation, and copy QA whenever writing or revising slide text.
- Read `references/preferences.md` when deciding whether a user correction should become a durable default.
- Read `references/shopee-design-sources.md` when using Shopee logo, font, Campaign KV, or Google Slides template screenshots.
- Read `references/beautiful-html-templates.md` when the user asks to use `beautiful-html-templates`, asks for more design sense, or wants template-library learning.
- Read Shopee global references through `shopee-html-slides` when the deck must follow Shopee template conventions.

## Learning Check

Before writing a preference or skill update, classify the feedback:

| # | User feedback | Judgment | Update location | Write? |
|---|---|---|---|---|
| 1 | `<feedback>` | durable preference / one-off fact / unclear | `references/preferences.md` or `SKILL.md` | yes / no / confirm |

If the user explicitly says "可以", "继续", "以后默认这样", "优化 skill", "提炼到 skill", or asks to automatically iterate the slide skill, treat durable slide-work preferences as approved. Do not store one-off deck copy, temporary paths, meeting dates, private links, or specific metric values unless the user says they are reusable.

## Editing Boundaries

- Do not directly edit external docs, sheets, issue trackers, mail, calendars, or other live systems unless the user explicitly requests that integration.
- Do not invent brand assets, logos, file paths, or data sources.
- Keep current-deck fixes in the current deck; keep reusable rules in this skill's references.
- When preparing a public package, remove personal names, absolute local paths, private project references, internal links, and organization-specific workflow facts unless they are intentionally part of the example deck.

## QA Baseline

- For HTML source-only copy edits: inspect the changed fragment and run a quick syntax sanity check where practical.
- For copy-heavy edits: run the copy QA checklist in `references/copywriting.md` before final response.
- For CSS, layout, animation, navigation, or asset changes: open the HTML in the browser and verify desktop 16:9 rendering first, using 1280x720 as the minimum projection target unless the user specifies another ratio.
- Check that text does not overflow buttons, panels, or slide bounds; prefer smaller content blocks or slide splits over cramped text.
- Check keyboard/click navigation if the deck includes custom navigation.
- For packaged kits: validate referenced assets, run product-motion checks when applicable, open `index.html`, and test the zip archive.
