export default {
  "id": "ravel-tombeau-prelude", "composer": "ravel", "order": 30,
  "work": "Le Tombeau de Couperin", "movement": "I. Prélude",
  "year": "1914–17", "key": "E minor", "forces": "Piano",
  "performers": "Isaac David, piano", "recorded": "2017",
  "source": { "file": "File:Maurice Ravel - Isaac David - Le Tombeau de Couperin. I. Prélude.opus" },
  "set": { "id": "ravel-tombeau-de-couperin", "title": "Le Tombeau de Couperin — piano version", "part": 1, "of": 6 },
  "intro": "The Prélude is the first movement of Ravel’s memorial suite <i>Le Tombeau de Couperin</i>, and its line is carried in continuous rapid semiquavers. Isaac David plays the original version for piano.",
  "sections": [
    { "t": 0, "label": "A · Semiquavers with ornaments, E minor", "m": "A", "mNote": "Long held notes sound over quick E minor semiquaver figures." },
    { "t": 110, "label": "Dev · Running notes in the left hand", "m": "Dev", "mNote": "Running notes pass beneath a more sustained right hand." },
    { "t": 188, "label": "B · The piano climbs", "m": "B", "mNote": "The hands spread apart as the phrases grow." },
    { "t": 205, "label": "Coda · Falling runs and held notes", "m": "Coda", "mNote": "Descending runs, then a held bass, then a final climb." },
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Opening in E minor",
      "text": "The piano begins in E minor, <i>Vif</i>, with twelve semiquavers to the bar. Longer notes are held across the running figures. Ravel specifies that the grace notes fall on the beat.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Prélude, opening and footnote on grace notes; also Piano Practical Editions, pp. 5–6. https://ks15.imslp.org/files/imglnks/usimg/4/48/IMSLP560971-PMLP4975-Le_Tombeau_de_Couperin.pdf",
    },
    {
      "t": 35, "kind": "world", "title": "Dedication to Jacques Charlot",
      "text": "Above the first notes stands the name of Lieutenant Jacques Charlot, Ravel’s friend and a cousin of his publisher Jacques Durand. Charlot was one of the friends killed in the First World War whose names Ravel gave to the suite’s movements.",
      "basis": "documented", "precision": "passage",
      "evidence": "The dedication is recorded by the BnF: https://catalogue.bnf.fr/ark:/12148/cb13917720k. Eric T. Williams identifies Charlot and the wartime dedications in the Kansas City Symphony programme, 5–7 April 2024, p. 6: https://www.kcsymphony.org/wp-content/uploads/2024/03/FY24-CS10-Program-Book-Digital-2024-04-05.pdf",
    },
    {
      "t": 105, "kind": "life", "title": "Letter on a French suite, 1914",
      "text": "On 1 October 1914, after the war had begun, Ravel wrote to his former pupil about a French suite: “The Marseillaise doesn’t come into it at all, but there’ll be a forlane and a jig.”",
      "basis": "documented", "precision": "passage",
      "evidence": "Ravel to Roland-Manuel, 1 October 1914, quoted by Eric T. Williams, Kansas City Symphony programme, 5–7 April 2024, p. 5. https://www.kcsymphony.org/wp-content/uploads/2024/03/FY24-CS10-Program-Book-Digital-2024-04-05.pdf",
    },
    {
      "t": 140, "kind": "music", "title": "Semiquavers in the left hand",
      "text": "The left hand takes over the semiquavers while the right hand holds its line above them. Ravel moves the semiquavers down into the bass, then back across the keyboard. The hands continue to exchange the running semiquavers and the sustained line.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Prélude, pp. 4–5; Piano Practical Editions, bars 40–75, shows the exchanges between sustained upper notes and left-hand semiquavers.",
    },
    {
      "t": 205, "kind": "form", "title": "Final bars, descent and ascent",
      "text": "The last runs descend from the treble into the low bass, where a note is held under the pedal. The hands then climb again. A high tremolo and a short final chord end the continuous movement.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Prélude, final page; Piano Practical Editions, bars 91–97, pp. 12–13. https://ks15.imslp.org/files/imglnks/usimg/4/48/IMSLP560971-PMLP4975-Le_Tombeau_de_Couperin.pdf",
    },
  ],
  "transitions": [
    {
      "id": "beyond-the-repeat", "title": "The left hand takes over", "from": "A · Semiquavers with ornaments, E minor", "to": "Dev · Running notes in the left hand",
      "at": { "t": 110 }, "span": [100, 125],
      "how": "<p>The second ending carries the E minor opening on into the next section. The semiquavers continue, and the left hand plays them more and more often below sustained notes in the right hand. As the running line moves into the bass, both hands keep the same light articulation.</p>",
      "devices": ["motivic link", "register change"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), pp. 3–5: first and second endings and the continuation with left-hand runs.",
    },
    {
      "id": "closing-release", "title": "Descending runs to the bass", "from": "B · The piano climbs", "to": "Coda · Falling runs and held notes",
      "at": { "t": 205 }, "span": [200, 225],
      "how": "<p>The descending semiquavers cross between the hands and reach a low note, which is held under the pedal. Ravel keeps that bass sounding while a new arpeggio rises towards the final high tremolo. The running figure continues to the last chord.</p>",
      "devices": ["decrescendo", "register change", "motivic link"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Prélude, final page; Piano Practical Editions, bars 91–97, pp. 12–13.",
    },
  ],
};
