import { createHash } from 'node:crypto';
import { eras, composers, pages, site, bySlug, eraBySlug, esc, attr, strip, fold, lifespan, href, img, artInfo, poem, relationTag, RELATION_TYPES, rich, listenOrder, searchIndex } from '../lib.mjs';
import { normalizeTitle } from '../../tools/commons.mjs';
import { page } from '../shell.mjs';
import { layoutTimeline } from '../../docs/assets/js/pages/lifelines.js';

const YEAR = new Date().getUTCFullYear();
const context = (name) => ({ base: '../', page: `explore/${name}` });
const head = (title, lede) => `<header class="page-head"><div class="wrap"><div class="crumbs"><a href="index.html">Explore</a></div><h1>${esc(title)}</h1><p class="lede">${lede}</p></div></header>`;
const places = (c) => [`Born in ${c.born.place}`, c.died?.place ? `died in ${c.died.place}` : null].filter(Boolean).join('; ');
const periodColor = (slug) => eraBySlug.get(slug)?.accent ?? 'var(--muted)';

function hubPage() {
  const ctx = context('index');
  const bach = bySlug.get('bach');
  const wave = bySlug.get('debussy').arts.find((a) => a.relation === 'documented-use' && a.file);
  const comparison = ['bach', 'haydn', 'mozart'].map((slug) => bySlug.get(slug));
  const preview = comparison.map((c) => `<li><span>${esc(c.family)} <span class="num">${lifespan(c)}</span></span><span class="preview-line"><span style="margin-left:${(c.born.year - 1680) / 1.4}%;width:${((c.died?.year ?? YEAR) - c.born.year) / 1.4}%;background:${periodColor(c.era)}"></span></span></li>`).join('');
  const main = `<header class="page-head"><div class="wrap"><span class="label">Explore</span><h1>People, places, connections.</h1><p class="lede">Follow a composer, find a period, or look closely at an object that shares the music’s history.</p></div></header>
<section class="section explore-hub"><div class="wrap"><h2 class="sr">Ways into the collection</h2><div class="doors explore-doors">
<a class="door" href="../composers/index.html"><h3>Composers</h3><p>${composers.length} lives, with works, playable examples and routes into listening.</p><div class="door-preview portrait-preview">${img(ctx, bach.portrait.file, 'Johann Sebastian Bach, portrait by Elias Gottlob Haussmann, 1748', { sizes: '(max-width: 760px) 80vw, 280px' })}</div><span class="door-caption">Bach, painted by Haussmann, 1748</span></a>
<a class="door" href="../periods/index.html"><h3>Periods</h3><p>Seven overlapping chapters describe changes in musical work, instruments and ideas.</p><ol class="door-preview period-preview">${eras.map((e) => `<li><span style="background:${e.accent}"></span><b>${esc(e.name)}</b><span class="num">${esc(e.span)}</span></li>`).join('')}</ol></a>
<a class="door" href="lifelines.html"><h3>Lifelines</h3><p>Put lives on the same scale and discover who could have heard whom.</p><div class="door-preview life-preview"><span class="label">Three lives, one scale · 1680–1820</span><ol>${preview}</ol></div></a>
<a class="door" href="collection.html"><h3>Art and documents</h3><p>Pictures, stage designs and texts, with the evidence for each musical connection.</p><div class="door-preview">${img(ctx, wave.file, `${wave.artist}, ${wave.title}`, { sizes: '(max-width: 760px) 90vw, 520px' })}</div><span class="door-caption">Hokusai’s wave, adapted for the cover of Debussy’s <i>La Mer</i></span></a>
</div><a class="recordings-door" href="../listen/index.html"><span class="label">Recordings</span><span>Carry on exploring with a performance playing.</span><span class="link-arrow">Choose a piece</span></a></div></section>`;
  return page(ctx, { title: 'Explore — Contrapunctus', description: 'Explore composers, periods, lifelines, art and musical documents.', main, nav: 'explore', type: 'page' });
}

function timelineSvg(ctx) {
  const people = composers.map((c) => ({ id: c.slug, name: c.name, dates: lifespan(c), born: c.born.year, died: c.died?.year ?? YEAR }));
  const events = [...(site.events ?? [])].sort((a, b) => a.year - b.year).map((event, id) => ({ ...event, id: String(id) }));
  const layout = layoutTimeline(people, events);
  const rowSvg = layout.rows.map((row) => {
    const c = bySlug.get(row.id);
    return `<a class="life" href="${href(ctx, c.slug)}" data-life-select="${c.slug}" data-name="${attr(c.name)}" data-dates="${attr(row.dates)}" data-born="${row.born}" data-died="${row.died}" aria-label="${attr(`${c.name}, ${row.dates}. Show dates, places and recordings`)}" aria-controls="life-selection" aria-expanded="false"><title>${esc(c.name)}, ${esc(row.dates)}</title><rect class="life-hit" x="${layout.left}" y="${row.y}" width="${layout.width}" height="56"/><rect class="life-bar" x="${row.x}" y="${row.y + 30}" width="${row.width}" height="12" fill="${periodColor(c.era)}"${!c.died ? ' stroke="var(--ink)" stroke-dasharray="4 3"' : ''}/><text x="${row.labelX}" y="${row.y + 21}">${esc(c.name)} <tspan class="yr">${esc(row.dates)}</tspan></text></a>`;
  }).join('');
  const ticks = [];
  for (let year = 1600; year <= 2050; year += 25) {
    const x = 24 + (year - 1640) / 390 * 1352;
    ticks.push(`<g data-tick="${year}"${year < 1640 || year > 2030 ? ' style="display:none"' : ''}><line x1="${x}" x2="${x}" y1="28" y2="${layout.height}"/>${year % 50 ? '' : `<text x="${x + 5}" y="21">${year}</text>`}</g>`);
  }
  const eventSvg = layout.events.map((event) => `<g class="event${event.kind === 'art' ? ' art-event' : ''}" data-event="${event.id}" data-year="${event.year}" data-label="${attr(event.label)}"><title>${event.year}: ${esc(event.label)}</title><line x1="${event.x}" x2="${event.x}" y1="${event.y + 5}" y2="${layout.height}"/><circle cx="${event.x}" cy="${event.y}" r="4"/><text x="${event.labelX}" y="${event.y + 5}">${event.year} ${esc(event.label)}</text></g>`).join('');
  return `<svg class="tl" id="chronology-chart" viewBox="${layout.viewBox}" role="group" aria-labelledby="timeline-title timeline-description"><title id="timeline-title">Composer lifelines</title><desc id="timeline-description">Lives from 1640 to the present, ordered by birth. Select a composer for dates, places and recordings. A chronological text list is also available.</desc><g class="grid">${ticks.join('')}</g>${eventSvg}${rowSvg}</svg>`;
}

function lifeDetails(ctx, c, recordings) {
  const tracks = recordings.filter((l) => l.composer === c.slug);
  return `<template data-life-detail="${c.slug}"><div class="life-detail-head"><div><span class="label">Selected life</span><h2>${esc(c.name)}</h2><p class="num">${esc(lifespan(c))} · ${esc(eraBySlug.get(c.era).name)}</p></div><a class="btn quiet" href="${href(ctx, c.slug)}">Read the composer’s page</a></div><dl class="life-places"><div><dt>Born</dt><dd>${esc(c.born.date || c.born.year)} · ${esc(c.born.place)}</dd></div>${c.died ? `<div><dt>Died</dt><dd>${esc(c.died.date || c.died.year)}${c.died.place ? ` · ${esc(c.died.place)}` : ''}</dd></div>` : '<div><dt>Lifespan</dt><dd>Open-ended; the bar ends at the current year.</dd></div>'}</dl><h3>Recordings in this collection</h3>${tracks.length ? `<ul class="life-recordings">${tracks.map((l) => `<li><a href="${href(ctx, `listen:${l.id}`)}">${esc(l.work)}${l.movement ? ` · ${esc(l.movement)}` : ''}</a><button class="btn quiet small" type="button" data-play-id="${l.id}" aria-label="${attr(`Play ${l.work} by ${c.name}`)}">Play</button></li>`).join('')}</ul>` : `<p>No recording is currently included here. The <a href="${href(ctx, c.slug)}#recordings">composer’s page</a> offers recordings to seek out elsewhere.</p>`}</template>`;
}

function lifelinesPage() {
  const ctx = context('lifelines');
  const recordings = listenOrder();
  const main = `${head('Lifelines', 'Who overlapped with whom? These are composers’ lives, not the dates of their works or of the recordings you hear here.')}
<section class="section lifelines-page"><div class="wrap"><div class="section-head"><h2>Lives on a common scale</h2><button class="btn quiet" type="button" data-life-list-toggle aria-pressed="false" aria-controls="chronology-chart chronology-list">Read as a list</button></div>
<fieldset class="life-windows"><legend>Choose a period / date window</legend><div class="filters"><button type="button" class="btn quiet" data-window="all" data-from="1640" data-to="2030" aria-pressed="true" aria-controls="chronology-chart chronology-list">All · 1640–2030</button>${eras.map((e) => `<button type="button" class="btn quiet" data-window="${e.slug}" data-from="${e.from}" data-to="${e.to}" aria-pressed="false" aria-controls="chronology-chart chronology-list">${esc(e.name)} <span class="num">${e.from}–${e.to}</span></button>`).join('')}</div></fieldset>
<p class="life-status" data-life-status role="status">${composers.length} lives, ordered by birth. Periods are overlapping editorial groupings, not fixed borders.</p>
<ul class="tl-legend" aria-label="Period colours">${eras.map((e) => `<li><span style="background:${e.accent}" aria-hidden="true"></span><a href="${href(ctx, `era:${e.slug}`)}">${esc(e.name)}</a></li>`).join('')}</ul>
<p class="timeline-key">Red markers: historical events. Ochre markers: art, literature and theatre. Dashed bar ends identify open-ended lives. Select a name or bar for dates, places and recordings.</p>
<section id="life-selection" class="life-selection" data-life-panel tabindex="-1" aria-label="Selected composer" hidden></section>
<div class="tl-wrap">${timelineSvg(ctx)}</div>
<div class="tl-list" id="chronology-list">${eras.map((e) => `<section data-life-group><h2><a href="${href(ctx, `era:${e.slug}`)}">${esc(e.name)}</a> <span class="num">${esc(e.span)}</span></h2><ol>${composers.filter((c) => c.era === e.slug).map((c) => `<li data-life-row data-born="${c.born.year}" data-died="${c.died?.year ?? YEAR}"><h3><a href="${href(ctx, c.slug)}">${esc(c.name)}</a></h3><p class="num">${esc(lifespan(c))}</p><p>${esc(places(c))}</p><button class="btn quiet small" type="button" data-life-select="${c.slug}" aria-controls="life-selection">Dates and recordings</button></li>`).join('')}</ol></section>`).join('')}</div>
${composers.map((c) => lifeDetails(ctx, c, recordings)).join('')}</div></section>`;
  return page(ctx, { title: 'Lifelines — Contrapunctus', description: 'Composer lives on one scale, with historical events, period windows and a chronological text list.', main, nav: 'explore', type: 'lifelines' });
}

// Identity belongs to the object; a relationship belongs to its owner. Keep every note.
function collectionRecords() {
  const objects = new Map();
  const add = (a, owner) => {
    const text = a.type === 'poem' || a.type === 'text';
    const key = text ? `text:${fold(a.author)}:${strip(a.original || a.title)}` : normalizeTitle(a.file);
    if (!objects.has(key)) {
      const id = text ? `text-${createHash('sha256').update(key).digest('hex').slice(0, 12)}` : `object-${artInfo(a.file)?.id ?? createHash('sha256').update(key).digest('hex').slice(0, 12)}`;
      objects.set(key, { id, a, text, owners: [], relationships: [] });
    }
    const record = objects.get(key);
    if (!record.owners.some((item) => item.url === owner.url)) record.owners.push(owner);
    if (!record.relationships.some((item) => item.owner.url === owner.url && item.a.note === a.note)) record.relationships.push({ owner, a });
  };
  for (const e of eras) for (const a of e.arts ?? []) add(a, { title: e.name, url: `periods/${e.slug}.html`, era: e.slug });
  for (const c of composers) for (const a of c.arts ?? []) add(a, { title: c.name, url: `composers/${c.slug}.html`, composer: c.slug, era: c.era });
  for (const p of Object.values(pages)) for (const lesson of p.lessons ?? []) for (const a of lesson.arts ?? []) add(a, { title: strip(lesson.heading), url: `learn/${lesson.id}.html`, lesson: lesson.id });
  for (const e of eras) if (e.hero) add({ ...e.hero, relation: 'editorial-comparison', note: `<p>Selected to introduce ${esc(e.name.toLowerCase())}. This editorial pairing does not, by itself, establish an influence on a composer.</p>` }, { title: e.name, url: `periods/${e.slug}.html`, era: e.slug });
  return [...objects.values()];
}

const ownerLinks = (ctx, record) => record.owners.map((owner) => `<a href="${ctx.base}${owner.url}">${esc(owner.title)}</a>`).join('');
const relationLabels = (record) => [...new Set(record.relationships.map(({ a }) => a.relation))].map((relation) => relationTag({ relation })).join(' ');
const summary = (note) => { const text = strip(note); return text.length > 180 ? `${text.slice(0, 177).replace(/\s+\S*$/, '')}…` : text; };

function linkedComposers(record) {
  const linked = new Set(record.owners.map((owner) => owner.composer).filter(Boolean));
  for (const { a } of record.relationships) for (const match of (a.note ?? '').matchAll(/\[\[([^\]|#]+)(?:[^\]]*)\]\]/g)) if (bySlug.has(match[1])) linked.add(match[1]);
  return linked;
}

function relationshipNotes(ctx, record) {
  return record.relationships.map(({ owner, a }) => `<section class="object-relationship"><h3><a href="${ctx.base}${owner.url}">${esc(owner.title)}</a></h3>${relationTag(a)}<div class="why">${rich(ctx, a.note ?? '')}</div></section>`).join('');
}

function objectTemplate(ctx, record, recordings) {
  const a = record.a;
  const info = artInfo(a.file);
  const composers = linkedComposers(record);
  const tracks = recordings.filter((l) => composers.has(l.composer));
  return `<template data-object-detail="${record.id}"><div class="viewer-body"><header class="viewer-heading"><span class="label">Art and documents</span><h2 id="viewer-title">${a.titleHtml || esc(a.title)}</h2><p class="object-caption">${esc(a.artist)}${a.date ? ` · ${esc(a.date)}` : ''}${a.medium ? `<br>${esc(a.medium)}` : ''}${a.collection ? `<br>${esc(a.collection)}` : ''}</p><p class="object-permalink"><a href="#${record.id}">Link to this object</a></p></header><div class="img">${img(ctx, a.file, a.alt || `${a.artist}, ${a.title}`, { sizes: '(max-width: 860px) 92vw, 62vw' })}</div><div class="txt"><h3 class="label">Why it is here</h3>${relationshipNotes(ctx, record)}<h3>Linked pages</h3><div class="object-owners">${ownerLinks(ctx, record)}</div>${tracks.length ? `<details class="object-listening"><summary>Recordings by linked composers</summary><p>These are routes into the music, not additional claims of influence.</p><ul>${tracks.map((l) => `<li><a href="${href(ctx, `listen:${l.id}`)}">${esc(bySlug.get(l.composer).family)} · ${esc(l.work)}${l.movement ? ` · ${esc(l.movement)}` : ''}</a></li>`).join('')}</ul></details>` : ''}<section class="object-source"><h3>Source and rights</h3>${info ? `<p><a href="${attr(info.page)}">Wikimedia Commons file and original image</a><br><b>Licence / status:</b> ${esc(info.license || 'See the source file for rights information.')}</p>${info.credit ? `<p><b>Source credit:</b> ${esc(info.credit)}</p>` : ''}` : ''}<p><a href="../about.html#rights">Rights and jurisdiction</a> · <a href="../about.html#cite">How to cite</a></p></section></div></div></template>`;
}

function collectionPage(records) {
  const ctx = context('collection');
  const recordings = listenOrder();
  const images = records.filter((record) => !record.text);
  const texts = records.filter((record) => record.text);
  const filters = (record) => {
    const pairings = record.relationships.map(({ owner, a }) => {
      const periods = new Set(owner.era ? [owner.era] : []);
      for (const slug of linkedComposers({ owners: [owner], relationships: [{ owner, a }] })) periods.add(bySlug.get(slug).era);
      return { relation: a.relation, periods: [...periods] };
    });
    return `data-collection-record data-pairings="${attr(JSON.stringify(pairings))}" data-maker="${attr(fold(record.a.artist || record.a.author))}"`;
  };
  const imageCards = images.map((record) => {
    const a = record.a;
    const info = artInfo(a.file);
    return `<article class="item" id="${record.id}" ${filters(record)}><a class="collection-open" href="${attr(info?.page || `#${record.id}`)}" data-object-open="${record.id}" aria-haspopup="dialog" aria-controls="collection-viewer" aria-label="${attr(`View ${a.title} by ${a.artist}`)}">${img(ctx, a.file, a.alt || `${a.artist}, ${a.title}`, { sizes: '(max-width: 600px) 88vw, (max-width: 1000px) 42vw, 360px' })}<span>View object</span></a><h3>${a.titleHtml || esc(a.title)}</h3><p class="meta">${esc(a.artist)}${a.date ? ` · ${esc(a.date)}` : ''}</p><div class="object-relations">${relationLabels(record)}</div><p class="why">${esc(summary(a.note))}</p><div class="object-owners" aria-label="Linked pages">${ownerLinks(ctx, record)}</div></article>`;
  }).join('');
  const textCards = texts.map((record) => `<div id="${record.id}" class="text-item" ${filters(record)}>${poem(ctx, record.a)}${record.relationships.length > 1 ? `<details class="text-connections"><summary>All ${record.relationships.length} relationship notes</summary>${relationshipNotes(ctx, record)}</details>` : ''}<div class="object-owners" aria-label="Linked pages">${ownerLinks(ctx, record)}</div></div>`).join('');
  const main = `${head('Art and documents', 'A score cover is evidence of use; a resemblance is not. Look at the objects and read the connection we can actually support.')}
<nav class="toc-bar collection-toc" aria-label="On this page"><div class="wrap"><a href="#objects">Images and objects</a><a href="#texts">Texts</a><a href="#relationships">Relationship types</a></div></nav>
<div class="wrap section collection-page"><details class="collection-guide" id="relationships"><summary>What do the relationship labels mean?</summary><dl><dt>Documented use</dt><dd>A score cover, stage design, set text or source of a programme.</dd><dt>Documented encounter</dt><dd>An encounter or ownership supported by the note, not an inferred influence.</dd><dt>Shared context</dt><dd>A common place, person, event or source, without a claim of influence.</dd><dt>Editorial comparison</dt><dd>A comparison proposed here. Read it as interpretation, not documentary evidence.</dd></dl><p>Labels belong to individual pairings. One object can have different relationships with different pages; the full record keeps all of them.</p></details>
<form class="filters collection-filters" aria-label="Filter the collection"><label>Relationship<select name="relation"><option value="">All relationships</option>${Object.entries(RELATION_TYPES).map(([key, title]) => `<option value="${key}">${title}</option>`).join('')}</select></label><label>Period<select name="period"><option value="">All periods</option>${eras.map((e) => `<option value="${e.slug}">${esc(e.name)}</option>`).join('')}</select></label><label>Maker<input type="search" name="maker" placeholder="Artist or author" autocomplete="off"></label><button class="btn quiet" type="reset">Clear filters</button></form><p class="collection-count" role="status" data-collection-count>${images.length} images and objects · ${texts.length} texts</p><p class="collection-empty" data-collection-empty hidden>No objects match these filters. Try a different maker, period or relationship.</p>
<section id="objects" data-images-section><div class="section-head"><h2>Images and objects</h2><p>Select an image for the full note, every linked owner and source rights.</p></div><div class="collection">${imageCards}</div></section>
<section class="section collection-texts" id="texts" data-texts-section><div class="section-head"><h2>Texts</h2><p>Poems, librettos and prose, with excerpts and translations identified.</p></div>${textCards}</section>
<dialog class="viewer collection-viewer" id="collection-viewer" aria-labelledby="viewer-title"><div class="viewer-toolbar"><button type="button" class="btn quiet" data-viewer-close autofocus>Close object</button></div><div data-viewer-content></div></dialog>${images.map((record) => objectTemplate(ctx, record, recordings)).join('')}</div>`;
  return page(ctx, { title: 'Art and documents — Contrapunctus', description: 'Explore the collection’s paintings, photographs, stage designs and texts, with typed musical relationships and source rights.', main, nav: 'explore', type: 'collection' });
}

export async function build(out) {
  const records = collectionRecords();
  await out('explore/index.html', hubPage());
  await out('explore/lifelines.html', lifelinesPage());
  await out('explore/collection.html', collectionPage(records));
  for (const [title, url, sub] of [
    ['Explore', 'explore/index.html', 'Composers, periods, lifelines, art and documents'],
    ['Lifelines', 'explore/lifelines.html', 'Composer dates, places and overlapping lives'],
    ['Art and documents', 'explore/collection.html', 'Images, texts and evidence for musical connections'],
  ]) searchIndex.push({ type: 'Page', title, url, sub, terms: sub });
  for (const record of records) searchIndex.push({ type: 'Art', title: record.a.title, sub: [record.a.artist || record.a.author, record.a.date].filter(Boolean).join(' · '), url: `explore/collection.html#${record.id}`, terms: strip(record.relationships.map(({ owner, a }) => `${owner.title} ${RELATION_TYPES[a.relation]} ${a.note ?? ''}`).join(' ')) });
}
