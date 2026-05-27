# HTML Slide Design Library

Use this before creating or visually revising Jialun's HTML slides. It is a compact design library for improving the model's default visual taste without loading a large design system.

## Design Posture

- Build slides as crafted frontend surfaces, not exported PPT replicas.
- Keep the Shopee business-deck frame when relevant, but avoid letting every slide become the same orange-and-card layout.
- For Shopee-style work, start from verified Shopee assets and Google Slides reference screenshots before adding expressive design moves.
- Use one strong visual idea per slide: a focused product surface, a workflow chain, a structured comparison, a metric story, or a camera-style interaction.
- Prefer quiet, work-focused sophistication over marketing-page composition.
- Treat screenshots as material to compose with: crop, zoom, mask, annotate softly, or rebuild key modules when that communicates better.

## Anti-Generic Checks

Before finalizing a slide, check these failure modes:

- Too many rounded cards with similar weights.
- A layout that could fit any SaaS tool because it has no domain-specific object, workflow, screenshot, or artifact.
- Decorative gradients, blobs, or abstract shapes that do not explain the message.
- Text blocks that describe the UI instead of letting the UI or workflow demonstrate it.
- A one-note palette where every element is orange, beige, slate, or purple-blue.
- Motion that is present but not meaningful: movement should direct attention or reveal cause and effect.

## Layout Defaults

| Situation | Prefer | Avoid |
|---|---|---|
| Product workflow | Full-context screenshot + focused module + short implication | Long bullet list beside a tiny screenshot |
| Tool/value explanation | Command chain, before/after state, or source-to-output flow | Abstract principle slide |
| Personal PM workflow | Operating surface, local files, candidates, and confirmation loop | Universal-product pitch |
| Dense project facts | Table or matrix with one highlighted takeaway | Paragraph-heavy status slide |
| Interaction demo | Verified click target, camera push-in, direct resulting state | Fake red highlight rectangles |
| Architecture | Layered system map with source/fact/generated boundaries | Generic three-card architecture |

## Shopee Reference Fidelity

- The default Shopee deck should stay close to the inspected Google Slides template: white canvas, top-left logo icon, orange key-message title, orange rule, black body text, centered confidentiality footer, and right-bottom page number.
- Use official local assets from `Reports/assets/shopee-design/` when available: logo icon, horizontal logo, ShopeeFont, Campaign KV, and reference screenshots.
- Campaign KV assets are high-energy marketing material. Use them as visual proof, cover/campaign context, or color inspiration, not as a default background for PM/internal workflow decks.
- ShopeeFont can replace Arial for Latin headings and chrome; keep `Arial` / `Noto Sans SC` fallback because Chinese text may need broader glyph coverage.
- When borrowing from `beautiful-html-templates`, keep the Shopee frame and palette. Borrow structure, spacing rhythm, evidence-panel treatment, or preview workflow; do not import a foreign brand aesthetic wholesale.

## Typography

- Use a clear hierarchy: key-message title, evidence block, small annotation.
- Reserve hero-scale type for covers or takeaway slides only.
- For Shopee-style business slides, keep Arial-compatible rendering unless a verified brand font is available.
- For non-template exploratory slides, choose one distinctive heading face only if it improves the specific mood; keep body text plain and readable.
- Do not shrink text to fit a crowded slide. Split the slide or remove content.

## Color

- Shopee orange is an accent and title color, not a requirement for every surface.
- Pair orange with restrained neutrals and one secondary business color when needed.
- Use color to encode meaning: current step, changed state, risk, success, source, output.
- Avoid decorative palettes that make a PM/product deck look like a landing page.

## Composition

- Keep the first read path obvious: title -> main visual -> one implication.
- Align panels and screenshots to a stable grid; no casual floating elements.
- Use whitespace as structure, not emptiness. If a slide feels empty, add a more relevant artifact, not filler decoration.
- Do not nest cards inside cards. Use bands, columns, tables, or callout strips.
- If a screenshot is the hero object, make it large enough to inspect.

## Representative Assets

- Replace real project assets with typical representative content when the slide is about a reusable workflow, design pattern, operating model, or concept rather than evidence from a specific project.
- Representative content should preserve the shape of the real artifact: table density, status labels, UI hierarchy, workflow steps, card types, and signal/noise level.
- Make representative examples realistic but clearly non-sensitive: use neutral project names, sample task text, generic metrics, and anonymized screenshots or rebuilt UI modules.
- Keep the main product or system name clean. Put sample/representative/anonymized status in a separate badge, caption, or corner label rather than appending it to names like `PM OS`.
- Keep real assets only when they are needed as proof, a visual reference, or a source-of-truth screenshot. If kept, crop or mask distracting/private details.
- Do not present synthetic or representative assets as live business data. If ambiguity matters, label them as sample, representative, or anonymized.

## Motion

- Use motion for attention routing: full context -> click/focus -> result.
- Prefer 1-2 meaningful transitions over many small animations.
- Keep timings calm for internal business sharing: fast enough to feel responsive, slow enough to read.
- Respect reduced-motion handling when editing reusable CSS.

## QA Prompts

Ask these before delivery:

- What is the one sentence this slide proves?
- Which visual object proves it?
- Is the page specific to this product/workflow, or could it be pasted into any AI deck?
- Is there any text that can be replaced by a visual state, table, or flow?
- Does every accent color, shadow, crop, and animation have a job?
- At 1280x720, can the audience read the slide without zooming?
- For PC sharing, is the primary module comfortably inspectable before adding secondary modules?
