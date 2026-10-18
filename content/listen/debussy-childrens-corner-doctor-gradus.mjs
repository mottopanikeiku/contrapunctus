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
  "recorded": "11 April 1950, Columbia 30th Street Studio, New York; LP published 1951",
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
  "intro": "An apparently dutiful keyboard exercise acquires a wandering middle and an exuberant finish. Debussy asks for evenness “without dryness”: follow the difference between the running notes and the larger phrases they carry.",
  "question": "When does a finger exercise begin to sound like a daydream?",
  "sections": [
    { "t": 0, "label": "A · The exercise", "m": "A", "mNote": "running semiquavers surround slower melodic notes" },
    { "t": 50, "label": "B · A wandering respite", "m": "B", "mNote": "longer notes and changing harmony interrupt the exercise" },
    { "t": 74, "label": "A′ · Exercise and acceleration", "m": "A′", "mNote": "opening figuration returns and grows into an animated finish" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "Even, but not dry", "text": "The opening instruction asks for an even touch “without dryness”. Listen beyond the running semiquavers: slower notes give them a melodic direction, so the passage is more than a stream of equally important attacks.", "basis": "score-proportion", "precision": "passage", "evidence": "Viewed Durand score, plate D. & F. 7188, printed pp. 1–2: égal et sans sécheresse, running figures and sustained notes. The analysis report places the opening rise in level at 0:05–0:15; no particular finger, pedal movement or individual attack is identified. Score: https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 35, "kind": "life", "title": "A father’s tender apology", "text": "Debussy dedicated the six pieces to his daughter Chouchou, with “her father’s tender apologies for what follows”. The dedication makes this a suite offered to a child, not a claim that its intricate piano writing is a beginner’s exercise.", "basis": "documented", "precision": "passage", "evidence": "The viewed dedication leaf reads À ma chère petite Chouchou, avec les tendres excuses de son Père pour ce qui va suivre. The English wording is our translation; no claim about a particular childhood incident is made. Durand score, PDF p. 2: https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 70, "kind": "listen", "title": "Recovering the running figure", "text": "Through the brief respite and the return, compare the longer, more hesitant phrases with the original stream of notes. The exercise becomes recognisable again through its pattern of movement, not just through a louder sound.", "basis": "score-proportion", "precision": "passage", "evidence": "The report has strong changes at 0:50, 0:54, 1:00 and 1:14, with quieter windows at 0:55 and 1:10. Viewed score pp. 3–4 supplies the contrasting passage and 1° Tempo return. The 1:14 boundary is an approximate passage anchor, not an aligned bar." },
    { "t": 103, "kind": "music", "title": "The exercise breaks loose", "text": "Near the end, Debussy asks the pianist to become progressively more animated, then very animated. The running figure drives towards firm closing chords: the exercise finishes with an energy quite unlike its restrained beginning.", "basis": "score-proportion", "precision": "passage", "evidence": "Viewed score pp. 4–5: En animant peu à peu, Très animé and the final C-major chords. The report’s loudest five-second windows lie between 1:25 and 1:45, before a marked fall after 1:50. These anchors support the broad closing build, not a measured tempo curve." }
  ],
  "transitions": [
    {
      "id": "into-wandering-respite",
      "title": "The exercise loses its straight course",
      "from": "A · The exercise",
      "to": "B · A wandering respite",
      "at": { "t": 50 },
      "span": [42, 62],
      "how": "<p>The C-major exercise gives way to a less regular exchange of running figures, held notes and rests. Debussy changes the written key signatures and lets the phrases linger, so the bass no longer supports one continuous sweep of semiquavers. The connection is still pianistic movement: fragments of the exercise survive inside the more expressive passage. Listen for interrupted momentum rather than a new tune arriving with a decisive cadence.</p>",
      "devices": ["texture change", "tempo change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Viewed Durand score, printed p. 3, supplies the longer notes, rests, altered key signatures and flexible pace. The report finds changes at 0:50 and 0:54 and a low-level window at 0:55. The join is estimated from those anchors; no timestamped modulation or bar number is claimed."
    },
    {
      "id": "into-exercise-return",
      "title": "The first pattern gathers fresh speed",
      "from": "B · A wandering respite",
      "to": "A′ · Exercise and acceleration",
      "at": { "t": 74 },
      "span": [65, 85],
      "how": "<p>After the held-back phrase, 1° Tempo restores the opening’s running pattern and C-major framework. The return does not merely repeat the start: Debussy soon asks for increasing animation, takes the figure through a wider register and builds towards the forceful ending. A familiar texture supplies the recognition; its growing pace and weight supply the changed character.</p>",
      "devices": ["retransition", "motivic link", "tempo change", "crescendo build", "register change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "The strongest reported change is at 1:14; the quiet 1:10 window is followed by increasing level through 1:25–1:45. Viewed score pp. 4–5 supplies 1° Tempo, the restored figuration and progressive animation. The timing is passage-level, not bar-aligned."
    }
  ]
};
