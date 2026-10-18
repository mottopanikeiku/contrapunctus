// Source files and recording credit: see content/dossiers/mussorgsky-pictures-limoges.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide (Joanna Wyld).
// Form from Lamm's piano text, Mutopia Project (limoges.ly): the opening chatter in E♭, a contrasting middle from bar 12 (key signature of C major, 3/4 from bar 16,
// 4/4 from bar 24), the E♭ material back at bar 27, a fermata in bar 36 and "Meno mosso, sempre capriccioso" only in the final four bars (37–40), marked attacca into the Catacombs.
// Times for those bars are proportions of the recording, not alignments; the measured dynamics and pauses come from the audio report and a frame-by-frame level pass.
export default {
  id: 'mussorgsky-pictures-limoges',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'VII. Limoges. Le marché (La grande nouvelle) — Allegretto vivo, sempre scherzando',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 11, of: 15 },
  year: '1874',
  key: 'E♭ major',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - vii. limoges. le marche - allegretto vivo, sempre scherzando.ogg' },
  intro: 'Women quarrel and gossip in a French market. The piece is a rapid scherzo: chattering music in E♭, a contrasting middle that builds to one huge climax, the chatter again, and a short slower coda that runs on into the Catacombs. Instruments named here follow Ravel’s orchestration, the probable but undocumented version.',
  question: 'How does a fast piece sound like many voices at once?',

  sections: [
    { t: 0, label: 'Market chatter', m: 'A' },
    { t: 30, label: 'Contrasting middle · building to the climax', m: 'B' },
    { t: 62, label: 'The chatter returns', m: 'A′', mNote: 'opening material returns after the climax and a hush' },
    { t: 87, label: 'Meno mosso coda', m: 'Coda' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A busy violin idea', text: 'A busy violin idea sets the gossip going, taken up by woodwinds and percussion including celesta. Horns add emphasis, but Ravel keeps the large ensemble light by passing the scurrying idea between sections.', basis: 'documented', precision: 'passage', evidence: 'Violin idea, woodwinds, celesta, horns and the passing of the idea between sections: Philharmonia guide (Joanna Wyld). Onsets per second 4.4, 3.8, 2.6 at 0:00–0:10; relative level −18.4 to −16.1 dB. The report does not identify instruments.' },
    { t: 24, kind: 'world', title: 'A cow, false teeth and a red nose', text: 'Mussorgsky’s manuscript carried a French note, later crossed out, of the great news: a recovered cow, a lady’s new porcelain teeth, a gentleman’s nose as red as a peony. Stasov called the picture French women quarrelling in the market.', basis: 'documented', precision: 'passage', evidence: 'Crossed-out programme and its details: Peter Laki’s Cleveland Orchestra note (https://www.clevelandorchestra.com/works/pictures-at-an-exhibition-mussorgsky) and Michael Steinberg’s Boston Symphony note (https://www.bso.org/works/pictures-at-an-exhibition); Stasov’s description: Wikipedia, movement 7. The note sits where the level is moderate (−17 to −13 dB, 0:20–0:30).' },
    { t: 42, kind: 'listen', title: 'Surges towards the peak', text: 'From about 0:43 the level surges in stages, from about −22 dB at 0:40 to −8 dB at 0:47 and again at 0:54, towards the loudest passage of the movement. The chatter does not slow as it grows.', basis: 'audio-feature', precision: 'passage', evidence: 'Strongest boundary at 0:46 (novelty 1.00). A 1-second pass gives −21.8 dB (0:40), −8.1 dB (0:47), −8.2 dB (0:54) and −2.4 dB (0:58) at three to six detected attacks a second. The report’s 5-second table shows −18.3 dB (0:40) and −6.5 dB (0:55).' },
    { t: 58, kind: 'form', title: 'The loudest moment, then a hush', text: 'At about 0:58 the sound peaks at its loudest, then falls by roughly twenty decibels within three seconds. In Lamm’s score the opening E♭ music returns at bar 27 of about 40, close to this hush by proportion; here the chatter climbs back from about 1:02.', basis: 'audio-feature', precision: 'moment', evidence: 'A 1-second pass gives −2.4 dB at 0:58, −4.7 dB at 0:59, −18.8 dB at 1:00 and −23.0 dB at 1:01, a fall of 20.6 dB in three seconds; the report shows the two quietest windows at 1:00 and 1:05 and a boundary at 1:02 (novelty 0.97). The return of the E♭ material at bar 27 of about 40 is in Lamm’s score (Mutopia, limoges.ly); its placement near 1:00–1:05 is by proportion, not an alignment.' },
    { t: 76, kind: 'music', title: 'The climb back', text: 'After the hush the level climbs again, from about −14 dB at 1:10 to −7 dB near 1:24, as the opening chatter builds once more. At about 1:26 the music stops for a moment before the final bars.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level −13.8 dB (1:10), −12.6 (1:15), −9.9 (1:20); a 1-second pass gives −7.3 dB at 1:24 and −30.3 dB at 1:26; boundaries at 1:18 and 1:24 (novelty 0.46, 0.52). The chatter’s return after the climax is the written order in Lamm’s score (bar 27).' },
    { t: 92, kind: 'listen', title: 'Slower, straight into the Catacombs', text: 'A pause of about a second near 1:26 is probably the fermata the score places before the last four bars, marked “Meno mosso, sempre capriccioso”. The level peaks at −4.2 dB near 1:38, and the Catacombs follows without a break.', basis: 'score-proportion', precision: 'passage', evidence: 'A frame-by-frame level pass finds near-silence between 1:26.1 and 1:27.3, then −8.8 dB (1:28), −5.5 (1:32) and −4.2 dB (1:38) with brightness 3,011 Hz and no detected attacks at 1:39. The fermata in bar 36, the Meno mosso mark in bars 37–40 and the attacca are in Lamm’s score (Mutopia, limoges.ly); the match to the pause is by proportion.' },
  ],

  transitions: [
    {
      id: 'into-contrasting-middle',
      title: 'The chatter gives way to a new key',
      from: 'Market chatter',
      to: 'Contrasting middle',
      at: { t: 30 },
      span: [22, 40],
      how: '<p>At about bar 12 the E♭ chatter gives way to a contrasting middle written with the key signature of C major, then in 3/4 from bar 16 and 4/4 from bar 24. In this recording the strongest early boundary falls at 0:30, with a spike in level at 0:28. The change is of key and metre, not of speed: the scherzo’s quick pace carries on.</p>',
      devices: ['metre change', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Boundary at 0:30 (novelty 0.94); a 1-second pass shows −6.2 dB at 0:28 against −12 to −17 dB at 0:26–0:30. Key signatures and metres: Lamm’s score (Mutopia, limoges.ly), bars 12, 16 and 24, placed by proportion (bar 12 of about 40 is near 0:30). The score is read by key signature; the report’s key estimates are not used.',
    },
    {
      id: 'into-return',
      title: 'A peak, a hush, then E♭ again',
      from: 'Contrasting middle',
      to: 'The chatter returns',
      at: { t: 62 },
      span: [54, 72],
      how: '<p>The middle builds in stages to its loudest chords near 0:58 and the level collapses by some twenty decibels within three seconds. In the score the opening E♭ music returns at bar 27, which falls near this hush by proportion, and the quick chatter climbs back through 1:10 to 1:24. The return is the written order; the dip itself is a measured change in level.</p>',
      devices: ['decrescendo', 'retransition', 'motivic link'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'A 1-second pass gives −2.4 dB (0:58), −4.7 (0:59), −18.8 (1:00), −23.0 (1:01); boundary at 1:02 (novelty 0.97). The return of the E♭ material at bar 27 of about 40 is in Lamm’s score (Mutopia, limoges.ly); its placement near 1:02 is by proportion only.',
    },
    {
      id: 'into-coda',
      title: 'A fermata, then slower bars',
      from: 'The chatter returns',
      to: 'Meno mosso coda',
      at: { t: 87 },
      span: [80, 98],
      how: '<p>Near 1:26 the chatter stops for about a second, probably the fermata that the score places in bar 36. Four slower bars follow, marked “Meno mosso, sempre capriccioso”, and they run straight on into the Catacombs. The score marks a poco accelerando in the last of them, bar 40, before the attacca.</p>',
      devices: ['fermata', 'tempo change', 'attacca'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'A frame-by-frame level pass finds near-silence at 1:26.1–1:27.3; level −7.3 dB (1:24), −30.3 (1:26), −8.8 (1:28). The fermata (bar 36), Meno mosso (bars 37–40) and attacca are in Lamm’s score (Mutopia, limoges.ly); the link between score and pause is by proportion and a single measured gap.',
    },
  ],
};
