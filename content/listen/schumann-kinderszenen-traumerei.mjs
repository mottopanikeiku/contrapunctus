// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), p. 11; melodic text also checked against the Mutopia Project LilyPond file SchumannOp15No07.ly.
// Diary entries, programmes of 1853 and 1857, Medem silhouettes (1877), Träger/Zick edition (1886), UFA film: Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013), items 1, 15–17, 33, 38.
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
  intro: 'The centre of the cycle and now its most famous piece. Twenty-four written bars become thirty-two when the first eight are repeated, and this performance takes about 3:20 over them. Follow the four-bar phrases, each handing an upbeat to the next.',
  question: 'How did a piece missing from two early programmes become the one everyone knows?',

  sections: [
    { t: 0, label: 'A · the melody', m: 'A' },
    { t: 46, label: 'A · repeated', m: 'A', mNote: 'the eight bars heard again, as the repeat sign requires' },
    { t: 92, label: 'B · the harmony turns', m: 'B' },
    { t: 137, label: 'A′ · the return, ending with a fermata', m: 'A′', mNote: 'closing bars slowed by a fermata and a long ritardando' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'An upbeat and a climbing tune', text: 'F major, four beats to the bar, marked p. An upbeat C rises a fourth to F, and the tune climbs F–E–F–A–C–F over a chord held in the lower voices. Each four-bar phrase ends on a C that doubles as the next upbeat.', basis: 'score-proportion', precision: 'passage', evidence: 'First edition p. 11 (IMSLP #03060): common time, one flat, p, upbeat C then F tied to a quaver, held lower voices. Melodic notes read from the Mutopia LilyPond transcription (SchumannOp15No07.ly). Report: F major at 0:00–0:10 (r = 0.88–0.93), −14.6 dB at 0:00, 0.6–1.6 onsets per second.' },
    { t: 28, kind: 'life', title: '“The little thing”', text: 'Schumann’s diary for Saturday 24 February 1838 records that he composed “das kleine Ding ‘Träumerei’”, the little thing. The next day he noted another Kinderscene in F major that struck him as very pretty. He had already noted work on the Kinderscenen by 17 February.', basis: 'documented', precision: 'passage', evidence: 'Diary February 1838 as quoted in the Robert-Schumann-Haus Zwickau catalogue 175 Jahre Kinderszenen (2013), item 1: “Sonnabend, d. 24. … das kleine Ding ‚Träumerei‘ componirt … Sonntag, d. 25 … Abends wieder ‚Kinderscene‘ in F Dur, die mir sehr hübsch vorkommt”. The same page records “Bis Sonnabend am 17. Kinderscenen componirt”.' },
    { t: 52, kind: 'form', title: 'The repeat, and the pace', text: 'The second pass starts about 45 seconds after the first. Thirty-two crotchets in that time is roughly 42 a minute, slower than the 50 that the quaver mark ♪ = 100 in the 1839 edition implies. Struck argues Schumann let those marks stand.', basis: 'audio-feature', precision: 'passage', evidence: 'Form analysis: 0:05.5–0:51 matches 0:51–1:36.5 (lag 45.5 s, mean similarity 0.95); a whole-piece lag scan also peaks at 45.5 s. Eight 4/4 bars are 32 crotchets, so 60 × 32 / 45.5 = 42 a minute. Score p. 11 (read from the scan): metronome mark of a quaver = 100. Henle blog on Michael Struck: Schumann did not supply the marks but passed them uncorrected.' },
    { t: 80, kind: 'world', title: 'Left out of the early programmes', text: 'When Marie Wieck played six of the pieces in Dresden on 18 January 1853, Träumerei was not among them. Clara’s pupil Nanette Falk chose three in Vienna on 17 March 1857, all from Wieck’s list, so the piece missed that programme too.', basis: 'documented', precision: 'passage', evidence: 'Zwickau catalogue, items 15–16: Dresden programme of 18 January 1853 (neither No. 1 nor “die heute so berühmte Träumerei” among the six); Vienna programme of 17 March 1857, Nanette Falk, three pieces all in Wieck’s selection, probably the first public performance in Vienna.' },
    { t: 104, kind: 'form', title: 'The harmony turns to G minor', text: 'The middle section starts with the same rising shape, then an E♭ darkens it. The loudest moment of the whole recording arrives around 1:40 and the harmony settles on G minor near 1:45, before a D-minor cadence close to 2:00–2:10.', basis: 'audio-feature', precision: 'passage', evidence: 'Report: novelty 0.89 at 1:40; loudest 5-s window 1:40 (−7.7 dB) with F♯ among the strongest pitch classes; local key G minor at 1:45–1:50 (r = 0.80–0.90); D minor at 1:55–2:10 (r = 0.74–0.87). Score p. 11, third system: flat signs after the opening shape. Machine keys are confirmation only.' },
    { t: 124, kind: 'world', title: 'Pictures, poems and films', text: 'In 1877 Friederike Medem published silhouettes with verses for four of the pieces, this one among them, and a Leipzig edition of 1886 paired the music with poems by Albert Träger and pictures by Alexander Zick. A German biographical film on Schumann, made in 1943–44, was titled Träumerei.', basis: 'documented', precision: 'passage', evidence: 'Zwickau catalogue, item 38 (Medem silhouettes, 1877, for Glückes genug, Wichtige Begebenheit, Träumerei and Am Kamin), item 17 (Leipzig 1886, Träger and Zick) and item 33 (UFA film Träumerei, produced 1943/44). The English Wikipedia article on Kinderszenen calls the 1944 film a German biographical film on Schumann.' },
    { t: 140, kind: 'form', title: 'The opening comes back', text: 'Near 2:15 the opening phrase returns in F major after a ritardando. The report marks this as the strongest boundary in the recording, and the opening strain reappears about ninety seconds after its repeat began.', basis: 'audio-feature', precision: 'passage', evidence: 'Report: novelty 1.00 at 2:14; level −18.2 dB at 2:15, F major at 2:15–2:25. Form analysis: 0:55.5–1:12 matches 2:27.5–2:44 (lag 92 s) and 0:02.5–0:17.5 matches 2:19.5–2:34.5 (lag 137 s). Score p. 11: ritardando at the end of the middle section, then the opening shape.' },
    { t: 166, kind: 'listen', title: 'The fermata, then the last phrase', text: 'Close to 2:50 the music pauses on a long high note marked with a fermata in bar 22. The report finds a lull in the attacks there, and a ritardando then leads through the last phrase to a final held chord.', basis: 'audio-feature', precision: 'passage', evidence: 'Report: 0.4 detected onsets per second at 2:50 (a count of attacks, not of notes) and novelty 0.49 at 2:52; level −19.2 dB at 2:50 and −21.0 dB at 2:55, then −21.2 dB at 3:05. Score p. 11, last system: fermata over a long high note, ritardando, fermata on the final chord; bar 22 is the fermata bar in Shoda & Adachi’s figure 1 description.' },
    { t: 184, kind: 'world', title: 'A piece scientists keep measuring', text: 'Bruno Repp measured the timing of recordings of Träumerei, among them Argerich and Horowitz, in 1992. A 2015 study of 26 performances found average tempi from 48.9 to 63.1 beats a minute. Across its 127 beats this recording averages about 38.', basis: 'documented', precision: 'passage', evidence: 'Shoda & Adachi, Frontiers in Psychology 5:1564 (2015): slowest 48.88 and fastest 63.05 beats per minute by mean beat duration across 13 pianists in two conditions; text also cites Repp (1992, 1995). Mazzola (2011), ch. 26, notes Repp measured Argerich and Horowitz. This recording: 127 beats over about 200 s.' },
  ],

  transitions: [
    {
      id: 'into-repeat',
      title: 'The last upbeat leads back to bar one',
      from: 'A · the melody',
      to: 'A · repeated',
      at: { t: 46 },
      span: [38, 54],
      how: '<p>The eighth bar of the strain slows with a ritardando and ends on the C that has closed each four-bar phrase. At the repeat sign that C is again the upbeat to the opening F, so the join is made by the same upbeat that links every phrase inside the strain, and the second pass begins as though the first had never stopped.</p>',
      devices: ['tempo change', 'motivic link'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Form analysis: the second pass begins about 45.5 s after the first (lag 45.5 s, mean 0.95); report dips to −19.5 dB at 0:30 and −18.4 dB at 1:15, the same point of each pass. Score p. 11: ritardando in the eighth bar and the repeat sign.',
    },
    {
      id: 'into-middle-section',
      title: 'The same shape, with an E♭',
      from: 'A · repeated',
      to: 'B · the harmony turns',
      at: { t: 92 },
      span: [84, 100],
      how: '<p>After the second pass the middle section opens with the rising shape of the first bar, so the join is hardly a break at all. The change comes in the next bar, where an E♭ pulls the harmony towards the flat side; four bars later the shape is repeated a fourth higher, in B♭. The harmony travels while the melody’s outline stays in the ear.</p>',
      devices: ['motivic link', 'sequence'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Form analysis: second pass ends near 1:36 (0:51–1:36.5). Report: novelty 0.45 at 1:26 and 0.89 at 1:40; loudest window 1:40; G minor at 1:45–1:50 and D minor at 1:55–2:10. Score p. 11 and the Mutopia transcription: E♭ in the second bar of the middle section; the opening shape repeated in B♭ four bars later.',
    },
    {
      id: 'into-return',
      title: 'A ritardando, then F major comes home',
      from: 'B · the harmony turns',
      to: 'A′ · the return',
      at: { t: 137 },
      span: [128, 146],
      how: '<p>The middle section has turned to D minor and slows with a ritardando in its last bars. A single grace note leads into the opening F, marked <i>a tempo</i>, and the first strain returns almost unchanged. The home key is felt as an arrival because the preceding eight bars have been away from it.</p>',
      devices: ['tempo change', 'retransition'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Report: novelty 1.00 at 2:14, level −18.2 dB at 2:15, F major at 2:15–2:25 after D minor at 1:55–2:10. Form analysis: the opening matches the return at 2:19.5–2:34.5 (lag 137 s). Score p. 11: ritard. then a tempo at the opening shape; grace note in the Mutopia transcription.',
    },
  ],
};
