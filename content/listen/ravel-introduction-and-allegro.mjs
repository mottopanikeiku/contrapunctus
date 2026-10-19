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
  "intro": "Ravel’s little harp concerto needs just seven players, yet its glissandos can fill a room. Karen Grimsey joins winds and strings from the United States Marine Band, then has the stage to herself in the long cadenza.",
  "sections": [
    { "t": 0, "label": "Intro · Flute and clarinet open the door", "m": "Intro", "mNote": "Strings join the wind duet before the harp enters" },
    { "t": 115, "label": "A · The harp sings alone", "m": "A", "mNote": "Allegro: a melody inside descending broken chords" },
    { "t": 294, "label": "Dev · Harp and ensemble trade phrases", "m": "Dev", "mNote": "Solo passages alternate with wind and string replies" },
    { "t": 424, "label": "Cadenza · Arpeggios, chords and harp harmonics", "m": "Cadenza", "mNote": "The other six players leave the harp alone" },
    { "t": 498, "label": "Intro · Soft winds and muted strings", "m": "Intro", "mNote": "The opening tempo returns around the harp" },
    { "t": 550, "label": "A′ · Clarinet over flowing harp", "m": "A′", "mNote": "The clarinet takes the tune the harp first sang" },
    { "t": 640, "label": "Coda · Seven players for the finish", "m": "Coda", "mNote": "Harp sweeps join quick winds and plucked strings" }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "The harp waits",
      "text": "Flute and clarinet open in a soft duet. Violin, viola and cello join them; only then does the harp sweep upwards through their held notes. The second violin is still silent.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score (1906), p. 3, opening four bars. https://commons.wikimedia.org/wiki/File:IMSLP06186-Ravel_-_Introduction_et_Allegro,_score.pdf"
    },
    {
      "t": 72, "kind": "world", "title": "A contest between harp makers",
      "text": "Érard commissions Ravel in 1905 to show what its pedal harp can do. The rival firm Pleyel has already commissioned [[debussy|Debussy]]’s <i>Danses</i> for its chromatic harp. Ravel puts his instrument among flute, clarinet and four strings.",
      "basis": "documented", "precision": "passage",
      "evidence": "Jane Vial Jaffe, programme note on the commissions from Pleyel and Érard: https://www.parlancechamberconcerts.org/individual-program-notes/maurice-ravel-%281875-1937%29/introduction-and-allegro."
    },
    {
      "t": 115, "kind": "form", "title": "The harp takes the tune",
      "text": "The Allegro leaves the harp almost alone. Its melody sits at the top of descending broken chords, marked <i>le chant en dehors</i>: the tune must stand out. Low harmonics ring beneath the quick notes.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, p. 8, rehearsal 2: Allegro, le chant en dehors and harp harmonics beneath the melody."
    },
    {
      "t": 216, "kind": "life", "title": "The score at the shirt shop",
      "text": "In 1905 Ravel rushes to finish the score before a holiday aboard Alfred and Misia Edwards’s yacht. He leaves the manuscript at a shirt shop, misses the boat, then has to persuade the music-loving shopkeeper to give it back. He catches up with the yacht at Soissons.",
      "basis": "documented", "precision": "passage",
      "evidence": "The manuscript, chemisier and missed departure are recounted by Jane Vial Jaffe: https://www.parlancechamberconcerts.org/individual-program-notes/maurice-ravel-%281875-1937%29/introduction-and-allegro."
    },
    {
      "t": 424, "kind": "form", "title": "Six players fall silent",
      "text": "The harp has a cadenza. Arpeggios climb from the bass, slow chords interrupt them, and glissandos lead into delicate harmonics. Karen Grimsey supplies the melody, bass and ringing after-sound on her own.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, pp. 26–27: Cadenza, rubato, Lent, Très lent, glissandos and harmonics."
    },
    {
      "t": 498, "kind": "form", "title": "The winds return softly",
      "text": "Flute and clarinet return at <i>ppp</i>, with muted strings around the harp. The cello plucks its notes. Ravel restores the introduction’s tempo so quietly that the cadenza seems to have acquired companions.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, p. 27, rehearsal 18: 1° Tempo, ppp winds, muted strings and pizzicato cello."
    },
    {
      "t": 550, "kind": "music", "title": "A clarinet above the harp",
      "text": "The harp’s flowing Allegro figures return, but the clarinet now carries the tune above them. The other players wait. Plucked notes tumble underneath a melody that can hold its breath.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, p. 29, rehearsal 20: solo clarinet above harp figuration; flute and strings rest."
    },
    {
      "t": 684, "kind": "form", "title": "A last sweep of strings",
      "text": "The harp sweeps through its final glissandos while the string quartet switches to pizzicato. Flute and clarinet give short, bright answers. All seven players share the last G♭-major chord.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, p. 39: final harp glissandos, pizzicato strings, wind attacks and G♭-major close."
    }
  ],
  "transitions": [
    {
      "id": "intro-to-allegro", "title": "The ensemble leaves the harp singing",
      "from": "Intro · Flute and clarinet open the door", "to": "A · The harp sings alone",
      "at": { t: 115 }, "span": [98, 135],
      "how": "<p>At <i>Allegro</i>, winds and strings release their held notes while the harp begins its descending broken chords. Ravel marks the tune <i>le chant en dehors</i>. Harmonics sustain the bass beneath it; the other six instruments fall silent.</p>",
      "devices": ["tempo change", "orchestration change", "texture change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score (1906), p. 8, rehearsal 2."
    },
    {
      "id": "into-cadenza", "title": "The harp inherits the bass",
      "from": "Dev · Harp and ensemble trade phrases", "to": "Cadenza · Arpeggios, chords and harp harmonics",
      "at": { t: 424 }, "span": [410, 446],
      "how": "<p>The ensemble holds a chord while the harp starts low arpeggios, marked <i>Cadenza</i> and <i>rubato</i>. As the winds and strings release, the arpeggios climb through the space they leave. Slower chords and harmonics follow under <i>Lent</i> and <i>Très lent</i>.</p>",
      "devices": ["cadenza", "orchestration change", "texture change", "tempo change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, pp. 26–27."
    },
    {
      "id": "after-cadenza", "title": "Muted strings around the harp",
      "from": "Cadenza · Arpeggios, chords and harp harmonics", "to": "Intro · Soft winds and muted strings",
      "at": { t: 498 }, "span": [482, 520],
      "how": "<p>The harp’s harmonics lead into <i>1° Tempo</i>. Flute and clarinet return at <i>ppp</i>, the bowed strings put on mutes, and the cello plucks a quiet bass. The harp continues beneath the opening’s sustained phrases.</p>",
      "devices": ["orchestration change", "tempo change", "motivic link"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand full score, p. 27, rehearsal 18."
    },
    {
      "id": "allegro-return", "title": "The clarinet sings the harp’s tune",
      "from": "Intro · Soft winds and muted strings", "to": "A′ · Clarinet over flowing harp",
      "at": { t: 550 }, "span": [532, 574],
      "how": "<p>The harp resumes its Allegro arpeggios as the ensemble releases its chord. At rehearsal 20 the clarinet enters quietly with the melody, above the harp’s flowing notes and low harmonics. Flute and strings remain silent for this duet.</p>",
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
      { t: 20, playing: ['flutes', 'clarinets', 'harp', 'violins-1', 'violas', 'cellos'], lead: ['harp'], note: 'First violin, viola and cello join the winds before the harp sweeps upwards. Second violin waits.' },
      { t: 75, playing: ['flutes', 'clarinets', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos'], lead: ['flutes', 'clarinets'], note: 'All seven players join the introduction’s closing phrases before the harp’s solo Allegro.' },
      { t: 115, playing: ['harp'], lead: ['harp'], note: 'The harp begins the Allegro with a melody inside descending broken chords. The ensemble’s held chord releases.' },
      { t: 150, playing: ['flutes', 'clarinets', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos'], lead: ['harp', 'flutes'], note: 'Flute sings above the harp’s arpeggios and harmonics. Violins move in quick notes; the cello plucks its bass.' },
      { t: 424, playing: ['harp'], lead: ['harp'], note: 'The harp takes the cadenza alone, climbing through arpeggios before slower chords and harmonics.' },
      { t: 498, playing: ['flutes', 'clarinets', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos'], lead: ['flutes', 'clarinets'], note: 'Flute and clarinet return softly, with muted strings and harp. The cello plucks its notes.' },
      { t: 550, playing: ['harp', 'clarinets'], lead: ['clarinets'], note: 'The harp’s Allegro figures return, then the clarinet enters with the melody above them.' },
      { t: 576, playing: ['flutes', 'clarinets', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos'], lead: ['flutes', 'clarinets', 'harp'], note: 'Flute and strings rejoin the clarinet and harp. The wind phrases climb over the harp’s continuing arpeggios.' },
    ],
  },
};
