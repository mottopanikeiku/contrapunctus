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
  // Keep the engraved base on its own composited surface: animated journeys
  // must not repaint the world's coastline on every frame.
  const baseSvg = svgNode('svg', { class: 'am-base-map', 'aria-hidden': 'true' });
  stage.prepend(baseSvg);
  const baseWorld = svgNode('g', { class: 'am-base-world' }, baseSvg);
  for (const [key, cls] of [['land', 'land'], ['coastline', 'coast'], ['countries', 'countries'], ['graticule', 'graticule']]) {
    const path = world.querySelector(`.am-${cls}`); path.setAttribute('d', base[key]); baseWorld.append(path);
  }
  const inset = $('.am-inset'), insetSelect = $('[name="inset"]'), insetWorld = $('.am-inset-world');
  insetWorld.querySelector('.am-land').setAttribute('d', base.land);
  insetWorld.querySelector('.am-coast').setAttribute('d', base.coastline);
  const byId = new Map(data.composers.map((c, i) => [c.id, { ...c, index: i }]));
  const detailCache = new Map(), sprites = [], trails = [], events = [], citySprites = [], clusterSprites = [], routeSprites = [], transferSprites = [];
  let year = clamp(Number(new URL(location.href).searchParams.get('year')) || 1805, data.first, data.last);
  let selected = '', selectedCity = Number(citySelect.value), detail = null, focusRequest = 0, selectedPlace = -1;
  let width = 900, height = 530, tx = 0, ty = 0, scale = 1, previousScale = 0;
  let paintedCamera = '';
  let encounterSignature = '', encounterYearNode = null;
  let view = data.europe, frame = [], paintId = 0, timeId = 0, playing = false, lastTick = 0, clock = 0;
  let moved = false, pointerRect, gesture, suppressClickUntil = 0;
  let expandedCity = -1, pinnedCluster = -1, clusterTimer = 0, insetRegion = '', insetScale = 1;
  const pointers = new Map();

  for (const [index, c] of data.composers.entries()) {
    const anchor = svgNode('g', { class: 'am-person am-true-marker', role: 'button', tabindex: '-1', 'data-geo-kind': 'person', 'data-composer': c.id, 'aria-label': c.name }, $('.am-people'));
    const dot = svgNode('circle', { r: 2.8, class: 'am-person-dot' }, anchor);
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
    anchor.append(dot);
    sprites.push({ anchor, icon, face, dot, tether, title, image, index, c });
    c.places.forEach((p, i) => {
      if (p.path) {
        const node = svgNode('path', { d: p.path, class: `am-trail${p.kind === 'travelled' ? ' am-travel' : ''}` }, $('.am-trails'));
        const glint = p.kind === 'travelled' ? svgNode('circle', { r: 2, class: 'am-journey-glint am-hidden', 'aria-hidden': 'true' }, $('.am-trails')) : null;
        if (glint) glint.style.offsetPath = `path("${p.path}")`;
        trails.push({ node, glint, p, c });
      }
      if (p.kind === 'premiere') {
        const g = svgNode('g', { class: 'am-premiere am-true-marker', role: 'button', tabindex: '-1', 'data-geo-kind': 'premiere', 'data-geo-x': p.x, 'data-geo-y': p.z, 'data-composer': c.id, 'data-place': i, 'aria-label': `${p.work}, ${p.y}` }, $('.am-events'));
        const icon = svgNode('g', {}, g);
        const star = svgNode('text', { 'text-anchor': 'middle', y: 8, class: 'am-star' }, icon); star.textContent = '✧';
        const label = svgNode('text', { x: 18, y: -7, class: 'am-premiere-name' }, icon); label.textContent = p.work;
        const title = svgNode('title', {}, g); title.textContent = `${c.name}: ${p.work} · ${p.y}${c.died && p.y > c.died ? ' · posthumous premiere' : ''}`;
        events.push({ node: g, icon, p });
      }
    });
  }
  for (const city of data.cities) {
    const node = svgNode('g', { class: 'am-city am-true-marker', role: 'button', tabindex: '-1', 'data-geo-kind': 'city', 'data-geo-x': city.x, 'data-geo-y': city.y, 'data-city': city.id, 'aria-label': `Who was in ${city.name}?` }, $('.am-cities'));
    const icon = svgNode('g', {}, node);
    svgNode('circle', { r: 14, class: 'am-city-hit' }, icon);
    svgNode('circle', { r: 2.5, class: 'am-city-dot' }, icon);
    const label = svgNode('text', { x: 7, y: 4, class: 'am-city-name' }, icon); label.textContent = city.name;
    citySprites.push({ node, icon, city });
    const cluster = svgNode('g', { class: 'am-cluster am-hidden am-true-marker', role: 'button', tabindex: '-1', 'data-cluster': city.id, 'data-geo-kind': 'cluster', 'data-geo-x': city.x, 'data-geo-y': city.y }, $('.am-clusters'));
    const medallion = svgNode('g', {}, cluster);
    svgNode('ellipse', { rx: 18, ry: 13 }, medallion);
    const count = svgNode('text', { 'text-anchor': 'middle', 'dominant-baseline': 'central', class: 'am-cluster-count' }, medallion);
    const name = svgNode('text', { y: 28, 'text-anchor': 'middle', class: 'am-cluster-name' }, medallion);
    clusterSprites.push({ node: cluster, icon: medallion, count, name, city });
  }

  function schedulePaint() { if (!paintId) paintId = requestAnimationFrame(paint); }
  function paint() {
    paintId = 0;
    const camera = `translate(${tx} ${ty}) scale(${scale})`;
    if (camera !== paintedCamera) {
      world.setAttribute('transform', camera); baseWorld.setAttribute('transform', camera);
      paintedCamera = camera;
    }
    const inverse = 1 / scale;
    for (const row of frame) {
      const sprite = sprites[row[0]], p = sprite.c.places[row[1]];
      const radius = Math.hypot(row[2], row[3]), coastal = radius ? Math.min(1, p.shore * scale / radius) : 1;
      const dx = row[2] * coastal, dy = row[3] * coastal;
      if (sprite.paintedPlace === row[1] && sprite.paintedScale === scale && sprite.paintedDX === dx && sprite.paintedDY === dy) continue;
      sprite.paintedPlace = row[1]; sprite.paintedScale = scale; sprite.paintedDX = dx; sprite.paintedDY = dy;
      sprite.anchor.setAttribute('transform', `translate(${p.x} ${p.z})`);
      sprite.anchor.dataset.geoX = p.x; sprite.anchor.dataset.geoY = p.z;
      sprite.anchor.dataset.geoPlace = row[1];
      sprite.icon.setAttribute('transform', `translate(${dx * inverse} ${dy * inverse}) scale(${inverse})`);
      sprite.dot.setAttribute('transform', `scale(${inverse})`);
      sprite.tether.setAttribute('d', `M0,0L${dx * inverse},${dy * inverse}`);
    }
    if (previousScale !== scale) {
      for (const { node, icon, city } of [...citySprites, ...clusterSprites]) { node.setAttribute('transform', `translate(${city.x} ${city.y})`); icon.setAttribute('transform', `scale(${inverse})`); }
      for (const { node, icon, p } of events) { node.setAttribute('transform', `translate(${p.x} ${p.z})`); icon.setAttribute('transform', `scale(${inverse})`); }
      for (const { glint } of trails) if (glint) glint.setAttribute('r', 2 * inverse);
      previousScale = scale;
    }
    for (const s of routeSprites) s.node.setAttribute('transform', `translate(${s.x} ${s.z}) scale(${1 / (s.region === detail?.map.primary ? scale : insetScale)})`);
    const endX = mobile.matches ? 153 : 224, endY = mobile.matches ? 84 : 238;
    for (const transfer of transferSprites) {
      const x = tx + transfer.item.x * scale, y = ty + transfer.item.z * scale;
      transfer.path.setAttribute('d', `M${x},${y}Q${(x + endX) / 2},${Math.min(y, endY) - 35} ${endX},${endY}`);
      transfer.label.setAttribute('x', endX + 9); transfer.label.setAttribute('y', endY - 12);
    }
  }
  function fit(box) {
    view = box;
    const reserve = detail?.map.regions.length && !mobile.matches && box === detail.map.bounds ? 224 : 0;
    scale = clamp(Math.min((width - reserve - 40) / Math.max(box[2], 70), (height - 48) / Math.max(box[3], 70)), .18, 9);
    tx = reserve + (width - reserve) / 2 - (box[0] + box[2] / 2) * scale;
    ty = height / 2 - (box[1] + box[3] / 2) * scale;
    schedulePaint();
  }
  function zoom(factor, x = width / 2, y = height / 2) {
    const next = clamp(scale * factor, .18, 12), ratio = next / scale;
    tx = x - (x - tx) * ratio; ty = y - (y - ty) * ratio; scale = next; schedulePaint();
  }
  function updateHash(id = '') {
    const u = new URL(location.href); u.hash = id ? `c-${id}` : ''; u.searchParams.set('year', year);
    history.replaceState(null, '', u);
  }
  function showFaces() {
    for (const row of frame) {
      const s = sprites[row[0]], p = s.c.places[row[1]], collapsed = row[6] > 4 && expandedCity !== p.city;
      s.anchor.classList.toggle('am-collapsed', collapsed);
      s.anchor.classList.toggle('am-shared-city', row[6] > 1);
      s.anchor.dataset.clusterCity = p.city;
      const faceScale = row[6] > 4 ? .55 : row[6] > 1 ? .75 : 1;
      if (s.faceScale !== faceScale) { s.face.setAttribute('transform', `scale(${faceScale})`); s.faceScale = faceScale; }
      s.anchor.setAttribute('tabindex', !selected && !collapsed ? '0' : '-1');
      if (!selected && !collapsed && !row[4] && s.image && !s.image.hasAttribute('href')) s.image.setAttribute('href', url(s.c.portrait));
    }
    for (const s of clusterSprites) {
      s.node.classList.toggle('am-cluster-open', s.city.id === expandedCity);
      s.node.setAttribute('aria-expanded', String(s.city.id === expandedCity));
    }
  }
  function expandCluster(id, pin = false) {
    clearTimeout(clusterTimer);
    if (pin) pinnedCluster = pinnedCluster === id ? -1 : id;
    expandedCity = pin ? pinnedCluster : id;
    if (pin && pinnedCluster >= 0) {
      const city = data.cities[id], rows = frame.filter((row) => !row[4] && sprites[row[0]].c.places[row[1]].city === id);
      const shore = Math.min(...rows.map((row) => sprites[row[0]].c.places[row[1]].shore || 1));
      scale = Math.max(scale, Math.min(9, 35 / shore));
      tx = width / 2 - city.x * scale; ty = height / 2 - city.y * scale; schedulePaint();
    }
    showFaces();
  }
  function updateYear(next, announce = false) {
    year = clamp(Math.round(next), data.first, data.last); slider.value = year;
    for (const output of yearDisplays) output.textContent = year;
    frame = data.frames[year - data.first];
    const present = new Set(frame.map((row) => row[0]));
    for (const sprite of sprites) if (!present.has(sprite.index)) { sprite.anchor.classList.add('am-hidden'); sprite.anchor.setAttribute('tabindex', '-1'); }
    let alive = 0;
    for (const row of frame) {
      const s = sprites[row[0]], visible = !selected;
      s.anchor.classList.toggle('am-hidden', !visible);
      s.anchor.classList.toggle('am-dead', Boolean(row[4]));
      s.anchor.classList.toggle('am-last-known', !row[5]);
      s.anchor.setAttribute('tabindex', visible ? '0' : '-1');
      const p = s.c.places[row[1]], city = data.cities[p.city].name;
      s.title.textContent = `${s.c.name} · ${row[4] ? 'died; ' : row[5] ? '' : 'last recorded place: '}${city} · ${year}`;
      s.anchor.setAttribute('aria-label', s.title.textContent);
      if (!row[4]) alive++;
    }
    const counts = new Map();
    for (const row of frame) if (!row[4]) counts.set(sprites[row[0]].c.places[row[1]].city, row[6]);
    for (const s of clusterSprites) {
      const count = counts.get(s.city.id) ?? 0, visible = !selected && count > 4;
      s.node.classList.toggle('am-hidden', !visible); s.node.setAttribute('tabindex', visible ? '0' : '-1');
      if (s.shownCount !== count) {
        s.node.setAttribute('aria-label', `${s.city.name} · ${count} composers. Expand portraits.`);
        s.count.textContent = count; s.name.textContent = `${s.city.name} · ${count}`; s.shownCount = count;
      }
    }
    showFaces();
    for (const trail of trails) {
      const visible = !selected && trail.p.y <= year && (!trail.c.died || trail.p.y <= trail.c.died);
      trail.node.classList.toggle('am-hidden', !visible);
      const travelling = trail.p.kind === 'travelled' && trail.p.y <= year && trail.p.end >= year;
      trail.node.classList.toggle('am-travelling', travelling);
      trail.glint?.classList.toggle('am-hidden', !visible || !travelling);
    }
    for (const event of events) {
      const visible = event.p.y === year && (!selected || event.node.dataset.composer === selected);
      event.node.classList.toggle('am-hidden', !visible); event.node.setAttribute('tabindex', visible ? '0' : '-1');
    }
    for (const s of citySprites) {
      const present = s.city.visits.some((v) => v.a <= year && v.b >= year);
      const visible = !selected && (present || s.city.id === selectedCity) && (counts.get(s.city.id) ?? 0) <= 4;
      s.node.classList.toggle('am-hidden', !visible);
      s.node.classList.toggle('am-city-selected', s.city.id === selectedCity);
      s.node.classList.toggle('am-city-occupied', counts.get(s.city.id) === 1);
      s.node.setAttribute('tabindex', visible ? '0' : '-1');
    }
    if (!selected) renderEncounters(false);
    if (announce) { status.textContent = `${year}: ${alive} living composers with place records. Select a city to see documented presence.`; updateHash(selected); }
    schedulePaint();
  }
  function openCard() {
    card.classList.add('am-card-open');
    if (mobile.matches) stage.scrollIntoView({ block: 'start', behavior: reduced.matches ? 'instant' : 'smooth' });
  }
  function renderEncounters(open = true) {
    const city = data.cities[selectedCity];
    if (!city) { cardContent.innerHTML = '<h2>Places are being researched</h2><p>No sourced geography is available yet.</p>'; return; }
    const visits = city.visits.filter((v) => v.a <= year && v.b >= year), unique = new Map();
    for (const visit of visits) { const list = unique.get(visit.c) ?? []; list.push(visit); unique.set(visit.c, list); }
    const pairs = city.pairs.filter((p) => p.from <= year && p.to >= year);
    const signature = `${city.id}|${visits.map((v) => `${v.c}:${v.p}`).join(',')}|${pairs.map((p) => `${p.ids.join('/')}:${p.from}:${p.to}`).join(',')}`;
    if (signature === encounterSignature && encounterYearNode?.isConnected) {
      encounterYearNode.textContent = year; if (open) openCard(); return;
    }
    cardContent.innerHTML = `<span class="kicker">Who was here?</span><h2>${escape(city.name)} <em>${year}</em></h2><p class="am-card-intro">${unique.size} ${unique.size === 1 ? 'composer' : 'composers'} with documented presence in this year.</p>${unique.size ? `<ul class="am-residents">${[...unique].map(([id, records]) => {
      const c = byId.get(id);
      return `<li><button type="button" data-focus="${escape(id)}">${c.portrait ? `<img src="${url(c.portrait)}" width="36" height="46" alt="">` : ''}<span><strong>${escape(c.name)}</strong><small>${records.map((v) => escape(v.from === v.to ? v.from : `${v.from}–${v.to}`)).join(' · ')}</small></span><b aria-hidden="true">→</b></button></li>`;
    }).join('')}</ul>` : '<p class="am-empty">No documented presence in the available records. This is a gap in the collection, not evidence that nobody was here.</p>'}<h3>Overlapping dates</h3>${pairs.length ? `<ul class="am-overlaps">${pairs.map((p) => `<li><span>${p.ids.map((id) => `<button type="button" data-focus="${escape(id)}">${escape(byId.get(id).label)}</button>`).join(' &amp; ')}</span><small>${p.from === p.to ? p.from : `${p.from}–${p.to}`}</small></li>`).join('')}</ul>` : '<p class="am-small">No overlapping documented date ranges for two composers in this year.</p>'}<p class="am-caution">An overlap is not proof of a meeting. A year may include separate visits; open a life for the dates and sources.</p><div class="am-city-prompts"><button type="button" data-vienna="1790">Vienna · 1790</button><button type="button" data-vienna="1805">Vienna · 1805</button><button type="button" data-paris="1900">Paris · 1900</button></div>`;
    encounterSignature = signature; encounterYearNode = cardContent.querySelector('h2 em');
    if (open) openCard();
  }
  const playButton = (recording) => `<button type="button" class="am-listen" data-map-play="${escape(recording.id)}"><span aria-hidden="true">▶</span><span>${escape(recording.work)}${recording.movement ? `<small>${escape(recording.movement)}</small>` : ''}</span></button>`;
  function renderDetail(c) {
    const records = new Map(c.recordings.map((r) => [r.id, r]));
    cardContent.innerHTML = `<div class="am-person-heading">${c.portrait ? `<img src="${url(c.portrait)}" width="64" height="82" alt="${escape(c.name)}">` : ''}<div><span class="kicker">A life in places</span><h2>${escape(c.name)}</h2><p>${c.born}–${c.died ?? ''} · ${c.places.length} records</p></div></div><p class="am-card-intro">The whole recorded route, including places beyond the selected year. Numbers correspond to the list.</p><p class="am-detail-links"><a href="${url(`composers/${c.id}.html#places`)}">Read the composer chapter →</a><button type="button" data-action="route-fit">Fit the whole route</button></p><section class="am-recordings" id="am-recordings"><h3>Listen to ${escape(c.label)}</h3>${c.recordings.length ? c.recordings.slice(0, 3).map(playButton).join('') + (c.recordings.length > 3 ? `<details><summary>All ${c.recordings.length} published recordings</summary>${c.recordings.slice(3).map(playButton).join('')}</details>` : '') : '<p>No recording by this composer is published yet.</p>'}</section><ol class="am-places">${c.places.map((p, i) => {
      const exact = p.listens.map((id) => records.get(id)).filter(Boolean);
      const posthumous = c.died && p.y > c.died;
      return `<li id="am-place-${i}" data-record="${i}"><button type="button" class="am-place-heading" data-place-index="${i}"><b>${i + 1}</b><span>${escape(p.name)}<small>${escape(dateText(p))} · ${escape(p.kind)}${posthumous ? ' · after death' : ''}</small></span></button><span class="am-badge am-${escape(p.status)}">${escape(p.status)}</span><p>${escape(p.what)}</p>${p.work ? `<p class="am-place-work"><i>${escape(p.work)}</i></p>` : ''}<small class="am-country">${escape(p.country)}</small><details class="am-sources"><summary>${p.sources.length} ${p.sources.length === 1 ? 'source' : 'sources'}</summary><ul>${p.sources.map((s) => `<li><a href="${escape(s.url)}" target="_blank" rel="noopener">${escape(s.title)}</a>${s.locator ? ` — ${escape(s.locator)}` : ''}</li>`).join('')}</ul></details>${p.work || p.kind === 'premiere' ? exact.length ? `<div class="am-place-listens">${exact.map(playButton).join('')}</div>` : `<details class="am-place-listens"><summary>No exact work-title match · other ${escape(c.label)} recordings</summary>${c.recordings.length ? `${c.recordings.slice(0, 3).map(playButton).join('')}<button type="button" class="am-all-recordings" data-action="recordings">See all ${c.recordings.length} published recordings ↑</button>` : '<p>No published recording available.</p>'}</details>` : ''}</li>`;
    }).join('')}</ol>${c.influences.length ? `<section class="am-evidence"><h3>Music connected to a place</h3><p class="am-small">Dotted lines are musical connections, not asserted meetings or travel routes.</p><ul>${c.influences.map((e) => `<li><a href="${url(`influence.html#edge-${e.id}`)}">${escape(e.title)}</a><small>${escape(e.place)} · ${e.year} · ${escape(e.status)}</small></li>`).join('')}</ul></section>` : ''}<p class="am-small"><a href="${url(`assets/data/geo/${c.id}.json`)}" download>Download this life’s sourced place records</a></p>`;
    cardContent.scrollTop = 0; openCard();
  }
  function routeMarker(parent, p, region, indices, badge = false) {
    const node = svgNode('g', { class: `${badge ? 'am-route-badge' : 'am-route-point'} am-true-marker`, role: 'button', tabindex: '0', 'data-geo-kind': badge ? 'city-numbers' : 'route-stop', 'data-geo-x': p.x, 'data-geo-y': p.z, 'data-route-place': indices[0], 'data-route-indices': indices.join(','), 'aria-label': `${p.name}: ${indices.map((i) => i + 1).join(', ')}` }, parent);
    if (badge) {
      const numbers = indices.slice(0, 3).map((i) => i + 1).join(',') + (indices.length > 3 ? '…' : '');
      const half = Math.max(12, numbers.length * 3.3 + 5);
      svgNode('rect', { x: -half, y: -10, width: half * 2, height: 20, rx: 7 }, node);
      const label = svgNode('text', { x: 0, y: 0, 'text-anchor': 'middle', 'dominant-baseline': 'central', class: 'am-stop-numbers' }, node); label.textContent = numbers;
      const city = svgNode('text', { y: -15, 'text-anchor': 'middle', class: 'am-stop-city' }, node); city.textContent = p.name;
    } else svgNode('circle', { r: 2.8 }, node);
    const title = svgNode('title', {}, node); title.textContent = `${p.name} · records ${indices.map((i) => i + 1).join(', ')}`;
    routeSprites.push({ node, x: p.x, z: p.z, region, places: indices });
  }
  function drawRegion(c, region, routes, points) {
    const compact = byId.get(c.id);
    for (const [i, p] of c.places.entries()) {
      if (p.region !== region) continue;
      if (i && c.places[i - 1].region === region && compact.places[i].path) svgNode('path', { d: compact.places[i].path, class: `am-life-route${c.died && p.y > c.died ? ' am-posthumous' : ''}` }, routes);
      routeMarker(points, p, region, [i]);
    }
    for (const stop of c.map.stops) if (stop.region === region) routeMarker(points, stop, region, stop.places, true);
  }
  function drawInset() {
    $('.am-inset-routes').replaceChildren(); $('.am-inset-points').replaceChildren(); $('.am-transfers').replaceChildren(); transferSprites.length = 0;
    for (let i = routeSprites.length - 1; i >= 0; i--) if (routeSprites[i].region !== detail.map.primary) routeSprites.splice(i, 1);
    const region = detail.map.regions.find((r) => r.id === insetRegion);
    inset.hidden = !region;
    if (!region) return;
    const box = region.bounds;
    insetScale = Math.min(182 / Math.max(box[2], 32), 104 / Math.max(box[3], 32));
    insetWorld.setAttribute('transform', `translate(${100 - (box[0] + box[2] / 2) * insetScale} ${65 - (box[1] + box[3] / 2) * insetScale}) scale(${insetScale})`);
    drawRegion(detail, region.id, $('.am-inset-routes'), $('.am-inset-points'));
    $('.am-inset-caption').textContent = `${region.label} · independent scale · ${region.places.length} records`;
    for (const item of detail.map.transfers.filter((t) => t.region === region.id)) {
      const path = svgNode('path', { class: 'am-transfer-line', 'marker-end': 'url(#am-arrow)' }, $('.am-transfers'));
      const label = svgNode('text', { class: 'am-transfer-label' }, $('.am-transfers')); label.textContent = item.label;
      transferSprites.push({ item, path, label });
    }
    schedulePaint();
  }
  function drawRoute(c) {
    $('.am-route').replaceChildren(); $('.am-route-points').replaceChildren(); $('.am-influence').replaceChildren(); routeSprites.length = 0;
    root.classList.add('am-focused');
    drawRegion(c, c.map.primary, $('.am-route'), $('.am-route-points'));
    insetSelect.innerHTML = c.map.regions.map((r) => `<option value="${r.id}">${escape(r.label)}</option>`).join('');
    insetRegion = c.map.regions[0]?.id ?? ''; insetSelect.value = insetRegion; drawInset();
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
      detail = loaded; renderDetail(detail); drawRoute(detail); fit(detail.map.bounds);
      status.textContent = `${detail.name}: ${detail.places.length} exact place dots. City badges stack their record numbers; overseas places use the inset.`;
      if (selectedPlace >= 0) revealPlace(selectedPlace, true);
    } catch (error) {
      detailCache.delete(id);
      if (!signal.aborted && request === focusRequest) { cardContent.innerHTML = `<h2>${escape(c.name)}</h2><p>${escape(error.message)}. <a href="${url(`composers/${id}.html#places`)}">Read the static Places section</a>.</p>`; }
    }
  }
  function clearFocus(changeHash = true) {
    focusRequest++; selected = ''; detail = null; selectedPlace = -1; composerSelect.value = '';
    $('.am-route').replaceChildren(); $('.am-route-points').replaceChildren(); $('.am-influence').replaceChildren(); routeSprites.length = 0;
    $('.am-transfers').replaceChildren(); $('.am-inset-points').replaceChildren(); $('.am-inset-routes').replaceChildren(); transferSprites.length = 0;
    inset.hidden = true; root.classList.remove('am-focused'); expandedCity = pinnedCluster = -1;
    if (changeHash) updateHash();
    updateYear(year); fit(data.europe);
  }
  function revealPlace(index, scroll) {
    const p = detail?.places[index]; if (!p) return;
    selectedPlace = index;
    for (const s of routeSprites) s.node.classList.toggle('am-place-selected', s.places.includes(index));
    const row = cardContent.querySelector(`[data-record="${index}"]`);
    for (const el of cardContent.querySelectorAll('.am-place-active')) el.classList.remove('am-place-active');
    row?.classList.add('am-place-active');
    if (scroll && row) { cardContent.scrollTo({ top: row.offsetTop - cardContent.offsetTop - 14, behavior: reduced.matches ? 'instant' : 'smooth' }); openCard(); }
    if (p.region !== detail.map.primary) {
      insetRegion = p.region; insetSelect.value = insetRegion; drawInset();
      for (const s of routeSprites) s.node.classList.toggle('am-place-selected', s.places.includes(index));
    } else {
      scale = Math.max(scale, mobile.matches ? 1.3 : 2); tx = width / 2 - p.x * scale; ty = height / 2 - p.z * scale;
    }
    schedulePaint();
  }
  function chooseCity(id) {
    clearFocus(); selectedCity = Number(id); citySelect.value = String(id); updateYear(year); renderEncounters();
    const city = data.cities[selectedCity];
    if (city) { scale = Math.max(scale, mobile.matches ? 1.2 : 1.7); tx = width / 2 - city.x * scale; ty = height / 2 - city.y * scale; schedulePaint(); }
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
  on(insetSelect, 'change', () => { insetRegion = insetSelect.value; drawInset(); });
  const clusterFor = (target) => {
    const node = target?.closest?.('[data-cluster],[data-cluster-city]');
    return node ? Number(node.dataset.cluster ?? node.dataset.clusterCity) : -1;
  };
  on(root, 'pointerover', (event) => { const id = clusterFor(event.target); if (id >= 0 && pinnedCluster < 0) expandCluster(id); });
  on(root, 'pointerout', (event) => {
    const from = clusterFor(event.target), to = clusterFor(event.relatedTarget);
    if (from >= 0 && to !== from && pinnedCluster < 0) clusterTimer = setTimeout(() => expandCluster(-1), 250);
  });
  on(root, 'focusin', (event) => { const id = clusterFor(event.target); if (id >= 0 && pinnedCluster < 0) expandCluster(id); });
  on(root, 'click', async (event) => {
    if (performance.now() < suppressClickUntil && svg.contains(event.target)) { event.preventDefault(); return; }
    const target = event.target.closest('[data-action],[data-composer],[data-city],[data-cluster],[data-focus],[data-map-play],[data-route-place],[data-place-index],[data-vienna],[data-paris]');
    if (!target) return;
    if (target.dataset.cluster != null) {
      const id = Number(target.dataset.cluster); expandCluster(id, true);
      selectedCity = id; citySelect.value = String(id); renderEncounters(); return;
    }
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
      case 'route-fit': case 'fit': fit(detail ? detail.map.bounds : data.europe); break;
      case 'recordings': {
        const section = $('.am-recordings');
        if (section) { section.querySelector('details')?.setAttribute('open', ''); cardContent.scrollTo({ top: section.offsetTop - 12, behavior: reduced.matches ? 'instant' : 'smooth' }); }
        break;
      }
      case 'encounters': clearFocus(); renderEncounters(); break;
      case 'close': if (mobile.matches) card.classList.remove('am-card-open'); else { clearFocus(); renderEncounters(false); } break;
    }
  });
  on(svg, 'keydown', (event) => {
    if (['Enter', ' '].includes(event.key) && event.target !== svg) { event.preventDefault(); event.target.dispatchEvent(new MouseEvent('click', { bubbles: true })); return; }
    const actions = { '+': () => zoom(1.25), '=': () => zoom(1.25), '-': () => zoom(.8), Home: () => fit(data.europe), ArrowLeft: () => { tx += 65; }, ArrowRight: () => { tx -= 65; }, ArrowUp: () => { ty += 65; }, ArrowDown: () => { ty -= 65; } };
    if (actions[event.key]) { event.preventDefault(); actions[event.key](); schedulePaint(); }
  });
  on($('.am-inset-map'), 'keydown', (event) => {
    if (['Enter', ' '].includes(event.key) && event.target.closest('[role="button"]')) { event.preventDefault(); event.target.dispatchEvent(new MouseEvent('click', { bubbles: true })); }
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
    const viewBox = `0 0 ${width} ${height}`;
    svg.setAttribute('viewBox', viewBox); baseSvg.setAttribute('viewBox', viewBox); fit(view); updateYear(year);
  });
  resize.observe(stage);
  on(mobile, 'change', () => { if (detail) drawRoute(detail); updateYear(year); });
  on(reduced, 'change', stopYears);
  on(document, 'visibilitychange', () => { if (document.hidden) stopYears(); });
  function followHash() { const id = location.hash.match(/^#c-([a-z0-9-]+)$/)?.[1]; if (id) focusComposer(id, true); else if (selected) clearFocus(false); }
  on(window, 'hashchange', followHash); on(window, 'popstate', followHash);
  updateYear(year); fit(data.europe);
  status.textContent = `${year}: select a portrait to follow a life, or a city for documented presence.`;
  followHash();
  root.classList.add('am-ready');
  return () => {
    abort.abort(); resize.disconnect(); stopYears(); cancelAnimationFrame(paintId); clearTimeout(clusterTimer); focusRequest++; pointers.clear();
  };
}
