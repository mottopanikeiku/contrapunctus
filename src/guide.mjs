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
  const body = `<div class="guide-page"><header class="guide-hero"><div class="wrap"><span class="kicker">Your guide to Contrapunctus</span><h1>Listen first.<br><i>Find your way.</i></h1><p>Follow a score, switch performers, trace a tune.<br>Try the controls as these short tours show you round.</p><nav class="guide-jumps" aria-label="Guide contents"><a href="#reader-paths">Choose a path ↓</a><a href="#every-feature">Every feature ↓</a><button type="button" class="guide-show" data-tour="hall-welcome">Take the one-minute Hall tour →</button></nav><span class="guide-hero-note">Start anywhere. Your music keeps playing.</span></div><span class="guide-seal" aria-hidden="true">?<i>your listening<br>companion</i></span></header>
    <section class="wrap guide-paths" id="reader-paths"><div class="guide-section-heading"><span class="kicker">Three ways in</span><h2>Begin where <i>you are.</i></h2><p>Pick a lesson, or work through a path of five.</p></div><div class="guide-path-grid">${paths.map((path, i) => `<section class="guide-path"><header><span class="guide-numeral">${['I', 'II', 'III'][i]}</span><h3>${esc(path.title)}</h3><p>${esc(path.intro)}</p></header><ol>${path.lessons.map((id) => `<li>${lesson(lessons.get(id), true)}</li>`).join('')}</ol></section>`).join('')}</div></section>
    <section class="guide-catalogue" id="every-feature"><div class="wrap"><div class="guide-section-heading"><span class="kicker">Explore the site</span><h2>Every <i>feature.</i></h2><p>Choose ‘Show me’ to open a page and try its controls.</p></div><div class="guide-feature-grid">${tours.map((tour) => lesson(tour)).join('')}</div></div></section>
    <aside class="wrap guide-how"><h2>At your own pace</h2><p>Move with Next and Back or the arrow keys; ‘Do it for me’ uses the highlighted control. Skip or Escape closes the tour and leaves the music playing. Your place in the tour survives a page refresh.</p><p>Saved pages are available offline; recordings stream over an internet connection. On your next visit, the player remembers your last recording and waits for you to press Play.</p><noscript><p>Interactive tours need JavaScript. You can still read the lessons, <a href="hall.html">visit the Hall</a>, <a href="influence.html">explore the Web of Influence</a> and <a href="sources.html">browse Sources &amp; method</a>.</p></noscript></aside></div>`;
  await out('guide.html', layout({ base: '', page: 'guide' }, { title: 'Guide — Contrapunctus', description: 'Thirteen short tours to help you follow a score, switch performers, trace the Dies irae, explore musical places and find sources.', body, dark: true, nav: 'guide', head: '<link rel="stylesheet" href="assets/css/guide.css">' }));
  await emit('assets/guide-tours.json', JSON.stringify(tours));
  return tours;
}
