function FlowchartFigure({ theme }) {
  const ds = window.RIS_DS;
  const { DiagramFrame, DiagramArrow, ArrowDefs, Annotation } = ds;
  const dark = theme === 'dark';
  const T = dark
    ? { paper:'#1a1614', lift:'#241c19', ink:'#f4ecdd', muted:'#a89e8f', soft:'#948b7d', rule:'rgba(244,236,221,0.20)', accent:'#e24a8a', tint:'rgba(226,74,138,0.10)' }
    : { paper:'#faf6ef', lift:'#fffdf8', ink:'#1a1614', muted:'#6b625a', soft:'#776e65', rule:'rgba(26,22,20,0.20)', accent:'#CB0162', tint:'rgba(203,1,98,0.08)' };
  const serif = "'Fraunces', Georgia, serif";
  const mono = "'JetBrains Mono', monospace";

  const label = (x, y, text, size = 13, weight = 600, fill = T.ink) => (
    <text x={x} y={y} fill={fill} fontSize={size} fontWeight={weight} textAnchor="middle" fontFamily={serif}>{text}</text>
  );

  return (
    <DiagramFrame theme={theme} eyebrow="Flowchart · Diagram Design" title="Which skin renders this diagram?">
      <svg viewBox="0 0 1000 480" role="img" aria-labelledby="flow-t flow-d"
           style={{ width: '100%', display: 'block' }}>
        <title id="flow-t">Which skin renders this diagram?</title>
        <desc id="flow-d">Decision flow from a render request through marker and header checks to the resolved skin.</desc>
        <ArrowDefs theme={theme} idPrefix="flow" />
        <rect width="100%" height="100%" fill={T.paper} />

        {/* start */}
        <rect x={420} y={32} width={160} height={48} rx={20} fill={T.lift} stroke={T.ink} strokeWidth={1} />
        {label(500, 62, 'render request', 13, 400)}
        <DiagramArrow theme={theme} idPrefix="flow" from={[500, 80]} to={[500, 116]} />

        {/* decision 1 */}
        <path d="M 500,120 L 620,168 L 500,216 L 380,168 Z" fill={T.lift} stroke={T.ink} strokeWidth={1} />
        {label(500, 166, 'project marker?', 12, 600)}
        <text x={500} y={184} fill={T.muted} fontSize={9} textAnchor="middle" fontFamily={mono}>.diagram-design</text>

        <DiagramArrow theme={theme} idPrefix="flow" d="M 620,168 H 756 Q 764,168 764,176 V 212" intent="accent" label="yes" labelAt={[690, 162]} />
        <DiagramArrow theme={theme} idPrefix="flow" from={[500, 216]} to={[500, 252]} label="no" labelAt={[500, 240]} />

        {/* marker path (focal) */}
        <rect x={676} y={216} width={176} height={64} rx={6} fill={T.tint} stroke={T.accent} strokeWidth={1} />
        {label(764, 246, 'read profile direct', 13, 600)}
        <text x={764} y={264} fill={T.accent} fontSize={9} textAnchor="middle" fontFamily={mono}>~/.diagram-design</text>

        {/* decision 2 */}
        <path d="M 500,256 L 620,304 L 500,352 L 380,304 Z" fill={T.lift} stroke={T.ink} strokeWidth={1} />
        {label(500, 302, 'header present?', 12, 600)}
        <text x={500} y={320} fill={T.muted} fontSize={9} textAnchor="middle" fontFamily={mono}>style-guide.md</text>

        <DiagramArrow theme={theme} idPrefix="flow" d="M 380,304 H 244 Q 236,304 236,312 V 348" label="no" labelAt={[300, 298]} />
        <DiagramArrow theme={theme} idPrefix="flow" from={[500, 352]} to={[500, 388]} label="yes" labelAt={[500, 376]} />

        <rect x={148} y={352} width={176} height={64} rx={6} fill="transparent" stroke={T.rule} strokeWidth={1} strokeDasharray="4,3" />
        {label(236, 382, 'compare to shipped', 13, 600)}
        <text x={236} y={400} fill={T.soft} fontSize={9} textAnchor="middle" fontFamily={mono}>custom-unsaved?</text>

        {/* merge + end */}
        <circle cx={500} cy={396} r={4} fill={T.ink} />
        <DiagramArrow theme={theme} idPrefix="flow" d="M 324,384 H 460 Q 468,384 468,392 V 396" dashed />
        <DiagramArrow theme={theme} idPrefix="flow" d="M 764,280 V 396 H 540" dashed />
        <rect x={420} y={416} width={160} height={48} rx={20} fill={T.lift} stroke={T.ink} strokeWidth={1} />
        {label(500, 446, 'effective skin', 13, 400)}

        <Annotation theme={theme} text="markers keep two clients parallel" x={960} y={136}
          leader="M 872 144 Q 820 176 852 212" land={[852, 212]} intent="accent" />
      </svg>
    </DiagramFrame>
  );
}
window.FlowchartFigure = FlowchartFigure;
