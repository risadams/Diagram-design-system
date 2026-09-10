# UI kit — Diagram gallery

The surface a Diagram Design user actually looks at: a figure, its page furniture, and a
way to flip between skins.

| File | What it is |
|---|---|
| `index.html` | Interactive gallery — figure switcher (tag pills), Ink Paper / Ink Parchment toggle, sticky translucent bar |
| `ArchitectureFigure.jsx` | `type-architecture` in the Ris Ink skin. Zone, focal origin, annotation, margin note, legend strip |
| `LayerStackFigure.jsx` | `type-layers` — five bands, one focal layer, direction indicator in the left margin |
| `FlowchartFigure.jsx` | `type-flowchart` — ovals for start/end, diamonds for decisions, merge dot, one accent branch |
| `TerminalFigure.jsx` | The opt-in terminal skin: parchment CLI chrome, everything mono, one rose dot |

All four compose the published components (`DiagramFrame`, `DiagramNode`, `DiagramArrow`,
`DiagramZone`, `DiagramLegend`, `Annotation`, `MarginNote`, `TerminalWindow`) rather than
re-implementing geometry.

## Notes on fidelity

- Geometry follows the shipped examples: `viewBox 0 0 1000 480`, 40px outer margin, legend
  hairline at y=404, every coordinate divisible by 4.
- The terminal figure ignores the theme toggle on purpose — the terminal palette is a
  fixed second skin, not part of light/dark inversion.
- Paper grain lives on the page wrapper, never inside the SVG, so an exported vector
  stays clean.
