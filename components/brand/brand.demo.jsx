function Demo({ ds }) {
    const { InkFilters, Button, TagPill, ListRow, Blockquote, Aside, Eyebrow } = ds;
    return (
      <div>
        <InkFilters />
        <div className="row">
          <Button arrow>Read the guide</Button>
          <Button variant="ghost">Install profile</Button>
          <Button variant="ghost" disabled>Disabled</Button>
        </div>
        <div className="row">
          {['architecture','process','layers','er','gantt'].map((t,i) => (
            <TagPill key={t} index={i} active={i===0}>{t}</TagPill>
          ))}
        </div>
        <Eyebrow tone="teal">Gallery · 2026</Eyebrow>
        <div style={{marginTop:8}}>
          <ListRow date="2026-09-10" title="Content site in production" category="architecture" href="#" />
          <ListRow date="2026-08-22" title="Ingest pipeline, medallion" category="data flow" href="#" />
        </div>
        <Blockquote cite="style-guide.md">Every token is referred to by semantic role, not by its hex value.</Blockquote>
        <Aside label="note">Marker-first projects never touch the shared working copy.</Aside>
      </div>
    );
  }

window.mountBrandDemo = function (ds) {
  ReactDOM.createRoot(document.getElementById('root')).render(<Demo ds={ds} />);
};
