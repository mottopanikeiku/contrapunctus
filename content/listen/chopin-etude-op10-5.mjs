export default {
  "id": "chopin-etude-op10-5",
  "composer": "chopin",
  "order": 10,
  "work": "Étude in G♭ major, Op. 10 No. 5",
  "movement": "Vivace — Black Keys",
  "year": "1829–32",
  "key": "G♭ major",
  "forces": "Piano",
  "performers": "Edward Neeman",
  "recorded": "",
  "source": {
    "file": "File:Chopin - 12 Études, Op. 10 - No. 5 in G-Flat major 'Black Keys' (Edward Neeman).flac"
  },
  "intro": "Edward Neeman plays the <i>Black Keys</i> étude: the right hand races over the five black notes while the left supplies crisp chords and surprises in the bass. Even the final octave dash stays on the black keys.",
  "sections": [
    { "t": 0, "label": "A · Black-note triplets, crisp left-hand chords", "m": "A", "mNote": "The right hand runs; the left answers with detached chords" },
    { "t": 30, "label": "B · D♭ major and left-hand calls", "m": "B", "mNote": "The triplets continue while the left hand changes the harmony" },
    { "t": 60, "label": "A′ · G♭ major brings back the opening", "m": "A′", "mNote": "The opening figure returns, then dwindles to pianissimo" },
    { "t": 86, "label": "Coda · Both hands on black keys", "m": "Coda", "mNote": "Wide arpeggios lead to a final dash in octaves" }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Five black notes",
      "text": "The right hand runs in semiquaver triplets over the piano’s five black notes. Below it, the left hand plays detached chords and octaves. The opening phrase is full of quick changes between <i>forte</i> and <i>piano</i> — a bold statement, then a quiet answer.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Opening triplets, left-hand articulation and four-bar dynamic pattern: https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin), citing Hugo Leichtentritt, Analyse der Chopin’schen Klavierwerke, vol. 2 (1922), pp. 105–106."
    },
    {
      "t": 40,
      "kind": "world",
      "title": "Chopin for free",
      "text": "Neeman joins the pianists recording Chopin for Musopen’s <i>Set Chopin Free</i> project. Launched through crowdfunding in 2013, the project seeks new recordings that anyone can download, share and use.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Culture.pl, ‘Set Chopin Free’, 11 September 2013, names Edward Neeman among the project’s pianists and describes its crowdfunding and free-access purpose. https://culture.pl/en/article/set-chopin-free"
    },
    {
      "t": 86,
      "kind": "form",
      "title": "Both hands join the dash",
      "text": "The coda brings the middle section’s figure back in G♭ major. Wide arpeggios spread across the keyboard, then both hands race in detached octaves on the black keys. The closing direction is <i>fortissimo</i>.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Coda and final black-key octaves: https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin), citing Leichtentritt, vol. 2, p. 109."
    }
  ],
  "transitions": [
    {
      "id": "into-central-expansion",
      "title": "The triplets continue into D♭ major",
      "from": "A · Black-note triplets, crisp left-hand chords",
      "to": "B · D♭ major and left-hand calls",
      "at": { "t": 30 },
      "span": [20, 42],
      "how": "<p>The opening moves from G♭ major to its dominant, D♭ major. The right-hand triplets keep running as the left hand changes the bass and chord pattern. The middle section stretches the opening’s neat four-bar phrases into less regular lengths.</p>",
      "devices": ["sequence", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "D♭-major middle section and phrase lengths: Leichtentritt, vol. 2, pp. 106–108, summarised at https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin)."
    },
    {
      "id": "into-opening-figure",
      "title": "The left hand brings G♭ home",
      "from": "B · D♭ major and left-hand calls",
      "to": "A′ · G♭ major brings back the opening",
      "at": { "t": 60 },
      "span": [50, 72],
      "how": "<p>The left hand’s short calls lead back to G♭ major and the opening figure. The right hand continues its black-note triplets, while the bass restores the original harmony. The return soon softens towards <i>delicatissimo, pianissimo, smorzando</i> — very delicate, very quiet, dying away.</p>",
      "devices": ["retransition", "motivic link", "decrescendo"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Return at bar 49 and subsequent markings: Leichtentritt, vol. 2, pp. 108–109, summarised at https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin)."
    },
    {
      "id": "into-final-flourish",
      "title": "The coda spreads across the keyboard",
      "from": "A′ · G♭ major brings back the opening",
      "to": "Coda · Both hands on black keys",
      "at": { "t": 86 },
      "span": [76, 98],
      "how": "<p>A quiet cadence leads to the coda in G♭ major. The middle section’s figure returns in the home key, then the hands spread into wide arpeggios above an ascending bass. Both hands finish with black-key octaves, marked <i>fortissimo</i> and detached.</p>",
      "devices": ["motivic link", "texture change", "register change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Coda, rising bass and final octaves: Leichtentritt, vol. 2, p. 109, summarised at https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin)."
    }
  ]
};
