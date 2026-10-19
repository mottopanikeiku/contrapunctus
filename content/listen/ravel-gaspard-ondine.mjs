// Score: Durand, plate D. & F. 7207, pp. 3–14.
// https://s9.imslp.org/files/imglnks/usimg/6/6a/IMSLP246875-PMLP02576-Ravel,_Maurice-Gaspard_de_la_nuit_Durand_7207_scan.pdf
export default {
  id: 'ravel-gaspard-ondine',
  composer: 'ravel',
  order: 70,
  work: 'Gaspard de la nuit',
  movement: 'I. Ondine — Lent',
  year: '1908',
  key: 'C♯ major',
  forces: 'Piano',
  performers: 'Andriy Makarevych, piano',
  recorded: '1 April 2014',
  source: { file: 'File:Maurice Ravel - Gaspard de la nuit - 1. Ondine.flac' },
  set: { id: 'ravel-gaspard-de-la-nuit', title: 'Gaspard de la nuit', part: 1, of: 3 },
  "intro": "<i>Ondine</i> (Lent) is the first of Ravel’s three poems for piano in <i>Gaspard de la nuit</i>, in which a water spirit’s song is set beneath a tremble of piano chords. Andriy Makarevych plays both the song and the chords.",
  "sections": [
    { "t": 0, "label": "A · Left-hand song under repeated treble chords", "m": "A", "mNote": "The left hand plays the song below repeated treble chords." },
    { "t": 126, "label": "B · Arpeggios across the keyboard", "m": "B", "mNote": "The water figures span a wider range between bass and treble." },
    { "t": 216, "label": "Dev · Melody within large arpeggios", "m": "Dev", "mNote": "Large arpeggios surround the melody, which is set in chords." },
    { "t": 274, "label": "C · song over quieter arpeggios", "m": "C", "mNote": "Quieter arpeggios surround the song as it comes back." },
    { "t": 342, "label": "Link · A voice without accompaniment", "m": "Link", "mNote": "Très lent: the water figures stop" },
    { "t": 370, "label": "Coda · Rapid scales, C♯ major close", "m": "Coda", "mNote": "Rapid scales give way to C♯-major arpeggios." }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Left-hand melody below chords",
      "text": "The right hand plays closely packed chords, <i>ppp</i>. Below them the left hand has a slower melody, marked <i>très doux et très expressif</i>, several notes below the top of the piano texture.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score (1909), plate D. & F. 7207, p. 3: Lent, ppp right-hand chords and très doux et très expressif melody. https://s9.imslp.org/files/imglnks/usimg/6/6a/IMSLP246875-PMLP02576-Ravel,_Maurice-Gaspard_de_la_nuit_Durand_7207_scan.pdf"
    },
    {
      "t": 105, "kind": "world", "title": "Bertrand’s poem <i>Ondine</i>",
      "text": "In Bertrand’s poem, Ondine touches a moonlit window and offers the man inside her ring. “Mon palais est bâti fluide, au fond du lac” — “My palace is built of water, at the bottom of the lake.” She asks him to marry her and become king of the lakes.",
      "basis": "documented", "precision": "passage",
      "evidence": "Aloysius Bertrand, Ondine, reproduced before the movement in Durand’s Gaspard de la nuit (1909), from the Mercure de France edition of 1908. Second and fourth paragraphs; our translation."
    },
    {
      "t": 216, "kind": "music", "title": "Wide arpeggios, chordal melody",
      "text": "The arpeggios run from the low bass to the high treble. Ravel sets the melody in chords among them, with hairpins from <i>pp</i> to <i>forte</i> within a single arpeggio. The pianist must sustain the longer melody notes through the figuration.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, pp. 9–11: wide arpeggios, chordal melody and repeated crescendo hairpins."
    },
    {
      "t": 274, "kind": "world", "title": "Ending of Bertrand’s poem",
      "text": "In the final paragraph of Bertrand’s poem, printed before the movement in the Durand score (1909), the man tells Ondine that he loves a mortal woman. The water spirit sheds a few tears, bursts out laughing and vanishes in a shower down the blue windowpanes.",
      "basis": "documented", "precision": "passage",
      "evidence": "Bertrand, Ondine, final paragraph, printed before the movement in the Durand score (1909)."
    },
    {
      "t": 342, "kind": "form", "title": "Unaccompanied phrase, Très lent",
      "text": "Near the end the accompaniment stops. A single line is played in the middle of the keyboard, <i>Très lent</i>, with rests below it.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 13, final system: unaccompanied Très lent phrase."
    },
    {
      "t": 370, "kind": "form", "title": "Closing passage in C♯ major",
      "text": "Both hands play a rapid passage, <i>Rapide et brillant</i>, which slows and gives way to <i>ppp</i> arpeggios in C♯ major. Bertrand’s last image is “mes vitraux bleus” — “my blue stained-glass windows” — with water streaming down them.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 14: Rapide et brillant, retenez peu à peu, ppp and return to C♯ major. Quotation from Bertrand’s Ondine, final paragraph, printed before the music in the 1909 edition; our translation."
    }
  ],
  "transitions": [
    {
      "id": "into-recitative", "title": "Fermata, then unaccompanied Très lent line",
      "from": "C · song over quieter arpeggios", "to": "Link · A voice without accompaniment",
      "at": { t: 342 }, "span": [330, 363],
      "how": "<p>The piano’s running figures climb to a held high note and stop under a fermata. The marking then changes to <i>Très lent</i>, and an unaccompanied phrase follows in the middle of the keyboard. The bass staff is empty.</p>",
      "devices": ["fermata", "texture change", "tempo change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score (1909), p. 13, final system: fermata, followed by the unaccompanied Très lent line."
    },
    {
      "id": "last-outburst", "title": "Rapid passage to the closing arpeggios",
      "from": "Link · A voice without accompaniment", "to": "Coda · Rapid scales, C♯ major close",
      "at": { t: 370 }, "span": [358, 395],
      "how": "<p>The bare phrase leads into a rush of notes in both hands, marked <i>Rapide et brillant</i>. Ravel then marks <i>retenez peu à peu</i>, and the pianist holds back gradually. C♯-major arpeggios return at <i>ppp</i>, <i>au mouvement du début</i>, and continue to the final chord.</p>",
      "devices": ["tempo change", "texture change", "decrescendo"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 14: Rapide et brillant, retenez peu à peu, au mouvement du début and final C♯-major arpeggios."
    }
  ],
};
