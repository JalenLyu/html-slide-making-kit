# Shopee Slide QA Rubric

Run these checks before final delivery.

## Message

- The title states a key message, not only a topic.
- The slide has one primary takeaway.
- The evidence on the slide supports the title.
- The reader can understand the key point in about 30 seconds.

## Structure

- The scan path follows left-to-right and top-to-bottom reading.
- Related items are grouped visually.
- Bullets are short and hierarchical.
- Data pages include an interpretation or implication.
- Tracker pages clearly show the active section.

## Visual

- Shopee orange is used consistently for title, rules, active states, and emphasis.
- Body text is black or near-black.
- Footer and page number are present where expected.
- Alignment, margins, and spacing are consistent.
- Font sizes are readable; avoid tiny dense text.
- Colors stay within the Shopee palette unless annotations require exception colors.

## Implementation

- Use reusable CSS/classes/components for repeated elements.
- Avoid hard-coding every slide unless recreating a small one-off template.
- Verify generated HTML with screenshots when visual fidelity matters.
- For exported PDF/PPTX/image outputs, inspect the final artifact, not only the source HTML.
