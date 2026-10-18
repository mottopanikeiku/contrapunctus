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
  intro: 'An accented, repeated B begins a lullaby, with one sharp in the key signature. The middle part has four sharps and is marked pp; the opening shape then returns and the piece ends on a held chord.',
  question: 'What does the key signature tell you that the notes do not?',

  sections: [
    { t: 0, label: 'A · repeated B, E minor', m: 'A' },
    { t: 28, label: 'B · four sharps, E major, pp', m: 'B' },
    { t: 72, label: 'A′ · the lullaby returns', m: 'A′', mNote: 'opening shape again, ending on a fermata chord' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'An accented, repeated note', text: 'Two beats to the bar, one sharp in the key signature, marked p. The tune starts on a repeated B with accent marks, over a left-hand figure that circles the same few notes. The eight bars are written out as two groups of four that are nearly identical on the page.', basis: 'score-proportion', precision: 'passage', evidence: 'First edition p. 18 (IMSLP #03060): 2/4, one sharp, p, repeated B with > accents, left-hand figure on the same chord tones; the first two systems are identical in notation. Report: B region with F♯ and C among the strongest pitch classes at 0:05–0:20; 2.0–2.6 onsets per second.' },
    { t: 28, kind: 'form', title: 'Four sharps: the middle part', text: 'After a double bar the key signature jumps from one sharp to four, for E major, and the marking drops to pp. The report’s key estimates change around 0:35–0:45. At one point the right hand moves into the bass clef.', basis: 'audio-feature', precision: 'passage', evidence: 'Report: novelty 0.31 at 0:28; pitch classes E♭ (D♯) C♯ B at 0:40 and B major at 0:40–0:55; −15.4 dB at 0:40. Score p. 18, third system: key signature of four sharps, pp, a clef change to bass in the right-hand part. Machine keys are confirmation only.' },
    { t: 52, kind: 'life', title: 'Memories of childhood, written for adults', text: 'Schumann was twenty-seven in February 1838 and would not marry Clara for another two and a half years. He called the cycle reflections of an older person for older people, not music for children to play.', basis: 'documented', precision: 'passage', evidence: 'Henle Urtext review at schumann-portal.de/3213.html: Schumann’s “Rückspiegelungen eines älteren für ältere” and the remark that the pieces are for adults who remember childhood; Zwickau catalogue, item 11, gives the phrase as “eines Erwachsenen für Ältere”. Born 8 June 1810, so twenty-seven in February–March 1838. The marriage took place on 12 September 1840 (Clara Schumann, Wikipedia; composer page).' },
    { t: 72, kind: 'form', title: 'The lullaby returns', text: 'Near 1:12 the repeated B comes back, p again, and the key signature returns to one sharp. The report finds its largest boundary here, and the rate of attacks nearly halves.', basis: 'audio-feature', precision: 'passage', evidence: 'Report: novelty 1.00 at 1:12; −9.8 dB at 1:05, −11.9 dB at 1:10, onsets 1.2 per second at 1:10 against 2.2 at 1:05. Score p. 19, third system: one-sharp key signature, p, repeated B.' },
    { t: 100, kind: 'listen', title: 'Ritardando, then a held chord', text: 'The last system is marked ritardando and ends on a chord with a fermata. The report’s key estimate for the last windows is A minor (r = 0.77–0.86), not the E minor of the opening, so the chord does not simply come home. The sound falls from −17 dB at 1:40 to −43 dB at 1:55.', basis: 'audio-feature', precision: 'passage', evidence: 'Report: −16.8 dB at 1:40, −22.4 dB at 1:45, −28.5 dB at 1:50, −42.6 dB at 1:55, −61.9 dB at 2:00; 0.4 onsets per second at 1:50. Score p. 19, last system: ritardando over the final bars, fermata chord. Key estimates: A minor 1:45–2:00, against E-based harmony in the first system (Em chord, then a chord with D♯); machine keys are confirmation only.' },
  ],

  transitions: [
    {
      id: 'into-e-major',
      title: 'Key signature changes at the double bar',
      from: 'A · repeated B, E minor',
      to: 'B · four sharps, E major, pp',
      at: { t: 28 },
      span: [20, 36],
      how: '<p>The first eight bars end on a double bar, and the key signature changes from one sharp to four. The music moves from E minor to E major with no modulating bridge, and the marking drops to <i>pp</i>. The left-hand rocking continues, so the change of colour comes while the motion stays the same.</p>',
      devices: ['direct modulation', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Score p. 18: double bar after the second system, four-sharp key signature and pp in the third. Report: novelty 0.31 at 0:28; E♭ C♯ B pitch classes and B major at 0:40–0:55.',
    },
    {
      id: 'back-to-the-lullaby',
      title: 'A ritardando, then one sharp again',
      from: 'B · four sharps, E major, pp',
      to: 'A′ · the lullaby returns',
      at: { t: 72 },
      span: [64, 80],
      how: '<p>The middle part ends with a ritardando and the key signature returns to one sharp. The repeated B and the left-hand figure of the opening are heard again, and the harmony leaves the E-major region of the middle part for the one-sharp harmony of the opening.</p>',
      devices: ['tempo change', 'direct modulation', 'retransition'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Score p. 19, second to third systems: ritard., change to one sharp, p. Report: novelty 1.00 at 1:12, level −11.9 dB at 1:10 and onsets halving from 2.2 to 1.2 per second.',
    },
  ],
};
