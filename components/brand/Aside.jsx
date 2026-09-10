import React from 'react';

const TONE = {
  teal: { color: '#1a5b6e', border: 'rgba(26,91,110,0.55)' },
  rose: { color: '#8f0044', border: 'rgba(203,1,98,0.55)' },
  sepia: { color: '#8a5a3c', border: 'rgba(138,90,60,0.55)' },
};

/** Margin note / admonition: Caveat in an accent, dashed left border, slight rotation. */
export function Aside({ children, tone = 'teal', label }) {
  const t = TONE[tone] || TONE.teal;
  return (
    <aside
      style={{
        borderLeft: `2px dashed ${t.border}`,
        padding: '10px 0 10px 16px',
        margin: '28px 0',
        transform: 'rotate(-0.4deg)',
        color: t.color,
      }}
    >
      {label && (
        <span
          style={{
            display: 'block',
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            opacity: 0.8,
            marginBottom: 4,
          }}
        >
          {label}
        </span>
      )}
      <span style={{ fontFamily: 'var(--font-hand)', fontSize: 22, lineHeight: 1.35, display: 'block' }}>
        {children}
      </span>
    </aside>
  );
}
