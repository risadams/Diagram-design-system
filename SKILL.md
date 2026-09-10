---
name: ris-ink-design
description: Use this skill to generate well-branded interfaces and assets for Ris Ink — the risadams.com ink-on-parchment identity applied to the Diagram Design skill — either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping, plus a drop-in Diagram Design client profile.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If the task involves **Diagram Design** specifically, the artifact you usually want is
`profiles/ris-ink.md` — copy it to `~/.diagram-design/profiles/ris-ink.md` and load it, or
write a `.diagram-design` marker containing `profile: ris-ink` at the project root. See
`profiles/README.md`.

If creating visual artifacts (slides, mocks, throwaway prototypes, diagrams), copy assets
out and create static HTML files for the user to view; `ui_kits/diagram-gallery/` shows the
intended composition and `guidelines/*.html` are the token specimens. If working on
production code, copy the token CSS and read the rules here to become an expert in
designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build
or design, ask some questions, and act as an expert designer who outputs HTML artifacts
_or_ production code, depending on the need.
