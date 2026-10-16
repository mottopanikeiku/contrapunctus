// Period essays share the object, notation and compact people components.
import { page } from '../shell.mjs';
import { eras, composers, bySlug, searchIndex, esc, attr, strip, rich, href, img, objectFigure, scoresHtml, arts, fmt, streamOf } from '../lib.mjs';
import { composerRow, recordingsFor } from './composers.mjs';

function periodIndex() {
  const ctx = { base: '../', page: 'periods/index' };
  const main = `<div class="wrap period-directory"><header class="page-head"><nav class="crumbs" aria-label="Breadcrumb"><a href="../explore/index.html">Explore</a></nav><h1>Periods</h1><p class="lede">Seven ways into the music: the working lives, instruments, institutions and ideas behind the scores. These overlapping periods are a reading guide, not hard borders.</p></header>
<div class="period-list">${eras.map((e) => {
    const count = composers.filter((c) => c.era === e.slug).length;
    const url = href(ctx, `era:${e.slug}`);
    return `<article class="period"><div class="period-date"><span class="label">Period ${esc(e.numeral)}</span><span class="span">${esc(e.span)}</span></div><div><h2><a href="${url}">${esc(e.name)}</a></h2><div class="period-precis">${rich(ctx, e.precis)}</div><p class="period-count">${count} composers in this collection</p></div><a class="period-image" href="${url}" aria-label="${attr(`Explore ${e.name}`)}">${img(ctx, e.hero.file, `${e.hero.artist}, ${e.hero.title}`, { sizes: '(max-width: 860px) 18rem, 24vw' })}</a></article>`;
  }).join('')}</div></div>`;
  return page(ctx, { title: 'Periods — Contrapunctus', description: 'Explore seven overlapping periods of Western classical music, from the Baroque to music after 1945, through composers, recordings, scores and real objects.', main, nav: 'explore' });
}

function recordingRow(ctx, l) {
  const c = bySlug.get(l.composer);
  const stream = streamOf(l);
  return `<li class="period-track"><button class="btn quiet" type="button" data-play-id="${attr(l.id)}" aria-label="${attr(`Play ${c.name}: ${l.work}${l.movement ? ` · ${l.movement}` : ''}`)}">Play</button><a href="${href(ctx, `listen:${l.id}`)}"><span class="c">${esc(c.name)}</span><span class="w">${esc(l.work)}${l.movement ? ` · ${esc(l.movement)}` : ''}</span>${l.forces ? `<span class="tags">${esc(l.forces)}</span>` : ''}${stream ? `<span class="d">${fmt(stream.duration)}</span>` : ''}</a></li>`;
}

function periodPage(e, i) {
  const ctx = { base: '../', page: `periods/${e.slug}` };
  const people = composers.filter((c) => c.era === e.slug);
  const recordings = people.flatMap(recordingsFor);
  const sections = [];
  const add = (id, title, body, sub = '') => sections.push({ id, title, body, sub });
  add('essay', 'The story', `<div class="prose with-notes">${rich(ctx, e.essay)}</div>`);
  if (e.glossary?.length) add('terms', 'Terms of art', `<div class="glossary">${e.glossary.map((g) => `<div><h3>${esc(g.term)}</h3>${rich(ctx, g.html)}</div>`).join('')}</div>`, 'Vocabulary for the sounds and practices of this period.');
  if (e.score?.length) add('score', 'In the score', scoresHtml(ctx, e.score), 'Quotations and teaching schematics are labelled separately. Playback uses synthesised instruments.');
  if (e.arts?.length) add('arts', 'Sister arts', arts(ctx, e.arts), 'Objects and texts, with the musical relationship explained.');
  add('composers', 'Composers', `<ul class="people">${people.map((c) => composerRow(ctx, c)).join('')}</ul>`, `${people.length} composers in this collection, ordered by year of birth.`);
  add('recordings', 'Recordings here', recordings.length ? `<ul class="track-list">${recordings.map((l) => recordingRow(ctx, l)).join('')}</ul>` : `<p class="prose">There are no recordings from this period in the collection yet. The composer pages above include recordings worth seeking out elsewhere.</p>`, recordings.length ? 'Grouped by composer, in birth order—not by the date of the work. Play here, or open a recording’s guide.' : 'The reading and the available recordings have different scopes.');
  const prev = eras[i - 1], next = eras[i + 1];
  const main = `<div class="wrap"><header class="period-head"><div class="period-intro"><nav class="crumbs" aria-label="Breadcrumb"><a href="../explore/index.html">Explore</a> / <a href="index.html">Periods</a></nav><p class="label">Period ${esc(e.numeral)} · ${esc(e.span)}</p><h1>${esc(e.name)}</h1><p class="period-subtitle">${esc(e.subtitle)}</p><div class="prose period-precis">${rich(ctx, e.precis)}</div><div class="period-actions"><a class="btn primary" href="#${recordings.length ? 'recordings' : 'composers'}">${recordings.length ? `Hear this period · ${recordings.length} recordings` : 'Meet the composers'}</a><a class="btn quiet" href="#essay">Read the story</a></div></div>${objectFigure(ctx, e.hero, { sizes: '(max-width: 860px) 90vw, 45vw' })}</header></div>
<nav class="toc-bar" aria-label="On this page"><div class="wrap">${sections.map((s, j) => `<a href="#${s.id}"${j === 0 ? ' class="on" aria-current="location"' : ''}>${s.title}</a>`).join('')}</div></nav>
<div class="wrap period-body">${sections.map((s) => `<section class="chapter" id="${s.id}" aria-labelledby="h-${s.id}"><header><h2 id="h-${s.id}">${s.title}</h2>${s.sub ? `<p>${esc(s.sub)}</p>` : ''}</header>${s.body}</section>`).join('\n')}
<nav class="pager" aria-label="Periods">${prev ? `<a href="${href(ctx, `era:${prev.slug}`)}" rel="prev"><span class="label">Previous period · ${esc(prev.span)}</span><span class="nm">${esc(prev.name)}</span></a>` : '<a href="../learn/index.html#before-bach"><span class="label">Before the Baroque</span><span class="nm">Before Bach</span></a>'}${next ? `<a class="next" href="${href(ctx, `era:${next.slug}`)}" rel="next"><span class="label">Next period · ${esc(next.span)}</span><span class="nm">${esc(next.name)}</span></a>` : '<a class="next" href="../explore/lifelines.html"><span class="label">Across the periods</span><span class="nm">Lifelines</span></a>'}</nav></div>`;
  // The same small contents observer serves both kinds of long reading page.
  return page(ctx, { title: `${e.name} (${e.span}) — Contrapunctus`, description: strip(e.subtitle), main, type: 'composer', nav: 'explore' });
}

export async function build(out) {
  await out('periods/index.html', periodIndex());
  searchIndex.push({ type: 'Page', title: 'Periods', sub: `${eras.length} overlapping musical periods`, url: 'periods/index.html', terms: 'history eras Baroque Classical Romantic modern contemporary' });
  for (const [i, e] of eras.entries()) {
    await out(`periods/${e.slug}.html`, periodPage(e, i));
    searchIndex.push({ type: 'Period', title: e.name, sub: `${e.span} · ${e.subtitle}`, url: `periods/${e.slug}.html`, terms: strip(`${e.precis} ${(e.glossary ?? []).map((g) => g.term).join(' ')}`) });
  }
}
