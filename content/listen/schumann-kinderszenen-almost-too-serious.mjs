// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), pp. 14–15.
// Kempowski’s Weltschmerz. Kinderszenen fast zu ernst (1995): Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013), item 36.
// https://www.schumann-zwickau.de/media/archiv-sonderausstellungen/2013_175_Jahre_Kinderszenen.pdf
// Clara Wieck in Vienna, December 1837 – April 1838, and her father’s opposition: https://en.wikipedia.org/wiki/Clara_Schumann
export default {
  id: 'schumann-kinderszenen-almost-too-serious',
  composer: 'schumann',
  order: 100,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 10 · Fast zu ernst — Almost Too Serious',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 10, of: 13 },
  year: '1838',
  key: 'G♯ minor',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - x. almost too serious.ogg' },
  intro: 'The darkest key of the cycle, five sharps, in bars only one beat long. A tune tied across the barlines floats over a rolling left hand and keeps coming to rest on fermatas.',
  question: 'What is lost, and gained, when every phrase ends by almost stopping?',

  sections: [
    { t: 0, label: 'A · phrases ending on fermatas', m: 'A' },
    { t: 56, label: 'A′ · the opening returns', m: 'A′', mNote: 'first half’s music heard again, about fifty seconds later' },
    { t: 104, label: 'Close · ritardando to a held chord', m: 'Coda' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A tune tied across tiny bars', text: 'Each bar is 2/8, a single beat, and five sharps give G♯ minor. The right-hand tune is tied across the barlines, so it floats between bars while the left hand rolls semiquaver figures under the pedal. The first phrase ends on a fermata in bar 8.', basis: 'score-proportion', precision: 'passage', evidence: 'First edition p. 14 (IMSLP #03060): key signature of five sharps, 2/8, p, Ped., tied right-hand quavers, left-hand semiquaver figures, ritard. and fermata in the eighth bar. The report’s global key estimate is E♭ minor (r = 0.87), the minor dominant of G♯ minor, a usual confusion in key estimates; its top pitch classes at 0:00 are E♭ A♭ G, which are D♯ G♯ G.' },
    { t: 16, kind: 'listen', title: 'The music nearly stops, again and again', text: 'The score ends several phrases on fermatas with a ritardando. In the recording the rate of attacks sinks at about 0:10, 0:35, 1:00 and 1:25, roughly every twenty-five seconds. Count the pauses.', basis: 'audio-feature', precision: 'passage', evidence: 'Report: onsets per second fall to 0.8 at 0:10, 1.2 at 0:35, 1.0 at 1:00 and 0.6 at 1:25 against 2–3 elsewhere; levels −21.2, −25.3, −19.7 and −27.8 dB at those windows. Score pp. 14–15: fermata with ritard. at the ends of several phrases.' },
    { t: 40, kind: 'life', title: 'Written while Clara was away', text: 'Schumann was engaged to Clara Wieck, but her father opposed the marriage. From December 1837 to April 1838 she gave recitals in Vienna, so she was away when he wrote the Kinderszenen in February and March 1838. He told her of the pieces by letter.', basis: 'documented', precision: 'passage', evidence: 'Clara Schumann (Wikipedia, citing Reich): Vienna recitals December 1837 – April 1838; Friedrich Wieck’s opposition to the engagement. Zwickau catalogue, items 1 and 3: diary entries of February 1838 and the letter to Clara of March 1838; Schumann-Portal (Henle review): composed “wahrscheinlich im Februar und März 1838”.' },
    { t: 62, kind: 'form', title: 'The first half comes back', text: 'Near 0:56 the opening music returns. The form analysis finds stretches of the first fifty seconds again about fifty seconds later, and the novelty peaks at 0:18 and 1:10 sit the same distance into each half.', basis: 'audio-feature', precision: 'passage', evidence: 'Form analysis: 0:03.5–0:18 matches 0:52.5–1:07 (lag 49 s), 0:22.5–0:39.5 matches 1:13–1:30 (lag 50.5 s) and 0:35–0:50.5 matches 1:26–1:41.5 (lag 51 s), means 0.95–0.96. Report: novelty 0.84 at 0:56, 0.65 at 0:18 and 1.00 at 1:10.' },
    { t: 86, kind: 'world', title: 'A title borrowed for a childhood', text: 'In 1995 the novelist Walter Kempowski published memories of his own childhood under the title Weltschmerz. Kinderszenen fast zu ernst, “world-weariness; scenes from childhood, almost too serious”, and printed this piece in notes at the head of the book.', basis: 'documented', precision: 'passage', evidence: 'Zwickau catalogue 175 Jahre Kinderszenen, item 36: Kempowski’s autobiographical childhood memories (Berlin 1995) titled Weltschmerz. Kinderszenen fast zu ernst, with Schumann’s piece printed at the start of the book.' },
    { t: 106, kind: 'listen', title: 'A ritardando onto a held chord', text: 'The last bars slow with ritardando and hairpins and end on a held chord with a fermata. The report shows the relative level falling from −17 dB at 1:45 to −42 dB at 1:55 and the notes thinning to almost none.', basis: 'audio-feature', precision: 'passage', evidence: 'Report: −17.4 dB at 1:45, −30.3 dB at 1:50, −41.9 dB at 1:55; onsets 1.0, 0.2 and 0.0 per second. Score p. 15, last system: ritar-dan-do, hairpins, fermata over the final chord.' },
  ],

  transitions: [
    {
      id: 'opening-returns',
      title: 'A fermata, then the opening again',
      from: 'A · phrases ending on fermatas',
      to: 'A′ · the opening returns',
      at: { t: 56 },
      span: [48, 64],
      how: '<p>The phrase before the return closes on a fermata with a ritardando, as every phrase does. What follows is the opening music again, with the same tied tune over the same rolling left hand, and the same five sharps. The pause before it is the same fermata that ended every earlier phrase.</p>',
      devices: ['fermata', 'tempo change', 'motivic link'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Report: novelty 0.84 at 0:56, dip at 1:00 (1.0 onsets per second, −19.7 dB). Form analysis: 0:03.5–0:18 matches 0:52.5–1:07, so the opening returns near 0:52–0:56 (the estimate is ±4 s). Score pp. 14–15: fermata with ritard. at each phrase end.',
    },
    {
      id: 'into-the-close',
      title: 'The last phrase fades to a held chord',
      from: 'A′ · the opening returns',
      to: 'Close · ritardando to a held chord',
      at: { t: 104 },
      span: [96, 112],
      how: '<p>The final phrase is marked <i>ritardando</i> over its last bars, with long hairpins that thin the sound, and it ends on a held chord with a fermata. The last fermata is the same device that ended every earlier phrase, but nothing follows it, so the pause that had always led on now ends the piece.</p>',
      devices: ['decrescendo', 'tempo change', 'fermata'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Report: novelty 0.46 at 1:42; level −17.4 dB at 1:45, −30.3 dB at 1:50, −41.9 dB at 1:55; onsets fall to 0.0 per second. Score p. 15, last system: ritar-dan-do and a fermata over the final chord.',
    },
  ],
};
