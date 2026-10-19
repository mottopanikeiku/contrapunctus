export default {
  "id": "debussy-childrens-corner-doctor-gradus",
  "composer": "debussy",
  "order": 30,
  "work": "Children’s Corner",
  "movement": "I. Doctor Gradus ad Parnassum",
  "set": {
    "id": "debussy-childrens-corner",
    "title": "Children’s Corner",
    "part": 1,
    "of": 6
  },
  "year": "1906–08",
  "key": "C major",
  "forces": "Piano",
  "performers": "Robert Casadesus, piano",
  "recorded": "11 April 1950, Columbia 30th Street Studio, New York",
  "source": {
    "archive": {
      "item": "lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0",
      "file": "disc1/02.01. Children's Corner Suite: Doctor Gradus Ad Parnassum.mp3"
    },
    "rights": {
      "basis": "eu-published-before-1963",
      "published": 1951,
      "evidence": "Columbia Masterworks ML 4366, 1951; Internet Archive item metadata and original carrier: https://archive.org/details/lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0. Territorial EU basis; US status not established."
    }
  },
  "intro": "A piano exercise starts dutifully in C major, wanders onto the black keys and ends at a gallop. Robert Casadesus plays the first of Debussy’s six pieces for his daughter Chouchou.",
  "sections": [
    { "t": 0, "label": "A · The C-major exercise", "m": "A", "mNote": "Semiquavers run around a slower tune" },
    { "t": 50, "label": "B · A detour onto black keys", "m": "B", "mNote": "Held chords interrupt the running notes; five flats arrive" },
    { "t": 74, "label": "A′ · Back to work, then a gallop", "m": "A′", "mNote": "The C-major exercise returns and accelerates" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "The fingers get busy", "text": "The right hand runs up and down the white keys above a low C. Soon a slower tune peeps out between the semiquavers. Debussy marks the touch <i>égal et sans sécheresse</i>: even and without dryness. This pupil already has a mind of their own.", "basis": "score-proportion", "precision": "passage", "evidence": "Debussy, Children’s Corner, Durand (1908), plate D. & F. 7188, p. 1: opening C pedal, semiquaver figures, slower upper notes and égal et sans sécheresse. https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 35, "kind": "life", "title": "A father’s tender apology", "text": "On the dedication page of <i>Children’s Corner</i> in 1908, Debussy addresses his daughter: “To my dear little Chouchou, with her father’s tender apologies for what follows.” Two small elephants decorate the page.", "basis": "documented", "precision": "passage", "evidence": "Durand score (1908), dedication leaf: À ma chère petite Chouchou, avec les tendres excuses de son Père pour ce qui va suivre. Our translation; the leaf has two elephant drawings." },
    { "t": 74, "kind": "form", "title": "The exercise breaks loose", "text": "The opening semiquavers return in C major, very softly. Then the hands spread farther apart and Debussy asks for more and more animation. By the final page the marking is <i>Très animé</i>; the last C-major chords land fortissimo.", "basis": "score-proportion", "precision": "passage", "evidence": "Durand score, pp. 4–5: 1° Tempo, pp, En animant peu à peu, Très animé and the fortissimo C-major close." }
  ],
  "transitions": [
    {
      "id": "into-wandering-respite",
      "title": "The exercise pauses over held chords",
      "from": "A · The C-major exercise",
      "to": "B · A detour onto black keys",
      "at": { "t": 50 },
      "span": [42, 62],
      "how": "<p>The running notes descend and slow under <i>Retenu</i>. A short phrase in the piano’s middle register ends on held chords. The key signature then opens out to five flats: D♭ major, with a low D♭ held beneath a gentler version of the exercise.</p>",
      "devices": ["texture change", "tempo change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, p. 3: Retenu, the intervening held chords, and the five-flat passage marked Animez un peu over D♭."
    },
    {
      "id": "into-exercise-return",
      "title": "D♭ slips back to C",
      "from": "B · A detour onto black keys",
      "to": "A′ · Back to work, then a gallop",
      "at": { "t": 74 },
      "span": [65, 85],
      "how": "<p>The black-key passage slows once more. Debussy cancels the flats and restores <i>1° Tempo</i>: C returns in the bass and the right hand picks up its first semiquaver figure, pianissimo. The exercise soon spreads across both hands and begins to accelerate.</p>",
      "devices": ["retransition", "motivic link", "tempo change", "crescendo build", "register change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Durand score, pp. 3–4: Retenu, cancellation of the five-flat signature, 1° Tempo over C, and En animant peu à peu."
    }
  ]
};
