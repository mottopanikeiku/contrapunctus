// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), p. 6.
// Marie Wieck’s Dresden programme of 18 January 1853: Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013), items 5 and 15.
// https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
export default {
  id: 'schumann-kinderszenen-blind-mans-buff',
  composer: 'schumann',
  order: 30,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 3 · Hasche-Mann — Blind Man’s Buff',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 3, of: 13, unit: 'pieces' },
  year: '1838',
  key: 'B minor',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - iii. blind man\'s buff.ogg' },
  intro: '“Hasche-Mann” (Blind Man’s Buff), No. 3 of <i>Kinderszenen</i>, Op. 15, is a game of chase in B minor. Sharp cries cut across its running semiquavers.',

  sections: [
    { t: 0, label: 'A · Cries and running semiquavers', m: 'A' },
    { t: 8.5, label: 'B · Passage towards G', m: 'B', mNote: 'A slurred passage interrupts the running notes.' },
  ],

  cues: [
    { bar: { n: '1', occ: 1 }, kind: 'music', title: 'Opening, bars 1–8', text: 'Each short phrase begins <i>sforzando-piano</i>, a sharp accent followed at once by a soft dynamic. The semiquavers run up and down under staccato dots. The left hand plays short chords and descending semiquaver runs of its own.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 6, bars 1–8. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { bar: { n: '9', occ: 1 }, kind: 'form', title: 'Second part, bars 9–20', text: 'The second part carries the same running figure onto G–B–D harmony at bar 9. In the slurred bars 13–16 the upper notes are held while the left hand climbs by semitones into bar 17. The opening chase then starts again.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 6, bars 9–20; G–B–D at bar 9, slurred writing in bars 13–16 and chromatic ascent into bar 17.' },
    { t: 24, kind: 'world', title: 'Marie Wieck’s concert, 1853', text: 'On 18 January 1853 Marie Wieck, Clara’s younger half-sister, played six of the <i>Kinderszenen</i>. She placed Schumann’s third piece last on the programme.', basis: 'documented', precision: 'passage', evidence: 'Thomas Synofzik, 175 Jahre Kinderszenen (2013), item 15, reproducing Marie Wieck’s concert programme. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
  ],

  transitions: [
    {
      id: 'into-second-part',
      title: 'The same phrase in G major',
      from: 'A · Cries and running semiquavers',
      to: 'B · Passage towards G',
      at: { bar: { n: '9', occ: 1 } },
      span: [6, 20],
      how: '<p>The B minor phrase ends on B. The next outburst keeps B in the bass and places G above it, moving to G major harmony. The <i>sforzando-piano</i> attack and the staccato semiquavers continue across the double bar without a break.</p>',
      devices: ['motivic link'],
      basis: 'score-aligned',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 6, bars 8–9; bass and chord pitches confirmed in Ying-Chun Liu’s Mutopia transcription, based on Leichte Stücke (1900).',
    },
  ],
};
