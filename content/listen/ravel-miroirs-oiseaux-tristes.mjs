// Sources: first edition (Demets, 1906) as scanned for IMSLP #02693, viewed on Commons:
//   https://commons.wikimedia.org/wiki/File:IMSLP02693-Ravel-Miroirs_DemetsEd.pdf  (scan pp. 10–13 = Oiseaux tristes)
// IMSLP work page: https://imslp.org/wiki/Miroirs,_M.43_(Ravel,_Maurice)
// PTNA Piano Encyclopedia analysis: https://enc.piano.or.jp/en/musics/329
export default {
  id: 'ravel-miroirs-oiseaux-tristes',
  composer: 'ravel',
  order: 21,
  set: { id: 'ravel-miroirs', title: 'Miroirs', part: 2, of: 5 },
  work: 'Miroirs',
  movement: 'II. Oiseaux tristes — Très lent',
  year: '1904–05',
  key: 'E♭ minor',
  forces: 'Piano',
  performers: 'Olena Havyuk-Sheremet, piano',
  recorded: '1 April 2014',
  source: { file: 'File:Maurice Ravel - Miroirs - 2. Oiseaux tristes.flac' },
  "intro": "A high B♭ calls into silence at the start of <i>Oiseaux tristes</i>. Ravel’s birds sing above slow, uneasy piano figures, with a brief flurry of flight in the middle.",

  "sections": [
    { "t": 0, "label": "A · A solitary B♭", "m": "A", "mNote": "The upper call begins without accompaniment" },
    { "t": 58, "label": "B · E major and answering calls", "m": "B", "mNote": "Louder calls have quiet echoes over the moving left hand" },
    { "t": 108, "label": "A′ · The call returns in D minor", "m": "A′", "mNote": "The short–long call returns above held chords" },
    { "t": 142, "label": "Cadenza · Quiet runs without bar lines", "m": "Cadenza", "mNote": "The pianist stretches the rising and falling figures" },
    { "t": 160, "label": "Link · Three measured bars", "m": "Link", "mNote": "The original pace returns and stops under a fermata" },
    { "t": 180, "label": "Coda · Low E♭, distant calls", "m": "Coda", "mNote": "Slower still: the piano returns to E♭ minor" }
  ],

  "cues": [
    {
      "t": 0, "kind": "music", "title": "One bird, no accompaniment",
      "text": "A high B♭ repeats, very softly, then opens into a small flourish. The left hand waits for three bars. When it begins, its quavers move in threes beneath the upper part’s twos, keeping the bird’s call slightly apart from its surroundings.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Miroirs, Demets edition (1906), p. 10: opening B♭, left-hand rests and simultaneous 4/4 and 12/8. https://vmirror.imslp.org/files/imglnks/usimg/e/e2/IMSLP02693-Ravel-Miroirs,DemetsEd.pdf"
    },
    {
      "t": 42, "kind": "life", "title": "Viñes at the Salle Érard",
      "text": "The dedication belongs to Ricardo Viñes. On 6 January 1906, at the Salle Érard in Paris, he gives the first performance of all five <i>Miroirs</i>. The pianist who receives these solitary birds also has to launch the ocean and the Spanish dance.",
      "basis": "documented", "precision": "passage",
      "evidence": "Dedication, première date, venue and pianist: https://imslp.org/wiki/Miroirs,_M.43_(Ravel,_Maurice)."
    },
    {
      "t": 58, "kind": "form", "title": "E♭ becomes D♯",
      "text": "E♭ is rewritten as D♯, the same piano key with a new destination: E major. A rolled chord opens a fuller passage. High calls sound <i>forte</i>, then answer themselves softly, marked <i>lointain</i> — far away.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 10–11: four-sharp signature, rolled chord and f/pp calls. The E♭–D♯ reinterpretation is described at https://enc.piano.or.jp/en/musics/329."
    },
    {
      "t": 84, "kind": "life", "title": "Ravel on his birds",
      "text": "Ravel dictates that <i>Oiseaux tristes</i>, the first of the five pieces in date and in his view the most typical, strikes him as “birds lost in the torpor of a very dark forest in the hottest hours of summer”.",
      "basis": "documented", "precision": "passage",
      "evidence": "Ravel’s notes dictated to Roland-Manuel, 10 October 1928 (BnF, Gallica btv1b10073212x, sheets 6–7): “Le premier en date de ces morceaux et le plus typique de tous est à mon sens le second du recueil: les Oiseaux tristes”, and on the next sheet “des oiseaux perdus dans la torpeur d’une forêt très sombre aux heures les plus chaudes de l’été”. Our translation. Roger Nichols quotes the same image: https://www.hyperion-records.co.uk/dw.asp?dc=W5434_67731"
    },
    {
      "t": 142, "kind": "form", "title": "Flight without bar lines",
      "text": "Ravel removes the bar lines for a quiet cadenza. Slurred runs climb and turn over a slower line below. <i>Lent, presque ad lib.</i> gives the pianist room to linger; even the fastest notes stay at <i>ppp</i>.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 13, first three systems: unbarred cadenza, Lent, presque ad lib. and ppp."
    },
    {
      "t": 180, "kind": "form", "title": "The forest grows still",
      "text": "The music returns to E♭ minor over a low held E♭. Ravel asks for an even slower pace, <i>sombre et lointain</i>, dark and distant. Short calls linger above the bass, then dwindle under <i>perdendo</i>.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 13, final system: six-flat signature, low E♭, Encore plus lent, sombre et lointain and perdendo."
    }
  ],

  "transitions": [
    {
      "id": "lone-bird-to-e-major", "title": "One pitch turns towards E major",
      "from": "A · A solitary B♭", "to": "B · E major and answering calls",
      "at": { t: 58 }, "span": [46, 72],
      "how": "<p>A short 2/4 bar brings the opening to a close. E♭ becomes D♯, now the leading note of E major, and four sharps replace six flats. A rolled right-hand chord, marked <i>expressif</i>, sounds over a low held bass; rising left-hand notes follow.</p>",
      "devices": ["enharmonic reinterpretation", "direct modulation", "metre change", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition (1906), pp. 10–11; harmonic reading: https://enc.piano.or.jp/en/musics/329."
    },
    {
      "id": "climax-to-d-minor", "title": "The call returns above held chords",
      "from": "B · E major and answering calls", "to": "A′ · The call returns in D minor",
      "at": { t: 108 }, "span": [94, 124],
      "how": "<p>The fast chords subside and Ravel writes <i>revenez au mouvement</i>. A one-flat key signature brings D minor. The opening’s short–long call returns quietly above tied chords, with the pedal held.</p>",
      "devices": ["decrescendo", "tempo change", "direct modulation", "motivic link", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 12: return to the original tempo, one-flat signature, held pedal and returning call."
    },
    {
      "id": "return-to-cadenza", "title": "The bar lines disappear",
      "from": "A′ · The call returns in D minor", "to": "Cadenza · Quiet runs without bar lines",
      "at": { t: 142 }, "span": [130, 156],
      "how": "<p>A short 2/4 bar leads into <i>Lent, presque ad lib.</i>. The piano stays at <i>ppp</i> with the pedal down, but its runs now cross the page without bar lines. A slower left-hand melody moves below the circling right hand.</p>",
      "devices": ["cadenza", "tempo change", "metre change", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 12–13: 2/4 bar and unbarred cadenza."
    },
    {
      "id": "cadenza-to-first-tempo", "title": "Three bars recover the pulse",
      "from": "Cadenza · Quiet runs without bar lines", "to": "Link · Three measured bars",
      "at": { t: 160 }, "span": [148, 172],
      "how": "<p>The cadenza presses forward slightly, then <i>au mouvement</i> restores the original pace and the bar lines. A rising left-hand figure reaches a held chord beneath a short upper phrase. Three bars swell from <i>p</i> to <i>mf</i> and back, ending under a fermata.</p>",
      "devices": ["tempo change", "texture change", "fermata"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 13, third and fourth systems."
    },
    {
      "id": "fermata-to-coda", "title": "A low E♭ beneath the birds",
      "from": "Link · Three measured bars", "to": "Coda · Low E♭, distant calls",
      "at": { t: 180 }, "span": [168, 194],
      "how": "<p>After the fermata, the six-flat signature returns. A low E♭ anchors the piano in E♭ minor while the upper calls sound slowly and softly. Ravel marks <i>Encore plus lent</i>, then <i>perdendo</i> as the last phrases fade.</p>",
      "devices": ["fermata", "tempo change", "direct modulation", "register change", "decrescendo"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 13, last two systems."
    }
  ],
};
