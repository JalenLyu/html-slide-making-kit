# HTML Slide Preferences

This file stores reusable presentation preferences for HTML slide work. Store rules that should affect future decks; do not store one-off content facts or current deck copy.

## Confirmed Defaults

- Treat HTML slides as editable product artifacts, not static screenshots: prefer reusable CSS/components, clear DOM structure, and browser-verifiable interaction.
- For business decks, keep a consistent frame: 16:9 canvas, strong key-message title, restrained body text, footer, and page number unless the user gives a stronger template.
- Internal and technical sharing decks should be pragmatic and demo-first: use screenshots, UI-like panels, workflow chains, live-clickable modules, and subtle motion instead of long principle narration.
- When a logo or brand asset is not verified, use a plain text label or omit the logo area; do not draw a fake logo.
- Crop or zoom screenshots toward the audience-relevant working area. Remove distracting sidebars or unrelated chrome when the point is the central product or workflow surface.
- Avoid captions that only label obvious screenshots. Captions should interpret, direct attention, or explain the implication.
- For interaction demos, show the actual cause-and-effect path: verified click target, visible cursor/click motion, camera push-in or focus transition, and the direct resulting state.
- Avoid hard red rectangles as focus frames. Prefer soft focus layers, subtle borders, shadows, dim/blur background treatment, and small accent labels.
- If the state change is subtle, keep the base screenshot stable and introduce a localized overlay, popover, panel, or zoomed detail instead of crossfading between two similar full-page screenshots.
- When code is available, inspect the DOM/component/event/route or command relationship before animating an interaction. Do not infer the result from visuals alone.
- Maintain a markdown design library at `references/design.md` and read it before visual slide work, following the frontend-design-skill pattern of explicit design taste rules instead of relying on the model's default aesthetics.
- For slides that explain reusable workflows or concepts, real project assets can be replaced with typical representative content. Preserve the artifact shape and realism, but avoid exposing private details or implying sample content is live business data.
- Keep sample or representative labels separate from the product/system name. Use a small badge such as `Sample data` in screenshot chrome or a corner; do not append representative labels to the product name.
- Prioritize PC 16:9 readability. At 1280x720, the main module should be inspectable and no slide-level content should feel cramped; remove secondary modules before shrinking text too far.
- For workflow sharing, introduce the method before the artifact: explain the knowledge base, tool entry points, agent loop, and validation path before showing the final UI.
- For concept explanations, prefer editable HTML diagrams when they need precise labels and QA. Use generated images for simple conceptual illustrations only when the asset can be saved into the workspace and the text does not need to be exact.
- When using generated concept images in slides, keep the image mostly text-free and use HTML for labels, captions, and exact terminology so the deck remains editable and readable.
- When a generated concept image is paired with explanatory text, link the two surfaces explicitly with numbered callouts or matching labels. Avoid a separate side list that does not map to the visual.
- Use direct, conclusion-first slide titles. Avoid "not X, but Y" framing in titles and key takeaway lines unless the contrast is truly the point.
- Prefer operational cause-and-effect wording over vague sequencing phrases. For method cards, state the condition and result directly.
- Remove throat-clearing phrases from titles. Start with the actual claim.
- When presenting an artifact after method slides, emphasize the product shape produced by the method. Do not reintroduce the artifact with generic "what it solves" framing when the audience already understands the product domain.
- When presenting AI-powered views, make the transformation explicit: which source material the agent reads, how it classifies or summarizes it, and what candidate output the user can confirm. Avoid describing only the static UI surface.
- When presenting Skills, include concrete job examples. Show the input material, the judgment or transformation, the candidate output, and why this differs from ordinary static buttons or workflow shortcuts.
- For validation slides, explain the purpose before showing evidence. Prefer a traceable chain of entry point, input material, AI/script processing, output file, and human confirmation over standalone metrics or OK tables.
- For closing or takeaway slides in method-sharing decks, shift from "my artifact" to "audience can reuse this method." Emphasize how others can define their own sources, AI jobs, confirmation boundaries, and skills to build tools that fit their work.
- In AI workflow sharing decks, avoid over-explaining product features. Frame UI screens as evidence for how AI is used: what input material is read, what judgment or transformation is performed, what candidate/report is produced, and where human confirmation happens.
- For template-calibration slides, avoid title copy that ends in a vague question-like phrase. Use direct declarative claims like "official template defines boundaries; external templates provide structure only".

## Shopee-Style Deck Preferences

- For Shopee-style business decks, keep the `shopee-html-slides` baseline: 16:9 white canvas, Shopee orange key-message title, orange rule, footer confidentiality text, and page number unless the user gives a stronger template.
- For Shopee-style deck work, compare against inspected Shopee template references and verified Shopee Design assets. It is fine to borrow design-system discipline from `beautiful-html-templates`, but keep the official Shopee frame, palette, logo, typography fallback, footer, and page-number conventions unless the user asks for a non-Shopee visual direction.
- For Shopee template slides, use one standalone shopping-bag icon as the brand mark and place it inline to the left of the slide title. Size it to visually match the title x-height, not as a tiny badge: about 40-44px for a 38px standard title, and about 60-64px for a 76px cover title. Do not add a Shopee wordmark or separate logo row unless the slide is explicitly a brand/reference page.

## Learning Rules

- A preference is durable when it changes future visual style, layout choice, storytelling structure, interaction pattern, source-material selection, or QA behavior.
- A detail is one-off when it is only about the current deck topic, exact wording, meeting date, current metric, temporary screenshot path, or private link.
- If durable feedback is approved by wording such as "以后默认", "可以", "继续", "优化 skill", or "自动迭代", update this file in the same task as the slide change.
- Update `../SKILL.md` only for workflow changes, such as a new target resolution rule, a new mandatory QA step, or a new source-of-truth path.
