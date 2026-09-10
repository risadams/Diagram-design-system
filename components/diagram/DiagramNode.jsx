import React from 'react';

const T = {
  light: {
    paper: '#faf6ef', ink: '#1a1614', muted: '#6b625a', soft: '#776e65',
    accent: '#CB0162', lift: '#fffdf8', inkRGB: '26,22,20', accentRGB: '203,1,98',
    mutedRGB: '107,98,90',
  },
  dark: {
    paper: '#1a1614', ink: '#f4ecdd', muted: '#a89e8f', soft: '#948b7d',
    accent: '#e24a8a', lift: '#241c19', inkRGB: '244,236,221', accentRGB: '226,74,138',
    mutedRGB: '168,158,143',
  },
};

/* fill + stroke per style-guide "node type → treatment" table */
function treatment(type, t) {
  switch (type) {
    case 'focal':
      return { fill: `rgba(${t.accentRGB},0.08)`, stroke: t.accent, dash: null, tag: t.accent };
    case 'store':
      return { fill: `rgba(${t.inkRGB},0.05)`, stroke: t.muted, dash: null, tag: t.muted };
    case 'external':
      return { fill: `rgba(${t.inkRGB},0.03)`, stroke: `rgba(${t.inkRGB},0.30)`, dash: null, tag: t.soft };
    case 'input':
      return { fill: `rgba(${t.mutedRGB},0.10)`, stroke: t.soft, dash: null, tag: t.soft };
    case 'optional':
      return { fill: `rgba(${t.inkRGB},0.02)`, stroke: `rgba(${t.inkRGB},0.20)`, dash: '4,3', tag: t.soft };
    case 'security':
      return { fill: `rgba(${t.accentRGB},0.05)`, stroke: `rgba(${t.accentRGB},0.50)`, dash: '4,4', tag: t.accent };
    case 'backend':
    default:
      return { fill: t.lift, stroke: t.ink, dash: null, tag: t.ink };
  }
}

/** One node box. Render inside an <svg>. Coordinates must stay on the 4px grid. */
export function DiagramNode({
  x, y, width = 144, height = 64,
  name, sublabel, tag, index,
  type = 'backend', theme = 'light', radius = 6,
}) {
  const t = T[theme] || T.light;
  const tr = treatment(type, t);
  const cx = x + width / 2;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} rx={radius} fill={t.paper} />
      <rect
        x={x} y={y} width={width} height={height} rx={radius}
        fill={tr.fill} stroke={tr.stroke} strokeWidth={1}
        strokeDasharray={tr.dash || undefined}
      />
      {tag && (
        <>
          <rect
            x={x + 8} y={y + 8} width={Math.max(24, tag.length * 6 + 12)} height={12} rx={2}
            fill="transparent" stroke={tr.stroke} strokeWidth={0.8}
          />
          <text
            x={x + 8 + Math.max(24, tag.length * 6 + 12) / 2} y={y + 17}
            fill={tr.tag} fontSize={7} letterSpacing="0.08em" textAnchor="middle"
            fontFamily="'JetBrains Mono', ui-monospace, monospace"
          >
            {tag.toUpperCase()}
          </text>
        </>
      )}
      {index && (
        <text
          x={x + width - 8} y={y + height - 4}
          fill={type === 'focal' ? `rgba(${t.accentRGB},0.12)` : `rgba(${t.inkRGB},0.07)`}
          fontSize={32} fontWeight={600} textAnchor="end"
          fontFamily="'JetBrains Mono', ui-monospace, monospace"
        >
          {index}
        </text>
      )}
      <text
        x={cx} y={y + (sublabel ? height / 2 + 4 : height / 2 + 4)}
        fill={t.ink} fontSize={12} fontWeight={600} textAnchor="middle"
        fontFamily="'Fraunces', 'Crimson Pro', Georgia, serif"
        style={{ fontVariationSettings: '"SOFT" 40' }}
      >
        {name}
      </text>
      {sublabel && (
        <text
          x={cx} y={y + height / 2 + 20}
          fill={t.muted} fontSize={9} textAnchor="middle"
          fontFamily="'JetBrains Mono', ui-monospace, monospace"
        >
          {sublabel}
        </text>
      )}
    </g>
  );
}
