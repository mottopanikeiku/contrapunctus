// Sources: first edition (Demets, 1906) as scanned for IMSLP #02693, viewed on Commons:
//   https://commons.wikimedia.org/wiki/File:IMSLP02693-Ravel-Miroirs_DemetsEd.pdf  (scan pp. 1–9 = Noctuelles)
// IMSLP work page: https://imslp.org/wiki/Miroirs,_M.43_(Ravel,_Maurice)
// PTNA Piano Encyclopedia analysis of Noctuelles: https://enc.piano.or.jp/en/musics/329
export default {
  id: 'ravel-miroirs-noctuelles',
  composer: 'ravel',
  order: 20,
  set: { id: 'ravel-miroirs', title: 'Miroirs', part: 1, of: 5 },
  work: 'Miroirs',
  movement: 'I. Noctuelles — Très léger',
  year: '1904–05',
  key: 'D♭ major',
  forces: 'Piano',
  performers: 'Olena Havyuk-Sheremet, piano',
  recorded: '1 April 2014',
  source: { file: 'File:Maurice Ravel - Miroirs - 1. Noctuelles.flac' },
  "intro": "“Noctuelles” (night moths), marked Très léger, is the first piece in Ravel’s <i>Miroirs</i>. Quick piano figures stop, change direction and break off between phrases, and a slower, darker melody interrupts them.",

  "sections": [
    { "t": 0, "label": "A · Chromatic figures, Très léger", "m": "A", "mNote": "Quick chromatic figures break off between phrases." },
    { "t": 60, "label": "B · Song in B♭ minor", "m": "B", "mNote": "Long chords above a detached bass." },
    { "t": 148, "label": "Link · The flutter returns low down", "m": "Link", "mNote": "The first tempo returns over repeated bass notes" },
    { "t": 196, "label": "A′ · Return of the opening figures", "m": "A′", "mNote": "The opening figures return in a shorter passage." },
    { "t": 232, "label": "Coda · Chords, then a final fast figure", "m": "Coda", "mNote": "A Presque lent passage interrupts the quick figures before the close." }
  ],

  "cues": [
    {
      "t": 0, "kind": "music", "title": "Opening, <i>Très léger</i>",
      "text": "The title means night moths. Ravel marks the opening <i>Très léger</i>, very light. Short chromatic figures pass between the hands, often in double notes, and rising runs take them upwards before a pause divides the phrase.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Miroirs, Demets edition (1906), Noctuelles, opening page; chromatic figures, double notes and phrase divisions also described by Arisa Tachi: https://enc.piano.or.jp/en/musics/329. Score: https://vmirror.imslp.org/files/imglnks/usimg/e/e2/IMSLP02693-Ravel-Miroirs,DemetsEd.pdf"
    },
    {
      "t": 42, "kind": "world", "title": "Dedication and the Apaches",
      "text": "The dedication names Léon-Paul Fargue, a poet in Ravel’s circle of friends, the Apaches. Each of the five <i>Miroirs</i> belongs to someone in that circle. The dedicatees include poets, musicians and the painter Paul Sordes.",
      "basis": "documented", "precision": "passage",
      "evidence": "Dedications and the Apaches connection: Arisa Tachi, PTNA Piano Encyclopedia, https://enc.piano.or.jp/en/musics/329. The dedicatees are listed at https://imslp.org/wiki/Miroirs,_M.43_(Ravel,_Maurice)."
    },
    {
      "t": 60, "kind": "form", "title": "Melody in B♭ minor, 5/4 and 3/4",
      "text": "The flutter stops. In B♭ minor, a slow melody moves above detached bass notes, in bars of five beats alternating with bars of three. Ravel marks it <i>sombre et expressif</i> (dark and expressive), and the right hand holds a chord.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 4: Pas trop lent, sombre et expressif, 5/4 and 3/4. B♭ minor and the F–B♭ bass are discussed at https://enc.piano.or.jp/en/musics/329."
    },
    {
      "t": 100, "kind": "life", "title": "Autobiographical sketch, 1928",
      "text": "In the autobiographical sketch he dictated in 1928, Ravel said that <i>Miroirs</i> marked a change in his harmony large enough to disconcert the musicians most accustomed to his manner. <i>Noctuelles</i> opens the set.",
      "basis": "documented", "precision": "passage",
      "evidence": "Ravel’s notes dictated to Roland-Manuel on 10 October 1928, Bibliothèque nationale de France, Département de la Musique (Gallica btv1b10073212x, sheet 6): “un changement assez considérable pour avoir décontenancé les musiciens les plus accoutumés jusqu’alors à ma manière”. Our translation. Published as the Esquisse autobiographique in La Revue musicale, December 1938; English in Orenstein, A Ravel Reader (2003), as quoted by Kyle Fyr, Music Theory Online 26.4 (2020), paragraph 1: https://mtosmt.org/issues/mto.20.26.4/mto.20.26.4.fyr.html. Dictation date: Cornejo’s chronology: https://boleravel.fr/wp-content/uploads/RAVEL_Chronology_2018.pdf"
    },
    {
      "t": 148, "kind": "form", "title": "Return of the first tempo",
      "text": "The first tempo returns softly. The quick figure starts low in the keyboard over a repeated bass note, rises, and breaks into fragments of the slower song.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 5–6: revenez au premier mouvement, low ppp figures and subsequent ascent."
    },
    {
      "t": 196, "kind": "form", "title": "Return of the opening figure",
      "text": "After another pause, the opening figure returns at <i>pp</i>. Ravel shortens it this time. The passage moves quickly to the slower closing chords.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 7–9; the shortened return is also described by Arisa Tachi at https://enc.piano.or.jp/en/musics/329."
    },
    {
      "t": 232, "kind": "form", "title": "<i>Presque lent</i> and return of tempo",
      "text": "<i>Presque lent</i>, almost slow. Chords sound over a low bass, marked <i>lointain</i>, distant. The first tempo then returns for a few bars of high repeated chords and a short falling phrase.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 9: Presque lent, lointain, then 1er Mouvement and the final repeated chords."
    }
  ],

  "transitions": [
    {
      "id": "flutter-to-slow-section", "title": "A cascade into B♭ minor",
      "from": "A · Chromatic figures, Très léger", "to": "B · Song in B♭ minor",
      "at": { t: 60 }, "span": [48, 76],
      "how": "<p>A held chord and a quick descending cascade end the first section. The piano moves into B♭ minor, <i>Pas trop lent</i>, and F and B♭ recur in the bass. Over bars of five beats and of three beats, a long upper melody is marked <i>sombre et expressif</i>.</p>",
      "devices": ["fermata", "decrescendo", "tempo change", "metre change", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition (1906), pp. 3–4; bass and key discussed at https://enc.piano.or.jp/en/musics/329."
    },
    {
      "id": "slow-section-to-first-tempo", "title": "Return of the quick figure over the bass",
      "from": "B · Song in B♭ minor", "to": "Link · The flutter returns low down",
      "at": { t: 148 }, "span": [136, 166],
      "how": "<p>The slow chords fade over a repeated low note. Ravel writes <i>revenez au premier mouvement</i>, and the quick figure returns at <i>ppp</i> above that same bass. It climbs through the keyboard, interrupted by longer chords from the song.</p>",
      "devices": ["texture change", "tempo change", "crescendo build", "motivic link"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 5–6: return to the first tempo and the low repeated bass."
    },
    {
      "id": "development-to-return", "title": "Return of the opening figure",
      "from": "Link · The flutter returns low down", "to": "A′ · Return of the opening figures",
      "at": { t: 196 }, "span": [172, 208],
      "how": "<p>Rising runs slow and stop, and a bar at <i>ppp</i> follows. The first figure then returns at <i>pp</i>, in its original position on the keyboard. The two hands resume the light, uneven phrases of the opening.</p>",
      "devices": ["decrescendo", "motivic link", "retransition"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 6–7: rising runs, ppp bar and the return of the opening figure."
    },
    {
      "id": "return-to-coda", "title": "Fermata, descent and <i>Presque lent</i>",
      "from": "A′ · Return of the opening figures", "to": "Coda · Chords, then a final fast figure",
      "at": { t: 232 }, "span": [220, 246],
      "how": "<p>A fortissimo chord is held under a fermata. Quick figures descend through both hands to <i>ppp</i>. At <i>Presque lent</i>, quiet chords sound above a low sustained bass, and Ravel marks them <i>lointain</i>. The first tempo returns once more before the end.</p>",
      "devices": ["fermata", "decrescendo", "tempo change", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 9: fermata, descending figures, Presque lent and final 1er Mouvement."
    }
  ],
};
