export default {
  "id": "ravel-tombeau-prelude", "composer": "ravel", "order": 30,
  "work": "Le Tombeau de Couperin", "movement": "I. Prélude",
  "year": "1914–17", "key": "E minor", "forces": "Piano",
  "performers": "Isaac David, piano", "recorded": "2017",
  "source": { "file": "File:Maurice Ravel - Isaac David - Le Tombeau de Couperin. I. Prélude.opus" },
  "set": { "id": "ravel-tombeau-de-couperin", "title": "Le Tombeau de Couperin — piano version", "part": 1, "of": 6 },
  "intro": "Ravel opens his memorial suite with a handful of quick notes that scarcely stop moving. Isaac David plays the piano original, where a singing line has to survive inside the bustle of semiquavers.",
  "sections": [
    { "t": 0, "label": "A · Semiquavers and tiny ornaments", "m": "A", "mNote": "Long notes sing through the quick E-minor figures" },
    { "t": 110, "label": "Dev · The left hand takes the runs", "m": "Dev", "mNote": "Running notes pass beneath a more sustained right hand" },
    { "t": 188, "label": "B · The piano climbs", "m": "B", "mNote": "The hands spread apart as the phrases grow" },
    { "t": 205, "label": "Coda · Falling runs and held notes", "m": "Coda", "mNote": "Descending runs, a held bass, then a final climb" },
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Twelve notes to a bar",
      "text": "The piano sets off in E minor, <i>Vif</i>, with twelve semiquavers to the bar. Longer notes stretch across the running figures. Even the little ornaments have a firm place: Ravel specifies that grace notes fall on the beat.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Prélude, opening and footnote on grace notes; also Piano Practical Editions, pp. 5–6. https://ks15.imslp.org/files/imglnks/usimg/4/48/IMSLP560971-PMLP4975-Le_Tombeau_de_Couperin.pdf",
    },
    {
      "t": 35, "kind": "world", "title": "Jacques Charlot’s name",
      "text": "Above the first notes stands the name of Lieutenant Jacques Charlot, Ravel’s friend and a cousin of his publisher Jacques Durand. Charlot is one of the friends killed in the First World War whose names Ravel gives to the suite’s movements.",
      "basis": "documented", "precision": "passage",
      "evidence": "The dedication is recorded by the BnF: https://catalogue.bnf.fr/ark:/12148/cb13917720k. Eric T. Williams identifies Charlot and the wartime dedications in the Kansas City Symphony programme, 5–7 April 2024, p. 6: https://www.kcsymphony.org/wp-content/uploads/2024/03/FY24-CS10-Program-Book-Digital-2024-04-05.pdf",
    },
    {
      "t": 105, "kind": "life", "title": "A French suite, in wartime",
      "text": "On 1 October 1914, Ravel writes to his former pupil Roland-Manuel about a French suite: “The Marseillaise doesn’t come into it at all, but there’ll be a forlane and a jig.” The war has begun; the dances are already taking shape.",
      "basis": "documented", "precision": "passage",
      "evidence": "Ravel to Roland-Manuel, 1 October 1914, quoted by Eric T. Williams, Kansas City Symphony programme, 5–7 April 2024, p. 5. https://www.kcsymphony.org/wp-content/uploads/2024/03/FY24-CS10-Program-Book-Digital-2024-04-05.pdf",
    },
    {
      "t": 140, "kind": "music", "title": "The left hand runs",
      "text": "The left hand takes over the flowing notes while the right hand holds its line above them. Ravel sends the semiquavers down into the bass, then back across the keyboard. The hands keep exchanging the quick work and the singing work.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Prélude, pp. 4–5; Piano Practical Editions, bars 40–75, shows the exchanges between sustained upper notes and left-hand semiquavers.",
    },
    {
      "t": 205, "kind": "form", "title": "Down, then up again",
      "text": "The last runs descend from the treble into the low bass, where a note hangs under the pedal. Then the hands climb once more. A high tremolo and a short final chord bring the ceaseless movement to a stop.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Prélude, final page; Piano Practical Editions, bars 91–97, pp. 12–13. https://ks15.imslp.org/files/imglnks/usimg/4/48/IMSLP560971-PMLP4975-Le_Tombeau_de_Couperin.pdf",
    },
  ],
  "transitions": [
    {
      "id": "beyond-the-repeat", "title": "The left hand takes over", "from": "A · Semiquavers and tiny ornaments", "to": "Dev · The left hand takes the runs",
      "at": { "t": 110 }, "span": [100, 125],
      "how": "<p>The second ending sends the E-minor opening onwards. The semiquavers continue, but the left hand increasingly carries them below sustained right-hand notes. Both hands have to keep the same light articulation as the running line moves into the bass.</p>",
      "devices": ["motivic link", "register change"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), pp. 3–5: first and second endings and the continuation with left-hand runs.",
    },
    {
      "id": "closing-release", "title": "The runs reach the bass", "from": "B · The piano climbs", "to": "Coda · Falling runs and held notes",
      "at": { "t": 205 }, "span": [200, 225],
      "how": "<p>The descending semiquavers cross between the hands and reach a low note held under the pedal. Ravel leaves that bass sounding, then sends a new arpeggio upwards towards the final high tremolo. The running figure survives right to the last chord.</p>",
      "devices": ["decrescendo", "register change", "motivic link"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Prélude, final page; Piano Practical Editions, bars 91–97, pp. 12–13.",
    },
  ],
};
