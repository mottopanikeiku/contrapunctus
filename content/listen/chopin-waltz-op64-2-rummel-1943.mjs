export default {
  "id": "chopin-waltz-op64-2-rummel-1943",
  "composer": "chopin",
  "order": 90,
  "concert": false,
  "work": "Waltz in C♯ minor, Op. 64 No. 2",
  "movement": "",
  "year": "1847",
  "key": "C♯ minor",
  "forces": "Piano",
  "performers": "Walter Morse Rummel, piano",
  "recorded": "18 January 1943",
  "source": {
    "file": "File:PDP-CH - Walter Morse Rummel, piano - Waltz in C-sharp minor, Op. 64, No. 2 - Chopin - Gramophone-68063-2218ge9.flac"
  },
  "intro": "Walter Morse Rummel recorded this waltz on18 January 1943; the Public Domain Project identifies its Gramophone issue and first release in the same year. The recording venue is not established. Its extended running time is a starting point for comparison, not proof that every phrase moves more slowly.",
  "question": "Where does Rummel spend the extra time?",
  "sections": [
    {
      "t": 0,
      "label": "Opening waltz",
      "m": "A"
    },
    {
      "t": 66,
      "label": "First large contrast",
      "m": "B"
    },
    {
      "t": 144,
      "label": "Central span",
      "m": "C"
    },
    {
      "t": 184,
      "label": "Late return region",
      "m": "D"
    },
    {
      "t": 220,
      "label": "Closing contrast",
      "m": "E"
    }
  ],
  "cues": [
    {
      "t": 1,
      "kind": "world",
      "title": "A dated wartime disc",
      "text": "The source identifies the18 January 1943 session and a 1943 release. It does not identify the venue, so the date should not be turned into an invented wartime scene around the pianist.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "https://commons.wikimedia.org/wiki/File:PDP-CH_-_Walter_Morse_Rummel,_piano_-_Waltz_in_C-sharp_minor,_Op._64,_No._2_-_Chopin_-_Gramophone-68063-2218ge9.flac"
    },
    {
      "t": 66,
      "kind": "listen",
      "title": "A strong early contrast",
      "text": "The analysis detects a prominent change here, followed by quieter recorded sound around 1:15. Compare the phrase’s shape with the corresponding passage, not just the total file length.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "cache/analysis/chopin-waltz-op64-2-rummel-1943.txt: novelty66 seconds; quiet window75 seconds Five-second level windows and two-second novelty estimates do not locate individual notes or prove a pedalling choice."
    },
    {
      "t": 120,
      "kind": "listen",
      "title": "The recorded crest",
      "text": "The highest five-second average level falls around 2:00. Other strong windows are widely separated, making this a series of swells rather than one steady build.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "cache/analysis/chopin-waltz-op64-2-rummel-1943.txt: highest level120 seconds; other high windows40, 30, 240, 130 seconds Five-second level windows and two-second novelty estimates do not locate individual notes or prove a pedalling choice."
    },
    {
      "t": 220,
      "kind": "listen",
      "title": "The largest late change",
      "text": "The strongest measured change occurs here, followed by another large one at 3:52. The ending must be heard as several turns, not as a single continuous slowing.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "cache/analysis/chopin-waltz-op64-2-rummel-1943.txt: maximum novelty220 seconds; second-strongest232 seconds Five-second level windows and two-second novelty estimates do not locate individual notes or prove a pedalling choice."
    }
  ]
};
