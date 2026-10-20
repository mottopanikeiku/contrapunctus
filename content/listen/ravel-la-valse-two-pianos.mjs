// Version heard: Ravel’s own transcription for TWO pianos, not Garban’s four-hand arrangement.
// Durand, 1920, plate D. & F. 9897:
// https://s9.imslp.org/files/imglnks/usimg/c/ce/IMSLP06112-Ravel_-_La_Valse_(trans._Ravel_-_2_pianos).pdf
export default {
  id: 'ravel-la-valse-two-pianos',
  composer: 'ravel',
  order: 80,
  work: 'La valse',
  movement: 'Two-piano version',
  year: '1919–1920',
  key: 'D major',
  forces: 'Two pianos',
  performers: 'Nancy O’Doan and Neal O’Doan, pianos',
  recorded: '',
  source: { file: 'File:Ravel\'s La Valse for two pianos, M. 72a - O\'Doan & O\'Doan.ogg' },
  "intro": "Nancy and Neal O’Doan play Ravel’s own two-piano version of <i>La Valse</i>.",
  "sections": [
    { "t": 0, "label": "Intro · Low bass figures, waltz fragments", "m": "Intro", "mNote": "Bass figures move under fragments of waltz melody." },
    { "t": 72, "label": "A · Waltz themes over three-beat accompaniment", "m": "A", "mNote": "Longer melodies enter over the three-beat accompaniment." },
    { "t": 348, "label": "Dev · Earlier waltz themes in fragments", "m": "Dev", "mNote": "Earlier waltz themes return in shorter phrases." },
    { "t": 456, "label": "Dev · Accented chords over waltz accompaniment", "m": "Dev", "mNote": "Accented chords interrupt the turning accompaniment." },
    { "t": 528, "label": "Link · Quieter passage of the waltz", "m": "Link", "mNote": "The waltz grows quieter before the final rush." },
    { "t": 586, "label": "Coda · Waltz chords to the final bars", "m": "Coda", "mNote": "Repeated figures and accents fill the last pages." }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Opening, low register",
      "text": "Ravel marked the opening <i>Mouvement de Valse viennoise</i>. The first piano plays a quiet, low figure and the second adds a bass pulse. Fragments of melody enter above them and break off.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Ravel’s two-piano transcription, Durand (1920), plate D. & F. 9897, p. 1. https://s9.imslp.org/files/imglnks/usimg/c/ce/IMSLP06112-Ravel_-_La_Valse_(trans._Ravel_-_2_pianos).pdf"
    },
    {
      "t": 72, "kind": "form", "title": "Waltz phrases, letter A",
      "text": "The fragments lengthen into waltz phrases. The first piano plays the melody while the second plays rising and falling figures beneath it. A bass note followed by chords marks the three beats of the bar.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand two-piano score, pp. 4–5, from letter A: melody in the first piano over second-piano figures."
    },
    {
      "t": 108, "kind": "life", "title": "Origins as <i>Wien</i>, 1906",
      "text": "In 1906 Ravel planned a work called <i>Wien</i>, after Vienna, as a tribute to Johann Strauss. He composed it in 1919–20 as <i>La Valse</i>.",
      "basis": "documented", "precision": "passage",
      "evidence": "Calvin Dotsey, Houston Symphony programme essay, documents the 1906 Wien project and later composition: https://houstonsymphony.org/ravel-la-valse/."
    },
    {
      "t": 216, "kind": "world", "title": "Audition for Diaghilev, 1920",
      "text": "In 1920 Ravel and Marcelle Meyer played the two-piano score for Diaghilev. Poulenc recalled the impresario’s verdict: “It’s the portrait of a ballet.” Ravel took his manuscript and left the room.",
      "basis": "documented", "precision": "passage",
      "evidence": "Francis Poulenc’s recollection of the 1920 audition, quoted by Calvin Dotsey: https://houstonsymphony.org/ravel-la-valse/. Harald Hodeige also recounts it: https://www.berliner-philharmoniker.de/en/programme-notes/maurice-ravel-la-valse/."
    },
    {
      "t": 348, "kind": "form", "title": "Return of the earlier waltzes",
      "text": "In the second half the earlier waltz themes return in fragments and are recombined. A phrase starts, breaks off and is joined by another familiar figure, while the bass keeps turning beneath them.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "The second half’s return and recombination of earlier waltz themes are described by Calvin Dotsey: https://houstonsymphony.org/ravel-la-valse/."
    },
    {
      "t": 396, "kind": "world", "title": "Ravel’s printed scenario, 1855 setting",
      "text": "Ravel’s printed scene begins among whirling clouds, which part to reveal couples in an immense ballroom lit by blazing chandeliers. He dated the scene precisely: “Une Cour impériale, vers 1855” (“An imperial court, around 1855”).",
      "basis": "documented", "precision": "passage",
      "evidence": "Ravel’s scenario, printed before p. 1 of the Durand two-piano score (1920); our translation of the final sentence."
    },
    {
      "t": 648, "kind": "form", "title": "Final bars, two-piano version",
      "text": "Ravel marks the passage <i>Pressez jusqu’à la fin</i> (press on to the end). The two pianos repeat waltz figures until a bar of 2/4 breaks the triple metre. The last bass note is accented.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand two-piano score, p. 42: Pressez jusqu’à la fin, final 2/4 bar and accented closing bass."
    }
  ],
  "transitions": [
    {
      "id": "dance-emerges", "title": "Letter A: melody over running figure",
      "from": "Intro · Low bass figures, waltz fragments", "to": "A · Waltz themes over three-beat accompaniment",
      "at": { t: 72 }, "span": [58, 88],
      "how": "<p>The low repeated notes of the opening lead into letter A. There the second piano plays a running figure beneath the first piano’s melody, and bass notes continue to mark the dance step. The tune extends into longer phrases, marked <i>en dehors</i>, above the soft accompaniment.</p>",
      "devices": ["texture change", "register change", "motivic link"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand two-piano score (1920), pp. 4–5, letter A."
    }
  ],
  orchestra: {
    ensemble: ['piano'],
    basis: 'score-proportion',
    source: {
      title: 'Ravel, La valse — composer’s two-piano transcription, Durand, 1920',
      url: 'https://s9.imslp.org/files/imglnks/usimg/c/ce/IMSLP06112-Ravel_-_La_Valse_(trans._Ravel_-_2_pianos).pdf',
      locator: 'Ravel’s two-piano version, plate D. & F. 9897, pp. 1–42. Both players share the piano row.',
    },
    timeline: [
      { t: 0, playing: ['piano'], lead: ['piano'], note: 'The two pianos share the waltzes. One plays a melody while the other supplies bass notes, chords and fast scales.' },
    ],
  },
};
