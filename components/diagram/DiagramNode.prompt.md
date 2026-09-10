The node box — every architecture, flow, deployment and dependency figure is made of these.

```jsx
<svg viewBox="0 0 1000 480">
  <DiagramNode x={416} y={240} width={160} name="Astro Origin" sublabel="SSR + MDX" tag="orig" index="02" type="focal" />
  <DiagramNode x={628} y={320} name="Content CMS" sublabel="assets · og" tag="cms" type="store" />
</svg>
```

Types map 1:1 to the style guide's treatment table: `focal` (rose tint + rose stroke, 1–2 max), `backend` (paper-lift + ink), `store`, `external`, `input`, `optional` (dashed), `security` (dashed rose). Keep x/y/width/height divisible by 4.
