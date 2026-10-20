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
  intro: 'Rachmaninoff recorded his Piano Concerto No. 2 with Leopold Stokowski and the Philadelphia Orchestra in 1929. In the first movement, Moderato, the opening bell chords lead into a running accompaniment for the strings, and this transfer contains only the first 78-rpm side.',
  sections: [
    { t: 0, label: 'Intro · Piano chords over low F', m: 'Intro', mNote: 'Piano chords repeat and grow before the orchestra’s melody.' },
    { t: 26, label: 'A · First theme, strings over piano arpeggios', m: 'A', mNote: 'The strings play the first theme in C minor.' },
    { t: 122, label: 'B · Piano takes the melody', m: 'B', mNote: 'A quieter song within the opening movement.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Opening chords, solo piano', text: 'The piano begins alone. Each chord is followed by a low F, and the repeated strokes grow from <i>pp</i> towards <i>f</i>. Rachmaninoff writes a short ritardando before the hands move into the arpeggios beneath the first theme.', basis: 'score-proportion', precision: 'passage', evidence: 'Gutheil full score, Boosey & Hawkes reprint, p. 3: recurring low F, poco a poco crescendo, ritardando and a tempo. https://s9.imslp.org/files/imglnks/usimg/7/72/IMSLP528309-PMLP01953-Rachmaninoff_-_Piano_Concerto_No._2_(orch._score).pdf' },
    { t: 26, kind: 'music', title: 'First theme, strings and clarinet', text: 'In Stokowski’s orchestra the strings and clarinet play the C minor melody, and Rachmaninoff plays running arpeggios beneath it. Cellos and basses play pizzicato. The piano, which began the movement alone, now accompanies the orchestra’s long phrase.', basis: 'score-proportion', precision: 'passage', evidence: 'Full score, p. 4, rehearsal 1: first melody for clarinet and upper strings, piano arpeggios and pizzicato lower strings.' },
    { t: 55, kind: 'world', title: 'Recording session, Philadelphia, 10 April 1929', text: 'Rachmaninoff and Stokowski made this recording at Philadelphia’s Academy of Music on 10 April 1929. They recorded the opening three times. Victor chose the third take, which was also issued in Britain on HMV D.B. 1333.', basis: 'documented', precision: 'passage', evidence: 'Discography of American Historical Recordings, Victor matrix CVE-48963: session, venue, three takes and take 3 issued on Gramophone DB-1333. https://adp.library.ucsb.edu/index.php/matrix/refer/800022749' },
    { t: 150, kind: 'life', title: 'First complete performance, Moscow, 1901', text: 'At the première of the complete concerto in Moscow on 9 November 1901, Rachmaninoff played and Alexander Siloti conducted. Siloti was his cousin and former piano teacher. The last two movements had already been performed in Moscow at a charity concert the previous December.', basis: 'documented', precision: 'passage', evidence: 'Marc Mandel’s BSO note documents the complete première, Siloti’s relationship to Rachmaninoff and the December 1900 charity performance. https://www.bso.org/works/piano-concerto-no-2-6' },
  ],
};
