import * as React from 'react';

/**
 * The brand button: a serif label over a watercolor rose blob, or a hairline ghost.
 * Requires <InkFilters/> on the page for the painterly edge.
 *
 * @startingPoint section="Brand" subtitle="Primary and ghost buttons with the watercolor edge" viewport="700x150"
 */
export interface ButtonProps {
  children: React.ReactNode;
  /** primary = paper text on rose; ghost = ink text, 1.5px ink border. */
  variant?: 'primary' | 'ghost';
  /** Renders an <a> instead of a <button>. */
  href?: string;
  /** Caveat arrow that nudges right on hover. */
  arrow?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button(props: ButtonProps): JSX.Element;
