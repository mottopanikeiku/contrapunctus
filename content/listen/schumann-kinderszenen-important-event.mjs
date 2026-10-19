// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), p. 10.
// Rellstab’s review (Iris im Gebiete der Tonkunst, 1839) and Schumann’s reply: Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013), items 11–12;
// letter to Heinrich Dorn, 1839, quoted in GMTH Proceedings 2006 (storage.gmth.de/proceedings/articles/117/pdf/gmth-proceedings-artikel-117.pdf).
export default {
  id: 'schumann-kinderszenen-important-event',
  composer: 'schumann',
  order: 60,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 6 · Wichtige Begebenheit — An Important Event',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 6, of: 13 },
  year: '1838',
  key: 'A major',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - vi. an important event.ogg' },
  intro: 'Wichtige Begebenheit (An Important Event) is No. 6 of Schumann’s Kinderszenen, Op. 15. The piano plays accented A-major chords and octaves in a marching rhythm.',

  sections: [
    { t: 0, label: 'A · Accented chords and octaves', m: 'A' },
    { t: 14, label: 'B · Fortissimo in D major', m: 'B', mNote: 'Long right-hand chords above descending bass octaves' },
    { t: 40, label: 'A′ · Opening A-major theme again', m: 'A′', mNote: 'Forte again, with the opening dotted rhythm' },
  ],

  cues: [
    { bar: { n: '0', occ: 1 }, kind: 'music', title: 'Opening, bars 1–8', text: 'The piece is in three beats to the bar, marked forte, with accents over thick chords and octaves in the left hand. In bar 6 the right hand moves into the bass clef as well.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 10, bars 1–8: forte, accents, octave bass and right-hand bass clef in bar 6. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { bar: { n: '9', occ: 1 }, kind: 'form', title: 'Bars 9–16 in D major', text: 'The music is now <i>fortissimo</i> and in D major. The right hand holds its chords longer while the bass descends in octaves beneath them. The whole eight-bar section is enclosed in repeat signs.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 10, bars 9–16: D-major chords, descending bass octaves and repeat signs; pitches checked against the Mutopia transcription.' },
    { t: 30, kind: 'world', title: 'Rellstab’s review, 1839', text: 'Reviewing <i>Kinderszenen</i> in 1839, Ludwig Rellstab took the title to mean music for children to play. A child would need “three hands”, he complained. He added that even then some of it would be difficult.', basis: 'documented', precision: 'passage', evidence: 'Rellstab, Iris im Gebiete der Tonkunst, vol. 10 (1839), quoted in Thomas Synofzik, 175 Jahre Kinderszenen (2013), item 11. Translation from the German. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
  ],

  transitions: [
    {
      id: 'into-ff-section',
      title: 'A-major close, then D major',
      from: 'A · Accented chords and octaves',
      to: 'B · Fortissimo in D major',
      at: { t: 14 },
      span: [8, 22],
      how: '<p>The opening closes in A major. An A-major pickup becomes the dominant of D, and the next bar brings D-major chords marked <i>fortissimo</i>. The right hand holds a chord while the bass octaves descend D–A–G–F♯.</p>',
      devices: ['pivot chord', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 10, bars 8–9; chord and bass pitches confirmed in Ying-Chun Liu’s Mutopia transcription, based on Leichte Stücke (1900).',
    },
    {
      id: 'return-of-the-announcement',
      title: 'From D major back to A major',
      from: 'B · Fortissimo in D major',
      to: 'A′ · Opening A-major theme again',
      at: { t: 40 },
      span: [32, 48],
      how: '<p>The repeated section ends on D major and a rest. The opening A-major chord then returns high in the right hand, above rising A–C♯ octaves in the bass. The dynamic drops back to <i>forte</i>, and the dotted rhythm resumes.</p>',
      devices: ['retransition', 'motivic link'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 10, bars 16–17 and the upbeat between them.',
    },
  ],
};
