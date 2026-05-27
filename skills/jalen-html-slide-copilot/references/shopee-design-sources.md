# Shopee Design Sources

Use this file before revising Shopee-style HTML slides. It records verified local assets and reference pages that have already been inspected, so future slide work does not rely on guessed brand marks or generic slide aesthetics.

## Verified Reference Sources

| Source | What Was Inspected | Local Evidence |
|---|---|---|
| `https://shopee.design/download#campaign%20kv` | Download page, Campaign KV category, source-file flow for `2025 12.12 Birthday Sale` | `Reports/assets/shopee-design/campaign-kv/2025-12-12-birthday-sale-16x9.png` |
| `https://shopee.design/download#logo` | Regional Logo components from API category `Logo > Regional > Shopee > Shopee` | `Reports/assets/shopee-design/logo/shopee-bag-mark.png`, `Reports/assets/shopee-design/logo/shopee-logo-reference.jpg`, `Reports/assets/shopee-design/logo/shopee-logo-en.png`, `Reports/assets/shopee-design/logo/shopee-logo-en-vertical.png` |
| `https://shopee.design/download#typography` | Regional Typography components, ShopeeFont 2026 zip and extracted TTF files | `Reports/assets/shopee-design/typography/ShopeeFont/OpenType-TT/*.ttf` |
| `Brand Asset Library > Regional > Icon Library > Management` | Official SVG icons for management surfaces | `Reports/assets/shopee-design/icons/management/*.svg` |
| `Brand Asset Library > Regional > Icon Library > Digital` | Official SVG icons for digital / platform surfaces | `Reports/assets/shopee-design/icons/digital/*.svg` |
| `Brand Asset Library > Regional > Illustration Library > Shopee > Team Functions` | Official Shopee teamwork / result illustrations | `Reports/assets/shopee-design/illustrations/team-functions/*.svg` |
| `Brand Asset Library > Regional > Image Library > Shopee > Office` | Official Shopee office photo material | `Reports/assets/shopee-design/image-library/office/shopee-logo-wall.jpg` |
| Shopee Slide Template Google Slides | Cover, executive summary, section tracker, checklist structure | `Reports/assets/shopee-design/reference-slide-template-*.png` |
| `beautiful-html-templates` | Installed to `/private/tmp/beautiful-html-templates` during 2026-05-26 session; MIT licensed; used as a template inspiration library | distilled in `beautiful-html-templates.md` |
| Local real-asset HTML template | Shopee frame translated to reusable HTML, using only verified assets above | `Reports/shopee-html-template-real-assets.html` |

## Asset Rules

- Use verified local Shopee assets instead of drawing fake logos or relying on memory.
- For Shopee business decks, prefer the official logo icon in the top-left frame and keep the orange title / rule / footer / page number structure close to the Google Slides template.
- Do not use `Reports/assets/shopee-design/logo/horizontal-logo.svg` as the primary Shopee logo; visual QA showed it renders as a Flash Sale logo-family asset.
- Do not use `Reports/assets/shopee-design/logo/logo-icon-orange.png` as the primary Shopee logo unless visually re-checked; current QA showed it reads as a Flash Sale-style speed mark, not the Shopee bag.
- Use `Reports/assets/shopee-design/logo/shopee-logo-reference.jpg` as the visually verified Shopee bag + wordmark reference. Crop it carefully when used as a small frame mark.
- In Shopee HTML decks, the default frame mark should be only the shopping bag icon. Use `Reports/assets/shopee-design/logo/shopee-bag-mark.png`; do not crop a larger logo with CSS background positioning. Do not let a full wordmark or logo block take its own line unless the slide is specifically a brand/reference page.
- Use official SVG icons and illustrations when a slide needs visual shorthand for source, tools, platform, audit, team output, or workflow. Avoid generic emoji or hand-drawn replacement icons in Shopee decks.
- Use the office photo only when the deck needs real Shopee brand presence, such as cover, divider, or reference slide. Crop it calmly; do not use it as every-page wallpaper.
- Use `ShopeeFont` when the local font files exist; fall back to `Arial, "Noto Sans SC", sans-serif` for Chinese coverage and portability.
- Treat Campaign KV assets as reference or full-bleed visual material, not as a default background for internal PM decks. They are high-saturation marketing visuals and can easily overpower a business-sharing deck.
- Keep downloaded source material under `Reports/assets/shopee-design/` unless a specific generated deck has its own asset folder.

## CSS Snippet

```css
@font-face {
  font-family: "ShopeeFont";
  src: url("assets/shopee-design/typography/ShopeeFont/OpenType-TT/ShopeeFont-Regular.ttf") format("truetype");
  font-weight: 400;
}

@font-face {
  font-family: "ShopeeFont";
  src: url("assets/shopee-design/typography/ShopeeFont/OpenType-TT/ShopeeFont-Bold.ttf") format("truetype");
  font-weight: 800;
}

:root {
  --font-main: "ShopeeFont", Arial, "Noto Sans SC", sans-serif;
}
```

## Visual Calibration Notes

- Google template cover: centered Shopee bag mark, large orange title, white canvas, strong bottom orange band.
- Standard content slide: logo icon at top-left, orange key-message title, orange horizontal rule, black body text, small orange square bullets, centered `Private & Confidential`, right-bottom page number.
- Section tracker: very sparse page; orange active row; large black section labels; no decorative card system.
- Campaign KV: uses saturated orange/yellow, oversized numeric hierarchy, blue promotion strip, and 3D retail props. Borrow energy and color contrast only when making campaign or marketing slides.
- Official icon library: good for small semantic markers in workflow and matrix slides; keep them at 32-48px and let the slide message, not icon variety, carry the page.
- Official illustration library: good for closing, team/process/result moments; one illustration per slide is usually enough.
