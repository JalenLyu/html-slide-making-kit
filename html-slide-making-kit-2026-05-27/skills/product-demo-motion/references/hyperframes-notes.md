# HyperFrames Notes for Product Demo Motion

Use these notes when a product demo block may be rendered as video later.

## What to Reuse

- Treat HTML as the source of truth.
- Make animations seekable: finite durations, deterministic keyframes, stable DOM.
- Use `data-start`, `data-duration`, and `data-track-index` on motion clips.
- Prefer wrappers for opacity or transform when the media element itself may be lifecycle-managed.
- Keep composition layers explicit: base image, dim layer, cursor, focus lens, result card.

## What Not to Copy Blindly

- Do not require HyperFrames for slide preview. The default output should still work as normal HTML/CSS.
- Do not add video export steps unless the user explicitly asks for MP4/GIF.
- Do not make every motion GSAP-based. CSS is enough for one-chain product demos.

## CSS Animation Contract

Use:

```css
.pdm-demo * {
  animation-fill-mode: both;
}

@media (prefers-reduced-motion: reduce) {
  .pdm-demo * {
    animation: none !important;
  }
}
```

Avoid:

- infinite render-critical animations
- hover/focus/scroll triggers
- layout property animation for moving camera effects
- late DOM insertion for elements that should be visible in exported frames

## Product Demo Timing

One clean 8-second chain is usually enough:

| Time | State |
| --- | --- |
| 0.0s-1.4s | full product context |
| 1.4s-2.4s | cursor moves to verified target |
| 2.4s-3.0s | click feedback |
| 3.0s-4.6s | camera/lens pushes into target module |
| 4.6s-6.8s | result surface appears and holds |
| 6.8s-8.0s | return or settle |

