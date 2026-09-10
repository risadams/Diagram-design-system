# Ris Ink — a Diagram Design system

**Ink on parchment for [Diagram Design](https://cathrynlavery.github.io/diagram-design/).**
Diagram Design is a Claude skill that renders diagrams (architecture, flow, layers, ER,
charts, ~40 types) as self-contained HTML/SVG, driven entirely by one file:
`references/style-guide.md`. Change that file's tokens and every new figure inherits the
new skin without touching any type-specific logic.

This project is that skin, cut from the risadams.com identity — warm paper, saturated ink
accents, hairlines like pen strokes, and a handwritten register held in reserve. Light is
**Ink Paper**, dark is **Ink Parchment**.

Tagline it inherits: **Ship code. Stay human.**

## Sources this was built from

Read in full; nothing here is guessed.

| Source | What came from it |
|---|---|
| https://cathrynlavery.github.io/diagram-design/ · `github.com/cathrynlavery/diagram-design` | The system being skinned: `references/style-guide.md` (semantic roles, type ramp, node treatments, grid), `profiles.md` (profile file format and resolution), `output-spec.md` (size presets, safe areas), `primitive-annotation.md`, `primitive-sketchy.md`, `primitive-terminal.md`, `type-flowchart.md`, `type-layers.md`, `assets/example-architecture.html` |
| `github.com/risadams/vs-ris` → **BRAND.md** | The canonical risadams.com brand + style guide: full palette with contrast ratios, type stacks and scale, signature motifs, component recipes, motion, accessibility baseline, voice |
| `github.com/risadams/obsidian-ris-ink` (`theme.css`) | The applied ink-on-parchment surface set — paper/ink/border values in both modes, parchment-dark code blocks, dashed rules, callout-as-margin-note treatment, paper-grain overlay |
| `github.com/risadams/ris-theme` | Checked. It is an older, unrelated VS Code theme pair (`#011627` navy dark / `#FBFBFB` light) with no ink-on-paper vocabulary, so **nothing from it was carried in**. The ink identity lives in `vs-ris`, which `obsidian-ris-ink` is a port of. Flagged below. |
| https://risadams.com | The live implementation the brand guide describes (Docusaurus; `theme-color #9f1158`). No source repo was reachable, so all site values come from BRAND.md rather than scraped CSS. |

## The main artifact

`profiles/ris-ink.md` is a **drop-in Diagram Design client profile**: the complete body of
`style-guide.md` with Ris Ink values, plus the metadata header `profiles.md` expects.

```bash
mkdir -p ~/.diagram-design/profiles
cp profiles/ris-ink.md ~/.diagram-design/profiles/ris-ink.md
# then, in a session:  /diagram-design:profile load ris-ink
```

Or bind it to one repo with a `.diagram-design` marker containing `profile: ris-ink`.
See `profiles/README.md`. What it changes vs. the shipped skin, in one line each:

- palette → warm paper / ink / rose, `link` becomes teal
- fonts → Fraunces + JetBrains Mono + Caveat, **no sans register**
- series palette → the ink chorus (teal, plum, sepia, ochre, leaf)
- terminal skin → parchment-dark with a rose-soft accent
- texture → dot grid off, paper grain available at page level
- one added role → `margin-note` (Caveat), capped at one per figure

Sizes, the 4px grid, strokes, radii, node-treatment structure and every size preset are
unchanged, so all geometry verifiers and type references still apply.

---

## VISUAL FOUNDATIONS

**Colors.** Five paper values (`#faf6ef` page → `#d8c9ad` hairline) and four ink text values
tuned to exact ratios on paper: `#1a1614` 16.7:1, `#3a322c` 11.7:1, `#6b625a` 5.5:1,
`#776e65` 4.6:1 — that last one is the floor, never lighten it. Accents are ink washes:
rose `#CB0162` is the voice (links, focal nodes, emphasis, caret, selection); teal
`#1a5b6e`, plum `#6b3a6e` and sepia `#8a5a3c` are the chorus; ochre `#c48a1e` is scenery
only and fails text contrast on paper (`#8a5c00` is its AA-safe substitute). Dark mode
inverts paper (`#1a1614` → `#3a2d26`) and lifts rose to `#e24a8a` and teal to `#5ba3b8`,
because full rose only reaches 3.2:1 on dark paper. Full-strength accents are for text and
small marks; as backgrounds they appear at 0.08–0.30 opacity, blended `multiply` in light
and `screen` in dark. Two accents in one figure erases the focal signal — one is the rule.

**Type.** Three families and no fourth. Fraunces (variable) carries everything readable:
body at 18–19.5px / 1.65–1.70, display headings at 400–500 weight with tracking `-0.02em`
to `-0.03em`, line-height ~1.0, sized with `clamp()`, and
`font-variation-settings: "SOFT" 50–70, "WONK" 1` for the wonky optical character.
JetBrains Mono carries technical content — ports, commands, paths, dates, tags, eyebrows —
uppercase, tracked 0.06–0.10em, 12px minimum on the page (9px inside an SVG sublabel).
Caveat carries marginalia: 18–40px, rotated -1.5° to -3°, one or two per view, never a
label a reader must parse. Emphasised words inside headings go italic rose. Long articles
open with a ~5em italic rose drop cap. Root font size is `112.5%` in percent, never px.

**Backgrounds and texture.** Flat warm paper plus a fixed full-viewport fractal-noise grain
at 0.06 (light) / 0.09 (dark), `mix-blend-mode: multiply` / `screen`, `pointer-events:
none`. That overlay is what makes the page read as paper rather than `#faf6ef`. Optional
watercolor blobs — large `blur(70px)` circles at ~0.55 opacity in accent colors, drifting
on 20s+ loops — sit behind content, are decorative only, and stop under reduced motion.
No gradients as decoration, no photographic hero imagery in this system.

**Borders, corners, shadows.** Dashed hairlines (`1px dashed rgba(26,22,20,0.10)`) separate
content — list rows, sections, table body rows, optional nodes, return arrows, callout
leaders. Solid hairlines are structure and chrome only — navbar, footer, table header rule,
legend baseline, zone outlines. **There is no shadow system**: nothing casts a drop shadow.
Radii are small and unfussy — 2–4px on page chrome, 4/6/8px in diagrams (tags / node boxes
/ containers). The signature "container" is not a box at all: it's an offset watercolor
splash behind a figure.

**Cards.** No border, no background panel, no shadow. A card is an image or figure with an
accent splash offset behind it, a mono meta line, a serif title that turns rose on hover,
and a whole-card 4px lift. If a design needs a boxed card, it isn't this brand.

**Transparency and blur.** Used in exactly two places: the sticky navbar (translucent paper
gradient + `backdrop-filter: blur(8px)`, no shadow) and the decorative blobs. Never on
cards, never on modals-as-frosted-glass.

**Motion.** One easing curve: `cubic-bezier(.2,.6,.2,1)`. Entrances are ink bleeds —
fade + `blur(18px→0)` + slight rise over 1.4s, staggered 150ms. Hovers are small physical
nudges only: cards `translateY(-4px)`, rows `translateX(6px)`, images `scale(1.03–1.05)`,
0.25–0.6s. Press states deepen the ink (`--ink-rose` → `--ink-rose-deep`) rather than
shrinking. Long-form pages get a 3px rose reading-progress bar at the top. Everything above
must vanish under `prefers-reduced-motion: reduce` — content appears immediately at full
opacity.

**Hover / press / focus.** Links are painterly: a low-opacity rose underline
(`text-decoration-color` at 40% of currentColor, 1.5px, 3px offset) that firms up to full
color and 2px on hover; body links may thicken into a highlight. Buttons deepen and lift
2px. Focus is non-negotiable: `outline: 2px solid var(--ink-rose); outline-offset: 3px`
(rose-soft in dark), and any element whose hover state is a painterly mark shows the same
mark on `:focus-visible`.

**Layout.** Reading measure `68ch`; wide layouts `1180px`. Sections breathe — 60–80px top
padding on desktop, about half on mobile. Breakpoints at 996 / 768 / 600px. Diagrams keep a
40px outer margin, reserve the bottom 60px for the legend strip, and put every coordinate,
size and gap on a 4px grid.

**Imagery.** No stock photography. Figures are SVG diagrams; where a photo would go, the
brand uses a paper-deep placeholder with an accent splash. Illustration, when it appears,
is ink-wash: warm, hand-made, slightly irregular.

---

## CONTENT FUNDAMENTALS

**Voice**: smart, calm, direct; conversational without sloppiness. Contractions always.
Practical over theoretical, human over corporate, light humor when it fits.

**Specificity over generality.** Name the tool, quote the error, link the commit. "Merged:
worker-01..06 → Ingest Worker ×6" beats "consolidated some nodes."

**Casing.** Sentence case for headings and buttons. Uppercase is reserved for mono
labels — eyebrows, tags, dates, arrow labels — where it is always tracked.

**Person.** Second person for instructions ("copy this folder into your vault"), first
person only in essay voice. Imperative for verbs and commands.

**Banned**: em-dashes in prose, emoji in long-form content, and AI-pattern vocabulary —
"delve", "crucial", "tapestry", "serves as", "not just X but Y", rule-of-three filler.
No section-ending summaries; headings are skimmable and plain.

**Examples in this voice**

- "Ship code. Stay human." (tagline)
- "The reader of the diagram can't see what's missing. The person who asked for it needs to."
- "It's what makes the background feel like paper instead of a flat hex value."
- "If it looks like a default theme, it's wrong."
- Margin notes, handwritten: "this is the part that breaks", "still a guess", "cache is the whole trick"

**Emoji**: not used. Unicode arrows (`→`, `↑`) are used as typography, usually set in
Caveat next to a link or in a diagram's direction indicator.

---

## ICONOGRAPHY

Neither source ships an icon set, and none was invented here.

- **Diagram Design** carries no icon font or SVG sprite in its skin layer. Its figures are
  drawn from primitives — rects, paths, circles, markers — and its one icon-ish system is
  `references/primitive-icons.md`, which sources **Devicon/Simple Icons style tech logos**
  at render time for vendor marks. If a figure needs a logo, take it from there rather than
  drawing one.
- **risadams.com** uses no icon library in the parts the brand guide covers. Its glyph
  vocabulary is typographic: Caveat arrows (`→`), mono index numbers (`01`, `L3`), dashed
  rules, and the watercolor splash. The only "icons" in the system are the three titlebar
  dots of the terminal primitive, and the 1-accent rule caps those at one rose dot.
- **Emoji**: never.
- If a project genuinely needs UI icons, use a 1.5px-stroke line set (Lucide is the closest
  CDN match to these hairlines) at `--ink-mute`, and flag it as an addition — it is not part
  of either source. **This design system ships no icon files.**

## Assets and the missing logo

**Neither source contains a logo or brand mark**, so none was created. Where a mark would
go, render the name in plain Fraunces — "Ris Ink", or "risadams.com" set at 400 weight with
`-0.02em` tracking. `assets/` is intentionally empty of marks. If you have a logo, drop it
in `assets/` and tell me; I'll wire it into the gallery header and the figure frames.

**Fonts** are all Google-hosted (Fraunces, Caveat, JetBrains Mono, Crimson Pro as the
serif fallback), so no font binaries are needed and nothing was substituted.

---

## Index

| Path | What it is |
|---|---|
| `styles.css` | Entry point — imports only |
| `tokens/colors.css` | Brand palette: ink accents, paper, ink text, code palette, dark overrides |
| `tokens/diagram-roles.css` | Diagram Design semantic roles, series palette, terminal skin, node treatments |
| `tokens/typography.css` | Font stacks, Fraunces variation settings, diagram type ramp |
| `tokens/spacing.css` | 4px grid, diagram safe areas |
| `tokens/motion.css` | Easing, durations, nudges, reduced-motion reset |
| `tokens/fonts.css` | Google Fonts import |
| `profiles/ris-ink.md` | **The Diagram Design profile** |
| `profiles/README.md` | Install, marker binding, verbs, diff vs shipped skin |
| `guidelines/*.html` | 20 specimen cards — Colors, Diagram roles, Type, Spacing, Brand |
| `components/diagram/` | `DiagramFrame`, `DiagramNode`, `DiagramArrow` + `ArrowDefs`, `DiagramZone`, `DiagramLegend`, `Annotation` + `MarginNote`, `TerminalWindow` |
| `components/brand/` | `InkFilters`, `Button`, `TagPill`, `Card`, `ListRow`, `Blockquote`, `Aside`, `Eyebrow` |
| `ui_kits/diagram-gallery/` | Interactive gallery: architecture, layers, flowchart, terminal — light and parchment |
| `SKILL.md` | Agent-Skills entry point for use in Claude Code |

### Intentional additions

Both sources define their own inventories; these are the only things added, each because a
role existed with nothing to fill it.

- **`margin-note` type role + `MarginNote` / `Aside` components** — the brand's handwritten
  register (Caveat) has no slot in Diagram Design's type table. Capped at one per figure and
  explicitly barred from load-bearing labels.
- **`InkFilters`** — a mount point for the brand's three SVG filters (`wc-edge`, `wc-bleed`,
  `sketchy`), which BRAND.md specifies as "embed once per page" but doesn't componentize.
- **`Eyebrow`** — the page-level twin of the diagram eyebrow, so the mono kicker is one
  thing rather than a repeated inline style.

### Caveats

- `risadams/ris-theme` contributed nothing: it's a navy/near-white VS Code theme unrelated
  to the ink-on-paper language. `vs-ris` + `obsidian-ris-ink` are the ink lineage. Say the
  word if you meant a different repo.
- risadams.com's own CSS (`src/css/redesign.css`, `src/theme/Root.tsx`) wasn't reachable —
  no public repo — so live values come from BRAND.md, which describes that implementation.
- Diagram sublabels stay at 9px mono, below the brand's 12px page floor. That's deliberate:
  changing sizes would break the skill's geometry verifiers and width budgets. The profile
  documents the exception.
