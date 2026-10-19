// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), p. 12 (title spelled “Am Camin”).
// Diary of 25 February 1838 and the Zwickau tiled stove: Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013), items 1–2.
// https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
export default {
  id: 'schumann-kinderszenen-at-the-fireside',
  composer: 'schumann',
  order: 80,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 8 · Am Kamin — At the Fireside',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 8, of: 13 },
  year: '1838',
  key: 'F major',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - viii. at the fireside.ogg' },
  intro: 'The F major of <i>Träumerei</i> continues here, now with a quicker tune and little detached chords. A fire with some life in it.',

  sections: [
    { t: 0, label: 'A · F major, with flickering chords', m: 'A' },
    { t: 20, label: 'B · A fuller tune over held basses', m: 'B' },
    { t: 54, label: 'Coda · Accents, then the low F', m: 'Coda' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A fire with a pulse', text: 'The right hand sings in F major over short chords and bass notes. Rests keep opening little gaps beneath the tune. With two beats to the bar, the piano rocks gently without standing still.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 12, opening eight bars: F major, 2/4, piano, rests in the accompanying voices. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { t: 20, kind: 'form', title: 'Long notes beneath the flame', text: 'The second part begins <i>mezzo-forte</i>. Long bass notes now last a whole bar, while the melody and its short accompanying chords keep moving above them. The right hand leans on accents as the phrase grows.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 12, second strain: mezzo-forte, minim bass notes and accents above the melody.' },
    { t: 54, kind: 'music', title: 'The fire burns down', text: 'The closing bars briefly flare with accents in both hands. Then a long ritardando carries the music down the keyboard. The final F-major chord stretches from a low F to the quiet right hand and rests under a fermata.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 12, final system: accents, ritardando, F-major closing chord and fermatas.' },
  ],

  transitions: [
    {
      id: 'into-second-part',
      title: 'The bass holds while the tune moves',
      from: 'A · F major, with flickering chords',
      to: 'B · A fuller tune over held basses',
      at: { t: 20 },
      span: [12, 28],
      how: '<p>The opening F-major phrase closes. The new phrase begins <i>mezzo-forte</i>, and the left hand lays down long bass notes beneath the short chords. The melody still moves in quavers and semiquavers, now with accents sharpening its turns.</p>',
      devices: ['texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 12, double bar after the first eight bars and the following phrase.',
    },
    {
      id: 'into-closing-bars',
      title: 'The second ending opens a farewell',
      from: 'B · A fuller tune over held basses',
      to: 'Coda · Accents, then the low F',
      at: { t: 54 },
      span: [46, 62],
      how: '<p>The second ending leads past the repeat into new descending figures. Flats enter the inner parts, and accents briefly animate both hands before the ritardando. The bass finally drops to low F beneath the F-major closing chord.</p>',
      devices: ['link passage', 'tempo change', 'fermata'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 12, second ending and final system.',
    },
  ],
};
