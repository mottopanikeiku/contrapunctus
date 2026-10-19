// Score: Durand, plate D. & F. 7207, pp. 17–20.
// https://s9.imslp.org/files/imglnks/usimg/6/6a/IMSLP246875-PMLP02576-Ravel,_Maurice-Gaspard_de_la_nuit_Durand_7207_scan.pdf
export default {
  id: 'ravel-gaspard-le-gibet',
  composer: 'ravel',
  order: 71,
  work: 'Gaspard de la nuit',
  movement: 'II. Le Gibet — Très lent',
  year: '1908',
  key: 'E♭ minor',
  forces: 'Piano',
  performers: 'OE1FEU, piano',
  recorded: '3 April 2020',
  source: { file: 'File:Maurice Ravel- Gaspard de la Nuit- II Le Gibet.flac' },
  set: { id: 'ravel-gaspard-de-la-nuit', title: 'Gaspard de la nuit', part: 2, of: 3 },
  "intro": "A B♭ bell sounds throughout <i>Le Gibet</i>, Ravel’s setting of Aloysius Bertrand’s gallows at sunset. Chords gather around it and fall away; the bell keeps its dreadful appointment.",
  "sections": [
    { "t": 0, "label": "A · The B♭ bell", "m": "A", "mNote": "A repeated octave sounds above slow chords" },
    { "t": 148, "label": "B · Chords above and below the bell", "m": "B", "mNote": "The hands pass the B♭ between them" },
    { "t": 212, "label": "C · A bare melody, without expression", "m": "C", "mNote": "The bell moves below the exposed upper line" },
    { "t": 276, "label": "Dev · The chords gather again", "m": "Dev", "mNote": "Fuller chords return around the unchanged B♭" },
    { "t": 360, "label": "Coda · The bell outlasts the melody", "m": "Coda", "mNote": "Low held notes and B♭ remain at the close" }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "One note tolls",
      "text": "B♭, in octaves, keeps sounding while slow chords move beneath it. Ravel marks the piano <i>Très lent</i> and asks for the soft pedal throughout. The bell has its own rhythm; the other notes lean across it.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score (1909), plate D. & F. 7207, p. 17: Très lent, Sourdine durant toute la pièce, repeated B♭ octaves. https://s9.imslp.org/files/imglnks/usimg/6/6a/IMSLP246875-PMLP02576-Ravel,_Maurice-Gaspard_de_la_nuit_Durand_7207_scan.pdf"
    },
    {
      "t": 72, "kind": "world", "title": "A bell beyond the horizon",
      "text": "Bertrand’s poem searches among small, horrible sounds: a fly at the dead man’s ear, a spider making his necktie. Then comes the answer: “C’est la cloche qui tinte” — “It is the bell that tolls.” Beyond the town walls, the setting sun reddens the hanging body.",
      "basis": "documented", "precision": "passage",
      "evidence": "Aloysius Bertrand, Le Gibet, Gaspard de la nuit, Mercure de France edition (1895), pp. 245–246; our translation. https://fr.wikisource.org/wiki/Gaspard_de_la_nuit_(%C3%A9d._1895)/Le_Gibet"
    },
    {
      "t": 148, "kind": "music", "title": "The bell between two hands",
      "text": "Ravel spreads the piano across three staves. High chords and low chords move around the B♭, which passes between the hands. Even where the chords fill the keyboard, the repeated note keeps sounding inside them.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 18: three-stave writing, alternating m.d. and m.g. indications for the bell, with chordal lines above and below."
    },
    {
      "t": 212, "kind": "music", "title": "A voice without expression",
      "text": "A bare upper melody stands above the bell. Ravel marks it <i>un peu en dehors, mais sans expression</i>: slightly brought out, but without expression. The B♭ continues below, indifferent to the melody’s rise and fall.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 19, first system: pp un peu en dehors, mais sans expression over the repeated low B♭."
    },
    {
      "t": 276, "kind": "form", "title": "The chords return",
      "text": "The piano fills out again in long, tied chords. The bell threads between them, still B♭. Ravel’s instruction from the first page remains in force: “without hurrying or slowing to the end”.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 19, lower systems. Ravel’s instruction Sans presser ni ralentir jusqu’à la fin appears on p. 17; our translation."
    },
    {
      "t": 360, "kind": "form", "title": "The bell remains",
      "text": "The last page lets the melodic fragments fall silent. Deep held notes remain under the bell, and the final bars shrink to <i>ppp</i>. The repeated B♭ lasts until the last chord.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 20: low held bass, repeated B♭ and final ppp chord."
    }
  ],
  "transitions": [
    {
      "id": "colour-widens", "title": "Chords surround the bell",
      "from": "A · The B♭ bell", "to": "B · Chords above and below the bell",
      "at": { t: 148 }, "span": [130, 166],
      "how": "<p>The piano opens into three staves: low held notes, the recurring B♭ and chords high above it. The two hands share the bell while the upper chords are marked <i>très lié</i>, very smoothly joined. Its repeated pitch carries through each change of harmony.</p>",
      "devices": ["texture change", "register change", "motivic link"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score (1909), pp. 18–19: three-stave writing and the continuing B♭."
    },
    {
      "id": "middle-retreat", "title": "A melody above the low bell",
      "from": "B · Chords above and below the bell", "to": "C · A bare melody, without expression",
      "at": { t: 212 }, "span": [194, 228],
      "how": "<p>The fuller chords recede. A single upper line, marked <i>pp</i> and <i>sans expression</i>, crosses above the B♭ in the bass. Its long notes stretch across several tolls of the bell.</p>",
      "devices": ["decrescendo", "texture change", "motivic link"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 19, first two systems: exposed melody and low repeated B♭."
    },
    {
      "id": "renewed-weight", "title": "The chords close round B♭",
      "from": "C · A bare melody, without expression", "to": "Dev · The chords gather again",
      "at": { t: 276 }, "span": [260, 296],
      "how": "<p>The single upper line broadens into tied chords as the six-flat key signature returns. The B♭ bell continues between the hands, above a sustained low bass. Small crescendos swell the chords without changing the slow pace.</p>",
      "devices": ["crescendo build", "texture change", "motivic link"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 19, third and fourth systems: six-flat signature, tied chords and crescendo hairpins."
    },
    {
      "id": "closing-withdrawal", "title": "The melody leaves the bell",
      "from": "Dev · The chords gather again", "to": "Coda · The bell outlasts the melody",
      "at": { t: 360 }, "span": [345, 395],
      "how": "<p>The high chords diminish and the piano returns to the opening’s slow bell-and-chord writing. Deep sustained notes support B♭ octaves; the repeated figure grows softer through <i>p</i>, <i>pp</i> and <i>ppp</i>. Ravel keeps the same pace to the end.</p>",
      "devices": ["decrescendo", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 20; the instruction to keep the pace appears on p. 17."
    }
  ],
};
