export default {
  "id": "chopin-waltz-op64-2-pachmann-1925",
  "composer": "chopin",
  "order": 90,
  "concert": false,
  "work": "Étude in F major, Op. 25 No. 3; Waltz in C♯ minor, Op. 64 No. 2",
  "movement": "HMV DB 860, side 2",
  "year": "1847",
  "key": "C♯ minor",
  "forces": "Piano",
  "performers": "Vladimir de Pachmann, piano",
  "recorded": "26 June 1925",
  "source": {
    "archive": {
      "item": "hmv-db860-chopin-nocturne-no8-op27no2-etudes-op25no3-waltz-no7-op64no2",
      "file": "HMV_DB860_Cc_6260-1.mp3"
    },
    "rights": {
      "basis": "us-published-before-cutoff",
      "published": 1925,
      "evidence": [
        "https://archive.org/stream/gramophone-1925-12/Gramophone%201925-12_djvu.txt",
        "https://gramophonecompanydiscography.com/PDF/File%20D%20-%20BB.pdf",
        "https://archive.org/details/hmv-db860-chopin-nocturne-no8-op27no2-etudes-op25no3-waltz-no7-op64no2"
      ]
    }
  },
  "intro": "Pachmann’s DB 860 side begins with the F-major Étude, Op. 25 No. 3, before the C-sharp-minor Waltz. Both pieces remain in the original file; the comparison starts at the waltz’s later entry rather than silently removing the étude. A contemporary December 1925 review establishes that this side was already published.",
  "question": "How does Pachmann compress a waltz on a shared disc side?",
  "sections": [
    {
      "t": 0,
      "label": "Étude Op. 25 No. 3",
      "m": "A"
    },
    {
      "t": 68,
      "label": "Étude continuation",
      "m": "B"
    },
    {
      "t": 117,
      "label": "Waltz begins",
      "m": "C"
    },
    {
      "t": 164,
      "label": "Waltz central span",
      "m": "D"
    },
    {
      "t": 262,
      "label": "Waltz close",
      "m": "E"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "world",
      "title": "The first piece is an étude",
      "text": "This is the complete HMV DB 860 side 2, not an isolated waltz file. Alan Kelly’s matrix discography identifies Op. 25 No. 3 followed by Op. 64 No. 2 on Cc6260-1.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "https://gramophonecompanydiscography.com/PDF/File%20D%20-%20BB.pdf"
    },
    {
      "t": 117,
      "kind": "listen",
      "title": "The waltz enters",
      "text": "The quieter end of the étude gives way to the waltz around this point. The comparison map uses absolute times in this original stream, so its opening is not at the file’s zero.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "cache/analysis/chopin-waltz-op64-2-pachmann-1925.txt: low-level region110–115 seconds; strong novelty118 seconds and C-sharp-minor region from 120 seconds Five-second level windows and two-second novelty estimates do not locate individual notes or prove a pedalling choice."
    },
    {
      "t": 164,
      "kind": "listen",
      "title": "The waltz changes colour",
      "text": "The analysis finds a change around 2:44 within the waltz. Follow the continuity of its line rather than treating the earlier étude as part of the same formal design.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "cache/analysis/chopin-waltz-op64-2-pachmann-1925.txt: novelty164 seconds; the first117 seconds belong to another work Five-second level windows and two-second novelty estimates do not locate individual notes or prove a pedalling choice."
    },
    {
      "t": 185,
      "kind": "listen",
      "title": "A later local crest",
      "text": "This is one of the side’s highest average-level windows after the waltz has begun. The louder early windows belong to the preceding étude and must not be used as the waltz’s climax.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "cache/analysis/chopin-waltz-op64-2-pachmann-1925.txt: high level185 seconds; global highest60 seconds belongs to Étude Op25/3 Five-second level windows and two-second novelty estimates do not locate individual notes or prove a pedalling choice."
    },
    {
      "t": 262,
      "kind": "listen",
      "title": "The shared side closes",
      "text": "A final measured change precedes the quiet end of the side. Keep the phrase and its remaining resonance together, but do not count the étude’s time when comparing waltz durations.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "cache/analysis/chopin-waltz-op64-2-pachmann-1925.txt: novelty262 seconds; quiet late windows265–275 seconds Five-second level windows and two-second novelty estimates do not locate individual notes or prove a pedalling choice."
    }
  ]
};
