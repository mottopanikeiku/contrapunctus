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
  intro: 'A troubadour sings outside a medieval castle. In Ravel’s orchestration an alto saxophone carries the song, while a repeated G♯ holds its place beneath the wandering melody.',

  sections: [
    { t: 0, label: 'A · A song above the G♯ drone', m: 'A', mNote: 'Bassoon and alto saxophone carry the castle’s song' },
    { t: 100, label: 'B · D major above a G♯ drone', m: 'B', mNote: 'The chords change while the bass keeps its one note' },
    { t: 194, label: 'C · Chromatic turns above G♯', m: 'C', mNote: 'The melody climbs by semitones over the repeated bass' },
    { t: 260, label: 'Coda · The last song over G♯', m: 'Coda', mNote: 'The opening melody returns, then breaks into short phrases' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'The castle’s one bass note', text: 'The bass keeps returning to G♯, rocking in 6/8. Above it, the bassoon begins the scene and the alto saxophone carries the long song. Its phrases wander far above a note that stays in one place.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Il vecchio castello, establishes the repeated G♯ and 6/8. Bassoon and saxophone roles are described in the movement commentary at https://en.wikipedia.org/wiki/Pictures_at_an_Exhibition ; Ravel’s scoring is inferred for this recording. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/il-vecchio-castello.ly' },
    { t: 46, kind: 'world', title: 'A singer outside the castle', text: 'Hartmann travels in Italy and paints its buildings. Mussorgsky puts a singer in front of one: a troubadour, standing outside a medieval castle. The long melody becomes his song.', basis: 'documented', precision: 'passage', evidence: 'Michael Steinberg’s Boston Symphony note quotes Stasov’s description of the troubadour and connects the movement with Hartmann’s Italian architectural watercolours. The particular picture is unidentified. https://www.bso.org/works/pictures-at-an-exhibition' },
    { t: 100, kind: 'music', title: 'D major against G♯', text: 'The tune expands into octaves and chords. Even a D-major chord sounds above the persistent G♯ bass: its D presses a tritone against the note below. The castle’s drone survives every change of harmony.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Il vecchio castello, bars 29–46; D-major chords appear at bars 31 and 40 over the unchanged G♯ pedal. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/il-vecchio-castello.ly' },
    { t: 182, kind: 'world', title: 'Ravel chooses a saxophone', text: 'In the summer of 1922, Ravel orchestrates <i>Pictures</i> for Serge Koussevitzky. For this medieval singer he chooses the alto saxophone. Koussevitzky introduces the new score in Paris that October.', basis: 'documented', precision: 'passage', evidence: 'Michael Steinberg’s Boston Symphony note gives the 1922 commission, summer orchestration, October Paris première and alto saxophone solo. https://www.bso.org/works/pictures-at-an-exhibition' },
    { t: 260, kind: 'form', title: 'The song breaks into fragments', text: 'The opening melody returns near the end, then breaks into short phrases separated by rests. G♯ continues underneath. A final upward call reaches the home note, and the bass has the last word.', basis: 'score-proportion', precision: 'passage', evidence: 'Lamm’s piano text, Il vecchio castello, bars 95–107: returning melody, rests, final upper G♯ at bar 106 and bass G♯ at bar 107. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/il-vecchio-castello.ly' },
  ],

  transitions: [
    {
      id: 'into-louder-restatements',
      title: 'New chords over the same bass',
      from: 'A · A song above the G♯ drone',
      to: 'B · D major above a G♯ drone',
      at: { t: 100 },
      span: [92, 112],
      how: '<p>The repeated G♯ continues beneath a melody enlarged into octaves. A-major and D-major chords pass over it, their notes rubbing against the bass. The harmony moves, but the lowest part keeps the same rocking rhythm on G♯.</p>',
      devices: ['tonic pedal', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Il vecchio castello, bars 29–46: upper octaves and A- and D-major chords above the G♯ pedal. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/il-vecchio-castello.ly',
    },
    {
      id: 'into-ebbing-close',
      title: 'The first song returns over G♯',
      from: 'C · Chromatic turns above G♯',
      to: 'Coda · The last song over G♯',
      at: { t: 260 },
      span: [248, 276],
      how: '<p>The opening song returns in G♯ minor, marked <i>espressivo</i>, over the same G♯ bass. Its long line breaks into isolated chords and rests. The final upward leap reaches G♯, while the bass continues a little longer beneath it.</p>',
      devices: ['tonic pedal', 'motivic link', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Lamm’s piano text, Il vecchio castello, bars 95–107. https://www.mutopiaproject.org/ftp/MussorgskyM/pictures-at-an-exhibition/pictures-at-an-exhibition-lys/il-vecchio-castello.ly',
    },
  ],
};
