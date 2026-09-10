Wraps a diagram SVG in the Ris Ink page furniture — use it for every figure so the eyebrow, title and grain stay consistent.

```jsx
<DiagramFrame
  eyebrow="Architecture · Diagram Design"
  title="Content site in production"
  note="cache is the whole trick"
>
  <svg viewBox="0 0 1000 480" role="img" aria-labelledby="t d">…</svg>
</DiagramFrame>
```

- `theme="dark"` switches to Ink Parchment surfaces.
- `note` is the margin-note slot: at most one per figure, and never a label the reader needs.
- Keep the grain on the page, not in the SVG — exported vectors must stay clean.
