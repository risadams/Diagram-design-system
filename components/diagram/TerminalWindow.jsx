import React from 'react';

const K = {
  page: '#14100e', paper: '#1a1210', bar: '#241c19', border: '#3a2d26',
  ink: '#f0e6d2', muted: '#a89e8f', soft: '#6e665b', accent: '#e24a8a',
};

/** CLI-chrome shell — the fixed parchment terminal skin. Everything inside is mono. */
export function TerminalWindow({ name, command, title, children }) {
  return (
    <div style={{ background: K.page, padding: 32, fontFamily: 'var(--font-mono)' }}>
      <div
        style={{
          background: K.paper,
          border: `1px solid ${K.border}`,
          borderRadius: 12,
          overflow: 'hidden',
          maxWidth: 1120,
          margin: '0 auto',
        }}
      >
        <div
          style={{
            background: K.bar,
            borderBottom: `1px solid ${K.border}`,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 14px',
          }}
        >
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: K.accent }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: K.soft }} />
          <span style={{ width: 10, height: 10, borderRadius: '50%', background: K.soft }} />
          {name && (
            <span style={{ marginLeft: 12, fontSize: 11, letterSpacing: '0.06em', color: K.muted }}>
              {name}
            </span>
          )}
        </div>
        <div style={{ padding: '24px 28px 32px' }}>
          {command && (
            <p style={{ fontSize: 12, color: K.muted, margin: '0 0 14px', letterSpacing: '0.04em' }}>
              <span style={{ color: K.accent, marginRight: 8 }}>$</span>
              {command}
            </p>
          )}
          {title && (
            <h1 style={{ fontSize: 20, fontWeight: 700, color: K.ink, margin: '0 0 20px', letterSpacing: '-0.01em' }}>
              <span style={{ color: K.soft, marginRight: 8 }}>#</span>
              {title}
            </h1>
          )}
          {children}
        </div>
      </div>
    </div>
  );
}
