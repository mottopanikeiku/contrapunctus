export default {
  intro: 'Stanford Robinson’s National Symphony Orchestra of London recorded this side at Kingsway Hall on 18 January 1945. Decca released it in September; the player preserves the first side without joining the continuation.',
  question: 'How does Robinson pace the waltz after the introductory cadenza?',
  sections: [
    { t: 0, label: 'Introduction and cadenza', m: 'Intro' },
    { t: 72, label: 'Principal waltz passage', m: 'A' },
    { t: 108, label: 'Fuller answering span', m: 'B' },
    { t: 136, label: 'Continuing waltz', m: 'C' },
  ],
  cues: [
    { t: 0, kind: 'world', title: 'Recording and release differ', text: 'The source gives 18 January 1945 for the Kingsway Hall session and September 1945 for the first release. These are different events: neither is the date this digital file was uploaded.', basis: 'documented', precision: 'passage', evidence: 'Commons identifies the session, first release, Decca K1144 and matrix AR9079-2.' },
    { t: 74, kind: 'listen', title: 'After the cadenza', text: 'The early waltz emerges from a quieter region after the introduction. Compare its melodic span with Stokowski’s at the mapped musical position, not at the same elapsed second.', basis: 'audio-feature', precision: 'passage', evidence: 'The 1:12 boundary follows the low 1:10 window; the shared alignment begins at 72 seconds in this file. Existing score-informed notes establish the principal-waltz function.' },
    { t: 108, kind: 'music', title: 'The answering phrase gains weight', text: 'A fuller span follows the relatively light start of the waltz. Listen for the long melodic shape continuing across the regular accompaniment.', basis: 'audio-feature', precision: 'passage', evidence: 'The strong 1:48 boundary follows a rise from −18.1 dB at 1:35 to −10.0 at 1:45; the following windows remain stronger.' },
    { t: 168, kind: 'listen', title: 'Later music on the side', text: 'The source side continues beyond the common window and reaches stronger late passages. It ends before the complete waltz does; do not read the shorter file as evidence of a faster whole performance.', basis: 'audio-feature', precision: 'passage', evidence: 'The highest windows fall at 2:45–3:10. The comparison ends at 158 seconds here; the source is the first side of a two-sided recording.' },
  ],
  "id": "tchaikovsky-waltz-flowers-robinson-side1",
  "composer": "tchaikovsky",
  "order": 112,
  "concert": false,
  "work": "Nutcracker Suite — Waltz of the Flowers",
  "movement": "Opening disc side only",
  "year": "1891–92",
  "key": "D major",
  "forces": "Orchestra",
  "performers": "National Symphony Orchestra of London, Stanford Robinson",
  "recorded": "18 January 1945",
  "source": {
    "file": "File:PDP-CH - National Symphony Orchestra of London - Stanford Robinson, conductor - The Nutcracker Suite, Op. 71 - Waltz of the Flowers - Tchaikovsky - Decca-k1144-ar9079.flac"
  }
};
