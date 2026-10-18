// The Map is a page module: the router owns navigation and the single player.
const NS = 'http://www.w3.org/2000/svg';
const escape = (s = '') => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const dateText = (p) => `${p.from}${p.to && p.to !== p.from ? `–${p.to}` : ''}`;
const svgNode = (tag, attrs = {}, parent) => {
  const node = document.createElementNS(NS, tag);
  for (const [key, value] of Object.entries(attrs)) node.setAttribute(key, value);
  parent?.append(node); return node;
};
const clamp = (n, a, b) => Math.max(a, Math.min(b, n));

export async function mount(app) {
  const root = document.querySelector('[data-atlas-map]'); if (!root) return;
  const abort = new AbortController(), signal = abort.signal;
  const on = (node, event, handler, options = {}) => node.addEventListener(event, handler, { ...options, signal });
  const $ = (selector) => root.querySelector(selector);
  const status = $('.am-status'), svg = $('.am-map'), world = $('.am-world'), stage = $('.am-stage');
  const card = $('.am-card'), cardContent = $('.am-card-content'), composerSelect = $('[name="composer"]'), citySelect = $('[name="city"]');
  const slider = $('#am-year'), yearDisplays = root.querySelectorAll('[data-year-display]'), playYears = $('[data-action="time-play"]');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)'), mobile = matchMedia('(max-width: 700px)');
  const url = (relative) => new URL(relative, app.root).href;
  const getJSON = async (name) => {
    const response = await fetch(url(`assets/data/geo/${name}.json`), { signal });
    if (!response.ok) throw new Error(`Map data unavailable (${response.status})`);
    return response.json();
  };
  let data, base;
  try { [data, base] = await Promise.all([getJSON('index'), getJSON('base')]); }
  catch (error) { if (!signal.aborted) status.textContent = `${error.message}. Composer Places sections remain available.`; return () => abort.abort(); }
  if (!root.isConnected) { abort.abort(); return; }
  for (const [key, cls] of [['land', 'land'], ['coastline', 'coast'], ['countries', 'countries'], ['graticule', 'graticule']]) $(`.am-${cls}`).setAttribute('d', base[key]);
  const byId = new Map(data.composers.map((c, i) => [c.id, { ...c, index: i }]));
  const detailCache = new Map(), sprites = [], trails = [], events = [], citySprites = [], routeSprites = [];
  let year = clamp(Number(new URL(location.href).searchParams.get('year')) || 1805, data.first, data.last);
  let selected = '', selectedCity = Number(citySelect.value), detail = null, focusRequest = 0, selectedPlace = -1;
  let width = 900, height = 530, tx = 0, ty = 0, scale = 1, previousScale = 0;
  let view = data.europe, frame = [], paintId = 0, timeId = 0, playing = false, lastTick = 0, clock = 0;
  let moved = false, pointerRect, gesture, suppressClickUntil = 0;
  const pointers = new Map();

  for (const [index, c] of data.composers.entries()) {
    const anchor = svgNode('g', { class: 'am-person', role: 'button', tabindex: '-1', 'data-composer': c.id, 'aria-label': c.name }, $('.am-people'));
    const tether = svgNode('path', { class: 'am-tether' }, anchor);
    const icon = svgNode('g', { class: 'am-person-icon' }, anchor);
    const title = svgNode('title', {}, icon); title.textContent = c.name;
    const face = svgNode('g', { class: 'am-face' }, icon);
    svgNode('ellipse', { rx: 19, ry: 24, class: 'am-outer-frame' }, face);
    svgNode('ellipse', { rx: 16, ry: 21, class: 'am-portrait-ground' }, face);
    const image = c.portrait ? svgNode('image', { x: -16, y: -21, width: 32, height: 42, preserveAspectRatio: 'xMidYMin slice', 'clip-path': 'url(#am-oval)' }, face) : null;
    if (!image) { const monogram = svgNode('text', { y: 6, 'text-anchor': 'middle', class: 'am-monogram' }, face); monogram.textContent = c.label.slice(0, 1); }
    svgNode('ellipse', { rx: 16, ry: 21, class: 'am-inner-frame' }, face);
    const name = svgNode('text', { y: 38, 'text-anchor': 'middle', class: 'am-person-name' }, face); name.textContent = c.label;
    const cross = svgNode('text', { y: 7, 'text-anchor': 'middle', class: 'am-cross' }, icon); cross.textContent = '†';
    sprites.push({ anchor, icon, tether, title, image, index, c });
    c.places.forEach((p, i) => {
      if (p.path) trails.push({ node: svgNode('path', { d: p.path, class: `am-trail${p.kind === 'travelled' ? ' am-travel' : ''}` }, $('.am-trails')), p, c });
      if (p.kind === 'premiere') {
        const g = svgNode('g', { class: 'am-premiere', role: 'button', tabindex: '-1', 'data-composer': c.id, 'data-place': i, 'aria-label': `${p.work}, ${p.y}` }, $('.am-events'));
        const icon = svgNode('g', {}, g);
        const star = svgNode('text', { 'text-anchor': 'middle', y: 8, class: 'am-star' }, icon); star.textContent = '✧';
        const label = svgNode('text', { x: 18, y: -7, class: 'am-premiere-name' }, icon); label.textContent = p.work;
        const title = svgNode('title', {}, g); title.textContent = `${c.name}: ${p.work} · ${p.y}${c.died && p.y > c.died ? ' · posthumous premiere' : ''}`;
        events.push({ node: g, icon, p });
      }
    });
  }
  for (const city of data.cities) {
    if (!city.visits.length) continue;
    const node = svgNode('g', { class: 'am-city', role: 'button', tabindex: '-1', 'data-city': city.id, 'aria-label': `Who was in ${city.name}?` }, $('.am-cities'));
    const icon = svgNode('g', {}, node);
    svgNode('circle', { r: 14, class: 'am-city-hit' }, icon);
    svgNode('circle', { r: 2.5, class: 'am-city-dot' }, icon);
    const label = svgNode('text', { x: 7, y: 4, class: 'am-city-name' }, icon); label.textContent = city.name;
    citySprites.push({ node, icon, city });
  }

  function schedulePaint() { if (!paintId) paintId = requestAnimationFrame(paint); }
  function paint() {
    paintId = 0;
    world.setAttribute('transform', `translate(${tx} ${ty}) scale(${scale})`);
    const inverse = 1 / scale;
    for (const row of frame) {
      const sprite = sprites[row[0]], p = sprite.c.places[row[1]], dx = row[2], dy = row[3];
      sprite.anchor.setAttribute('transform', `translate(${p.x} ${p.z})`);
      sprite.icon.setAttribute('transform', `translate(${dx * inverse} ${dy * inverse}) scale(${inverse})`);
      sprite.tether.setAttribute('d', `M0,0L${dx * inverse},${dy * inverse}`);
    }
    if (previousScale !== scale) {
      for (const { node, icon, city } of citySprites) { node.setAttribute('transform', `translate(${city.x} ${city.y})`); icon.setAttribute('transform', `scale(${inverse})`); }
      for (const { node, icon, p } of events) { node.setAttribute('transform', `translate(${p.x} ${p.z})`); icon.setAttribute('transform', `scale(${inverse})`); }
      previousScale = scale;
    }
    for (const { node, p, dx, dy } of routeSprites) node.setAttribute('transform', `translate(${p.x + dx * inverse} ${p.z + dy * inverse}) scale(${inverse})`);
  }
  function fit(box) {
    view = box;
    scale = clamp(Math.min((width - 85) / Math.max(box[2], 100), (height - 90) / Math.max(box[3], 90)), .18, 9);
    tx = width / 2 - (box[0] + box[2] / 2) * scale;
    ty = height / 2 - (box[1] + box[3] / 2) * scale;
    schedulePaint();
  }
  function routeBounds(c) {
    let minX = Infinity, maxX = -Infinity, minY = Infinity, maxY = -Infinity;
    for (const p of c.places) { minX = Math.min(minX, p.x); maxX = Math.max(maxX, p.x); minY = Math.min(minY, p.z); maxY = Math.max(maxY, p.z); }
    return [minX - 24, minY - 30, Math.max(100, maxX - minX + 48), Math.max(100, maxY - minY + 60)];
  }
  function zoom(factor, x = width / 2, y = height / 2) {
    const next = clamp(scale * factor, .18, 12), ratio = next / scale;
    tx = x - (x - tx) * ratio; ty = y - (y - ty) * ratio; scale = next; schedulePaint();
  }
  function updateHash(id = '') {
    const u = new URL(location.href); u.hash = id ? `c-${id}` : ''; u.searchParams.set('year', year);
    history.replaceState(null, '', u);
  }
  function updateYear(next, announce = false) {
    year = clamp(Math.round(next), data.first, data.last); slider.value = year;
    for (const output of yearDisplays) output.textContent = year;
    frame = (mobile.matches ? data.mobileFrames : data.frames)[year - data.first];
    for (const sprite of sprites) { sprite.anchor.classList.add('am-hidden'); sprite.anchor.setAttribute('tabindex', '-1'); }
    let alive = 0;
    for (const row of frame) {
      const s = sprites[row[0]], visible = !selected || s.c.id === selected;
      s.anchor.classList.toggle('am-hidden', !visible);
      s.anchor.classList.toggle('am-dead', Boolean(row[4]));
      s.anchor.classList.toggle('am-last-known', !row[5]);
      s.anchor.setAttribute('tabindex', visible ? '0' : '-1');
      const p = s.c.places[row[1]], city = data.cities[p.city].name;
      s.title.textContent = `${s.c.name} · ${row[4] ? 'died; ' : row[5] ? '' : 'last recorded place: '}${city} · ${year}`;
      s.anchor.setAttribute('aria-label', s.title.textContent);
      if (!row[4]) { alive++; if (s.image && !s.image.hasAttribute('href') && visible) s.image.setAttribute('href', url(s.c.portrait)); }
    }
    for (const trail of trails) {
      const visible = !selected && trail.p.y <= year && (!trail.c.died || trail.p.y <= trail.c.died);
      trail.node.classList.toggle('am-hidden', !visible);
      trail.node.classList.toggle('am-travelling', trail.p.kind === 'travelled' && trail.p.y <= year && trail.p.end >= year);
    }
    for (const event of events) {
      const visible = event.p.y === year && (!selected || event.node.dataset.composer === selected);
      event.node.classList.toggle('am-hidden', !visible); event.node.setAttribute('tabindex', visible ? '0' : '-1');
    }
    for (const s of citySprites) {
      const present = s.city.visits.some((v) => v.a <= year && v.b >= year);
      const visible = !selected && (present || s.city.id === selectedCity);
      s.node.classList.toggle('am-hidden', !visible);
      s.node.classList.toggle('am-city-selected', s.city.id === selectedCity);
      s.node.setAttribute('tabindex', visible ? '0' : '-1');
    }
    if (!selected) renderEncounters(false);
    if (announce) { status.textContent = `${year}: ${alive} living composers with place records. Select a city to see documented presence.`; updateHash(selected); }
    schedulePaint();
  }
  function openCard() { card.classList.add('am-card-open'); }
  function renderEncounters(open = true) {
    const city = data.cities[selectedCity];
    if (!city) { cardContent.innerHTML = '<h2>Places are being researched</h2><p>No sourced geography is available yet.</p>'; return; }
    const visits = city.visits.filter((v) => v.a <= year && v.b >= year), unique = new Map();
    for (const visit of visits) { const list = unique.get(visit.c) ?? []; list.push(visit); unique.set(visit.c, list); }
    const pairs = city.pairs.filter((p) => p.from <= year && p.to >= year);
    cardContent.innerHTML = `<span class="kicker">Who was here?</span><h2>${escape(city.name)} <em>${year}</em></h2><p class="am-card-intro">${unique.size} ${unique.size === 1 ? 'composer' : 'composers'} with documented presence in this year.</p>${unique.size ? `<ul class="am-residents">${[...unique].map(([id, records]) => {
      const c = byId.get(id);
      return `<li><button type="button" data-focus="${escape(id)}">${c.portrait ? `<img src="${url(c.portrait)}" width="36" height="46" alt="">` : ''}<span><strong>${escape(c.name)}</strong><small>${records.map((v) => escape(v.from === v.to ? v.from : `${v.from}–${v.to}`)).join(' · ')}</small></span><b aria-hidden="true">→</b></button></li>`;
    }).join('')}</ul>` : '<p class="am-empty">No documented presence in the available records. This is a gap in the collection, not evidence that nobody was here.</p>'}<h3>Overlapping dates</h3>${pairs.length ? `<ul class="am-overlaps">${pairs.map((p) => `<li><span>${p.ids.map((id) => `<button type="button" data-focus="${escape(id)}">${escape(byId.get(id).label)}</button>`).join(' &amp; ')}</span><small>${p.from === p.to ? p.from : `${p.from}–${p.to}`}</small></li>`).join('')}</ul>` : '<p class="am-small">No overlapping documented date ranges for two composers in this year.</p>'}<p class="am-caution">An overlap is not proof of a meeting. A year may include separate visits; open a life for the dates and sources.</p><div class="am-city-prompts"><button type="button" data-vienna="1790">Vienna · 1790</button><button type="button" data-vienna="1805">Vienna · 1805</button><button type="button" data-paris="1900">Paris · 1900</button></div>`;
    if (open) openCard();
  }
  const playButton = (recording) => `<button type="button" class="am-listen" data-map-play="${escape(recording.id)}"><span aria-hidden="true">▶</span><span>${escape(recording.work)}${recording.movement ? `<small>${escape(recording.movement)}</small>` : ''}</span></button>`;
  function renderDetail(c) {
    const records = new Map(c.recordings.map((r) => [r.id, r]));
    cardContent.innerHTML = `<div class="am-person-heading">${c.portrait ? `<img src="${url(c.portrait)}" width="64" height="82" alt="${escape(c.name)}">` : ''}<div><span class="kicker">A life in places</span><h2>${escape(c.name)}</h2><p>${c.born}–${c.died ?? ''} · ${c.places.length} records</p></div></div><p class="am-card-intro">The whole recorded route, including places beyond the selected year. Numbers correspond to the list.</p><p class="am-detail-links"><a href="${url(`composers/${c.id}.html#places`)}">Read the composer chapter →</a><button type="button" data-action="route-fit">Fit the whole route</button></p><section class="am-recordings" id="am-recordings"><h3>Listen to ${escape(c.label)}</h3>${c.recordings.length ? c.recordings.slice(0, 3).map(playButton).join('') + (c.recordings.length > 3 ? `<details><summary>All ${c.recordings.length} published recordings</summary>${c.recordings.slice(3).map(playButton).join('')}</details>` : '') : '<p>No recording by this composer is published yet.</p>'}</section><ol class="am-places">${c.places.map((p, i) => {
      const exact = p.listens.map((id) => records.get(id)).filter(Boolean);
      const posthumous = c.died && p.y > c.died;
      return `<li id="am-place-${i}" data-record="${i}"><button type="button" class="am-place-heading" data-place-index="${i}"><b>${i + 1}</b><span>${escape(p.name)}<small>${escape(dateText(p))} · ${escape(p.kind)}${posthumous ? ' · after death' : ''}</small></span></button><span class="am-badge am-${escape(p.status)}">${escape(p.status)}</span><p>${escape(p.what)}</p>${p.work ? `<p class="am-place-work"><i>${escape(p.work)}</i></p>` : ''}<small class="am-country">${escape(p.country)}</small><details class="am-sources"><summary>${p.sources.length} ${p.sources.length === 1 ? 'source' : 'sources'}</summary><ul>${p.sources.map((s) => `<li><a href="${escape(s.url)}" target="_blank" rel="noopener">${escape(s.title)}</a>${s.locator ? ` — ${escape(s.locator)}` : ''}</li>`).join('')}</ul></details>${p.work || p.kind === 'premiere' ? exact.length ? `<div class="am-place-listens">${exact.map(playButton).join('')}</div>` : `<details class="am-place-listens"><summary>No exact work-title match · other ${escape(c.label)} recordings</summary>${c.recordings.length ? c.recordings.map(playButton).join('') : '<p>No published recording available.</p>'}</details>` : ''}</li>`;
    }).join('')}</ol>${c.influences.length ? `<section class="am-evidence"><h3>Music connected to a place</h3><p class="am-small">Dotted lines are musical connections, not asserted meetings or travel routes.</p><ul>${c.influences.map((e) => `<li><a href="${url(`influence.html#edge-${e.id}`)}">${escape(e.title)}</a><small>${escape(e.place)} · ${e.year} · ${escape(e.status)}</small></li>`).join('')}</ul></section>` : ''}<p class="am-small"><a href="${url(`assets/data/geo/${c.id}.json`)}" download>Download this life’s sourced place records</a></p>`;
    cardContent.scrollTop = 0; openCard();
  }
  function drawRoute(c) {
    $('.am-route').replaceChildren(); $('.am-route-points').replaceChildren(); $('.am-influence').replaceChildren(); routeSprites.length = 0;
    const compact = byId.get(c.id), occurrences = new Map();
    for (const [i, p] of c.places.entries()) {
      const item = compact.places[i];
      if (item.path) svgNode('path', { d: item.path, class: `am-life-route${c.died && p.y > c.died ? ' am-posthumous' : ''}` }, $('.am-route'));
      const count = occurrences.get(p.city) ?? 0; occurrences.set(p.city, count + 1);
      const ring = Math.floor(count / 8), angle = count * Math.PI / 4;
      const dx = count ? Math.cos(angle) * (24 + ring * 23) : 0, dy = count ? Math.sin(angle) * (24 + ring * 23) : 0;
      const node = svgNode('g', { class: 'am-route-point', role: 'button', tabindex: '0', 'data-route-place': i, 'aria-label': `${i + 1}. ${p.name}, ${dateText(p)}` }, $('.am-route-points'));
      svgNode('path', { d: `M${-dx},${-dy}L0,0`, class: 'am-point-tether' }, node);
      svgNode('circle', { r: 10 }, node);
      const label = svgNode('text', { y: 4, 'text-anchor': 'middle' }, node); label.textContent = i + 1;
      const title = svgNode('title', {}, node); title.textContent = `${p.name} · ${dateText(p)}`;
      routeSprites.push({ node, p, dx, dy });
    }
    for (const edge of c.influences) {
      const line = svgNode('path', { class: 'am-influence-line', d: edge.path }, $('.am-influence'));
      const title = svgNode('title', {}, line); title.textContent = `${edge.title} · ${edge.place}, ${edge.year}. ${edge.note}`;
    }
    schedulePaint();
  }
  async function focusComposer(id, fromHash = false, place = -1) {
    stopYears();
    const c = byId.get(id);
    if (!c) {
      clearFocus(false);
      if (id) status.textContent = 'No sourced geography is published for that composer yet. Choose another mapped life.';
      return;
    }
    selected = id; composerSelect.value = id; selectedPlace = place;
    const request = ++focusRequest;
    cardContent.innerHTML = `<span class="kicker">A life in places</span><h2>${escape(c.name)}</h2><p>Loading the sourced records…</p>`;
    openCard(); if (!fromHash) updateHash(id); updateYear(year);
    try {
      if (!detailCache.has(id)) detailCache.set(id, getJSON(id));
      const loaded = await detailCache.get(id);
      if (signal.aborted || request !== focusRequest) return;
      detail = loaded; renderDetail(detail); drawRoute(detail); fit(routeBounds(detail));
      status.textContent = `${detail.name}: ${detail.places.length} sourced places. The whole route is shown; select a numbered stop for its evidence.`;
      if (selectedPlace >= 0) revealPlace(selectedPlace, true);
    } catch (error) {
      detailCache.delete(id);
      if (!signal.aborted && request === focusRequest) { cardContent.innerHTML = `<h2>${escape(c.name)}</h2><p>${escape(error.message)}. <a href="${url(`composers/${id}.html#places`)}">Read the static Places section</a>.</p>`; }
    }
  }
  function clearFocus(changeHash = true) {
    focusRequest++; selected = ''; detail = null; selectedPlace = -1; composerSelect.value = '';
    $('.am-route').replaceChildren(); $('.am-route-points').replaceChildren(); $('.am-influence').replaceChildren(); routeSprites.length = 0;
    if (changeHash) updateHash();
    updateYear(year); fit(data.europe);
  }
  function revealPlace(index, scroll) {
    const p = detail?.places[index]; if (!p) return;
    selectedPlace = index;
    for (const [i, s] of routeSprites.entries()) s.node.classList.toggle('am-place-selected', i === index);
    const row = cardContent.querySelector(`[data-record="${index}"]`);
    for (const el of cardContent.querySelectorAll('.am-place-active')) el.classList.remove('am-place-active');
    row?.classList.add('am-place-active');
    if (scroll && row) { cardContent.scrollTo({ top: row.offsetTop - cardContent.offsetTop - 14, behavior: reduced.matches ? 'instant' : 'smooth' }); openCard(); }
    scale = Math.max(scale, mobile.matches ? 1.3 : 2); tx = width / 2 - p.x * scale; ty = height / 2 - p.z * scale; schedulePaint();
  }
  function chooseCity(id) {
    clearFocus(); selectedCity = Number(id); citySelect.value = String(id); updateYear(year); renderEncounters();
    const city = data.cities[selectedCity];
    if (city) { scale = mobile.matches ? 1.2 : 1.7; tx = width / 2 - city.x * scale; ty = height / 2 - city.y * scale; schedulePaint(); }
  }
  function stopYears() {
    playing = false; cancelAnimationFrame(timeId); timeId = 0;
    playYears.textContent = '▶'; playYears.setAttribute('aria-label', 'Play the years'); playYears.setAttribute('aria-pressed', 'false');
  }
  function tick(now) {
    if (!playing || signal.aborted) return;
    clock += Math.min(100, now - lastTick); lastTick = now;
    if (clock >= (reduced.matches ? 1600 : 650)) {
      clock = 0; updateYear(year + 1);
      if (year === data.last) { stopYears(); updateHash(selected); return; }
    }
    timeId = requestAnimationFrame(tick);
  }
  function toggleYears() {
    if (playing) { stopYears(); updateHash(selected); return; }
    if (year === data.last) updateYear(data.first);
    playing = true; clock = 0; lastTick = performance.now();
    playYears.textContent = 'Ⅱ'; playYears.setAttribute('aria-label', 'Pause the years'); playYears.setAttribute('aria-pressed', 'true');
    timeId = requestAnimationFrame(tick);
  }
  on(slider, 'input', () => { stopYears(); updateYear(Number(slider.value), true); });
  on(composerSelect, 'change', () => composerSelect.value ? focusComposer(composerSelect.value) : clearFocus());
  on(citySelect, 'change', () => chooseCity(citySelect.value));
  on(root, 'click', async (event) => {
    if (performance.now() < suppressClickUntil && svg.contains(event.target)) { event.preventDefault(); return; }
    const target = event.target.closest('[data-action],[data-composer],[data-city],[data-focus],[data-map-play],[data-route-place],[data-place-index],[data-vienna],[data-paris]');
    if (!target) return;
    if (target.dataset.composer) { focusComposer(target.dataset.composer, false, Number(target.dataset.place ?? -1)); return; }
    if (target.dataset.focus) { focusComposer(target.dataset.focus); return; }
    if (target.dataset.city != null) { chooseCity(target.dataset.city); return; }
    if (target.dataset.routePlace != null) { revealPlace(Number(target.dataset.routePlace), true); return; }
    if (target.dataset.placeIndex != null) { revealPlace(Number(target.dataset.placeIndex), false); return; }
    if (target.dataset.vienna || target.dataset.paris) {
      const city = data.cities.find((c) => c.name === (target.dataset.vienna ? 'Vienna' : 'Paris'));
      stopYears(); updateYear(Number(target.dataset.vienna ?? target.dataset.paris)); if (city) chooseCity(city.id); return;
    }
    if (target.dataset.mapPlay) {
      target.disabled = true;
      try { await app.player.load(target.dataset.mapPlay, { play: true, t: 0 }); if (!signal.aborted) status.textContent = `Playing ${app.player.track?.work ?? 'the selected recording'}. Music continues as you explore.`; }
      catch { if (!signal.aborted) status.textContent = 'The recording could not be loaded. Open it in the Hall to see its source.'; }
      finally { target.disabled = false; }
      return;
    }
    switch (target.dataset.action) {
      case 'time-play': toggleYears(); break;
      case 'zoom-in': zoom(1.35); break;
      case 'zoom-out': zoom(1 / 1.35); break;
      case 'europe': fit(data.europe); break;
      case 'world': fit(data.world); break;
      case 'route-fit': case 'fit': fit(detail ? routeBounds(detail) : data.europe); break;
      case 'encounters': clearFocus(); renderEncounters(); break;
      case 'close': if (mobile.matches) card.classList.remove('am-card-open'); else { clearFocus(); renderEncounters(false); } break;
    }
  });
  on(svg, 'keydown', (event) => {
    if (['Enter', ' '].includes(event.key) && event.target !== svg) { event.preventDefault(); event.target.dispatchEvent(new MouseEvent('click', { bubbles: true })); return; }
    const actions = { '+': () => zoom(1.25), '=': () => zoom(1.25), '-': () => zoom(.8), Home: () => fit(data.europe), ArrowLeft: () => { tx += 65; }, ArrowRight: () => { tx -= 65; }, ArrowUp: () => { ty += 65; }, ArrowDown: () => { ty -= 65; } };
    if (actions[event.key]) { event.preventDefault(); actions[event.key](); schedulePaint(); }
  });
  on(root, 'keydown', (event) => { if (event.key === 'Escape') { stopYears(); if (selected) clearFocus(); card.classList.remove('am-card-open'); composerSelect.focus(); } });
  function gestureStart() {
    const points = [...pointers.values()], a = points[0], b = points[1] ?? a;
    gesture = { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, distance: Math.hypot(b.x - a.x, b.y - a.y), tx, ty, scale };
  }
  on(svg, 'pointerdown', (event) => {
    if (event.button !== 0) return;
    pointerRect = svg.getBoundingClientRect();
    pointers.set(event.pointerId, { x: event.clientX - pointerRect.left, y: event.clientY - pointerRect.top });
    if (!event.target.closest('[role="button"]')) svg.setPointerCapture(event.pointerId);
    moved = false; gestureStart();
  });
  on(svg, 'pointermove', (event) => {
    if (!pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, { x: event.clientX - pointerRect.left, y: event.clientY - pointerRect.top });
    const points = [...pointers.values()], a = points[0], b = points[1] ?? a, x = (a.x + b.x) / 2, y = (a.y + b.y) / 2;
    if (Math.hypot(x - gesture.x, y - gesture.y) > 4 || points.length > 1) moved = true;
    if (moved && !svg.hasPointerCapture(event.pointerId)) svg.setPointerCapture(event.pointerId);
    const distance = Math.hypot(b.x - a.x, b.y - a.y);
    scale = gesture.distance > 0 ? clamp(gesture.scale * distance / gesture.distance, .18, 12) : gesture.scale;
    const ratio = scale / gesture.scale;
    tx = x - (gesture.x - gesture.tx) * ratio; ty = y - (gesture.y - gesture.ty) * ratio; schedulePaint();
  });
  function pointerEnd(event) {
    pointers.delete(event.pointerId);
    if (moved) suppressClickUntil = performance.now() + 350;
    if (pointers.size) gestureStart(); else gesture = null;
  }
  on(svg, 'pointerup', pointerEnd); on(svg, 'pointercancel', pointerEnd);
  on(svg, 'wheel', (event) => {
    event.preventDefault(); const rect = svg.getBoundingClientRect();
    zoom(Math.exp(-event.deltaY * .0015), event.clientX - rect.left, event.clientY - rect.top);
  }, { passive: false });
  const resize = new ResizeObserver((entries) => {
    const rect = entries[0].contentRect; width = rect.width; height = rect.height;
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`); fit(view); updateYear(year);
  });
  resize.observe(stage);
  on(mobile, 'change', () => updateYear(year));
  on(reduced, 'change', stopYears);
  on(document, 'visibilitychange', () => { if (document.hidden) stopYears(); });
  function followHash() { const id = location.hash.match(/^#c-([a-z0-9-]+)$/)?.[1]; if (id) focusComposer(id, true); else if (selected) clearFocus(false); }
  on(window, 'hashchange', followHash); on(window, 'popstate', followHash);
  updateYear(year); fit(data.europe);
  status.textContent = `${year}: select a portrait to follow a life, or a city for documented presence.`;
  followHash();
  root.classList.add('am-ready');
  return () => {
    abort.abort(); resize.disconnect(); stopYears(); cancelAnimationFrame(paintId); focusRequest++; pointers.clear();
  };
}
