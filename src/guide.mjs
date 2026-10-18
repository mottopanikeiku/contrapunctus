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
  const button = (tour) => `<button type="button" class="guide-show" data-tour="${attr(tour.id)}" aria-label="Show me: ${attr(tour.title)}">Show me <span aria-hidden="true">→</span></button>`;
  const lesson = (tour, compact = false) => `<article class="guide-lesson${compact ? ' guide-lesson-small' : ''}"${compact ? '' : ` id="${attr(tour.id)}"`}>
    ${compact ? '' : `<span class="guide-feature">${esc(tour.feature)}</span>`}<h${compact ? '4' : '3'}>${esc(tour.title)}</h${compact ? '4' : '3'}><p>${esc(tour.promise)}</p><div class="guide-lesson-foot"><span>${esc(tour.duration)}</span>${button(tour)}</div></article>`;
  const body = `<div class="guide-page"><header class="guide-hero"><div class="wrap"><span class="kicker">A companion to Contrapunctus</span><h1>Listen first.<br><i>Find your way.</i></h1><p>Follow a score, change a performer, trace a borrowing.<br>These short lessons point to the controls while you use them.</p><nav class="guide-jumps" aria-label="Guide contents"><a href="#reader-paths">Choose a path ↓</a><a href="#every-feature">Every feature ↓</a><button type="button" class="guide-show" data-tour="hall-welcome">Take the 1-minute Hall tour →</button></nav><span class="guide-hero-note">No account. No fixed order. Your music keeps playing.</span></div><span class="guide-seal" aria-hidden="true">?<i>the listener’s<br>companion</i></span></header>
    <section class="wrap guide-paths" id="reader-paths"><div class="guide-section-heading"><span class="kicker">Three ways in</span><h2>Begin where <i>you are.</i></h2><p>Each path offers five lessons. Choose one, or follow them in order.</p></div><div class="guide-path-grid">${paths.map((path, i) => `<section class="guide-path"><header><span class="guide-numeral">${['I', 'II', 'III'][i]}</span><h3>${esc(path.title)}</h3><p>${esc(path.intro)}</p></header><ol>${path.lessons.map((id) => `<li>${lesson(lessons.get(id), true)}</li>`).join('')}</ol></section>`).join('')}</div></section>
    <section class="guide-catalogue" id="every-feature"><div class="wrap"><div class="guide-section-heading"><span class="kicker">The whole house</span><h2>Every <i>feature.</i></h2><p>Choose a task. ‘Show me’ opens the right page and walks beside you.</p></div><div class="guide-feature-grid">${tours.map((tour) => lesson(tour)).join('')}</div></div></section>
    <aside class="wrap guide-how"><h2>At your own pace</h2><p>Use Next and Back, or the arrow keys. ‘Do it for me’ operates the highlighted control. Skip or Escape closes the tour without stopping your recording. Refreshing a page restores your place in an unfinished tour.</p><p>Pages you have visited can be read offline once cached. Audio streams need a connection; no recordings are downloaded for offline listening. On a later visit, your last recording returns paused.</p><noscript><p>The lessons are readable here without JavaScript. Interactive tours need JavaScript; you can still <a href="hall.html">open the Hall</a>, <a href="influence.html">read the Web of Influence</a> or <a href="sources.html">inspect Sources &amp; method</a>.</p></noscript></aside></div>`;
  await out('guide.html', layout({ base: '', page: 'guide' }, { title: 'Guide — Contrapunctus', description: 'Thirteen short, interactive lessons: follow a score, switch performers, trace the Dies irae, explore musical places and check the sources.', body, dark: true, nav: 'guide', head: '<link rel="stylesheet" href="assets/css/guide.css">' }));
  await emit('assets/guide-tours.json', JSON.stringify(tours));
  return tours;
}
