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
  "intro": "A water spirit sings beneath a tremble of piano chords in <i>Ondine</i>, the first of Ravel’s three poems for piano. Andriy Makarevych plays the song and the water with the same two hands.",
  "sections": [
    { "t": 0, "label": "A · A song beneath trembling chords", "m": "A", "mNote": "The left hand sings below the repeated treble chords" },
    { "t": 126, "label": "B · Arpeggios across the keyboard", "m": "B", "mNote": "The water figures stretch further between bass and treble" },
    { "t": 216, "label": "Dev · The song amid breaking waves", "m": "Dev", "mNote": "Large arpeggios surround the melody in chords" },
    { "t": 274, "label": "C · The waves subside", "m": "C", "mNote": "Quieter arpeggios surround the returning song" },
    { "t": 342, "label": "Link · A voice without accompaniment", "m": "Link", "mNote": "Très lent: the water figures stop" },
    { "t": 370, "label": "Coda · A rush of notes, then C♯", "m": "Coda", "mNote": "Rapid scales settle into quiet C♯-major arpeggios" }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "A song under water",
      "text": "The right hand trembles on closely packed chords, <i>ppp</i>. Below them the left hand sings a slower line, marked very soft and very expressive. The melody sits inside the water, several notes below the glittering top of the piano.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score (1909), plate D. & F. 7207, p. 3: Lent, ppp right-hand chords and très doux et très expressif melody. https://s9.imslp.org/files/imglnks/usimg/6/6a/IMSLP246875-PMLP02576-Ravel,_Maurice-Gaspard_de_la_nuit_Durand_7207_scan.pdf"
    },
    {
      "t": 105, "kind": "world", "title": "A palace beneath the lake",
      "text": "In Bertrand’s poem, Ondine touches a moonlit window and offers the man inside her ring. “Mon palais est bâti fluide, au fond du lac” — “My palace is built of water, at the bottom of the lake.” She wants him to marry her and become king of the lakes.",
      "basis": "documented", "precision": "passage",
      "evidence": "Aloysius Bertrand, Ondine, reproduced before the movement in Durand’s Gaspard de la nuit (1909), from the Mercure de France edition of 1908. Second and fourth paragraphs; our translation."
    },
    {
      "t": 216, "kind": "music", "title": "The keyboard opens wide",
      "text": "The arpeggios sweep from deep bass to high treble. Ravel sets the tune in chords among them, with swells from <i>pp</i> to <i>forte</i> inside a single wave. The pianist has to make those longer notes sing through the spray.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, pp. 9–11: wide arpeggios, chordal melody and repeated crescendo hairpins."
    },
    {
      "t": 274, "kind": "world", "title": "He loves a mortal woman",
      "text": "Ondine’s invitation fails. The man tells her that he loves a mortal woman. Bertrand’s water spirit sheds a few tears, bursts out laughing and vanishes in a shower down the blue windowpanes.",
      "basis": "documented", "precision": "passage",
      "evidence": "Bertrand, Ondine, final paragraph, printed before the movement in the Durand score (1909)."
    },
    {
      "t": 342, "kind": "form", "title": "The water falls silent",
      "text": "Near the end, the accompaniment stops. A single line speaks in the middle of the keyboard, <i>Très lent</i>, with rests below it. For a few bars the song has no water around it.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 13, final system: unaccompanied Très lent phrase."
    },
    {
      "t": 370, "kind": "form", "title": "Laughter and a shower",
      "text": "A two-handed rush breaks out, <i>Rapide et brillant</i>, then dissolves into quiet C♯-major arpeggios. Bertrand’s last image is “mes vitraux bleus” — “my blue stained-glass windows” — with water streaming down them.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 14: Rapide et brillant, retenez peu à peu, ppp and return to C♯ major. Quotation from Bertrand’s Ondine, final paragraph, printed before the music in the 1909 edition; our translation."
    }
  ],
  "transitions": [
    {
      "id": "into-recitative", "title": "The song loses its accompaniment",
      "from": "C · The waves subside", "to": "Link · A voice without accompaniment",
      "at": { t: 342 }, "span": [330, 363],
      "how": "<p>The piano’s running figures climb to a held high note and stop under a fermata. Ravel then writes <i>Très lent</i>. A quiet, unaccompanied phrase follows in the middle of the keyboard; the bass staff is empty.</p>",
      "devices": ["fermata", "texture change", "tempo change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score (1909), p. 13, final system: fermata, followed by the unaccompanied Très lent line."
    },
    {
      "id": "last-outburst", "title": "A rush across both hands",
      "from": "Link · A voice without accompaniment", "to": "Coda · A rush of notes, then C♯",
      "at": { t: 370 }, "span": [358, 395],
      "how": "<p>The bare phrase launches a rush of notes in both hands, marked <i>Rapide et brillant</i>. Ravel then asks the pianist to hold back gradually. C♯-major arpeggios return at <i>ppp</i>, in the opening tempo, and carry the music to its last quiet chord.</p>",
      "devices": ["tempo change", "texture change", "decrescendo"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand score, p. 14: Rapide et brillant, retenez peu à peu, au mouvement du début and final C♯-major arpeggios."
    }
  ],
};
