export default {
  "id": "beethoven-5-first-nikisch-1913",
  "composer": "beethoven",
  "order": 90,
  "concert": false,
  "work": "Symphony No. 5 in C minor, Op. 67",
  "movement": "I. Allegro con brio",
  "year": "1804–08",
  "key": "C minor",
  "forces": "Orchestra",
  "performers": "Berlin Philharmonic Orchestra, Arthur Nikisch",
  "recorded": "10 November 1913",
  "source": {
    "archive": {
      "item": "Beethoven_Sinf5-1_BPhO-Nikisch_EQ",
      "file": "nikisch_beethovensymphony5mvt1_eq.mp3"
    },
    "rights": {
      "basis": "us-published-before-cutoff",
      "published": 1914,
      "evidence": [
        "https://journal.sciencemuseum.ac.uk/article/acoustic-recording/"
      ]
    }
  },
  "intro": "Nikisch’s Berlin Philharmonic recorded the Fifth acoustically in November 1913. Archival research documents Stroh violins reinforcing conventional strings and an unusually slow first movement with its exposition repeat omitted. Those practical recording decisions matter when this transfer is compared with a modern concert performance.",
  "question": "How do breadth and acoustic balance work together?",
  "sections": [
    {
      "t": 0,
      "label": "Opening motto",
      "m": "A"
    },
    {
      "t": 56,
      "label": "A new recorded span",
      "m": "B"
    },
    {
      "t": 104,
      "label": "Beyond the unrepeated exposition",
      "m": "C"
    },
    {
      "t": 182,
      "label": "Central turning region",
      "m": "D"
    },
    {
      "t": 294,
      "label": "Late continuation",
      "m": "E"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "world",
      "title": "Not a concert balance",
      "text": "The players had to project into a recording horn. Stroh violins reinforced ordinary strings; this documented session should not be described by the generic story that acoustic orchestras always replaced basses with tubas.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "https://journal.sciencemuseum.ac.uk/article/acoustic-recording/"
    },
    {
      "t": 50,
      "kind": "listen",
      "title": "An early level crest",
      "text": "This transfer’s highest five-second level window falls surprisingly early. Compare the insistence of this stretch with the later returns, remembering that a horn and the transfer process shape the balance.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "cache/analysis/beethoven-5-first-nikisch-1913.txt: highest five-second level window50 seconds Five-second level windows and two-second novelty estimates do not locate individual notes or prove a pedalling choice."
    },
    {
      "t": 104,
      "kind": "world",
      "title": "The repeat is omitted",
      "text": "Nikisch did not repeat the exposition in this recording. A shorter file therefore does not by itself mean a faster performance; the comparison map uses the modern reference’s second exposition and continuation.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "https://journal.sciencemuseum.ac.uk/article/acoustic-recording/"
    },
    {
      "t": 182,
      "kind": "listen",
      "title": "A strong central change",
      "text": "The analysis marks its strongest change around this point. Follow the phrase across the change rather than treating the timestamp as an exact score alignment.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "cache/analysis/beethoven-5-first-nikisch-1913.txt: largest novelty peak182 seconds Five-second level windows and two-second novelty estimates do not locate individual notes or prove a pedalling choice."
    }
  ]
};
