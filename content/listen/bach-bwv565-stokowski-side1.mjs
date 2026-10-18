export default {
  intro: 'This is the first disc side of Stokowski’s 1927 orchestral transcription of Bach’s organ work. Compare its opening with Norbert Schenk’s organ performance; the remainder of the 78-rpm recording is not joined to this stream.',
  question: 'How does an orchestra redistribute the organ work’s attacks and sustained sound?',
  sections: [
    { t: 0, label: 'Opening gestures', m: 'Intro' },
    { t: 54, label: 'Renewed orchestral weight', m: 'A' },
    { t: 122, label: 'Central side passage', m: 'B' },
    { t: 192, label: 'Quieter continuation', m: 'C' },
  ],
  cues: [
    { t: 0, kind: 'world', title: 'The conductor also orchestrates', text: 'Stokowski’s transcription and its first recording date from 1927. The recording here predates Fantasia; it is not the film soundtrack.', basis: 'documented', precision: 'passage', evidence: 'LA Phil identifies the transcription and first recording in 1927; Commons dates this session 6 April 1927. The Library of Congress documents its later use in Fantasia.' },
    { t: 24, kind: 'listen', title: 'Weight follows exposed gestures', text: 'Across the opening, compare the spaces around the gestures with the fuller sound that follows. The orchestra and organ can sustain notes in different ways even when they trace the same musical outline.', basis: 'audio-feature', precision: 'passage', evidence: 'The 0:22 boundary precedes a rise from −18.7 dB at 0:15 to −8.9 at 0:25; the source identifies the orchestral medium.' },
    { t: 58, kind: 'music', title: 'A renewed surge', text: 'A quiet passage is followed by another strong surge. Follow the shape of the expansion, rather than treating the two recordings’ playback levels as equivalent dynamics.', basis: 'audio-feature', precision: 'passage', evidence: 'A 0:54 boundary follows low windows at 0:40–0:50 and leads to −5.3 dB at 1:00, one of this transfer’s highest windows.' },
    { t: 174, kind: 'listen', title: 'The later crest approaches', text: 'The later passage grows towards the largest measured crest on this side. The comparison follows the opening only; it does not use the short side’s duration as a complete-work performance time.', basis: 'audio-feature', precision: 'passage', evidence: 'The highest relative-level window is 3:00 at −5.2 dB. The common passage ends at 180 seconds, before the later side continuation.' },
    { t: 194, kind: 'music', title: 'A quieter continuation', text: 'After the crest, the recording becomes markedly quieter. The side continues, but the automatic comparison no longer assigns this later passage to the organ performance.', basis: 'audio-feature', precision: 'passage', evidence: 'The 3:12 boundary lies in the fall from −7.5 dB at 3:05 to −25.1 at 3:10; the map ends before this region.' },
  ],
  "id": "bach-bwv565-stokowski-side1",
  "composer": "bach",
  "order": 109,
  "concert": false,
  "work": "Toccata and Fugue in D minor, BWV 565",
  "movement": "Opening disc side only",
  "year": "",
  "key": "D minor",
  "forces": "Orchestra",
  "performers": "Philadelphia Orchestra, Leopold Stokowski (Stokowski’s own orchestration)",
  "recorded": "6 April 1927",
  "source": {
    "file": "File:PDP-CH - Philadelphia Orchestra, Leopold Stokowski - Toccata and Fugue in D minor, BWV 565 - Bach - Hmv-d1428-5-0761.flac"
  }
};
