<!-- diagram-design-profile
name: Ris Ink
slug: ris-ink
source-url: https://risadams.com
created: 2026-09-10
updated: 2026-09-10
notes: Ink-on-parchment. Warm paper, rose ink accent, Fraunces/JetBrains Mono/Caveat.
-->
# Style Guide

**The single source of truth for colors, typography, and tokens.** Every diagram draws from this — not from hex values inlined in other reference files. If you want to change the visual skin of Diagram Design, change this file.

This skin is **Ris Ink** — the risadams.com ink-on-paper identity. Warm paper surfaces, saturated ink accents, hairlines that read as pen strokes, and a handwritten register held in reserve. Light is *Ink Paper*, dark is *Ink Parchment*. It should feel like a well-kept field notebook, not a template.

To generate your own from a website URL, see [`onboarding.md`](onboarding.md).

---

## Tokens

### Semantic roles

Every token is referred to by **semantic role**, not by its hex value. Type references (`type-*.md`) and SKILL.md say `accent`, not `#CB0162`.

| Role | Purpose | Default (light) | Default (dark) |
|---|---|---|---|
| `paper` | Page background, default node fill | `#faf6ef` (paper) | `#1a1614` (ink) |
| `paper-2` | Diagram container bg, secondary fill | `#f4ecdd` (paper-warm) | `#241c19` |
| `ink` | Primary text, primary stroke | `#1a1614` | `#f4ecdd` |
| `muted` | Secondary text, default arrow stroke | `#6b625a` (ink-mute) | `#a89e8f` |
| `soft` | Sublabels, boundary labels | `#776e65` (ink-faint) | `#948b7d` |
| `rule` | Hairline borders | `rgba(26,22,20,0.12)` | `rgba(244,236,221,0.12)` |
| `rule-solid` | Stronger borders, baselines | `#d8c9ad` (paper-edge) | `rgba(216,201,173,0.25)` |
| `accent` | Focal / 1–2 max per diagram | `#CB0162` (ink-rose) | `#e24a8a` (ink-rose-soft) |
| `accent-tint` | Fill for accent-bordered boxes | `rgba(203,1,98,0.08)` | `rgba(226,74,138,0.10)` |
| `link` | HTTP/API calls, external arrows | `#1a5b6e` (ink-teal) | `#5ba3b8` |

> **Brand palette source:** risadams.com — `ink #1a1614`, `paper #faf6ef`, `ink-rose #CB0162`, `ink-teal #1a5b6e`, `ink-plum #6b3a6e`, `ink-sepia #8a5a3c`, `ink-ochre #c48a1e` (decorative only). Rose is the voice; teal, plum and sepia are the chorus; ochre is scenery. `muted`/`soft` are the brand's `ink-mute`/`ink-faint` text tokens, already tuned to 5.5:1 and 4.6:1 on paper. `link` is teal because the brand reserves rose for the one focal thing.

> **Never pure white.** Where the shipped skin used `#ffffff` for backend node fills, this skin uses `paper-lift #fffdf8` (light) / `#241c19` (dark). Pure white on warm paper reads as a hole.

### Inversion rule (light → dark)

Any `rgba(26,22,20, X)` in light becomes `rgba(244,236,221, X)` in dark. Same opacities, RGB flipped. Rose lifts from `#CB0162` to `#e24a8a` on dark paper (full rose only hits 3.2:1 there), and teal lifts to `#5ba3b8`.

### Series palette (multi-series chart types only)

The ink chorus, in fixed order. The "1-focal" rule still holds — `accent` (rose) is reserved for the focal series; the palette below covers the rest.

| Token | Light | Dark | Notes |
|---|---|---|---|
| `series-1` | `#1a5b6e` (teal) | `#5ba3b8` | Non-focal series |
| `series-2` | `#6b3a6e` (plum) | `#b183b5` | Non-focal series |
| `series-3` | `#8a5a3c` (sepia) | `#b8875f` | Non-focal series |
| `series-4` | `#8a5c00` (ochre, AA-safe variant) | `#d9a13f` | Non-focal series |
| `series-5` | `#4d7c43` (leaf) | `#7fae6a` | Non-focal series |

Fills sit at `0.18` opacity light, `0.22` dark; strokes use the full color. **Don't backfill these tokens to non-chart types** — architecture, swimlane, etc. continue to use muted-ink variants.

### Terminal skin (opt-in alternate)

The CLI-chrome register, recut in parchment rather than neutral grey (see [primitive-terminal.md](primitive-terminal.md)). Still a fixed, self-contained skin — onboarding does not touch it.

| Token | Hex | Purpose |
|---|---|---|
| `terminal-page` | `#14100e` | Page background behind the window |
| `terminal-paper` | `#1a1210` | Window body, node fill (the brand's code-block bg) |
| `terminal-bar` | `#241c19` | Titlebar strip |
| `terminal-border` | `#3a2d26` | Window border, hairlines |
| `terminal-ink` | `#f0e6d2` | Primary text, primary stroke |
| `terminal-muted` | `#a89e8f` | Secondary text, sublabels, ring stroke |
| `terminal-soft` | `#6e665b` | Tertiary — inactive dots, spokes |
| `terminal-accent` | `#e24a8a` | The one accent — focal station, prompt sign, active dot |
| `terminal-accent-tint` | `rgba(226,74,138,0.12)` | Fill for accent-bordered boxes |

**1-accent rule still holds.** Never introduce a second hue.

---

## Typography

Three families, in the brand's own registers: **Fraunces** carries everything readable, **JetBrains Mono** carries technical values, **Caveat** carries marginalia. There is no sans register — the brand doesn't have one.

| Role | Family | Size | Weight | Usage |
|---|---|---|---|---|
| `title` | Fraunces | 1.75rem | 400 | Page H1 — `font-variation-settings: "SOFT" 60, "WONK" 1`, tracking `-0.02em` |
| `node-name` | Fraunces | 12px | 600 | Human-readable labels — `"SOFT" 40, "WONK" 0` |
| `sublabel` | JetBrains Mono | 9px | 400 | Port, protocol, URL, field type |
| `eyebrow` | JetBrains Mono | 7–8px | 500, tracked 0.18em, uppercase | Type tags, axis labels |
| `arrow-label` | JetBrains Mono | 8px | 400, tracked 0.06em | Arrow annotations |
| `callout` | Fraunces *italic* | 14px | 400 | Editorial asides only |
| `margin-note` | Caveat | 18px | 600 | The one handwritten slot — see below |

### Font stack

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400&family=JetBrains+Mono:wght@400;500;600&family=Caveat:wght@400;600&family=Noto+Sans+KR:wght@400;500;600&family=Noto+Serif+KR:wght@400&family=Noto+Sans+TC:wght@400;500;600&family=Noto+Serif+TC:wght@400&display=swap" rel="stylesheet">
```

In SVG: `font-family="'Fraunces', 'Crimson Pro', Georgia, serif"` for names and titles, `font-family="'JetBrains Mono', ui-monospace, monospace"` for sublabels/eyebrows/arrow labels, `font-family="'Caveat', cursive"` for margin notes.

### The margin-note slot

The brand's handwritten register, used **at most once per diagram** and never inside the active diagram area: a Caveat 18px line in `link` (teal) or `accent`, rotated `-1.5°` to `-3°`, for the human aside the diagram can't say in its own grammar ("this is the part that breaks", "still a guess"). It does **not** replace the `callout` primitive — [primitive-annotation.md](primitive-annotation.md)'s italic-serif + dashed leader is still the mechanism for pointing at an element. Use the margin note when nothing is being pointed at.

Never use Caveat for node names, sublabels, legends, axis labels, or anything a reader must parse to understand the figure.

### Korean labels

Fraunces and Caveat carry no Hangul. A Korean `<text>` element extends its own family — never swap the skin:

```svg
<text font-family="'Fraunces', 'Noto Sans KR', 'Apple SD Gothic Neo', 'Malgun Gothic', sans-serif">결제 서비스</text>
```

Page titles take `'Fraunces', 'Noto Serif KR', serif`. Sublabels stay Latin in JetBrains Mono. Floor of 12px for Hangul. Arrow labels, eyebrows and legend text switch register: a Korean label in one of those slots becomes 12px Fraunces 500 with no tracking and no uppercase transform, and its mask rect grows to match (16px tall, width from the budget below, rounded to a multiple of 4).

### Traditional Chinese labels

Same three rules with the TC stack:

```svg
<text font-family="'Fraunces', 'Noto Sans TC', 'PingFang TC', 'Microsoft JhengHei', sans-serif">請求項比對</text>
```

**Width budget** (both scripts, unchanged): every Unicode wide or full-width character costs 1em, every other character costs its face's Latin advance (**0.56em Fraunces**, 0.60em mono), nonspacing marks cost nothing. Sum over the string, multiply by font size, add padding, round the box up to the next multiple of 4. Fraunces is a little narrower than Geist at the same size, so boxes measured under the shipped skin have slack, never overflow.

**Load-bearing rule:** Mono is for *technical* content (ports, commands, URLs, field types). Names go in Fraunces. Italic Fraunces is reserved for annotation callouts. Caveat is reserved for the single margin note.

---

## Stroke, radius, spacing

| Token | Value | Use |
|---|---|---|
| `stroke-thin` | `0.8` | Tag-box outlines, leaf nodes |
| `stroke-default` | `1` | Most strokes |
| `stroke-strong` | `1.2` | Emphasis strokes |
| `radius-sm` | `4` | Small tags |
| `radius-md` | `6` | Node boxes |
| `radius-lg` | `8` | Containers, rings |
| `grid` | `4` | Every coord, size, and gap is divisible by 4 (hard rule) |

Dashed hairlines are part of the brand: `stroke-dasharray="4,3"` on optional nodes, return arrows, callout leaders, and any divider that isn't chrome. Solid hairlines are for structure (legend baseline, zone borders, outer silhouettes).

---

## Node type → treatment

| Type | Fill | Stroke |
|---|---|---|
| `focal` (1–2 max) | `accent-tint` | `accent` |
| `backend` | `#fffdf8` (paper-lift) | `ink` |
| `store` | `ink @ 0.05` | `muted` |
| `external` | `ink @ 0.03` | `ink @ 0.30` |
| `input` | `muted @ 0.10` | `soft` |
| `optional` | `ink @ 0.02` | `ink @ 0.20` dashed `4,3` |
| `security` | `accent @ 0.05` | `accent @ 0.50` dashed `4,4` |

---

## Customizing the skin

Four options:

1. **Run onboarding** — see [`onboarding.md`](onboarding.md). Drop a URL; the skill extracts the palette + fonts and rewrites this file.
2. **Edit by hand** — change the hex values in the tables above.
3. **Brand handoff** — paste your design-token JSON into a new section here and map its tokens to the semantic roles above.
4. **Client profiles** — save and switch named skins with [`profiles.md`](profiles.md). This file *is* one; keep it at `~/.diagram-design/profiles/ris-ink.md`.

### Constraints (don't break these)

- **Contrast**: `ink` hits 16.7:1 on `paper`; `muted` 5.5:1; `soft` 4.6:1. Do not lighten `soft` — it is the floor.
- **One accent**: rose is the voice. Teal is `link`, not a second accent; plum/sepia/ochre appear only in the series palette.
- **No rainbow palette**: the brand ships nine ink colors. A diagram uses three (paper, ink, rose) plus teal for links.
- **Serif + mono + hand**: Fraunces, JetBrains Mono, Caveat. Never add a sans.
- **Paper is warm, never white**: `#faf6ef`, and node fills use `#fffdf8` rather than `#ffffff`.
- **Texture is paper grain, not a dot grid**: the brand's texture is a fixed fractal-noise overlay at `opacity 0.06–0.09`, `mix-blend-mode: multiply` (light) / `screen` (dark), `pointer-events: none`. It is opt-in per diagram and belongs on the *page*, not inside the `<svg>` (a displaced/exported SVG must stay clean). The 22×22 dot pattern from the shipped skin is off by default in this profile; if you want it, run it at `rgba(26,22,20,0.08)`.
- **Sketchy filter is on-brand, with limits**: [primitive-sketchy.md](primitive-sketchy.md) at `scale 1.5` suits essay diagrams in this skin. Filter shapes, never text, and skip it on dark parchment where wobble reads as artifact.
- **Container is clean by default**: the diagram sits directly on paper — no secondary container background or border. The framed variant (`paper-2` + `rule` + 8px radius) stays opt-in.
