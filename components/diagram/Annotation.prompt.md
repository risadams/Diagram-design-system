Two marginal registers. `Annotation` points at something; `MarginNote` just says something.

```jsx
<Annotation text="structure IS the index" x={904} y={36}
  leader="M 820 44 Q 700 84 520 216" land={[520, 216]} />
<MarginNote text="this is the part that breaks" x={40} y={452} />
```

Italic + serif is load-bearing on `Annotation` — never italic mono. Caveat is only ever the `MarginNote`, capped at one.
