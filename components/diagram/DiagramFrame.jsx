import React from 'react';

/* Page shell for a Diagram Design figure: eyebrow, serif title, and the SVG itself.
   Mirrors the wrapper every example-*.html in the skill ships with. */
export function DiagramFrame({
  eyebrow,
  title,
  note,
  grain = true,
  theme = 'light',
  maxWidth = 1200,
  children,
}) {
  const dark = theme === 'dark';
  const paper = dark ? '#1a1614' : '#faf6ef';
  const ink = dark ? '#f4ecdd' : '#1a1614';
  const muted = dark ? '#a89e8f' : '#6b625a';

  return (
    <div
      data-theme={dark ? 'dark' : undefined}
      style={{
        position: 'relative',
        background: paper,
        color: ink,
        fontFamily: 'var(--font-serif)',
        padding: '48px 32px',
        minHeight: '100%',
      }}
    >
      {grain && (
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            opacity: dark ? 0.09 : 0.06,
            mixBlendMode: dark ? 'screen' : 'multiply',
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      )}
      <div style={{ maxWidth, margin: '0 auto', position: 'relative' }}>
        {eyebrow && (
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: muted,
              margin: '0 0 8px',
            }}
          >
            {eyebrow}
          </p>
        )}
        {title && (
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.6rem, 2.4vw + 0.8rem, 2.1rem)',
              fontWeight: 400,
              letterSpacing: '-0.02em',
              lineHeight: 1.12,
              fontVariationSettings: '"SOFT" 60, "WONK" 1',
              margin: '0 0 24px',
            }}
          >
            {title}
          </h1>
        )}
        {children}
        {note && (
          <p
            style={{
              fontFamily: 'var(--font-hand)',
              fontSize: 26,
              fontWeight: 600,
              color: dark ? '#5ba3b8' : '#1a5b6e',
              transform: 'rotate(-2deg)',
              transformOrigin: 'left center',
              margin: '20px 0 0',
            }}
          >
            {note}
          </p>
        )}
      </div>
    </div>
  );
}
