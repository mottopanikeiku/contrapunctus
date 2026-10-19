export default {
  "id": "tchaikovsky-piano-concerto-1-andantino",
  "composer": "tchaikovsky",
  "order": 4,
  "work": "Piano Concerto No. 1 in B♭ minor, Op. 23",
  "movement": "II. Andantino semplice — Prestissimo",
  "set": {
    "id": "tchaikovsky-piano-concerto-1",
    "title": "Piano Concerto No. 1 in B♭ minor, Op. 23",
    "part": 2,
    "of": 3
  },
  "year": "1874–75",
  "source": {
    "file": "File:Tchaikovsky, Concerto No.1 in B-flat minor Op.23, II. Andantino.ogg"
  },
  "license": "CC0",
  "key": "D♭ major",
  "forces": "Piano and orchestra",
  "performers": "Musopen recording; performers uncredited",
  "recorded": "",
  "intro": "A flute sings over plucked strings, and the piano answers as gently. Inside this D♭-major slow movement, Tchaikovsky hides a fast dance built around a French song his brothers used to sing.",
  "sections": [
    { "t": 0, "label": "A · Flute over plucked strings", "m": "A", "mNote": "The D♭-major melody passes from flute to piano" },
    { "t": 184, "label": "B · Fast piano and a French song", "m": "B", "mNote": "The Prestissimo begins in F major" },
    { "t": 290, "label": "A′ · The piano brings the song back", "m": "A′", "mNote": "The opening melody returns with new piano decoration" },
    { "t": 336, "label": "Coda · A quiet D♭-major close", "m": "Coda", "mNote": "The oboe completes the tune before the final cadence" }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Flute and plucked strings",
      "text": "Plucked strings make a quiet space for the flute’s D♭-major melody. The piano takes the tune next. After the first movement’s huge opening chords, the soloist arrives here almost as another woodwind.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Second-movement opening and solo handover: https://en.wikipedia.org/wiki/Piano_Concerto_No._1_(Tchaikovsky). Tonic Chord identifies flute bars 5–12 and piano bars 13–20: https://tonic-chord.com/tchaikovsky-piano-concerto-no-1-analysis/."
    },
    {
      "t": 123,
      "kind": "life",
      "title": "Two pianos before the orchestra",
      "text": "By 2 January 1875, Tchaikovsky has completed the concerto’s two-piano arrangement. Three days later he plays the work to Nikolay Rubinstein and Nikolay Hubert. The full orchestral score still lies ahead.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Manuscript date 21 December 1874/2 January 1875; private play-through 24 December/5 January; orchestration completed 9/21 February. https://en.tchaikovsky-research.net/index.php?title=Piano_Concerto_No._1"
    },
    {
      "t": 184,
      "kind": "form",
      "title": "The piano slips into a dance",
      "text": "The Prestissimo starts in F major with quick piano writing. Soon the strings take a new tune in D major, and the pianist becomes their accompanist. A miniature scherzo has slipped into the middle of the slow movement.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Second-movement middle section, keys and scoring: https://en.wikipedia.org/wiki/Piano_Concerto_No._1_(Tchaikovsky); formal outline at https://tonic-chord.com/tchaikovsky-piano-concerto-no-1-analysis/."
    },
    {
      "t": 204,
      "kind": "world",
      "title": "The brothers’ French song",
      "text": "The fast middle borrows <i>Il faut s’amuser, danser et rire</i> — one must have fun, dance and laugh. Modest Tchaikovsky remembers singing it constantly with his brother Anatoly in the early 1870s. Their brother puts the refrain into a piano concerto.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Modest Tchaikovsky, The Life of Pyotr Ilyich Tchaikovsky, vol. 1 (1900), p. 466, quoted under Related Works. The tune is by Jean-Baptiste-Edouard Montaubry. https://en.tchaikovsky-research.net/index.php?title=Piano_Concerto_No._1"
    },
    {
      "t": 290,
      "kind": "form",
      "title": "The piano remembers the flute",
      "text": "The opening melody returns in D♭ major, now in the piano and dressed in small ornaments. The oboe continues it. The fast dance is over, and the flute’s first tune has become a conversation.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Second-movement reprise: ornamented piano theme followed by oboe, https://en.wikipedia.org/wiki/Piano_Concerto_No._1_(Tchaikovsky)."
    },
    {
      "t": 336,
      "kind": "music",
      "title": "Three pianissimos in D♭",
      "text": "The coda settles quietly in D♭ major. Its last cadence moves from G♭ major to D♭, marked <i>ppp</i>: a gentle answer to the first movement’s closing chords.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "The second movement ends ppp with a plagal cadence in D♭ major. https://en.wikipedia.org/wiki/Piano_Concerto_No._1_(Tchaikovsky)"
    }
  ],
  "transitions": [
    {
      "id": "join-1",
      "title": "An F-major chord starts running",
      "from": "A · Flute over plucked strings",
      "to": "B · Fast piano and a French song",
      "at": { "t": 184 },
      "span": [174, 199],
      "how": "<p>The piano holds a high F-major chord, pianissimo, at the end of the quiet section. The Prestissimo begins in that same key with fast solo writing. The strings then introduce the French song in D major over the piano’s accompaniment.</p>",
      "devices": ["tempo change", "texture change", "orchestration change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "High F-major chord, Prestissimo opening and D-major string tune: https://en.wikipedia.org/wiki/Piano_Concerto_No._1_(Tchaikovsky)."
    },
    {
      "id": "join-2",
      "title": "The piano returns to D♭",
      "from": "B · Fast piano and a French song",
      "to": "A′ · The piano brings the song back",
      "at": { "t": 290 },
      "span": [280, 305],
      "how": "<p>A cadenza-like piano passage ends the fast episode. The soloist brings back the opening D♭-major melody at the slower tempo, adding ornaments to the line first sung by the flute.</p>",
      "devices": ["retransition", "tempo change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Tonic Chord identifies the solo link in bars 135–145 and the D♭-major return at bar 146. https://tonic-chord.com/tchaikovsky-piano-concerto-no-1-analysis/"
    },
    {
      "id": "join-3",
      "title": "The oboe completes the tune",
      "from": "A′ · The piano brings the song back",
      "to": "Coda · A quiet D♭-major close",
      "at": { "t": 336 },
      "span": [326, 351],
      "how": "<p>The oboe continues the returning melody and resolves it in D♭ major. A brief coda follows, ending with a G♭-major chord moving to D♭, marked <i>ppp</i>.</p>",
      "devices": ["decrescendo", "plagal cadence", "orchestration change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Oboe continuation, tonic resolution and plagal close: https://en.wikipedia.org/wiki/Piano_Concerto_No._1_(Tchaikovsky)."
    }
  ]
};
