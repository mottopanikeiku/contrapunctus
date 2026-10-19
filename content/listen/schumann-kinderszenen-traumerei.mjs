// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), p. 11; melodic text also checked against the Mutopia Project LilyPond file SchumannOp15No07.ly.
// Diary entries, letter of 17 March 1838, programmes of 1853 and 1857, Medem silhouettes (1877), Träger/Zick edition (1886), UFA film: Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013), items 1, 3, 15–17, 33, 38.
// https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
// Form and timing studies: Shoda & Adachi, Frontiers in Psychology 5:1564 (2015), https://pmc.ncbi.nlm.nih.gov/articles/PMC4288287/ ; Repp, J. Acoust. Soc. Am. 92 (1992), as cited there and by Mazzola, Musical Performance (2011), ch. 26.
// Metronome marks: Michael Struck, discussed at https://blog.henle.de/en/2021/12/06/schumanns-metronome-markings-in-his-kinderszenen-opportunity-not-nuisance/
export default {
  id: 'schumann-kinderszenen-traumerei',
  composer: 'schumann',
  order: 70,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 7 · Träumerei — Dreaming',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 7, of: 13 },
  year: '1838',
  key: 'F major',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - vii. dreaming.ogg' },
  intro: 'At the centre of <i>Kinderszenen</i>, a quiet piano melody keeps reaching a little higher. <i>Träumerei</i> is only twenty-four written bars; each phrase seems reluctant to end.',

  sections: [
    { t: 0, label: 'A · A melody rising from C', m: 'A' },
    { t: 46, label: 'A · The eight bars again', m: 'A', mNote: 'The opening strain repeats' },
    { t: 92, label: 'B · E♭ darkens the rising tune', m: 'B' },
    { t: 137, label: 'A′ · F major, then a long farewell', m: 'A′', mNote: 'A high A pauses under a fermata before the close' },
  ],

  cues: [
    { bar: { n: '0', occ: 1 }, kind: 'music', title: 'C reaches up to F', text: 'A single C rises to F and waits. Then the melody climbs again, towards the F an octave above. Underneath, the other voices move slowly, each with a line of its own.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 11, bars 1–4; pitches confirmed in Ying-Chun Liu’s Mutopia transcription. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { t: 28, kind: 'life', title: 'Schumann’s little thing', text: 'Saturday, 24 February 1838. In his diary Schumann records composing “the little thing <i>Träumerei</i>”. The following evening he is back at another <i>Kinderszene</i> in F major, which strikes him as “very pretty”.', basis: 'documented', precision: 'passage', evidence: 'Schumann’s diary, 24–25 February 1838, quoted in Thomas Synofzik, 175 Jahre Kinderszenen (2013), item 1. Translations of “das kleine Ding” and “die mir sehr hübsch vorkommt”. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
    { t: 70, kind: 'life', title: 'Thirty little droll things', text: 'On 17 March 1838 Schumann tells Clara that he has written “some thirty small droll things” and chosen about twelve for his <i>Kinderszenen</i>. She will enjoy them, he promises, though she will have to forget herself as a virtuoso.', basis: 'documented', precision: 'passage', evidence: 'Schumann to Clara Wieck, Leipzig, 17 March 1838, Jugendbriefe (1885), p. 277, quoted in Thomas Synofzik, 175 Jahre Kinderszenen (2013), item 3: “an die 30 kleine putzige Dinger … von denen ich etwa zwölf ausgelesen”; our translation. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf Same letter, same sentences, in May Herbert’s English translation, Early Letters of Robert Schumann (1888), pp. 264–265: “about thirty quaint little things, from which I have selected twelve”. https://archive.org/details/earlylettersofro010823mbp' },
    { t: 110, kind: 'world', title: 'Left out of the early programmes', text: 'When Marie Wieck plays six of the pieces in Dresden on 18 January 1853, <i>Träumerei</i> is not among them. In Vienna on 17 March 1857, Clara’s pupil Nanette Falk plays three, all from Marie’s list, so it misses that programme too.', basis: 'documented', precision: 'passage', evidence: 'Synofzik, 175 Jahre Kinderszenen (2013), items 15 and 16: the Dresden programme of 18 January 1853 and the Vienna programme of 17 March 1857. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
    { bar: { n: '17', occ: 1 }, kind: 'form', title: 'The first F returns', text: 'The opening F returns after the middle passage’s excursions through G minor and D minor. Schumann restores the first phrase almost exactly. Later, a high A is held under a fermata, and the final descent stretches out with a ritardando.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 11, bars 9–24: G-minor and D-minor cadences, return at bar 17, fermata on A in bar 22 and final ritardando.',
    },
    { t: 170, kind: 'world', title: 'Pictures, poems and a film', text: 'In 1877 Friederike Medem publishes silhouettes with verses for four of the pieces, <i>Träumerei</i> among them. A Leipzig edition of 1886 pairs the music with poems by Albert Träger and pictures by Alexander Zick. In 1943–44 UFA makes a film called <i>Träumerei</i>.', basis: 'documented', precision: 'passage', evidence: 'Synofzik, 175 Jahre Kinderszenen (2013), items 17, 33–34 and 38: the Zick and Träger edition, the UFA film Träumerei and the Medem silhouettes. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
  ],

  transitions: [
    {
      id: 'into-repeat',
      title: 'The upbeat starts another dream',
      from: 'A · A melody rising from C',
      to: 'A · The eight bars again',
      at: { t: 46 },
      span: [38, 54],
      how: '<p>The eighth bar slows onto C-major harmony, the dominant of F. A low C in the melody becomes the pickup back to F, while the bass settles beneath it on F. The repeat begins with the same quiet upward reach.</p>',
      devices: ['tempo change', 'motivic link'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 11, bar 8 and the repeat to bar 1; final C-major harmony confirmed in the Mutopia transcription.',
    },
    {
      id: 'into-middle-section',
      title: 'The climb reaches E♭',
      from: 'A · The eight bars again',
      to: 'B · E♭ darkens the rising tune',
      at: { t: 92 },
      span: [84, 100],
      how: '<p>The new phrase begins on F over an F bass, just like the opening. Its climb now reaches E♭, and the inner parts lead towards G minor. Four bars later the whole rising shape starts again on B♭, with B♭ in the bass.</p>',
      devices: ['motivic link', 'sequence'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 11, bars 9–14; E♭ at bar 10, G-minor cadence at bar 12 and B♭ phrase at bar 13.',
    },
    {
      id: 'into-return',
      title: 'D minor releases the opening F',
      from: 'B · E♭ darkens the rising tune',
      to: 'A′ · F major, then a long farewell',
      at: { t: 137 },
      span: [128, 146],
      how: '<p>The middle phrase comes to rest in D minor and slows. A small grace-note C leads up to the opening F; beneath it, a low F restores the home key. The tune begins its first phrase again.</p>',
      devices: ['tempo change', 'retransition'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 11, bars 16–17; grace note and bass pitches checked against the Mutopia transcription.',
    },
  ],
};
