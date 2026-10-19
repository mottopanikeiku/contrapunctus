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
  "intro": "Night moths dart through the first of Ravel’s <i>Miroirs</i>: quick piano figures stop, turn and vanish between phrases. A dark, slower song interrupts their flight.",

  "sections": [
    { "t": 0, "label": "A · Moths in flight", "m": "A", "mNote": "Quick chromatic figures break off between phrases" },
    { "t": 60, "label": "B · A dark song in B♭ minor", "m": "B", "mNote": "Long chords move above a detached bass" },
    { "t": 148, "label": "Link · The flutter returns low down", "m": "Link", "mNote": "The first tempo returns over repeated bass notes" },
    { "t": 196, "label": "A′ · The opening moths return", "m": "A′", "mNote": "The opening figures return in a shorter passage" },
    { "t": 232, "label": "Coda · Distant chords, then a last flutter", "m": "Coda", "mNote": "Presque lent interrupts the quick figures before the close" }
  ],

  "cues": [
    {
      "t": 0, "kind": "music", "title": "Moths at the keyboard",
      "text": "The title means night moths. Ravel writes <i>Très léger</i>, very light: little chromatic figures dart between the hands, often with two notes pressed together. Rising runs carry them upwards, then a quiet gap breaks the flight.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Miroirs, Demets edition (1906), Noctuelles, opening page; chromatic figures, double notes and phrase divisions also described by Arisa Tachi: https://enc.piano.or.jp/en/musics/329. Score: https://vmirror.imslp.org/files/imglnks/usimg/e/e2/IMSLP02693-Ravel-Miroirs,DemetsEd.pdf"
    },
    {
      "t": 42, "kind": "world", "title": "A poet among the moths",
      "text": "The dedication names Léon-Paul Fargue, a poet in Ravel’s circle of friends, the Apaches. Each of the five <i>Miroirs</i> belongs to someone in that circle: poets and musicians share the set with the painter Paul Sordes.",
      "basis": "documented", "precision": "passage",
      "evidence": "Dedications and the Apaches connection: Arisa Tachi, PTNA Piano Encyclopedia, https://enc.piano.or.jp/en/musics/329. The dedicatees are listed at https://imslp.org/wiki/Miroirs,_M.43_(Ravel,_Maurice)."
    },
    {
      "t": 60, "kind": "form", "title": "A song in five beats",
      "text": "The flutter stops. In B♭ minor, a slow melody moves above detached bass notes, with five-beat bars alternating with three. Ravel asks for <i>sombre et expressif</i>: dark and expressive. The right hand suddenly has time to hold a chord.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 4: Pas trop lent, sombre et expressif, 5/4 and 3/4. B♭ minor and the F–B♭ bass are discussed at https://enc.piano.or.jp/en/musics/329."
    },
    {
      "t": 148, "kind": "form", "title": "A flutter in the bass",
      "text": "The first tempo returns softly. The quick figure starts low in the keyboard over a repeated bass note, climbs, and breaks into fragments of the slower song. The moths are back among the chords.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 5–6: revenez au premier mouvement, low ppp figures and subsequent ascent."
    },
    {
      "t": 196, "kind": "form", "title": "The first flight returns",
      "text": "The opening figure returns at <i>pp</i>, after another quiet gap. Its crooked little shapes are familiar, but Ravel shortens their route. The passage moves quickly towards the slower closing chords.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 7–9; the shortened return is also described by Arisa Tachi at https://enc.piano.or.jp/en/musics/329."
    },
    {
      "t": 232, "kind": "form", "title": "Distant chords, one last flutter",
      "text": "<i>Presque lent</i>: almost slow. Quiet chords sound over a low bass, marked <i>lointain</i>, distant. Then the first tempo returns for a few bars of high repeated chords and a tiny falling phrase.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 9: Presque lent, lointain, then 1er Mouvement and the final repeated chords."
    }
  ],

  "transitions": [
    {
      "id": "flutter-to-slow-section", "title": "A cascade into B♭ minor",
      "from": "A · Moths in flight", "to": "B · A dark song in B♭ minor",
      "at": { t: 60 }, "span": [48, 76],
      "how": "<p>A held chord and a quick descending cascade end the moths’ first flight. The piano settles into B♭ minor, <i>Pas trop lent</i>, with F and B♭ recurring in the bass. Five-beat and three-beat bars carry a long upper melody marked <i>sombre et expressif</i>.</p>",
      "devices": ["fermata", "decrescendo", "tempo change", "metre change", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition (1906), pp. 3–4; bass and key discussed at https://enc.piano.or.jp/en/musics/329."
    },
    {
      "id": "slow-section-to-first-tempo", "title": "Quick notes over the lingering bass",
      "from": "B · A dark song in B♭ minor", "to": "Link · The flutter returns low down",
      "at": { t: 148 }, "span": [136, 166],
      "how": "<p>The slow chords fade over a repeated low note. Ravel writes <i>revenez au premier mouvement</i>, and the quick figure returns at <i>ppp</i> above that same bass. It climbs through the keyboard while longer chords from the song interrupt it.</p>",
      "devices": ["texture change", "tempo change", "crescendo build", "motivic link"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 5–6: return to the first tempo and the low repeated bass."
    },
    {
      "id": "development-to-return", "title": "A quiet gap before the moths",
      "from": "Link · The flutter returns low down", "to": "A′ · The opening moths return",
      "at": { t: 196 }, "span": [172, 208],
      "how": "<p>Rising runs lose their momentum and leave a quiet bar at <i>ppp</i>. The first figure then reappears at <i>pp</i>, in its original position on the keyboard. The two hands recover the opening’s light, uneven phrases.</p>",
      "devices": ["decrescendo", "motivic link", "retransition"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 6–7: rising runs, ppp bar and the return of the opening figure."
    },
    {
      "id": "return-to-coda", "title": "The flight ends in distant chords",
      "from": "A′ · The opening moths return", "to": "Coda · Distant chords, then a last flutter",
      "at": { t: 232 }, "span": [220, 246],
      "how": "<p>A fortissimo chord pauses under a fermata. Quick figures run down through both hands to <i>ppp</i>; then <i>Presque lent</i> brings quiet chords above a low sustained bass. Ravel marks them <i>lointain</i>. The first tempo returns once more before the end.</p>",
      "devices": ["fermata", "decrescendo", "tempo change", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 9: fermata, descending figures, Presque lent and final 1er Mouvement."
    }
  ],
};
