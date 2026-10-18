export default {
  intro: 'Martha Goldstein plays an Érard piano dated 1851 in this recording from the Al Goldstein collection. The instrument’s date is documented; the session date is not, so this is an instrument comparison rather than a dated nineteenth-century performance.',
  question: 'How does the old Érard carry the étude’s contrasting touches?',
  sections: [
    { t: 0, label: 'Opening span', m: 'A' },
    { t: 58, label: 'Central continuation', m: 'B' },
    { t: 126, label: 'Later contrast', m: 'C' },
    { t: 164, label: 'Closing gestures', m: 'Coda' },
  ],
  cues: [
    { t: 0, kind: 'world', title: 'The instrument, not the session', text: 'The source identifies an Érard piano from 1851 and Martha Goldstein as performer. It gives no recording date: the age of the instrument must not be mistaken for the age of the performance.', basis: 'documented', precision: 'passage', evidence: 'Commons recording description: “Martha Goldstein, Piano (Erard, 1851)”; the Date field is blank.' },
    { t: 59, kind: 'listen', title: 'Weight after a quieter passage', text: 'The central continuation gains weight after a quieter stretch. Compare the tone’s decay and the line between attacks with Neeman’s performance, allowing for the different recording conditions.', basis: 'audio-feature', precision: 'passage', evidence: 'A 0:58 boundary follows the low 0:50–0:55 windows at −24 dB; 1:00 rises to −15.5 dB. The source establishes the instrument, not microphone conditions.' },
    { t: 130, kind: 'music', title: 'A later change of surface', text: 'The later stretch becomes more active after a quiet preparation. Follow the changing touch while keeping the melodic outline recognisable.', basis: 'audio-feature', precision: 'passage', evidence: 'The 2:06 boundary lies between −21.4 dB at 2:05 and a stronger 2:15 window; detected attacks rise from 1.4 at 2:00 to 3.8 at 2:10.' },
    { t: 168, kind: 'listen', title: 'A final measured crest', text: 'The closing gestures reach the strongest recorded window of this performance before the sound falls away. Compare the spacing around that crest rather than judging the instrument only by its brightest notes.', basis: 'audio-feature', precision: 'passage', evidence: 'The largest boundary is 2:44, followed by the loudest relative-level window at 2:50, −10.7 dB. The level falls to −27.7 at 3:00 and −73.4 at 3:05.' },
  ],
  "id": "chopin-etude-op25-5-goldstein",
  "composer": "chopin",
  "order": 114,
  "concert": false,
  "work": "Étude in E minor, Op. 25 No. 5",
  "movement": "Vivace",
  "year": "Published 1837",
  "key": "E minor",
  "forces": "Piano (Érard, 1851)",
  "performers": "Martha Goldstein, piano",
  "recorded": "",
  "license": "CC BY-SA 2.0",
  "source": {
    "file": "File:Frederic Chopin - Opus 25 - Twelve Grand Etudes - e minor.ogg"
  }
};
