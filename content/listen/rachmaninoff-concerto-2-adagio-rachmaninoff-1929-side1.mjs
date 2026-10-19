export default {
  id: 'rachmaninoff-concerto-2-adagio-rachmaninoff-1929-side1',
  composer: 'rachmaninoff',
  order: 81,
  work: 'Piano Concerto No. 2, Op. 18',
  movement: 'II. Adagio sostenuto — opening 78-rpm side only',
  concert: false,
  year: '1900–01',
  key: 'E major',
  forces: 'Piano and orchestra',
  performers: 'Sergei Rachmaninoff, piano; Philadelphia Orchestra; Leopold Stokowski, conductor',
  recorded: '10 April 1929',
  source: {
    archive: {
      item: '78_concerto-no-2-in-c-minor-op-18-2nd-movement-1st-record_sergei-rachmaninoff-and_gbia7026859b',
      file: 'CONCERTO NO. 2 IN C MINOR, OP. 18 2nd Movement (1st Rec - SERGEI RACHMANINOFF and the PHILADELPHIA SYMPHONY ORCHESTRA.mp3',
    },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1929,
      evidence: [
        'https://adp.library.ucsb.edu/index.php/objects/refer/173510',
        'https://archive.org/details/78_concerto-no-2-in-c-minor-op-18-2nd-movement-1st-record_sergei-rachmaninoff-and_gbia7026859b',
      ],
    },
  },
  intro: 'Rachmaninoff accompanies the flute and clarinet in the opening song of his Adagio, with Leopold Stokowski conducting the Philadelphia Orchestra in 1929. This transfer preserves the movement’s first 78-rpm side.',
  sections: [
    { t: 0, label: 'Intro · Muted strings find E major', m: 'Intro', mNote: 'Slow chords connect C minor with the new key' },
    { t: 28, label: 'A · Flute and clarinet over piano', m: 'A', mNote: 'The long melody unfolds above circling arpeggios' },
    { t: 140, label: 'B · The opening song continues', m: 'B', mNote: 'Piano and orchestra share the E major melody' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Four bars between two keys', text: 'Muted strings begin in C minor, the key of the first movement. Their slow chords move by semitones towards E major; clarinets, bassoons and horns join them. The piano waits until the new key is ready.', basis: 'score-proportion', precision: 'passage', evidence: 'Gutheil full score, Boosey & Hawkes reprint, p. 48: four-bar introduction, muted strings, wind entries and piano entrance in E major. https://s9.imslp.org/files/imglnks/usimg/7/72/IMSLP528309-PMLP01953-Rachmaninoff_-_Piano_Concerto_No._2_(orch._score).pdf' },
    { t: 28, kind: 'music', title: 'Flute, then clarinet', text: 'The piano’s arpeggios circle quietly beneath a wind melody. A flute begins the phrase; a clarinet continues it, marked <i>dolce e sempre espressivo</i> — sweetly, always expressive. Rachmaninoff gives the soloist the moving notes and the wind players time to breathe.', basis: 'score-proportion', precision: 'passage', evidence: 'Full score, pp. 48–49, rehearsal 17: piano arpeggios, solo flute and clarinet continuation.' },
    { t: 62, kind: 'world', title: 'The first take survives', text: 'At the Academy of Music in Philadelphia on 10 April 1929, Rachmaninoff and Stokowski record two takes of this Adagio opening. The first becomes the master; the second is destroyed. The issued side carries the music on HMV D.B. 1334.', basis: 'documented', precision: 'passage', evidence: 'Discography of American Historical Recordings, Victor matrix CVE-48966: date, venue, take 1 master, take 2 destroyed and DB-1334 issue. https://adp.library.ucsb.edu/index.php/matrix/refer/800022752' },
    { t: 140, kind: 'life', title: 'A charity concert in Moscow', text: 'On 15 December 1900 Rachmaninoff plays this Adagio and the finale in Moscow, with Alexander Siloti conducting. The concert raises money for prisoners through the Ladies’ Charity Prison Committee. The first movement is still unfinished.', basis: 'documented', precision: 'passage', evidence: 'Marc Mandel’s BSO note documents the date, performers, charity and order of the concerto’s completion. https://www.bso.org/works/piano-concerto-no-2-6' },
  ],
};
