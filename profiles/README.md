# Installing the Ris Ink profile into Diagram Design

`ris-ink.md` is a complete Diagram Design **client profile** — the full body of
`references/style-guide.md` with Ris Ink token values, plus the profile metadata header
that `profiles.md` expects.

## Install

```bash
mkdir -p ~/.diagram-design/profiles
cp ris-ink.md ~/.diagram-design/profiles/ris-ink.md
```

Then, in a session with the skill loaded:

```
/diagram-design:profile load ris-ink
```

## Bind it to one project only

Profiles live outside the install, so a plugin update can't erase them. To make a single
repo always render in Ris Ink without changing your global working copy, drop a marker at
the project root:

```
# <project-root>/.diagram-design
profile: ris-ink
```

That file must contain exactly one `profile:` line and nothing else. Marker-first
resolution reads `~/.diagram-design/profiles/ris-ink.md` directly and leaves the installed
`style-guide.md` byte-for-byte unchanged — which is what makes two workspaces with two
skins safe in parallel.

## Verbs worth knowing

| Verb | Effect |
|---|---|
| `load ris-ink` / `switch ris-ink` | Make it the active skin |
| `show` | Report the active profile and its token summary |
| `list` | List saved profiles |
| `update ris-ink` | Re-save the current effective guide over this profile |
| `reset` | Back to the shipped default skin |

## If the schema moves

Diagram Design backfills missing rows from its shipped defaults and tells you which roles
it repaired. If that happens, re-copy `ris-ink.md` from this design system (it is the
canonical copy) or run `update ris-ink` after the backfill to persist the repaired
snapshot.

## What this profile changes vs. the shipped skin

- Palette: white-smoke/jet-black/tangerine → warm paper, ink, rose. `link` is teal.
- Fonts: Instrument Serif / Geist / Geist Mono → Fraunces / JetBrains Mono / Caveat.
  **There is no sans register** — Fraunces carries node names at 12px/600.
- Series palette: editorial neutrals → the ink chorus (teal, plum, sepia, ochre, leaf).
- Terminal skin: neutral greys → parchment-dark (`#1a1210`) with rose-soft accent.
- Texture: dot grid off by default, paper grain available as the page-level opt-in.
- One added type role: `margin-note` (Caveat), capped at one per diagram.

Sizes, the 4px grid, stroke weights, radii, node-treatment structure, size presets and the
type ramp are **unchanged** from the shipped guide, so every geometry verifier and type
reference still applies.
