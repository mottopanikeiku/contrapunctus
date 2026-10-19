export default {
  "id": "ravel-tombeau-toccata", "composer": "ravel", "order": 34,
  "work": "Le Tombeau de Couperin", "movement": "VI. Toccata",
  "year": "1914–17", "key": "E minor", "forces": "Piano",
  "performers": "Marcelle Meyer, piano", "recorded": "5–8 March 1954",
  "source": { "file": "File:Maurice Ravel - Le Tombeau de Couperin - Toccata (Marcelle Meyer).flac" },
  "set": { "id": "ravel-tombeau-de-couperin", "title": "Le Tombeau de Couperin — piano version", "part": 6, "of": 6 },
  "intro": "Marcelle Meyer plays the Toccata, the finale of <i>Le Tombeau de Couperin</i>. Repeated notes begin softly and spread across the keyboard, and the movement opens in E minor and ends in E major.",
  "sections": [
    { "t": 0, "label": "A · Repeated notes between the hands", "m": "A", "mNote": "Staccato semiquavers, played quietly, alternate between the hands." },
    { "t": 86, "label": "B · Melody above the semiquavers", "m": "B", "mNote": "A melody in longer notes above the quick semiquaver accompaniment." },
    { "t": 132, "label": "Dev · Short figures between the hands", "m": "Dev", "mNote": "The hands exchange quick figures and sustained phrases." },
    { "t": 188, "label": "Coda · Full chords and bass octaves, E major", "m": "Coda", "mNote": "Repeated notes thicken into full chords over bass octaves." },
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Opening, repeated semiquavers",
      "text": "Ravel begins <i>pianissimo</i>, with staccato semiquavers shared between the hands. The repeated notes are short and quick. By the final pages the texture has grown to chords and wide arpeggios across most of the keyboard.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Toccata, p. 24: Vif, 2/4, pp, repeated semiquavers and staccato articulation. The final pages expand to chords and wide arpeggios.",
    },
    {
      "t": 30, "kind": "world", "title": "Dedication to Joseph de Marliave",
      "text": "The Toccata is dedicated to the memory of Captain Joseph de Marliave, a musicologist who wrote about Beethoven’s string quartets and was killed in the First World War. His widow, the pianist Marguerite Long, gave the first performance of Ravel’s completed suite.",
      "basis": "documented", "precision": "passage",
      "evidence": "BnF records the dedication and Long’s première: https://catalogue.bnf.fr/ark:/12148/cb13917720k. Marliave’s Beethoven scholarship: https://en.wikipedia.org/wiki/Joseph_de_Marliave. His marriage and wartime death are documented at https://interlude.hk/the-dead-are-sad-enough-ravel-le-tombeau-de-couperin/.",
    },
    {
      "t": 90, "kind": "life", "title": "First performance, Paris, 1919",
      "text": "Marguerite Long gave the first performance of the complete suite at the Salle Gaveau, Paris, on 11 April 1919. The last movement bears her husband’s name. The preceding movements carry the names of other friends of Ravel’s who were lost in the war.",
      "basis": "documented", "precision": "passage",
      "evidence": "BnF work authority gives the date, venue, pianist and all six dedications: https://catalogue.bnf.fr/ark:/12148/cb13917720k. The fourth movement commemorates two brothers, Pierre and Pascal Gaudin; the others each commemorate one man.",
    },
    {
      "t": 132, "kind": "music", "title": "Sustained melody over semiquavers",
      "text": "Long melodic notes are held over continuing semiquavers. Ravel marks passages <i>soutenu</i>, sustained, and the pianist plays the held notes and the semiquavers with different touches at the same time.",
      "basis": "general", "precision": "passage",
      "evidence": "Durand piano score (1918), Toccata, middle pages; Piano Practical Editions, bars 130–170, including p soutenu at bar 166. https://ks15.imslp.org/files/imglnks/usimg/4/48/IMSLP560971-PMLP4975-Le_Tombeau_de_Couperin.pdf",
    },
    {
      "t": 215, "kind": "form", "title": "Final page in E major",
      "text": "The final page moves to E major, with a signature of four sharps and a <i>fortississimo</i> flourish. The repeated notes are now full chords, doubled by low octaves. Ravel ends the suite on a single chord.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Toccata, p. 32; Piano Practical Editions, bars 240–247, p. 52: E-major signature, fff and final E-major chord.",
    },
  ],
  "transitions": [
    {
      "id": "broader-line", "title": "Sustained melody over semiquavers", "from": "A · Repeated notes between the hands", "to": "B · Melody above the semiquavers",
      "at": { "t": 86 }, "span": [76, 100],
      "how": "<p>The piano continues its semiquavers, and a longer melodic line enters above them. Sustained notes and slurs mark the right-hand melody for a legato, singing touch, and the accompanying semiquavers keep the light touch of the opening. Ravel keeps the 2/4 metre through the change (Durand piano score, 1918, pp. 27–29).</p>",
      "devices": ["texture change", "motivic link"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Toccata, pp. 27–29: sustained melody above active accompaniment in 2/4. The existing section boundary places the passage.",
    },
    {
      "id": "final-drive", "title": "Chords and bass in the final crescendo", "from": "Dev · Short figures between the hands", "to": "Coda · Full chords and bass octaves, E major",
      "at": { "t": 188 }, "span": [178, 205],
      "how": "<p>The piano’s repeated notes widen into chords, and the bass line becomes heavier beneath them. A crescendo runs through this final section to the close in E major, with four sharps, at bar 240. The semiquaver motion continues in the hands through the broadest chordal passages.</p>",
      "devices": ["crescendo build", "texture change"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Toccata, pp. 30–32; Piano Practical Editions, closing pages, culminating in E major at bar 240.",
    },
  ],
};
