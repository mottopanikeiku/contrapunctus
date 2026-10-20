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
  "intro": "Rachmaninoff plays his Prelude in G♯ minor, Op. 32 No. 12, in which a left-hand melody sounds beneath quick, circling notes. The hands exchange roles in the middle section, and the short figures continue until close to the end.",
  "sections": [
    { "t": 0, "label": "A · Right-hand figuration over left-hand melody", "m": "A" },
    { "t": 52, "label": "B · Melody in upper register", "m": "B", "mNote": "Running notes in the left hand accompany the upper melody." },
    { "t": 96, "label": "A′ · The circling figure again", "m": "A′", "mNote": "The upper notes resume above the lower tune." },
    { "t": 128, "label": "Coda · Meno mosso, then perdendo", "m": "Coda", "mNote": "The figures slow and fade towards G♯." }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "Left-hand melody", "text": "The right hand opens alone with a circling semiquaver figure. Beneath it, the left hand begins a melody in longer notes, while the right-hand semiquavers continue above.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition (1911), p. 48: Allegro in 12/8, right-hand semiquavers and the later left-hand melodic entry. https://s9.imslp.org/files/imglnks/usimg/e/e0/IMSLP105591-PMLP02018-Rachmaninov_-_32_-_13_Preludes_(ed.Gutheil).pdf" },
    { "t": 52, "kind": "music", "title": "Middle passage, melody in right hand", "text": "In the middle passage the melody moves up into the right hand, over running semiquavers in the left. The intervals widen, and chords fill out the line as the piano grows louder.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, pp. 49–50: upper melody over left-hand semiquavers, followed by the expanding chordal passage." },
    { "t": 96, "kind": "form", "title": "Return of the semiquaver figure", "text": "The upper semiquaver figure returns above the lower melody. As before, Rachmaninoff divides the hands sharply. One hand plays the melody in long notes, and the other repeats a figure on a few pitches. The music rises once more to <i>ff</i> before the close.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 50, latter systems: the upper semiquaver figure returns, with a lower melody and a further rise to ff." },
    { "t": 128, "kind": "music", "title": "Closing page, <i>meno mosso</i>", "text": "The closing page is marked <i>meno mosso</i>, then <i>perdendo</i>. The right hand continues its small figures over held bass notes and climbs briefly into a high register. Both hands then descend to the final G♯.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 51: meno mosso, held bass notes, the high octave passage and final perdendo to G♯." }
  ],
  "transitions": [
    { "id": "into-middle-expansion", "title": "Melody and accompaniment change hands", "from": "A · Right-hand figuration over left-hand melody", "to": "B · Melody in upper register", "at": { "t": 52 }, "span": [39, 67], "how": "<p>The piano’s circling semiquaver figure passes into the left hand beneath a sustained right-hand melody. The bass now plays the semiquavers that first sounded above the tune. As the melody climbs, it fills out into chords, with a crescendo.</p>", "devices": ["texture change", "register change", "crescendo build"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, pp. 49–50: exchange of the melody and semiquaver accompaniment, followed by the chordal expansion." },
    { "id": "into-quieter-recollection", "title": "Return of the upper semiquaver figure", "from": "B · Melody in upper register", "to": "A′ · The circling figure again", "at": { "t": 96 }, "span": [84, 111], "how": "<p>After the broad chords, the right hand returns to its small semiquaver figure, with the melody below it. As at the opening, the texture is divided between a singing line and quick notes. The dynamic falls, then builds towards another <i>fortissimo</i>.</p>", "devices": ["decrescendo", "texture change", "motivic link"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 50, latter systems: restored upper figuration, lower melody and renewed ff." },
    { "id": "into-final-withdrawal", "title": "Meno mosso, a tempo and perdendo", "from": "A′ · The circling figure again", "to": "Coda · Meno mosso, then perdendo", "at": { "t": 128 }, "span": [117, 146], "how": "<p>At <i>meno mosso</i> the bass holds long notes under the piano’s continuing figures in the upper register. On the last page the original tempo returns briefly, marked <i>a tempo</i> in the Gutheil first edition. The figures rise into high octaves, then descend under <i>perdendo</i>. The piece ends on G♯.</p>", "devices": ["tempo change", "decrescendo", "texture change"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 51: meno mosso, sustained bass, a tempo and final perdendo." }
  ]
};
