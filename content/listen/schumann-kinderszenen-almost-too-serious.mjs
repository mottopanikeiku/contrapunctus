// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), pp. 14–15.
// Kempowski’s Weltschmerz. Kinderszenen fast zu ernst (1995): Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013), item 36.
// https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
// Clara Wieck in Vienna, December 1837 – April 1838, and her father’s opposition: https://en.wikipedia.org/wiki/Clara_Schumann
export default {
  id: 'schumann-kinderszenen-almost-too-serious',
  composer: 'schumann',
  order: 100,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 10 · Fast zu ernst — Almost Too Serious',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 10, of: 13 },
  year: '1838',
  key: 'G♯ minor',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - x. almost too serious.ogg' },
  intro: 'The games stop for <i>Almost Too Serious</i>. In G♯ minor, the piano’s melody hangs across tiny barlines and repeatedly pauses under fermatas.',

  sections: [
    { t: 0, label: 'A · A tied melody in G♯ minor', m: 'A' },
    { t: 56, label: 'A′ · The tied melody returns', m: 'A′', mNote: 'The left hand resumes its rolling accompaniment' },
    { t: 104, label: 'Coda · A ritardando and held chord', m: 'Coda' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A melody between the beats', text: 'The bars are only two quavers long. The melody keeps tying its notes across them, while the left hand rolls semiquavers underneath. In G♯ minor, even the pauses feel troubled: Schumann writes ritardandos before the fermatas.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, pp. 14–15: 2/8, five sharps, tied melody, semiquaver accompaniment and recurring ritardandos with fermatas. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { t: 56, kind: 'form', title: 'The same troubled song', text: 'The opening pattern returns: a melody reaching across the barlines and a left hand that keeps turning beneath it. The phrases still break off at fermatas. Each restart is quiet.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, pp. 14–15: recurrence of the opening tied melody and accompaniment, with fermatas at phrase endings.' },
    { t: 86, kind: 'world', title: 'Kempowski borrows the title', text: 'Walter Kempowski puts this piece at the front of his childhood memoir in 1995, printed in musical notation. His book is called <i>Weltschmerz. Kinderszenen fast zu ernst</i>: world-weariness, childhood scenes almost too serious.', basis: 'documented', precision: 'passage', evidence: 'Thomas Synofzik, 175 Jahre Kinderszenen (2013), item 36: Kempowski’s autobiographical collection, Berlin 1995, with Schumann’s score as its opening. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
  ],

  transitions: [
    {
      id: 'opening-returns',
      title: 'The tied melody takes up again',
      from: 'A · A tied melody in G♯ minor',
      to: 'A′ · The tied melody returns',
      at: { t: 56 },
      span: [48, 64],
      how: '<p>The G♯-minor song takes up its opening pattern again. The right hand holds notes across the short barlines, and the left hand supplies the same rolling semiquavers. The return retains the quiet dynamic and the pauses at phrase endings.</p>',
      devices: ['motivic link'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, pp. 14–15, returning opening phrases. The section boundary locates the broad return.',
    },
    {
      id: 'into-the-close',
      title: 'The last pause holds',
      from: 'A′ · The tied melody returns',
      to: 'Coda · A ritardando and held chord',
      at: { t: 104 },
      span: [96, 112],
      how: '<p>The final phrase stretches the tied melody above the rolling bass. A ritardando runs through the last bars as both hands move towards a held G♯-minor chord. Fermatas stop the melody and the low bass together.</p>',
      devices: ['tempo change', 'fermata'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 15, final system: ritardando, closing G♯-minor chord and fermatas in both staves.',
    },
  ],
};
