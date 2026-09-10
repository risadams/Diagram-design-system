import * as React from 'react';

/**
 * Page shell for one Diagram Design figure — mono eyebrow, Fraunces title,
 * optional paper grain and one handwritten margin note.
 *
 * @startingPoint section="Diagrams" subtitle="Figure shell with eyebrow, serif title and paper grain" viewport="1280x720"
 */
export interface DiagramFrameProps {
  /** Mono uppercase kicker, e.g. "Architecture · Diagram Design". */
  eyebrow?: string;
  /** Page H1 in Fraunces. */
  title?: string;
  /** The one Caveat margin note allowed per figure. Omit for technical docs. */
  note?: string;
  /** Fractal-noise paper overlay. Page level only — never inside the exported SVG. */
  grain?: boolean;
  theme?: 'light' | 'dark';
  maxWidth?: number;
  children?: React.ReactNode;
}

export function DiagramFrame(props: DiagramFrameProps): JSX.Element;
