export default {
  "id": "rachmaninoff-prelude-op32-12",
  "composer": "rachmaninoff",
  "order": 50,
  "work": "Prelude in G♯ minor, Op. 32 No. 12",
  "movement": "Allegro",
  "year": "1910",
  "key": "G♯ minor",
  "forces": "Piano",
  "performers": "Sergei Rachmaninoff",
  "recorded": "21 January 1921",
  "source": { "archive": { "item": "195-complete-rachmaninoff-cd-10", "file": "187 - Complete RACHMANINOFF - CD 10 - Rachmaninov - Prelude, Op. 32, No. 12 (rec. 21.I.1921).mp3" } },
  "intro": "Rachmaninoff plays his G♯ minor Prelude, with a left-hand melody beneath quick, circling notes. The hands exchange jobs in the middle, and the little figures keep moving almost to the end.",
  "sections": [
    { "t": 0, "label": "A · Circling notes above a low tune", "m": "A", "mNote": "The right hand ripples while the left sings" },
    { "t": 52, "label": "B · The melody moves upstairs", "m": "B", "mNote": "Running left-hand notes accompany the upper melody" },
    { "t": 96, "label": "A′ · The circling figure returns", "m": "A′", "mNote": "The upper notes resume above the lower tune" },
    { "t": 128, "label": "Coda · Meno mosso, then perdendo", "m": "Coda", "mNote": "The figures slow and fade towards G♯" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "The left hand sings", "text": "The right hand opens alone with a circling semiquaver figure. Beneath it, the left hand begins a melody in longer notes. The upper part keeps shimmering while the tune takes its time.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition (1911), p. 48: Allegro in 12/8, right-hand semiquavers and the later left-hand melodic entry. https://s9.imslp.org/files/imglnks/usimg/e/e0/IMSLP105591-PMLP02018-Rachmaninov_-_32_-_13_Preludes_(ed.Gutheil).pdf" },
    { "t": 52, "kind": "music", "title": "The hands exchange jobs", "text": "In the middle passage, the tune rises into the right hand and the running notes move below it. The melody opens into wider intervals; chords begin to fill out the line as the piano grows stronger.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, pp. 49–50: upper melody over left-hand semiquavers, followed by the expanding chordal passage." },
    { "t": 96, "kind": "form", "title": "The little circles return", "text": "The quick upper figure returns above the lower melody. Rachmaninoff again separates the two hands sharply: one sings in long notes while the other turns around a handful of pitches. The passage gathers strength once more before the close.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 50, latter systems: the upper semiquaver figure returns, with a lower melody and a further rise to ff." },
    { "t": 128, "kind": "music", "title": "Still moving, growing quiet", "text": "The closing page brings <i>meno mosso</i>, then <i>perdendo</i> — dying away. The right hand’s small figures continue over held bass notes, briefly climbing high before the hands descend towards the final G♯.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 51: meno mosso, held bass notes, the high octave passage and final perdendo to G♯." }
  ],
  "transitions": [
    { "id": "into-middle-expansion", "title": "The tune rises above the running notes", "from": "A · Circling notes above a low tune", "to": "B · The melody moves upstairs", "at": { "t": 52 }, "span": [39, 67], "how": "<p>The piano’s circling figure passes into the left hand beneath a sustained right-hand melody. The bass carries the same small note-values that began above the tune. As the melody climbs, it fills out into chords and grows through a crescendo.</p>", "devices": ["texture change", "register change", "crescendo build"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, pp. 49–50: exchange of the melody and semiquaver accompaniment, followed by the chordal expansion." },
    { "id": "into-quieter-recollection", "title": "The upper figure finds its way back", "from": "B · The melody moves upstairs", "to": "A′ · The circling figure returns", "at": { "t": 96 }, "span": [84, 111], "how": "<p>After the broad chords, the right hand returns to its small semiquaver figure and the melody settles below it. The piano softens, then builds towards another <i>fortissimo</i>. The G♯ minor Prelude keeps its opening division between a singing line and quick notes.</p>", "devices": ["decrescendo", "texture change", "motivic link"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 50, latter systems: restored upper figuration, lower melody and renewed ff." },
    { "id": "into-final-withdrawal", "title": "The bass holds while the figures turn", "from": "A′ · The circling figure returns", "to": "Coda · Meno mosso, then perdendo", "at": { "t": 128 }, "span": [117, 146], "how": "<p>At <i>meno mosso</i>, held bass notes support the piano’s continuing upper figures. The last page briefly revives the original pace, then climbs into high octaves and falls away under <i>perdendo</i>. The final G♯ closes the piece quietly.</p>", "devices": ["tempo change", "decrescendo", "texture change"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 51: meno mosso, sustained bass, a tempo and final perdendo." }
  ]
};
