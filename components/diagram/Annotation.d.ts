/**
 * Editorial aside: italic Fraunces text, dashed Bézier leader, landing dot.
 * Max 2 per figure, margins only.
 */
export interface AnnotationProps {
  text: string;
  x: number;
  y: number;
  /** Dashed leader path, e.g. "M 820 44 Q 700 84 520 216". */
  leader?: string;
  /** Landing dot coordinates at the leader's end. */
  land?: [number, number];
  intent?: 'ink' | 'accent' | 'muted';
  anchor?: 'start' | 'middle' | 'end';
  theme?: 'light' | 'dark';
}

/** Caveat margin note — one per figure, never a label the reader must parse. */
export interface MarginNoteProps {
  text: string;
  x: number;
  y: number;
  /** Degrees; brand range is -1.5 to -3. */
  rotate?: number;
  intent?: 'link' | 'accent';
  theme?: 'light' | 'dark';
  anchor?: 'start' | 'middle' | 'end';
}

export function Annotation(props: AnnotationProps): JSX.Element;
export function MarginNote(props: MarginNoteProps): JSX.Element;
