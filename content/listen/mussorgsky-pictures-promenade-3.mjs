// Source files and recording credit: see content/dossiers/mussorgsky-pictures-promenade-3.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide and the LA Phil note.
export default {
  id: 'mussorgsky-pictures-promenade-3',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'Promenade — Moderato non tanto, pesante',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 5, of: 15 },
  year: '1874',
  key: '',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - promenade - moderato non tanto, pesante.ogg' },
  intro: 'The shortest Promenade in this set is also the heaviest, marked pesante. Listen for how it ends: it does not close, it leaves the next picture to answer. Instruments named here follow Ravel’s orchestration, the probable but undocumented version.',
  question: 'How can a piece end so that the next one has to begin?',

  sections: [
    { t: 0, label: 'Heavy statement', m: 'A' },
    { t: 14, label: 'Second half and plucked ending', m: 'B' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Trumpet and trombones, full band', text: 'The walking theme returns heavily, marked pesante, with trumpet and trombones in front and the full orchestra behind them. The level peaks around 0:10, the loudest point of the movement.', basis: 'documented', precision: 'passage', evidence: 'Trumpet and trombones with full orchestra: LA Phil note (Orrin Howard); Philharmonia guide for the tone. Relative level −10.4 dB at 0:00, −4.8 dB at 0:10 (the loudest 5-second window).' },
    { t: 24, kind: 'listen', title: 'A cliffhanger in pizzicato', text: 'In the last seconds the strings pluck and slow down while the level drops from −10 dB to −26 dB. The movement stops unresolved, leaving the next picture, Tuileries, to continue.', basis: 'documented', precision: 'passage', evidence: 'Slowing pizzicato strings and cliffhanger ending: Philharmonia guide. Relative level −10.1 dB (0:20), −18.6 (0:25), −26.3 (0:30); onsets per second rise to 3.4 at 0:25, then fall to 0.2 at 0:30.' },
  ],

  transitions: [
    {
      id: 'into-plucked-ending',
      title: 'The weight lifts and the walk stalls',
      from: 'Heavy statement',
      to: 'Second half and plucked ending',
      at: { t: 14 },
      span: [8, 30],
      how: '<p>After the heaviest moment near 0:10 the scoring lightens: the level eases, and in the last seconds the strings pluck more and more slowly, with the level falling about sixteen decibels in ten seconds, from 0:20 to 0:30. The Promenade does not end on a settled cadence; it is left suspended, so the walk seems to stop in front of the next picture.</p>',
      devices: ['orchestration change', 'decrescendo', 'tempo change'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Boundary at 0:14 (novelty 1.00); relative level −4.8 dB (0:10), −10.1 dB (0:20), −18.6 dB (0:25), −26.3 dB (0:30). The plucked, slowing ending and the cliffhanger are from the Philharmonia guide; the report cannot time individual pizzicato notes.',
    },
  ],
};
