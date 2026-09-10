function TerminalFigure() {
  const ds = window.RIS_DS;
  const { TerminalWindow } = ds;
  const K = { paper:'#1a1210', ink:'#f0e6d2', muted:'#a89e8f', soft:'#6e665b', accent:'#e24a8a', tint:'rgba(226,74,138,0.12)', border:'#3a2d26' };
  const mono = "'JetBrains Mono', monospace";

  const steps = [
    { x: 60,  name: 'profile load', sub: 'ris-ink' },
    { x: 320, name: 'resolve skin', sub: 'style-guide' },
    { x: 580, name: 'render', sub: '--type arch', focal: true },
    { x: 840, name: 'export', sub: 'png @2' },
  ];

  return (
    <TerminalWindow
      name="diagram-design — ris-ink"
      command="diagram-design render --type architecture --profile ris-ink"
      title="Four steps to a branded figure"
    >
      <svg viewBox="0 0 1060 300" role="img" aria-labelledby="term-t term-d"
           style={{ width: '100%', display: 'block' }}>
        <title id="term-t">Four steps to a branded figure</title>
        <desc id="term-d">A pipeline from loading a profile through resolving the skin, rendering and exporting.</desc>
        <defs>
          <marker id="term-arrow" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={K.muted} />
          </marker>
          <marker id="term-arrow-accent" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
            <polygon points="0 0, 8 3, 0 6" fill={K.accent} />
          </marker>
        </defs>
        <rect width="100%" height="100%" fill={K.paper} />

        {steps.slice(0, -1).map((s, i) => (
          <line key={i} x1={s.x + 160} y1={140} x2={steps[i + 1].x - 8} y2={140}
                stroke={i === 1 ? K.accent : K.muted} strokeWidth={i === 1 ? 1.4 : 1.2}
                markerEnd={i === 1 ? 'url(#term-arrow-accent)' : 'url(#term-arrow)'} />
        ))}

        {steps.map(s => (
          <g key={s.name}>
            <rect x={s.x} y={108} width={160} height={64} rx={6}
                  fill={s.focal ? K.tint : 'transparent'}
                  stroke={s.focal ? K.accent : K.border} strokeWidth={1} />
            <text x={s.x + 80} y={140} fill={K.ink} fontSize={14} fontWeight={600}
                  textAnchor="middle" fontFamily={mono}>{s.name}</text>
            <text x={s.x + 80} y={158} fill={s.focal ? K.accent : K.muted} fontSize={10}
                  textAnchor="middle" fontFamily={mono}>{s.sub}</text>
          </g>
        ))}

        <text x={60} y={220} fill={K.soft} fontSize={10} letterSpacing="0.14em" fontFamily={mono}>
          $ ONE ACCENT · MONO THROUGHOUT · NO PURE BLACK
        </text>
      </svg>
    </TerminalWindow>
  );
}
window.TerminalFigure = TerminalFigure;
