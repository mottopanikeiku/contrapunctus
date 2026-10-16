// Composer directory and portraits; the authored essays remain the source of truth.
import { page } from '../shell.mjs';
import { composers, eras, listens, bySlug, eraBySlug, searchIndex, esc, attr, strip, fold, rich, href, lifespan, img, thumb, scoresHtml, arts } from '../lib.mjs';

const byComposer = new Map();
for (const l of listens) {
  if (!byComposer.has(l.composer)) byComposer.set(l.composer, []);
  byComposer.get(l.composer).push(l);
}
for (const list of byComposer.values()) list.sort((a, b) => (a.order ?? 1) - (b.order ?? 1) || a.id.localeCompare(b.id));

export const recordingsFor = (c) => byComposer.get(c.slug) ?? [];

export function composerRow(ctx, c, { filter = false } = {}) {
  const era = eraBySlug.get(c.era);
  const n = recordingsFor(c).length;
  const terms = `${c.name} ${c.slug} ${c.epithet} ${(c.works ?? []).map((w) => `${w.title} ${w.cat ?? ''}`).join(' ')}`;
  return `<li${filter ? ` data-search="${attr(fold(strip(terms)))}" data-period="${attr(c.era)}" data-recordings="${n}"` : ''}><a href="${href(ctx, c.slug)}">${thumb(ctx, c)}<span><span class="n">${esc(c.name)}</span><span class="d">${esc(lifespan(c))} · ${esc(era.name)}</span>${n ? `<span class="r">${n} recording${n === 1 ? '' : 's'}</span>` : ''}</span></a></li>`;
}

function directoryPage() {
  const ctx = { base: '../', page: 'composers/index' };
  const main = `<div class="wrap composer-directory">
<header class="page-head"><nav class="crumbs" aria-label="Breadcrumb"><a href="../explore/index.html">Explore</a></nav><h1>Composers</h1><p class="lede">${composers.length} lives, ordered by year of birth. Find a familiar name, follow a work, or choose someone you can hear here.</p></header>
<form class="filters" aria-label="Filter composers" role="search" data-directory-filters>
  <label class="search-field-label" for="composer-search"><span>Search composers or works</span><input id="composer-search" name="q" type="search" placeholder="Name or work" autocomplete="off" aria-controls="composer-list"></label>
  <label class="period-field-label" for="composer-period"><span>Period</span><select id="composer-period" name="period" aria-controls="composer-list"><option value="">All periods</option>${eras.map((e) => `<option value="${attr(e.slug)}">${esc(e.name)}</option>`).join('')}</select></label>
  <label class="recording-filter"><input type="checkbox" name="rec" value="1" aria-controls="composer-list"> Has a recording</label>
  <button class="btn quiet" type="reset">Clear filters</button>
  <output class="count" aria-live="polite" aria-atomic="true" data-directory-count>${composers.length} composers</output>
</form>
<noscript><p class="ui">Filtering needs JavaScript. All composers are listed below in birth order.</p></noscript>
<p class="directory-empty ui" data-directory-empty hidden>No composers match these filters. Try fewer words or clear the filters.</p>
<ul class="people" id="composer-list">${composers.map((c) => composerRow(ctx, c, { filter: true })).join('')}</ul>
</div>`;
  return page(ctx, { title: 'Composers — Contrapunctus', description: `Explore ${composers.length} composers in birth order, with filters for period, name, works and available recordings.`, main, type: 'directory', nav: 'explore' });
}

// Explicit collection/version links where the recording title is not the work-list title.
// A recording of a different numbered work is deliberately not a match.
const WORK_LINKS = {
  'bach-brandenburg-5-allegro': 'Six Brandenburg Concertos',
  'mozart-40-molto-allegro': 'Symphonies Nos. 39, 40 and 41',
  'mussorgsky-night-bald-mountain': 'St John’s Night on the Bare Mountain',
};
const workKey = (s) => fold(strip(s)).replace(/\bin [a-g][♯♭]? (?:major|minor)\b/g, '').replace(/[^\p{L}\p{N}♯♭]+/gu, ' ').trim().replace(/\s+/g, ' ');
const containsWords = (text, words) => words && ` ${text} `.includes(` ${words} `);
function workRecordings(w, mine) {
  const title = workKey(w.title);
  const catalogues = (w.cat ?? '').split(/\s*[·;]\s*/).filter((s) => !/[–—]|\band\b|,/.test(s)).map(workKey);
  return mine.filter((l) => {
    if (WORK_LINKS[l.id]) return WORK_LINKS[l.id] === w.title;
    const recording = workKey(l.work);
    return recording === title || recording.startsWith(`${title} `) || catalogues.some((cat) => containsWords(recording, cat));
  });
}

// These labels restate relationships explicitly described in the existing lineage notes.
// Untyped entries stay connections, not implied teacher–pupil claims.
const LINEAGE_LABELS = {
  bach: {
    from: { vivaldi: 'Transcribed music by' },
    to: { 'cpe-bach': 'Taught', brahms: 'Music arranged by', webern: 'Music orchestrated by', shostakovich: 'Keyboard cycles answered by' },
  },
  ravel: {
    from: { faure: 'Studied with', couperin: 'French suite tradition', liszt: 'Keyboard model' },
    to: { 'Ralph Vaughan Williams': 'Taught', 'Manuel Rosenthal': 'Pupil and interpreter', 'Gershwin — an exchange, not a pupil': 'Met; did not teach', boulez: 'Music recorded by' },
  },
  schoenberg: {
    to: { berg: 'Taught', webern: 'Taught', 'John Cage': 'Taught', boulez: 'Later critical engagement' },
  },
};

function lineageChip(ctx, c, side, name) {
  const target = bySlug.get(name);
  const label = LINEAGE_LABELS[c.slug]?.[side]?.[name];
  const body = `${label ? `<span class="kind">${esc(label)}</span>` : ''}<span>${esc(target?.name ?? name)}</span>`;
  return target ? `<a class="chip" href="${href(ctx, target.slug)}">${body}</a>` : `<span class="chip ext">${body}</span>`;
}

function startRecordings(ctx, c, mine) {
  if (!mine.length) return `<p class="no-recording">There is no recording by ${esc(c.family ?? c.name)} in this collection yet. See <a href="#recordings">Recordings worth seeking out</a> for listening recommendations.</p>`;
  return `<section class="recording-start" aria-label="Start with a recording"><h2 class="label">Start with this recording</h2><ul class="recording-starts">${mine.map((l) => `<li><p class="start-work"><strong>${esc(l.work)}</strong>${l.movement ? `<span>${esc(l.movement)}</span>` : ''}</p><div class="start"><button class="btn primary" type="button" data-play-id="${attr(l.id)}" aria-label="${attr(`Play ${l.work}${l.movement ? ` · ${l.movement}` : ''}`)}">Play recording</button><a class="btn quiet" href="${href(ctx, `listen:${l.id}`)}">Recording guide<span class="sr">: ${esc(l.work)}</span></a></div></li>`).join('')}</ul></section>`;
}

function composerPage(c, i) {
  const ctx = { base: '../', page: `composers/${c.slug}` };
  const era = eraBySlug.get(c.era);
  const mine = recordingsFor(c);
  const sections = [];
  const add = (id, title, body, sub = '') => sections.push({ id, title, body, sub });
  add('life', 'Life', `${c.quote ? `<div class="prose"><blockquote><p>“${esc(c.quote.text)}”</p><footer>${esc(c.quote.source)}</footer></blockquote></div>` : ''}<div class="prose with-notes">${rich(ctx, c.life)}</div>`);
  if (c.sound?.length) add('sound', 'The sound', `<div class="anatomy">${c.sound.map((s) => `<div><h3>${esc(s.aspect)}</h3>${rich(ctx, s.html)}</div>`).join('')}</div>`, 'Harmony, line, rhythm, colour and form.');
  if (c.works?.length) add('works', 'Works', `<ol class="works">${c.works.map((w) => `<li><span class="yr">${esc(w.year)}</span><div><span class="t">${w.titleHtml ?? esc(w.title)}</span>${w.cat ? `<span class="cat">${esc(w.cat)}</span>` : ''}${w.forces ? `<span class="forces">${esc(w.forces)}</span>` : ''}${w.note ? `<div class="w-note">${rich(ctx, w.note)}</div>` : ''}${workRecordings(w, mine).map((l) => `<div class="work-recording"><button class="btn small has-rec" type="button" data-play-id="${attr(l.id)}" aria-label="${attr(`Hear ${l.work}${l.movement ? ` · ${l.movement}` : ''}`)}">Hear it</button><a href="${href(ctx, `listen:${l.id}`)}">${esc(l.movement || l.work)}<span class="sr"> — recording guide</span></a></div>`).join('')}</div></li>`).join('')}</ol>`, 'A listening path, not a complete catalogue. “Hear it” plays the named recording or movement.');
  if (c.score?.length) add('score', 'In the score', scoresHtml(ctx, c.score), 'Playable quotations and teaching schematics are labelled separately. Playback uses synthesised instruments.');
  if (c.arts?.length) add('arts', 'Sister arts', arts(ctx, c.arts), 'Objects and texts, with the nature of each musical connection made explicit.');
  if (c.recordings?.length) add('recordings', 'Recordings', `<ul class="recs">${c.recordings.map((r) => `<li><span class="w">${esc(r.work)}</span><span class="p">${esc(r.performers)}</span>${r.label || r.year ? `<span class="m">${esc([r.label, r.year].filter(Boolean).join(' · '))}</span>` : ''}${r.note ? `<div class="d">${rich(ctx, r.note)}</div>` : ''}</li>`).join('')}</ul>`, 'Recordings worth seeking out (not hosted here)');
  if (c.lineage) add('lineage', 'Lineage', `<div class="lineage"><div class="side from"><span class="label">Sources and encounters</span>${(c.lineage.from ?? []).map((s) => lineageChip(ctx, c, 'from', s)).join('')}</div><div class="self">${esc(c.family ?? c.name)}</div><div class="side to"><span class="label">Later connections</span>${(c.lineage.to ?? []).map((s) => lineageChip(ctx, c, 'to', s)).join('')}</div></div>${c.lineage.note ? `<div class="lineage-note">${rich(ctx, c.lineage.note)}</div>` : ''}`, 'Study, performance and later responses are different relationships—not a single teacher–pupil chain. Read the note for the connections.');
  if (c.reading?.length) add('reading', 'Reading', `<ul class="reading">${c.reading.map((r) => `<li>${rich(ctx, r)}</li>`).join('')}</ul>`, 'Sources and further reading.');
  const facts = (c.facts ?? []).map(([key, value]) => `<div><dt>${esc(key)}</dt><dd>${rich(ctx, value)}</dd></div>`).join('');
  const prev = composers[i - 1], next = composers[i + 1];
  const main = `<div class="wrap"><header class="composer-head">
<div class="composer-intro"><nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Composers</a> / <a href="${href(ctx, `era:${era.slug}`)}">${esc(era.name)}</a></nav><h1>${esc(c.name)}</h1><div class="lifespan"><div>Born ${esc(c.born.date ?? c.born.year)}, ${esc(c.born.place)}</div>${c.died ? `<div>Died ${esc(c.died.date ?? c.died.year)}, ${esc(c.died.place)}</div>` : ''}</div><p class="epithet">${esc(c.epithet)}</p>${startRecordings(ctx, c, mine)}</div>
<figure>${img(ctx, c.portrait.file, `Portrait of ${c.name}`, { eager: true, sizes: '(max-width: 760px) 12rem, 17rem' })}${c.portrait.caption ? `<figcaption>${esc(c.portrait.caption)}</figcaption>` : ''}</figure>
${facts ? `<dl class="facts">${facts}</dl>` : ''}
</header></div>
<nav class="toc-bar" aria-label="On this page"><div class="wrap">${sections.map((s, j) => `<a href="#${s.id}"${j === 0 ? ' class="on" aria-current="location"' : ''}>${s.title}</a>`).join('')}</div></nav>
<div class="wrap composer-body">${sections.map((s) => `<section class="chapter" id="${s.id}" aria-labelledby="h-${s.id}"><header><h2 id="h-${s.id}">${s.title}</h2>${s.sub ? `<p>${esc(s.sub)}</p>` : ''}</header>${s.body}</section>`).join('\n')}
<nav class="pager" aria-label="Composers in birth order">${prev ? `<a href="${href(ctx, prev.slug)}" rel="prev"><span class="label">Previous by birth · ${prev.born.year}</span><span class="nm">${esc(prev.name)}</span></a>` : '<span></span>'}${next ? `<a class="next" href="${href(ctx, next.slug)}" rel="next"><span class="label">Next by birth · ${next.born.year}</span><span class="nm">${esc(next.name)}</span></a>` : ''}</nav></div>`;
  return page(ctx, { title: `${c.name} (${lifespan(c)}) — Contrapunctus`, description: c.epithet, main, type: 'composer', nav: 'explore' });
}

export async function build(out) {
  await out('composers/index.html', directoryPage());
  searchIndex.push({ type: 'Page', title: 'Composers', sub: `${composers.length} lives, in birth order`, url: 'composers/index.html', terms: 'directory periods recordings' });
  for (const [i, c] of composers.entries()) {
    await out(`composers/${c.slug}.html`, composerPage(c, i));
    searchIndex.push({ type: 'Composer', title: c.name, sub: `${lifespan(c)} · ${eraBySlug.get(c.era).name}`, url: `composers/${c.slug}.html`, audio: recordingsFor(c).length > 0, terms: strip(`${c.epithet} ${(c.works ?? []).map((w) => `${w.title} ${w.cat ?? ''}`).join(' ')}`) });
  }
}
