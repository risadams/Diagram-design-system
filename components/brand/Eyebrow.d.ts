import * as React from 'react';

/** 11px mono uppercase kicker, tracked 0.18em. Sits above every title. */
export interface EyebrowProps {
  children: React.ReactNode;
  tone?: 'mute' | 'accent' | 'teal';
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
