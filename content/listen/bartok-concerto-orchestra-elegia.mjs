const SCORE = 'https://www.imslp.eu/autoindex/index.php?dir=euimg/c/c4/&file=IMSLP19114-PMLP04854-Bart%C3%B3k_-_Concerto_for_Orchestra_%28orch._score%29.pdf';
const PSO = 'https://culturaldistrict-prod.s3.amazonaws.com/culturaldistrict/system/assets/29105/original/Jan._17-19__2020.pdf';

export default {
  id: 'bartok-concerto-orchestra-elegia',
  composer: 'bartok',
  order: 4,
  work: 'Concerto for Orchestra, Sz. 116',
  movement: 'III. Elegia — Andante non troppo',
  set: { id: 'bartok-concerto-orchestra', title: 'Concerto for Orchestra', part: 3, of: 5 },
  year: '1943 (revised 1945)',
  key: '',
  forces: 'Orchestra',
  performers: 'Pittsburgh Symphony Orchestra; Fritz Reiner, conductor',
  recorded: '1946',
  source: {
    archive: { item: 'BelaBartok-ConcertoForOrchestra', file: '3.Elegia.mp3' },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1948,
      evidence: 'First issued in 1948: Klára Móricz, critical-edition Comments, source RecR, https://www.henle.de/media/7c/05/ab/1697725629/7001-1697725628-sync.pdf . Columbia MM-793, released 22 November 1948 according to https://musicbase.net/the-complete-columbia-album-collection-1xfda0q . Contemporary corroboration identifies set 793 and ML-4102 as the same Pittsburgh/Reiner performance: https://www.newyorker.com/magazine/1949/03/12/concert-records . Territorial EU basis only; US status not established.',
    },
  },
  intro: 'The concerto’s central lament grows out of a low string line, with flute and clarinet runs flickering above it. After the great outbursts, a piccolo is left calling into the dark.',
  sections: [
    { t: 0, label: 'Intro · Low strings and circling winds', m: 'Intro', mNote: 'Double basses begin; woodwinds circle above held string notes' },
    { t: 72, label: 'A · Piccolo calls and trumpet lament', m: 'A', mNote: 'Short wind phrases lead to a full orchestral lament' },
    { t: 190, label: 'Link · Horn chord, plucked cellos', m: 'Link', mNote: 'Solo cellos pluck beneath a held horn chord' },
    { t: 224, label: 'B · Violas, muted violins and harps', m: 'B', mNote: 'An expressive viola melody against short violin and harp figures' },
    { t: 302, label: 'C · High chords, restless lower strings', m: 'C', mNote: 'Flutes and violins strike chords above the moving lower parts' },
    { t: 354, label: 'Coda · Low strings and night calls', m: 'Coda', mNote: 'The opening string phrase returns beneath flute and clarinet runs' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'The basses remember', text: 'The double basses begin, with timpani sounding quietly beside them. Cellos, violas and second violins enter in turn. The phrase reaches back to the concerto’s first movement: the same slow climb from the bottom of the orchestra.', basis: 'score-proportion', precision: 'passage', evidence: `Boosey & Hawkes full score, plate B. & H. 9009, p. 47, opening bars; compare the fourth-based low-string phrase on p. 1: ${SCORE}` },
    { t: 36, kind: 'music', title: 'Eleven notes in a breath', text: 'Flute and clarinet sweep up and down in groups of eleven notes. The harp adds glissandos, while the oboe holds a much longer line. The strings barely move beneath them.', basis: 'score-proportion', precision: 'passage', evidence: `Boosey & Hawkes full score, pp. 47–50, bars 10–17: eleven-note flute and clarinet groups, harp glissandos, sustained oboe and strings: ${SCORE}` },
    { t: 148, kind: 'life', title: 'A summer at Saranac Lake', text: 'In 1943 Bartók works on the concerto at Saranac Lake in upstate New York, recovering from illness. Koussevitzky’s commission has reached him in hospital. By autumn the five movements are finished.', basis: 'documented', precision: 'passage', evidence: `Richard E. Rodda, Pittsburgh Symphony programme, January 2020, on Koussevitzky’s hospital visit and the Saranac Lake stay: ${PSO}. Composition dates, 15 August–8 October 1943: https://www.orchestralbassoon.com/bartok-concerto` },
    { t: 190, kind: 'music', title: 'The cellos pluck', text: 'A sharp horn chord sinks into a long, quiet note. Beneath the wavering oboes and clarinets, solo cellos pluck quick figures. The violins and violas tremble close to the bridge; the tam-tam rings softly behind them.', basis: 'score-proportion', precision: 'passage', evidence: `Boosey & Hawkes full score, pp. 58–59, bars 54–61: horns, paired woodwinds, two solo pizzicato cello parts, sul ponticello upper strings and tam-tam: ${SCORE}` },
    { t: 224, kind: 'music', title: 'The violas find a voice', text: 'The violas sing a connected line, marked <i>molto espressivo, legato</i>. Bartók also asks for <i>molto rubato</i>: the phrase can pull against the beat. Muted violins and two harps answer in shorter figures.', basis: 'score-proportion', precision: 'passage', evidence: `Boosey & Hawkes full score, pp. 59–60, from bar 62: Poco agitato, mosso, molto rubato; viola melody and its accompaniment: ${SCORE}` },
    { t: 302, kind: 'music', title: 'High chords, moving bassoons', text: 'Flutes and violins hammer out high chords while clarinets, bassoons, violas and cellos keep winding below. The upper parts strike; the lower ones refuse to stand still.', basis: 'score-proportion', precision: 'passage', evidence: `Boosey & Hawkes full score, pp. 62–64, especially the repeated chords and moving lower parts from bar 86: ${SCORE}` },
    { t: 354, kind: 'form', title: 'Back to the low strings', text: 'The opening phrase returns in basses, cellos and violas. Flute and clarinet runs begin circling again. The muted horn holds a quiet note beneath them.', basis: 'score-proportion', precision: 'passage', evidence: `Boosey & Hawkes full score, pp. 65–66, bars 99–111: return of the low-string phrase, Tempo I, woodwind runs and muted horn: ${SCORE}` },
    { t: 446, kind: 'music', title: 'The piccolo calls alone', text: 'The piccolo’s short calls reach above a muted horn and the last string notes. As the strings fall silent, piccolo and timpani carry the ending into <i>pianissimo</i>.', basis: 'score-proportion', precision: 'passage', evidence: `Boosey & Hawkes full score, p. 67, bars 118–128: piccolo, muted horn, string withdrawal and quiet timpani close: ${SCORE}` },
  ],
  transitions: [
    { id: 'frame-to-lament', title: 'The wind runs spread through the strings', from: 'Intro · Low strings and circling winds', to: 'A · Piccolo calls and trumpet lament', at: { t: 72 }, span: [58, 88], how: '<p>The flute and clarinet runs spread into several parts. A muted horn holds its note over cellos and violas, the violas bowing close to the bridge. Divided violins take up the winding figures. Piccolo calls and short brass phrases draw the music towards its first full lament.</p>', devices: ['texture change', 'orchestration change', 'motivic link'], basis: 'score-proportion', precision: 'passage', evidence: `Boosey & Hawkes full score, pp. 51–53, bars 22–34: ${SCORE}` },
    { id: 'lament-to-withdrawal', title: 'The horn chord leaves plucked cellos', from: 'A · Piccolo calls and trumpet lament', to: 'Link · Horn chord, plucked cellos', at: { t: 190 }, span: [177, 206], how: '<p>The horns strike a chord and immediately drop to <i>piano</i>. Oboes and clarinets rock between neighbouring notes. Solo cellos pluck rapid figures below them; the double basses are silent. Upper strings bow near the bridge, with quiet tam-tam strokes behind the held horn sound.</p>', devices: ['decrescendo', 'orchestration change', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: `Boosey & Hawkes full score, pp. 58–59, bars 54–61: ${SCORE}. Móricz discusses the conflicting horn muting and stopping instructions at bar 54: https://www.henle.de/media/7c/05/ab/1697725629/7001-1697725628-sync.pdf` },
    { id: 'withdrawal-to-ascent', title: 'The violas begin to sing', from: 'Link · Horn chord, plucked cellos', to: 'B · Violas, muted violins and harps', at: { t: 224 }, span: [210, 241], how: '<p>The wind oscillations broaden and stop. A few plucked cello and bass notes clear the way for the violas, marked <i>molto espressivo, legato</i>. The new <i>Poco agitato</i> phrase has freedom to linger: Bartók adds <i>molto rubato</i>. Muted violins and the two harps answer it.</p>', devices: ['tempo change', 'orchestration change', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: `Boosey & Hawkes full score, pp. 59–60, bars 60–66: ${SCORE}` },
    { id: 'ascent-to-climax', title: 'High chords cut across the melody', from: 'B · Violas, muted violins and harps', to: 'C · High chords, restless lower strings', at: { t: 302 }, span: [286, 319], how: '<p>At <i>Tempo I</i>, cor anglais and clarinets start a rising line, joined by bassoons. High flute and violin chords then cut across it. Violas and cellos continue the lower melody while the upper parts repeat their accented chords.</p>', devices: ['tempo change', 'register change', 'orchestration change', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: `Boosey & Hawkes full score, pp. 62–64, Tempo I and the chords from bar 86: ${SCORE}` },
    { id: 'climax-to-frame', title: 'The low-string phrase returns', from: 'C · High chords, restless lower strings', to: 'Coda · Low strings and night calls', at: { t: 354 }, span: [340, 377], how: '<p>The outburst dwindles into flute and clarinet runs over a fading violin note. Low strings recall the opening phrase, marked <i>piano</i>. At <i>Tempo I</i>, the woodwind runs resume above held strings and a muted horn, with quiet timpani underneath.</p>', devices: ['decrescendo', 'orchestration change', 'motivic link'], basis: 'score-proportion', precision: 'passage', evidence: `Boosey & Hawkes full score, pp. 65–66, bars 99–111: ${SCORE}` },
  ],
  orchestra: {
    ensemble: ['piccolo', 'flutes', 'oboes', 'cor-anglais', 'clarinets', 'bass-clarinet', 'bassoons', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: { title: 'Bartók, Concerto for Orchestra, B. & H. 9009, III', url: SCORE, locator: 'Boosey & Hawkes full score, printed pp. 47–67: low strings, wind runs, the viola lament and the final piccolo calls.' },
    timeline: [
      { t: 0, playing: ['basses', 'timpani'], lead: ['basses'], note: 'Double basses begin beside quiet timpani; cellos, violas and second violins enter in turn (p. 47).' },
      { t: 36, playing: ['flutes', 'oboes', 'clarinets', 'timpani', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['oboes', 'flutes', 'clarinets'], note: 'Flute and clarinet runs circle around the oboe’s long line, over strings and harp (pp. 47–50).' },
      { t: 116, playing: ['flutes', 'oboes', 'clarinets', 'bassoons', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['trumpets', 'violins-1'], note: 'Short wind phrases, brass chords and divided strings join the lament (pp. 53–55).' },
      { t: 224, playing: ['harp', 'violins-1', 'violins-2', 'violas'], lead: ['violas'], note: 'The violas sing an expressive line, answered by muted violins and two harps (pp. 59–60).' },
      { t: 302, playing: ['flutes', 'oboes', 'cor-anglais', 'clarinets', 'bassoons', 'horns', 'trumpets', 'timpani', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['cor-anglais', 'violins-1'], note: 'Cor anglais begins a line that spreads through the lower parts beneath high flute and violin chords (pp. 62–64).' },
      { t: 376, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'horns', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['flutes', 'clarinets'], note: 'Flutes and clarinets run over held strings and a muted horn (pp. 65–66).' },
      { t: 432, playing: ['piccolo', 'horns', 'timpani', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['piccolo'], note: 'Piccolo calls stand above a muted horn and fading strings, with a few timpani and harp notes (p. 67).' },
    ],
  },
};
