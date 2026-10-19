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
  intro: 'The Danish String Quartet plays a C minor lament in which the first violin seems to improvise above three players singing a hymn. Haydn leaves the ending suspended and sends the music straight into the minuet.',
  // Sources: Laurie Shulman, programme note, https://pac.uga.edu/wp-content/uploads/2022/05/Schumann-Quartet-program-pages.pdf
  // Score: Haydn, String Quartet Op. 54 No. 2 (Eulenburg, ed. Altmann), IMSLP #05812, printed pp. 188–190
  sections: [
    { t: 0, label: 'A · C minor, violin and chorale', m: 'A', mNote: 'The first violin decorates the lower three players’ slow melody' },
    { t: 92, label: 'B · Changing chords beneath the violin', m: 'B', mNote: 'The violin keeps moving above the held accompaniment' },
    { t: 116, label: 'C · C minor, then a held G', m: 'C', mNote: 'Morendo: the music fades towards the minuet' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'A violin above a hymn', text: 'The second violin, viola and cello sing a slow melody in C minor. Above them the first violin winds through quick, elaborate flourishes, as if the four players have quite different ideas about how much time a phrase needs.', basis: 'score-proportion', precision: 'passage', evidence: 'Eulenburg score, edited by Wilhelm Altmann, Adagio, pp. 188–190. Laurie Shulman describes the first violin’s rhapsodic line above a chorale in the other three instruments: https://pac.uga.edu/wp-content/uploads/2022/05/Schumann-Quartet-program-pages.pdf' },
    { t: 56, kind: 'music', title: 'Three steady companions', text: 'The lower instruments hold their notes while the first violin runs on. Its little turns and sudden leaps stretch across the chords; the accompaniment keeps its patient pace.', basis: 'general', precision: 'passage', evidence: 'Eulenburg score, edited by Wilhelm Altmann, Adagio, pp. 188–189; Shulman’s account of the ornamental violin line and chorale accompaniment. https://pac.uga.edu/wp-content/uploads/2022/05/Schumann-Quartet-program-pages.pdf' },
    { t: 76, kind: 'life', title: 'Tost takes the quartets', text: 'In late 1788 Johann Tost heads for Paris carrying six new Haydn quartets and two symphonies. Until March he has been the Esterházy orchestra’s principal second violin; now he is doing business with the publisher Sieber.', basis: 'documented', precision: 'passage', evidence: 'Laurie Shulman, programme note for the Schumann Quartet, 20 November 2022, p. 2: Tost’s service, Paris visit and negotiations. https://pac.uga.edu/wp-content/uploads/2022/05/Schumann-Quartet-program-pages.pdf' },
    { t: 150, kind: 'form', title: 'The unfinished ending', text: 'The closing passage is marked <i>morendo</i> — dying away. A held G leaves C minor waiting for an answer. Haydn writes <i>attacca</i>: the C major minuet follows without a break.', basis: 'score-proportion', precision: 'passage', evidence: 'Eulenburg score, edited by Wilhelm Altmann, p. 190: morendo, final G with fermata and attacca. Shulman confirms the unbroken connection to the Menuetto. https://pac.uga.edu/wp-content/uploads/2022/05/Schumann-Quartet-program-pages.pdf' },
  ],
  orchestra: {
    ensemble: ['violins-1', 'violins-2', 'violas', 'cellos'],
    basis: 'score-proportion',
    source: { title: 'Haydn, String Quartet in C major, Op. 54 No. 2, score (Leipzig: Eulenburg, ed. Wilhelm Altmann)', url: 'https://imslp.org/wiki/String_Quartet_in_C_major,_Hob.III:57_(Haydn,_Joseph)', locator: 'Adagio, printed pp. 188–190: first-violin flourishes above a slow melody in the lower three parts.' },
    timeline: [
      { t: 0, playing: ['violins-1', 'violins-2', 'violas', 'cellos'], lead: ['violins-1'], note: 'The first violin decorates the slow melody shared by the other three players.' },
      { t: 92, playing: ['violins-1', 'violins-2', 'violas', 'cellos'], lead: ['violins-1'], note: 'The first violin keeps moving above the lower instruments’ sustained chords.' },
      { t: 150, playing: ['violins-1', 'violins-2', 'violas', 'cellos'], lead: ['violins-1'], note: 'Morendo: the quartet fades towards a held G, then continues into the minuet.' },
    ],
  },
};
