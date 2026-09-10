/* Resolve the Ris Ink component namespace.
   Prefers the compiled design-system bundle (window.<Namespace>); if it hasn't been built
   yet, transpiles the component sources in the browser so every demo page still renders. */
(function () {
  var SOURCES = [
    "components/diagram/DiagramFrame.jsx",
    "components/diagram/DiagramNode.jsx",
    "components/diagram/DiagramArrow.jsx",
    "components/diagram/DiagramZone.jsx",
    "components/diagram/DiagramLegend.jsx",
    "components/diagram/Annotation.jsx",
    "components/diagram/TerminalWindow.jsx",
    "components/brand/InkFilters.jsx",
    "components/brand/Button.jsx",
    "components/brand/TagPill.jsx",
    "components/brand/Card.jsx",
    "components/brand/ListRow.jsx",
    "components/brand/Blockquote.jsx",
    "components/brand/Aside.jsx",
    "components/brand/Eyebrow.jsx"
  ];

  function fromBundle() {
    var keys = Object.keys(window);
    for (var i = 0; i < keys.length; i++) {
      try {
        var o = window[keys[i]];
        if (o && typeof o === 'object' && o.DiagramNode && o.Button && o.InkFilters) return o;
      } catch (e) { /* cross-origin frame or restricted getter — skip */ }
    }
    return null;
  }

  /* Try the compiled bundle first (it may not exist until the design system is indexed). */
  function tryBundle(root) {
    if (fromBundle()) return Promise.resolve(true);
    return new Promise(function (resolve) {
      var el = document.createElement('script');
      el.src = root + '_ds_bundle.js';
      el.onload = function () { resolve(true); };
      el.onerror = function () { resolve(false); };
      document.head.appendChild(el);
    });
  }

  window.loadRisDS = function (root) {
    root = root || '';
    return tryBundle(root).then(function () { return loadFromSource(root); });
  };

  function loadFromSource(root) {
    var bundled = fromBundle();
    if (bundled) return Promise.resolve(bundled);

    return Promise.all(SOURCES.map(function (p) {
      return fetch(root + p).then(function (r) { return r.ok ? r.text() : ''; });
    })).then(function (sources) {
      var ns = {};
      sources.forEach(function (src) {
        if (!src) return;
        var names = (src.match(/export function (\w+)/g) || [])
          .map(function (m) { return m.replace('export function ', ''); });
        if (!names.length) return;
        var stripped = src
          .replace(/^\s*import[^;]*;\s*$/gm, '')
          .replace(/export function/g, 'function');
        var code = window.Babel.transform(stripped, { presets: [['react', { runtime: 'classic' }]] }).code;
        var out = new Function('React', code + '\nreturn {' +
          names.map(function (n) { return n + ':' + n; }).join(',') + '};')(window.React);
        Object.assign(ns, out);
      });
      return ns;
    });
  }
})();

/* Fetch, transpile and run sibling JSX screen files that register themselves on window. */
window.loadRisScripts = function (paths, root) {
  root = root || '';
  return Promise.all(paths.map(function (p) {
    return fetch(root + p).then(function (r) { return r.ok ? r.text() : ''; });
  })).then(function (sources) {
    sources.forEach(function (src) {
      if (!src) return;
      var code = window.Babel.transform(src, { presets: [['react', { runtime: 'classic' }]] }).code;
      new Function('React', code)(window.React);
    });
  });
};
