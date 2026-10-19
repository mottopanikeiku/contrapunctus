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
  intro: '“Am Kamin” (At the Fireside), No. 8 of <i>Kinderszenen</i>, Op. 15, stays in the F major of <i>Träumerei</i>, with a quicker tune and short detached chords.',

  sections: [
    { t: 0, label: 'A · F major, chordal theme', m: 'A' },
    { t: 20, label: 'B · Fuller melody over held bass notes', m: 'B' },
    { t: 54, label: 'Coda · Accents, then the low F', m: 'Coda' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Opening bars in F major', text: 'The right hand carries the tune in F major over short chords and bass notes. Rests in the accompanying voices leave gaps beneath the melody. The metre is 2/4.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 12, opening eight bars: F major, 2/4, piano, rests in the accompanying voices. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { t: 20, kind: 'form', title: 'Second strain, long bass notes', text: 'The second part begins <i>mezzo-forte</i>. Bass notes now last a whole bar, while the melody and its short accompanying chords continue above them. The right hand plays accented notes as the phrase extends.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 12, second strain: mezzo-forte, minim bass notes and accents above the melody.' },
    { t: 54, kind: 'music', title: 'Closing bars and fermata', text: 'The closing bars have accents in both hands. A long ritardando follows as the music descends the keyboard. The final F-major chord spans from a low F to the quiet right hand and is held under a fermata.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 12, final system: accents, ritardando, F-major closing chord and fermatas.' },
  ],

  transitions: [
    {
      id: 'into-second-part',
      title: 'Long bass notes under the second phrase',
      from: 'A · F major, chordal theme',
      to: 'B · Fuller melody over held bass notes',
      at: { t: 20 },
      span: [12, 28],
      how: '<p>The opening F-major phrase closes at the double bar after the first eight bars. The next phrase begins <i>mezzo-forte</i>, and the left hand plays long bass notes beneath the short chords. The melody continues in quavers and semiquavers, now with accents on its turns.</p>',
      devices: ['texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 12, double bar after the first eight bars and the following phrase.',
    },
    {
      id: 'into-closing-bars',
      title: 'Second ending and close',
      from: 'B · Fuller melody over held bass notes',
      to: 'Coda · Accents, then the low F',
      at: { t: 54 },
      span: [46, 62],
      how: '<p>The second ending leads past the repeat into new descending figures. Flats enter the inner parts, and both hands play accents before the ritardando. The bass moves down to low F beneath the closing F-major chord.</p>',
      devices: ['link passage', 'tempo change', 'fermata'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 12, second ending and final system.',
    },
  ],
};
