export interface DiagramLegendItem {
  /** 'swatch' (default) draws a node chip; 'arrow' draws a connector sample. */
  kind?: 'swatch' | 'arrow';
  label: string;
  fill?: string;
  stroke?: string;
  dashed?: boolean;
  intent?: 'muted' | 'accent' | 'link';
}

/** The bottom 60px legend strip. Nothing else lives in that band. */
export interface DiagramLegendProps {
  x?: number;
  /** Baseline y — the hairline. Entries sit below it. */
  y: number;
  width?: number;
  items?: DiagramLegendItem[];
  theme?: 'light' | 'dark';
  /** Must match the ArrowDefs prefix for arrow entries. */
  idPrefix?: string;
}

export function DiagramLegend(props: DiagramLegendProps): JSX.Element;
