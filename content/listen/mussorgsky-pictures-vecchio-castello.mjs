// Source files and recording credit: see content/dossiers/mussorgsky-pictures-vecchio-castello.json.
// Orchestration treated as Ravel's 1922 scoring (inferred). Instrument claims follow the Philharmonia guide (Joanna Wyld) and Michael Steinberg's
// Boston Symphony note; the LA Phil note's "English horn" for the troubadour is not used (Steinberg and Philharmonia name the alto saxophone).
// Score for the piano original: Lamm's text, Mutopia Project (il-vecchio-castello.ly).
export default {
  id: 'mussorgsky-pictures-vecchio-castello',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'II. Il vecchio castello — Andante',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 4, of: 15 },
  year: '1874',
  key: 'G♯ minor',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - ii. il vecchio castello - andante.ogg' },
  intro: 'The second movement, “Il vecchio castello” (Andante), depicts a troubadour singing outside a medieval castle. In Ravel’s orchestration an alto saxophone plays the song over a repeated G♯.',

  sections: [
    { t: 0, label: 'A · Song over the G♯ drone', m: 'A', mNote: 'Bassoon and alto saxophone play the castle’s song.' },
    { t: 100, label: 'B · D major above a G♯ drone', m: 'B', mNote: 'The chords change over a held G♯ in the bass.' },
    { t: 194, label: 'C · Chromatic turns above G♯ pedal', m: 'C', mNote: 'The melody climbs by semitones over the repeated bass.' },
    { t: 260, label: 'Coda · Last statement of the song over G♯', m: 'Coda', mNote: 'The opening melody returns, then breaks into short phrases.' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Pedal G♯ in 6/8', text: 'The bass repeats G♯ throughout, in a rocking 6/8. Above it the bassoon opens the movement, and the alto saxophone plays the long melody, whose phrases range high above the held bass note.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Il vecchio castello, establishes the repeated G♯ and 6/8. Bassoon and saxophone roles are described in the movement commentary at https://en.wikipedia.org/wiki/Pictures_at_an_Exhibition ; Ravel’s scoring is inferred for this recording. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/il-vecchio-castello.ly' },
    { t: 46, kind: 'world', title: 'Troubadour before a medieval castle', text: 'Hartmann travelled in Italy and painted its buildings. Mussorgsky placed a singer, a troubadour, in front of a medieval castle, and the long melody is his song. The particular picture has not been identified.', basis: 'documented', precision: 'passage', evidence: 'Michael Steinberg’s Boston Symphony note quotes Stasov’s description of the troubadour and connects the movement with Hartmann’s Italian architectural watercolours. The particular picture is unidentified. https://www.bso.org/works/pictures-at-an-exhibition' },
    { t: 100, kind: 'music', title: 'D major over the G♯ pedal', text: 'The tune expands into octaves and chords. At bars 31 and 40 a chord of D major sounds above the G♯ bass, so that its D lies a tritone from the note below. The G♯ pedal stays unchanged under every change of harmony.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Il vecchio castello, bars 29–46; D-major chords appear at bars 31 and 40 over the unchanged G♯ pedal. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/il-vecchio-castello.ly' },
    { t: 182, kind: 'world', title: 'Ravel’s orchestration, 1922', text: 'In the summer of 1922 Ravel orchestrated <i>Pictures</i> for Serge Koussevitzky. He gave the medieval singer’s melody to the alto saxophone. Koussevitzky conducted the first performance of the new score in Paris that October.', basis: 'documented', precision: 'passage', evidence: 'Michael Steinberg’s Boston Symphony note gives the 1922 commission, summer orchestration, October Paris première and alto saxophone solo. https://www.bso.org/works/pictures-at-an-exhibition' },
    { t: 260, kind: 'form', title: 'Return of the opening melody', text: 'The opening melody returns near the end and is broken into short phrases separated by rests. G♯ continues underneath. A final upward phrase reaches the upper G♯ in bar 106, and the bass ends on G♯ in bar 107.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Il vecchio castello, bars 95–107: returning melody, rests, final upper G♯ at bar 106 and bass G♯ at bar 107. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/il-vecchio-castello.ly' },
  ],

  transitions: [
    {
      id: 'into-louder-restatements',
      title: 'New chords over the same bass',
      from: 'A · Song over the G♯ drone',
      to: 'B · D major above a G♯ drone',
      at: { t: 100 },
      span: [92, 112],
      how: '<p>The repeated G♯ continues as a pedal through bars 29–46, beneath a melody now played in octaves. A-major and D-major chords pass above it, and their notes are dissonant against the bass. The lowest part keeps the same rocking rhythm on G♯ while the harmony above it changes.</p>',
      devices: ['tonic pedal', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Il vecchio castello, bars 29–46: upper octaves and A- and D-major chords above the G♯ pedal. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/il-vecchio-castello.ly',
    },
    {
      id: 'into-ebbing-close',
      title: 'The first song returns over G♯',
      from: 'C · Chromatic turns above G♯ pedal',
      to: 'Coda · Last statement of the song over G♯',
      at: { t: 260 },
      span: [248, 276],
      how: '<p>The opening song returns in G♯ minor, marked <i>espressivo</i>, over the same G♯ bass. Its long line breaks up into separate chords divided by rests. The last upward leap of the melody reaches G♯, and the bass goes on for a short time below it.</p>',
      devices: ['tonic pedal', 'motivic link', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Il vecchio castello, bars 95–107. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/il-vecchio-castello.ly',
    },
  ],
};
