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
  "intro": "Couperin’s <i>Les Barricades mystérieuses</i> is a low-lying harpsichord piece in four voices, in which one note is held over while the next chord begins. Marcelle Meyer plays it on the piano.",
  "sections": [
    { "t": 0, "label": "A · Refrain in B♭ major", "m": "A", "mNote": "Four voices enter at different moments in B♭ major." },
    { "t": 18, "label": "B · Two couplets and their refrains", "m": "B", "mNote": "Short episodes lead back to the opening tune." },
    { "t": 52, "label": "C · Third couplet, longer", "m": "C", "mNote": "The bass moves farther beneath the tied notes." },
    { "t": 76, "label": "A′ · Refrain returns in B♭", "m": "A′", "mNote": "The refrain's voices close together on B♭." }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Four voices in the bass clef",
      "text": "Couperin writes four voices in a low register, with both staves in the bass clef. Their notes overlap, as ties carry one voice into the next chord while another begins a new figure. The marking is <i>Vivement</i>, lively.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Score, refrain, bars 1–9; Les Éditions Outremontaises (2004). https://s9.imslp.org/files/imglnks/usimg/6/65/IMSLP128589-WIMA.0099-Couperin_6eOrdre_Les_Baricades.pdf"
    },
    {
      "t": 30, "kind": "world", "title": "Wigmore Hall recital, 1927",
      "text": "At Wigmore Hall on 11 May 1927, Meyer played <i>Les Barricades mystérieuses</i> on a programme that also included Ravel’s <i>Jeux d’eau</i> and Stravinsky’s <i>Piano-Rag-Music</i>. She kept Couperin in her repertoire for decades. This recording comes from her Paris sessions of 1953–54.",
      "basis": "documented", "precision": "passage",
      "evidence": "Meyer chronology, 11 May 1927 programme and 1953–54 Salle Adyar sessions, Les Discophiles Français DF 86. https://classical-pianists.net/viii/marcelle-meyer/chronology/"
    },
    {
      "t": 52, "kind": "form", "title": "Third couplet",
      "text": "The third couplet, bars 31–53, is longer than either of the first two. The bass keeps moving beneath the overlapping voices, and extra flats appear in the chords. At its end Couperin writes <i>Rondeau</i> again, and the opening refrain returns.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Score, third couplet and Rondeau direction, bars 31–53. https://s9.imslp.org/files/imglnks/usimg/6/65/IMSLP128589-WIMA.0099-Couperin_6eOrdre_Les_Baricades.pdf"
    }
  ],
  "transitions": [
    {
      "id": "into-couplets", "title": "First couplet over a B♭ bass",
      "from": "A · Refrain in B♭ major", "to": "B · Two couplets and their refrains", "at": { "t": 18 }, "span": [10, 30],
      "how": "<p>The first couplet (bars 11–22) follows the repeated refrain and begins over B♭ in the bass. The upper voices reach higher notes. Couperin keeps the staggered entries and ties of the refrain, and the two-beat motion continues. Meyer’s two hands still carry all four voices. The marking remains <i>Vivement</i>.</p>",
      "devices": ["motivic link"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Score, first couplet after the repeated refrain, bars 11–22. https://s9.imslp.org/files/imglnks/usimg/6/65/IMSLP128589-WIMA.0099-Couperin_6eOrdre_Les_Baricades.pdf"
    },
    {
      "id": "into-third-couplet", "title": "The bass descends from B♭",
      "from": "B · Two couplets and their refrains", "to": "C · Third couplet, longer", "at": { "t": 52 }, "span": [43, 66],
      "how": "<p>The third couplet (bars 31–52) follows the B♭ major refrain with no break in its chain of tied notes. The bass descends, and the upper voices go on entering between the beats. More flats appear as the passage continues. Couperin keeps the marking <i>Vivement</i> and the two-beat metre, and this final episode runs to more bars than the earlier couplets.</p>",
      "devices": ["sequence", "motivic link"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Score, third couplet, bars 31–52, especially its descending bass at the opening. https://s9.imslp.org/files/imglnks/usimg/6/65/IMSLP128589-WIMA.0099-Couperin_6eOrdre_Les_Baricades.pdf"
    },
    {
      "id": "into-final-refrain", "title": "The refrain and its final chord",
      "from": "C · Third couplet, longer", "to": "A′ · Refrain returns in B♭", "at": { "t": 76 }, "span": [68, 90],
      "how": "<p>The bass reaches F, and the written <i>Rondeau</i> then sends the pianist back to the B♭ major refrain. The refrain’s interlocking notes return unchanged. In the final ending, marked <i>Fin</i>, a single held B♭ major chord takes the place of their overlapping movement.</p>",
      "devices": ["motivic link", "perfect cadence"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Score, bars 52–53 and the final ending marked Fin after the refrain. https://s9.imslp.org/files/imglnks/usimg/6/65/IMSLP128589-WIMA.0099-Couperin_6eOrdre_Les_Baricades.pdf"
    }
  ]
};
