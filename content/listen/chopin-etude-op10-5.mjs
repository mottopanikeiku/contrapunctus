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
  "intro": "Edward Neeman plays the Étude in G♭ major, Op. 10 No. 5, marked Vivace and known as the <i>Black Keys</i> étude, in which the right hand plays across the five black notes while the left hand plays chords and the bass line. The final run in octaves also stays on the black keys.",
  "sections": [
    { "t": 0, "label": "A · Black-note triplets, detached left-hand chords", "m": "A", "mNote": "Right-hand runs over detached chords in the left hand." },
    { "t": 30, "label": "B · D♭ major, left-hand calls", "m": "B", "mNote": "The triplets continue while the left hand changes the harmony." },
    { "t": 60, "label": "A′ · Opening figure returns, G♭ major", "m": "A′", "mNote": "The opening figure returns, then falls to pianissimo." },
    { "t": 86, "label": "Coda · Both hands on black keys", "m": "Coda", "mNote": "Wide arpeggios lead to a closing run in octaves." }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Opening, right-hand triplets",
      "text": "The right hand plays semiquaver triplets on the piano’s five black notes, and the left hand plays detached chords and octaves below. In the opening phrase the dynamics change quickly between <i>forte</i> and <i>piano</i>, with a loud statement followed by a soft reply.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Opening triplets, left-hand articulation and four-bar dynamic pattern: https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin), citing Hugo Leichtentritt, Analyse der Chopin’schen Klavierwerke, vol. 2 (1922), pp. 105–106."
    },
    {
      "t": 40,
      "kind": "world",
      "title": "Set Chopin Free project, 2013",
      "text": "Edward Neeman was among the pianists who recorded Chopin for Musopen’s <i>Set Chopin Free</i> project. The project was launched through crowdfunding in 2013 to make new recordings that anyone could download, share and use.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Culture.pl, ‘Set Chopin Free’, 11 September 2013, names Edward Neeman among the project’s pianists and describes its crowdfunding and free-access purpose. https://culture.pl/en/article/set-chopin-free"
    },
    {
      "t": 86,
      "kind": "form",
      "title": "Coda in G♭ major",
      "text": "The coda brings the middle section’s figure back in G♭ major. Wide arpeggios cover the keyboard, then both hands play detached octaves on the black keys. The closing marking is <i>fortissimo</i>.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Coda and final black-key octaves: https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin), citing Leichtentritt, vol. 2, p. 109."
    }
  ],
  "transitions": [
    {
      "id": "into-central-expansion",
      "title": "The triplets continue into D♭ major",
      "from": "A · Black-note triplets, detached left-hand chords",
      "to": "B · D♭ major, left-hand calls",
      "at": { "t": 30 },
      "span": [20, 42],
      "how": "<p>The opening modulates from G♭ major to its dominant, D♭ major. The right-hand triplets continue without a break, and the left hand changes the bass and the chord pattern. In the middle section the regular four-bar phrases of the opening are extended to irregular lengths.</p>",
      "devices": ["sequence", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "D♭-major middle section and phrase lengths: Leichtentritt, vol. 2, pp. 106–108, summarised at https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin)."
    },
    {
      "id": "into-opening-figure",
      "title": "Return to G♭ major",
      "from": "B · D♭ major, left-hand calls",
      "to": "A′ · Opening figure returns, G♭ major",
      "at": { "t": 60 },
      "span": [50, 72],
      "how": "<p>At bar 49 the left hand’s short figures lead back to G♭ major and the opening figure. The right hand continues its black-note triplets, and the bass restores the original harmony. Soon after the return the markings change to <i>delicatissimo, pianissimo, smorzando</i> — very delicate, very quiet, dying away.</p>",
      "devices": ["retransition", "motivic link", "decrescendo"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Return at bar 49 and subsequent markings: Leichtentritt, vol. 2, pp. 108–109, summarised at https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin)."
    },
    {
      "id": "into-final-flourish",
      "title": "Cadence into the G♭ major coda",
      "from": "A′ · Opening figure returns, G♭ major",
      "to": "Coda · Both hands on black keys",
      "at": { "t": 86 },
      "span": [76, 98],
      "how": "<p>A soft cadence leads into the coda in G♭ major. The figure from the middle section returns in the home key. The hands then move apart into wide arpeggios over a rising bass. The étude ends with octaves on the black keys in both hands, marked <i>fortissimo</i> and played detached.</p>",
      "devices": ["motivic link", "texture change", "register change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Coda, rising bass and final octaves: Leichtentritt, vol. 2, p. 109, summarised at https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin)."
    }
  ]
};
