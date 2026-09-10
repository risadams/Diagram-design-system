import React from 'react';

/** Mono uppercase kicker — the page-level twin of the diagram eyebrow. */
export function Eyebrow({ children, tone = 'mute' }) {
  const color = tone === 'accent' ? 'var(--ink-rose)' : tone === 'teal' ? 'var(--ink-teal)' : 'var(--ink-mute)';
  return (
    <p
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color,
        margin: 0,
      }}
    >
      {children}
    </p>
  );
}
