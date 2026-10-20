import { createHash } from 'node:crypto';
import { readFileSync } from 'node:fs';
import { tours, paths } from './guide-tours.mjs';

// Version both lazy data and its stylesheet without fetching either on an ordinary visit.
export const guideVersion = createHash('sha256').update(JSON.stringify(tours)).update(readFileSync(new URL('./assets/css/tour.css', import.meta.url))).digest('hex').slice(0, 12);

export async function buildGuide({ out, emit, layout, esc, attr }) {
  const lessons = new Map(tours.map((tour) => [tour.id, tour]));
  for (const tour of tours) for (const step of tour.steps) {
    if (step.text.trim().split(/\s+/).length > 40) throw new Error(`Guide: ${tour.id} / ${step.title} exceeds 40 words`);
  }
  const button = (tour) => `<button type="button" class="textbook-button" data-tour="${attr(tour.id)}" aria-label="Start tour: ${attr(tour.title)}">Start tour</button>`;
  const lesson = (tour, compact = false) => `<article class="guide-lesson${compact ? ' guide-lesson-small' : ''}"${compact ? '' : ` id="${attr(tour.id)}"`}>
    ${compact ? '' : `<span class="guide-feature">${esc(tour.feature)}</span>`}<h${compact ? '4' : '3'}>${esc(tour.title)}</h${compact ? '4' : '3'}><p>${esc(tour.promise)}</p><div class="guide-lesson-foot"><span>${esc(tour.duration)}</span>${button(tour)}</div></article>`;
  const body = `<div class="guide-page"><header class="guide-hero night"><div class="wrap"><span class="kicker">Guide</span><h1>Tours of the site</h1><p>Short tours on the working pages: the score in the Hall, performer comparisons, the Web of Influence, the Map and the sources.<br>Each step highlights one control and explains it.</p><nav class="guide-jumps" aria-label="Guide contents"><a href="#reader-paths">Reading paths</a><a href="#every-feature">All tours</a><button type="button" class="textbook-button" data-tour="hall-welcome">Hall tour, one minute</button></nav><span class="guide-hero-note">Playback continues during a tour.</span></div></header>
    <section class="wrap guide-paths" id="reader-paths"><div class="guide-section-heading"><span class="kicker">Paths</span><h2>Reading <i>paths</i></h2><p>Each path is a sequence of five tours.</p></div><div class="guide-path-grid">${paths.map((path, i) => `<section class="guide-path"><header><span class="guide-numeral">${['I', 'II', 'III'][i]}</span><h3>${esc(path.title)}</h3><p>${esc(path.intro)}</p></header><ol>${path.lessons.map((id) => `<li>${lesson(lessons.get(id), true)}</li>`).join('')}</ol></section>`).join('')}</div></section>
    <section class="guide-catalogue" id="every-feature"><div class="wrap"><div class="guide-section-heading"><span class="kicker">Catalogue</span><h2>All <i>tours</i></h2><p>‘Start tour’ opens the page and highlights the first control.</p></div><div class="guide-feature-grid">${tours.map((tour) => lesson(tour)).join('')}</div></div></section>
    <aside class="wrap guide-how"><h2>Tour controls</h2><p>Next and Back, or the arrow keys, move between steps; ‘Do this step’ operates the highlighted control. Skip or Escape closes the tour; playback continues. The current step is kept if the page is reloaded.</p><p>Saved pages are available offline; recordings stream over an internet connection. On a later visit the player loads the last recording and waits for Play.</p><noscript><p>The tours need JavaScript. Without it the tour descriptions above can still be read, and these pages still open: <a href="hall.html">the Hall</a>, <a href="influence.html">the Web of Influence</a> and <a href="sources.html">Sources &amp; method</a>.</p></noscript></aside></div>`;
  await out('guide.html', layout({ base: '', page: 'guide' }, { title: 'Guide — Contrapunctus', description: 'Thirteen short tours of the site: following a score, comparing performers, the Dies irae in the Web of Influence, the Map and the sources.', body, dark: true, nav: 'guide', head: '<link rel="stylesheet" href="assets/css/guide.css">' }));
  await emit('assets/guide-tours.json', JSON.stringify(tours));
  return tours;
}
