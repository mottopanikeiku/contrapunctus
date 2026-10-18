// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), p. 6.
// Marie Wieck’s Dresden programme of 18 January 1853: Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013), items 5 and 15.
// https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
export default {
  id: 'schumann-kinderszenen-blind-mans-buff',
  composer: 'schumann',
  order: 30,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 3 · Hasche-Mann — Blind Man’s Buff',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 3, of: 13 },
  year: '1838',
  key: 'B minor',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - iii. blind man\'s buff.ogg' },
  intro: 'The shortest piece in this recording is a chase: sforzando, then piano, then a flurry of staccato semiquavers, over and over. The second part begins with the same gesture, so the structure is easy to hear.',
  question: 'How does a piece under forty seconds still have two parts?',

  sections: [
    { t: 0, label: 'A · the first eight bars', m: 'A' },
    { t: 8.5, label: 'B · second part: slurred contrast, then the gesture returns', m: 'B', mNote: 'aligned order repeats bars 9–19, then the second ending' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A sforzando, then a scurry', text: 'Two beats to the bar in B minor. Each strong bar opens with a note marked sfp — loud, then at once soft — and the right hand scampers away in staccato semiquavers with accents, over detached left-hand chords. By the report’s onset count this is the densest of the thirteen pieces.', basis: 'score-proportion', precision: 'passage', evidence: 'First edition p. 6 (IMSLP #03060): 2/4, sfp at the head of alternate bars, accents on the semiquaver groups, detached left-hand chords. The report counts 5.0 onsets per second at 0:00–0:05, the highest density of the thirteen pieces, and reads B minor (r = 0.79).' },
    { bar: { n: '9', occ: 1 }, kind: 'form', title: 'The second part begins', text: 'After eight bars and a double bar, the second part opens near 0:08 with the same sfp gesture and descending staccato lines. About four seconds later it turns to slurred, sustained notes and a rising chromatic run before the gesture returns. The provisional alignment follows the repeat, so the part is heard twice.', basis: 'score-aligned', precision: 'passage', evidence: 'Provisional alignment (docs/assets/data/schumann-kinderszenen-blind-mans-buff/score.json): bar 9 at 8.5 s, bar 13 at 12.7 s, bar 9 again at 21.5 s and the second ending, bar 21, at 33.4 s; performed order 1–20, 9–19, 21, 32 bars, no aural review. The report’s novelty 1.00 at 0:12 is a separate contrast inside the part (the slurred bars from bar 13), not the start of bar 9. Score p. 6 and the Mutopia transcription (SchumannOp15No03.ly): double bar after bar 8, sfp, slurred sustained notes, a chromatic run, repeat sign with two endings. The printed mark is crotchet = 138 (p. 6, enlarged scan).' },
    { t: 24, kind: 'world', title: 'The piece that closed a programme', text: 'On 18 January 1853 Clara’s half-sister Marie Wieck played six of the pieces in Dresden. She took Hasche-Mann out of its printed place and used it as an effective finale. Schumann had given her the autograph of No. 1 in 1847.', basis: 'documented', precision: 'passage', evidence: 'Zwickau catalogue 175 Jahre Kinderszenen, item 15 (programme, Cosel-Palais, Dresden, 18 January 1853, six pieces, Hasche-Mann used as the closing piece) and item 5 (the 1847 dedication to Marie Wieck).' },
  ],

  transitions: [
    {
      id: 'into-second-part',
      title: 'The same sforzando opens the second part',
      from: 'A · the first eight bars',
      to: 'B · second part',
      at: { bar: { n: '9', occ: 1 } },
      span: [6, 20],
      how: '<p>The first eight bars end on a double bar and the second part starts again with the sfp opening, so the ear hears a new departure from familiar material. The staccato semiquavers continue at first; slurred, sustained notes and a rising chromatic run then supply the contrast, before the sfp gesture comes back to close the part.</p>',
      devices: ['motivic link'],
      basis: 'score-aligned',
      precision: 'passage',
      evidence: 'Provisional alignment: bar 9 at 8.5 s and bar 13 at 12.7 s. Report: novelty 1.00 at 0:12, the strongest boundary in the recording, which marks the slurred contrast inside the part rather than the start of bar 9; the middle windows (0:15–0:25) are the loudest. Score p. 6: double bar after the first eight bars, sfp at the first bar of the second part, then slurred and sustained notes and a chromatic run.',
    },
  ],
};
