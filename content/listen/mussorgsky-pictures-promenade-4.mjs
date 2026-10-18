// Source files and recording credit: see content/dossiers/mussorgsky-pictures-promenade-4.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide and the LA Phil note.
// Metre: Lamm's piano text, Mutopia Project (promenade-4.ly).
export default {
  id: 'mussorgsky-pictures-promenade-4',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'Promenade — Tranquillo',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 8, of: 15 },
  year: '1874',
  key: '',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - promenade - tranquillo.ogg' },
  intro: 'After the heavy ox-cart the visitor walks quietly, in woodwinds. A short swell of strings crests in the middle, then the sound thins into the next picture.',
  question: 'How does the walking theme change when it is played quietly by wind instruments?',

  sections: [
    { t: 0, label: 'Winds walk quietly', m: 'A' },
    { t: 18, label: 'Strings join; brief climax', m: 'B' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Winds, in bars of five, six, seven', text: 'In Ravel’s scoring the flutes begin, then oboes and bassoons take over the walking. The piano score’s bars run five, six and seven beats, so the stride is less even than in the first Promenade. The level stays gentle, about −14 to −18 dB.', basis: 'documented', precision: 'passage', evidence: 'Flutes, then oboes and bassoons: LA Phil note (Orrin Howard). Five-, six- and seven-beat bars: Lamm’s score (Mutopia, promenade-4.ly). Relative level −13.9, −17.6, −13.4 and −13.1 dB at 0:00, 0:05, 0:10 and 0:15.' },
    { t: 18, kind: 'form', title: 'Strings swell to a short peak', text: 'At about 0:18 the sound grows: blustery strings join the delicate woodwinds, and the level peaks around −5 dB between 0:20 and 0:30, the loudest stretch of the movement. The harmony settles on A.', basis: 'audio-feature', precision: 'passage', evidence: 'Strongest boundary at 0:18 (novelty 1.00); relative level −13.1 dB (0:15), −6.2, −5.3 and −7.4 dB at 0:20, 0:25 and 0:30, the loudest windows; local key reads A minor from 0:15 (confirmation only). Blustery strings added to the woodwinds: Philharmonia guide.' },
    { t: 33, kind: 'listen', title: 'A light, quick close', text: 'The level falls by about fourteen decibels at 0:35 and the attacks pick up again, over three a second, at a much quieter level. The Promenade thins into small, quick figures that lead directly into the next picture.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level −7.4 dB (0:30), −21.3 (0:35), −23.2 (0:40); onsets per second 1.0 (0:30), 3.4 (0:35). That the Promenade leads into the next movement: Philharmonia guide (“before leading us into the next movement”).' },
  ],

  transitions: [
    {
      id: 'into-brief-climax',
      title: 'Strings enter and the walk swells',
      from: 'Winds walk quietly',
      to: 'Strings join; brief climax',
      at: { t: 18 },
      span: [10, 30],
      how: '<p>The woodwind walk reaches a point of rest, then blustery strings join and the sound grows to its short peak between 0:20 and 0:30. The pulse is still the unequal walk, but the colour turns from delicate winds to a fuller blend and the music moves towards A. The crest is brief: the movement is a quiet interlude, not a statement of weight.</p>',
      devices: ['orchestration change', 'crescendo build'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Strongest boundary at 0:18 (novelty 1.00); relative level −13.1 dB (0:15) to −6.2 dB (0:20) and −5.3 dB (0:25); local key estimate A minor from 0:15, used as confirmation only. Strings added to woodwinds: Philharmonia guide.',
    },
  ],
};
