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
  set: { id: 'ravel-gaspard-de-la-nuit', title: 'Gaspard de la nuit', part: 3, of: 3 },
  "intro": "Scarbo is the creature who scratches at the bed curtains, vanishes and comes back larger than the room. Ravel gives him whispered repeated notes, enormous leaps and silences long enough to make the next sound a shock.",
  "sections": [
    { "t": 0, "label": "A · Low notes and whispered drumming", "m": "A", "mNote": "A trembling note answers the low opening figure" },
    { "t": 36, "label": "B · Leaps across the keyboard", "m": "B", "mNote": "Vif: the two hands spring apart" },
    { "t": 128, "label": "Dev · Repeated notes and rising chords", "m": "Dev", "mNote": "Short figures return in larger leaps and chords" },
    { "t": 308, "label": "A′ · The low whisper returns", "m": "A′", "mNote": "The opening drumming descends into the bass" },
    { "t": 390, "label": "B′ · The dance starts again", "m": "B′", "mNote": "Quick figures emerge from the low repeated notes" },
    { "t": 510, "label": "Dev · The last assault of chords", "m": "Dev", "mNote": "Leaps and repeated chords fill the keyboard" },
    { "t": 564, "label": "Coda · The dwarf disappears", "m": "Coda", "mNote": "Quiet repeated chords flicker out without slowing" }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Something beneath the bed",
      "text": "Three low notes rise out of the piano. A quiet repeated note trembles underneath a held chord, then stops. Ravel puts a fermata over the silence and marks it <i>très long</i> — very long.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score (1909), plate D. & F. 7207, p. 23: opening low figure, très fondu, en trémolo, and très long fermata. https://s9.imslp.org/files/imglnks/usimg/6/6a/IMSLP246875-PMLP02576-Ravel,_Maurice-Gaspard_de_la_nuit_Durand_7207_scan.pdf"
    },
    {
      "t": 36, "kind": "form", "title": "The dwarf springs up",
      "text": "The piano accelerates through rising figures and arrives at <i>Vif</i>. The hands leap apart, pulling bass notes and high chords into the same quick dance. Sudden rests still cut holes in it.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, pp. 23–24: En accélérant, Vif, widely separated hands and rests after the first outburst."
    },
    {
      "t": 72, "kind": "world", "title": "A nail on silk",
      "text": "Bertrand’s narrator hears Scarbo laughing in his alcove, then “grincer son ongle sur la soie des courtines de mon lit” — “his nail scraping the silk curtains of my bed”. The dwarf spins on one foot and rolls around the room like a witch’s dropped spindle.",
      "basis": "documented", "precision": "passage",
      "evidence": "Aloysius Bertrand, Scarbo, Gaspard de la nuit, Mercure de France edition (1895), pp. 247–248, second and third paragraphs; our translation. https://fr.wikisource.org/wiki/Gaspard_de_la_nuit_(%C3%A9d._1895)/Scarbo_2"
    },
    {
      "t": 180, "kind": "music", "title": "Three notes, enormous hands",
      "text": "The opening’s little rising figure keeps returning in new octaves. Repeated notes and leaps do much of the work: the pianist must turn tiny shapes into great bursts of chords without losing their sharp edges.",
      "basis": "general", "precision": "passage",
      "evidence": "Durand score, pp. 23–42: recurring rising three-note figure, repeated-note writing and octave displacement."
    },
    {
      "t": 308, "kind": "form", "title": "The whisper comes back",
      "text": "The opening returns with its low three-note figure, held chord and repeated-note tremble. This time the drumming sinks further into the bass. Ravel asks for the soft pedal and leaves the upper piano almost empty.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, pp. 34–35: reprise of the opening, sourdine, low repeated notes and subsequent ppp bass writing."
    },
    {
      "t": 432, "kind": "world", "title": "As high as a cathedral",
      "text": "The dwarf grows between the narrator and the moon “comme le clocher d’une cathédrale gothique” — “like the tower of a Gothic cathedral”. A little golden bell shakes on his pointed cap. Bertrand lets something absurd become immense.",
      "basis": "documented", "precision": "passage",
      "evidence": "Bertrand, Scarbo, Mercure de France edition (1895), p. 248, fourth paragraph; our translation. https://fr.wikisource.org/wiki/Gaspard_de_la_nuit_(%C3%A9d._1895)/Scarbo_2"
    },
    {
      "t": 564, "kind": "form", "title": "A candle goes out",
      "text": "The piano retreats into tiny repeated chords and a final dart up the keys. Ravel writes <i>Sans ralentir</i>, without slowing. Bertrand’s last words are “et soudain il s’éteignait” — “and suddenly he went out”, like a candle.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 42: ppp repeated chords and Sans ralentir. Bertrand, Scarbo, final sentence, Mercure de France edition (1895), p. 248; our translation. https://fr.wikisource.org/wiki/Gaspard_de_la_nuit_(%C3%A9d._1895)/Scarbo_2"
    }
  ],
  "transitions": [
    {
      "id": "into-dance", "title": "The silence breaks into leaps",
      "from": "A · Low notes and whispered drumming", "to": "B · Leaps across the keyboard",
      "at": { t: 36 }, "span": [24, 52],
      "how": "<p>After the held silences, rising piano figures accelerate. At <i>Vif</i>, the hands spring apart: low notes answer high chords, and a crescendo runs from <i>pp</i> to <i>ff</i>. Two bars of rests interrupt the burst before the moving accompaniment starts again.</p>",
      "devices": ["tempo change", "register change", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score (1909), pp. 23–24: En accélérant, Vif, crescendo and rests."
    },
    {
      "id": "drumming-returns", "title": "The low three notes return",
      "from": "Dev · Repeated notes and rising chords", "to": "A′ · The low whisper returns",
      "at": { t: 308 }, "span": [294, 346],
      "how": "<p>The running figures fall away and the opening’s three low notes return under the soft pedal. The held chord and repeated-note tremble follow them, with another fermata. Ravel then moves the drumming down into the bass at <i>ppp</i>.</p>",
      "devices": ["motivic link", "register change", "decrescendo", "fermata"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, pp. 34–35: return of the introduction and its descent into the bass."
    },
    {
      "id": "vanishing-close", "title": "The chords become a flicker",
      "from": "Dev · The last assault of chords", "to": "Coda · The dwarf disappears",
      "at": { t: 564 }, "span": [550, 578],
      "how": "<p>The wide arpeggios contract into quiet repeated chords above a low held bass. The pianist moves through short rests and little answering figures, then darts upwards to the last note. <i>Sans ralentir</i> keeps the ending quick.</p>",
      "devices": ["decrescendo", "texture change", "register change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 42: ppp repeated chords, low pedal, final short figures and Sans ralentir."
    }
  ],
};
