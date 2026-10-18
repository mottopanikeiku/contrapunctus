export default {
  intro: 'Rachmaninoff recorded this waltz for Victor in 1923. The transfer includes several seconds of silence after the music, so its two-minute file length is not the playing time.',
  question: 'How does Rachmaninoff separate the running figures from the broader middle?',
  sections: [
    { t: 0, label: 'Opening running figures', m: 'A' },
    { t: 36, label: 'Less active middle', m: 'B' },
    { t: 72, label: 'Running figures resume', m: 'A′', mNote: 'denser attacks return after the quieter middle' },
    { t: 110, label: 'Final decay and transfer silence', m: 'Coda' },
  ],
  cues: [
    { t: 0, kind: 'listen', title: 'A pianist on shellac', text: 'Rachmaninoff plays a Steinway grand in this source attribution. Listen to the spacing of phrases rather than treating the restricted recorded tone as the full sound of his instrument.', basis: 'documented', precision: 'passage', evidence: 'Commons names the Steinway and dates the recording 5 April 1923; DAHR matrix B-24192 lists that session and the issued take 5. No particular piano timbre is inferred from the analysis.' },
    { t: 36, kind: 'listen', title: 'The surface leaves more space', text: 'Across this quieter stretch, the rapid surface gives way to more widely spaced attacks. Compare the melodic line with the accompaniment instead of assuming that fewer notes must mean a slower underlying waltz beat.', basis: 'audio-feature', precision: 'passage', evidence: 'The report marks a boundary at 0:36: detected attacks fall from 6–7 per second in the opening to roughly 4–5 at 0:35–1:05. The estimate describes activity, not beat tempo.' },
    { t: 76, kind: 'music', title: 'The running surface returns', text: 'The later span regains the closely spaced attacks of the opening and grows in recorded weight. Follow the phrase through its rise rather than counting every fast note as a separate accent.', basis: 'audio-feature', precision: 'passage', evidence: 'Boundaries at 1:12 and 1:18 accompany a rise from −26 dB at 1:10 to −11.7 at 1:20; detected attacks rise to 6.8–7.2 per second.' },
    { t: 106, kind: 'listen', title: 'Music ends before the file', text: 'After the final phrase, this transfer falls into silence. Compare musical endings between pianists before comparing file lengths: a digital tail is not rubato.', basis: 'audio-feature', precision: 'passage', evidence: 'The 1:50 window falls to −36.9 dB and the 1:55 and 2:00 windows are silent at −80 dB. Complete file duration is 121.5 seconds.' },
  ],
  "id": "chopin-waltz-op64-1-rachmaninoff",
  "composer": "chopin",
  "order": 100,
  "concert": false,
  "work": "Waltz in D♭ major, Op. 64 No. 1 (“Minute”)",
  "movement": "",
  "year": "1847",
  "key": "D♭ major",
  "forces": "Piano",
  "performers": "Sergei Rachmaninoff, piano (Steinway)",
  "recorded": "5 April 1923",
  "source": {
    "file": "File:Minute Waltz, by Chopin - Performed by Sergej Rachmaninoff.ogg"
  }
};
