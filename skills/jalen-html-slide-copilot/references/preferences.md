# HTML Slide Preferences

This file stores reusable presentation preferences for Jialun's HTML slide work. Store rules that should affect future decks; do not store one-off content facts or current deck copy.

## Confirmed Defaults

- Treat HTML slides as editable product artifacts, not static screenshots: prefer reusable CSS/components, clear DOM structure, and browser-verifiable interaction.
- For Shopee-style business decks, keep the `shopee-html-slides` baseline: 16:9 white canvas, Shopee orange key-message title, orange rule, footer confidentiality text, and page number unless the user gives a stronger template.
- Internal team-sharing decks should be pragmatic and demo-first: use screenshots, UI-like panels, workflow chains, live-clickable modules, and subtle motion instead of long principle narration.
- Stable content should come from maintained vault sources such as `Projects/Portfolio/分享亮点素材.md` and project cards, not from ad hoc report scraping.
- When a logo or brand asset is not verified, use a plain text label or omit the logo area; do not draw a fake logo.
- Crop or zoom screenshots toward the audience-relevant working area. Remove distracting sidebars or unrelated chrome when the point is the central product/workflow surface.
- Avoid captions that only label obvious screenshots. Captions should interpret, direct attention, or explain the implication.
- For interaction demos, show the actual cause-and-effect path: verified click target, visible cursor/click motion, camera push-in or focus transition, and the direct resulting state.
- Avoid hard red rectangles as focus frames. Prefer soft focus layers, subtle borders, shadows, dim/blur background treatment, and small accent labels.
- If the state change is subtle, keep the base screenshot stable and introduce a localized overlay, popover, panel, or zoomed detail instead of crossfading between two similar full-page screenshots.
- When code is available, inspect the DOM/component/event/route or command relationship before animating an interaction. Do not infer the result from visuals alone.
- For personal workflow tools, lead with productivity, aggregation, judgment flow, and PM DIY leverage. Do not make governance/read-only safety the main selling point unless the audience needs it.
- Maintain a markdown design library at `references/design.md` and read it before visual slide work, following the frontend-design-skill pattern of explicit design taste rules instead of relying on the model's default aesthetics.
- For slides that explain reusable workflows or concepts, real project assets can be replaced with typical representative content. Preserve the artifact shape and realism, but avoid exposing private details or implying sample content is live business data.
- Keep sample or representative labels separate from the product/system name. Use a small badge such as `Sample data` in the screenshot chrome or corner; do not write labels like `PM OS · representative`.
- Prioritize PC 16:9 readability for current HTML slide iteration. At 1280x720, the main module should be inspectable and no slide-level content should feel cramped; remove secondary modules before shrinking text too far.
- For DIY workflow sharing, introduce the method before the artifact: explain the knowledge base, tool entry points, agent loop, and validation path before showing the final Workbench UI.
- For concept explanations, prefer editable HTML diagrams when they need precise labels and QA. Use image generation for simple conceptual illustrations only when the asset can be saved into the workspace and the text does not need to be exact.
- When using generated concept images in slides, keep the image mostly text-free and use HTML for labels, captions, and exact terminology so the deck remains editable and readable.
- When a generated concept image is paired with explanatory text, link the two surfaces explicitly with numbered callouts or matching labels. Avoid a separate side list that does not map to the visual.
- For PM OS Workbench tool-method introduction slides, prefer the annotated imagegen concept visual when available: use the generated workflow image as the main visual and add editable HTML callouts for Obsidian/source, MCP/CLI/Skill tools, Codex Agent, and Workbench output.
- Use direct, conclusion-first slide titles. Avoid "not X, but Y" framing in titles and key takeaway lines unless the contrast is truly the point.
- Prefer operational cause-and-effect wording over vague sequencing phrases such as "再谈". For method cards, state the condition and result directly.
- Remove throat-clearing phrases from titles, such as "关系可以这样看" or "这次分享重点是". Start with the actual claim.
- When presenting an artifact after method slides, emphasize the product shape produced by the method. Do not reintroduce the artifact with generic "what it solves" framing when the audience already understands the product domain.
- When showing Todo or Today views, avoid generic task-manager value propositions. Surface the PM-specific judgment layer: priority, waiting/sync status, source context, risk, comms, intel, and the decision that changes today's work.
- When presenting AI-powered Workbench views, make the transformation explicit: which local source material AI reads, how it classifies or summarizes it, and what candidate output the PM can confirm. Avoid describing only the static UI surface.
- When presenting Intel or AI HOT views, emphasize that favorite external websites can be connected into the workflow, aggregated into a local digest, and skimmed quickly in Workbench. Do not frame the slide only around read/unread or saved state.
- When presenting Skills, include concrete AI job examples. Show the input material, the AI judgment or transformation, the candidate output, and why this differs from ordinary static buttons or workflow shortcuts.
- For audit or validation slides, explain the purpose before showing evidence. Prefer a traceable chain of entry point, input material, AI/script processing, output file, and human confirmation over standalone metrics or OK tables.
- For closing or takeaway slides in method-sharing decks, shift from "my artifact" to "audience can reuse this method." Emphasize how others can define their own sources, AI jobs, confirmation boundaries, and skills to build products that fit their work.
- When a Workbench deck is revised after a native Workbench refactor, re-read the current plugin data contract and generated Workbench fallback before editing. The deck should mirror the real tab model, side-rail modules, action outputs, and source/fact/generated boundaries instead of carrying over an older UI structure.
- When remaking PM OS Workbench method-sharing decks, keep the talk centered on the reusable tool method. Present Workbench functions as artifacts of the source -> tool -> agent -> output -> confirm chain, and avoid design-rendering, rebuild/iteration, old-vs-new, and "not X but Y" framing.
- For PM OS Workbench sharing titles and opening narrative, make Codex the active subject: "using Codex to build a personal PM Workbench" and "how Codex achieved this workflow." Do not lead with abstract "tool method" wording in the main title.
- In Workbench method-sharing copy, write for the audience rather than the deck-making process. Avoid internal terms like "contract", "action map", or plugin-specific names unless immediately explained with "what it reads, what it runs, what it writes, and where PM confirms." Spell out MCP, CLI, and Skill with concrete examples on first use.
- For first-time team shares, present the current operating model directly. Do not mention refactors, version changes, trial-and-error, or old-vs-new comparisons unless the talk is explicitly about the build history.
- In PM OS Workbench first-share decks, keep the tool methodology as core content before product UI details: Obsidian as AI-readable Markdown knowledge base, Skynet MCP/CLI/Skill as tool layer, Codex as agent orchestrator, and Workbench as the productized artifact of that workflow.
- In AI workflow sharing decks, avoid over-explaining product features. Frame UI screens as evidence for how AI is used: what input material is read, what judgment or transformation is performed, what candidate/report is produced, and where human confirmation happens.
- When adding product motion to Workbench decks, animate verified action chains from current code: click target, handler or command, output file or status, and human confirmation surface. Prefer two to four focused scenes over generic screen pans.
- For Shopee-style deck work, actively compare against the inspected Shopee Google Slides template and verified Shopee Design assets. It is fine to borrow design-system discipline from `beautiful-html-templates`, but keep the official Shopee frame, palette, logo, typography fallback, footer, and page-number conventions unless the user asks for a non-Shopee visual direction.
- For template-calibration slides, avoid title copy that ends in a vague question-like phrase such as "借什么" or wraps into "再什么". Use direct declarative claims like "official template defines boundaries; external templates provide structure only".
- For Shopee template slides, use one standalone shopping-bag icon as the brand mark and place it inline to the left of the slide title. Size it to visually match the title x-height, not as a tiny badge: about 40-44px for a 38px standard title, and about 60-64px for a 76px cover title. Do not add a Shopee wordmark or separate logo row unless the slide is explicitly a brand/reference page.

## Learning Rules

- A preference is durable when it changes future visual style, layout choice, storytelling structure, interaction pattern, source-material selection, or QA behavior.
- A detail is one-off when it is only about the current deck topic, exact wording, meeting date, current metric, temporary screenshot path, or private link.
- If durable feedback is approved by wording such as "以后默认", "可以", "继续", "优化 skill", or "自动迭代", update this file in the same task as the slide change.
- Update `../SKILL.md` only for workflow changes, such as a new target resolution rule, a new mandatory QA step, or a new source-of-truth path.
