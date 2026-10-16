// Learn: two paths, individually addressable lessons, and sound before explanation.
import { page } from '../shell.mjs';
import { pages, listens, bySlug, esc, attr, strip, rich, href, fmt, scoresHtml, arts, recordingLine, searchIndex } from '../lib.mjs';

const recordings = new Map(listens.map((recording) => [recording.id, recording]));

// Order overlapping historical spans by their beginning, not by the old chapter numerals.
const originsOrder = ['monochord', 'chant', 'organum', 'notation', 'ars-nova', 'instruments', 'polyphony', 'opera', 'continuo'];
const originsById = new Map(pages.origins.lessons.map((lesson) => [lesson.id, lesson]));
const paths = [
  { id: 'how-it-works', title: 'How it works', source: 'workshop', lessons: pages.workshop.lessons, description: 'Eighteen short lessons in melody, harmony, rhythm and instrumental sound. Start with a question, play the example, then follow the explanation.' },
  { id: 'before-bach', title: 'Before Bach', source: 'origins', lessons: originsOrder.map((id) => originsById.get(id)), description: 'Nine encounters with the ideas, instruments and practices behind Bach’s world. The dates overlap: these traditions developed alongside one another, not as a single line of progress.' },
];

const listenFor = {
  counterpoint: 'Follow the higher tune, then the lower one: each has its own direction even when their notes sound together.',
  fugue: 'Remember the shape of this short tune so you can recognise it when another voice takes it up.',
  'figured-bass': 'Listen to the low note change beneath the same upper chord: the foundation changes what the numbers describe.',
  temperament: 'Compare these two pairs of notes, then use the tuning laboratory below to hear their gentle beating change.',
  harmony: 'Listen for the last chord to settle the tension created by the one before it.',
  'sonata-form': 'Compare the brighter chord in each half: the return changes its pitch level before the music closes in minor.',
  chromaticism: 'Follow the notes that move by the smallest steps as the unsettled chords find a resting place.',
  'tristan-chord': 'Hear how the second chord changes the tension without making the phrase feel finished.',
  leitmotif: 'Keep the three-note shape in mind as its middle note and the length of its notes change.',
  modes: 'Listen for the unusually small step at the start of the second scale, compared with the first.',
  'whole-tone': 'Listen to the equal-sized steps: none is the small step that usually leans towards a neighbour.',
  octatonic: 'Follow the steps as they alternate small and large, then hear the same notes gathered into two chords.',
  atonality: 'Recognise the small three-note shape as it moves higher and then turns upside down.',
  'twelve-tone': 'Listen to the first twelve notes, then hear their upward and downward steps reversed in the next group.',
  rhythm: 'Keep a steady beat while the notes regroup: the accents can shift without the pulse speeding up.',
  orchestration: 'Hear the same short tune twice and notice what changes when a different instrument takes it over.',
  minimalism: 'Listen for the two patterns to start together, then separate when the lower one moves a note ahead.',
  spectralism: 'Follow the climb from a low note into the higher pitches that help give a sound its character.',
  monochord: 'Each pair starts on the same note; compare how far the second note rises.',
  chant: 'Follow one unaccompanied line, noticing when several notes stretch a single syllable.',
  organum: 'Listen to two lines moving together, keeping the same distance between their notes.',
  notation: 'Sing or follow the six syllables as the same pattern of steps moves to a new starting note.',
  'ars-nova': 'Keep track of the long–short–short rhythm while the repeating five-note melody slips across it.',
  instruments: 'Compare the harpsichord’s short, plucked sounds with the longer notes the flute and violin can hold.',
  polyphony: 'Listen for the lower voice to pick up the opening tune while the upper voice keeps going.',
  opera: 'Notice how short, speech-like phrases and longer singing can belong to the same conversation.',
  continuo: 'Listen to the held upper note become tense when the bass moves, then settle down by one step.',
};

// Additional connections make the comparison explicit rather than implying a lineage.
const extraConnections = {
  monochord: [{ slug: 'bach', why: 'Tuning and the keyboard' }],
  notation: [{ slug: 'bach', why: 'Written lines and keyboard teaching' }],
  organum: [{ slug: 'bach', why: 'Later music for independent voices' }],
  'ars-nova': [{ slug: 'messiaen', why: 'A later approach to patterned musical time' }],
  'twelve-tone': [{ slug: 'schoenberg', why: 'The row in the Suite for Piano, Op. 25' }],
  spectralism: [{ slug: 'saariaho', why: 'Timbre as compositional material' }],
};

function recordingActions(ctx, entry) {
  const recording = recordings.get(entry.id);
  const title = [bySlug.get(recording.composer).family, recording.work, recording.movement].filter(Boolean).join(' · ');
  const url = `${href(ctx, `listen:${entry.id}`)}?t=${entry.t}`;
  return `<div class="lesson-actions"><button class="btn primary" type="button" data-play-id="${attr(entry.id)}" data-play-t="${entry.t}" aria-label="${attr(`Play ${title} from ${fmt(entry.t)}`)}">Play from ${fmt(entry.t)}</button><a class="btn quiet" href="${url}">Open this passage</a></div>`;
}

function recordingCard(ctx, entry) {
  const recording = recordings.get(entry.id);
  const composer = bySlug.get(recording.composer);
  return `<li><span class="label">${esc(composer.name)}</span><h3 class="w">${esc(recording.work)}</h3>${recording.movement ? `<span class="p">${esc(recording.movement)}</span>` : ''}<p class="d">${esc(entry.why)}</p>${recordingActions(ctx, entry)}<p class="m">${esc(recordingLine(recording))}</p></li>`;
}

function performanceFigure(ctx, entry) {
  const recording = recordings.get(entry.id);
  return `<figure class="lesson-sound"><p class="label">Real performance · a later example</p><h2>${esc(bySlug.get(recording.composer).family)} · ${esc(recording.work)}</h2>${recording.movement ? `<p class="lesson-movement">${esc(recording.movement)}</p>` : ''}${recordingActions(ctx, entry)}<figcaption><p>${esc(entry.why)}</p><p>${esc(recordingLine(recording))}</p><p>Start within the passage, not at an exactly verified note entrance.</p></figcaption></figure>`;
}

function relatedComposers(ctx, lesson) {
  const related = new Map((extraConnections[lesson.id] ?? []).map((item) => [item.slug, item.why]));
  for (const match of lesson.html.matchAll(/\[\[([^\]|]+)(?:\|[^\]]+)?\]\]/g)) {
    if (bySlug.has(match[1]) && !related.has(match[1])) related.set(match[1], '');
  }
  for (const entry of lesson.listen ?? []) {
    const slug = recordings.get(entry.id).composer;
    if (!related.has(slug)) related.set(slug, '');
  }
  return `<section class="lesson-related" aria-labelledby="related-title"><h2 id="related-title">Follow the idea</h2><p class="lesson-meta">Related composers elsewhere in the collection.</p><ul>${[...related].map(([slug, why]) => `<li><a class="btn quiet" href="${href(ctx, slug)}">${esc(bySlug.get(slug).name)}</a>${why ? `<span>${esc(why)}</span>` : ''}</li>`).join('')}</ul></section>`;
}

function pager(path, position) {
  const previous = path.lessons[position - 1];
  const next = path.lessons[position + 1];
  return `<nav class="pager lesson-pager" aria-label="Continue in ${attr(path.title)}"><a href="${previous ? `${previous.id}.html` : `index.html#${path.id}`}"${previous ? ' rel="prev"' : ''}><span class="label">${previous ? 'Previous lesson' : 'The whole path'}</span><span class="nm">${esc(previous?.question ?? path.title)}</span></a><a href="${next ? `${next.id}.html` : `index.html#${path.id}`}"${next ? ' rel="next"' : ''}><span class="label">${next ? 'Next lesson' : 'Path complete'}</span><span class="nm">${esc(next?.question ?? `All ${path.title} lessons`)}</span></a></nav>`;
}

function lessonPage(path, lesson, position) {
  const ctx = { base: '../', page: `learn/${lesson.id}` };
  // The score helper numbers each call from one; explicit IDs keep split examples unique.
  const examples = (lesson.score ?? []).map((score, index) => ({ ...score, id: `${lesson.id}-example-${index + 1}` }));
  const performances = lesson.listen ?? [];
  const objects = lesson.arts ?? [];
  const firstExample = examples.length ? `<p class="label lesson-medium">Synthesised example</p>${scoresHtml(ctx, examples.slice(0, 1))}` : performanceFigure(ctx, performances[0]);
  const main = `<article class="lesson">
<header class="page-head lesson-head"><div class="wrap">
  <nav class="crumbs" aria-label="Breadcrumb"><a href="index.html">Learn</a><span aria-hidden="true"> / </span><a href="index.html#${path.id}">${esc(path.title)}</a><span aria-hidden="true"> / </span><span>Lesson ${position + 1} of ${path.lessons.length}</span></nav>
  <h1>${esc(lesson.question)}</h1><p class="label lesson-technical">${esc(lesson.heading)}${path.source === 'origins' ? ` <span>· ${esc(lesson.label)}</span>` : ''}</p>
</div></header>
<nav class="toc-bar lesson-toc" aria-label="In this lesson"><div class="wrap"><a href="#try">Hear it</a><a href="#understand">Read</a>${examples.length > 1 ? '<a href="#examples">More examples</a>' : ''}${performances.length ? '<a href="#performances">Performances</a>' : ''}${objects.length ? '<a href="#objects">Objects</a>' : ''}<a href="#continue">Continue</a></div></nav>
<section class="lesson-opening" id="try" aria-label="Listen first"><div class="wrap"><p class="lesson-prompt">${esc(listenFor[lesson.id])}</p><div class="lesson-examples">${firstExample}</div></div></section>
<section class="section lesson-reading" id="understand" aria-labelledby="understand-title"><div class="wrap"><div class="section-head"><h2 id="understand-title">The idea in detail</h2></div><div class="prose with-notes lesson-prose">${rich(ctx, lesson.html)}</div></div></section>
${examples.length > 1 ? `<section class="section" id="examples" aria-labelledby="examples-title"><div class="wrap"><div class="section-head"><h2 id="examples-title">Keep listening</h2><p>More synthesised examples, with their limits and sources.</p></div><div class="lesson-examples">${scoresHtml(ctx, examples.slice(1))}</div></div></section>` : ''}
${performances.length ? `<section class="section" id="performances" aria-labelledby="performances-title"><div class="wrap"><div class="section-head"><h2 id="performances-title">Hear it in a real performance</h2><p>These times guide you into a passage, not to an exactly verified note entrance. Open the guide for its timing evidence and recording sources.</p></div><ul class="recs lesson-recordings">${performances.map((entry) => recordingCard(ctx, entry)).join('')}</ul></div></section>` : ''}
${objects.length ? `<section class="section" id="objects" aria-labelledby="objects-title"><div class="wrap"><div class="section-head"><h2 id="objects-title">Objects and sources</h2></div>${arts(ctx, objects)}</div></section>` : ''}
<div class="wrap" id="continue">${pager(path, position)}${relatedComposers(ctx, lesson)}</div>
</article>`;
  return page(ctx, { title: `${lesson.question} — Learn`, description: `${lesson.heading}. ${listenFor[lesson.id]}`, main, type: 'lesson', nav: 'learn' });
}

export async function build(out) {
  const ctx = { base: '../', page: 'learn/index' };
  const main = `<div class="learn-index">
<header class="page-head"><div class="wrap"><h1>Learn</h1><p class="lede">How the music works, and where it came from</p><p class="lesson-meta">No score-reading needed. Play a short example, then follow the idea as far as you like.</p></div></header>
<nav class="toc-bar" aria-label="Learning paths"><div class="wrap">${paths.map((path) => `<a href="#${path.id}">${esc(path.title)} · ${path.lessons.length} lessons</a>`).join('')}</div></nav>
${paths.map((path) => `<section class="section" id="${path.id}" aria-labelledby="${path.id}-title"><div class="wrap"><div class="section-head"><div><span class="label">${path.source === 'workshop' ? 'Workshop' : 'Origins'}</span><h2 id="${path.id}-title">${esc(path.title)}</h2><p>${esc(path.description)}</p></div></div><ol class="lesson-list">${path.lessons.map((lesson, index) => `<li><a href="${lesson.id}.html"><span class="lesson-meta">${index + 1} · ${esc(lesson.label)}</span><span class="q">${esc(lesson.question)}</span><span class="t">${esc(lesson.heading)}</span></a></li>`).join('')}</ol></div></section>`).join('')}
<div class="wrap"><p class="scope">Notation examples use synthesised sound and distinguish quotations from teaching schematics. Real performances appear where the collection has a relevant passage; the historical path also uses clearly labelled later comparisons.</p></div>
</div>`;
  await out('learn/index.html', page(ctx, { title: 'Learn — How the music works', description: 'Twenty-seven question-led lessons: how music works, and the ideas, instruments and practices before Bach. Start with something to hear.', main, nav: 'learn' }));
  searchIndex.push({ type: 'Page', title: 'Learn', sub: 'How the music works, and where it came from', url: 'learn/index.html', terms: 'Workshop Origins Before Bach lessons harmony rhythm counterpoint' });
  for (const path of paths) {
    for (const [position, lesson] of path.lessons.entries()) {
      await out(`learn/${lesson.id}.html`, lessonPage(path, lesson, position));
      searchIndex.push({ type: 'Lesson', title: lesson.question, sub: lesson.heading, url: `learn/${lesson.id}.html`, terms: `${path.title} ${lesson.label} ${strip(lesson.html).replace(/\{\{harmonic-series\}\}/g, 'harmonic series')}` });
    }
  }
}
