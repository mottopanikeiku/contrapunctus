// Acoustic Victor disc, 1921: the work is abridged to one 12-inch side (4:06 against 7½–9 minutes in a typical performance, per Wikipedia).
// Which passages are cut is not documented; the notes below describe what the audio shows and make no bar-level claim.
// Provenance: DAHR matrix C-24988 (https://adp.library.ucsb.edu/index.php/matrix/refer/700010224) and object Victor 74698
// (https://adp.library.ucsb.edu/index.php/objects/refer/47668); the Great 78 Project transfer on the Internet Archive.
export default {
  id: 'sibelius-finlandia-stokowski-1921',
  composer: 'sibelius',
  order: 3,
  work: 'Finlandia, Op. 26',
  movement: 'Abridged for one 12-inch side',
  year: '1899–1900',
  key: '',
  forces: 'Orchestra',
  performers: 'Philadelphia Orchestra; Leopold Stokowski, conductor',
  recorded: '15 March and 18 April 1921, Camden, New Jersey (the issued take was made on 18 April)',
  source: {
    archive: {
      item: '78_finlandia_philadelphia-symphony-orchestra-sibelius-leopold-stokowski_gbia0298333a',
      file: 'Finlandia - Philadelphia Symphony Orchestra.mp3',
    },
    rights: {
      basis: 'us-published-before-cutoff',
      published: 1921,
      evidence: [
        'Discography of American Historical Recordings, Victor matrix C-24988, take 4 made 18 April 1921, issued on Victor 74698: https://adp.library.ucsb.edu/index.php/matrix/refer/700010224',
        'DAHR object record for Victor 74698 (MARC: Victor, [Camden, N.J.], [1921]): https://adp.library.ucsb.edu/index.php/objects/refer/47668',
        'Internet Archive item, Great 78 Project transfer, date 1921, matrix and catalogue number 74698: https://archive.org/details/78_finlandia_philadelphia-symphony-orchestra-sibelius-leopold-stokowski_gbia0298333a',
      ],
    },
  },
  intro: 'A 1921 acoustic disc fits Finlandia onto one side: an agitated opening, a hymn and a loud close. Listen through the surface noise to how the band is balanced, and to the moment the hymn arrives.',
  question: 'What does a four-minute acoustic disc keep of a work built on a hymn and its struggle?',

  sections: [
    { t: 0, label: 'Agitated opening', m: 'A' },
    { t: 84, label: 'The hymn, quieter', m: 'B' },
    { t: 182, label: 'Closing climax', m: 'C' },
  ],

  cues: [
    { t: 0, kind: 'form', title: 'Half of a work, on one side', text: 'The Victor disc holds only about four minutes of music. Wikipedia gives a typical performance as seven and a half to nine minutes, so the work is abridged here. Where the cuts fall is not documented; this note makes no claim about bars.', basis: 'documented', precision: 'passage', evidence: 'DAHR lists matrix C-24988 as a 12-inch master issued on Victor 74698; the file lasts 4:06 (245.8 s). Typical duration of 7½–9 minutes: Wikipedia’s article on Finlandia. The report shows music from about 0:05 to about 3:52 and no way to identify cut bars.' },
    { t: 16, kind: 'music', title: 'Fast, agitated, loud', text: 'The opening seconds are quick and loud for an acoustic disc: from −17 dB at 0:05 the level rises to about −11 dB, with four to five attacks a second. Wikipedia describes most of the piece as turbulent music of national struggle.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level −28.9 dB (0:00), −16.7 (0:05), −10.8 (0:10), −10.8 (0:15), −12.6 (0:20); onsets per second 4.6, 4.8, 3.2, 5.0, 4.0 over 0:00–0:20. “Rousing and turbulent music, evoking the national struggle”: Wikipedia’s article on Finlandia.' },
    { t: 32, kind: 'world', title: 'A protest in disguise', text: 'Sibelius wrote it in 1899 for the Press Celebrations, a covert protest against growing Russian censorship; it was the last of seven pieces accompanying a tableau of Finnish history. He revised it in 1900, and the revised version was performed in Helsinki on 2 July 1900.', basis: 'documented', precision: 'passage', evidence: 'Wikipedia’s article on Finlandia (lead and “History”): Press Celebrations of 1899, covert protest against censorship, seventh and last piece for a tableau, revision in 1900. The Sibelius Society of Finland’s page (https://sibelius.klubi.fi/english/musiikki/ork_finlandia.htm): the revised version’s first public performance on 2 July 1900, “possibly earlier”, by the Helsinki Philharmonic Society under Robert Kajanus; the earlier tableau music was first performed on 4 November 1899. The note sits over the loud opening (−8 to −13 dB, 0:30–0:50).' },
    { t: 55, kind: 'listen', title: 'Listen to the horn', text: 'In 1921 the orchestra played into a horn, not a microphone. Victor’s ledger for the March session, whose takes were destroyed, lists a small band; the forces of the April take issued here are not confirmed. Listen for how the balance of strings, winds and brass sounds through the horn.', basis: 'documented', precision: 'passage', evidence: 'DAHR matrix record: instrumentation “7 first violins, 5 second violins, 3 violas, 2 cellos, 4 string basses, harp, 3 oboes, 3 clarinets, 2 bassoons, 2 trumpets, 3 trombones, 2 tubas, and traps”, taken from Victor ledgers for 15 March 1921 and “not confirmed for later takes”; takes 1 and 2 (15 March) and take 3 (18 April) were destroyed and take 4 (18 April) is the issued master, so the listed band is not identified as the one heard here. The Internet Archive item gives “Technical Notes: Acoustic”. The balance remark is a general listening suggestion, not a measured claim.' },
    { t: 84, kind: 'form', title: 'The hymn arrives', text: 'At about 1:24 the level drops by about eight decibels, to −15.6 dB, and by another five by 1:30. The key reading moves to A♭ major, where the Finlandia hymn sits. Sibelius wrote the tune himself; it is not a folk melody.', basis: 'audio-feature', precision: 'passage', evidence: 'Boundary at 1:24 (novelty 0.57); relative level −7.7 dB (1:20), −15.6 (1:25), −20.8 (1:30); onsets per second 2.6 (1:20), 2.2 (1:25), 1.6 (1:30); local key A♭ major (r 0.50–0.70) at 1:25–2:45 (confirmation only). That the hymn is Sibelius’s own and often wrongly called a folk melody: Wikipedia’s article on Finlandia.' },
    { t: 125, kind: 'world', title: 'A tune with many lives', text: 'The words that now go with the hymn were written in 1940 by Veikko Antero Koskenniemi. With other words the tune is an English hymn, a Welsh patriotic hymn and an Italian evangelical one, and it was the national anthem of Biafra. Sibelius reworked it as a stand-alone piece.', basis: 'documented', precision: 'passage', evidence: 'The Sibelius Society of Finland’s page (https://sibelius.klubi.fi/english/musiikki/ork_finlandia.htm): Koskenniemi’s words commissioned in September 1940 by the Laulu-Miehet choir and first performed on 7 December 1940 (Wikipedia gives 1941, which the Society’s chronology contradicts). Wikipedia’s article on Finlandia (“Derivative works”): Sibelius’s later reworking of the hymn as a stand-alone piece, the English, Welsh and Italian adaptations, the Biafran anthem. The note sits in the quieter hymn (−14 to −20 dB, 1:50–2:25).' },
    { t: 165, kind: 'life', title: 'Four takes, one survives', text: 'Victor made four takes of the work, two on 15 March 1921 and two on 18 April, in Camden, New Jersey. The first three were destroyed. The fourth is the master from which this side, Victor 74698, was issued.', basis: 'documented', precision: 'passage', evidence: 'DAHR matrix C-24988: takes 1 and 2 on 15 March 1921 (destroyed), take 3 on 18 April 1921 (destroyed), take 4 on 18 April 1921 (master), issued on Victor 74698. The note sits in the steady hymn (−12 to −16 dB, 2:35–2:50).' },
    { t: 182, kind: 'music', title: 'The hymn gathers force', text: 'From about 3:00 the level rises through −12 dB to −6.9 dB at 3:15 and −4.7 dB at 3:25, the loudest window of the side. This closing stretch holds high for half a minute.', basis: 'audio-feature', precision: 'passage', evidence: 'Boundary at 3:00 (novelty 0.82); relative level −12.4 dB (3:00), −11.0 (3:05), −9.7 (3:10), −6.9 (3:15), −4.7 dB (3:25), −6.8 (3:40), −6.2 (3:45); loudest 5-second windows 3:25, 3:45, 3:40, 3:15 and 1:00.' },
    { t: 232, kind: 'form', title: 'The music stops', text: 'At about 3:52 the music stops and the level drops from about −15 dB to −34 dB by 3:55. The last fourteen seconds of the file stay below −28 dB. The strongest boundary of the whole side falls here.', basis: 'audio-feature', precision: 'passage', evidence: 'Strongest boundary at 3:52 (novelty 1.00); relative level −15.2 dB (3:50), −33.6 (3:55), −30.9 (4:00), −28.3 dB (4:05); the quietest 5-second windows are 3:55, 4:00, 0:00 and 4:05. The report cannot say what the low-level sound is.' },
  ],

  transitions: [
    {
      id: 'into-hymn',
      title: 'Agitation drops away; a hymn begins',
      from: 'Agitated opening',
      to: 'The hymn, quieter',
      at: { t: 84 },
      span: [74, 100],
      how: '<p>After more than a minute of loud music, with four to five attacks a second until about 0:55, the level falls by about eight decibels at 1:24 and the playing grows sparser. The key estimate moves from E♭ to A♭ major, the key of the hymn. This is the central contrast of Finlandia: struggle gives way to a broad tune that Sibelius wrote himself. In this abridged version the join may also be a cut; the disc does not say.</p>',
      devices: ['decrescendo', 'texture change'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Boundary at 1:24 (novelty 0.57); relative level −7.7 dB (1:20), −15.6 (1:25), −20.8 (1:30); onsets per second 2.6 to 1.6; local key E♭ major (r 0.56–0.78) at 0:35–1:20, A♭ major (r 0.50–0.70) from 1:25 (confirmation only). The hymn’s origin: Wikipedia’s article.',
    },
    {
      id: 'into-climax',
      title: 'The hymn grows to its loudest',
      from: 'The hymn, quieter',
      to: 'Closing climax',
      at: { t: 182 },
      span: [170, 200],
      how: '<p>After more than a minute and a half of hymn, the level climbs at about 3:00 from −12 dB towards −4.7 dB at 3:25, the loudest point of the side. The attacks pick up slightly and the sound fills out. Sibelius’s broad tune is carried to a closing climax instead of fading, and the disc ends soon after at about 3:52.</p>',
      devices: ['crescendo build', 'orchestration change'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Boundary at 3:00 (novelty 0.82); relative level −16.1 dB (2:50), −9.3 (2:55), −12.4 (3:00), −9.7 (3:10), −6.9 (3:15), −4.7 dB (3:25); onsets per second 1.8 (2:50) to 3.4 (3:10) and 4.0 (3:25); strongest boundary of the side at 3:52 (novelty 1.00).',
    },
  ],
};
