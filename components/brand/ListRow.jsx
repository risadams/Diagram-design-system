import React from 'react';

/** date (mono) | title (serif) | category (Caveat) on a dashed baseline. */
export function ListRow({ date, title, category, href }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a
      href={href}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={{
        display: 'grid',
        gridTemplateColumns: '110px 1fr auto',
        alignItems: 'baseline',
        gap: 20,
        padding: '14px 0',
        borderBottom: 'var(--rule-dashed)',
        textDecoration: 'none',
        color: 'var(--ink)',
        transform: hover ? 'translateX(6px)' : 'none',
        transition: 'transform var(--dur-hover) var(--ease-ink)',
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 12,
          letterSpacing: '0.06em',
          color: 'var(--ink-faint)',
        }}
      >
        {date}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-serif)',
          fontSize: 24,
          fontWeight: 400,
          letterSpacing: '-0.015em',
          color: hover ? 'var(--ink-rose)' : 'var(--ink)',
          transition: 'color var(--dur-hover) var(--ease-ink)',
        }}
      >
        {title}
      </span>
      {category && (
        <span style={{ fontFamily: 'var(--font-hand)', fontSize: 22, color: 'var(--ink-teal)' }}>
          {category}
        </span>
      )}
    </a>
  );
}
