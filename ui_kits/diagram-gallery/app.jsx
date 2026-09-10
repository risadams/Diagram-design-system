function GalleryApp({ ds }) {
  const { InkFilters, TagPill, Button, Eyebrow } = ds;

  const FIGURES = [
    { id: 'architecture', label: 'architecture', render: t => <window.ArchitectureFigure theme={t} /> },
    { id: 'layers',       label: 'layers',       render: t => <window.LayerStackFigure theme={t} /> },
    { id: 'flowchart',    label: 'flowchart',    render: t => <window.FlowchartFigure theme={t} /> },
    { id: 'terminal',     label: 'terminal',     render: () => <window.TerminalFigure /> },
  ];

  const [figure, setFigure] = React.useState('architecture');
  const [theme, setTheme] = React.useState('light');
  const active = FIGURES.find(f => f.id === figure);
  const fixedDark = figure === 'terminal';

  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme === 'dark' ? 'dark' : '');
  }, [theme]);

  return (
    <div>
      <InkFilters />
      <div className="bar">
        <Eyebrow tone="teal">Ris Ink · gallery</Eyebrow>
        {FIGURES.map((f, i) => (
          <TagPill key={f.id} index={i} active={f.id === figure} onClick={() => setFigure(f.id)}>
            {f.label}
          </TagPill>
        ))}
        <span className="sp" />
        <button
          className="toggle"
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          disabled={fixedDark}
          title={fixedDark ? 'terminal is a fixed skin' : ''}
        >
          {fixedDark ? 'fixed skin' : theme === 'dark' ? 'ink parchment' : 'ink paper'}
        </button>
        <Button variant="ghost" href="../../profiles/README.md">Install profile</Button>
      </div>
      {active.render(theme)}
    </div>
  );
}

window.mountGallery = function (ds) {
  ReactDOM.createRoot(document.getElementById('root')).render(<GalleryApp ds={ds} />);
};
