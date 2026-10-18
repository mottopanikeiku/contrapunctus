// Source files and recording credit: see content/dossiers/mussorgsky-pictures-limoges.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide (Joanna Wyld).
// Form (ternary, scurrying coda): Wikipedia; tempo marks: Lamm's piano text, Mutopia (limoges.ly). The report's 1-second and 2-second passes
// quoted in evidence are finer views of the same audio than the 5-second table.
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
  intro: 'Women quarrel and gossip in a French market. The movement is a rapid scherzo with one huge climax, a sudden hush and a scurrying run that goes straight into the Catacombs. Instruments named here follow Ravel’s orchestration, the probable but undocumented version.',
  question: 'How does a fast piece sound like many voices at once?',

  sections: [
    { t: 0, label: 'Market chatter, building', m: 'A' },
    { t: 60, label: 'Hush · slower, capricious middle', m: 'B' },
    { t: 78, label: 'The chatter returns; scurrying close', m: 'A′', mNote: 'quick chatter returns and runs on without a break' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A busy violin idea', text: 'A busy violin idea sets the gossip going, taken up by woodwinds and percussion including celesta. Horns add emphasis, but Ravel keeps the large ensemble light by passing the scurrying idea between sections.', basis: 'documented', precision: 'passage', evidence: 'Violin idea, woodwinds, celesta, horns and the passing of the idea between sections: Philharmonia guide (Joanna Wyld). Onsets per second 4.4, 3.8, 2.6 at 0:00–0:10; relative level −18.4 to −16.1 dB. The report does not identify instruments.' },
    { t: 24, kind: 'world', title: 'A cow, false teeth and a red nose', text: 'Mussorgsky’s manuscript carried a French note, later crossed out, of the great news: a recovered cow, a lady’s new porcelain teeth, a gentleman’s nose as red as a peony. Stasov called the picture French women quarrelling in the market.', basis: 'documented', precision: 'passage', evidence: 'Crossed-out programme and its details: Peter Laki’s Cleveland Orchestra note (https://www.clevelandorchestra.com/works/pictures-at-an-exhibition-mussorgsky) and Michael Steinberg’s Boston Symphony note (https://www.bso.org/works/pictures-at-an-exhibition); Stasov’s description: Wikipedia, movement 7. The note sits where the level is moderate (−17 to −13 dB, 0:20–0:30).' },
    { t: 46, kind: 'listen', title: 'Surges towards the peak', text: 'From about 0:43 the level surges in stages, from about −22 dB at 0:40 to −8 dB at 0:47 and again at 0:54, towards the loudest passage of the movement. The chatter does not slow as it grows.', basis: 'audio-feature', precision: 'passage', evidence: 'Strongest boundary at 0:46 (novelty 1.00). A 1-second pass gives −21.8 dB (0:40), −8.1 dB (0:47), −8.2 dB (0:54) and −2.4 dB (0:58) at three to six detected attacks a second. The report’s 5-second table shows −18.3 dB (0:40) and −6.5 dB (0:55).' },
    { t: 58, kind: 'form', title: 'The loudest moment, then a hush', text: 'At about 0:58 the sound peaks at its loudest, then falls by roughly twenty decibels within two seconds. The score marks a slower, more capricious middle, “Meno mosso, sempre capriccioso”; this is the likely place it begins.', basis: 'audio-feature', precision: 'moment', evidence: 'A 1-second pass gives −2.4 dB at 0:58, −4.7 dB at 0:59, −18.8 dB at 1:00 and −23.0 dB at 1:01; the report shows the two quietest windows at 1:00 and 1:05 and a boundary at 1:02 (novelty 0.97). The tempo mark is in Lamm’s score (Mutopia); its bar is not aligned to the audio.' },
    { t: 78, kind: 'form', title: 'The chatter comes back', text: 'Around 1:18 the quick figures return in a rush, with a burst of attacks, and the level climbs again. The form is a ternary scherzo, so this is the return of the first music.', basis: 'score-proportion', precision: 'passage', evidence: 'Boundaries at 1:18 and 1:24 (novelty 0.45, 0.52); a 2-second pass counts 4 attacks in the window at 1:16 and 9 at 1:18, with the level moving from −13 dB to −8 dB by 1:24. Ternary form: Wikipedia’s Pictures at an Exhibition article; the return is not confirmed by a recurrence match.' },
    { t: 96, kind: 'listen', title: 'No break into the Catacombs', text: 'The last seconds are the loudest of the closing stretch, peaking near 1:38 at −4.5 dB. A scurrying coda runs on with no pause, because the next picture, the Catacombs, follows without a break.', basis: 'score-proportion', precision: 'passage', evidence: 'A 2-second pass gives −6.8 dB at 1:36 and −4.5 dB at 1:38, with brightness 2,646 Hz and no detected attacks at 1:38; the report’s loudest windows are 1:35, 0:55 and 1:30. A scurrying coda that leads without a break into the next movement: Wikipedia; the contrast with the Catacombs: Laki’s note.' },
  ],

  transitions: [
    {
      id: 'into-capricious-middle',
      title: 'A huge peak, then almost silence',
      from: 'Market chatter, building',
      to: 'Hush · slower, capricious middle',
      at: { t: 60 },
      span: [52, 70],
      how: '<p>The opening scherzo builds in stages to its loudest chords near 0:58, then stops. Within about two seconds the level collapses by some twenty decibels. The score then asks for a slower, capricious middle section (<i>Meno mosso, sempre capriccioso</i>). The join is a cut, not a modulation: Mussorgsky stops the noise so that the middle can sound intimate.</p>',
      devices: ['decrescendo', 'tempo change', 'texture change'],
      basis: 'audio-feature',
      precision: 'moment',
      evidence: 'A 1-second pass gives −2.4 dB (0:58), −4.7 (0:59), −18.8 (1:00), −23.0 (1:01); boundary at 1:02 (novelty 0.97); the quietest report windows are 1:00 and 1:05. The Meno mosso mark is in Lamm’s score (Mutopia, limoges.ly); its alignment to the audio is inferred.',
    },
    {
      id: 'into-return-and-scurry',
      title: 'The quick figures rush back in',
      from: 'Hush · slower, capricious middle',
      to: 'The chatter returns; scurrying close',
      at: { t: 78 },
      span: [70, 90],
      how: '<p>After the slower middle the opening chatter returns with a rush of attacks and a rising level, as a retransition. The pace is the first tempo again. This return leads, through a scurrying coda, directly into the Catacombs: Mussorgsky links the two pictures without a pause, so the market noise cuts to the tomb.</p>',
      devices: ['retransition', 'crescendo build', 'tempo change'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Boundaries at 1:18 and 1:24 (novelty 0.45, 0.52); a 2-second pass counts 9 attacks at 1:18 against 4 at 1:16; level −13 dB to −8 dB between 1:16 and 1:24. Ternary form and the coda leading without a break to the next movement: Wikipedia’s article.',
    },
  ],
};
