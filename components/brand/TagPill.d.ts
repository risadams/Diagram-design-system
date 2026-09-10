import * as React from 'react';

/**
 * Category / tag chip: 12px mono uppercase over a watercolor accent blob.
 * Colors cycle rose → teal → plum → sepia → ochre by `index`.
 */
export interface TagPillProps {
  children: React.ReactNode;
  /** Position in a list — drives which accent the blob uses. */
  index?: number;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  /** Renders at hover strength, for a selected filter. */
  active?: boolean;
}

export function TagPill(props: TagPillProps): JSX.Element;
