export default {
  "id": "chopin-nocturne-op15-2-dalbert",
  "composer": "chopin",
  "order": 30,
  "work": "Nocturne in F♯ major, Op. 15 No. 2",
  "movement": "Larghetto",
  "year": "1830–33",
  "key": "F♯ major",
  "forces": "Piano",
  "performers": "Eugen d’Albert",
  "recorded": "1916",
  "source": {
    "archive": {
      "item": "02-eugen-d-albert-syposium-1146",
      "file": "10 - Eugen d'Albert - Nocturne in Fis-Dur op.15 No.2 (Chopin) Gram. 045678, Mx. 1120 m (1916).mp3"
    },
    "rights": {
      "basis": "eu-published-before-1963",
      "published": 1916,
      "evidence": [
        "https://archive.org/download/02-eugen-d-albert-syposium-1146/D%27Albert%20tracks.jpg",
        "https://archive.org/metadata/02-eugen-d-albert-syposium-1146"
      ]
    }
  },
  "concert": false,
  "intro": "Eugen d’Albert, a pupil of Liszt, recorded Chopin’s Nocturne in F♯ major, Op. 15 No. 2 (Larghetto), in 1916. Wilhelm Kempff remembered d’Albert’s singing tone and a hand poised over a single black key.",
  "sections": [
    { "t": 0, "label": "A · A♯ above the bass", "m": "A", "mNote": "A curling melody above bass notes and soft chords" },
    { "t": 88, "label": "B · Doppio movimento, sotto voce", "m": "B", "mNote": "Doppio movimento and sotto voce." },
    { "t": 124, "label": "A′ · Larghetto theme, F♯ major", "m": "A′", "mNote": "The quick figures stop before the opening upbeat comes back." }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Opening melody, bars 1–4",
      "text": "The melody begins on A♯ and rises briefly to B before descending. The left hand moves from a low bass note to chords near the tune. Chopin marks the opening <i>sostenuto</i>.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, upbeat and bars 1–4, marked sostenuto. https://chopinscores.org/partytura/86"
    },
    {
      "t": 28,
      "kind": "life",
      "title": "D’Albert in Weimar, 1882",
      "text": "In 1882 d’Albert went to Weimar to study with Liszt. In a letter of 14/26 July 1884 to Nadezhda von Meck, Tchaikovsky described the young pianist, whom he had heard in Moscow, as “the legitimate successor of Rubinstein”, meaning Anton Rubinstein.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Tchaikovsky to Nadezhda von Meck, 14/26 July 1884; the Rubinstein named is Anton. Letter and d’Albert’s Weimar studies are documented in Mark Mitchell and Allan Evans’s notes: https://arbiterrecords.org/catalog/eugen-d-albert-the-centaur-pianist/"
    },
    {
      "t": 88,
      "kind": "form",
      "title": "Middle section, doppio movimento",
      "text": "The middle section doubles the tempo. Inside the right hand, quick notes run beneath a dotted melody, and the left hand leaps between widely spaced notes. The section opens <i>sotto voce</i> and then grows louder.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 25–32: doppio movimento and sotto voce. https://chopinscores.org/partytura/86"
    },
    {
      "t": 124,
      "kind": "form",
      "title": "Return to the opening tempo",
      "text": "In bars 47–52 the repeated figures slow and fade, marked molto rallentando and smorzando. After a pause, the A♯–B turn returns a tempo.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 47–52: molto rallentando, smorzando, a pause and a Tempo. https://chopinscores.org/partytura/86"
    },
    {
      "t": 172,
      "kind": "world",
      "title": "Kempff on d’Albert’s playing",
      "text": "In his memoir <i>Unter dem Zimbelstern</i>, Wilhelm Kempff recalled d’Albert’s hand hovering over an A♯. To Kempff the fading note trembled like a human voice. When the passage returned, he heard a new sound from the same black key.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Paraphrase of Wilhelm Kempff’s recollection in Unter dem Zimbelstern, reproduced beside the discussion of this nocturne by Mark Mitchell and Allan Evans: https://arbiterrecords.org/catalog/eugen-d-albert-the-centaur-pianist/"
    }
  ],
  "transitions": [
    {
      "id": "into-faster-middle",
      "title": "A new tune over C♯",
      "from": "A · A♯ above the bass",
      "to": "B · Doppio movimento, sotto voce",
      "at": { "t": 88 },
      "span": [78, 100],
      "how": "<p>The A♯s held at the end of the slow section lead into a C♯ bass. E♯, G♯ and B fill out a dominant seventh above it. The marking changes to <i>doppio movimento</i>, with <i>sotto voce</i> beneath the right hand, which now plays both a dotted melody and quick accompanying notes.</p>",
      "devices": ["tempo change", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 24–26. https://chopinscores.org/partytura/86"
    },
    {
      "id": "into-returning-song",
      "title": "The left hand stops before the reprise",
      "from": "B · Doppio movimento, sotto voce",
      "to": "A′ · Larghetto theme, F♯ major",
      "at": { "t": 124 },
      "span": [114, 136],
      "how": "<p>A deep C♯ in the bass supports the last repeated figures, marked <i>molto rallentando, smorzando</i>. The left hand then stops. After a pause comes the A♯–B upbeat of the returning melody. C♯ returns in the bass, and F♯ follows in the next bar. The first tempo is restored.</p>",
      "devices": ["decrescendo", "tempo change", "fermata", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 47–50. https://chopinscores.org/partytura/86"
    }
  ]
};
