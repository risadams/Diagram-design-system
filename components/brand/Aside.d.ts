import * as React from 'react';

/** The handwritten margin note in page copy — the web counterpart of MarginNote. */
export interface AsideProps {
  children: React.ReactNode;
  tone?: 'teal' | 'rose' | 'sepia';
  /** Optional mono kicker above the note, e.g. "NOTE". */
  label?: string;
}

export function Aside(props: AsideProps): JSX.Element;
