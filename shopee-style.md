# Shopee Style Reference

## Brand Tokens

```css
:root {
  --shopee-orange: #EE4D2D;
  --shopee-orange-2: #FF6600;
  --text-primary: #111111;
  --text-muted: #808080;
  --bg-canvas: #FFFFFF;
  --accent-navy: #1F3A78;
  --accent-brick: #B03A2E;
  --accent-tan: #FCE5CD;
  --rule-color: #EE4D2D;
  --footer-color: #808080;
  --font-main: Arial, sans-serif;
}
```

## Typography

- Use ShopeeFont if the user provides authorized font files.
- Otherwise use `Arial, sans-serif`, matching the inspected Google Slides templates.
- Use orange for the key-message title.
- Use black or near-black for body text.
- Use muted gray for footer, page numbers, and secondary labels.
- Avoid very small text; keep important content at roughly 10pt equivalent or larger.

## Global Frame

Default slide frame:

- 16:9 white canvas.
- Top-left Shopee brand mark area.
- Key-message title near the top, usually Shopee orange.
- Thin orange horizontal rule below the title.
- Footer center: `Private & Confidential`.
- Page number at bottom right.

Exceptions:

- Cover pages may use a larger title and less visible rule.
- Section tracker pages may emphasize the active section with an orange band.
- Practice/review pages may include red, green, or annotation colors when explaining positive and negative examples.

## Visual Tone

- Business-report, consulting-style, clean, direct.
- Prefer structured evidence over decorative visuals.
- Keep whitespace and alignment strict.
- Use orange sparingly for emphasis, not as a full-page background.

## Table Component

Tables in Shopee decks use orange headers with light row separators. This is the standard pattern:

```css
table {
  width: 100%;
  border-collapse: collapse;
  font-size: clamp(9px, 0.92vw, 12px);
  line-height: 1.35;
}

th {
  color: #fff;
  background: var(--shopee-orange);
  padding: clamp(7px, 0.85vw, 10px) clamp(7px, 0.9vw, 11px);
  text-align: left;
  font-weight: 800;
  border: 1px solid rgba(255, 255, 255, 0.35);
}

td {
  padding: clamp(6px, 0.72vw, 8px) clamp(7px, 0.85vw, 10px);
  border: 1px solid var(--line);
  background: #fff;
  vertical-align: middle;
}

td:first-child { font-weight: 800; }
td.num, th.num { text-align: right; font-variant-numeric: tabular-nums; }
```

**Row variants** for data tables:
```css
tr.selected td { background: #fff3cc; font-weight: 800; }
tr.total td { background: #fff8e7; border-top: 2px solid var(--shopee-orange); font-weight: 800; }
td.latency-pass { color: var(--green-text); background: #edf8f0; font-weight: 800; }
```

## Horizontal Bar Chart

For regional or categorical percentage distributions without external charting libraries:

```css
.bar-row {
  display: grid;
  grid-template-columns: clamp(28px, 3vw, 38px) 1fr clamp(42px, 4.6vw, 60px);
  gap: clamp(8px, 1vw, 10px);
  align-items: center;
  font-size: clamp(10px, 1vw, 13px);
  padding: clamp(4px, 0.7vw, 8px) 0;
}

.bar-track {
  height: clamp(13px, 1.5vw, 18px);
  border-radius: 999px;
  background: #edf1f5;
  overflow: hidden;
}

.bar-fill {
  height: 100%;
  border-radius: inherit;
  background: var(--shopee-orange);
}

.bar-fill.blue { background: var(--navy-2); }

.bar-value {
  color: var(--ink);
  font-weight: 800;
  text-align: right;
  font-variant-numeric: tabular-nums;
}
```

HTML structure — bars need explicit `style="width:X%"` on `.bar-fill`.
Use a separator row for the aggregate line:
```html
<div class="bar-row" style="margin-top:...; border-top:1px solid var(--line); padding-top:...;">
```

## Structured Recommendation Card

For systematic Problem → Action → Effect recommendations in a three-column grid:

```css
.ops-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: clamp(14px, 1.8vw, 20px);
}

.ops-card {
  border: 1px solid var(--line);
  border-radius: var(--radius);
  background: #fff;
  padding: clamp(16px, 1.8vw, 22px);
}
```

Each card uses an inline `<table>` with three rows — Problem (muted gray), Action (orange), Effect (green) — to create a scannable structure without long paragraphs.
