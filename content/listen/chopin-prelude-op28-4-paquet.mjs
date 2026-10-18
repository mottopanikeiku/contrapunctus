export default {
  "id": "chopin-prelude-op28-4-paquet",
  "composer": "chopin",
  "order": 20,
  "work": "Prelude in E minor, Op. 28 No. 4",
  "movement": "Largo",
  "year": "completed 1839",
  "key": "E minor",
  "forces": "Piano",
  "performers": "Dorian Pâquet",
  "recorded": "2019-10-21",
  "source": {
    "file": "File:Prelude op28 n4.wav"
  },
  "concert": false,
  "intro": "Dorian Pâquet’s recording, made on a Chavanne piano dated 2006, offers another way of pacing the E-minor Prelude. The note pattern is spare enough to make small differences of chord balance, release and waiting audible as questions, without assuming which pedal or touch produced them.",
  "question": "How does the space before the final chords change the ending’s weight?",
  "sections": [
    {
      "t": 0,
      "label": "A · Opening phrase",
      "m": "A"
    },
    {
      "t": 50,
      "label": "A′ · Renewed phrase",
      "m": "A′",
      "mNote": "the opening shape returns before the final withdrawal"
    },
    {
      "t": 94,
      "label": "Close · Pause and final chords",
      "m": "Coda"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Hear the moving middle",
      "text": "The repeated chordal accompaniment does not stay harmonically still. Listen between melody and bass for the small shifts that keep the opening moving despite its restrained surface.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Semitone-based construction and slow melodic motion: https://chopin.nifc.pl/en/chopin/kompozycja/197. No claim that every voice descends on every chord."
    },
    {
      "t": 17,
      "kind": "world",
      "title": "A documented modern instrument",
      "text": "The source identifies Pâquet’s piano as a Chavanne made in 2006 and dates the recording to 21 October 2019. Those facts describe the instrument and session; they do not by themselves establish an explanation for its recorded tone.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Own-work description and date on https://commons.wikimedia.org/wiki/File:Prelude_op28_n4.wav"
    },
    {
      "t": 34,
      "kind": "listen",
      "title": "Keep the melody separate",
      "text": "The upper line can remain almost stationary while the notes beneath it alter the harmony. Try to hear those as separate layers rather than treating each chord as one undifferentiated block.",
      "basis": "general",
      "precision": "passage",
      "evidence": "Listening invitation grounded in the Prelude’s sparse texture; no particular attack or voicing decision is inferred."
    },
    {
      "t": 51,
      "kind": "life",
      "title": "Completion in Mallorca",
      "text": "The Op. 28 collection was completed in Mallorca in the winter of 1838–39, using some material conceived earlier. The short E-minor piece belongs to that larger project, not to a securely documented scene or anecdote of its own.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Composition history and earlier material: https://chopin.nifc.pl/en/chopin/gatunki/12_preludia"
    },
    {
      "t": 68,
      "kind": "music",
      "title": "Renewal without a new tune",
      "text": "The later phrase renews the opening’s basic shape rather than supplying a contrasting middle section. Listen for the changes in harmonic pressure and phrase weight that distinguish the second statement.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Approximate phrase renewal around0:50, near a report boundary; later activity persists through1:10. Semitone-based phrase design: https://chopin.nifc.pl/en/chopin/kompozycja/197"
    },
    {
      "t": 85,
      "kind": "world",
      "title": "Twenty-four different keys",
      "text": "Chopin’s collection moves through pairs of major and relative minor keys around the circle of fifths. The E-minor Prelude follows G major; its identity is one part of a deliberately ordered collection.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Key ordering described by NIFC: https://chopin.nifc.pl/en/chopin/gatunki/12_preludia. This explains the collection, not a musical event at1:25."
    },
    {
      "t": 104,
      "kind": "listen",
      "title": "Wait through the pause",
      "text": "The closing region contains a pronounced gap before the final sound. Listen to how that waiting separates the last chords from the earlier recurring pulse; duration alone does not reveal the pianist’s intention.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "Report shows a very low level around1:35 and renewed sounding activity around1:40–1:45. The guide marks the closing region at1:34, not a beat-exact pause boundary."
    }
  ],
  "transitions": [
    {
      "id": "into-renewed-phrase",
      "title": "The opening shape is taken up again",
      "from": "A · Opening phrase",
      "to": "A′ · Renewed phrase",
      "at": {
        "t": 50
      },
      "span": [
        40,
        62
      ],
      "how": "<p>The initial phrase gives way to a renewal of its melodic outline. Repeating the contour does not repeat the whole expressive situation: the inner voices and harmonic continuation intensify the later phrase. Listen for continuity in the melody alongside changes in the support beneath it.</p>",
      "devices": [
        "motivic link",
        "texture change"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Approximate0:50 report boundary supports the phrase-region marker; musical construction: https://chopin.nifc.pl/en/chopin/kompozycja/197"
    },
    {
      "id": "into-final-space",
      "title": "The recurring pulse yields to a pause",
      "from": "A′ · Renewed phrase",
      "to": "Close · Pause and final chords",
      "at": {
        "t": 94
      },
      "span": [
        84,
        106
      ],
      "how": "<p>The later phrase withdraws until the recurring accompaniment gives way to a gap. The final chords arrive after this interruption, so the cadence depends on waiting as well as on harmonic resolution.</p>",
      "devices": [
        "decrescendo",
        "general pause",
        "fermata"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Report’s 1:35 window lies near the noise floor, with renewed sound in the 1:40–1:45 windows; 1:34 is an approximate passage boundary. The waveform supports the gap, but cannot identify an exact release or pedal action."
    }
  ]
};
