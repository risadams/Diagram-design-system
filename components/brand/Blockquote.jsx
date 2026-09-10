import React from 'react';

/** Italic serif at 24px behind a rose watercolor bar. No box, no background. */
export function Blockquote({ children, cite }) {
  return (
    <figure style={{ position: 'relative', margin: '32px 0', paddingLeft: 24 }}>
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: 0,
          top: 4,
          bottom: 4,
          width: 3,
          filter: 'url(#wc-edge)',
          background: 'var(--ink-rose)',
          opacity: 0.55,
        }}
      />
      <blockquote
        style={{
          margin: 0,
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontSize: 24,
          lineHeight: 1.45,
          color: 'var(--ink)',
        }}
      >
        {children}
      </blockquote>
      {cite && (
        <figcaption
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 12,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--ink-faint)',
            marginTop: 10,
          }}
        >
          {cite}
        </figcaption>
      )}
    </figure>
  );
}
