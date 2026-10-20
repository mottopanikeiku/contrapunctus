// Sources: first edition (Demets, 1906) as scanned for IMSLP #02693, viewed on Commons:
//   https://commons.wikimedia.org/wiki/File:IMSLP02693-Ravel-Miroirs_DemetsEd.pdf  (scan pp. 31–43 = Alborada del gracioso)
// IMSLP work page: https://imslp.org/wiki/Miroirs,_M.43_(Ravel,_Maurice)
// PTNA Piano Encyclopedia analysis: https://enc.piano.or.jp/en/musics/329
// Wikipedia, Alborada del gracioso: https://en.wikipedia.org/wiki/Alborada_del_gracioso
// Roger Nichols, note for Hyperion CDA67731/2: https://www.hyperion-records.co.uk/dw.asp?dc=W5434_67731
export default {
  id: 'ravel-miroirs-alborada',
  composer: 'ravel',
  order: 23,
  set: { id: 'ravel-miroirs', title: 'Miroirs', part: 4, of: 5, unit: 'pieces' },
  work: 'Miroirs',
  movement: 'IV. Alborada del gracioso — Assez vif',
  year: '1904–05',
  key: 'D minor',
  forces: 'Piano',
  performers: 'Olena Havyuk-Sheremet, piano',
  recorded: '1 April 2014',
  source: { file: 'File:Maurice Ravel - Miroirs - 4. Alborada del gracioso.flac' },
  "intro": "<i>Alborada del gracioso</i>, marked Assez vif, is the fourth piece of Ravel’s <i>Miroirs</i>: a dawn song for a Spanish jester, with guitar-like strumming on the piano between the verses. An unaccompanied melodic line interrupts the dance.",

  "sections": [
    { "t": 0, "label": "A · Assez vif, guitar-like chords", "m": "A", "mNote": "Tightly rolled chords and repeated notes set the dance rhythm." },
    { "t": 95, "label": "B · Plus lent, solo melody", "m": "B", "mNote": "Plus lent: an unaccompanied melody alternates with strummed chords." },
    { "t": 234, "label": "Link · Repeated A in the bass", "m": "Link", "mNote": "The dance rhythm returns over a repeated A in the bass." },
    { "t": 264, "label": "A′ · Dry chords over E♭", "m": "A′", "mNote": "The opening strummed chords return at ppp in a new key." },
    { "t": 304, "label": "Coda · Staccato chords accelerating to D major", "m": "Coda", "mNote": "Quiet chords accelerate towards the D major ending." }
  ],

  "cues": [
    {
      "t": 0, "kind": "music", "title": "Opening, guitar-style chords",
      "text": "The title means a dawn song of a jester. The piano opens with tightly rolled chords, marked <i>sec</i>, imitating a strummed guitar, with sharp bass notes beneath. The dance is in 6/8, and Ravel repeatedly interrupts its rhythm.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Miroirs, Demets edition (1906), p. 31: Assez vif, mf sec, les arpèges très serrés. Guitar imitation and the title: https://enc.piano.or.jp/en/musics/329. Score: https://vmirror.imslp.org/files/imglnks/usimg/e/e2/IMSLP02693-Ravel-Miroirs,DemetsEd.pdf"
    },
    {
      "t": 58, "kind": "music", "title": "Repeated-note passage",
      "text": "The right hand plays a rapidly repeated note, with short scales running off from it. The left hand keeps to a spare accompaniment below.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 33–34: rapid repeated-note passages and short scales; the technique is described at https://enc.piano.or.jp/en/musics/329."
    },
    {
      "t": 95, "kind": "form", "title": "Recitative, Plus lent",
      "text": "The dance stops under a fermata. A single melodic line follows, <i>Plus lent</i> and <i>expressif en récit</i>, with the left hand silent. Strummed chords interrupt it repeatedly at the original tempo.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 35: fermata, Plus lent, 3/4 recitative and alternating 1er Mouvement chords."
    },
    {
      "t": 150, "kind": "life", "title": "Ravel on the gracioso",
      "text": "Ravel explained that his clown, the <i>gracioso</i>, was humorous but had an edge to him, and was less well meaning than Beaumarchais’s Figaro. Roger Nichols noted that the drier tone and lighter action of the Érard pianos Ravel favoured would sharpen the “guitar” chords.",
      "basis": "documented", "precision": "passage",
      "evidence": "Roger Nichols’s note for Hyperion CDA67731/2 (2011) reports Ravel’s explanation of the clown’s character and makes the point about Érard pianos: https://www.hyperion-records.co.uk/dw.asp?dc=W5434_67731"
    },
    {
      "t": 195, "kind": "world", "title": "Dedication to Calvocoressi",
      "text": "Ravel dedicated this movement to Calvocoressi, a critic and musicologist in his circle of friends. In <i>Miroirs</i>, Calvocoressi received the Spanish jester and Ricardo Viñes the sad birds.",
      "basis": "documented", "precision": "passage",
      "evidence": "Dedications and Calvocoressi’s profession: https://imslp.org/wiki/Miroirs,_M.43_(Ravel,_Maurice) and https://enc.piano.or.jp/en/musics/329."
    },
    {
      "t": 234, "kind": "music", "title": "Repeated A in the bass",
      "text": "The song descends from its high chords and the bass holds A. Ravel writes <i>sans ralentir</i>, without slowing. The repeated note restores the pulse of the dance before the dry guitar chords return.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 39, third and fourth systems: p expressif, then repeated A and sans ralentir."
    },
    {
      "t": 264, "kind": "form", "title": "Return of the strummed chords",
      "text": "The strummed chords return at <i>ppp</i> over E♭ in the bass, marked <i>très sec et bien rythmé</i>. Repeated notes and glissandos follow.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 39–40: ppp, très sec et bien rythmé, E♭ bass and subsequent glissandos. The E♭ return is also described at https://enc.piano.or.jp/en/musics/329."
    },
    {
      "t": 304, "kind": "form", "title": "Final section and close in D major",
      "text": "Another dry chord stops under a fermata. Quiet staccato chords follow over low repeated notes, and the song does not return. The piano moves to a final rush to D major, played without slowing at the end.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 41–43: sec. fermata chord, pp staccato passage and final sans ralentir. The D-major close is described at https://enc.piano.or.jp/en/musics/329."
    },
    {
      "t": 330, "kind": "world", "title": "Ballets russes, London, 1919",
      "text": "The Ballets russes danced Alborada, in Ravel’s orchestration, at London’s Alhambra Theatre in July 1919 as part of <i>Les jardins d’Aranjuez</i>, with Chabrier’s <i>Menuet pompeux</i> and Fauré’s <i>Pavane</i>. Paris had heard the orchestral version first, on 17 May 1919, under Rhené-Baton with the Pasdeloup Orchestra.",
      "basis": "documented", "precision": "passage",
      "evidence": "Manuel Cornejo’s Maurice Ravel chronology (1919): 17 May, première of the orchestration of Alborada del gracioso, Rhené-Baton, Concerts Pasdeloup, Cirque d’hiver; 18 July, Ballets russes at London’s Alhambra Theatre, with Alborada on the programme: https://boleravel.fr/wp-content/uploads/RAVEL_Chronology_2018.pdf. Roger Nichols, Ravel (2011), chronology: the Ballets russes perform the Menuet pompeux, Alborada del gracioso and Fauré’s Pavane as Les Jardins d’Aranjuez (full-text excerpt seen)."
    }
  ],

  "transitions": [
    {
      "id": "dance-to-song", "title": "Fermata, then an unaccompanied line",
      "from": "A · Assez vif, guitar-like chords", "to": "B · Plus lent, solo melody",
      "at": { t: 95 }, "span": [83, 110],
      "how": "<p>The dance reaches a fortissimo chord and stops under a fermata. Ravel changes to 3/4 and <i>Plus lent</i>, and a single unaccompanied line enters, marked <i>expressif en récit</i>. Between its phrases the strummed chords return at <i>1er Mouvement</i>.</p>",
      "devices": ["fermata", "tempo change", "metre change", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition (1906), pp. 34–35."
    },
    {
      "id": "song-to-repeated-a", "title": "The song descends to A",
      "from": "B · Plus lent, solo melody", "to": "Link · Repeated A in the bass",
      "at": { t: 234 }, "span": [221, 249],
      "how": "<p>The high chords marked <i>ff très expressif</i> descend into a softer phrase. The piano holds a repeated A, marked <i>sans ralentir</i>. The dance pulse resumes as the last notes of the song end.</p>",
      "devices": ["decrescendo", "texture change", "link passage"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 39, first four systems."
    },
    {
      "id": "link-to-return", "title": "Bass moves from A to E♭",
      "from": "Link · Repeated A in the bass", "to": "A′ · Dry chords over E♭",
      "at": { t: 264 }, "span": [252, 278],
      "how": "<p>The repeated A gets softer, and the bass then moves to E♭ beneath the returning guitar chords. Ravel marks the chords <i>ppp</i> and <i>très sec et bien rythmé</i>. The harmony moves on towards F♯ as the chords grow louder.</p>",
      "devices": ["direct modulation", "decrescendo", "crescendo build", "motivic link"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, pp. 39–40; E♭–F♯ route described at https://enc.piano.or.jp/en/musics/329."
    },
    {
      "id": "return-to-coda", "title": "Quiet chords after the fermata",
      "from": "A′ · Dry chords over E♭", "to": "Coda · Staccato chords accelerating to D major",
      "at": { t: 304 }, "span": [292, 318],
      "how": "<p>The repeated-note passage ends on a fortissimo chord marked <i>sec.</i>, held under a fermata. Quiet staccato chords follow, with low repeated notes in the left hand, and lead into the coda, which closes in D major.</p>",
      "devices": ["fermata", "decrescendo", "texture change", "motivic link"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Demets edition, p. 41, last two systems; D-major close on p. 43."
    }
  ],
};
