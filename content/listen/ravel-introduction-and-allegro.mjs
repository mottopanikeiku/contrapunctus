// Original seven-player score, Durand, 1906; not the two-piano arrangement.
// https://commons.wikimedia.org/wiki/File:IMSLP06186-Ravel_-_Introduction_et_Allegro,_score.pdf
// Printed pp. 3, 8, 11, 19, 25–30 and 39 inspected as score images.
export default {
  id: 'ravel-introduction-and-allegro',
  composer: 'ravel',
  order: 90,
  work: 'Introduction and Allegro',
  movement: '',
  year: '1905',
  key: 'G♭ major',
  forces: 'Harp, flute, clarinet and string quartet',
  performers: 'Karen Grimsey, harp; Kara Santos, flute; Parker Gaims, clarinet; Sara Matayoshi and Foster Wang, violins; Tam Tran, viola; Clayton Vaughn, cello — United States Marine Band',
  recorded: '27 March 2022',
  source: { file: 'File:US Marine Band Introduction and Allegro (Ravel).opus' },
  "intro": "Ravel’s Introduction and Allegro is written for harp and six other players. Karen Grimsey plays the harp part with winds and strings from the United States Marine Band, and she plays the long cadenza alone.",
  "sections": [
    { "t": 0, "label": "Intro · Flute and clarinet duet", "m": "Intro", "mNote": "The strings join the flute and clarinet before the harp enters." },
    { "t": 115, "label": "A · Harp solo", "m": "A", "mNote": "Allegro. A melody set within descending broken chords." },
    { "t": 294, "label": "Dev · Harp and ensemble alternate phrases", "m": "Dev", "mNote": "Harp solo passages alternate with phrases for wind and strings" },
    { "t": 424, "label": "Cadenza · Harp arpeggios, chords and harmonics", "m": "Cadenza", "mNote": "The other six players rest; the harp plays alone." },
    { "t": 498, "label": "Intro · Winds and muted strings, soft", "m": "Intro", "mNote": "The opening tempo returns with the harp." },
    { "t": 550, "label": "A′ · Clarinet theme over harp accompaniment", "m": "A′", "mNote": "The clarinet takes over the theme first played by the harp." },
    { "t": 640, "label": "Coda · Harp, winds and strings", "m": "Coda", "mNote": "Harp glissandos with fast wind figures and pizzicato strings" }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Opening duet, flute and clarinet",
      "text": "Flute and clarinet open with a soft duet. Violin, viola and cello join them, and the harp then plays an upward run through their held notes. The second violin has not yet entered.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score (1906), p. 3, opening four bars. https://commons.wikimedia.org/wiki/File:IMSLP06186-Ravel_-_Introduction_et_Allegro,_score.pdf"
    },
    {
      "t": 72, "kind": "world", "title": "Commission from Érard, 1905",
      "text": "In 1905 Érard commissioned Ravel to show what its pedal harp could do. The rival firm Pleyel had already commissioned [[debussy|Debussy]]’s <i>Danses</i> for its chromatic harp. Ravel set the harp among flute, clarinet and four strings.",
      "basis": "documented", "precision": "passage",
      "evidence": "Jane Vial Jaffe, programme note on the commissions from Pleyel and Érard: https://www.parlancechamberconcerts.org/individual-program-notes/maurice-ravel-%281875-1937%29/introduction-and-allegro."
    },
    {
      "t": 115, "kind": "form", "title": "Allegro, harp melody",
      "text": "At the Allegro the harp plays nearly alone. Its melody lies at the top of descending broken chords, marked <i>le chant en dehors</i>. Low harmonics sound beneath the quick notes.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, p. 8, rehearsal 2: Allegro, le chant en dehors and harp harmonics beneath the melody."
    },
    {
      "t": 216, "kind": "life", "title": "Manuscript left at a shirt shop, 1905",
      "text": "In 1905 Ravel hurried to finish the score before a holiday aboard Alfred and Misia Edwards’s yacht. He left the manuscript at a shirt shop, missed the boat and had to persuade the music-loving shopkeeper to return it. He joined the yacht at Soissons.",
      "basis": "documented", "precision": "passage",
      "evidence": "The manuscript, chemisier and missed departure are recounted by Jane Vial Jaffe: https://www.parlancechamberconcerts.org/individual-program-notes/maurice-ravel-%281875-1937%29/introduction-and-allegro."
    },
    {
      "t": 424, "kind": "form", "title": "Harp cadenza",
      "text": "The harp plays a cadenza. Arpeggios climb from the bass and are interrupted by slow chords, and glissandos lead into harmonics. Karen Grimsey plays the melody, the bass and the resonance alone.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, pp. 26–27: Cadenza, rubato, Lent, Très lent, glissandos and harmonics."
    },
    {
      "t": 498, "kind": "form", "title": "Return of the introduction’s tempo",
      "text": "At rehearsal 18 Ravel restores the tempo of the introduction (1° Tempo). Flute and clarinet return at <i>ppp</i>, with muted strings around the harp. The cello plays pizzicato.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, p. 27, rehearsal 18: 1° Tempo, ppp winds, muted strings and pizzicato cello."
    },
    {
      "t": 550, "kind": "music", "title": "Clarinet melody over harp, rehearsal 20",
      "text": "The harp’s Allegro figures return, and the clarinet now plays the tune above them. Flute and strings rest.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, p. 29, rehearsal 20: solo clarinet above harp figuration; flute and strings rest."
    },
    {
      "t": 684, "kind": "form", "title": "Closing bars in G♭ major",
      "text": "The harp plays its final glissandos while the string quartet plays pizzicato. Flute and clarinet play short attacks. All seven players end on a G♭-major chord.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, p. 39: final harp glissandos, pizzicato strings, wind attacks and G♭-major close."
    }
  ],
  "transitions": [
    {
      "id": "intro-to-allegro", "title": "Harp alone at the Allegro",
      "from": "Intro · Flute and clarinet duet", "to": "A · Harp solo",
      "at": { t: 115 }, "span": [98, 135],
      "how": "<p>At the <i>Allegro</i> (rehearsal 2), the winds and strings release their held notes and the harp begins its descending broken chords. Ravel marks the tune <i>le chant en dehors</i>. Harmonics sustain the bass beneath it, and the other six instruments stop playing.</p>",
      "devices": ["tempo change", "orchestration change", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score (1906), p. 8, rehearsal 2."
    },
    {
      "id": "into-cadenza", "title": "Harp cadenza over held ensemble chord",
      "from": "Dev · Harp and ensemble alternate phrases", "to": "Cadenza · Harp arpeggios, chords and harmonics",
      "at": { t: 424 }, "span": [410, 446],
      "how": "<p>The ensemble holds a chord while the harp begins low arpeggios, marked <i>Cadenza</i> and <i>rubato</i>. The winds and strings release the chord, and the arpeggios rise into the upper register. Slower chords and harmonics follow, marked <i>Lent</i> and <i>Très lent</i>.</p>",
      "devices": ["cadenza", "orchestration change", "texture change", "tempo change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, pp. 26–27."
    },
    {
      "id": "after-cadenza", "title": "Muted strings around the harp",
      "from": "Cadenza · Harp arpeggios, chords and harmonics", "to": "Intro · Winds and muted strings, soft",
      "at": { t: 498 }, "span": [482, 520],
      "how": "<p>The harp’s harmonics lead into <i>1° Tempo</i>. Flute and clarinet return at <i>ppp</i>, the bowed strings put on mutes and the cello plays a pizzicato bass. The harp continues beneath the sustained phrases of the opening.</p>",
      "devices": ["orchestration change", "tempo change", "motivic link"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, p. 27, rehearsal 18."
    },
    {
      "id": "allegro-return", "title": "Clarinet takes over the harp’s tune",
      "from": "Intro · Winds and muted strings, soft", "to": "A′ · Clarinet theme over harp accompaniment",
      "at": { t: 550 }, "span": [532, 574],
      "how": "<p>The ensemble releases its chord and the harp resumes its Allegro arpeggios. At rehearsal 20 the clarinet enters softly with the melody, above the harp’s running figures and low harmonics. Flute and strings rest, leaving a duet for clarinet and harp.</p>",
      "devices": ["motivic link", "orchestration change", "tempo change", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, pp. 28–29, Allegro and rehearsal 20."
    }
  ],
  orchestra: {
    ensemble: ['flutes', 'clarinets', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos'],
    solo: 'harp',
    basis: 'score-proportion',
    source: {
      title: 'Ravel, Introduction et Allegro — original seven-player full score, Durand, 1906',
      url: 'https://commons.wikimedia.org/wiki/File:IMSLP06186-Ravel_-_Introduction_et_Allegro,_score.pdf',
      locator: 'Opening and rehearsals 2, 4, 18 and 20; printed pp. 3, 8, 11, 26–30 and 39. One player takes each of the seven parts.',
    },
    timeline: [
      { t: 0, playing: ['flutes', 'clarinets'], lead: ['flutes', 'clarinets'], note: 'Flute and clarinet begin alone, in a soft duet.' },
      { t: 20, playing: ['flutes', 'clarinets', 'harp', 'violins-1', 'violas', 'cellos'], lead: ['harp'], note: 'First violin, viola and cello join the winds before the harp moves upwards. The second violin is silent.' },
      { t: 75, playing: ['flutes', 'clarinets', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos'], lead: ['flutes', 'clarinets'], note: 'All seven players join in the closing phrases of the introduction before the harp begins the Allegro alone.' },
      { t: 115, playing: ['harp'], lead: ['harp'], note: 'The harp begins the Allegro with a melody set within descending broken chords. The ensemble releases its held chord.' },
      { t: 150, playing: ['flutes', 'clarinets', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos'], lead: ['harp', 'flutes'], note: 'The flute plays above the harp’s arpeggios and harmonics. The violins move in quick notes; the cello plays its bass line pizzicato.' },
      { t: 424, playing: ['harp'], lead: ['harp'], note: 'The harp plays the cadenza alone, rising through arpeggios before slower chords and harmonics.' },
      { t: 498, playing: ['flutes', 'clarinets', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos'], lead: ['flutes', 'clarinets'], note: 'Flute and clarinet return softly, with muted strings and harp. The cello plays pizzicato.' },
      { t: 550, playing: ['harp', 'clarinets'], lead: ['clarinets'], note: 'The harp’s Allegro figures return, then the clarinet enters with the melody above them.' },
      { t: 576, playing: ['flutes', 'clarinets', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos'], lead: ['flutes', 'clarinets', 'harp'], note: 'Flute and strings rejoin the clarinet and harp. The wind phrases rise over the harp’s continuing arpeggios.' },
    ],
  },
};
