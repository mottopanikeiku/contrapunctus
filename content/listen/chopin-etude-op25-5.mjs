export default {
  "id": "chopin-etude-op25-5",
  "composer": "chopin",
  "order": 10,
  "work": "Étude in E minor, Op. 25 No. 5",
  "movement": "Vivace",
  "year": "before 1837",
  "key": "E minor",
  "forces": "Piano",
  "performers": "Edward Neeman",
  "recorded": "",
  "source": {
    "file": "File:Chopin - 12 Études, Op. 25 - No. 5 in E minor 'Wrong Note' (Edward Neeman).flac"
  },
  "intro": "Quick semitone clashes give this E-minor étude its crooked smile; the middle opens into an E-major song deep in the piano. Edward Neeman plays the two sides of Chopin’s little scherzo.",
  "sections": [
    { "t": 0, "label": "A · Semitone clashes and clipped chords", "m": "A", "mNote": "Quick dissonances interrupt the light, scherzando piano writing" },
    { "t": 54, "label": "B · The left hand sings in E major", "m": "B", "mNote": "A low melody unfolds beneath rising and falling figures" },
    { "t": 148, "label": "A′ · The E-minor joke returns", "m": "A′", "mNote": "Broken rhythms and quick clashes return after the song" },
    { "t": 186, "label": "Coda · E major, fortissimo", "m": "Coda", "mNote": "Full chords and an upward flourish end in E major" }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "A semitone sideways",
      "text": "The right hand keeps brushing against the note next door. These quick semitone clashes give the E-minor tune a teasing edge. Chopin marks the music <i>scherzando</i> — joking — and breaks its phrases into short, lightly played gestures.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Minor-second dissonances: https://en.wikipedia.org/wiki/Étude_Op._25,_No._5_(Chopin). Vivace, scherzando and broken rhythms: Mieczysław Tomaszewski, https://chopin.nifc.pl/en/chopin/kompozycja/191."
    },
    {
      "t": 54,
      "kind": "form",
      "title": "The left hand sings",
      "text": "<i>Più lento</i>: slower, and now in E major. The melody moves down into the left hand, in the range of a cello. Above it, the right hand rises and falls in flowing figures. The little jokes have stopped for a song.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "E-major Più lento: https://en.wikipedia.org/wiki/Étude_Op._25,_No._5_(Chopin). Cello-register melody and accompanying figuration: https://chopin.nifc.pl/en/chopin/kompozycja/191."
    },
    {
      "t": 120,
      "kind": "world",
      "title": "A sonata from his teacher",
      "text": "Larry Sitsky, one of Neeman’s teachers, writes his <i>First Piano Sonata</i> especially for him. Neeman’s debut album in 2016 places its first recording beside Rachmaninoff.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Australian National University biography: Sitsky as teacher, the dedicated Sonata No. 1 and Neeman’s March 2016 debut album Rachmaninoff & Sitsky. https://music.cass.anu.edu.au/people/dr-edward-neeman"
    },
    {
      "t": 148,
      "kind": "form",
      "title": "The clipped tune returns",
      "text": "The E-minor opening returns at its quicker pace. The low singing line disappears, and the piano resumes its broken rhythms and little dissonant nudges. The hands have traded long phrases for short exchanges.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Return of the scherzando outer section after the slower trio: https://chopin.nifc.pl/en/chopin/kompozycja/191 and https://en.wikipedia.org/wiki/Étude_Op._25,_No._5_(Chopin)."
    },
    {
      "t": 186,
      "kind": "form",
      "title": "E major has the last word",
      "text": "The ending suddenly grows emphatic. <i>Fortissimo</i> chords and an upward flourish carry the piano into E major, the key of the middle song. Chopin ends his light scherzo with both hands speaking at full strength.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Tomaszewski describes the dramatic final turn, fortissimo chords and ascending major-key passage. https://chopin.nifc.pl/en/chopin/kompozycja/191"
    }
  ],
  "transitions": [
    {
      "id": "into-middle-song",
      "title": "E major brings a low melody",
      "from": "A · Semitone clashes and clipped chords",
      "to": "B · The left hand sings in E major",
      "at": { "t": 54 },
      "span": [44, 66],
      "how": "<p>The E-minor scherzando closes and <i>Più lento</i> introduces E major. The left hand carries a sustained melody in the cello’s range. Rising and falling right-hand figures replace the opening’s clipped chords and semitone clashes.</p>",
      "devices": ["tempo change", "texture change", "register change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Slower middle and cello-register melody: https://chopin.nifc.pl/en/chopin/kompozycja/191. Più lento and E major: https://en.wikipedia.org/wiki/Étude_Op._25,_No._5_(Chopin)."
    },
    {
      "id": "into-scherzando-return",
      "title": "E minor brings back the joke",
      "from": "B · The left hand sings in E major",
      "to": "A′ · The E-minor joke returns",
      "at": { "t": 148 },
      "span": [138, 160],
      "how": "<p>The E-major song closes, and the quick E-minor opening returns. The left hand leaves its long melody; the piano resumes short broken chords and semitone dissonances. The marking <i>scherzando</i> again describes the clipped exchange between the hands.</p>",
      "devices": ["tempo change", "texture change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "The étude’s scherzo-and-trio design and return: https://chopin.nifc.pl/en/chopin/kompozycja/191 and https://en.wikipedia.org/wiki/Étude_Op._25,_No._5_(Chopin)."
    },
    {
      "id": "into-major-coda",
      "title": "The piano ends in E major",
      "from": "A′ · The E-minor joke returns",
      "to": "Coda · E major, fortissimo",
      "at": { "t": 186 },
      "span": [176, 198],
      "how": "<p>The returning E-minor scherzando leads to a forceful coda. <i>Fortissimo</i> chords and an ascending piano flourish establish E major. The major key of the middle song now supplies the closing harmony.</p>",
      "devices": ["texture change", "register change", "crescendo build"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Final fortissimo chords and major-key flourish: https://chopin.nifc.pl/en/chopin/kompozycja/191."
    }
  ]
};
