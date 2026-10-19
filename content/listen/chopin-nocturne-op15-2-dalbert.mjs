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
  "intro": "Eugen d’Albert, a pupil of Liszt, records Chopin’s F♯-major Nocturne in 1916. This is the pianist whose singing tone leaves Wilhelm Kempff remembering a hand poised over a single black key.",
  "sections": [
    { "t": 0, "label": "A · A♯ above the bass", "m": "A", "mNote": "A curling melody above bass notes and soft chords" },
    { "t": 88, "label": "B · Quick notes, hushed voice", "m": "B", "mNote": "Doppio movimento and sotto voce" },
    { "t": 124, "label": "A′ · The Larghetto song returns", "m": "A′", "mNote": "The quick figures subside before the opening upbeat returns" }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "The singing black key",
      "text": "A♯ begins the melody, with a flick up to B before the line descends. The left hand travels from a low bass note to chords near the tune. Chopin marks the opening <i>sostenuto</i>: the little notes belong to one sustained phrase.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, upbeat and bars 1–4, marked sostenuto. https://chopinscores.org/partytura/86"
    },
    {
      "t": 28,
      "kind": "life",
      "title": "Liszt’s room in Weimar",
      "text": "In 1882 d’Albert goes to Weimar to study with Liszt. By July 1884 Tchaikovsky is writing to Nadezhda von Meck about the young pianist he has heard in Moscow: “the legitimate successor of Rubinstein”.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Tchaikovsky to Nadezhda von Meck, 14/26 July 1884; the Rubinstein named is Anton. Letter and d’Albert’s Weimar studies are documented in Mark Mitchell and Allan Evans’s notes: https://arbiterrecords.org/catalog/eugen-d-albert-the-centaur-pianist/"
    },
    {
      "t": 88,
      "kind": "form",
      "title": "A murmur starts running",
      "text": "The middle doubles the motion. Inside the right hand, quick notes run beneath a dotted melody; the left hand leaps between widely spaced notes. <i>Sotto voce</i> keeps the beginning hushed before the music gathers force.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 25–32: doppio movimento and sotto voce. https://chopinscores.org/partytura/86"
    },
    {
      "t": 124,
      "kind": "form",
      "title": "The piano takes breath",
      "text": "Chopin slows the repeated figures and lets them die away. After a pause, the familiar A♯–B turn comes back in the opening tempo. There is room again for the melody’s long breaths and tiny flourishes.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 47–52: molto rallentando, smorzando, a pause and a Tempo. https://chopinscores.org/partytura/86"
    },
    {
      "t": 172,
      "kind": "world",
      "title": "Kempff watches the hand",
      "text": "In his memoir, Wilhelm Kempff remembers d’Albert’s hand hovering over an A♯. The fading note seems to him to tremble like a human voice. When the passage comes round again, Kempff hears a new sound from the same black key.",
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
      "to": "B · Quick notes, hushed voice",
      "at": { "t": 88 },
      "span": [78, 100],
      "how": "<p>The lingering A♯s at the end of the slow section lead into a C♯ bass. E♯, G♯ and B fill out a dominant seventh above it. The marking changes to <i>doppio movimento</i>, with <i>sotto voce</i> beneath the right hand: a dotted melody and quick accompanying notes now share that hand.</p>",
      "devices": ["tempo change", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 24–26. https://chopinscores.org/partytura/86"
    },
    {
      "id": "into-returning-song",
      "title": "The bass leaves a silence",
      "from": "B · Quick notes, hushed voice",
      "to": "A′ · The Larghetto song returns",
      "at": { "t": 124 },
      "span": [114, 136],
      "how": "<p>A deep C♯ supports the last repeated figures, marked <i>molto rallentando, smorzando</i>. Then the left hand stops. A pause precedes the A♯–B upbeat of the returning melody; C♯ reappears in the bass, followed by F♯ in the next bar. The first tempo is restored.</p>",
      "devices": ["decrescendo", "tempo change", "fermata", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 47–50. https://chopinscores.org/partytura/86"
    }
  ]
};
