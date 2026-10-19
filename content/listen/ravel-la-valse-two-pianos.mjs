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
  "intro": "A ballroom emerges from the bottom of two pianos, then the waltz spins itself to pieces. Nancy and Neal O’Doan play Ravel’s own two-piano version of <i>La Valse</i>.",
  "sections": [
    { "t": 0, "label": "Intro · Low figures behind the curtain", "m": "Intro", "mNote": "Bass notes turn beneath fragments of waltz melody" },
    { "t": 72, "label": "A · The waltz takes the floor", "m": "A", "mNote": "Longer tunes emerge over the three-beat accompaniment" },
    { "t": 348, "label": "Dev · The waltzes return in fragments", "m": "Dev", "mNote": "Earlier tunes break into shorter phrases" },
    { "t": 456, "label": "Dev · Chords crowd the dance", "m": "Dev", "mNote": "Accented chords interrupt the turning accompaniment" },
    { "t": 528, "label": "Link · A quieter turn of the waltz", "m": "Link", "mNote": "The dance recedes before the final rush" },
    { "t": 586, "label": "Coda · Waltz chords driven to the finish", "m": "Coda", "mNote": "Repeated figures and accents crowd the last pages" }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Below the ballroom",
      "text": "The first piano starts with a quiet, low figure; the second adds a bass pulse. Bits of tune appear above them, then vanish. Ravel marks the opening <i>Mouvement de Valse viennoise</i>, though the ballroom is still hidden.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Ravel’s two-piano transcription, Durand (1920), plate D. & F. 9897, p. 1. https://s9.imslp.org/files/imglnks/usimg/c/ce/IMSLP06112-Ravel_-_La_Valse_(trans._Ravel_-_2_pianos).pdf"
    },
    {
      "t": 72, "kind": "form", "title": "The dancers come into view",
      "text": "The fragments lengthen into waltz phrases. One piano carries the tune while the other keeps little rising and falling figures moving beneath it. A bass note and its answering chords give the dance its three-beat step.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand two-piano score, pp. 4–5, from letter A: melody in the first piano over second-piano figures."
    },
    {
      "t": 108, "kind": "life", "title": "Vienna on Ravel’s desk",
      "text": "In 1906 Ravel plans a work called <i>Wien</i>, after Vienna, as a tribute to Johann Strauss. It waits until 1919–20 to become <i>La Valse</i>. The title changes; his love of the dance survives.",
      "basis": "documented", "precision": "passage",
      "evidence": "Calvin Dotsey, Houston Symphony programme essay, documents the 1906 Wien project and later composition: https://houstonsymphony.org/ravel-la-valse/."
    },
    {
      "t": 216, "kind": "world", "title": "Diaghilev says no",
      "text": "In 1920 Ravel and Marcelle Meyer play the two-piano score for Diaghilev. Poulenc remembers the impresario’s verdict: “It’s the portrait of a ballet.” Ravel quietly gathers his manuscript and leaves the room.",
      "basis": "documented", "precision": "passage",
      "evidence": "Francis Poulenc’s recollection of the 1920 audition, quoted by Calvin Dotsey: https://houstonsymphony.org/ravel-la-valse/. Harald Hodeige also recounts it: https://www.berliner-philharmoniker.de/en/programme-notes/maurice-ravel-la-valse/."
    },
    {
      "t": 348, "kind": "form", "title": "The old tunes splinter",
      "text": "The waltzes return in pieces. A phrase starts, breaks off, and meets another familiar figure; the bass keeps turning beneath them. The graceful tunes now have to compete for room.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "The second half’s return and recombination of earlier waltz themes are described by Calvin Dotsey: https://houstonsymphony.org/ravel-la-valse/."
    },
    {
      "t": 396, "kind": "world", "title": "Chandeliers in eighteen fifty-five",
      "text": "Ravel’s printed scene begins among whirling clouds. They part to reveal couples in an immense ballroom; the chandeliers blaze. He dates the scene precisely: “Une Cour impériale, vers 1855” — “An imperial court, around 1855”.",
      "basis": "documented", "precision": "passage",
      "evidence": "Ravel’s scenario, printed before p. 1 of the Durand two-piano score (1920); our translation of the final sentence."
    },
    {
      "t": 648, "kind": "form", "title": "The waltz loses a beat",
      "text": "Ravel writes <i>Pressez jusqu’à la fin</i>: press on to the end. The two pianos hammer out repeated waltz figures, then a bar of two beats breaks the triple metre. The last bass note lands with an accent.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand two-piano score, p. 42: Pressez jusqu’à la fin, final 2/4 bar and accented closing bass."
    }
  ],
  "transitions": [
    {
      "id": "dance-emerges", "title": "A tune rises above the bass",
      "from": "Intro · Low figures behind the curtain", "to": "A · The waltz takes the floor",
      "at": { t: 72 }, "span": [58, 88],
      "how": "<p>The opening’s low repeated notes lead into letter A, where the second piano keeps a running figure beneath the first piano’s melody. Bass notes still mark the dance step. The tune grows into longer phrases, marked <i>en dehors</i>, above the quiet accompaniment.</p>",
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
      { t: 0, playing: ['piano'], lead: ['piano'], note: 'Two pianos share the waltzes: one carries a melody while the other supplies bass notes, chords and rushing scales.' },
    ],
  },
};
