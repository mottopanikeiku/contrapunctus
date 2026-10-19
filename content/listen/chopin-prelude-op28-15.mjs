export default {
  "id": "chopin-prelude-op28-15",
  "composer": "chopin",
  "order": 10,
  "work": "Prelude in D♭ major, Op. 28 No. 15",
  "movement": "Sostenuto — Raindrop",
  "year": "completed 1839",
  "key": "D♭ major",
  "forces": "Piano",
  "performers": "Ivan Ilić",
  "recorded": "October 2005, Paris",
  "source": {
    "file": "File:Ivan Ilić-Chopin - Prelude no. 15 in D flat major.ogg"
  },
  "intro": "A♭ keeps sounding beneath the <i>Raindrop</i> Prelude’s melody, then becomes G♯ in a dark C♯-minor middle. Ivan Ilić plays this piece of extraordinary persistence, recorded in Paris in October 2005.",
  "sections": [
    { "t": 0, "label": "A · A♭ beneath the D♭-major song", "m": "A", "mNote": "Repeated quavers under a slow right-hand melody" },
    { "t": 86, "label": "B · G♯ above low C♯-minor chords", "m": "B", "mNote": "The repeated note moves to the right hand" },
    { "t": 210, "label": "A′ · The D♭-major song returns", "m": "A′", "mNote": "The opening melody returns for a shortened farewell" }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "A♭ keeps coming back",
      "text": "The right hand sings in D♭ major while A♭ keeps returning underneath it. Chords change around that repeated note. Chopin marks the piece <i>Sostenuto</i>: even with the quavers ticking away, the melody has long breaths.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 1–4: Sostenuto, recurring A♭ quavers and sustained right-hand melody. https://chopinscores.org/partytura/128"
    },
    {
      "t": 60,
      "kind": "life",
      "title": "Sand comes through the rain",
      "text": "At Valldemossa, George Sand returns from Palma through heavy rain and finds Chopin distraught at the piano. In her memoir, he has dreamt of drowning, with icy drops falling on his chest. When she points to rain on the roof, he angrily rejects the comparison.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "George Sand’s Histoire de ma vie, account of the Mallorca winter of 1838–39, quoted at https://en.wikipedia.org/wiki/Prelude,_Op._28,_No._15_(Chopin). Her memoir leaves the prelude unnamed; later tradition attaches the episode to No. 15. Mieczysław Tomaszewski discusses the rain association: https://chopin.nifc.pl/en/chopin/kompozycja/208"
    },
    {
      "t": 86,
      "kind": "form",
      "title": "The repeated note changes hands",
      "text": "A♭ is now written G♯, the same piano key. The right hand repeats it while the left sings in low chords. D♭ major has become C♯ minor, and Chopin marks the new passage <i>sotto voce</i>, under the breath.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 27–31: change of key signature, right-hand G♯ quavers and lower left-hand melody, marked sotto voce. https://chopinscores.org/partytura/128"
    },
    {
      "t": 210,
      "kind": "form",
      "title": "F above D♭ again",
      "text": "The opening melody returns, beginning on F above D♭. The repeated note is A♭ again, back beneath the tune. This return is brief: Chopin brings back the first song, then lets it wander towards its last bare phrase.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 75–83: return to the original key signature and opening melody at bar 76, followed by the abbreviated close. https://chopinscores.org/partytura/128"
    },
    {
      "t": 246,
      "kind": "music",
      "title": "Two bars without the drops",
      "text": "Near the end, the left hand falls silent for two bars. The melody descends alone in plain crotchets. A♭ returns beneath the closing chords, and the piano finally rests on D♭ major.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 82–89: two bars of unaccompanied melody, then the repeated A♭ and final D♭-major chord. https://chopinscores.org/partytura/128"
    }
  ],
  "transitions": [
    {
      "id": "into-minor-middle",
      "title": "A♭ becomes G♯",
      "from": "A · A♭ beneath the D♭-major song",
      "to": "B · G♯ above low C♯-minor chords",
      "at": { "t": 86 },
      "span": [76, 98],
      "how": "<p>The opening melody stops while A♭ continues alone in quavers. The key signature changes to C♯ minor, and the same sounding note becomes G♯ in the right hand. Low C♯ and G♯ begin the left-hand phrase; E♮ soon supplies the minor third. Chopin marks the passage <i>sotto voce</i>.</p>",
      "devices": ["common-tone modulation", "enharmonic reinterpretation", "register change", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 27–28. https://chopinscores.org/partytura/128"
    },
    {
      "id": "into-major-return",
      "title": "The song rises above the quavers",
      "from": "B · G♯ above low C♯-minor chords",
      "to": "A′ · The D♭-major song returns",
      "at": { "t": 210 },
      "span": [200, 222],
      "how": "<p>The low G♯ bass supports the last hushed chords. In the linking half-bar, G♯ is respelt A♭ and the left hand moves through F, G♭ and E♭. A D♭ bass then brings back the opening melody on F, marked <i>piano</i>. The repeated quavers sit beneath the tune again.</p>",
      "devices": ["decrescendo", "enharmonic reinterpretation", "motivic link", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 74–76. https://chopinscores.org/partytura/128"
    }
  ]
};
