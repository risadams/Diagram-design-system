/**
 * A single diagram node box with the Ris Ink treatment for its semantic type.
 * Renders SVG elements — must be a descendant of an <svg>.
 */
export interface DiagramNodeProps {
  x: number;
  y: number;
  /** Divisible by 4. Default 144. */
  width?: number;
  /** Divisible by 4, min 48. Default 64. */
  height?: number;
  /** Human-readable label, Fraunces 12/600. */
  name: string;
  /** Technical value, JetBrains Mono 9px — port, protocol, path. */
  sublabel?: string;
  /** Short mono eyebrow tag in the top-left chip, e.g. "EDGE". */
  tag?: string;
  /** Big ghosted sequence number, e.g. "01". */
  index?: string;
  /** focal is capped at 1–2 per diagram. */
  type?: 'focal' | 'backend' | 'store' | 'external' | 'input' | 'optional' | 'security';
  theme?: 'light' | 'dark';
  radius?: number;
}

export function DiagramNode(props: DiagramNodeProps): JSX.Element;
