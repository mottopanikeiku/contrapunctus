export default {
  "id": "ravel-tombeau-forlane", "composer": "ravel", "order": 32,
  "work": "Le Tombeau de Couperin", "movement": "III. Forlane",
  "year": "1914–17", "key": "E minor", "forces": "Piano",
  "performers": "azuma, piano", "recorded": "January 2007",
  "source": { "file": "File:Maurice Ravel - azuma - Le Tombeau de Couperin. III. Forlane (live).opus" },
  "set": { "id": "ravel-tombeau-de-couperin", "title": "Le Tombeau de Couperin — piano version", "part": 3, "of": 6 },
  "intro": "The Forlane, the third movement of <i>Le Tombeau de Couperin</i>, takes the rhythm of an old dance and sets it to chords that move in unexpected directions. It is dedicated to the memory of Gabriel Deluc, a Basque painter killed in the First World War.",
  "sections": [
    { "t": 0, "label": "A · Dotted dance in six", "m": "A", "mNote": "Long–short figures over chromatic chords." },
    { "t": 170, "label": "B · Detached chords over held notes", "m": "B", "mNote": "The bass holds while the upper chords move." },
    { "t": 300, "label": "C · Dotted figures and trills", "m": "C", "mNote": "Short dance phrases with added ornaments." },
    { "t": 394, "label": "Coda · Softly, at the same pace", "m": "Coda", "mNote": "The closing bars stay in tempo, sans ralentir." },
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Forlane, opening",
      "text": "Ravel marks the 6/8 dance <i>Allegretto</i>, and long–short figures set its rhythm. From the quiet opening, the melody moves step by step through chords full of sharps and naturals. The first short strain is repeated.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Forlane, opening; Piano Practical Editions, bars 1–16, p. 18. The score has dotted figures, chromatic chord notes and a repeat after bar 8. https://ks15.imslp.org/files/imglnks/usimg/4/48/IMSLP560971-PMLP4975-Le_Tombeau_de_Couperin.pdf",
    },
    {
      "t": 35, "kind": "world", "title": "Dedication to Gabriel Deluc",
      "text": "This dance is dedicated to Lieutenant Gabriel Deluc. He was a Basque painter and a friend of Ravel, and one of the men killed in the First World War who are commemorated in <i>Le Tombeau de Couperin</i>.",
      "basis": "documented", "precision": "passage",
      "evidence": "The BnF records Deluc’s dedication and rank: https://catalogue.bnf.fr/ark:/12148/cb13917720k. His profession, friendship and death in the war are documented by Eric T. Williams, Kansas City Symphony programme, 5–7 April 2024, p. 6: https://www.kcsymphony.org/wp-content/uploads/2024/03/FY24-CS10-Program-Book-Digital-2024-04-05.pdf",
    },
    {
      "t": 140, "kind": "world", "title": "Ravel’s Couperin transcription",
      "text": "Before writing his own Forlane, Ravel transcribed a forlane by [[couperin|François Couperin]]. The dance came from northern Italy and was taken up at the French court around 1700. Ravel’s movement keeps its dotted step and repeated phrases and sets them to his own chords.",
      "basis": "documented", "precision": "passage",
      "evidence": "Eric T. Williams describes Ravel’s Couperin transcription, the dance’s Italian origins and its French courtly history, Kansas City Symphony programme, 5–7 April 2024, pp. 6–7. https://www.kcsymphony.org/wp-content/uploads/2024/03/FY24-CS10-Program-Book-Digital-2024-04-05.pdf",
    },
    {
      "t": 170, "kind": "music", "title": "Chords over a held bass",
      "text": "The piano alternates detached chords with notes held across the beat. A bass note can sound on while the upper parts move to the next chord. The two dotted-crotchet beats of 6/8 continue throughout.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Forlane, pp. 12–13: detached chordal writing, sustained lower voices and continuing 6/8 metre.",
    },
    {
      "t": 300, "kind": "music", "title": "Trills and grace notes",
      "text": "The later phrases keep the dance’s long–short rhythm and add trills and short grace notes. During a trill on one note, the phrase continues in the other parts. A footnote at the opening of the Durand score (1918) specifies that grace notes fall on the beat.",
      "basis": "general", "precision": "passage",
      "evidence": "Durand piano score (1918), Forlane, pp. 14–15, including the trill in the closing pages; the opening footnote specifies that grace notes fall on the beat.",
    },
    {
      "t": 394, "kind": "form", "title": "Final bars, sans ralentir",
      "text": "The final gestures are short and widely spaced. Over the last <i>pianissimo</i> chord Ravel writes <i>sans ralentir</i> (without slowing).",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Forlane, final bars; Piano Practical Editions, p. 26, preserves the final pp and sans ralentir.",
    },
  ],
  "transitions": [
    {
      "id": "closing-gestures", "title": "The close, without slowing", "from": "C · Dotted figures and trills", "to": "Coda · Softly, at the same pace",
      "at": { "t": 394 }, "span": [390, 410],
      "how": "<p>The piano breaks the dance into short phrases, rests and sustained notes. A last grace-note figure leads to a soft chord over a low E. Ravel marks the ending <i>pianissimo</i> and <i>sans ralentir</i>, and the 6/8 metre continues to the final bar.</p>",
      "devices": ["decrescendo", "texture change"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Forlane, p. 15; Piano Practical Editions, final bars, p. 26.",
    },
  ],
};
