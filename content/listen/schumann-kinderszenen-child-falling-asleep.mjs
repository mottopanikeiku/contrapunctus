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
  intro: 'A lullaby in E minor turns to E major and back again. Repeated B’s keep the piano gently rocking, even when the music seems too drowsy to finish.',

  sections: [
    { t: 0, label: 'A · Repeated B’s in E minor', m: 'A' },
    { t: 28, label: 'B · E major, softer still', m: 'B' },
    { t: 72, label: 'A′ · The E-minor lullaby returns', m: 'A′', mNote: 'A final ritardando leads to a suspended ending' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A B that keeps rocking', text: 'B pulses in the middle of the piano while the upper notes rock above it. The left hand has the same dotted lilt. Schumann keeps the E-minor lullaby quiet, repeating the little figures as if the child is nearly asleep.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 18, opening eight bars: piano, repeated B’s and dotted figures in both hands. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { t: 28, kind: 'form', title: 'The lullaby turns to major', text: 'E major warms the middle passage, marked <i>pianissimo</i>. The rocking continues underneath a fuller right-hand melody. As the phrase descends, the right hand moves into the bass clef, close to the left.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 18, third and fourth systems: E-major signature, pianissimo, descending melody and right-hand bass-clef changes.' },
    { t: 72, kind: 'form', title: 'Sleep overtakes the phrase', text: 'The E-minor opening returns, with its repeated B and rocking accompaniment. In the last phrase Schumann stretches a ritardando across several bars. The hands finally stop on a chord held under a fermata, leaving the lullaby hanging.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 19, final two systems: return to the one-sharp signature, piano, final ritardando and fermata.' },
  ],

  transitions: [
    {
      id: 'into-e-major',
      title: 'E minor turns to E major',
      from: 'A · Repeated B’s in E minor',
      to: 'B · E major, softer still',
      at: { t: 28 },
      span: [20, 36],
      how: '<p>At the double bar, E minor turns directly to E major and the dynamic falls to <i>pianissimo</i>. The left hand keeps rocking on E while the right hand opens into fuller chords. The new G♯ changes the light.</p>',
      devices: ['direct modulation', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 18, second to third systems: change to E major, pianissimo and continued E bass.',
    },
    {
      id: 'back-to-the-lullaby',
      title: 'The minor-key rocking returns',
      from: 'B · E major, softer still',
      to: 'A′ · The E-minor lullaby returns',
      at: { t: 72 },
      span: [64, 80],
      how: '<p>A ritardando slows the middle passage. The key signature returns to one sharp, and the familiar B pulses above E-minor harmony. Schumann marks the return <i>piano</i>; the left hand resumes the opening rocking figure.</p>',
      devices: ['tempo change', 'direct modulation', 'retransition'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 19, second to third systems: ritardando, return to E minor and piano.',
    },
  ],
};
