export default {
  "id": "rachmaninoff-prelude-op32-5",
  "composer": "rachmaninoff",
  "order": 60,
  "work": "Prelude in G major, Op. 32 No. 5",
  "movement": "Moderato",
  "year": "1910",
  "key": "G major",
  "forces": "Piano",
  "performers": "Sergei Rachmaninoff",
  "recorded": "3 May 1920",
  "source": { "archive": { "item": "195-complete-rachmaninoff-cd-10", "file": "189 - Complete RACHMANINOFF - CD 10 - Rachmaninov - Prelude, Op. 32, No. 5 (rec. 3.V.1920).mp3" } },
  "intro": "Rachmaninoff plays his Prelude in G major, Op. 32 No. 5, marked Moderato. A long melody sits above five-note groups in the left hand and rises into high figures before the final chord.",
  "sections": [
    { "t": 0, "label": "A · Melody above five-note groups", "m": "A", "mNote": "The left hand plays running figures beneath a slow upper melody." },
    { "t": 58, "label": "B · Melody in lower voice", "m": "B", "mNote": "A lower melody sounds beneath quick right-hand figures." },
    { "t": 120, "label": "A′ · First melody in G major", "m": "A′", "mNote": "A tempo: the opening melody returns over five-note groups" },
    { "t": 152, "label": "Coda · High figures and a trill", "m": "Coda", "mNote": "The right hand climbs, then holds a trill" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "Left-hand quintuplets and melody", "text": "The left hand plays five-note groups before the melody enters above it, marked <i>dolce</i>. Long notes in the right hand are held over the accompaniment. Triplets in the melody set three against five.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition (1911), p. 22: Moderato, left-hand quintuplets and a dolce melody with triplets. https://s9.imslp.org/files/imglnks/usimg/e/e0/IMSLP105591-PMLP02018-Rachmaninov_-_32_-_13_Preludes_(ed.Gutheil).pdf" },
    { "t": 28, "kind": "world", "title": "Victor recording, Camden, 1920", "text": "On 3 May 1920 Rachmaninoff recorded the Prelude at Victor’s Church Building Laboratory in Camden, New Jersey. The company issued take one on a twelve-inch record, Victor 74645.", "basis": "documented", "precision": "passage", "evidence": "Discography of American Historical Recordings, matrix C-23985: take 1, 3 May 1920, Camden Church Building Laboratory; issued as Victor 74645. https://adp.library.ucsb.edu/index.php/matrix/detail/700009184/C-23985-Prelude_in_G_major_op._32_no._5" },
    { "t": 58, "kind": "music", "title": "Middle section, melody in lower part", "text": "In the middle section the melody passes to the lower part, beneath quick turning figures in the right hand. Sharps and flats take the harmony away from G major. A rising chromatic run leads to a pause.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, pp. 23–24: lower melody beneath right-hand figuration, chromatic run and fermata." },
    { "t": 120, "kind": "form", "title": "Return of the opening melody", "text": "The first melody returns at <i>a tempo</i>, again above the left hand’s five-note groups. Its long notes are once more decorated with small ornaments.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 24, final system, continuing on p. 25: a tempo and the return of the G major melody over quintuplets." },
    { "t": 152, "kind": "music", "title": "Closing bars, trill and final chord", "text": "The right hand plays high figuration, marked <i>pp leggiero</i>. A long trill sounds over the last figures in the left hand. The piece ends on a G major chord under <i>perdendo</i>.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 25: pp leggiero, high figuration, trill, perdendo and final G major chord." }
  ],
  "transitions": [
    { "id": "into-middle-expansion", "title": "Melody moves beneath the figuration", "from": "A · Melody above five-note groups", "to": "B · Melody in lower voice", "at": { "t": 58 }, "span": [45, 74], "how": "<p>The piano’s quick notes keep moving while the melody moves down into the lower part. The right-hand figuration continues above it, and chromatic notes take the harmony away from G major. The melody is now in the bass.</p>", "devices": ["motivic link", "register change", "texture change"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, pp. 23–24: the melody moves beneath right-hand figuration in the chromatic middle passage." },
    { "id": "into-opening-return", "title": "Return of the opening melody", "from": "B · Melody in lower voice", "to": "A′ · First melody in G major", "at": { "t": 120 }, "span": [105, 135], "how": "<p>A <i>dolce</i> phrase leads into a ritardando, and the tempo then returns with <i>a tempo</i>. At this point the right hand takes up the first G major melody again, and the left hand goes back to its five-note groups.</p>", "devices": ["retransition", "motivic link", "texture change"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 24: dolce continuation, ritardando and a tempo return in G major." },
    { "id": "into-decorated-close", "title": "Return of the tune and closing trill", "from": "A′ · First melody in G major", "to": "Coda · High figures and a trill", "at": { "t": 152 }, "span": [140, 174], "how": "<p>At <i>pp leggiero</i>, the right hand climbs above the returning tune. Beneath the high figures and the long trill, the left hand continues its five-note groups. Under the marking <i>perdendo</i>, the piano dies away to the closing G major chord.</p>", "devices": ["register change", "texture change", "decrescendo"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 25: pp leggiero, quintuplet accompaniment, trill, perdendo and the G major close." }
  ]
};
