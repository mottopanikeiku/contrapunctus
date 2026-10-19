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
  intro: 'Donald Betts opens <i>Kinderszenen</i> with a G-major tune that seems to remember its own childhood. Between the melody and the bass, little triplets keep turning.',

  sections: [
    { t: 0, label: 'A · A tune over triplets', m: 'A', mNote: 'Eight bars in G major, repeated' },
    { t: 36, label: 'B · Paired notes, then a pause', m: 'B' },
    { t: 54, label: 'A′ · The G-major tune returns', m: 'A′', mNote: 'The melody begins on D this time' },
    { t: 72, label: 'B · Paired notes once more', m: 'B', mNote: 'The second strain repeats, including the returning tune' },
  ],

  cues: [
    { bar: { n: '1', occ: 1 }, kind: 'music', title: 'A tune over triplets', text: 'The melody leaps from B to G and comes down F♯–E–D. Under it, triplets pass between the hands while the bass keeps its own two-beat tread. Three things happen at once, softly.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 3, bars 1–8. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { bar: { n: '1', occ: 2 }, kind: 'form', title: 'The tune comes round', text: 'The same eight bars begin again. The high G is still the melody’s favourite note; beneath it, B♭ briefly colours the accompaniment before the music settles back into G major.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 3: repeat after bar 8; B♭ in the triplet accompaniment of bars 1 and 3.' },
    { t: 88, kind: 'world', title: 'A page for Marie', text: 'In 1847 Schumann gives the manuscript of this piece to his sister-in-law Marie Wieck. It is now in the Robert-Schumann-Haus in Zwickau: the only complete autograph of any of the thirteen <i>Kinderszenen</i>.', basis: 'documented', precision: 'passage', evidence: 'Thomas Synofzik, 175 Jahre Kinderszenen (Robert-Schumann-Haus Zwickau, 2013), item 5, autograph 3702–A1. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
  ],

  transitions: [
    {
      id: 'into-new-strain',
      title: 'The melody grows a second voice',
      from: 'A · A tune over triplets',
      to: 'B · Paired notes, then a pause',
      at: { bar: { n: '9', occ: 1 } },
      span: [28, 46],
      how: '<p>The G-major ending opens into E minor. The right hand now sings in pairs of notes, beginning with G and B, while the triplets continue underneath. Schumann keeps the two-beat pulse and marks the new phrase <i>piano</i>.</p>',
      devices: ['motivic link', 'texture change'],
      basis: 'score-aligned',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 3, bars 8–10; E–B–E accompaniment under G and B at bar 9.',
    },
    {
      id: 'into-returning-tune',
      title: 'A pause before G major',
      from: 'B · Paired notes, then a pause',
      to: 'A′ · The G-major tune returns',
      at: { bar: { n: '15', occ: 1 } },
      span: [46, 64],
      how: '<p>A ritardando and fermata hold back the end of the new phrase. The triplets then resume beneath the G-major tune, marked <i>piano</i>. Its first note is D; the leap to G and the descending answer are familiar.</p>',
      devices: ['fermata', 'tempo change', 'retransition'],
      basis: 'score-aligned',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 3, bars 13–16; melody checked against Ying-Chun Liu’s Mutopia transcription, based on Leichte Stücke (1900).',
    },
    {
      id: 'into-repeat-of-second-strain',
      title: 'Back to the paired notes',
      from: 'A′ · The G-major tune returns',
      to: 'B · Paired notes once more',
      at: { bar: { n: '9', occ: 2 } },
      span: [66, 82],
      how: '<p>The G-major cadence reaches a long B in the melody. The repeat sends the pianist straight back to the paired G and B over E-minor accompaniment. The six-bar excursion, the fermata and the homecoming all happen again.</p>',
      devices: ['motivic link'],
      basis: 'score-aligned',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 3, repeat from bar 22 to bar 9.',
    },
  ],
};
