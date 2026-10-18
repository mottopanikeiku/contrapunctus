export default {
  intro: 'This is the complete first side of Rachmaninoff’s 1919 Edison recording, not the whole rhapsody. The original source identifies Edison Diamond Disc 82169-R; later music lies on other sides.',
  question: 'How does Rachmaninoff distribute weight and space within the opening disc side?',
  sections: [
    { t: 0, label: 'Opening disc-side passage', m: 'A' },
    { t: 62, label: 'Quieter continuation', m: 'B' },
    { t: 138, label: 'Renewed weight', m: 'C' },
    { t: 182, label: 'Later side passage', m: 'D' },
  ],
  cues: [
    { t: 0, kind: 'world', title: 'One Edison side only', text: 'The source identifies Rachmaninoff, Edison Diamond Disc 82169-R and “part I”. This player preserves that side as one stream; it does not splice together the remainder of the rhapsody.', basis: 'documented', precision: 'passage', evidence: 'Commons transcribes the Library of Congress source identification and dates the recording 1919. This is a carrier boundary, not a claim that Liszt’s work ends here.' },
    { t: 45, kind: 'listen', title: 'Weight near the opening', text: 'The early passage contains the largest measured crest on this side. Follow the spaces between its gestures as well as their weight; this transfer’s surface noise is not part of Liszt’s piano writing.', basis: 'audio-feature', precision: 'passage', evidence: 'The report’s highest relative-level windows are 0:45–1:00, with a maximum at 0:50. This identifies the recorded contour, not acoustic piano dynamics.' },
    { t: 66, kind: 'music', title: 'A marked withdrawal', text: 'The side turns to a quieter continuation after the early crest. Compare the length of this lighter stretch with the more forceful phrases around it.', basis: 'audio-feature', precision: 'passage', evidence: 'A 1:02 novelty boundary precedes a drop from −14.2 dB at 1:00 to −28.2 at 1:05; the following passage stays relatively low.' },
    { t: 140, kind: 'listen', title: 'The sound gathers again', text: 'The recorded weight rises again across this stretch. Listen for how a renewed phrase grows from quieter activity, without assuming that stronger sound means faster playing.', basis: 'audio-feature', precision: 'passage', evidence: 'The report’s largest novelty boundary is 2:18. Relative level rises from −25.6 dB at 2:10 to −16.6 at 2:25 while detected attacks do not rise correspondingly.' },
    { t: 226, kind: 'listen', title: 'A side is not a movement', text: 'Keep the comparison confined to the shared opening passage. The later part of this stream approaches a disc-side ending, not the rhapsody’s final conclusion; whole-file durations would compare unequal stretches of music.', basis: 'documented', precision: 'passage', evidence: 'The source identifies part I only. The 249.4-second report measures this one side; no full-work duration or final cadence is claimed.' },
  ],
  "id": "liszt-rhapsody-2-rachmaninoff-side1",
  "composer": "liszt",
  "order": 105,
  "concert": false,
  "work": "Hungarian Rhapsody No. 2 in C♯ minor, S. 244/2",
  "movement": "Opening disc side only",
  "year": "Published 1851",
  "key": "C♯ minor",
  "forces": "Piano",
  "performers": "Sergei Rachmaninoff, piano",
  "recorded": "1919",
  "source": {
    "file": "File:Second Hungarian Rhapsody.ogg"
  }
};
