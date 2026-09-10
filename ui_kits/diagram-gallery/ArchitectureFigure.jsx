function ArchitectureFigure({ theme }) {
  const ds = window.RIS_DS;
  const { DiagramFrame, DiagramNode, DiagramArrow, ArrowDefs, DiagramZone, DiagramLegend, Annotation, MarginNote } = ds;
  const dark = theme === 'dark';
  const paper = dark ? '#1a1614' : '#faf6ef';
  const rule = dark ? 'rgba(244,236,221,0.12)' : 'rgba(26,22,20,0.12)';

  return (
    <DiagramFrame
      theme={theme}
      eyebrow="Architecture · Diagram Design"
      title="Content site in production"
    >
      <svg viewBox="0 0 1000 480" role="img" aria-labelledby="arch-t arch-d"
           style={{ width: '100%', display: 'block' }}>
        <title id="arch-t">Content site in production</title>
        <desc id="arch-d">Reader requests move through an edge cache to an Astro origin, which reads an MDX bundle and queries a content CMS.</desc>
        <ArrowDefs theme={theme} idPrefix="arch" />
        <rect width="100%" height="100%" fill={paper} />

        <DiagramZone theme={theme} x={616} y={128} width={164} height={272} label="content" />

        <DiagramArrow theme={theme} idPrefix="arch" from={[168, 272]} to={[220, 272]} intent="link" label="https" />
        <DiagramArrow theme={theme} idPrefix="arch" from={[364, 272]} to={[416, 272]} intent="accent" label="ssr" />
        <DiagramArrow theme={theme} idPrefix="arch" d="M 576,240 H 692 Q 700,240 700,232 V 224" label="read mdx" labelAt={[640, 234]} />
        <DiagramArrow theme={theme} idPrefix="arch" d="M 576,304 H 692 Q 700,304 700,312 V 320" label="query" labelAt={[636, 298]} />
        <DiagramArrow theme={theme} idPrefix="arch" from={[220, 296]} to={[168, 296]} dashed label="resp" labelAt={[194, 292]} />

        <DiagramNode theme={theme} x={40} y={240} width={128} name="Reader" sublabel="Browser" tag="ext" type="input" />
        <DiagramNode theme={theme} x={220} y={240} width={144} name="Edge Cache" sublabel="pages · cache" tag="edge" index="01" type="external" />
        <DiagramNode theme={theme} x={416} y={240} width={160} name="Astro Origin" sublabel="SSR + MDX" tag="orig" index="02" type="focal" />
        <DiagramNode theme={theme} x={628} y={160} width={144} name="MDX Bundle" sublabel="src/content/*.mdx" tag="bun" type="backend" />
        <DiagramNode theme={theme} x={628} y={320} width={144} name="Content CMS" sublabel="assets · og images" tag="cms" type="store" />
        <DiagramNode theme={theme} x={820} y={320} width={140} name="Cold Archive" sublabel="glacier" tag="opt" type="optional" />

        <Annotation theme={theme} text="structure is the index" x={960} y={96}
          leader="M 880 104 Q 800 120 704 152" land={[704, 152]} intent="accent" />
        <MarginNote theme={theme} text="one origin, on purpose" x={40} y={196} />

        <DiagramLegend theme={theme} y={404} idPrefix="arch" items={[
          { label: 'Focal / origin', fill: dark ? 'rgba(226,74,138,0.10)' : 'rgba(203,1,98,0.08)', stroke: dark ? '#e24a8a' : '#CB0162' },
          { label: 'Backend', fill: dark ? '#241c19' : '#fffdf8', stroke: dark ? '#f4ecdd' : '#1a1614' },
          { label: 'Store', fill: dark ? 'rgba(244,236,221,0.05)' : 'rgba(26,22,20,0.05)', stroke: dark ? '#a89e8f' : '#6b625a' },
          { label: 'Optional', fill: 'transparent', stroke: rule, dashed: true },
          { kind: 'arrow', intent: 'link', label: 'HTTP request' },
          { kind: 'arrow', intent: 'accent', label: 'Primary flow' },
          { kind: 'arrow', dashed: true, label: 'Return / async' },
        ]} />
      </svg>
    </DiagramFrame>
  );
}
window.ArchitectureFigure = ArchitectureFigure;
