export default {
  intro: 'Paderewski recorded this étude in Camden on 4 May 1923. Compare its successive surges with Neeman’s modern performance; the transfer’s surface noise and equalisation are not measures of piano tone.',
  question: 'How does Paderewski distribute the strongest accents within the étude?',
  sections: [
    { t: 0, label: 'Opening span', m: 'A' },
    { t: 42, label: 'Central contrast', m: 'B' },
    { t: 56, label: 'Renewed weight', m: 'C' },
    { t: 116, label: 'Ending and transfer tail', m: 'Coda' },
  ],
  cues: [
    { t: 0, kind: 'world', title: 'Victor, May 1923', text: 'The disc is Victor 917-B. DAHR identifies the issued recording as matrix B-27918, take 1, made in Camden on 4 May 1923; the second take was destroyed.', basis: 'documented', precision: 'passage', evidence: 'DAHR matrix B-27918 and Victor 917 catalogue pages; Internet Archive metadata identifies the transferred catalogue side.' },
    { t: 42, kind: 'listen', title: 'Activity through a contrast', text: 'This central stretch changes its recorded balance while the attacks continue. Follow the piano phrases through the surface noise rather than mistaking the noise for rapid notes.', basis: 'audio-feature', precision: 'passage', evidence: 'The strongest report boundary is 0:42; detected attacks remain around 4.4–5 per second at 0:40–0:50. The report does not separate all surface noise from musical attacks.' },
    { t: 76, kind: 'music', title: 'The later broad crest', text: 'A later stretch carries the strongest recorded weight of this transfer, then recedes. Compare where the crest falls in the phrase rather than comparing the two recordings’ volume settings.', basis: 'audio-feature', precision: 'passage', evidence: 'The highest within-recording windows are 1:15 and 1:20, −6.5 and −6.7 dB; relative level falls to −12.1 by 1:25.' },
    { t: 112, kind: 'listen', title: 'Music and surface remain', text: 'The end becomes quieter before the transfer itself finishes. Listen for the distinction between the last piano gestures and the remaining disc noise.', basis: 'audio-feature', precision: 'passage', evidence: 'The report falls from −14.6 dB at 1:45 to −24.5 at 2:00 and −44.9 at 2:05; persistent detected attacks do not establish new piano notes.' },
  ],
  "id": "chopin-etude-op25-6-paderewski",
  "composer": "chopin",
  "order": 103,
  "concert": false,
  "work": "Étude in G♯ minor, Op. 25 No. 6 (“Thirds”)",
  "movement": "",
  "year": "Published 1837",
  "key": "G♯ minor",
  "forces": "Piano",
  "performers": "Ignacy Jan Paderewski, piano",
  "recorded": "4 May 1923",
  "source": {
    "archive": {
      "item": "78_etude-in-g-sharp-minor_ignace-jan-paderewski-chopin_gbia0183841b",
      "file": "Etude in G Sharp Minor - Ignace Jan Paderewski.mp3"
    },
    "rights": {
      "basis": "us-published-before-cutoff",
      "published": 1923,
      "evidence": "Victor 917-B (matrix B-27918, take 1), issued 1923: https://adp.library.ucsb.edu/index.php/objects/detail/87088 . Internet Archive metadata inspected 17 October 2026: no licenceurl or non-commercial restriction."
    }
  }
};
