import React from 'react';

/** No box, no border: a splash-backed figure, a mono meta line, a serif title. */
export function Card({ meta, title, excerpt, href, children, splash = 'rose' }) {
  const [hover, setHover] = React.useState(false);
  const splashColor = {
    rose: 'rgba(203,1,98,0.28)',
    teal: 'rgba(26,91,110,0.28)',
    plum: 'rgba(107,58,110,0.26)',
    sepia: 'rgba(138,90,60,0.26)',
  }[splash] || 'rgba(203,1,98,0.28)';

  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={{
        display: 'block',
        textDecoration: 'none',
        color: 'var(--ink)',
        transform: hover ? 'translateY(-4px)' : 'none',
        transition: 'transform var(--dur-lift) var(--ease-ink)',
      }}
    >
      {children && (
        <div style={{ position: 'relative', marginBottom: 16 }}>
          <span
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: '10px -14px -14px 10px',
              filter: 'url(#wc-edge)',
              borderRadius: '48% 52% 55% 45% / 52% 45% 55% 48%',
              background: splashColor,
            }}
          />
          <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 2 }}>{children}</div>
        </div>
      )}
      {meta && (
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-faint)',
            margin: '0 0 6px',
          }}
        >
          {meta}
        </p>
      )}
      <h3
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 24,
          fontWeight: 500,
          letterSpacing: '-0.015em',
          lineHeight: 1.2,
          margin: 0,
          color: hover ? 'var(--ink-rose)' : 'var(--ink)',
          transition: 'color var(--dur-hover) var(--ease-ink)',
        }}
      >
        {title}
      </h3>
      {excerpt && (
        <p style={{ fontSize: 17, lineHeight: 1.6, color: 'var(--ink-soft)', margin: '8px 0 0' }}>
          {excerpt}
        </p>
      )}
    </a>
  );
}
