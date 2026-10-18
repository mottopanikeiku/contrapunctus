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
  intro: 'A warm F-major tune over detached chords, a louder middle part, and a close that slows onto one long chord. The title in the first edition is “Am Camin”.',
  question: 'Where does a quiet piece find its climax?',

  sections: [
    { t: 0, label: 'A · the quiet tune', m: 'A' },
    { t: 20, label: 'B · mf, with swells and a ritardando', m: 'B' },
    { t: 54, label: 'Close · accents, then the last chord', m: 'Coda' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A soft tune over detached chords', text: 'Two beats to the bar in F major, marked p, with the pedal down from the first bar. The tune sits on top of short left-hand chords and bass notes, so the texture is light and rhythmic. The recording begins softly.', basis: 'score-proportion', precision: 'passage', evidence: 'First edition p. 12 (IMSLP #03060): 2/4, one flat, p, Ped., tune over detached chords. Report: local F major at 0:00 (r = 0.85) and 0:05, −21.4 dB at 0:00 rising to −13.7 dB at 0:05.' },
    { t: 20, kind: 'form', title: 'The louder second part', text: 'After eight bars the second part begins, marked mf, over long held bass notes. In the recording the strongest boundary comes at about 0:20, and the relative level climbs from −13 dB at 0:15 to −8 dB at 0:20 and 0:25, the loudest stretch of the first half.', basis: 'audio-feature', precision: 'passage', evidence: 'Report: novelty 1.00 at 0:20 (the largest in the recording), −13.3 dB at 0:15, −8.5 dB at 0:20 and −7.7 dB at 0:25. Score p. 12: double bar after the first eight bars, then mf and long half-note bass notes in the second system.' },
    { t: 38, kind: 'life', title: 'A stove from his boyhood', text: 'The diary for 25 February 1838 mentions another Kinderscene in F major. The Zwickau museum links it to this piece and suggests the tiled stove of Schumann’s boyhood home as the memory behind it. A museum photograph shows that stove in the Zwickau memorial room.', basis: 'documented', precision: 'passage', evidence: 'Zwickau catalogue 175 Jahre Kinderszenen, item 1 (diary: “Sonntag, d. 25 … Abends wieder ‚Kinderscene‘ in F Dur”) and item 2 (photograph by Franz Landgraf; the stove “dürften … inspiriert haben”, so the link is the museum’s inference).' },
    { t: 56, kind: 'listen', title: 'Accents, then one long chord', text: 'In the closing bars the score adds accents and a swelling line, then a ritardando onto a held chord with a fermata. The report’s loud windows at 0:55 and 1:00 are followed by a fall of about twelve decibels by 1:05.', basis: 'audio-feature', precision: 'passage', evidence: 'Report: novelty 0.59 at 0:54; loud windows 0:55 (−12.1 dB) and 1:00 (−9.2 dB), then −21.7 dB at 1:05 and −33.7 dB at 1:10. Score p. 12, last system: accent marks, a hairpin, ritardando and a fermata over the final chord.' },
  ],

  transitions: [
    {
      id: 'into-second-part',
      title: 'Long bass notes under an mf tune',
      from: 'A · the quiet tune',
      to: 'B · mf',
      at: { t: 20 },
      span: [12, 28],
      how: '<p>The opening eight bars end at a double bar. The second part is marked <i>mf</i> and the left hand holds long bass notes where the first part had short chords, so the same pulse carries a broader, firmer sound. The two-beat pulse continues while the bass moves much more slowly than before.</p>',
      devices: ['texture change'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Report: novelty 1.00 at 0:20; level −13.3 dB at 0:15, −8.5 dB at 0:20 and −7.7 dB at 0:25; local key estimate C major for most of this span (the dominant region; a machine reading, not a chord identification). Score p. 12: double bar after bar 8, mf, long bass notes in the second system.',
    },
    {
      id: 'into-closing-bars',
      title: 'The second ending leads on to the close',
      from: 'B · mf',
      to: 'Close · accents, then the last chord',
      at: { t: 54 },
      span: [46, 62],
      how: '<p>A repeat sign with first and second endings closes the second part, and the second ending leads on into the closing bars. These add accent marks and a swelling line, and then slow with a ritardando onto a single held chord with a fermata, so the piece ends on a sustained sound rather than a cadence in tempo.</p>',
      devices: ['tempo change', 'fermata'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Report: novelty 0.59 at 0:54; level −12.1 dB at 0:55 and −9.2 dB at 1:00, then falling to −33.7 dB at 1:10. Score p. 12: first and second endings in the fourth system; accents, ritardando and fermata in the fifth.',
    },
  ],
};
