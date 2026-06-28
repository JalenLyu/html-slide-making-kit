# User Preferences

Update this file whenever Jialun gives correction that should influence future slide work.

## Stable Preferences

- Default explanation language is Chinese, but deck content should be English unless requested otherwise.
- For Shopee product workflow decks, prioritize logical structure and useful information over decorative design.
- Use the user's saved UAT/product HTML pages as visual truth. Do not drift into approximate redraws.
- Follow historically calibrated Shopee HTML/PDF slide references strongly, not just color tokens.
- Use the transparent Shopee bag icon in the title/frame when the reference template uses it.
- Product workflow decks should feel like feature walkthroughs, not business report summaries.
- For feature-intro decks aimed at users, lead with what the user can do, what they can see, and how they decide the next step; avoid platform-governance framing unless the audience needs it.
- When explaining bad cases for Prompt Management, frame them as observed by the local team. Session ID and Node ID are used to restore the model's real online context, not as a Regional-dev-provided artifact.
- Do not overstate Regional Guideline. It is one editable prompt component, so describe concrete change triggers such as tone or wording issue, local SOP missed, and repeated case pattern without implying it controls the full prompt flow.
- Avoid navy/blue report tables for workflow explanations; use workflow cards, operation panels, and decision/status cards.
- For a final operating checklist, a compact table is acceptable when it carries more information more clearly than a timeline.
- Mark screenshots with numbered badges when it clarifies structure. Keep marker size modest and avoid covering UI labels.
- Product screenshots should default to full visibility inside their slide frame. Do not use automatic cover/crop behavior unless the crop is intentional and documented.
- Screenshot frames should match the evidence type, not always the slide ratio. Keep the slide canvas 16:9, but use wider frames for full pages, less-wide frames for drawers/forms/previews, and vertical frames only for genuinely vertical assets.
- Prefer annotated screenshots over verbose explanatory bullets.
- Keep information density efficient for configuration users: enough to self-read, not enough to feel like a PRD dump.
- Store task-specific docs beside the source pages so future iterations do not start from scratch.
- Slide navigation dots should follow the calibrated HTML template: right-side vertical lightweight dots. Do not turn them into a bottom-left horizontal progress bar unless explicitly requested.
- For HTML decks that will be shared as a single file, keep a separate editable source file and generate a self-contained share file with inline CSS and data-URI images. Never ask users to share an HTML file that depends on sibling `slide-kit/` or `assets/` folders unless the whole folder is zipped.

## Recurring Corrections To Prevent

| User Feedback Pattern | Future Behavior |
| --- | --- |
| "页面内容脱离真实资产了" | Rebuild from saved UAT/browser captures and scan for derived/mock references. |
| "template 引用的对吗" | Read actual HTML/PDF templates before choosing layout or styling. |
| "标注错位，大小不合适" | Validate markers in rendered screenshots and avoid covering text/buttons/status. |
| "有没有使用 frontend slide skill" | Apply fixed-stage, density, hierarchy, and visual QA rules from `frontend-slides`. |
| "页面条变成横向的了" | Do not force all screenshots to 16:9; declare frame ratio by content type and verify rendered contact sheets. |
| "页面滑动的点状条横向了" | Use right-side vertical navigation dots; active state changes color only and should not stretch into a progress pill. |
| "蓝色表格更适合汇报" | Replace report tables with operation panels, workflow cards, or status cards. |
| "还是回到之前表格的形式吧，信息更多更清晰" | Use a compact checklist table for dense final operating guidance; avoid forcing timeline layouts when the user needs more scannable detail. |
| "先保证内容结构合理" | Re-check content spine before visual polish. |
| "主要是视角有问题，这个是给使用者看的" | Rewrite from the user workflow perspective: bad case, edit Regional Guideline, preview real context, automatic evaluation, apply or refine. |
| "这个不是由regional dev提供的bad case" | Use local-team observed bad cases as the starting point and describe Session ID / Node ID as runtime-context restore inputs. |
| "HTML 分享给别人打开是纯文本" | Diagnose missing CSS/assets first; deliver a self-contained HTML file as the obvious share artifact and keep the dependency-based source file separately named. |

## Taste Defaults For This Deck Type

- Canvas: 16:9, white or very light warm background, Shopee orange as structural accent.
- Visual basis: real product screenshots.
- Structure: one key claim per slide; one proof object per claim.
- Copy: concise, action-oriented, configuration-user language.
- Motion: restrained active-slide reveal; no decorative animation competing with screenshot evidence.
