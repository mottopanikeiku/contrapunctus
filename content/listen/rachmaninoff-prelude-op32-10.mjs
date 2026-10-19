export default {
  "id": "rachmaninoff-prelude-op32-10",
  "composer": "rachmaninoff",
  "order": 20,
  "work": "Prelude in B minor, Op. 32 No. 10",
  "movement": "Lento",
  "year": "1910",
  "key": "B minor",
  "forces": "Piano",
  "performers": "La Pianista",
  "recorded": "12 May 2010",
  "source": { "file": "File:Rachmaninoff Prelude in B Minor, Op. 32, No. 10.oga" },
  "intro": "A rocking phrase in B minor grows into great repeated chords, then returns as quietly as a memory. La Pianista plays this Prelude from Rachmaninoff’s last set of thirteen.",
  "sections": [
    { "t": 0, "label": "A · Rocking notes and held chords", "m": "A", "mNote": "Short triplet figures lean against sustained chords" },
    { "t": 104, "label": "B · Heavy chords over low F♯", "m": "B", "mNote": "Pesante: repeated chords build above the bass" },
    { "t": 168, "label": "C · Long notes and quick runs", "m": "C", "mNote": "The piano softens; runs curl around sustained notes" },
    { "t": 230, "label": "A′ · The rocking phrase returns", "m": "A′", "mNote": "A tempo, come prima restores the first phrase" },
    { "t": 282, "label": "Coda · Low B and final chords", "m": "Coda", "mNote": "The bass reaches down beneath the last held chord" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "A phrase that rocks", "text": "Short triplet figures rock against long, tied chords. Both hands speak together in B minor, then leave a little silence before answering. The marking is <i>Lento</i>, and the first phrase stays close to the middle of the piano.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition (1911), p. 40, opening systems: Lento, triplet figures, tied chords and rests. https://s9.imslp.org/files/imglnks/usimg/e/e0/IMSLP105591-PMLP02018-Rachmaninov_-_32_-_13_Preludes_(ed.Gutheil).pdf" },
    { "t": 104, "kind": "music", "title": "Heavy chords, deep F♯", "text": "<i>Pesante</i> — heavy. The piano repeats its chords over a deep F♯, and the short rocking rhythm begins to thunder. A crescendo carries it towards the broad, two-handed chords of <i>Tempo I</i>.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, pp. 40–41: pesante over low F♯, poco a poco cresc. and the fortissimo Tempo I passage." },
    { "t": 128, "kind": "life", "title": "Rachmaninoff’s favourite prelude", "text": "Arnold Böcklin’s painting <i>The Return</i> lies behind this Prelude. Rachmaninoff tells the pianist Benno Moiseiwitsch that it is his favourite of his preludes.", "basis": "documented", "precision": "passage", "evidence": "The painting connection and Rachmaninoff’s statement to Moiseiwitsch are recorded in the work’s reception history: https://en.wikipedia.org/wiki/Preludes,_Op._32_(Rachmaninoff). The account comes through Moiseiwitsch’s later recollection." },
    { "t": 168, "kind": "music", "title": "Long notes above the runs", "text": "After the repeated chords, the piano returns to <i>pp</i>. Long upper notes hang over quieter chords; small runs gather around them, growing from groups of six and seven notes into a rapid sweep across the keyboard.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, pp. 42–43: L’istesso tempo, pp, then six- and seven-note groups and the veloce passage." },
    { "t": 230, "kind": "form", "title": "The first phrase comes home", "text": "<i>A tempo, come prima</i> — at the tempo, as before. After the long runs, the opening’s rocking notes and tied chords return in B minor. The hands come close together again.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 43: the fermata after the rising run, followed by a tempo, come prima and the opening phrase." },
    { "t": 282, "kind": "music", "title": "The piano reaches down", "text": "The closing phrases reach into the low bass, with little flourishes above them. A final B lies far below the held chord. Rachmaninoff marks the ending <i>pp</i> and lets the fermata hold it open.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 43, final two systems: descending bass, closing flourishes, low B and the final pp fermata." }
  ],
  "transitions": [
    { "id": "into-weighted-middle", "title": "The rocking rhythm turns heavy", "from": "A · Rocking notes and held chords", "to": "B · Heavy chords over low F♯", "at": { "t": 104 }, "span": [91, 121], "how": "<p>A low F♯, the dominant of B minor, holds beneath repeated chords marked <i>pesante</i>. The opening’s triplet rhythm persists as the chords climb and grow. At <i>Tempo I</i>, both hands fill out the piano in <i>fortissimo</i>.</p>", "devices": ["motivic link", "texture change", "crescendo build", "dominant pedal"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, pp. 40–41: pesante, F♯ pedal, crescendo and Tempo I." },
    { "id": "after-central-crest", "title": "The chords stop pressing forward", "from": "B · Heavy chords over low F♯", "to": "C · Long notes and quick runs", "at": { "t": 168 }, "span": [151, 182], "how": "<p>The repeated piano chords slow and diminish to a fermata. <i>L’istesso tempo</i> follows at <i>pp</i>, with long upper notes over widely separated bass notes. Small runs begin to fill the space between the chords.</p>", "devices": ["decrescendo", "fermata", "texture change"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, pp. 41–42: rit. e dim., fermata, then L’istesso tempo at pp." },
    { "id": "into-opening-recollection", "title": "A rising run releases the opening", "from": "C · Long notes and quick runs", "to": "A′ · The rocking phrase returns", "at": { "t": 230 }, "span": [214, 244], "how": "<p>The piano’s rapid figures climb, diminish and pause under a fermata. <i>A tempo, come prima</i> brings back the rocking phrase in B minor. The hands leave their wide-ranging runs and return to the joined chords of the opening.</p>", "devices": ["fermata", "texture change", "motivic link", "retransition"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 43, first three systems: rising run, diminuendo, fermata and a tempo, come prima." },
    { "id": "into-final-resonance", "title": "The last bass notes descend", "from": "A′ · The rocking phrase returns", "to": "Coda · Low B and final chords", "at": { "t": 282 }, "span": [270, 306], "how": "<p>The returning phrase breaks into shorter exchanges. Low bass notes descend beneath the piano’s little flourishes, ending on B below the last held chord. The final marking is <i>pp</i>, with a fermata.</p>", "devices": ["register change", "decrescendo", "fermata"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 43, final two systems: descending bass, widely spaced final chord and pp fermata." }
  ]
};
