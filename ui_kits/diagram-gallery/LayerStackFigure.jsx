function LayerStackFigure({ theme }) {
  const ds = window.RIS_DS;
  const { DiagramFrame, MarginNote } = ds;
  const dark = theme === 'dark';
  const T = dark
    ? { paper:'#1a1614', paper2:'#241c19', ink:'#f4ecdd', muted:'#a89e8f', soft:'#948b7d', rule:'rgba(244,236,221,0.12)', accent:'#e24a8a', tint:'rgba(226,74,138,0.10)' }
    : { paper:'#faf6ef', paper2:'#f4ecdd', ink:'#1a1614', muted:'#6b625a', soft:'#776e65', rule:'rgba(26,22,20,0.12)', accent:'#CB0162', tint:'rgba(203,1,98,0.08)' };

  const layers = [
    { tag: 'L5', name: 'Diagram output',  note: 'html · svg · png',        focal: false },
    { tag: 'L4', name: 'Type reference',  note: 'type-*.md',               focal: false },
    { tag: 'L3', name: 'Style guide',     note: 'semantic roles · type',   focal: true  },
    { tag: 'L2', name: 'Client profile',  note: '~/.diagram-design',       focal: false },
    { tag: 'L1', name: 'Project marker',  note: '.diagram-design',         focal: false },
  ];
  const x = 120, w = 800, h = 64, top = 72;

  return (
    <DiagramFrame theme={theme} eyebrow="Layers · Diagram Design" title="Where a skin comes from">
      <svg viewBox="0 0 1000 480" role="img" aria-labelledby="lay-t lay-d"
           style={{ width: '100%', display: 'block' }}>
        <title id="lay-t">Where a skin comes from</title>
        <desc id="lay-d">Five layers from project marker up to rendered diagram output, with the style guide as the focal layer.</desc>
        <rect width="100%" height="100%" fill={T.paper} />

        <text x={56} y={top + 8} fill={T.soft} fontSize={9} letterSpacing="0.14em"
              fontFamily="'JetBrains Mono', monospace">RESOLVES ↑</text>
        <line x1={72} y1={top + 24} x2={72} y2={top + 5 * h - 8} stroke={T.rule} strokeWidth={1} strokeDasharray="4,3" />

        {layers.map((l, i) => {
          const y = top + i * h;
          return (
            <g key={l.tag}>
              <rect x={x} y={y} width={w} height={h}
                    fill={l.focal ? T.tint : i % 2 ? T.paper2 : T.paper}
                    stroke={l.focal ? T.accent : T.rule} strokeWidth={l.focal ? 1 : 0.8} />
              <text x={x + 20} y={y + 38} fill={l.focal ? T.accent : T.soft} fontSize={9}
                    letterSpacing="0.14em" fontFamily="'JetBrains Mono', monospace">{l.tag}</text>
              <text x={x + 72} y={y + 39} fill={T.ink} fontSize={16} fontWeight={600}
                    fontFamily="'Fraunces', Georgia, serif">{l.name}</text>
              <text x={x + w - 20} y={y + 39} fill={T.muted} fontSize={10} textAnchor="end"
                    fontFamily="'JetBrains Mono', monospace">{l.note}</text>
            </g>
          );
        })}

        <MarginNote theme={theme} text="change L3, everything above follows" x={x} y={top + 5 * h + 20} />

        <line x1={120} y1={432} x2={920} y2={432} stroke={T.rule} strokeWidth={0.8} />
        <text x={120} y={448} fill={T.muted} fontSize={8} letterSpacing="0.18em"
              fontFamily="'JetBrains Mono', monospace">LEGEND</text>
        <rect x={120} y={460} width={14} height={10} rx={2} fill={T.tint} stroke={T.accent} />
        <text x={140} y={468} fill={T.muted} fontSize={9} fontFamily="'Fraunces', serif">Focal layer — the one you edit</text>
      </svg>
    </DiagramFrame>
  );
}
window.LayerStackFigure = LayerStackFigure;
