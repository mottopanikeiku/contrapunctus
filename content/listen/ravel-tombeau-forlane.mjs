export default {
  "id": "ravel-tombeau-forlane", "composer": "ravel", "order": 32,
  "work": "Le Tombeau de Couperin", "movement": "III. Forlane",
  "year": "1914–17", "key": "E minor", "forces": "Piano",
  "performers": "azuma, piano", "recorded": "January 2007",
  "source": { "file": "File:Maurice Ravel - azuma - Le Tombeau de Couperin. III. Forlane (live).opus" },
  "set": { "id": "ravel-tombeau-de-couperin", "title": "Le Tombeau de Couperin — piano version", "part": 3, "of": 6 },
  "intro": "The Forlane has the lilting step of an old dance and chords full of sharp little surprises. Its dedication remembers Gabriel Deluc, a Basque painter killed in the First World War.",
  "sections": [
    { "t": 0, "label": "A · A dotted dance in six", "m": "A", "mNote": "Long–short figures dance over chromatic chords" },
    { "t": 170, "label": "B · Detached chords and held notes", "m": "B", "mNote": "The bass holds while the upper chords move" },
    { "t": 300, "label": "C · Dotted figures and trills", "m": "C", "mNote": "The dance’s short phrases sprout little ornaments" },
    { "t": 394, "label": "Coda · Softly, at the same pace", "m": "Coda", "mNote": "Sans ralentir: the last gestures keep the pulse" },
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "A dance with sharp elbows",
      "text": "Long–short figures give the 6/8 dance its lilt. The melody steps through chords crowded with sharps and naturals; even the quiet opening has a sting. Ravel marks it <i>Allegretto</i>, and lets the first little strain come round again.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Forlane, opening; Piano Practical Editions, bars 1–16, p. 18. The score has dotted figures, chromatic chord notes and a repeat after bar 8. https://ks15.imslp.org/files/imglnks/usimg/4/48/IMSLP560971-PMLP4975-Le_Tombeau_de_Couperin.pdf",
    },
    {
      "t": 35, "kind": "world", "title": "A painter’s memorial",
      "text": "Lieutenant Gabriel Deluc’s name stands above this dance. He is a Basque painter and a friend of Ravel, one of the men killed in the First World War whom <i>Le Tombeau de Couperin</i> remembers.",
      "basis": "documented", "precision": "passage",
      "evidence": "The BnF records Deluc’s dedication and rank: https://catalogue.bnf.fr/ark:/12148/cb13917720k. His profession, friendship and death in the war are documented by Eric T. Williams, Kansas City Symphony programme, 5–7 April 2024, p. 6: https://www.kcsymphony.org/wp-content/uploads/2024/03/FY24-CS10-Program-Book-Digital-2024-04-05.pdf",
    },
    {
      "t": 140, "kind": "world", "title": "Couperin on Ravel’s desk",
      "text": "Ravel prepares for his own Forlane by transcribing a forlane by [[couperin|François Couperin]]. The dance comes from northern Italy and finds a home at the French court around 1700. Ravel keeps its dotted step and repeated phrases, then fills them with his own wayward chords.",
      "basis": "documented", "precision": "passage",
      "evidence": "Eric T. Williams describes Ravel’s Couperin transcription, the dance’s Italian origins and its French courtly history, Kansas City Symphony programme, 5–7 April 2024, pp. 6–7. https://www.kcsymphony.org/wp-content/uploads/2024/03/FY24-CS10-Program-Book-Digital-2024-04-05.pdf",
    },
    {
      "t": 170, "kind": "music", "title": "Chords against a held bass",
      "text": "The piano alternates clipped chords with notes held across the beat. A bass note can keep sounding while the upper parts take another step. The two broad beats of 6/8 continue beneath these small disagreements.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Forlane, pp. 12–13: detached chordal writing, sustained lower voices and continuing 6/8 metre.",
    },
    {
      "t": 300, "kind": "music", "title": "Trills among the steps",
      "text": "The later phrases keep the dance’s long–short rhythm and add trills and tiny grace notes. A trill briefly turns one note into a flutter; the phrase carries on underneath. The ornaments share the beat with the main notes.",
      "basis": "general", "precision": "passage",
      "evidence": "Durand piano score (1918), Forlane, pp. 14–15, including the trill in the closing pages; the opening footnote specifies that grace notes fall on the beat.",
    },
    {
      "t": 394, "kind": "form", "title": "The dance keeps its pace",
      "text": "The final gestures become small and widely spaced. Ravel writes <i>sans ralentir</i> — without slowing — over the last <i>pianissimo</i> chord. The dance stops with its pulse still intact.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Forlane, final bars; Piano Practical Editions, p. 26, preserves the final pp and sans ralentir.",
    },
  ],
  "transitions": [
    {
      "id": "closing-gestures", "title": "A small ending, without slowing", "from": "C · Dotted figures and trills", "to": "Coda · Softly, at the same pace",
      "at": { "t": 394 }, "span": [390, 410],
      "how": "<p>The piano breaks the dance into short phrases, rests and sustained notes. A last grace-note figure leads to a soft chord over a low E. Ravel marks the ending <i>pianissimo</i> and <i>sans ralentir</i>, keeping the 6/8 step right to the close.</p>",
      "devices": ["decrescendo", "texture change"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Forlane, p. 15; Piano Practical Editions, final bars, p. 26.",
    },
  ],
};
