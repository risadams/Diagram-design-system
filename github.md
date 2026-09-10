repo: cathrynlavery/diagram-design
branch: main
path: skills/diagram-design

## Last sync
date: 2026-09-10T15:52:00Z
### Updated in this project
- Built the Ris Ink client profile from references/style-guide.md (semantic roles, type table, node treatments)
- Followed profiles.md for the profile header format and marker-based resolution
- Reused assets/example-architecture.html geometry for the gallery's architecture figure
- Brand values read from risadams/vs-ris BRAND.md and risadams/obsidian-ris-ink theme.css

## Screen map
| Screen / file | Built from |
|---|---|
| profiles/ris-ink.md | skills/diagram-design/references/style-guide.md, profiles.md |
| ui_kits/diagram-gallery/ArchitectureFigure.jsx | assets/example-architecture.html, references/output-spec.md |
| ui_kits/diagram-gallery/LayerStackFigure.jsx | references/type-layers.md |
| ui_kits/diagram-gallery/FlowchartFigure.jsx | references/type-flowchart.md, profiles.md (resolution order) |
| ui_kits/diagram-gallery/TerminalFigure.jsx | references/primitive-terminal.md |
| components/diagram/Annotation.jsx | references/primitive-annotation.md |
| components/brand/*, tokens/* | risadams/vs-ris BRAND.md; risadams/obsidian-ris-ink theme.css |
