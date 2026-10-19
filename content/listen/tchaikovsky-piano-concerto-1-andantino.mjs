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
  "intro": "This is the second movement of Tchaikovsky’s Piano Concerto No. 1 in B♭ minor, Op. 23, in D♭ major; the flute plays the theme over plucked strings, and the piano follows. The fast central section is built on a French song that Tchaikovsky’s brothers used to sing.",
  "sections": [
    { "t": 0, "label": "A · Flute melody, pizzicato strings, D♭ major", "m": "A", "mNote": "The D♭-major melody passes from flute to piano." },
    { "t": 184, "label": "B · Prestissimo, piano and French song", "m": "B", "mNote": "The Prestissimo begins in F major." },
    { "t": 290, "label": "A′ · Opening melody returns, piano", "m": "A′", "mNote": "The opening melody returns with new decoration in the piano." },
    { "t": 336, "label": "Coda · D♭ major, final cadence", "m": "Coda", "mNote": "The oboe completes the tune before the final cadence." }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Flute and plucked strings",
      "text": "Over pizzicato strings, the flute plays the D♭-major melody in bars 5–12. The piano takes over the tune in bars 13–20.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Second-movement opening and solo handover: https://en.wikipedia.org/wiki/Piano_Concerto_No._1_(Tchaikovsky). Tonic Chord identifies flute bars 5–12 and piano bars 13–20: https://tonic-chord.com/tchaikovsky-piano-concerto-no-1-analysis/."
    },
    {
      "t": 123,
      "kind": "life",
      "title": "Two-piano arrangement, January 1875",
      "text": "Tchaikovsky had completed the concerto’s two-piano arrangement by 2 January 1875. Three days later he played the work to Nikolay Rubinstein and Nikolay Hubert. He finished the orchestration on 21 February.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Manuscript date 21 December 1874/2 January 1875; private play-through 24 December/5 January; orchestration completed 9/21 February. https://en.tchaikovsky-research.net/index.php?title=Piano_Concerto_No._1"
    },
    {
      "t": 184,
      "kind": "form",
      "title": "Prestissimo middle section",
      "text": "The Prestissimo, a short scherzo in the middle of the slow movement, opens in F major with fast piano writing. The strings then take up a new tune in D major. The piano accompanies them.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Second-movement middle section, keys and scoring: https://en.wikipedia.org/wiki/Piano_Concerto_No._1_(Tchaikovsky); formal outline at https://tonic-chord.com/tchaikovsky-piano-concerto-no-1-analysis/."
    },
    {
      "t": 204,
      "kind": "world",
      "title": "French song in the fast middle section",
      "text": "The fast middle section borrows <i>Il faut s’amuser, danser et rire</i> (“one must have fun, dance and laugh”), a tune by Jean-Baptiste-Edouard Montaubry. Modest Tchaikovsky recalled singing it constantly with his brother Anatoly in the early 1870s. Pyotr Ilyich Tchaikovsky put the refrain into his Piano Concerto No. 1.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Modest Tchaikovsky, The Life of Pyotr Ilyich Tchaikovsky, vol. 1 (1900), p. 466, quoted under Related Works. The tune is by Jean-Baptiste-Edouard Montaubry. https://en.tchaikovsky-research.net/index.php?title=Piano_Concerto_No._1"
    },
    {
      "t": 290,
      "kind": "form",
      "title": "Reprise of the opening melody",
      "text": "After the fast dance, the opening melody returns in D♭ major. The piano plays it with small ornaments, and the oboe continues it.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Second-movement reprise: ornamented piano theme followed by oboe, https://en.wikipedia.org/wiki/Piano_Concerto_No._1_(Tchaikovsky)."
    },
    {
      "t": 336,
      "kind": "music",
      "title": "Coda in D♭ major",
      "text": "The coda is in D♭ major. Its last cadence is plagal, moving from G♭ major to D♭, and is marked <i>ppp</i>.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "The second movement ends ppp with a plagal cadence in D♭ major. https://en.wikipedia.org/wiki/Piano_Concerto_No._1_(Tchaikovsky)"
    }
  ],
  "transitions": [
    {
      "id": "join-1",
      "title": "From Andantino to Prestissimo in F major",
      "from": "A · Flute melody, pizzicato strings, D♭ major",
      "to": "B · Prestissimo, piano and French song",
      "at": { "t": 184 },
      "span": [174, 199],
      "how": "<p>At the end of the Andantino the piano holds a high F-major chord, pianissimo. The Prestissimo begins in the same key with fast solo writing for the piano. The strings then play the French song in D major, and the piano accompanies them.</p>",
      "devices": ["tempo change", "texture change", "orchestration change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "High F-major chord, Prestissimo opening and D-major string tune: https://en.wikipedia.org/wiki/Piano_Concerto_No._1_(Tchaikovsky)."
    },
    {
      "id": "join-2",
      "title": "The piano returns to D♭",
      "from": "B · Prestissimo, piano and French song",
      "to": "A′ · Opening melody returns, piano",
      "at": { "t": 290 },
      "span": [280, 305],
      "how": "<p>A cadenza-like piano passage in bars 135–145 ends the fast episode. At bar 146 the soloist plays the opening D♭-major melody again at the slower tempo and adds ornaments to the line the flute played at the start.</p>",
      "devices": ["retransition", "tempo change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Tonic Chord identifies the solo link in bars 135–145 and the D♭-major return at bar 146. https://tonic-chord.com/tchaikovsky-piano-concerto-no-1-analysis/"
    },
    {
      "id": "join-3",
      "title": "Oboe continuation and plagal close",
      "from": "A′ · Opening melody returns, piano",
      "to": "Coda · D♭ major, final cadence",
      "at": { "t": 336 },
      "span": [326, 351],
      "how": "<p>The oboe continues the returning melody and resolves it in D♭ major. A brief coda follows and ends on a G♭-major chord moving to D♭, marked <i>ppp</i>.</p>",
      "devices": ["decrescendo", "plagal cadence", "orchestration change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Oboe continuation, tonic resolution and plagal close: https://en.wikipedia.org/wiki/Piano_Concerto_No._1_(Tchaikovsky)."
    }
  ]
};
