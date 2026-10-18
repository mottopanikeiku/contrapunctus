export default {
  "id": "beethoven-5-first-odeon-1911",
  "composer": "beethoven",
  "order": 90,
  "concert": false,
  "work": "Symphony No. 5 in C minor, Op. 67",
  "movement": "I. Allegro con brio",
  "year": "1804–08",
  "key": "C minor",
  "forces": "Orchestra",
  "performers": "Odeon Grand Orchestra; conductor disputed (Friedrich Kark / Eduard Künneke)",
  "recorded": "1910–11; attribution disputed",
  "source": {
    "archive": {
      "item": "BeethovenFifth1910",
      "file": "Beethoven - Symph 5 01 Kark.mp3"
    },
    "rights": {
      "basis": "us-published-before-cutoff",
      "published": 1911,
      "evidence": [
        "https://archive.org/details/BeethovenFifth1910",
        "https://journal.sciencemuseum.ac.uk/article/acoustic-recording/"
      ]
    }
  },
  "intro": "An exceptionally early commercial Beethoven Fifth reaches us with a disputed name on the podium. The Archive follows the Kark/1910 attribution; later scholarship proposes Künneke/1911. Treat the narrow acoustic balance as part of the recording process, not a transparent record of the orchestra in a concert hall.",
  "question": "What survives of orchestral phrasing through an acoustic horn?",
  "sections": [
    {
      "t": 0,
      "label": "Opening statement",
      "m": "A"
    },
    {
      "t": 80,
      "label": "First large change",
      "m": "B"
    },
    {
      "t": 162,
      "label": "A stronger recorded break",
      "m": "C"
    },
    {
      "t": 264,
      "label": "Late movement span",
      "m": "D"
    }
  ],
  "cues": [
    {
      "t": 2,
      "kind": "world",
      "title": "A disputed conductor",
      "text": "The transfer is labelled Friedrich Kark, 1910, but the attribution is contested. Compare the actual phrasing without pretending that the conductor’s identity has been settled.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "https://journal.sciencemuseum.ac.uk/article/acoustic-recording/; https://online.ucpress.edu/jams/article/76/1/113/195288/Listen-and-Be-Amazed-Odeon-Kunneke-and-the-First"
    },
    {
      "t": 80,
      "kind": "listen",
      "title": "The early span turns",
      "text": "The analysis registers several changes close together here. Follow how the short figure gives way to the continuation; the timing is a passage marker, not a bar-line identification.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "cache/analysis/beethoven-5-first-odeon-1911.txt: novelty peaks at 80, 86 and92 seconds Five-second level windows and two-second novelty estimates do not locate individual notes or prove a pedalling choice."
    },
    {
      "t": 162,
      "kind": "listen",
      "title": "A conspicuous break",
      "text": "This is the transfer’s strongest measured change. Listen for the continuity of the phrase across it: the measurement alone cannot tell a formal turn from a change between historical disc sides.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "cache/analysis/beethoven-5-first-odeon-1911.txt: strongest novelty peak162 seconds Five-second level windows and two-second novelty estimates do not locate individual notes or prove a pedalling choice."
    },
    {
      "t": 340,
      "kind": "listen",
      "title": "Late recorded weight",
      "text": "The highest average level of this transfer occurs in this late stretch. Compare the weight of the repeated attacks with the opening, without equating recording level with orchestral loudness in the room.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "cache/analysis/beethoven-5-first-odeon-1911.txt: highest five-second level window340 seconds Five-second level windows and two-second novelty estimates do not locate individual notes or prove a pedalling choice."
    }
  ]
};
