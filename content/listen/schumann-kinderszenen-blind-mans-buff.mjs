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
  intro: 'A game of chase in B minor, with sharp cries and scampering semiquavers. The piano scarcely has time to catch its breath.',

  sections: [
    { t: 0, label: 'A · Cries and scampering semiquavers', m: 'A' },
    { t: 8.5, label: 'B · The chase turns towards G', m: 'B', mNote: 'A slurred passage interrupts the running notes' },
  ],

  cues: [
    { bar: { n: '1', occ: 1 }, kind: 'music', title: 'A cry, then running feet', text: 'Each little outburst begins <i>sforzando-piano</i>: a sharp accent followed at once by softness. Semiquavers race up and down, with staccato dots keeping them springy. The left hand adds short chords and its own downward scurries.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 6, bars 1–8. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { bar: { n: '9', occ: 1 }, kind: 'form', title: 'A change of hiding place', text: 'The second part carries the same running figure into G-major harmony. A smoother passage briefly holds the upper notes while the left hand climbs by semitones. Then the B-minor chase starts again.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 6, bars 9–20; G–B–D at bar 9, slurred writing in bars 13–16 and chromatic ascent into bar 17.' },
    { t: 24, kind: 'world', title: 'Marie saves the chase', text: 'In Dresden’s Cosel-Palais on 18 January 1853, Marie Wieck plays six of the <i>Kinderszenen</i>. She saves this one for the end. Clara’s younger half-sister turns Schumann’s third piece into a finale.', basis: 'documented', precision: 'passage', evidence: 'Thomas Synofzik, 175 Jahre Kinderszenen (2013), item 15, reproducing Marie Wieck’s concert programme. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
  ],

  transitions: [
    {
      id: 'into-second-part',
      title: 'The same cry in G major',
      from: 'A · Cries and scampering semiquavers',
      to: 'B · The chase turns towards G',
      at: { bar: { n: '9', occ: 1 } },
      span: [6, 20],
      how: '<p>The B-minor phrase lands on B. The next outburst keeps B in the bass but puts G above it, turning to G-major harmony. The <i>sforzando-piano</i> attack and staccato semiquavers carry straight across the double bar.</p>',
      devices: ['motivic link'],
      basis: 'score-aligned',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 6, bars 8–9; bass and chord pitches confirmed in Ying-Chun Liu’s Mutopia transcription, based on Leichte Stücke (1900).',
    },
  ],
};
