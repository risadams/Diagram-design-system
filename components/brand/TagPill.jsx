import React from 'react';

const CYCLE = [
  { blob: '203,1,98', text: '#8f0044' },     // rose
  { blob: '26,91,110', text: '#1a5b6e' },    // teal
  { blob: '107,58,110', text: '#6b3a6e' },   // plum
  { blob: '138,90,60', text: '#8a5a3c' },    // sepia
  { blob: '196,138,30', text: '#8a5c00' },   // ochre
];

/** Mono uppercase label over a watercolor accent blob. Color cycles by position. */
export function TagPill({ children, index = 0, href, onClick, active = false }) {
  const [hover, setHover] = React.useState(false);
  const c = CYCLE[index % CYCLE.length];
  const Tag = href ? 'a' : onClick ? 'button' : 'span';
  const strong = hover || active;

  return (
    <Tag
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={{
        position: 'relative',
        isolation: 'isolate',
        display: 'inline-flex',
        alignItems: 'center',
        padding: '7px 14px',
        border: 'none',
        background: 'none',
        fontFamily: 'var(--font-mono)',
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: c.text,
        textDecoration: 'none',
        cursor: href || onClick ? 'pointer' : 'default',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          filter: 'url(#wc-edge)',
          borderRadius: '52% 48% 46% 54% / 48% 54% 46% 52%',
          background: `rgba(${c.blob},${strong ? 0.3 : 0.18})`,
          transition: 'background var(--dur-hover) var(--ease-ink)',
        }}
      />
      {children}
    </Tag>
  );
}
