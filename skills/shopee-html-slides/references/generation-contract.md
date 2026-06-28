# Shopee HTML Slide Generation Contract

Use this contract before editing HTML/PPTX for a Shopee product workflow deck.

## 1. Required Inputs

- Approved or historically calibrated Shopee slide reference.
- PRD or source document for narrative rules.
- Real product evidence: saved UAT HTML, browser captures, or source screenshots.
- Audience and density decision:
  - Product workflow intro: medium-density, reading-first, screenshot-led.
  - Executive summary: lower-density, claim-led, fewer screenshots.
  - Appendix/training: higher-density, one screen per slide allowed.

## 2. Source Priority

1. PRD: rules, status meanings, permissions, scope, lifecycle.
2. UAT HTML/screenshots: visual labels, states, page order, UI surfaces.
3. Figma: style and layout reference only when extractable.
4. Agent inference: allowed only for connecting text, never for product facts.

## 3. Story Gate

Before editing slides, update `content-spine.md` with:

- slide claim
- configuration-user action
- proof object
- update hook

Reject the deck structure if:

- a slide has no proof object,
- evidence does not support the title claim,
- the order does not match user workflow,
- appendix screens are driving the main story mechanically.

## 4. Template Gate

Before creating visual layouts:

- Read the calibrated HTML/PDF template.
- Identify title format, icon usage, rule line, footer, page number, canvas assumptions, and navigation behavior.
- Copy the component rhythm, not just colors.
- Do not introduce a new logo/header pattern unless the reference uses it.

## 5. Real Asset Gate

- Use captured screenshots or saved UAT HTML as the base for product UI.
- Do not redraw product screens from memory.
- Do not use `*-derived.*` assets in final deck references.
- Redact only non-essential private IDs/test emails.
- Keep raw captures in ignored QA folders and final annotated assets in `assets/screenshots/`.
- Product screenshots must default to full visibility: use `object-fit: contain` in HTML and `fit: "contain"` in PPTX export.
- Cropping is allowed only when the slide explicitly needs a zoomed evidence crop; mark the frame with a crop-specific class or document the crop in `slide-outline.md`.
- Screenshot frames should match the evidence type, not blindly force 16:9. Use 16:9 for full-page/wide captures, `screen-drawer` for drawer-like evidence, `screen-form` for forms/previews/dataset panels, and `screen-tall` only when the source is genuinely vertical.
- Every main `.screen-frame` must declare its ratio class. Do not place a form or drawer in a forced 16:9 frame when it turns the UI into a horizontal strip.

## 6. Layout Gate

- Prefer workflow cards, operation cards, decision cards, and annotated screenshot panels.
- Avoid report-style blue tables for product flow education.
- Use tables only when compact comparison is the clearest representation.
- Keep title as a complete key message, not only a section label.
- Use one main claim per slide.
- If a slide needs more than one large screenshot and a dense rule table, split it.
- Do not rely on CSS `object-fit: cover` to make screenshots fill a frame; it hides UI context and creates misleading partial screenshots.
- If screenshots look too small or too strip-like, fix the declared frame ratio or recapture/crop the source asset; do not solve it with automatic cover-cropping.

## 7. Annotation Gate

- Numbered markers should be 24-40 px depending on screenshot scale.
- Markers must not cover primary button text, important table values, or status labels.
- Explain markers in nearby cards or bands, not long screenshot labels.
- Do not layer HTML callouts over already-marked screenshots.
- Validate marker positions on rendered screenshots, not only source coordinates.

## 8. Typography Gate

- No viewport-scaled font sizes inside slides.
- No negative letter spacing.
- Avoid text below 11 px in HTML render unless it is incidental screenshot content.
- Button/card text must fit without clipping.
- Long labels should wrap intentionally or become shorter.

## 9. Build Gate

- HTML is canonical.
- PPTX should be generated from rendered HTML slide screenshots unless editability is explicitly required; this prevents HTML/PPTX content drift.
- QA artifacts must include HTML render screenshots and PPTX contact sheet.
- `source-map.md` must map slide claims to PRD sections and source screens.

## 10. QA Gate

Run:

```bash
NODE_PATH=/Users/jialun.lv/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules /Users/jialun.lv/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node prompt_mgmt/suggest_reply_intro/slide-kit/qa-deck.mjs
```

The final response should not claim completion unless:

- all referenced assets exist,
- no final deck image references `derived`, `mock`, or missing files,
- rendered checks pass at 1280x720 and 1600x900,
- images load,
- key elements do not overflow,
- text boxes do not clip,
- PPTX export and contact sheet are regenerated when PPTX is part of the deliverable.

## 11. Learning Gate

After any user correction:

- Update `user-preferences.md` if the feedback reflects taste, defaults, or recurring expectations.
- Update `failure-mode-registry.md` if the feedback names a preventable failure mode.
- Update `qa-deck.mjs` if the failure can be detected mechanically.
- Update this contract if the process order or quality bar changes.
- Record the change in `qa/verification.md` when it affects the current deck.
