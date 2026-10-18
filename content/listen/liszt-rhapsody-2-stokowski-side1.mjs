export default {
  intro: 'Philadelphia plays the first side of an orchestral Hungarian Rhapsody, recorded in 1936 and first released in July 1937. Commons attributes the arrangement to Karl Müller-Berghaus; the piano catalogue number does not make it the piano version.',
  question: 'What happens to the opening rhetoric when an orchestra replaces one piano?',
  sections: [
    { t: 0, label: 'Opening orchestral span', m: 'A' },
    { t: 90, label: 'Quieter continuation', m: 'B' },
    { t: 154, label: 'Later side passage', m: 'C' },
    { t: 202, label: 'Renewed weight', m: 'D' },
  ],
  cues: [
    { t: 0, kind: 'world', title: 'An arrangement on two sides', text: 'The source identifies the Philadelphia Orchestra, Stokowski and Müller-Berghaus’s arrangement. This stream is part 1 only; it does not combine the two HMV sides.', basis: 'documented', precision: 'passage', evidence: 'Commons gives the performers, arranger and Part 1; filename identifies HMV DB3086 / 2a03100.' },
    { t: 72, kind: 'listen', title: 'A sustained early crest', text: 'The opening grows into a broad area of strong recorded weight. Compare sustained orchestral tone with Rachmaninoff’s separately struck piano gestures, allowing for the different recording media.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level stays high from 0:55 to 1:25, including −10.1 dB at 1:15. The source establishes orchestra versus piano; no individual instrumental assignment is inferred.' },
    { t: 92, kind: 'music', title: 'The weight falls away', text: 'This quieter continuation follows a substantial reduction in recorded level. Follow the phrase across the withdrawal instead of assuming that spaces between attacks have the same function as on a piano.', basis: 'audio-feature', precision: 'passage', evidence: 'The 1:30 boundary accompanies a fall from −10.9 dB at 1:25 to −24.5 at 1:30, remaining low through 1:40.' },
    { t: 204, kind: 'listen', title: 'A later renewed surge', text: 'Later on the side, the sound gathers weight after a low stretch. The comparison map stops earlier: this passage is heard as part of the source side, not treated as the same moment in all versions.', basis: 'audio-feature', precision: 'passage', evidence: 'The 3:22 boundary lies between low windows at 3:10–3:15 and a rise to −14.8 dB at 3:25. The comparison is restricted to the common opening.' },
  ],
  "id": "liszt-rhapsody-2-stokowski-side1",
  "composer": "liszt",
  "order": 106,
  "concert": false,
  "work": "Hungarian Rhapsody No. 2 in C♯ minor, S. 244/2",
  "movement": "Opening disc side only",
  "year": "Published 1851",
  "key": "",
  "forces": "Orchestra; arrangement attributed to Karl Müller-Berghaus",
  "performers": "Philadelphia Orchestra, Leopold Stokowski (arr. Müller-Berghaus)",
  "recorded": "1936",
  "source": {
    "file": "File:PDP-CH - Philadelphia Orchestra - Stokowski - Hungarian Rhapsody No. 2 in C-sharp minor, S 244-2 - Liszt - Hmv-db3086-2a03100.flac"
  }
};
