export default {
  "id": "couperin-barricades-mysterieuses",
  "composer": "couperin",
  "order": 2,
  "work": "Les Barricades mystérieuses",
  "movement": "",
  "year": "1717, publication",
  "key": "B♭ major",
  "forces": "Solo piano; originally harpsichord",
  "performers": "Marcelle Meyer, piano",
  "recorded": "Late 1953 or January 1954, Salle Adyar, Paris",
  "source": { "file": "File:François Couperin - Les barricades mysterieuses (Marcelle Meyer, 1954).flac" },
  "intro": "Four voices keep arriving late for one another in Couperin’s <i>Les Barricades mystérieuses</i>: one note hangs on while the next chord begins. Marcelle Meyer brings this low-lying harpsichord piece to the piano.",
  "sections": [
    { "t": 0, "label": "A · The overlapping refrain", "m": "A", "mNote": "Four voices enter at different moments in B♭ major" },
    { "t": 18, "label": "B · Two couplets and their refrains", "m": "B", "mNote": "Short episodes lead back to the opening tune" },
    { "t": 52, "label": "C · The longer third couplet", "m": "C", "mNote": "The bass travels farther beneath the tied notes" },
    { "t": 76, "label": "A′ · The refrain comes home", "m": "A′", "mNote": "The familiar voices settle together on B♭" }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Four voices arriving late",
      "text": "Couperin writes four voices in a low register, with both staves in the bass clef. Their notes overlap: ties carry one voice into the next chord while another begins a fresh figure. The marking is <i>Vivement</i>, lively. All this gentle entanglement has a pulse.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Score, refrain, bars 1–9; Les Éditions Outremontaises (2004). https://s9.imslp.org/files/imglnks/usimg/6/65/IMSLP128589-WIMA.0099-Couperin_6eOrdre_Les_Baricades.pdf"
    },
    {
      "t": 30, "kind": "world", "title": "Couperin beside Stravinsky",
      "text": "At Wigmore Hall on 11 May 1927, Meyer plays <i>Les Barricades mystérieuses</i> on a programme that also includes Ravel’s <i>Jeux d’eau</i> and Stravinsky’s <i>Piano-Rag-Music</i>. She keeps Couperin in her repertoire for decades; this recording comes from her Paris sessions of 1953–54.",
      "basis": "documented", "precision": "passage",
      "evidence": "Meyer chronology, 11 May 1927 programme and 1953–54 Salle Adyar sessions, Les Discophiles Français DF 86. https://classical-pianists.net/viii/marcelle-meyer/chronology/"
    },
    {
      "t": 52, "kind": "form", "title": "The longest way round",
      "text": "The third couplet takes a longer route than either of its predecessors. The bass keeps moving beneath the overlapping voices; extra flats darken the chords. At its end, Couperin writes <i>Rondeau</i> again: the small opening refrain is waiting at home.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Score, third couplet and Rondeau direction, bars 31–53. https://s9.imslp.org/files/imglnks/usimg/6/65/IMSLP128589-WIMA.0099-Couperin_6eOrdre_Les_Baricades.pdf"
    }
  ],
  "transitions": [
    {
      "id": "into-couplets", "title": "The overlap continues",
      "from": "A · The overlapping refrain", "to": "B · Two couplets and their refrains", "at": { "t": 18 }, "span": [10, 30],
      "how": "<p>The first couplet begins over B♭ in the bass. The upper voices reach higher notes, but Couperin keeps the refrain’s staggered entries and ties. Meyer’s two hands continue to carry all four voices; the marking remains <i>Vivement</i>. The new episode grows out of the same two-beat sway.</p>",
      "devices": ["motivic link"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Score, first couplet after the repeated refrain, bars 11–22. https://s9.imslp.org/files/imglnks/usimg/6/65/IMSLP128589-WIMA.0099-Couperin_6eOrdre_Les_Baricades.pdf"
    },
    {
      "id": "into-third-couplet", "title": "The bass descends from B♭",
      "from": "B · Two couplets and their refrains", "to": "C · The longer third couplet", "at": { "t": 52 }, "span": [43, 66],
      "how": "<p>The third couplet leaves the B♭ major refrain without breaking its chain of tied notes. The bass descends while the upper voices keep entering between the beats. Flats multiply as the passage continues. Couperin retains <i>Vivement</i> and the two-beat metre, giving this final episode more bars in which to wander.</p>",
      "devices": ["sequence", "motivic link"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Score, third couplet, bars 31–52, especially its descending bass at the opening. https://s9.imslp.org/files/imglnks/usimg/6/65/IMSLP128589-WIMA.0099-Couperin_6eOrdre_Les_Baricades.pdf"
    },
    {
      "id": "into-final-refrain", "title": "The refrain and its final chord",
      "from": "C · The longer third couplet", "to": "A′ · The refrain comes home", "at": { "t": 76 }, "span": [68, 90],
      "how": "<p>The bass reaches F before the written <i>Rondeau</i> sends the pianist back to the B♭ major refrain. Its interlocking notes return unchanged. This time the final ending replaces their overlapping movement with a single held B♭ major chord.</p>",
      "devices": ["motivic link", "perfect cadence"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Score, bars 52–53 and the final ending marked Fin after the refrain. https://s9.imslp.org/files/imglnks/usimg/6/65/IMSLP128589-WIMA.0099-Couperin_6eOrdre_Les_Baricades.pdf"
    }
  ]
};
