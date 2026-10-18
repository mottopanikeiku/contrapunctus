// Source files and recording credit: see content/dossiers/mussorgsky-pictures-tuileries.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide and the LA Phil note.
export default {
  id: 'mussorgsky-pictures-tuileries',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'III. Tuileries (Dispute d’enfants après jeux) — Allegretto non troppo, capriccioso',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 6, of: 15 },
  year: '1874',
  key: 'B major',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - iii. tuileries - allegretto non troppo, capriccioso.ogg' },
  intro: 'Children squabble in a Paris garden after their games. The minute-long picture is a small three-part scherzo; listen for the chatter that frames a smoother, more singing middle.',
  question: 'How does a short piece make quarrelling children sound like a tune?',

  sections: [
    { t: 0, label: 'Chattering children', m: 'A' },
    { t: 28, label: 'Smoother violin theme', m: 'B' },
    { t: 49, label: 'The chatter returns', m: 'A′', mNote: 'opening figures return, ending with understatement' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Woodwind chatter, plucked strings', text: 'Bustling woodwinds are punctuated by pizzicato strings. The opening is busy but quiet: about five detected attacks a second, at a modest level near −22 dB, so the quarrel is heard from a little way off.', basis: 'audio-feature', precision: 'passage', evidence: 'Onsets per second are 5.0, 4.2 and 4.8 at 0:00, 0:05 and 0:10; relative level is −22.8 to −20.7 dB. Woodwinds and pizzicato strings: Philharmonia guide (Joanna Wyld).' },
    { t: 28, kind: 'form', title: 'A smoother tune takes over', text: 'At about 0:28 the chatter gives way to a smoother, still lively violin theme. Detected attacks fall from about five a second to under one at 0:30, and the colour brightens as the line moves up.', basis: 'audio-feature', precision: 'passage', evidence: 'Boundaries at 0:22 and 0:28 (novelty 0.78, 0.79); onsets per second 2.2 (0:25), 0.8 (0:30); brightness 1,197 Hz (0:25), 1,391 Hz (0:30), 1,488 Hz (0:35). The violin theme: Philharmonia guide; “ternary form”: Wikipedia’s article.' },
    { t: 34, kind: 'world', title: 'A lost picture and a children’s song', text: 'Hartmann’s Tuileries picture is lost, and the children in it were probably added for scale. Mussorgsky had already dedicated a children’s song to him: “In the Corner”, the second of The Nursery, in 1870.', basis: 'documented', precision: 'passage', evidence: 'Wikipedia’s Pictures at an Exhibition article: the Tuileries picture is lost and its figures likely added for scale (movement 3), and the 1870 dedication of “In the Corner” to Hartmann (composition history). Related edge: hartmann-pictures--mussorgsky-pictures-1874.' },
    { t: 49, kind: 'form', title: 'Chatter again, then a shrug', text: 'The opening ideas return around 0:48 after a build to the loudest windows, 0:45–0:50. The picture ends quietly, with a witty understatement; the final window sits at −24 dB.', basis: 'audio-feature', precision: 'passage', evidence: 'Boundary at 0:48 (novelty 0.81); relative level −12.8 dB (0:45), −13.9 (0:50), −22.1 (0:55), −24.4 (1:00); onsets per second 4.0 at 0:55. The witty understated ending: Philharmonia guide.' },
  ],

  transitions: [
    {
      id: 'into-violin-theme',
      title: 'Chatter thins into a singing line',
      from: 'Chattering children',
      to: 'Smoother violin theme',
      at: { t: 28 },
      span: [20, 38],
      how: '<p>The woodwind chatter quietens and the number of attacks drops sharply. A smoother violin theme, still animated, rises higher in register, so the colour brightens even though the level stays low. The ear moves from a texture of short figures to one long line: the same quick pulse continues, but it is now carried by one sustained voice.</p>',
      devices: ['texture change', 'register change', 'orchestration change'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Boundaries at 0:22 and 0:28 (novelty 0.78, 0.79); onsets per second 4.2 (0:05) to 0.8 (0:30); brightness 1,197 Hz (0:25) to 1,488 Hz (0:35). The violin theme is from the Philharmonia guide; the pulse continuing under it is an inference from the score’s metre.',
    },
    {
      id: 'into-return',
      title: 'A build brings the opening back',
      from: 'Smoother violin theme',
      to: 'The chatter returns',
      at: { t: 49 },
      span: [38, 60],
      how: '<p>The violin theme builds towards the loudest windows of the picture, 0:45 to 0:50, and the opening chatter returns. After a quick climax the level drops about nine decibels by 0:55 and the picture ends on a quiet, witty understatement, not a loud cadence. The quarrel simply stops, as children’s quarrels do.</p>',
      devices: ['crescendo build', 'retransition', 'decrescendo'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Boundary at 0:48 (novelty 0.81); relative level −20.7 dB (0:35), −12.8 dB (0:45), −13.9 dB (0:50), −22.1 dB (0:55), −24.4 dB (1:00); onsets per second 4.0 at 0:55. The returning opening ideas and understated ending are from the Philharmonia guide and the score’s ternary form; the report cannot time individual figures.',
    },
  ],
};
