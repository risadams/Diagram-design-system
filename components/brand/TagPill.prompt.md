Tags, categories, diagram-type filters.

```jsx
{['architecture','process','layers','er'].map((t, i) => (
  <TagPill key={t} index={i} onClick={() => setType(t)} active={type === t}>{t}</TagPill>
))}
```

Text always uses the deep variant of its accent so 12px stays AA on paper. Never fill the blob past 0.3.
