import * as React from 'react';

/**
 * Editorial card. Deliberately boxless — the offset watercolor splash behind the
 * figure is the container, and the whole card lifts 4px on hover.
 */
export interface CardProps {
  /** Mono uppercase meta line — date, type, read time. */
  meta?: string;
  title: string;
  excerpt?: string;
  href?: string;
  /** Figure content — an <img>, an <svg> diagram, a placeholder. */
  children?: React.ReactNode;
  splash?: 'rose' | 'teal' | 'plum' | 'sepia';
}

export function Card(props: CardProps): JSX.Element;
