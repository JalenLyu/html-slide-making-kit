# Failure Mode Registry

Use this file to convert repeated user corrections into reusable prevention rules.

| Failure Mode | Detection | Prevention | Automation Status |
| --- | --- | --- | --- |
| Product UI is redrawn instead of captured | Final HTML/PPTX references derived/mock assets or screenshots do not match saved UAT pages. | Use `build-assets.mjs` capture pipeline; final deck may only reference `*-real.jpg`. | `qa-deck.mjs` checks derived/mock refs. |
| Historical template ignored | Header, icon, title rhythm, footer, or page number differs from calibrated template without reason. | Read template reference before editing; document intentional deviations. | Manual review via contact sheet. |
| Slide becomes a PRD dump | Dense bullets/tables explain implementation instead of user action. | Use content spine: claim, action, proof, update hook. | Manual story gate. |
| User-facing feature deck uses platform/governance viewpoint | Slide copy explains why the platform is controlled instead of what the user can do, see, and decide. | Rewrite around user workflow: bad case, edit Regional Guideline, preview real context, automatic evaluation, apply or refine. | `qa-deck.mjs` checks for How / user-value or next-step blocks; manual story gate still required. |
| Report styling used for workflow demo | Navy/blue table headers or dashboard-report visual language dominates. | Use operation cards, decision cards, and screenshot evidence. | `qa-deck.mjs` bans old navy color. |
| Timeline loses checklist detail | A final operating page uses a timeline but users need to compare stage, action, confirmation, and evidence in one view. | Use a compact checklist table for dense final guidance; reserve timelines for simple sequential storytelling. | Manual story gate. |
| Markers cover important UI | Number badge overlaps action text, status, input label, or table value. | Place markers in whitespace or next to target; use screenshot QA. | Manual visual review; future image heuristic possible. |
| Product screenshot is enlarged into a partial view | Screenshot frame uses default `object-fit: cover` or PPTX image fit `cover`, causing only a local crop to be visible. | Product screenshots default to `contain`; use explicit crop classes only for intentional zoom evidence. | `qa-deck.mjs` checks for unapproved `object-fit: cover` selectors in slide CSS. |
| Product screenshot appears tiny with excessive white frame | A 16:9 screenshot is placed in a tall or narrow frame, so `contain` preserves the image but wastes space. | Match screenshot frame ratio to the evidence type; use `screen-wide`, `screen-drawer`, `screen-form`, or `screen-tall` deliberately. | `qa-deck.mjs` checks visible `.screen-frame` ratio declaration and extreme ratios. |
| Product screenshot becomes a horizontal strip | All main screenshots are forced into a 16:9 frame even when the content is a drawer, form, preview panel, or dataset modal. | Keep the slide canvas 16:9, but declare screenshot container ratio by evidence type. Forms and preview panels should normally use `screen-form`, not the default wide frame. | `qa-deck.mjs` rejects undeclared main screenshot ratios. |
| Font too small or clipped | Text is unreadable or overflows cards at 1280x720. | Split content, shorten copy, increase panel size. | `qa-deck.mjs` checks clipping and small text warnings. |
| HTML and PPTX diverge | PPTX shows old layout/copy after HTML is changed. | Run `build-pptx.mjs` after HTML content changes and inspect contact sheet. | Manual plus generated contact sheet. |
| Skill stack skipped | Agent uses only one skill and misses stronger frontend/presentation rules. | Follow `SKILL.md` operating flow and record skipped layers. | Manual verification in `qa/verification.md`. |

## How To Add A Failure

1. Capture the exact user feedback phrase.
2. Add the failure mode and future behavior here.
3. If detectable by script, extend `qa-deck.mjs`.
4. If it changes taste or defaults, update `user-preferences.md`.
5. If it changes process order, update `SKILL.md` or `generation-contract.md`.
