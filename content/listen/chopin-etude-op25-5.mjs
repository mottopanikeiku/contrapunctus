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
  "intro": "Chopin’s Étude in E minor, Op. 25 No. 5, marked Vivace, is built on quick semitone clashes, and its middle section is an E-major melody in the low register of the piano. Edward Neeman plays.",
  "sections": [
    { "t": 0, "label": "A · Semitone clashes and short chords", "m": "A", "mNote": "Quick dissonances break into light, scherzando piano writing." },
    { "t": 54, "label": "B · Left-hand melody in E major", "m": "B", "mNote": "A low melody under rising and falling figures in the right hand" },
    { "t": 148, "label": "A′ · E minor, opening material returns", "m": "A′", "mNote": "The broken rhythms and quick clashes return after the middle section." },
    { "t": 186, "label": "Coda · E major, fortissimo", "m": "Coda", "mNote": "Full chords and an upward flourish close in E major." }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Semitone clashes, right hand",
      "text": "The right hand repeatedly sounds notes a semitone apart, which produces quick minor-second clashes against the E minor theme. Chopin marked the music <i>scherzando</i> (joking) and broke its phrases into short, lightly played gestures.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Minor-second dissonances: https://en.wikipedia.org/wiki/Étude_Op._25,_No._5_(Chopin). Vivace, scherzando and broken rhythms: Mieczysław Tomaszewski, https://chopin.nifc.pl/en/chopin/kompozycja/191."
    },
    {
      "t": 54,
      "kind": "form",
      "title": "Più lento in E major",
      "text": "The <i>Più lento</i> is slower and in E major. The melody moves to the left hand, in the range of a cello, while the right hand plays rising and falling figuration above it.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "E-major Più lento: https://en.wikipedia.org/wiki/Étude_Op._25,_No._5_(Chopin). Cello-register melody and accompanying figuration: https://chopin.nifc.pl/en/chopin/kompozycja/191."
    },
    {
      "t": 87,
      "kind": "world",
      "title": "Dedication of Op. 25, 1837",
      "text": "The twelve études of Op. 25 appeared in 1837 with a dedication to Marie d’Agoult, the companion of Chopin’s friend Franz Liszt.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "IMSLP, Études, Op. 25: first published 1837 (Paris: Maurice Schlesinger), dedicated to Comtesse d’Agoult (1805–1876): https://imslp.org/wiki/Études,_Op.25_(Chopin,_Frédéric). Liszt’s relationship with Marie d’Agoult from 1834: https://www.liszt.org/p/chronology.html"
    },
    {
      "t": 120,
      "kind": "world",
      "title": "Sitsky’s First Piano Sonata",
      "text": "Larry Sitsky, one of Neeman’s teachers, wrote his <i>First Piano Sonata</i> for him. Neeman made its first recording on his debut album of 2016, where it appeared alongside Rachmaninoff.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Australian National University biography: Sitsky as teacher, the dedicated Sonata No. 1 and Neeman’s March 2016 debut album Rachmaninoff & Sitsky. https://music.cass.anu.edu.au/people/dr-edward-neeman"
    },
    {
      "t": 148,
      "kind": "form",
      "title": "Return of the opening section",
      "text": "The opening in E minor returns at its quicker pace. The low melodic line stops, and the piano resumes its broken rhythms and brief dissonances. The hands play short exchanges.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Return of the scherzando outer section after the slower trio: https://chopin.nifc.pl/en/chopin/kompozycja/191 and https://en.wikipedia.org/wiki/Étude_Op._25,_No._5_(Chopin)."
    },
    {
      "t": 186,
      "kind": "form",
      "title": "Coda in E major",
      "text": "At the end the dynamic rises sharply. <i>Fortissimo</i> chords and an ascending passage take the piano into E major, the key of the middle section. Both hands play at full strength in the closing bars.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Tomaszewski describes the dramatic final turn, fortissimo chords and ascending major-key passage. https://chopin.nifc.pl/en/chopin/kompozycja/191"
    }
  ],
  "transitions": [
    {
      "id": "into-middle-song",
      "title": "Più lento in E major",
      "from": "A · Semitone clashes and short chords",
      "to": "B · Left-hand melody in E major",
      "at": { "t": 54 },
      "span": [44, 66],
      "how": "<p>The E-minor scherzando closes and the <i>Più lento</i> begins in E major. The left hand plays a sustained melody in the cello’s range. The right hand plays rising and falling figures in place of the clipped chords and semitone clashes of the opening.</p>",
      "devices": ["tempo change", "texture change", "register change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Slower middle and cello-register melody: https://chopin.nifc.pl/en/chopin/kompozycja/191. Più lento and E major: https://en.wikipedia.org/wiki/Étude_Op._25,_No._5_(Chopin)."
    },
    {
      "id": "into-scherzando-return",
      "title": "Return of the E-minor opening",
      "from": "B · Left-hand melody in E major",
      "to": "A′ · E minor, opening material returns",
      "at": { "t": 148 },
      "span": [138, 160],
      "how": "<p>The E-major section closes, and the quick E-minor opening returns. The left hand gives up its long melody, and the piano resumes the short broken chords and semitone dissonances. The marking <i>scherzando</i> again applies to the clipped exchange between the hands.</p>",
      "devices": ["tempo change", "texture change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "The étude’s scherzo-and-trio design and return: https://chopin.nifc.pl/en/chopin/kompozycja/191 and https://en.wikipedia.org/wiki/Étude_Op._25,_No._5_(Chopin)."
    },
    {
      "id": "into-major-coda",
      "title": "Coda in E major",
      "from": "A′ · E minor, opening material returns",
      "to": "Coda · E major, fortissimo",
      "at": { "t": 186 },
      "span": [176, 198],
      "how": "<p>The E-minor scherzando music returns and leads into a forceful coda. <i>Fortissimo</i> chords and a rising flourish on the piano establish E major, the key of the middle section.</p>",
      "devices": ["texture change", "register change", "crescendo build"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Final fortissimo chords and major-key flourish: https://chopin.nifc.pl/en/chopin/kompozycja/191."
    }
  ]
};
