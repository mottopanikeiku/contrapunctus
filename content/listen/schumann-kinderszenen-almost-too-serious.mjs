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
  intro: '<i>Almost Too Serious</i> (<i>Fast zu ernst</i>) is No. 10 of <i>Kinderszenen</i>, Op. 15. It is in G♯ minor, and the piano’s melody runs across the barlines and stops repeatedly under fermatas.',

  sections: [
    { t: 0, label: 'A · Tied melody in G♯ minor', m: 'A' },
    { t: 56, label: 'A′ · Tied melody again', m: 'A′', mNote: 'The left hand resumes its rolling accompaniment' },
    { t: 104, label: 'Coda · Ritardando to a held chord', m: 'Coda' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Tied melody in 2/8', text: 'The piece is in G♯ minor and in 2/8, so each bar holds two quavers. The melody ties its notes across the bar lines while the left hand plays semiquavers underneath. Schumann writes ritardandos before the fermatas, and both return through the piece.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, pp. 14–15: 2/8, five sharps, tied melody, semiquaver accompaniment and recurring ritardandos with fermatas. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { t: 56, kind: 'form', title: 'Return of the opening theme', text: 'The opening pattern returns, with the melody tied across the barlines over a turning left-hand accompaniment. The phrases again stop on fermatas. Each new phrase begins quietly.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, pp. 14–15: recurrence of the opening tied melody and accompaniment, with fermatas at phrase endings.' },
    { t: 86, kind: 'world', title: 'Kempowski’s childhood memoir, 1995', text: 'Walter Kempowski printed this piece in musical notation at the front of his childhood memoir, published in Berlin in 1995. The book was titled <i>Weltschmerz. Kinderszenen fast zu ernst</i> (world-weariness, childhood scenes almost too serious).', basis: 'documented', precision: 'passage', evidence: 'Thomas Synofzik, 175 Jahre Kinderszenen (2013), item 36: Kempowski’s autobiographical collection, Berlin 1995, with Schumann’s score as its opening. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
  ],

  transitions: [
    {
      id: 'opening-returns',
      title: 'Return of the tied opening melody',
      from: 'A · Tied melody in G♯ minor',
      to: 'A′ · Tied melody again',
      at: { t: 56 },
      span: [48, 64],
      how: '<p>The opening pattern of the G♯-minor song returns. The right hand holds notes across the short barlines, and the left hand plays the same rolling semiquavers as before. The dynamic stays quiet, and the pauses at the ends of phrases are kept.</p>',
      devices: ['motivic link'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, pp. 14–15, returning opening phrases. The section boundary locates the broad return.',
    },
    {
      id: 'into-the-close',
      title: 'Ritardando to the final G♯-minor chord',
      from: 'A′ · Tied melody again',
      to: 'Coda · Ritardando to a held chord',
      at: { t: 104 },
      span: [96, 112],
      how: '<p>In the final phrase the tied melody is drawn out above the rolling bass. A ritardando runs through the last bars, and both hands move towards a held G♯-minor chord. Fermatas in both staves stop the melody and the low bass together.</p>',
      devices: ['tempo change', 'fermata'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 15, final system: ritardando, closing G♯-minor chord and fermatas in both staves.',
    },
  ],
};
