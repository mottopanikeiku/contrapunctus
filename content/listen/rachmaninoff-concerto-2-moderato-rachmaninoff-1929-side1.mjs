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
  intro: 'Rachmaninoff plays the opening of his concerto with Stokowski and the Philadelphia Orchestra on 10 April 1929. This is HMV D.B. 1333, the first 78-rpm side only: its stopping point is not the movement’s ending.',
  question: 'How does the composer shape the opening when the piano alternates between isolated chords and moving accompaniment?',
  sections: [
    { t: 0, label: 'Opening rise · first side', m: 'Intro', mNote: 'carrier scope is partial; no complete movement ending follows' },
    { t: 26, label: 'Sustained first-side span', m: 'A', mNote: 'feature boundary, not a bar-aligned instrumental entrance' },
    { t: 122, label: 'Quieter continuation · first side', m: 'B', mNote: 'marked withdrawal in recorded level, not the movement’s close' },
  ],
  cues: [
    { t: 0, kind: 'listen', title: 'One side, not a movement', text: 'This transfer preserves the concerto’s first 78-rpm side, not a shortened complete movement. Compare the spacing of the opening piano chords with Richter’s recording; the end of this file is a carrier boundary, not Rachmaninoff’s final cadence.', basis: 'general', precision: 'passage', evidence: 'The HMV label identifies “1st Movement” and “1st Record”; DAHR identifies CVE-48963 as part 1. https://adp.library.ucsb.edu/index.php/matrix/refer/800022749' },
    { t: 26, kind: 'music', title: 'The opening gains weight', text: 'The recorded sound builds across the opening and remains stronger through the following stretch. Follow the longer line as well as the smaller notes: a denser accompaniment need not be the principal melody.', basis: 'audio-feature', precision: 'passage', evidence: 'cache/analysis/rachmaninoff-concerto-2-moderato-rachmaninoff-1929-side1.txt: relative level rises from −22.3 dB at 0:05 to −7.0 at 0:30 and stays around −7 to −8 through 0:45; a novelty boundary occurs at 0:26. This supports the broad recorded contour, not a precise orchestral entrance or comparison of loudness with Richter.' },
    { t: 55, kind: 'world', title: 'Philadelphia, not the publisher’s address', text: 'DAHR places this session at Philadelphia’s Academy of Music on 10 April 1929. The issued opening is take 3. Camden appears in the catalogue’s publisher imprint, but that address does not establish where Rachmaninoff and Stokowski made the recording.', basis: 'documented', precision: 'passage', evidence: 'The matrix’s take table gives the venue, day and master take; the issue’s MARC imprint is a separate field. https://adp.library.ucsb.edu/index.php/matrix/refer/800022749 and https://adp.library.ucsb.edu/index.php/objects/refer/173501' },
    { t: 90, kind: 'world', title: 'Pitch can come from the carrier', text: 'The transfer notes report minor distortion and some wow or pitch warble. Do not attribute every fluctuation to the pianist’s touch: unstable reproduction can bend sustained pitches even when the musicians’ intended notes remain unchanged.', basis: 'documented', precision: 'passage', evidence: 'Internet Archive Technical Notes: “minor distortion; some wow/pitch warble”. This is a source-wide caution, not a claim that a fault begins here. https://archive.org/details/78_concerto-no-2-in-c-minor-op-18-1st-movement-1st-record_sergei-rachmaninoff-and_gbia7026860a' },
    { t: 122, kind: 'music', title: 'A substantial withdrawal', text: 'The forceful stretch gives way to a much lower recorded level. Follow the continuation through that withdrawal rather than treating it as an ending; the quieter phrases still belong to the concerto’s opening movement.', basis: 'audio-feature', precision: 'passage', evidence: 'cache/analysis/rachmaninoff-concerto-2-moderato-rachmaninoff-1929-side1.txt: the strongest novelty boundary is 2:02; relative level falls from −6.7 dB at 1:55 to −20.6 at 2:05 and −27.3 at 2:20. These are within-file measurements, not calibrated musical dynamics.' },
    { t: 150, kind: 'world', title: 'An American master on HMV', text: 'This British HMV pressing carries a Victor master. DAHR connects catalogue D.B. 1333 to CVE-48963, take 3; the Archive dates the issue to 1930. A record’s publication date and the performance’s 1929 session date describe different events.', basis: 'documented', precision: 'passage', evidence: 'DAHR lists Gramophone DB-1333 among the issued master’s carriers. The Archive metadata dates the item to 1930; DAHR’s generated MARC imprint gives [1929], so the precise first issue date remains unresolved. https://adp.library.ucsb.edu/index.php/objects/refer/173501' },
    { t: 175, kind: 'listen', title: 'Listen past the format', text: 'Keep the phrase in mind when this side runs out. The file does not reach the first movement’s final C-minor cadence; comparison with Richter should stay within the corresponding opening passage, not stretch this side across the whole movement.', basis: 'general', precision: 'passage', evidence: 'The label and DAHR identify this as the first of the movement’s source sides. cache/analysis/rachmaninoff-concerto-2-moderato-rachmaninoff-1929-side1.txt measures the file at 189.6 seconds; its ending is not evidence of the movement’s formal close.' },
  ],
};
