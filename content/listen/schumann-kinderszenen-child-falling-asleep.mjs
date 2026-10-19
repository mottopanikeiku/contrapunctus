// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), pp. 18–19.
// Schumann’s description of the cycle (“Rückspiegelungen eines älteren für ältere”): Henle Urtext review at https://www.schumann-portal.de/3213.html ; see also the Zwickau catalogue 175 Jahre Kinderszenen (2013), item 11.
// https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
export default {
  id: 'schumann-kinderszenen-child-falling-asleep',
  composer: 'schumann',
  order: 120,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 12 · Kind im Einschlummern — Child Falling Asleep',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 12, of: 13 },
  year: '1838',
  key: 'E minor – E major',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - xii. child falling asleep.ogg' },
  intro: 'Kind im Einschlummern (Child Falling Asleep), No. 12 of Kinderszenen, Op. 15, is a lullaby in E minor that moves to E major and returns to E minor. Repeated B’s run through the piano part in a rocking figure.',

  sections: [
    { t: 0, label: 'A · Repeated B’s in E minor', m: 'A' },
    { t: 28, label: 'B · E major section', m: 'B' },
    { t: 72, label: 'A′ · E-minor lullaby theme returns', m: 'A′', mNote: 'A final ritardando leads to an unresolved ending.' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Repeated B, opening bars', text: 'A repeated B sounds in the middle of the piano while the upper notes rock above it. The left hand has the same dotted rhythm. Schumann keeps the lullaby quiet and repeats its short figures.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 18, opening eight bars: piano, repeated B’s and dotted figures in both hands. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { t: 28, kind: 'form', title: 'Middle section in E major', text: 'The middle passage is in E major and marked <i>pianissimo</i>. The rocking accompaniment continues under a fuller right-hand melody. As the phrase descends, the right hand moves into the bass clef, close to the left.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 18, third and fourth systems: E-major signature, pianissimo, descending melody and right-hand bass-clef changes.' },
    { t: 72, kind: 'form', title: 'Return of the opening, final ritardando', text: 'The opening returns in the one-sharp signature, <i>piano</i>, with its repeated B and rocking accompaniment. In the last phrase Schumann stretches a ritardando across several bars. The hands stop on a chord held under a fermata.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 19, final two systems: return to the one-sharp signature, piano, final ritardando and fermata.' },
  ],

  transitions: [
    {
      id: 'into-e-major',
      title: 'E minor turns to E major',
      from: 'A · Repeated B’s in E minor',
      to: 'B · E major section',
      at: { t: 28 },
      span: [20, 36],
      how: '<p>At the double bar, E minor moves directly to E major and the dynamic drops to <i>pianissimo</i>. The left hand continues its rocking figure on E, and the right hand plays fuller chords. G♯ replaces the G♮ of the minor section.</p>',
      devices: ['direct modulation', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 18, second to third systems: change to E major, pianissimo and continued E bass.',
    },
    {
      id: 'back-to-the-lullaby',
      title: 'The minor-key rocking figure returns',
      from: 'B · E major section',
      to: 'A′ · E-minor lullaby theme returns',
      at: { t: 72 },
      span: [64, 80],
      how: '<p>The middle passage slows under a ritardando. The key signature goes back to one sharp, and the repeated B returns above E-minor harmony. Schumann marks the return <i>piano</i>, and the left hand takes up the opening rocking figure again.</p>',
      devices: ['tempo change', 'direct modulation', 'retransition'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 19, second to third systems: ritardando, return to E minor and piano.',
    },
  ],
};
