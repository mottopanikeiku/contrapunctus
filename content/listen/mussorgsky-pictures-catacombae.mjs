// Source files and recording credit: see content/dossiers/mussorgsky-pictures-catacombae.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide (Joanna Wyld).
// Hartmann's picture and Mussorgsky's letter: Peter Laki's Cleveland Orchestra note and Michael Steinberg's Boston Symphony note.
export default {
  id: 'mussorgsky-pictures-catacombae',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'VIII. Catacombae (Sepulcrum romanum) — Largo',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 12, of: 15 },
  year: '1874',
  key: '',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - viii. catacombae. sepulcrum romanum - largo.ogg' },
  intro: 'After the market’s noise, slow block chords alternate between loud and soft, like footsteps and echoes in a vault. Count the silences between the chords.',
  question: 'How do loud and soft chords, with almost no melody, make a space sound large?',

  sections: [
    { t: 0, label: 'Loud and soft chords', m: 'A' },
    { t: 42, label: 'The chords return, louder', m: 'B' },
    { t: 94, label: 'Fading close', m: 'Coda' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Chords with echoes', text: 'Solemn chords for brass, lower woodwinds and basses open the movement, with striking contrasts of loudness. The level swings by about eight decibels within ten seconds, and fewer than one new attack a second is detected.', basis: 'documented', precision: 'passage', evidence: 'Chords for brass, lower woodwinds and basses with striking dynamic contrasts: Philharmonia guide (Joanna Wyld). Relative level −15.1, −17.7, −11.2, −19.8 dB at 0:00–0:15; onsets per second 0.0 to 0.6 across 0:00–0:25.' },
    { t: 30, kind: 'listen', title: 'The quietest stretch', text: 'From 0:30 to about 0:42 the chords sink to about −25 dB, the quietest stretch of the first minute, with almost no new attacks. Then the loud chords return at 0:45, as if the echo had died.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level −25.0, −26.3 and −25.2 dB at 0:30, 0:35 and 0:40, then −13.1 dB at 0:45; onsets per second 0.2, 0.4, 0.2; boundary at 0:42 (novelty 0.82).' },
    { t: 56, kind: 'world', title: 'Hartmann in the Paris catacombs', text: 'The picture is a watercolour of Paris catacombs, with Hartmann himself, a friend and a guide holding a lamp. A pile of skulls sits on the right. Stasov described Hartmann examining the vault by lantern light.', basis: 'documented', precision: 'passage', evidence: 'Peter Laki’s Cleveland Orchestra note (watercolour, artist, friend and guide, pile of skulls on the right) and Michael Steinberg’s Boston Symphony note (guide with a lamp); Stasov’s description: Wikipedia, movement 8. Related edge: hartmann-pictures--mussorgsky-pictures-1874. The note sits in a hushed passage (−22.9 and −22.7 dB at 0:55 and 1:00).' },
    { t: 72, kind: 'listen', title: 'A brief mournful trumpet', text: 'Somewhere among the chords of this movement a short, mournful trumpet solo sounds. The report cannot place it, so listen across the middle and later stretch, where the chords stay between about −11 and −17 dB with few new attacks.', basis: 'documented', precision: 'passage', evidence: 'A brief, mournful trumpet solo: Philharmonia guide. The report’s 5-second table shows −16.9 to −11.9 dB across 1:05–1:30 with under one attack a second; it does not identify the trumpet, so the cue gives no time for the solo.' },
    { t: 100, kind: 'life', title: 'A friend’s sudden death', text: 'Hartmann died on 4 August 1873, aged 39, of an aneurysm. Mussorgsky wrote to Stasov, “Why should a dog, a horse, a rat, live on, when creatures like Hartmann must die?” Within a year he had written the suite.', basis: 'documented', precision: 'passage', evidence: 'Death date, age and cause: Wikipedia’s Pictures at an Exhibition article (composition history). The letter of 1874 to Vladimir Stasov and the Lear paraphrase: Peter Laki’s Cleveland Orchestra note. The note sits over the fading close (−21.9 to −32.9 dB from 1:35).' },
  ],

  transitions: [
    {
      id: 'into-louder-return',
      title: 'A hush, then the chords come back',
      from: 'Loud and soft chords',
      to: 'The chords return, louder',
      at: { t: 42 },
      span: [34, 52],
      how: '<p>The first set of chords dies down to a long hush at about −25 dB, with almost no new attacks. At about 0:42 the loud chords resume, 12 decibels higher. The harmony is not announced by a cadence; the join is a change of loudness, and the silence in between does the work of an echo. The movement is built on this contrast between near-silence and weight.</p>',
      devices: ['decrescendo', 'crescendo build', 'texture change'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Boundary at 0:42 (novelty 0.82); relative level −25.0 to −26.3 dB at 0:30–0:40 and −13.1 dB at 0:45; onsets per second 0.2 to 0.4. Block chords and dynamic contrasts: Philharmonia guide and Wikipedia’s description of the Largo.',
    },
    {
      id: 'into-fading-close',
      title: 'The chords thin and fade',
      from: 'The chords return, louder',
      to: 'Fading close',
      at: { t: 94 },
      span: [86, 112],
      how: '<p>After the loudest chords near 1:25 the level steps down at about 1:34 and keeps falling to near silence at 1:50, about 33 decibels below the loudest frame. The ending is a withdrawal, not a cadence, and it leaves the stillness that the next movement, Cum mortuis, breaks.</p>',
      devices: ['decrescendo', 'fade'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Boundaries at 1:34 and 1:38 (novelty 0.78, 0.71); relative level −11.9 dB (1:25), −21.9 dB (1:35), −24.3 dB (1:45), −32.9 dB (1:50). The report cannot time individual chords.',
    },
  ],
};
