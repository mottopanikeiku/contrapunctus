export default {
  "id": "chopin-etude-op10-5-cortot",
  "composer": "chopin",
  "order": 20,
  "work": "Étude in G♭ major, Op. 10 No. 5; Étude in G♭ major, Op. 25 No. 9",
  "movement": "Black Keys, followed by Butterfly — complete disc side",
  "year": "1829–37",
  "key": "G♭ major",
  "forces": "Piano",
  "performers": "Alfred Cortot",
  "recorded": "22 April 1920, Camden",
  "source": {
    "archive": {
      "item": "78_etude-in-g-flat-major-black-keys-etude-in-g-flat-major-the-butterfly_alfred-co_gbia0291196a",
      "file": "Etude in G Flat Major (Black Keys); Etude  - Alfred Cortot.mp3"
    },
    "rights": {
      "basis": "us-published-before-cutoff",
      "published": 1920,
      "evidence": "Victor 64989, matrix B23953, take2, Camden 22 April 1920; opened DAHR matrix page: https://adp.library.ucsb.edu/index.php/matrix/detail/700009148/B-23953-Etude_in_G_flat_op._10_no._5_Black_keys . Archive item dates this Victor issue to 1920."
    }
  },
  "concert": false,
  "intro": "Alfred Cortot fits two G♭-major études onto this 1920 Victor side: the running triplets of <i>Black Keys</i>, then the clipped little leaps of <i>Butterfly</i>. The pause between them is part of the original pairing.",
  "sections": [
    { "t": 0, "label": "A · Black Keys: triplets and chords", "m": "A", "mNote": "The right hand runs over the black notes" },
    { "t": 28.3, "label": "B · Black Keys: D♭-major middle", "m": "B", "mNote": "Left-hand calls accompany the continuing right-hand triplets" },
    { "t": 53.9, "label": "A′ · Black Keys: G♭-major return and close", "m": "A′", "mNote": "The opening returns before wide arpeggios and closing octaves" },
    { "t": 96.5, "label": "C · Butterfly: clipped leaps and slurs", "m": "C", "mNote": "Short right-hand groups mix detached notes with connected pairs" }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Black notes, two hands",
      "text": "<i>Black Keys</i> begins with right-hand triplets above detached left-hand chords. Chopin writes quick changes from loud to soft: the opening phrase speaks boldly, then answers lower down the piano. The running notes are marked <i>legato</i>.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Opening articulation and dynamic contrasts: https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin). The Alfred Cortot Archives confirms both études on matrix B-23953, take 2, recorded 22 April 1920 at Camden: https://www.cortotarchives.org/recordings/11."
    },
    {
      "t": 46,
      "kind": "world",
      "title": "Cortot at the lesson",
      "text": "Cortot is also the étude’s editor and teacher on paper. In his 1915 study edition he asks for “brilliant and delicate legato”, the <i>jeu perlé</i> or pearly playing. His exercises prepare the hand to shift between widely separated positions.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Alfred Cortot, Frédéric Chopin: 12 Études, Op. 10, Édition de travail (Salabert, 1915), p. 33; instructions quoted at https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin)."
    },
    {
      "t": 96.5,
      "kind": "form",
      "title": "A butterfly after the pause",
      "text": "The second étude is <i>Butterfly</i>, Op. 25 No. 9, also in G♭ major. Its right-hand groups mix little slurs with detached notes and octaves. After the first étude’s stream of triplets, the piano moves in short hops.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "The Victor label identifies the pairing; the recording’s established second-piece boundary is retained. Op. 25 No. 9’s articulation: https://en.wikipedia.org/wiki/Étude_Op._25,_No._9_(Chopin)."
    }
  ],
  "transitions": [
    {
      "id": "into-black-keys-middle",
      "title": "D♭ major under the running triplets",
      "from": "A · Black Keys: triplets and chords",
      "to": "B · Black Keys: D♭-major middle",
      "at": { "t": 28.3 },
      "span": [18.3, 40.3],
      "how": "<p>The first étude moves into D♭ major. Its black-note triplets continue while the left hand shifts the bass and the chords. Later in this middle section, short left-hand calls sound beneath the right hand’s <i>sempre legatissimo</i>.</p>",
      "devices": ["sequence", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Op. 10 No. 5, middle section and marking at bar 33: https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin), citing Leichtentritt, vol. 2, pp. 106–108."
    },
    {
      "id": "into-black-keys-return",
      "title": "G♭ major and the first figure",
      "from": "B · Black Keys: D♭-major middle",
      "to": "A′ · Black Keys: G♭-major return and close",
      "at": { "t": 53.9 },
      "span": [43.9, 65.9],
      "how": "<p>The left hand leads back to G♭ major, and the first étude’s opening figure returns. It softens towards <i>pianissimo</i> before the coda opens into broad arpeggios and a final run of black-key octaves in both hands.</p>",
      "devices": ["retransition", "motivic link", "decrescendo"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Op. 10 No. 5, return from bar 49 and coda: https://en.wikipedia.org/wiki/Étude_Op._10,_No._5_(Chopin), citing Leichtentritt, vol. 2, pp. 108–109."
    },
    {
      "id": "between-etudes",
      "title": "A pause between two G♭-major études",
      "from": "A′ · Black Keys: G♭-major return and close",
      "to": "C · Butterfly: clipped leaps and slurs",
      "at": { "t": 96.5 },
      "span": [86.5, 108.5],
      "how": "<p><i>Black Keys</i> closes in G♭ major and the piano falls silent. <i>Butterfly</i> begins in the same key, marked <i>Allegro assai</i>. Short slurred and detached right-hand groups replace the triplets, with a light accompaniment beneath them.</p>",
      "devices": ["general pause", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Victor 64989 label: https://archive.org/details/78_etude-in-g-flat-major-black-keys-etude-in-g-flat-major-the-butterfly_alfred-co_gbia0291196a. Second étude’s key, tempo and articulation: https://en.wikipedia.org/wiki/Étude_Op._25,_No._9_(Chopin)."
    }
  ]
};
