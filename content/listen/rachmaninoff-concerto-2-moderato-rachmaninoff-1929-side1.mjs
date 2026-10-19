export default {
  id: 'rachmaninoff-concerto-2-moderato-rachmaninoff-1929-side1',
  composer: 'rachmaninoff',
  order: 80,
  work: 'Piano Concerto No. 2, Op. 18',
  movement: 'I. Moderato — opening 78-rpm side only',
  concert: false,
  year: '1900–01',
  key: 'C minor',
  forces: 'Piano and orchestra',
  performers: 'Sergei Rachmaninoff, piano; Philadelphia Orchestra; Leopold Stokowski, conductor',
  recorded: '10 April 1929',
  source: {
    archive: {
      item: '78_concerto-no-2-in-c-minor-op-18-1st-movement-1st-record_sergei-rachmaninoff-and_gbia7026860a',
      file: 'CONCERTO NO. 2 IN C MINOR, OP. 18 1st Movement (1st Rec - SERGEI RACHMANINOFF and the PHILADELPHIA SYMPHONY ORCHESTRA.mp3',
    },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1930,
      evidence: [
        'https://adp.library.ucsb.edu/index.php/objects/refer/173501',
        'https://archive.org/details/78_concerto-no-2-in-c-minor-op-18-1st-movement-1st-record_sergei-rachmaninoff-and_gbia7026860a',
      ],
    },
  },
  intro: 'Rachmaninoff plays his concerto with Leopold Stokowski and the Philadelphia Orchestra in 1929, turning the opening bell chords into a running accompaniment for the strings. This transfer preserves the first 78-rpm side of the movement.',
  sections: [
    { t: 0, label: 'Intro · Piano bells over low F', m: 'Intro', mNote: 'Repeated chords grow before the orchestra’s melody' },
    { t: 26, label: 'A · Strings sing over piano arpeggios', m: 'A', mNote: 'The first melody unfolds in C minor' },
    { t: 122, label: 'B · The piano takes the melody', m: 'B', mNote: 'A quieter song within the opening movement' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'The composer rings the bells', text: 'The piano begins alone. Each chord is followed by a low F, and the repeated strokes grow from <i>pp</i> towards <i>f</i>. Rachmaninoff writes a little ritardando before the hands open into the arpeggios beneath the first tune.', basis: 'score-proportion', precision: 'passage', evidence: 'Gutheil full score, Boosey & Hawkes reprint, p. 3: recurring low F, poco a poco crescendo, ritardando and a tempo. https://s9.imslp.org/files/imglnks/usimg/7/72/IMSLP528309-PMLP01953-Rachmaninoff_-_Piano_Concerto_No._2_(orch._score).pdf' },
    { t: 26, kind: 'music', title: 'Stokowski’s orchestra carries the tune', text: 'The strings and clarinet have the C minor melody; Rachmaninoff has the running arpeggios beneath it. Cellos and basses pluck their notes. The pianist who began alone now accompanies the orchestra’s long phrase.', basis: 'score-proportion', precision: 'passage', evidence: 'Full score, p. 4, rehearsal 1: first melody for clarinet and upper strings, piano arpeggios and pizzicato lower strings.' },
    { t: 55, kind: 'world', title: 'Philadelphia, 10 April 1929', text: 'Rachmaninoff and Stokowski make this recording at Philadelphia’s Academy of Music on 10 April 1929. They record the opening three times. Victor chooses the third take, which also reaches Britain on HMV D.B. 1333.', basis: 'documented', precision: 'passage', evidence: 'Discography of American Historical Recordings, Victor matrix CVE-48963: session, venue, three takes and take 3 issued on Gramophone DB-1333. https://adp.library.ucsb.edu/index.php/matrix/refer/800022749' },
    { t: 150, kind: 'life', title: 'Siloti beside the piano', text: 'At the complete concerto’s première in Moscow on 9 November 1901, Rachmaninoff plays and Alexander Siloti conducts. Siloti is his cousin and former piano teacher. By then the last two movements have already delighted a Moscow audience at a charity concert the previous December.', basis: 'documented', precision: 'passage', evidence: 'Marc Mandel’s BSO note documents the complete première, Siloti’s relationship to Rachmaninoff and the December 1900 charity performance. https://www.bso.org/works/piano-concerto-no-2-6' },
  ],
};
