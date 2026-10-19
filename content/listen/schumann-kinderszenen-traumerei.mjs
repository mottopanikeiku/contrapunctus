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
  intro: '<i>Träumerei</i> (‘Dreaming’), No. 7 of <i>Kinderszenen</i>, Op. 15, stands at the centre of the set. It is twenty-four written bars long, and its quiet piano melody repeatedly rises a little higher.',

  sections: [
    { t: 0, label: 'A · Melody rising from C', m: 'A' },
    { t: 46, label: 'A · The opening eight bars repeated', m: 'A', mNote: 'The opening strain repeats.' },
    { t: 92, label: 'B · Rising tune with E♭', m: 'B' },
    { t: 137, label: 'A′ · F major, closing section', m: 'A′', mNote: 'A high A is held under a fermata before the close.' },
  ],

  cues: [
    { bar: { n: '0', occ: 1 }, kind: 'music', title: 'Opening phrase, bars 1–4', text: 'A single C rises to F and is held. The melody then climbs again towards the F an octave above. Underneath, the other voices move slowly, each with its own line.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, plate 6016, p. 11, bars 1–4; pitches confirmed in Ying-Chun Liu’s Mutopia transcription. https://s9.imslp.org/files/imglnks/usimg/f/fe/IMSLP03060-Schumann-Op015Brt6016.pdf' },
    { t: 28, kind: 'life', title: 'Diary entries, 24–25 February 1838', text: 'On Saturday, 24 February 1838, Schumann recorded in his diary that he had composed “the little thing <i>Träumerei</i>”. The following evening he worked on another <i>Kinderszene</i>, in F major, which he thought “very pretty”.', basis: 'documented', precision: 'passage', evidence: 'Schumann’s diary, 24–25 February 1838, quoted in Thomas Synofzik, 175 Jahre Kinderszenen (2013), item 1. Translations of “das kleine Ding” and “die mir sehr hübsch vorkommt”. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
    { t: 70, kind: 'life', title: 'Letter to Clara Wieck, 1838', text: 'On 17 March 1838 Schumann told Clara that he had written “some thirty small droll things” and chosen about twelve for his <i>Kinderszenen</i>. He promised that she would enjoy them, though she would have to forget herself as a virtuoso.', basis: 'documented', precision: 'passage', evidence: 'Schumann to Clara Wieck, Leipzig, 17 March 1838, Jugendbriefe (1885), p. 277, quoted in Thomas Synofzik, 175 Jahre Kinderszenen (2013), item 3: “an die 30 kleine putzige Dinger … von denen ich etwa zwölf ausgelesen”; our translation. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf Same letter, same sentences, in May Herbert’s English translation, Early Letters of Robert Schumann (1888), pp. 264–265: “about thirty quaint little things, from which I have selected twelve”. https://archive.org/details/earlylettersofro010823mbp' },
    { t: 110, kind: 'world', title: 'Early programmes, Dresden and Vienna', text: 'When Marie Wieck played six of the pieces in Dresden on 18 January 1853, <i>Träumerei</i> was not among them. In Vienna on 17 March 1857 Clara’s pupil Nanette Falk played three, all from Marie’s list, so it was missing from that programme too.', basis: 'documented', precision: 'passage', evidence: 'Synofzik, 175 Jahre Kinderszenen (2013), items 15 and 16: the Dresden programme of 18 January 1853 and the Vienna programme of 17 March 1857. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
    { bar: { n: '17', occ: 1 }, kind: 'form', title: 'Return of the opening, bar 17', text: 'After the middle passage’s cadences in G minor and D minor, the opening F returns at bar 17 and Schumann restores the first phrase. A high A is held under a fermata in bar 22. The final descent is marked ritardando.', basis: 'score-aligned', precision: 'passage', evidence: 'Breitkopf & Härtel first edition, p. 11, bars 9–24: G-minor and D-minor cadences, return at bar 17, fermata on A in bar 22 and final ritardando.',
    },
    { t: 170, kind: 'world', title: 'Illustrated editions and a film', text: 'In 1877 Friederike Medem published silhouettes with verses for four of the pieces, <i>Träumerei</i> among them. A Leipzig edition of 1886 paired the music with poems by Albert Träger and pictures by Alexander Zick. In 1943–44 UFA made a film called <i>Träumerei</i>.', basis: 'documented', precision: 'passage', evidence: 'Synofzik, 175 Jahre Kinderszenen (2013), items 17, 33–34 and 38: the Zick and Träger edition, the UFA film Träumerei and the Medem silhouettes. https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf' },
  ],

  transitions: [
    {
      id: 'into-repeat',
      title: 'Bar 8 into the repeat',
      from: 'A · Melody rising from C',
      to: 'A · The opening eight bars repeated',
      at: { t: 46 },
      span: [38, 54],
      how: '<p>The music slows in the eighth bar onto C-major harmony, the dominant of F. A low C in the melody becomes the upbeat back to F, while the bass moves beneath it to F. The repeat begins with the same upward figure as the opening.</p>',
      devices: ['tempo change', 'motivic link'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 11, bar 8 and the repeat to bar 1; final C-major harmony confirmed in the Mutopia transcription.',
    },
    {
      id: 'into-middle-section',
      title: 'The climb reaches E♭',
      from: 'A · The opening eight bars repeated',
      to: 'B · Rising tune with E♭',
      at: { t: 92 },
      span: [84, 100],
      how: '<p>The new phrase begins on F over an F bass, as at the opening. Its climb now reaches E♭ in bar 10, and the inner parts move towards G minor, with a cadence in that key at bar 12. In bar 13 the rising shape begins again on B♭, with B♭ in the bass.</p>',
      devices: ['motivic link', 'sequence'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 11, bars 9–14; E♭ at bar 10, G-minor cadence at bar 12 and B♭ phrase at bar 13.',
    },
    {
      id: 'into-return',
      title: 'Return from D minor to F',
      from: 'B · Rising tune with E♭',
      to: 'A′ · F major, closing section',
      at: { t: 137 },
      span: [128, 146],
      how: '<p>The middle phrase comes to rest in D minor and slows. A grace-note C leads up to the opening F, and a low F in the bass beneath it restores the home key. The first phrase of the tune begins again.</p>',
      devices: ['tempo change', 'retransition'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Breitkopf & Härtel first edition, p. 11, bars 16–17; grace note and bass pitches checked against the Mutopia transcription.',
    },
  ],
};
