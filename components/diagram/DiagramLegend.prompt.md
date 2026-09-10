The legend strip that closes every figure.

```jsx
<DiagramLegend y={404} idPrefix="arch" items={[
  { label: 'Focal / origin', fill: 'rgba(203,1,98,0.08)', stroke: '#CB0162' },
  { label: 'Backend', fill: '#fffdf8', stroke: '#1a1614' },
  { label: 'Store', fill: 'rgba(26,22,20,0.05)', stroke: '#6b625a' },
  { kind: 'arrow', intent: 'link', label: 'HTTP request' },
  { kind: 'arrow', dashed: true, label: 'Return / async' },
]} />
```

Only describe treatments the figure actually uses. Keep it inside the bottom 60px band.
