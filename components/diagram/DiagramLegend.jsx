import React from 'react';

const C = {
  light: { rule: 'rgba(26,22,20,0.12)', muted: '#6b625a', accent: '#CB0162', link: '#1a5b6e', ink: '#1a1614', lift: '#fffdf8' },
  dark: { rule: 'rgba(244,236,221,0.12)', muted: '#a89e8f', accent: '#e24a8a', link: '#5ba3b8', ink: '#f4ecdd', lift: '#241c19' },
};

/** Bottom legend strip: hairline, LEGEND eyebrow, then swatch/line entries. */
export function DiagramLegend({ x = 40, y, width = 920, items = [], theme = 'light', idPrefix = 'ink' }) {
  const c = C[theme] || C.light;
  let cursor = x;

  return (
    <g>
      <line x1={x} y1={y} x2={x + width} y2={y} stroke={c.rule} strokeWidth={0.8} />
      <text
        x={x} y={y + 16} fill={c.muted} fontSize={8} letterSpacing="0.18em"
        fontFamily="'JetBrains Mono', ui-monospace, monospace"
      >
        LEGEND
      </text>
      {items.map((it, i) => {
        const at = cursor;
        cursor += Math.max(120, it.label.length * 5.4 + 40);
        const swatchY = y + 32;
        const stroke =
          it.intent === 'accent' ? c.accent : it.intent === 'link' ? c.link : c.muted;
        return (
          <g key={i}>
            {it.kind === 'arrow' ? (
              <line
                x1={at} y1={swatchY + 5} x2={at + 28} y2={swatchY + 5}
                stroke={stroke} strokeWidth={it.intent === 'accent' ? 1.4 : 1.2}
                strokeDasharray={it.dashed ? '4,3' : undefined}
                markerEnd={`url(#${idPrefix}-arrow-${it.intent || 'muted'})`}
              />
            ) : (
              <rect
                x={at} y={swatchY} width={14} height={10} rx={2}
                fill={it.fill || c.lift} stroke={it.stroke || c.ink} strokeWidth={1}
                strokeDasharray={it.dashed ? '4,3' : undefined}
              />
            )}
            <text
              x={at + (it.kind === 'arrow' ? 36 : 20)} y={swatchY + 8}
              fill={c.muted} fontSize={9}
              fontFamily="'Fraunces', 'Crimson Pro', Georgia, serif"
            >
              {it.label}
            </text>
          </g>
        );
      })}
    </g>
  );
}
