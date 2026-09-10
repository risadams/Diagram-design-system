/** Hairline boundary box with a mono uppercase label notched into its top edge. */
export interface DiagramZoneProps {
  x: number;
  y: number;
  width: number;
  height: number;
  /** Zone name, e.g. "CONTENT". 2–4 zones max per figure. */
  label?: string;
  theme?: 'light' | 'dark';
  radius?: number;
}

export function DiagramZone(props: DiagramZoneProps): JSX.Element;
