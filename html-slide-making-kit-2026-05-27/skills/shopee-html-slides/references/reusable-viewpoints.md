# Reusable Viewpoints

Use this when user feedback on Shopee-style HTML slides may need to become a durable rule.

## Trigger

Run a short learning check when the user says:

- "以后", "默认", "我希望", "不太习惯", "不要", "可以执行", "优化 skill", or "提炼到 skill".
- A similar slide-style correction appears in two or more slide tasks.
- The output is accepted only after a style, interaction, logo, screenshot, or workflow correction.

Do not persist one-off content facts, temporary file paths, meeting-specific numbers, private links, or current-deck copy unless the user explicitly says they are reusable.

## Learning Check Output

Before editing the skill, produce a compact table:

| # | 用户反馈 | 判断 | 更新位置 | 是否写入 skill |
|---|---|---|---|---|
| 1 | <feedback> | <durable preference / one-off fact / unclear> | <file> | <yes/no/confirm> |

If the user already says "可以", "可以执行", "以后默认这样", or directly asks to optimize the skill, that counts as confirmation for durable updates. Otherwise ask before editing.

## Classification

| Type | Meaning | Primary target |
|---|---|---|
| Visual Preference | Color, logo, screenshot, typography, density, motion | `shopee-style.md`, `qa-rubric.md`, this file |
| Layout Preference | Demo-first, report-first, comparison, workflow, data page | `layouts.md`, this file |
| Workflow Preference | Use frontend-slides, browser QA, Google Slides read-only inspection | `SKILL.md`, `google-slides-read.md`, this file |
| Brand Constraint | Do not guess logos/assets; preserve Shopee frame; avoid fake brand marks | `shopee-style.md`, this file |
| One-off Fact | Current deck topic, exact screenshot path, meeting date, specific metric | Do not store in skill |

## Confirmed Preferences

- For internal team-sharing HTML slides, prefer pragmatic demo-first storytelling over explanatory narration: screenshots, UI-like panels, live-clickable modules, command/workflow chains, and subtle interaction/motion are better than long text about principles.
- When a logo or brand asset is not verified, do not invent or draw a fake logo. Use a plain text brand label, or omit the logo area if that makes the slide cleaner.
- For high-fidelity HTML slide work, use `frontend-slides` patterns for single-file HTML, viewport fitting, responsive checks, keyboard/wheel/touch navigation, and browser screenshot QA; use this skill as the Shopee style and brand layer.
- Do not add captions that only label obvious screenshots, such as "real capture" or "screenshot"; use captions only when they add interpretation or guide attention.
- Crop or zoom screenshots toward the audience-relevant working area. Remove distracting sidebars or unrelated chrome when the slide is about the central product/workflow surface.
- For operation demos, prefer visible cursor/click motion plus zoom/focus transitions over rectangular highlight boxes. The motion should show where attention moves and what changes after the action.
- Avoid crossfading between two full-page screenshots when the state change is subtle or visually similar; keep the base screenshot stable and introduce a localized overlay, popover, panel, or zoomed detail so the transition reads as one continuous operation.
- For product/workflow focus animations, start from the full-page context, show the click target, then enlarge the target module while dimming or blurring the surrounding page. This creates a clearer visual attention path than showing the module alone.
- Avoid hard red rectangles as focus frames in interaction demos. Prefer soft focus layers, subtle borders, shadows, dim/blur background treatment, and small accent labels so the transition feels like UI focus instead of annotation markup.
- The enlarged focus module must correspond to the actual clicked target or its direct resulting state. Do not click one UI element and enlarge an unrelated screenshot region; preserve cause and effect.
- Before making an interaction-effect animation, inspect the code relationship behind the UI: DOM/component, event listener, route/tab target, command runner, and output file/panel. The animation should explain that verified chain, not a guessed visual story.
- When code is available, use screenshot crops only as context. For the click result, rebuild the focused module from the actual DOM/state mutation when that makes the interaction clearer, such as badge changes, local write status, generated files, or hidden/removed cards.
- For Screen Studio-like product demos in HTML slides, use `product-demo-motion` as the focused module: full-page context, verified click target, camera push-in, dim/blur background, direct result surface, and optional HyperFrames-friendly timing attributes.
- Product demo motion should infer the page purpose before choosing what to click. If the message is "one-click action", click the concrete action button or command card; do not spend the main motion on navigation tabs or containers that merely reveal where the action lives.
- In pragmatic internal sharing, do not frame safety constraints such as "external systems are read-only" as the main selling point unless the audience explicitly needs governance detail; lead with productivity, aggregation, judgment flow, or DIY leverage.
- When presenting personal workflow tools, emphasize the transferable idea that code agents reduce customization cost and enable PMs to build bespoke workflows; avoid pitching the artifact as a universal product unless that is the actual goal.

## Write Rules

- Store the reusable rule, not the full slide text or current file path.
- Prefer updating this reference file or focused references over expanding `SKILL.md`.
- Keep rules concrete enough to change future output, but broad enough to survive a different deck topic.
- After editing, validate the skill structure and perform a narrow regression check against the correction that triggered the update.
