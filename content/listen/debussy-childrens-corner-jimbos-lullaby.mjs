export default {
  "id": "debussy-childrens-corner-jimbos-lullaby",
  "composer": "debussy",
  "order": 31,
  "work": "Children’s Corner",
  "movement": "II. Jimbo’s Lullaby",
  "set": {
    "id": "debussy-childrens-corner",
    "title": "Children’s Corner",
    "part": 2,
    "of": 6
  },
  "year": "1906–08",
  "key": "B♭ major",
  "forces": "Piano",
  "performers": "Robert Casadesus, piano",
  "recorded": "11 April 1950, Columbia 30th Street Studio, New York",
  "source": {
    "archive": {
      "item": "lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0",
      "file": "disc1/02.02. Children's Corner Suite: Jimbo's Lullaby.mp3"
    },
    "rights": {
      "basis": "eu-published-before-1963",
      "published": 1951,
      "evidence": "Columbia Masterworks ML 4366, 1951; Internet Archive item metadata and original carrier: https://archive.org/details/lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0. Territorial EU basis; US status not established."
    }
  },
  "intro": "Debussy’s elephant sings from the bottom of the piano, gently and a little awkwardly. Robert Casadesus plays a lullaby whose small tune eventually reaches the treble, still rocking.",
  "sections": [
    { "t": 0, "label": "A · The elephant sings alone", "m": "A", "mNote": "A low melody pauses between soft replies" },
    { "t": 50, "label": "B · A rocking bass", "m": "B", "mNote": "Descending accompaniment carries a longer tune" },
    { "t": 138, "label": "A′ · The lullaby settles", "m": "A′", "mNote": "The tune returns above softly moving notes" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "An elephant’s low voice", "text": "The left hand begins alone, low on the piano, with a tune marked <i>doux et un peu gauche</i> — gentle and a little awkward. Its short steps and long pauses suit the elephant in Debussy’s title. Small, soft replies arrive from above.", "basis": "score-proportion", "precision": "passage", "evidence": "Debussy, Children’s Corner, Durand (1908), plate D. & F. 7188, p. 6: unaccompanied bass melody and doux et un peu gauche. The contents leaf gives the French subtitle Berceuse des éléphants. https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 50, "kind": "music", "title": "Rocking beneath the song", "text": "The piano fills the gaps with a descending accompaniment. Longer notes sing above it; little pairs of notes keep answering. Farther into the passage, <i>Un peu plus mouvementé</i> lets the lullaby stir, and the bass starts moving in quavers.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, pp. 7–8: descending crotchet accompaniment, sustained melody and the quaver accompaniment at Un peu plus mouvementé." },
    { "t": 138, "kind": "form", "title": "The tune comes home", "text": "The first tempo returns, and the familiar tune sits above softly repeated notes. The descending accompaniment resumes beneath it. Debussy keeps the piano very quiet, then asks the closing notes to die away; a low B♭ has the last word.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, p. 9: 1° Tempo, returning melody, Sempre pp et sans retarder, morendo and final low B♭." }
  ],
  "transitions": [
    {
      "id": "into-rocking-song",
      "title": "The bass begins to rock",
      "from": "A · The elephant sings alone",
      "to": "B · A rocking bass",
      "at": { "t": 50 },
      "span": [42, 62],
      "how": "<p>The first page ends with isolated low notes and a pause. The left hand then starts a descending pattern, repeated beneath the upper melody. Debussy marks it pianissimo and asks the tune to stand out slightly; the elephant has acquired a rocking chair.</p>",
      "devices": ["texture change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, pp. 6–7: fermata at the end of p. 6, descending accompaniment on p. 7, pp and un peu en dehors."
    },
    {
      "id": "into-quiet-recollection",
      "title": "A pause before the lullaby returns",
      "from": "B · A rocking bass",
      "to": "A′ · The lullaby settles",
      "at": { "t": 138 },
      "span": [126, 150],
      "how": "<p><i>Retenu</i> holds back the closing phrase of the middle. After a fermata, <i>1° Tempo</i> brings the tune back, with repeated quavers tucked underneath it in the right hand. The left hand holds its low notes before resuming the descending accompaniment.</p>",
      "devices": ["retransition", "fermata", "tempo change", "motivic link", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, p. 9, first two systems: Retenu, fermata, 1° Tempo, repeated right-hand quavers and the returning descending bass."
    }
  ]
};
