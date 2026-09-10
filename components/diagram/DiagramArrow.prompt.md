Connectors. Draw them before nodes so boxes sit on top of line ends.

```jsx
<ArrowDefs idPrefix="arch" />
<DiagramArrow idPrefix="arch" from={[168, 272]} to={[220, 272]} intent="link" label="https" />
<DiagramArrow idPrefix="arch" d="M 496,240 H 692 Q 700,240 700,232 V 224" label="read mdx" />
<DiagramArrow idPrefix="arch" from={[220, 288]} to={[168, 288]} dashed label="resp" />
```

`intent="accent"` is the one rose primary flow per figure. Labels get a paper mask rect so they don't sit on the line.
