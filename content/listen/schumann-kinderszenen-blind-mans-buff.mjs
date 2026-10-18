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
    { t: 12, label: 'B · second part, ending in sforzandi', m: 'B' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A sforzando, then a scurry', text: 'Two beats to the bar in B minor. Each strong bar opens with a note marked sfp — loud, then at once soft — and the right hand scampers away in staccato semiquavers with accents, over detached left-hand chords. By the report’s onset count this is the densest of the thirteen pieces.', basis: 'score-proportion', precision: 'passage', evidence: 'First edition p. 6 (IMSLP #03060): 2/4, sfp at the head of alternate bars, accents on the semiquaver groups, detached left-hand chords. The report counts 5.0 onsets per second at 0:00–0:05, the highest density of the thirteen pieces, and reads B minor (r = 0.79).' },
    { t: 12, kind: 'form', title: 'The second part begins', text: 'After eight bars and a double bar, the second part opens with the same sfp gesture and chases off in new directions. Near 0:12 the recording shows the one strong change of the whole piece.', basis: 'audio-feature', precision: 'passage', evidence: 'Report: novelty 1.00 at 0:12, the only structural boundary listed. The form analysis finds 0:05–0:18 resembling 0:18–0:31 (mean 0.97), the repeated shape of the chase. Score p. 6: double bar after bar 8, then sfp.' },
    { t: 24, kind: 'world', title: 'The piece that closed a programme', text: 'On 18 January 1853 Clara’s half-sister Marie Wieck played six of the pieces in Dresden. She took Hasche-Mann out of its printed place and used it as an effective finale. Schumann had given her the autograph of No. 1 in 1847.', basis: 'documented', precision: 'passage', evidence: 'Zwickau catalogue 175 Jahre Kinderszenen, item 15 (programme, Cosel-Palais, Dresden, 18 January 1853, six pieces, Hasche-Mann used as the closing piece) and item 5 (the 1847 dedication to Marie Wieck).' },
  ],

  transitions: [
    {
      id: 'into-second-part',
      title: 'The same sforzando opens the second part',
      from: 'A · the first eight bars',
      to: 'B · second part',
      at: { t: 12 },
      span: [6, 20],
      how: '<p>The first eight bars end on a double bar and the second part starts again with the sfp opening, so the ear hears a new departure from familiar material. The pace and the staccato touch continue unbroken; only the melodic direction of the semiquavers changes.</p>',
      devices: ['motivic link'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Report: novelty 1.00 at 0:12, the strongest boundary in the recording. Score p. 6: double bar after the first eight bars and sfp at the first bar of the second part.',
    },
  ],
};
