export default {
  id: 'haydn-54-2-adagio',
  composer: 'haydn',
  order: 0.2,
  set: { id: 'haydn-quartet-54-2', title: 'String Quartet in C major, Op. 54 No. 2', part: 2, of: 4 },
  work: 'String Quartet in C major, Op. 54 No. 2, Hob. III:57',
  movement: 'II. Adagio',
  year: '1788',
  key: 'C minor',
  forces: 'String quartet',
  performers: 'The Danish String Quartet',
  recorded: 'May 2015',
  source: { file: 'File:The Danish String Quartet - Haydn\'s String Quartet No. 42 in C major, Op. 54, No. 2, Hob.III-57 - II. Adagio.ogg' },
  intro: 'The Danish String Quartet plays the C minor Adagio from Haydn’s Quartet in C major, Op. 54 No. 2, in which the first violin plays lines in the manner of an improvisation above a hymn in the other three instruments. Haydn left the ending open and runs the movement straight into the minuet.',
  // Sources: Laurie Shulman, programme note, https://pac.uga.edu/wp-content/uploads/2022/05/Schumann-Quartet-program-pages.pdf
  // Score: Haydn, String Quartet Op. 54 No. 2 (Eulenburg, ed. Altmann), IMSLP #05812, printed pp. 188–190
  sections: [
    { t: 0, label: 'A · C minor, violin over chorale', m: 'A', mNote: 'The first violin decorates the slow melody of the lower three.' },
    { t: 92, label: 'B · Changing chords beneath the violin', m: 'B', mNote: 'The violin moves above the held accompaniment.' },
    { t: 116, label: 'C · C minor, then a held G', m: 'C', mNote: 'Morendo; the music dies away before the minuet.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Chorale with first violin, C minor', text: 'The second violin, viola and cello play a slow melody in C minor. Above them the first violin plays quick, elaborate flourishes.', basis: 'score-proportion', precision: 'passage', evidence: 'Eulenburg score, edited by Wilhelm Altmann, Adagio, pp. 188–190. Laurie Shulman describes the first violin’s rhapsodic line above a chorale in the other three instruments: https://pac.uga.edu/wp-content/uploads/2022/05/Schumann-Quartet-program-pages.pdf' },
    { t: 56, kind: 'music', title: 'First violin over chorale accompaniment', text: 'The lower instruments hold their notes while the first violin plays an ornamental line above them. Its turns and leaps run across the chords. The accompaniment keeps a steady pace.', basis: 'general', precision: 'passage', evidence: 'Eulenburg score, edited by Wilhelm Altmann, Adagio, pp. 188–189; Shulman’s account of the ornamental violin line and chorale accompaniment. https://pac.uga.edu/wp-content/uploads/2022/05/Schumann-Quartet-program-pages.pdf' },
    { t: 76, kind: 'life', title: 'Johann Tost in Paris, 1788', text: 'In late 1788 Johann Tost travelled to Paris with six new Haydn quartets and two symphonies. Until March of that year he had been principal second violin in the Esterházy orchestra. In Paris he did business with the publisher Sieber.', basis: 'documented', precision: 'passage', evidence: 'Laurie Shulman, programme note for the Schumann Quartet, 20 November 2022, p. 2: Tost’s service, Paris visit and negotiations. https://pac.uga.edu/wp-content/uploads/2022/05/Schumann-Quartet-program-pages.pdf' },
    { t: 110, kind: 'music', title: 'Rosemary Hughes on Op. 54 No. 2', text: 'Haydn’s biographer Rosemary Hughes described the first violin breaking into “impassioned arabesques above the dark and brooding melody, in the manner of a wild Hungarian lament”. The first violin has an unusually prominent role in all twelve of the Tost quartets, Opp. 54, 55 and 64.', basis: 'documented', precision: 'passage', evidence: 'Rosemary Hughes on Op. 54 No. 2, quoted in Laurie Shulman’s programme note for the Schumann Quartet, 20 November 2022, p. 2. https://pac.uga.edu/wp-content/uploads/2022/05/Schumann-Quartet-program-pages.pdf' },
    { t: 150, kind: 'form', title: 'Ending and attacca to the minuet', text: 'The closing passage is marked <i>morendo</i>, dying away. The movement ends on a held G in C minor, under a fermata. Haydn marks it <i>attacca</i>, and the C major minuet follows without a break.', basis: 'score-proportion', precision: 'passage', evidence: 'Eulenburg score, edited by Wilhelm Altmann, p. 190: morendo, final G with fermata and attacca. Shulman confirms the unbroken connection to the Menuetto. https://pac.uga.edu/wp-content/uploads/2022/05/Schumann-Quartet-program-pages.pdf' },
  ],
  orchestra: {
    ensemble: ['violins-1', 'violins-2', 'violas', 'cellos'],
    basis: 'score-proportion',
    source: { title: 'Haydn, String Quartet in C major, Op. 54 No. 2, score (Leipzig: Eulenburg, ed. Wilhelm Altmann)', url: 'https://imslp.org/wiki/String_Quartet_in_C_major,_Hob.III:57_(Haydn,_Joseph)', locator: 'Adagio, printed pp. 188–190: first-violin flourishes above a slow melody in the lower three parts.' },
    timeline: [
      { t: 0, playing: ['violins-1', 'violins-2', 'violas', 'cellos'], lead: ['violins-1'], note: 'The first violin decorates the slow melody shared by the other three players.' },
      { t: 92, playing: ['violins-1', 'violins-2', 'violas', 'cellos'], lead: ['violins-1'], note: 'The first violin keeps moving above the sustained chords of the lower instruments.' },
      { t: 150, playing: ['violins-1', 'violins-2', 'violas', 'cellos'], lead: ['violins-1'], note: 'Marked morendo, the quartet fades towards a held G, then continues into the minuet.' },
    ],
  },
};
