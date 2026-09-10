import React from 'react';

const C = {
  light: { muted: '#6b625a', accent: '#CB0162', link: '#1a5b6e', paper: '#faf6ef' },
  dark: { muted: '#a89e8f', accent: '#e24a8a', link: '#5ba3b8', paper: '#1a1614' },
};

/** Arrow markers. Render once per SVG inside <defs>, or let DiagramArrow.Defs do it. */
export function ArrowDefs({ theme = 'light', idPrefix = 'ink' }) {
  const c = C[theme] || C.light;
  return (
    <defs>
      {[['muted', c.muted], ['accent', c.accent], ['link', c.link]].map(([k, fill]) => (
        <marker
          key={k} id={`${idPrefix}-arrow-${k}`}
          markerWidth={8} markerHeight={6} refX={7} refY={3} orient="auto"
        >
          <polygon points="0 0, 8 3, 0 6" fill={fill} />
        </marker>
      ))}
    </defs>
  );
}

/** Orthogonal connector with an optional masked mono label. */
export function DiagramArrow({
  d, from, to,
  intent = 'muted', label, labelAt,
  dashed = false, theme = 'light', idPrefix = 'ink',
}) {
  const c = C[theme] || C.light;
  const stroke = c[intent] || c.muted;
  const path = d || (from && to ? `M ${from[0]},${from[1]} L ${to[0]},${to[1]}` : null);
  const width = intent === 'accent' ? 1.4 : intent === 'link' ? 1.2 : dashed ? 1 : 1.2;
  const lp = labelAt || (from && to ? [(from[0] + to[0]) / 2, Math.min(from[1], to[1]) - 10] : null);
  const w = label ? Math.max(24, label.length * 6 + 12) : 0;

  return (
    <g>
      {path && (
        <path
          d={path} fill="none" stroke={stroke} strokeWidth={width}
          strokeDasharray={dashed ? '4,3' : undefined}
          markerEnd={`url(#${idPrefix}-arrow-${intent})`}
        />
      )}
      {label && lp && (
        <>
          <rect x={lp[0] - w / 2} y={lp[1] - 9} width={w} height={12} rx={2} fill={c.paper} />
          <text
            x={lp[0]} y={lp[1]} fill={stroke} fontSize={8} letterSpacing="0.08em"
            textAnchor="middle" fontFamily="'JetBrains Mono', ui-monospace, monospace"
          >
            {label.toUpperCase()}
          </text>
        </>
      )}
    </g>
  );
}
