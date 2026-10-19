// Work history: David Rosen, critical-edition introduction, pp. xi–xvi:
// https://press.uchicago.edu/sites/verdi/Requiem_Intro_English_9780226425412txt.pdf
// Premiere: https://archiviostorico.operaroma.it/concerto/messa-da-requiem/
// Medieval sequence: Boston Philharmonic event description, 23 November 2025:
// https://www.bso.org/events/bpo-verdi-2025 (paragraph beginning “Day of wrath”).
export default {
  id: 'verdi-requiem-dies-irae', composer: 'verdi', order: 10,
  work: 'Messa da Requiem', movement: 'Dies irae — opening number of the sequence',
  year: '1874', key: 'G minor', forces: 'Mixed chorus and orchestra',
  performers: 'Orchestra and Choir of Teatro Reale dell’Opera di Roma (current Commons attribution; disputed)', recorded: '1900–1950',
  source: { file: 'File:ICBSA Verdi - Messa da requiem parte 03, Dies irae.ogg' },
  intro: 'Four orchestral blows tear open Verdi’s vision of judgement. In this opening number of the <i>Dies irae</i>, the chorus passes from a full-throated cry to a frightened murmur.',
  sections: [
    { t: 0, label: 'A · Four blows and a cry', m: 'A', mNote: 'Rushing strings carry the chorus’s cry of judgement' },
    { t: 66, label: 'A′ · The chorus begins to murmur', m: 'A′', mNote: 'Single choral parts repeat Dies irae above quiet strings' },
    { t: 96, label: 'B · Trembling voices', m: 'B', mNote: 'Repeated syllables, plucked bass notes and little upward string runs' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Four blows in G minor', text: 'Four separated G minor chords precede the rushing strings and the chorus’s cry: “Dies irae” — “Day of wrath.” Verdi writes Allegro agitato. The bass drum’s blows cut across the beat; the orchestral runs leave the singers scarcely room to breathe.', basis: 'score-proportion', precision: 'passage', evidence: 'Verdi, Requiem, Eulenburg full score, plate E.E.4864, pp. 21–24, opening of No. 2. Latin words from the medieval Requiem sequence; translation ours. Score: https://ks15.imslp.org/files/imglnks/usimg/7/71/IMSLP407348-PMLP01812-Verdi_Requiem_whole.pdf.' },
    { t: 42, kind: 'life', title: 'A memorial in Milan', text: 'At the church of San Marco in Milan, on 22 May 1874, Verdi conducts his <i>Requiem</i> for the writer Alessandro Manzoni. It is the first anniversary of Manzoni’s death. Three days later, the same singers take the work to La Scala.', basis: 'documented', precision: 'passage', evidence: 'Teatro dell’Opera di Roma historical archive, premiere details: https://archiviostorico.operaroma.it/concerto/messa-da-requiem/. The subsequent La Scala performance is documented in the performance history at https://en.wikipedia.org/wiki/Requiem_(Verdi).' },
    { t: 96, kind: 'music', title: 'The choir fears its words', text: '“Quantus tremor est futurus” — “How great the trembling will be.” The chorus repeats its notes softly, marked sotto voce. Violins and cellos send little runs back and forth above plucked bass notes. The people announcing the judgement now sound terrified of it.', basis: 'score-proportion', precision: 'passage', evidence: 'Eulenburg full score, pp. 39–42, Quantus tremor: choral pp and sotto voce, viola and bass pizzicato, alternating violin and cello figures. Latin sequence, translation ours.' },
  ],
  transitions: [
    { id: 'wrath-withdrawal', title: 'The cry breaks into murmurs', from: 'A · Four blows and a cry', to: 'A′ · The chorus begins to murmur', at: { t: 66 }, how: '<p>The bass holds G as the orchestral chords diminish. The brass fall silent; clarinet and bassoon keep their winding little scales. Separate choral parts repeat “Dies irae”, marked pp cupo — darkly — above the strings. The same words pass from the whole crowd to small, exposed groups.</p>', devices: ['decrescendo', 'tonic pedal', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: 'Eulenburg full score, pp. 36–38: sustained G bass, diminuendo, and separate choral entries marked Soli and pp cupo.' },
    { id: 'withdrawal-trembling', title: 'A stammer over plucked strings', from: 'A′ · The chorus begins to murmur', to: 'B · Trembling voices', at: { t: 96 }, how: '<p>Violas and basses pluck their notes while the violins and cellos alternate short upward runs. Low brass sustain beneath the clipped woodwind chords. The chorus enters pp sotto voce on “Quantus tremor”: repeated syllables over an accompaniment that never quite keeps still.</p>', devices: ['texture change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: 'Eulenburg full score, pp. 39–42, orchestral preparation and Quantus tremor entry.' },
  ],
  orchestra: {
    ensemble: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bassoons', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses', 'chorus'],
    basis: 'score-proportion',
    source: { title: 'Verdi, Requiem — Eulenburg full score, plate E.E.4864', url: 'https://ks15.imslp.org/files/imglnks/usimg/7/71/IMSLP407348-PMLP01812-Verdi_Requiem_whole.pdf', locator: 'PDF pages 21–42, opening Dies irae number. “Tuba” represents the score’s ophicleide/bass-brass staff, not a verified instrument used in this transfer. No solo singers occur in this number; the offstage trumpets belong to the following Tuba mirum.' },
    timeline: [
      { t: 0, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bassoons', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], note: 'Four orchestral blows and rushing figures; the chorus enters after the opening attacks.' },
      { t: 8, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bassoons', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses', 'chorus'], lead: ['chorus'], note: 'Choral entry region; lower and upper voices enter in succession, not as one instantaneous block.' },
      { t: 30, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bassoons', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses', 'chorus'], lead: ['chorus'], note: 'Expanded opening declamation, including bass-drum punctuation in the written score.' },
      { t: 66, playing: ['flutes', 'clarinets', 'bassoons', 'trombones', 'timpani', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses', 'chorus'], lead: ['chorus'], note: 'Diminishing region with progressively reduced scoring; not every group sounds continuously.' },
      { t: 96, playing: ['piccolo', 'flutes', 'oboes', 'clarinets', 'bassoons', 'horns', 'trombones', 'timpani', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses', 'chorus'], lead: ['chorus'], note: 'Quiet Quantus tremor region: repeated choral notes, active strings and restrained wind support.' },
    ],
  },
};
