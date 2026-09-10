import React from 'react';

const C = {
  light: { fill: 'rgba(26,22,20,0.02)', rule: 'rgba(26,22,20,0.10)', paper: '#faf6ef', label: 'rgba(26,22,20,0.45)' },
  dark: { fill: 'rgba(244,236,221,0.02)', rule: 'rgba(244,236,221,0.12)', paper: '#1a1614', label: 'rgba(244,236,221,0.45)' },
};

/** Labeled boundary. Draw before arrows and nodes. Mandatory above 9 nodes. */
export function DiagramZone({ x, y, width, height, label, theme = 'light', radius = 8 }) {
  const c = C[theme] || C.light;
  const w = label ? Math.max(40, label.length * 6 + 16) : 0;
  return (
    <g>
      <rect
        x={x} y={y} width={width} height={height} rx={radius}
        fill={c.fill} stroke={c.rule} strokeWidth={0.8}
      />
      {label && (
        <>
          <rect x={x + width / 2 - w / 2} y={y + 4} width={w} height={12} rx={2} fill={c.paper} />
          <text
            x={x + width / 2} y={y + 13} fill={c.label} fontSize={7} letterSpacing="0.14em"
            textAnchor="middle" fontFamily="'JetBrains Mono', ui-monospace, monospace"
          >
            {label.toUpperCase()}
          </text>
        </>
      )}
    </g>
  );
}
