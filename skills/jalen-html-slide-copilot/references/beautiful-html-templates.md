# Beautiful HTML Templates Integration

`beautiful-html-templates` is a MIT-licensed HTML slide template library. It should improve Jialun's slide taste and layout selection, but it must not override Shopee template constraints when the deck is a Shopee-style internal business deck.

## Installation Record

- Repository: `https://github.com/zarazhangrui/beautiful-html-templates`
- Installed for inspection: `/private/tmp/beautiful-html-templates`
- License observed: MIT
- Template count observed: 34
- Key files inspected: `AGENTS.md`, `index.json`, selected `template.json`, selected `design.md`

Do not copy the full repository into the vault by default; it is about 66 MB and mostly preview screenshots. Store distilled rules here and clone temporarily again when a full external-template deck is needed.

## What To Borrow

- Match a template by occasion, mood, formality, density, and scheme before designing.
- Use template `design.md` as a design-token source, not just visual inspiration.
- Generate or inspect a title-slide preview before committing to a strong visual system when the user is choosing among styles.
- When a required layout is missing, extend the chosen system with the same fonts, palette, spacing rhythm, decorative vocabulary, chrome, and component grammar.
- Prefer a closed visual system per deck; do not mix pieces from many templates.

## What To Borrow For Shopee HTML Templates

Use the library as a structure translator:

- `Blue Professional`: borrow evidence-panel rhythm, metric rows, low-shadow executive polish, and density control.
- `Signal`: borrow source-to-output sequencing, restrained chrome, hairline timeline logic, and "one signal per slide" discipline.
- `Raw Grid`: borrow traceability tables, visible grid alignment, and audit matrices; soften the border weight for Shopee.
- `Long Table`: borrow long sequence / ledger-row pacing for action maps, QA checklists, and repeatable workflow recipes.

Do not borrow:

- External palette systems such as cobalt, antique gold, rust paper, or brutalist black as Shopee deck defaults.
- External Google Fonts for Shopee internal decks when ShopeeFont or Arial fallback is already available.
- Heavy decorative systems, paper texture, black offset shadows, or editorial dark surfaces unless the deck is explicitly non-Shopee.

## Shopee Constraint

For Shopee-style HTML slides, the base remains:

- 16:9 white canvas.
- Official Shopee logo icon or verified brand mark.
- Shopee orange key-message title and rule.
- Arial/ShopeeFont-compatible business typography.
- Centered `Private & Confidential` and right-bottom page number.
- Consulting-style structure: claim first, evidence second.

Use `beautiful-html-templates` only as a refinement layer:

| Need | Template Inspiration | How To Adapt Without Drifting |
|---|---|---|
| Polished internal review | `Blue Professional` | Borrow soft-tinted evidence panels and quiet density; recolor to Shopee orange / neutral, keep Shopee frame. |
| AI signal / intelligence flow | `Signal` | Borrow disciplined chrome, hairline rules, and source-to-output sequencing; avoid dark editorial palette unless explicitly requested. |
| Dense tables / traceability | `Raw Grid` | Borrow grid discipline and visible structure; soften border weight to Shopee business deck standards. |
| Long process or checklist | `Long Table` | Borrow numbered pacing and program-like sequence; avoid all-rust palette and oversized poster typography. |

## Anti-Patterns

- Do not ask the user to pick from external template moods for every small Shopee deck edit; use the library internally unless a new deck direction is requested.
- Do not paste a full external template aesthetic over an existing Shopee deck.
- Do not introduce Google Fonts from an external template into a Shopee internal deck unless the user explicitly wants a non-template visual direction.
- Do not replace Shopee orange with cobalt, gold, rust, or neon accents just because a borrowed template uses them.
- Do not copy decorative systems such as paper grain, brutalist borders, or dark editorial textures into Shopee decks unless they serve the specific message and still pass Shopee reference comparison.

## Default Selection For PM OS / AI Workflow Shares

For PM OS Workbench and similar internal AI workflow shares, use Shopee template fidelity first, then borrow:

- `Blue Professional`: card density, soft evidence panels, calm executive rhythm.
- `Signal`: precise source / judgment / output chain and restrained annotations.
- `Raw Grid`: table/grid alignment discipline for audit or traceability slides.

Avoid high-personality templates (`8-bit-orbit`, `pink-script`, `playful`, `retro-zine`, poster styles) unless the user explicitly asks for a non-corporate visual concept.

## Local Shopee Translation Example

`Reports/shopee-html-template-real-assets.html` is the local conversion example. It keeps the official Shopee frame while translating selected `beautiful-html-templates` ideas:

- Cover: official logo + Shopee office photo, close to the inspected Google Slides cover rhythm.
- Calibration slide: Google Slides screenshots as visual reference, with verified local assets beside them.
- Standard content slide: `Blue Professional` evidence panels recolored to Shopee orange / neutral.
- Campaign slide: real Campaign KV as the visual object, with explicit usage boundaries.
- Workflow slide: `Signal` source-to-output sequencing translated into AI / MCP / Skill / Codex / HTML deck.
- Matrix slide: `Raw Grid` and `Long Table` discipline translated into a softened Shopee table and tracker.
