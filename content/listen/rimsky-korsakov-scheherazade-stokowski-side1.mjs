export default {
  intro: 'Stokowski’s Philadelphia recording dates from 12 November 1934. The complete first disc side of the third movement is preserved here; only the common opening is aligned with Monteux’s complete 1942 movement.',
  question: 'How long can the opening melody breathe before the movement turns towards its dance?',
  sections: [
    { t: 0, label: 'Opening lyrical span', m: 'A' },
    { t: 74, label: 'After the early crest', m: 'B' },
    { t: 148, label: 'Later side passage', m: 'C' },
    { t: 192, label: 'Renewed weight before the side ends', m: 'D' },
  ],
  cues: [
    { t: 0, kind: 'world', title: 'Philadelphia before San Francisco', text: 'The source dates Stokowski’s session to 12 November 1934 and first release to 1935. This file is part 1 of the third movement; the later sides remain separate.', basis: 'documented', precision: 'passage', evidence: 'Commons description for HMV DB2525 / 2a84519 gives the session, release and side content.' },
    { t: 58, kind: 'listen', title: 'The early broad crest', text: 'The opening’s largest measured crest extends across several windows. Follow the long phrase through its changing weight, rather than judging its pace by the number of new attacks.', basis: 'audio-feature', precision: 'passage', evidence: 'The strongest relative-level windows are 0:50–1:05, with the highest at 1:00. This is a contour within Stokowski’s transfer, not a cross-recording loudness claim.' },
    { t: 78, kind: 'music', title: 'Less weight after the crest', text: 'The continuation loses recorded weight after the crest without becoming silent. Compare how much time the melodic line receives here when you switch to Monteux.', basis: 'audio-feature', precision: 'passage', evidence: 'The 1:14 boundary accompanies a decline from −4.9 dB at 1:00 to about −11 dB at 1:15–1:30. Switching uses the provisional common-opening map.' },
    { t: 194, kind: 'listen', title: 'Beyond the shared opening', text: 'The late part of this side gathers weight again before the side ends. The alignment deliberately stops before this stretch; no later entrance is assigned to the Monteux timeline.', basis: 'audio-feature', precision: 'passage', evidence: 'At the 3:12 boundary relative level rises from −13.9 dB at 3:00 to −6.9 at 3:20. The accepted comparison trim ends at 175 seconds.' },
  ],
  "id": "rimsky-korsakov-scheherazade-stokowski-side1",
  "composer": "rimsky-korsakov",
  "order": 108,
  "concert": false,
  "work": "Scheherazade, Op. 35 — III. The Young Prince and the Young Princess",
  "movement": "Opening disc side only",
  "year": "1888",
  "key": "G major",
  "forces": "Orchestra",
  "performers": "Philadelphia Orchestra, Leopold Stokowski",
  "recorded": "12 November 1934",
  "source": {
    "file": "File:Hmv-db2525-2a84519.ogg"
  }
};
