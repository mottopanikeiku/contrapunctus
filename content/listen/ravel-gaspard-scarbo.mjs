// Score: Durand, plate D. & F. 7207, pp. 23–42.
// https://s9.imslp.org/files/imglnks/usimg/6/6a/IMSLP246875-PMLP02576-Ravel,_Maurice-Gaspard_de_la_nuit_Durand_7207_scan.pdf
export default {
  id: 'ravel-gaspard-scarbo',
  composer: 'ravel',
  order: 72,
  work: 'Gaspard de la nuit',
  movement: 'III. Scarbo — Modéré',
  year: '1908',
  key: 'G♯ minor / B major',
  forces: 'Piano',
  performers: 'Andriy Makarevych, piano',
  recorded: '1 April 2014',
  source: { file: 'File:Maurice Ravel - Gaspard de la nuit - 3. Scarbo.flac' },
  set: { id: 'ravel-gaspard-de-la-nuit', title: 'Gaspard de la nuit', part: 3, of: 3, unit: 'pieces' },
  "intro": "Scarbo, marked Modéré, is the third piece of Ravel’s <i>Gaspard de la nuit</i>. Scarbo is the creature who scratches at the bed curtains, vanishes and comes back larger than the room, and Ravel writes soft repeated notes, very wide leaps and long silences for him.",
  "sections": [
    { "t": 0, "label": "A · Low opening figure, repeated notes", "m": "A", "mNote": "A repeated-note figure follows the low opening figure." },
    { "t": 36, "label": "B · Vif, leaps across the keyboard", "m": "B", "mNote": "Vif. The two hands move apart in leaps." },
    { "t": 128, "label": "Dev · Repeated notes and rising chords", "m": "Dev", "mNote": "Short figures return in wider leaps and chords." },
    { "t": 308, "label": "A′ · Opening figure returns in the bass", "m": "A′", "mNote": "The opening drumming figure moves down into the bass." },
    { "t": 390, "label": "B′ · Return of the dance", "m": "B′", "mNote": "Quick figures emerge from the low repeated notes." },
    { "t": 510, "label": "Dev · Final chords of the development", "m": "Dev", "mNote": "Leaps and repeated chords fill the keyboard." },
    { "t": 564, "label": "Coda · Quiet repeated chords", "m": "Coda", "mNote": "Quiet repeated chords stop without slowing." }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Opening of Scarbo",
      "text": "Three low notes rise in the piano. A soft repeated note sounds beneath a held chord, then stops. Ravel puts a fermata over the silence and marks it <i>très long</i> (very long).",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score (1909), plate D. & F. 7207, p. 23: opening low figure, très fondu, en trémolo, and très long fermata. https://s9.imslp.org/files/imglnks/usimg/6/6a/IMSLP246875-PMLP02576-Ravel,_Maurice-Gaspard_de_la_nuit_Durand_7207_scan.pdf"
    },
    {
      "t": 36, "kind": "form", "title": "Acceleration to Vif",
      "text": "The piano accelerates through rising figures to <i>Vif</i>. The hands move far apart and play bass notes and high chords at the same quick tempo. Sudden rests interrupt the passage.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, pp. 23–24: En accélérant, Vif, widely separated hands and rests after the first outburst."
    },
    {
      "t": 72, "kind": "world", "title": "Scarbo in Bertrand’s poem",
      "text": "Bertrand’s narrator hears Scarbo laughing in his alcove, then “grincer son ongle sur la soie des courtines de mon lit” — “his nail scraping the silk curtains of my bed”. The dwarf spins on one foot and rolls around the room like a witch’s dropped spindle.",
      "basis": "documented", "precision": "passage",
      "evidence": "Aloysius Bertrand, Scarbo, Gaspard de la nuit, Mercure de France edition (1895), pp. 247–248, second and third paragraphs; our translation. https://fr.wikisource.org/wiki/Gaspard_de_la_nuit_(%C3%A9d._1895)/Scarbo_2"
    },
    {
      "t": 180, "kind": "music", "title": "Rising three-note figure",
      "text": "The rising three-note figure of the opening returns in new octaves. Repeated notes and leaps carry much of the writing, and the small figures expand into large groups of chords.",
      "basis": "general", "precision": "passage",
      "evidence": "Durand score, pp. 23–42: recurring rising three-note figure, repeated-note writing and octave displacement."
    },
    {
      "t": 308, "kind": "form", "title": "Return of the opening",
      "text": "The opening returns with its low three-note figure, held chord and repeated notes. This time the repeated notes lie lower in the bass. Ravel marks the soft pedal and writes almost nothing in the upper register of the piano.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, pp. 34–35: reprise of the opening, sourdine, low repeated notes and subsequent ppp bass writing."
    },
    {
      "t": 432, "kind": "world", "title": "Bertrand’s “Scarbo”, fourth paragraph",
      "text": "In Bertrand’s poem the dwarf grows between the narrator and the moon “comme le clocher d’une cathédrale gothique” — “like the tower of a Gothic cathedral”. A little golden bell shakes on his pointed cap.",
      "basis": "documented", "precision": "passage",
      "evidence": "Bertrand, Scarbo, Mercure de France edition (1895), p. 248, fourth paragraph; our translation. https://fr.wikisource.org/wiki/Gaspard_de_la_nuit_(%C3%A9d._1895)/Scarbo_2"
    },
    {
      "t": 564, "kind": "form", "title": "Final bars, Sans ralentir",
      "text": "The piano plays <i>ppp</i> repeated chords, then a final run up the keyboard. Ravel marks the passage <i>Sans ralentir</i>, without slowing. Bertrand’s poem ends “et soudain il s’éteignait”, “and suddenly he went out”, like a candle.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 42: ppp repeated chords and Sans ralentir. Bertrand, Scarbo, final sentence, Mercure de France edition (1895), p. 248; our translation. https://fr.wikisource.org/wiki/Gaspard_de_la_nuit_(%C3%A9d._1895)/Scarbo_2"
    }
  ],
  "transitions": [
    {
      "id": "into-dance", "title": "From held silences to <i>Vif</i>",
      "from": "A · Low opening figure, repeated notes", "to": "B · Vif, leaps across the keyboard",
      "at": { t: 36 }, "span": [24, 52],
      "how": "<p>After the held silences, rising figures in the piano accelerate. At <i>Vif</i> the hands move apart, with low notes alternating with high chords, and a crescendo runs from <i>pp</i> to <i>ff</i>. Two bars of rests break off the passage, and then the moving accompaniment resumes.</p>",
      "devices": ["tempo change", "register change", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score (1909), pp. 23–24: En accélérant, Vif, crescendo and rests."
    },
    {
      "id": "drumming-returns", "title": "The low three notes return",
      "from": "Dev · Repeated notes and rising chords", "to": "A′ · Opening figure returns in the bass",
      "at": { t: 308 }, "span": [294, 346],
      "how": "<p>The running figures stop, and the three low notes of the opening return under the soft pedal. The held chord and the repeated-note figure follow them, with another fermata. Ravel then moves the repeated notes down into the bass at <i>ppp</i>.</p>",
      "devices": ["motivic link", "register change", "decrescendo", "fermata"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, pp. 34–35: return of the introduction and its descent into the bass."
    },
    {
      "id": "vanishing-close", "title": "The chords become a flicker",
      "from": "Dev · Final chords of the development", "to": "Coda · Quiet repeated chords",
      "at": { t: 564 }, "span": [550, 578],
      "how": "<p>The wide arpeggios contract into quiet repeated chords above a low held bass. The pianist moves through short rests and little answering figures, then darts upwards to the last note. <i>Sans ralentir</i> keeps the ending quick.</p>",
      "devices": ["decrescendo", "texture change", "register change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 42: ppp repeated chords, low pedal, final short figures and Sans ralentir."
    }
  ],
};
