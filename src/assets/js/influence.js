const { loadAbcjs } = await import(`./site.js?v=${document.documentElement.dataset.site ?? ''}`);

const esc = (s = '') => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const kindLabel = (s) => s.replaceAll('-', ' ');

export function mount(app) {
  const root = document.body.querySelector('[data-influence]');
  if (!root) return;
  const data = JSON.parse(root.querySelector('#influence-data').textContent);
  root.classList.add('iw-mounted');
  const $ = (selector, parent = root) => parent.querySelector(selector);
  const $$ = (selector, parent = root) => [...parent.querySelectorAll(selector)];
  const events = new AbortController();
  const on = (target, name, fn, options = {}) => target.addEventListener(name, fn, { ...options, signal: events.signal });
  const nodes = new Map(data.nodes.map((node) => [node.id, node]));
  const edges = new Map(data.edges.map((edge) => [edge.id, edge]));
  const nodeElements = new Map($$('[data-node]').map((el) => [el.dataset.node, el]));
  const edgeElements = new Map($$('.iw-edge').map((el) => [el.dataset.edge, el]));
  const nodeOrder = new Map(data.nodes.map((n, i) => [n.id, i]));
  const labelElements = data.nodes.map((n) => nodeElements.get(n.id));
  const adjacency = new Map(data.nodes.map((n) => [n.id, []]));
  for (const edge of data.edges) { adjacency.get(edge.from).push(edge); if (edge.to !== edge.from) adjacency.get(edge.to).push(edge); }
  const map = $('.iw-map'), world = $('.iw-world'), card = $('.iw-card'), content = $('.iw-card-content');
  const form = $('.iw-controls'), kindSelect = $('[name="kind"]'), eraSelect = $('[name="era"]');
  const threadChips = $$('.iw-thread-chips a'), masthead = document.querySelector('.masthead');
  const status = $('.iw-status'), mobile = matchMedia('(max-width: 700px)');
  let selection = null, visible = new Set(edges.keys()), alive = true, cardVersion = 0, returnFocus = null;
  let detailsPromise, audioContext, currentSound = null, soundVersion = 0;
  let frame = 0, scale = 1, fitScale = 1, panX = 0, panY = 0, bounds = { width: 0, height: 0, left: 0, top: 0 };
  const pointers = new Map();
  let gesture = null, dragged = false;
  let labelLayout = null, mastheadHeight = -1;

  function paint() {
    if (frame) return;
    frame = requestAnimationFrame(() => {
      frame = 0; world.style.transform = `translate3d(${panX}px,${panY}px,0) scale(${scale})`;
      const labelsOpen = scale >= fitScale * 1.6;
      if (root.classList.contains('iw-labels-open') !== labelsOpen) {
        root.classList.toggle('iw-labels-open', labelsOpen);
        if (!root.classList.contains('iw-has-focus')) highlight();
      }
    });
  }
  function fit() {
    scale = fitScale;
    panX = (bounds.width - data.size.width * scale) / 2;
    panY = (bounds.height - data.size.height * scale) / 2;
    paint();
  }
  function measure() {
    if (mobile.matches || !map.clientWidth) return;
    const headerHeight = Math.ceil(masthead?.getBoundingClientRect().height ?? 0);
    if (headerHeight !== mastheadHeight) { mastheadHeight = headerHeight; root.style.setProperty('--iw-masthead', `${headerHeight}px`); }
    const rect = map.getBoundingClientRect();
    const resized = bounds.width !== rect.width || bounds.height !== rect.height;
    bounds = { width: rect.width, height: rect.height, left: rect.left + scrollX, top: rect.top + scrollY };
    if (!resized) return;
    fitScale = Math.min(bounds.width / data.size.width, bounds.height / data.size.height) * .96;
    fit();
  }
  const resize = new ResizeObserver(measure);
  resize.observe(map);
  resize.observe($('.iw-heading'));
  resize.observe(form);
  if (masthead) resize.observe(masthead);
  function zoom(factor, x = bounds.width / 2, y = bounds.height / 2) {
    const next = Math.max(fitScale * .8, Math.min(fitScale * 6, scale * factor));
    const ratio = next / scale;
    panX = x - (x - panX) * ratio; panY = y - (y - panY) * ratio;
    scale = next; paint();
  }
  function centreNode(id) {
    if (mobile.matches) return;
    const node = nodes.get(id);
    scale = Math.max(scale, fitScale * 1.5);
    panX = Math.max(130, (bounds.width - Math.min(470, bounds.width * .4)) / 2) - node.x * scale;
    panY = bounds.height / 2 - node.y * scale;
    paint();
  }

  function highlight(nodeId = null) {
    const litEdges = new Set(), litNodes = new Set();
    if (nodeId) {
      litNodes.add(nodeId);
      for (const edge of adjacency.get(nodeId) ?? []) if (visible.has(edge.id)) { litEdges.add(edge.id); litNodes.add(edge.from); litNodes.add(edge.to); }
    } else if (selection?.type === 'node') return highlight(selection.id);
    else if (selection?.type === 'edge') {
      const edge = edges.get(selection.id); litEdges.add(edge.id); litNodes.add(edge.from); litNodes.add(edge.to);
    } else if (selection?.type === 'thread') {
      for (const edge of data.edges) if (edge.thread === selection.id && visible.has(edge.id)) { litEdges.add(edge.id); litNodes.add(edge.from); litNodes.add(edge.to); }
    }
    const layout = nodeId ? data.labelLayouts.nodes[nodeOrder.get(nodeId)]
      : selection?.type === 'edge' ? data.labelLayouts.nodes[nodeOrder.get(edges.get(selection.id).from)]
      : selection?.type === 'thread' && litNodes.size ? data.labelLayouts.threads[selection.id]
      : root.classList.contains('iw-labels-open') ? data.labelLayouts.zoom : data.labelLayouts.overview;
    if (layout !== labelLayout) {
      labelLayout = layout;
      for (const [i, x, y, length, angle] of layout) {
        const style = labelElements[i].style;
        style.setProperty('--lx', `${x}px`); style.setProperty('--ly', `${y}px`);
        style.setProperty('--ll', `${length}px`); style.setProperty('--la', `${angle}deg`);
      }
    }
    root.classList.toggle('iw-has-focus', litNodes.size > 0);
    for (const [id, el] of nodeElements) {
      el.classList.toggle('is-lit', litNodes.has(id));
      el.classList.toggle('is-selected', id === nodeId || (selection?.type === 'node' && selection.id === id));
    }
    for (const [id, el] of edgeElements) el.classList.toggle('is-lit', litEdges.has(id));
  }

  function filter() {
    const kind = kindSelect.value, era = eraSelect.value;
    visible = new Set();
    const shownNodes = new Set();
    for (const edge of data.edges) {
      const show = (!kind || edge.kind === kind) && (!era || nodes.get(edge.from).era === era || nodes.get(edge.to).era === era);
      edgeElements.get(edge.id).classList.toggle('is-filtered', !show);
      edgeElements.get(edge.id).setAttribute('tabindex', show ? '0' : '-1');
      if (show) { visible.add(edge.id); shownNodes.add(edge.from); shownNodes.add(edge.to); }
    }
    for (const node of data.nodes) {
      const show = !kind && !era || shownNodes.has(node.id);
      nodeElements.get(node.id).classList.toggle('is-filtered', !show);
      nodeElements.get(node.id).tabIndex = show ? 0 : -1;
    }
    $('.iw-empty').hidden = visible.size > 0 || !data.edges.length;
    status.textContent = `${visible.size} of ${data.edges.length} connections shown.`;
    highlight();
  }

  function stopSound() {
    soundVersion++;
    if (!currentSound) return;
    currentSound.synth?.stop(); currentSound.timer?.stop();
    currentSound.button.textContent = 'Play synthesised score';
    currentSound.button.classList.remove('is-playing');
    currentSound.button.removeAttribute('aria-busy');
    $$('.iw-score .playing').forEach((el) => el.classList.remove('playing'));
    currentSound = null;
  }
  const offPlayer = app.player.on('play', stopSound);
  async function playPassage(figure, button) {
    if (currentSound?.button === button) { stopSound(); return; }
    stopSound(); app.player.pause();
    const version = soundVersion;
    button.textContent = 'Loading sound…'; button.setAttribute('aria-busy', 'true');
    currentSound = { button };
    try {
      audioContext ??= new (window.AudioContext || window.webkitAudioContext)();
      await audioContext.resume();
      const ABCJS = await loadAbcjs(app.root);
      if (!alive || version !== soundVersion) return;
      const synth = new ABCJS.synth.CreateSynth();
      currentSound.synth = synth;
      await synth.init({ audioContext, visualObj: figure._visual, options: {} });
      await synth.prime();
      if (!alive || version !== soundVersion) { synth.stop(); return; }
      app.player.pause();
      let lit = [];
      const timer = new ABCJS.TimingCallbacks(figure._visual, { eventCallback: (event) => {
        lit.forEach((el) => el.classList.remove('playing'));
        if (!event) { stopSound(); return 'continue'; }
        lit = (event.elements ?? []).flat(); lit.forEach((el) => el.classList.add('playing'));
        return 'continue';
      } });
      currentSound.timer = timer;
      button.removeAttribute('aria-busy'); button.textContent = 'Stop passage'; button.classList.add('is-playing');
      synth.start(); timer.start();
      status.textContent = 'Playing the score example; the concert recording is paused.';
    } catch (error) {
      if (version !== soundVersion) return;
      stopSound(); status.textContent = 'Could not play the example; try again.';
      button.textContent = 'Try again'; console.error('Influence passage playback', error);
    }
  }

  function cardOpen(html) {
    if (card.hidden) returnFocus = document.activeElement;
    stopSound(); card.hidden = false; content.innerHTML = html;
    card.scrollTop = 0;
    $('.iw-explore').classList.add('has-card');
    card.setAttribute('aria-modal', mobile.matches ? 'true' : 'false');
    $('#iw-card-title')?.setAttribute('tabindex', '-1');
    $('#iw-card-title')?.focus({ preventScroll: true });
  }
  function closeCard(updateHash = true) {
    cardVersion++; stopSound(); card.hidden = true; selection = null;
    $('.iw-explore').classList.remove('has-card');
    selectThreadChip();
    for (const el of edgeElements.values()) { el.classList.remove('is-traced'); $('.iw-line', el).removeAttribute('pathLength'); }
    highlight();
    if (updateHash) history.pushState(null, '', location.pathname + location.search);
    if (returnFocus?.isConnected && returnFocus !== document.body) returnFocus.focus({ preventScroll: true });
  }
  function selectThreadChip(id = '') {
    for (const chip of threadChips) {
      if (chip.getAttribute('href') === `#thread-${id}`) chip.setAttribute('aria-current', 'true');
      else chip.removeAttribute('aria-current');
    }
  }
  const connectionList = (list, journey = false) => `<ol class="iw-connections${journey ? ' iw-journey' : ''}">${list.map((edge) => `<li><a href="#edge-${esc(edge.id)}"><span class="iw-connection-year">${edge.year}</span>${journey ? `<span class="iw-stop-cameo" aria-hidden="true">${$('.iw-medallion', nodeElements.get(edge.to)).innerHTML}</span>` : ''}<span><strong>${esc(edge.title)}</strong><small>${esc(nodes.get(edge.from).label)} → ${esc(nodes.get(edge.to).label)} · ${kindLabel(edge.kind)}</small></span></a></li>`).join('')}</ol>`;
  const scoreFigures = (passages) => passages.map(([side, passage], i) => `<figure class="iw-score" data-passage="${side}"><figcaption><span>${passages.length > 1 ? `${i + 1}. ` : ''}${esc(passage.label)}</span><a href="${esc(passage.checked)}" target="_blank" rel="noopener noreferrer">${esc(passage.sourceTitle ?? 'Score source')} ↗</a></figcaption><div class="iw-notation" aria-label="${esc(passage.label)}"><p>Loading the score…</p></div><div class="iw-score-actions"><button type="button" data-passage-play disabled>Play synthesised score</button>${passage.listen ? `<button type="button" data-hall-id="${esc(passage.listen.id)}" data-hall-t="${passage.listen.t}">Play the recording</button>` : ''}</div></figure>`).join('');
  async function engrave(passages, version) {
    if (!passages.length) return;
    const ABCJS = await loadAbcjs(app.root);
    if (!alive || version !== cardVersion) return;
    for (const [side, passage] of passages) {
      const figure = $(`[data-passage="${side}"]`), target = $('.iw-notation', figure);
      target.replaceChildren();
      // The wrapping caption already supplies the title.
      [figure._visual] = ABCJS.renderAbc(target, passage.abc.replace(/^T:.*(?:\r?\n|$)/gm, ''), { responsive: 'resize', staffwidth: mobile.matches ? 300 : 440, wrap: { minSpacing: 1.5, maxSpacing: 2.5, preferredMeasuresPerLine: mobile.matches ? 2 : 4 }, add_classes: true, paddingtop: 8, paddingbottom: 8, paddingleft: 0, paddingright: 0, foregroundColor: 'currentColor' });
      $('[data-passage-play]', figure).disabled = false;
    }
  }
  function showNode(id) {
    const node = nodes.get(id), list = adjacency.get(id);
    const incoming = list.filter((e) => e.to === id), outgoing = list.filter((e) => e.from === id);
    cardOpen(`<span class="iw-card-kicker">${esc(node.kind)} · ${esc(node.dates)}</span><h2 id="iw-card-title">${esc(node.name)}</h2><p class="iw-card-lede">${list.length} ${list.length === 1 ? 'connection' : 'connections'}.</p>${node.url ? `<p><a class="iw-chapter-link" href="${new URL(node.url, app.root).href}">Composer chapter</a></p>` : ''}<h3>Influences received</h3>${incoming.length ? connectionList(incoming) : '<p class="iw-quiet">None listed.</p>'}<h3>Influences passed on</h3>${outgoing.length ? connectionList(outgoing) : '<p class="iw-quiet">None listed.</p>'}`);
  }
  async function showThread(id, thread, version) {
    const stops = data.edges.filter((e) => e.thread === id);
    const passages = [['thread', { abc: thread.abc, label: thread.name, checked: thread.source.url, sourceTitle: thread.source.title }]];
    cardOpen(`<span class="iw-card-kicker">Recurring material · ${stops.length} connections</span><h2 id="iw-card-title">${esc(thread.name)}</h2>${scoreFigures(passages)}${thread.abcNote ? `<div class="iw-abc-note">${thread.abcNote}</div>` : ''}<div class="iw-card-lede">${thread.summary}</div><h3>Connections in date order</h3><p class="iw-quiet">Each date is that of a work or an encounter.</p>${stops.length ? connectionList(stops, true) : '<p>No connections listed.</p>'}`);
    stops.forEach((e, i) => { const el = edgeElements.get(e.id); el.style.setProperty('--trace-delay', `${Math.min(i * .3, 4)}s`); $('.iw-line', el).setAttribute('pathLength', '1'); el.classList.add('is-traced'); });
    await engrave(passages, version);
  }
  const sources = (items) => `<ol class="iw-sources">${items.map((source) => `<li><a href="${esc(source.url)}" target="_blank" rel="noopener noreferrer">${esc(source.title)}</a>${source.locator ? `<span>${esc(source.locator)}</span>` : ''}</li>`).join('')}</ol>`;
  async function showEdge(id, detail, version) {
    const summary = edges.get(id), passages = Object.entries(detail.exhibit ?? {}).filter(([, p]) => p?.abc);
    const art = detail.art ? `<figure class="iw-art"><a href="${esc(detail.art.url)}" target="_blank" rel="noopener noreferrer"><img src="${esc(new URL(detail.art.src, app.root).href)}" alt="${esc(detail.art.caption)}" loading="lazy" decoding="async"></a><figcaption>${esc(detail.art.caption)}</figcaption></figure>` : '';
    cardOpen(`<span class="iw-card-kicker">${summary.year} · ${kindLabel(summary.kind)}</span><h2 id="iw-card-title">${esc(detail.title)}</h2><p class="iw-card-route"><a href="#node-${esc(summary.from)}">${esc(nodes.get(summary.from).name)}</a><span>→</span><a href="#node-${esc(summary.to)}">${esc(nodes.get(summary.to).name)}</a></p>${detail.works ? `<dl class="iw-works">${['from', 'to'].filter((side) => detail.works[side]).map((side) => `<div><dt>${side === 'from' ? 'Original work' : 'Later work'}</dt><dd>${esc(detail.works[side])}</dd></div>`).join('')}</dl>` : ''}<div class="iw-claim">${detail.claim}</div><div class="iw-evidence"><span class="iw-badge ${detail.status}">${esc(detail.status)}</span><p>${detail.status === 'documented' ? 'Documented in the sources below.' : detail.note}</p></div>${detail.status === 'documented' && detail.note ? `<div class="iw-quiet">${detail.note}</div>` : ''}${passages.length || art ? `<section class="iw-exhibit"><h3>${passages.length > 1 ? 'Score examples' : 'Exhibit'}</h3><div class="iw-exhibit-content${art ? ' has-art' : ''}">${art}<div>${scoreFigures(passages)}</div></div></section>` : ''}<section class="iw-source-section"><h3>Sources</h3>${sources(detail.sources)}</section><a class="iw-permalink" href="#edge-${esc(id)}">Link to this connection</a>`);
    await engrave(passages, version);
  }

  async function openHash() {
    const match = location.hash.match(/^#(edge|node|thread)-(.+)$/);
    if (!match) { if (selection) closeCard(false); return; }
    const [, type, raw] = match;
    let id; try { id = decodeURIComponent(raw); } catch { return; }
    if (!(type === 'node' ? nodes.has(id) : type === 'edge' ? edges.has(id) : data.threads.some((t) => t.id === id))) {
      status.textContent = 'This person, connection or thread is not listed here.'; return;
    }
    const version = ++cardVersion;
    selection = { type, id };
    selectThreadChip(type === 'thread' ? id : '');
    for (const el of edgeElements.values()) { el.classList.remove('is-traced'); $('.iw-line', el).removeAttribute('pathLength'); }
    const title = type === 'node' ? nodes.get(id).name : type === 'thread' ? data.threads.find((t) => t.id === id).name : `${nodes.get(edges.get(id).from).label} → ${nodes.get(edges.get(id).to).label}`;
    cardOpen(`<h2 id="iw-card-title">${esc(title)}</h2><p role="status">Loading sources…</p>`);
    if (type === 'node') centreNode(id);
    else if (type === 'thread') fit();
    highlight();
    try {
      detailsPromise ??= fetch(new URL('assets/influence-details.json', app.root), { signal: events.signal })
        .then((response) => { if (!response.ok) throw new Error(`HTTP ${response.status}`); return response.json(); })
        .then((detail) => { for (const edge of data.edges) edge.title = detail.edges[edge.id].title; return detail; });
      const detail = await detailsPromise;
      if (!alive || version !== cardVersion) return;
      if (type === 'node') showNode(id);
      else if (type === 'thread') await showThread(id, detail.threads[id], version);
      else await showEdge(id, detail.edges[id], version);
    } catch (error) {
      if (!alive || version !== cardVersion) return;
      detailsPromise = null;
      const message = document.createElement('p'); message.className = 'iw-load-error'; message.textContent = 'Could not load the sources or score; reopen this card to try again.'; content.append(message);
      console.error('Influence evidence', error);
    }
  }
  function navigateHash(hash) { if (location.hash !== hash) history.pushState(null, '', hash); openHash(); }

  on(root, 'click', (event) => {
    const anchor = event.target.closest('a[href^="#"]');
    if (anchor && /^#(edge|node|thread)-/.test(anchor.getAttribute('href')) && !event.ctrlKey && !event.metaKey && !event.shiftKey) {
      event.preventDefault();
      if (dragged && anchor.closest('.iw-map')) { dragged = false; return; }
      navigateHash(anchor.getAttribute('href')); return;
    }
    const button = event.target.closest('button'); if (!button) return;
    const action = button.dataset.action;
    if (action === 'close') closeCard();
    else if (action === 'zoom-in') zoom(1.4);
    else if (action === 'zoom-out') zoom(1 / 1.4);
    else if (action === 'fit') fit();
    else if (action === 'reset') { form.reset(); closeCard(); filter(); fit(); }
    else if (button.hasAttribute('data-passage-play')) playPassage(button.closest('.iw-score'), button);
    else if (button.dataset.hallId) { stopSound(); app.player.load(button.dataset.hallId, { play: true, t: Number(button.dataset.hallT) }); }
  });
  on(form, 'submit', (event) => event.preventDefault());
  on(kindSelect, 'change', filter); on(eraSelect, 'change', filter);
  on(window, 'hashchange', openHash);
  on(window, 'popstate', openHash);
  on(map, 'pointerover', (event) => { if (pointers.size) return; const node = event.target.closest('[data-node]'); if (node && !node.contains(event.relatedTarget)) highlight(node.dataset.node); });
  on(map, 'pointerout', (event) => { const node = event.target.closest('[data-node]'); if (node && !node.contains(event.relatedTarget)) highlight(); });
  on(map, 'focusin', (event) => { const node = event.target.closest('[data-node]'); if (node) highlight(node.dataset.node); });
  on(map, 'focusout', () => highlight());
  on(map, 'wheel', (event) => { if (mobile.matches) return; event.preventDefault(); zoom(Math.exp(-event.deltaY * .0015), event.clientX + scrollX - bounds.left, event.clientY + scrollY - bounds.top); }, { passive: false });
  function beginGesture() {
    const points = [...pointers.values()];
    gesture = { x: points.reduce((s, p) => s + p.x, 0) / points.length, y: points.reduce((s, p) => s + p.y, 0) / points.length, panX, panY, scale, distance: points.length === 2 ? Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y) : 0 };
  }
  on(map, 'pointerdown', (event) => {
    if (mobile.matches || event.button !== 0 || pointers.size >= 2) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    dragged = false; beginGesture();
  });
  on(window, 'pointermove', (event) => {
    if (!pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const points = [...pointers.values()], x = points.reduce((s, p) => s + p.x, 0) / points.length, y = points.reduce((s, p) => s + p.y, 0) / points.length;
    if (Math.hypot(x - gesture.x, y - gesture.y) > 4 || points.length === 2) { dragged = true; map.classList.add('is-dragging'); event.preventDefault(); }
    if (!dragged) return;
    if (points.length === 2 && gesture.distance) {
      scale = Math.max(fitScale * .8, Math.min(fitScale * 6, gesture.scale * Math.hypot(points[0].x - points[1].x, points[0].y - points[1].y) / gesture.distance));
      const originX = gesture.x + scrollX - bounds.left, originY = gesture.y + scrollY - bounds.top;
      panX = originX - (originX - gesture.panX) * scale / gesture.scale + x - gesture.x;
      panY = originY - (originY - gesture.panY) * scale / gesture.scale + y - gesture.y;
    } else { panX = gesture.panX + x - gesture.x; panY = gesture.panY + y - gesture.y; }
    paint();
  }, { passive: false });
  const pointerEnd = (event) => { pointers.delete(event.pointerId); if (pointers.size) beginGesture(); else { gesture = null; map.classList.remove('is-dragging'); } };
  on(window, 'pointerup', pointerEnd); on(window, 'pointercancel', pointerEnd);
  on(map, 'dragstart', (event) => event.preventDefault());
  on(map, 'keydown', (event) => {
    if (mobile.matches) return;
    const move = { ArrowLeft: [60, 0], ArrowRight: [-60, 0], ArrowUp: [0, 60], ArrowDown: [0, -60] }[event.key];
    if (move) { event.preventDefault(); panX += move[0]; panY += move[1]; paint(); }
    else if (['+', '=', '-', 'Home'].includes(event.key)) { event.preventDefault(); if (event.key === 'Home') fit(); else zoom(event.key === '-' ? 1 / 1.3 : 1.3); }
  });
  on(document, 'keydown', (event) => {
    if (card.hidden) return;
    if (event.key === 'Escape') { event.preventDefault(); closeCard(); }
    if (event.key === 'Tab' && mobile.matches) {
      const focusable = $$('a[href],button:not([disabled]),[tabindex="0"]', card), first = focusable[0], last = focusable.at(-1);
      if (event.shiftKey && (document.activeElement === first || document.activeElement.id === 'iw-card-title')) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    }
  });
  const viewportChanged = () => {
    map.tabIndex = mobile.matches ? -1 : 0;
    map.setAttribute('aria-label', mobile.matches ? 'Influence timeline, ordered by birth year. Select a person to show their connections.' : 'Influence map. Drag to pan, scroll to zoom. Arrow keys pan, plus and minus zoom, Home resets.');
    if (!card.hidden) card.setAttribute('aria-modal', mobile.matches ? 'true' : 'false');
    measure();
    if (selection?.type === 'node') centreNode(selection.id);
  };
  on(mobile, 'change', viewportChanged);
  viewportChanged(); filter(); openHash();
  return () => { alive = false; events.abort(); resize.disconnect(); offPlayer(); stopSound(); if (frame) cancelAnimationFrame(frame); audioContext?.close(); root.classList.remove('iw-mounted'); };
}
