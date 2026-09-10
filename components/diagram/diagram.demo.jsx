function Demo({ ds }) {
    const { DiagramNode, DiagramArrow, ArrowDefs, DiagramZone, DiagramLegend, Annotation, MarginNote } = ds;
    return (
      <svg viewBox="0 0 960 380" role="img" aria-label="Diagram primitives specimen">
        <ArrowDefs idPrefix="spec" />
        <DiagramZone x={600} y={40} width={320} height={200} label="content" />
        <DiagramArrow idPrefix="spec" from={[168,140]} to={[216,140]} intent="link" label="https" />
        <DiagramArrow idPrefix="spec" from={[364,140]} to={[412,140]} intent="accent" label="ssr" />
        <DiagramArrow idPrefix="spec" d="M 572,124 H 624 Q 632,124 632,116 V 108" label="read" />
        <DiagramArrow idPrefix="spec" from={[216,172]} to={[168,172]} dashed label="resp" />
        <DiagramNode x={40} y={108} width={128} name="Reader" sublabel="browser" tag="ext" type="input" />
        <DiagramNode x={216} y={108} width={148} name="Edge cache" sublabel="pages · cache" tag="edge" index="01" type="external" />
        <DiagramNode x={412} y={108} width={160} name="Astro Origin" sublabel="SSR + MDX" tag="orig" index="02" type="focal" />
        <DiagramNode x={624} y={56} width={144} name="MDX Bundle" sublabel="content/*.mdx" tag="bun" type="backend" />
        <DiagramNode x={624} y={160} width={144} name="Content CMS" sublabel="assets · og" tag="cms" type="store" />
        <DiagramNode x={792} y={160} width={128} height={64} name="Archive" sublabel="cold" tag="opt" type="optional" />
        <Annotation text="cache is the whole trick" x={920} y={280}
          leader="M 860 288 Q 700 276 492 176" land={[492,176]} intent="accent" />
        <MarginNote text="one rose node, always" x={40} y={300} />
        <DiagramLegend y={324} idPrefix="spec" items={[
          { label: 'Focal', fill: 'rgba(203,1,98,0.08)', stroke: '#CB0162' },
          { label: 'Backend', fill: '#fffdf8', stroke: '#1a1614' },
          { label: 'Store', fill: 'rgba(26,22,20,0.05)', stroke: '#6b625a' },
          { label: 'Optional', fill: 'rgba(26,22,20,0.02)', stroke: 'rgba(26,22,20,0.20)', dashed: true },
          { kind: 'arrow', intent: 'accent', label: 'Primary flow' },
          { kind: 'arrow', dashed: true, label: 'Return' },
        ]} />
      </svg>
    );
  }

window.mountDiagramDemo = function (ds) {
  ReactDOM.createRoot(document.getElementById('root')).render(<Demo ds={ds} />);
};
