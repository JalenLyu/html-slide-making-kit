# Google Slides Read Strategy

Use this only for read-only template inspection.

## Preferred Paths

1. Chrome or Google Slides HTML view for quick inspection of visible style, text, layout, fonts, and colors.
2. Google Slides API / `gws-slides` for structured extraction when authentication works.
3. Page thumbnails or browser screenshots for visual QA reference.

## API Notes

Useful Google Slides endpoints:

- `presentations.get`: title, page size, masters, layouts, slides, page elements, notes.
- `presentations.pages.getThumbnail`: visual thumbnail URL for a slide.

If `gws` reports `invalid_grant`, ask the user to refresh auth with `gws auth login` before relying on API extraction.

## Boundaries

- Do not directly edit Google Slides unless explicitly asked.
- Do not download Shopee Design source files unless the user confirms the asset and purpose.
- Do not inspect browser local/session storage on authenticated pages.
- Do not paste secrets, tokens, or private file URLs into generated output.

## Fidelity Guidance

- Highest visual fidelity: use a slide thumbnail or screenshot as a reference, or as a background only for small one-off reproductions.
- Best maintainability: extract common style and rebuild with reusable HTML/CSS layouts.
- Recommended default: build Shopee HTML theme first, then use screenshots as QA references.
