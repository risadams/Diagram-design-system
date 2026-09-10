import React from 'react';

const C = {
  light: { ink: '#1a1614', leadInk: 'rgba(26,22,20,0.40)', accent: '#CB0162', leadAccent: 'rgba(203,1,98,0.50)', muted: '#6b625a', leadMuted: 'rgba(26,22,20,0.30)', teal: '#1a5b6e' },
  dark: { ink: '#f4ecdd', leadInk: 'rgba(244,236,221,0.40)', accent: '#e24a8a', leadAccent: 'rgba(226,74,138,0.50)', muted: '#a89e8f', leadMuted: 'rgba(244,236,221,0.30)', teal: '#5ba3b8' },
};

/** Italic-serif editorial aside with a dashed Bézier leader and a landing dot. */
export function Annotation({
  text, x, y, leader, land,
  intent = 'ink', anchor = 'end', theme = 'light',
}) {
  const c = C[theme] || C.light;
  const fill = intent === 'accent' ? c.accent : intent === 'muted' ? c.muted : c.ink;
  const lead = intent === 'accent' ? c.leadAccent : intent === 'muted' ? c.leadMuted : c.leadInk;

  return (
    <g>
      <text
        x={x} y={y} fill={fill} fontSize={14} fontStyle="italic" textAnchor={anchor}
        fontFamily="'Fraunces', 'Crimson Pro', Georgia, serif"
      >
        {text}
      </text>
      {leader && (
        <path d={leader} fill="none" stroke={lead} strokeWidth={1} strokeDasharray="4,3" />
      )}
      {land && <circle cx={land[0]} cy={land[1]} r={2} fill={fill} />}
    </g>
  );
}

/** The handwritten margin note — one per figure, nothing load-bearing in it. */
export function MarginNote({ text, x, y, rotate = -2, intent = 'link', theme = 'light', anchor = 'start' }) {
  const c = C[theme] || C.light;
  const fill = intent === 'accent' ? c.accent : c.teal;
  return (
    <text
      x={x} y={y} fill={fill} fontSize={18} fontWeight={600} textAnchor={anchor}
      transform={`rotate(${rotate} ${x} ${y})`}
      fontFamily="'Caveat', cursive"
    >
      {text}
    </text>
  );
}
