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
  intro: 'Rachmaninoff, Stokowski and the Philadelphia Orchestra recorded this opening of the Adagio on 10 April 1929. HMV D.B. 1334 preserves its first 78-rpm side; the later middle section, cadenza and return are not included here.',
  question: 'How do the broad melody and the piano’s smaller notes share the same pulse?',
  sections: [
    { t: 0, label: 'Opening rise · first side', m: 'Intro', mNote: 'carrier scope is partial; later movement sections are absent' },
    { t: 28, label: 'Quieter opening continuation', m: 'A', mNote: 'feature boundary, not a bar-aligned instrumental entrance' },
    { t: 140, label: 'Later first-side swell', m: 'B', mNote: 'feature-defined span, not an assertion of a separate theme' },
  ],
  cues: [
    { t: 0, kind: 'listen', title: 'The Adagio’s first side', text: 'This is the slow movement’s first 78-rpm side, labelled No. 4 in the concerto’s sequence. Compare only its opening with Richter: the later cadenza and the returning song lie on other sides, not beyond an artificial join in this file.', basis: 'general', precision: 'passage', evidence: 'The HMV label identifies “2nd Movement–Adagio sostenuto (1st Record)” and No. 4; DAHR identifies CVE-48966 as part 4. https://adp.library.ucsb.edu/index.php/matrix/refer/800022752' },
    { t: 28, kind: 'music', title: 'The opening swell recedes', text: 'After the opening rise, the recorded sound withdraws over a longer stretch. Listen for the difference between a sustained phrase and the smaller notes moving beneath it, without assuming that quieter sound means a slower pulse.', basis: 'audio-feature', precision: 'passage', evidence: 'cache/analysis/rachmaninoff-concerto-2-adagio-rachmaninoff-1929-side1.txt: relative level reaches −5.2 dB at 0:15, falls to −12.9 at 0:25 and −18.0 at 0:45; novelty peaks at 0:22 and 0:28. This identifies a broad withdrawal, not individual instrumental entrances or a measured tempo change.' },
    { t: 62, kind: 'world', title: 'The slow movement’s master', text: 'The first Adagio side comes from the same 10 April 1929 Philadelphia session as the concerto’s opening. Its master is CVE-48966, take 1. The label’s No. 4 counts its place in the concerto’s disc sequence, not a fourth movement.', basis: 'documented', precision: 'passage', evidence: 'DAHR identifies Part 4, Second movement: Adagio sostenuto, recorded at the Academy of Music on 10 April 1929; take 1 was issued on DB-1334. https://adp.library.ucsb.edu/index.php/matrix/refer/800022752' },
    { t: 95, kind: 'listen', title: 'Follow the whole phrase', text: 'Across this stretch, the recorded level rises, falls and rises again. Follow the phrase through its quieter interval instead of treating every crest as a new beginning; then compare how Richter connects the corresponding notes.', basis: 'audio-feature', precision: 'passage', evidence: 'cache/analysis/rachmaninoff-concerto-2-adagio-rachmaninoff-1929-side1.txt: relative level moves from −17.7 dB at 1:25 to −12.2 at 1:35, −17.1 at 1:40 and −12.0 at 1:45. The cue describes this within-file contour and proposes a comparison, not a measured interpretation of phrasing.' },
    { t: 125, kind: 'world', title: 'Four styli, one chosen transfer', text: 'George Blood’s engineers transferred the disc with four styli. The selected file uses a 3.3-mil truncated-conical stylus and turnover equalisation of 500.0. These transfer decisions affect the balance of music and surface noise; they are not instructions in Rachmaninoff’s score.', basis: 'documented', precision: 'passage', evidence: 'The item description documents four stylus transfers; the preferred FLAC comment identifies the selected 3.3-mil stylus and turnover setting. https://archive.org/details/78_concerto-no-2-in-c-minor-op-18-2nd-movement-1st-record_sergei-rachmaninoff-and_gbia7026859b' },
    { t: 150, kind: 'music', title: 'Another rise within the side', text: 'A later swell grows within the material preserved on this side. Compare its rise and retreat with the opening swell, keeping the long line in view rather than judging the passage by the number of audible attacks.', basis: 'audio-feature', precision: 'passage', evidence: 'cache/analysis/rachmaninoff-concerto-2-adagio-rachmaninoff-1929-side1.txt: novelty at 2:20 precedes a rise from −17.5 dB at 2:25 to −12.5 at 2:35, followed by a fall to −16.5 at 2:50. Surface noise compromises attack counts, which are not published as musical measurements.' },
    { t: 175, kind: 'world', title: 'A side of a larger work', text: 'HMV paired this Adagio opening with the first movement’s third side on D.B. 1334. The Archive dates that issue to November 1929. The disc’s coupling explains the break in the surviving file; it does not turn the opening song into a self-contained slow movement.', basis: 'documented', precision: 'passage', evidence: 'The Archive’s other-side link identifies the first movement’s third record; metadata.date is 1929-11. DAHR lists CVE-48965 and CVE-48966 on DB-1334. https://adp.library.ucsb.edu/index.php/objects/refer/173510' },
  ],
};
