/**
 * Orthogonal connector plus its masked mono label. Renders SVG — use inside an <svg>,
 * and render <ArrowDefs/> once in the same SVG.
 */
export interface DiagramArrowProps {
  /** Explicit path data. Use orthogonal segments with 8px corner quads. */
  d?: string;
  /** Shorthand straight line start. */
  from?: [number, number];
  /** Shorthand straight line end. */
  to?: [number, number];
  /** muted = default flow, accent = primary path (max 1), link = HTTP/external. */
  intent?: 'muted' | 'accent' | 'link';
  /** Mono uppercase annotation, e.g. "READ MDX". */
  label?: string;
  labelAt?: [number, number];
  /** Returns and async paths are dashed 4,3. */
  dashed?: boolean;
  theme?: 'light' | 'dark';
  /** Namespace for marker ids — must match the ArrowDefs prefix. */
  idPrefix?: string;
}

export interface ArrowDefsProps {
  theme?: 'light' | 'dark';
  idPrefix?: string;
}

export function DiagramArrow(props: DiagramArrowProps): JSX.Element;
export function ArrowDefs(props: ArrowDefsProps): JSX.Element;
