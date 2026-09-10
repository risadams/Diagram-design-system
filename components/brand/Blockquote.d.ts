import * as React from 'react';

/** Pull quote: italic serif 24px with a painterly rose bar on the left. */
export interface BlockquoteProps {
  children: React.ReactNode;
  /** Mono uppercase attribution. */
  cite?: string;
}

export function Blockquote(props: BlockquoteProps): JSX.Element;
