// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), p. 20.
// Letter to Clara Wieck of March 1838 (“etwa zwölf ausgelesen”) and Kusche’s 1956 edition Der Dichter spricht: Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013), items 3 and 35.
// https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
export default {
  id: 'schumann-kinderszenen-poet-speaks',
  composer: 'schumann',
  order: 130,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 13 · Der Dichter spricht — The Poet Speaks',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 13, of: 13 },
  year: '1838',
  key: 'G major',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - xiii. the poet speaks.ogg' },
  intro: 'After the child falls asleep, the poet has the last word. A G-major hymn breaks into hesitant piano speech, then gathers itself for the quietest of farewells.',

  sections: [
    { t: 0, label: 'A · Hymn in G major', m: 'A' },
    { t: 42, label: 'B · Descending lines and fermatas', m: 'B' },
    { t: 58, label: 'C · piano passage without barlines', m: 'C', mNote: 'Little runs, grace notes and pauses in the treble' },
    { t: 84, label: 'A′ · The hymn returns', m: 'A′', mNote: 'The last chords descend and slow into G major' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Opening chords in G major', text: 'Both hands begin with piano chords in G major, in common time. The inner voices move by step. The phrase swells under a hairpin and closes before the music begins again.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 20, opening systems: common time, G major, piano and hairpins in chordal writing. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { t: 58, kind: 'music', title: 'Unbarred recitative', text: 'The piano leaves the hymn. Short runs and grace notes move through the treble, <i>pianissimo</i>, and pause under fermatas. Schumann writes the passage without barlines, as an unbarred recitative in triplet groups (first edition, Breitkopf &amp; Härtel, p. 20, third system).', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 20, third system: unbarred recitative, triplet groups, grace notes, pianissimo and fermatas.' },
    { t: 84, kind: 'form', title: 'Return of the opening chords', text: 'The opening chords return in G major. The ending is longer this time. The chords descend, the ritardando extends over the final bars and the bass reaches a low G, and the last chord is held under a fermata.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 20, final two systems: return of the opening, extended ritardando and final G-major chord.' },
  ],

  transitions: [
    {
      id: 'into-descending-lines',
      title: 'The hymn breaks into descending lines',
      from: 'A · Hymn in G major',
      to: 'B · Descending lines and fermatas',
      at: { t: 42 },
      span: [34, 50],
      how: '<p>The G-major hymn divides into separate descending lines. The bass moves beneath held upper notes. A ritardando and fermatas interrupt the regular four-beat bars, and each continuation follows a pause.</p>',
      devices: ['texture change', 'fermata', 'tempo change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 20, second system: piano descending figures, ritardando and fermatas.',
    },
    {
      id: 'into-the-poets-passage',
      title: 'Fermata before the unbarred recitative',
      from: 'B · Descending lines and fermatas',
      to: 'C · piano passage without barlines',
      at: { t: 58 },
      span: [50, 66],
      how: '<p>The descending bass reaches a fermata and stops. The right hand then plays small triplet figures marked <i>pianissimo</i>. From this point the passage has no barlines, and grace notes and chromatic turns take it up into the treble.</p>',
      devices: ['fermata', 'register change', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 20, beginning of the unbarred third system.',
    },
    {
      id: 'return-of-the-chords',
      title: 'Return to the G-major hymn',
      from: 'C · piano passage without barlines',
      to: 'A′ · The hymn returns',
      at: { t: 84 },
      span: [76, 92],
      how: '<p>The free piano line descends through chromatic notes and slows with a <i>ritardando</i>. At the double bar the G-major hymn returns, marked <i>piano</i>. Both hands go back to measured chords, and the four-beat bars begin again.</p>',
      devices: ['tempo change', 'retransition', 'motivic link', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 20, end of the unbarred passage and start of the fourth system.',
    },
  ],
};
