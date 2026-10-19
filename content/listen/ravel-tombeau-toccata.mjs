export default {
  "id": "ravel-tombeau-toccata", "composer": "ravel", "order": 34,
  "work": "Le Tombeau de Couperin", "movement": "VI. Toccata",
  "year": "1914–17", "key": "E minor", "forces": "Piano",
  "performers": "Marcelle Meyer, piano", "recorded": "5–8 March 1954",
  "source": { "file": "File:Maurice Ravel - Le Tombeau de Couperin - Toccata (Marcelle Meyer).flac" },
  "set": { "id": "ravel-tombeau-de-couperin", "title": "Le Tombeau de Couperin — piano version", "part": 6, "of": 6 },
  "intro": "Marcelle Meyer plays the finale of <i>Le Tombeau de Couperin</i>: repeated notes start almost under the breath, then fill the keyboard. The Toccata carries its E-minor opening into an emphatic E-major finish.",
  "sections": [
    { "t": 0, "label": "A · Repeated notes between the hands", "m": "A", "mNote": "Quiet staccato semiquavers keep both hands busy" },
    { "t": 86, "label": "B · A melody above the semiquavers", "m": "B", "mNote": "Longer notes sing over the quick accompaniment" },
    { "t": 132, "label": "Dev · Short figures cross the keyboard", "m": "Dev", "mNote": "The hands exchange quick figures and sustained phrases" },
    { "t": 188, "label": "Coda · Chords drive towards E major", "m": "Coda", "mNote": "Repeated attacks grow into full chords and bass octaves" },
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Two hands on repeated notes",
      "text": "Ravel begins <i>pianissimo</i>, with staccato semiquavers shared between the hands. The repeated notes have a dry, quick touch. Out of those tiny attacks he builds a finale that eventually needs almost the whole keyboard.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Toccata, p. 24: Vif, 2/4, pp, repeated semiquavers and staccato articulation. The final pages expand to chords and wide arpeggios.",
    },
    {
      "t": 30, "kind": "world", "title": "Beethoven and Joseph de Marliave",
      "text": "The Toccata remembers Captain Joseph de Marliave, a musicologist who writes about Beethoven’s string quartets and is killed in the First World War. His widow is the pianist Marguerite Long, who brings Ravel’s completed suite to the concert platform.",
      "basis": "documented", "precision": "passage",
      "evidence": "BnF records the dedication and Long’s première: https://catalogue.bnf.fr/ark:/12148/cb13917720k. Marliave’s Beethoven scholarship: https://en.wikipedia.org/wiki/Joseph_de_Marliave. His marriage and wartime death are documented at https://interlude.hk/the-dead-are-sad-enough-ravel-le-tombeau-de-couperin/.",
    },
    {
      "t": 90, "kind": "life", "title": "The widow at the piano",
      "text": "Paris, 11 April 1919: Marguerite Long gives the first performance of the complete suite at the Salle Gaveau. Its last movement bears her husband’s name. The preceding movements carry the names of Ravel’s other friends lost in the war.",
      "basis": "documented", "precision": "passage",
      "evidence": "BnF work authority gives the date, venue, pianist and all six dedications: https://catalogue.bnf.fr/ark:/12148/cb13917720k. The fourth movement commemorates two brothers, Pierre and Pascal Gaudin; the others each commemorate one man.",
    },
    {
      "t": 132, "kind": "music", "title": "A tune inside the hurry",
      "text": "Long melodic notes stretch over the semiquavers. Ravel marks passages <i>soutenu</i>, sustained, so the singing notes hold their ground while the shorter ones keep moving. The pianist has to give both kinds of touch at once.",
      "basis": "general", "precision": "passage",
      "evidence": "Durand piano score (1918), Toccata, middle pages; Piano Practical Editions, bars 130–170, including p soutenu at bar 166. https://ks15.imslp.org/files/imglnks/usimg/4/48/IMSLP560971-PMLP4975-Le_Tombeau_de_Couperin.pdf",
    },
    {
      "t": 215, "kind": "form", "title": "Four sharps at the finish",
      "text": "The final page opens out into E major, with four sharps and a <i>fortississimo</i> flourish. The repeated notes have become full chords, reinforced by low octaves. Ravel ends the suite with a sharp, ringing stop.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Toccata, p. 32; Piano Practical Editions, bars 240–247, p. 52: E-major signature, fff and final E-major chord.",
    },
  ],
  "transitions": [
    {
      "id": "broader-line", "title": "Long notes over quick ones", "from": "A · Repeated notes between the hands", "to": "B · A melody above the semiquavers",
      "at": { "t": 86 }, "span": [76, 100],
      "how": "<p>The piano keeps its semiquavers while a longer melodic line emerges above them. Sustained notes and slurs ask for a singing right hand; the accompanying notes still need the opening’s light touch. Ravel holds the quick two-beat bar through the change.</p>",
      "devices": ["texture change", "motivic link"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Toccata, pp. 27–29: sustained melody above active accompaniment in 2/4. The existing section boundary places the passage.",
    },
    {
      "id": "final-drive", "title": "The bass joins the charge", "from": "Dev · Short figures cross the keyboard", "to": "Coda · Chords drive towards E major",
      "at": { "t": 188 }, "span": [178, 205],
      "how": "<p>The piano’s repeated attacks expand into chords, with a stronger bass beneath them. The crescendo carries this last stretch towards the four-sharp E-major ending. Even at the broadest chordal statements, semiquavers continue to propel the hands.</p>",
      "devices": ["crescendo build", "texture change"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Toccata, pp. 30–32; Piano Practical Editions, closing pages, culminating in E major at bar 240.",
    },
  ],
};
