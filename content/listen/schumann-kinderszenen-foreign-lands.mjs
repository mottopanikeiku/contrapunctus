// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), p. 3.
// https://imslp.org/wiki/Kinderszenen,_Op.15_(Schumann,_Robert)
// Composition dates: Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013).
// https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
// Recording: Donald Betts, album The Inner Voice (innig.net), recorded May 2005; see the dossier for how the file is linked to it.
export default {
  id: 'schumann-kinderszenen-foreign-lands',
  composer: 'schumann',
  order: 10,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 1 · Von fremden Ländern und Menschen — Of Foreign Lands and Peoples',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 1, of: 13 },
  year: '1838',
  key: 'G major',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - i. of foreign lands and peoples.ogg' },
  intro: 'Donald Betts plays “Von fremden Ländern und Menschen” (“Of Foreign Lands and Peoples”), the first piece of <i>Kinderszenen</i>, Op. 15. The tune is in G major, and triplets run between the melody and the bass.',

  sections: [
    { t: 0, label: 'A · Tune over triplets', m: 'A', mNote: 'Eight bars in G major, repeated.' },
    { t: 36, label: 'B · Paired notes, then a pause', m: 'B' },
    { t: 54, label: 'A′ · the G-major tune returns', m: 'A′', mNote: 'The melody begins on D this time.' },
    { t: 72, label: 'B · Second strain, repeated', m: 'B', mNote: 'The second strain repeats, with the return of the opening tune.' },
  ],

  cues: [
    { bar: { n: '1', occ: 1 }, kind: 'music', title: 'Opening melody over triplets', text: 'The melody leaps from B to G and comes down F♯–E–D. Under it, triplets pass between the hands while the bass moves in two beats to the bar.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 3, bars 1–8. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { bar: { n: '1', occ: 2 }, kind: 'form', title: 'Repeat of the opening eight bars', text: 'The opening eight bars are repeated. The melody again reaches the high G. Beneath it, a B♭ appears in the triplet accompaniment of bars 1 and 3 before the harmony returns to G major.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 3: repeat after bar 8; B♭ in the triplet accompaniment of bars 1 and 3.' },
    { t: 88, kind: 'world', title: 'Autograph for Marie Wieck, 1847', text: 'In 1847 Schumann gave the manuscript of this piece to his sister-in-law Marie Wieck. It is now in the Robert-Schumann-Haus in Zwickau and is the only complete autograph of any of the thirteen <i>Kinderszenen</i>.', basis: 'documented', precision: 'passage', evidence: 'Thomas Synofzik, 175 Jahre Kinderszenen (Robert-Schumann-Haus Zwickau, 2013), item 5, autograph 3702–A1. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
  ],

  transitions: [
    {
      id: 'into-new-strain',
      title: 'Second voice in the right hand',
      from: 'A · Tune over triplets',
      to: 'B · Paired notes, then a pause',
      at: { bar: { n: '9', occ: 1 } },
      span: [28, 46],
      how: '<p>The phrase ends in G major and the music moves to E minor. At bar 9 the right hand plays in pairs of notes, starting on G and B, over an E–B–E accompaniment, and the triplets continue underneath. The two-beat pulse stays the same, and the new phrase is marked <i>piano</i>.</p>',
      devices: ['motivic link', 'texture change'],
      basis: 'score-aligned',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 3, bars 8–10; E–B–E accompaniment under G and B at bar 9.',
    },
    {
      id: 'into-returning-tune',
      title: 'Fermata before the G-major tune',
      from: 'B · Paired notes, then a pause',
      to: 'A′ · the G-major tune returns',
      at: { bar: { n: '15', occ: 1 } },
      span: [46, 64],
      how: '<p>The new phrase ends with a ritardando and a fermata. The triplets then resume beneath the G-major tune, marked <i>piano</i>. The tune starts on D, and the leap to G and the descending phrase after it are heard again.</p>',
      devices: ['fermata', 'tempo change', 'retransition'],
      basis: 'score-aligned',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 3, bars 13–16; melody checked against Ying-Chun Liu’s Mutopia transcription, based on Leichte Stücke (1900).',
    },
    {
      id: 'into-repeat-of-second-strain',
      title: 'Repeat back to the paired notes',
      from: 'A′ · the G-major tune returns',
      to: 'B · Second strain, repeated',
      at: { bar: { n: '9', occ: 2 } },
      span: [66, 82],
      how: '<p>The G-major cadence ends on a long B in the melody. At bar 22 the repeat sends the pianist straight back to bar 9, where the paired G and B return over the E-minor accompaniment. The six-bar excursion and the fermata are played again, followed once more by the return.</p>',
      devices: ['motivic link'],
      basis: 'score-aligned',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 3, repeat from bar 22 to bar 9.',
    },
  ],
};
