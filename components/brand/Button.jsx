import React from 'react';

/** Serif label on a watercolor rose blob (primary) or a hairline ink outline (ghost). */
export function Button({
  children, variant = 'primary', href, arrow = false,
  onClick, disabled = false, type = 'button',
}) {
  const [hover, setHover] = React.useState(false);
  const primary = variant === 'primary';
  const Tag = href ? 'a' : 'button';

  const base = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    gap: 8,
    padding: '11px 22px',
    minHeight: 44,
    border: 'none',
    background: 'none',
    font: 'inherit',
    fontFamily: 'var(--font-serif)',
    fontSize: 17,
    fontWeight: 500,
    lineHeight: 1.2,
    letterSpacing: '-0.005em',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    color: primary ? 'var(--paper)' : 'var(--ink)',
    textDecoration: 'none',
    transform: hover && !disabled ? 'translateY(-2px)' : 'none',
    transition: 'transform var(--dur-hover) var(--ease-ink), color var(--dur-hover) var(--ease-ink)',
  };

  const blob = {
    position: 'absolute',
    inset: 0,
    zIndex: -1,
    filter: 'url(#wc-edge)',
    borderRadius: '45% 55% 50% 50% / 55% 45% 55% 45%',
    background: primary
      ? (hover ? 'var(--ink-rose-deep)' : 'var(--ink-rose)')
      : (hover ? 'rgba(203,1,98,0.10)' : 'transparent'),
    opacity: primary ? 0.94 : 1,
    transition: 'background var(--dur-hover) var(--ease-ink)',
  };

  return (
    <Tag
      href={href}
      type={href ? undefined : type}
      onClick={disabled ? undefined : onClick}
      disabled={href ? undefined : disabled}
      aria-disabled={disabled || undefined}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
      style={{
        ...base,
        ...(primary ? {} : { border: '1.5px solid var(--ink)', borderRadius: 2 }),
        isolation: 'isolate',
      }}
    >
      <span aria-hidden="true" style={blob} />
      <span>{children}</span>
      {arrow && (
        <span
          aria-hidden="true"
          style={{
            fontFamily: 'var(--font-hand)',
            fontSize: 22,
            transform: hover ? 'translateX(4px)' : 'none',
            transition: 'transform var(--dur-hover) var(--ease-ink)',
          }}
        >
          →
        </span>
      )}
    </Tag>
  );
}
