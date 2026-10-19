// Provenance: DAHR matrix C-24988 and Victor 74698; Great 78 Project transfer.
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
  recorded: '15 March and 18 April 1921, Camden, New Jersey; issued take: 18 April',
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
  intro: 'Stokowski and the Philadelphia Orchestra fit <i>Finlandia</i> onto one twelve-inch record side. The great hymn survives the shortening: a broad tune at the heart of the brass fanfares.',
  sections: [
    { t: 0, label: 'A · The march and fanfares', m: 'A', mNote: 'Quick orchestral phrases before the hymn' },
    { t: 84, label: 'B · The hymn in A♭ major', m: 'B', mNote: 'A broad melody replaces the short fanfares' },
    { t: 182, label: 'C · Fanfares around the hymn', m: 'C', mNote: 'The closing passage brings the fanfares back' },
  ],
  cues: [
    { t: 0, kind: 'life', title: 'Stokowski in Camden', text: 'On 18 April 1921, Stokowski and the Philadelphia Orchestra return to Victor’s studio in Camden, New Jersey. Their fourth take of <i>Finlandia</i> becomes the issued record. Victor marks the other three takes for destruction.', basis: 'documented', precision: 'passage', evidence: 'Discography of American Historical Recordings, Victor matrix C-24988: two takes on 15 March and two on 18 April 1921; take 4 is the master issued as Victor 74698, the others marked Destroy. https://adp.library.ucsb.edu/index.php/matrix/refer/700010224' },
    { t: 32, kind: 'world', title: 'A theatre full of protest', text: 'At Helsinki’s Swedish Theatre in November 1899, actors present scenes from Finland’s history to raise money for journalists. Russian censorship hangs over the celebrations. Sibelius’s music ends with <i>Finland Awakens</i>, the piece he will revise into <i>Finlandia</i>.', basis: 'documented', precision: 'passage', evidence: 'Sibelius Society of Finland, history of the 1899 Press Celebrations: Swedish Theatre, journalists’ pension fund, censorship, and the final tableau Finland Awakens. https://sibelius.klubi.fi/english/musiikki/ork_finlandia.htm' },
    { t: 84, kind: 'music', title: 'The hymn without words', text: 'The hymn unfolds in A♭ major, its long phrases a release from the short fanfares. Sibelius writes it for the orchestra. The familiar Finnish words arrive much later, when V. A. Koskenniemi supplies a text in 1940.', basis: 'score-proportion', precision: 'passage', evidence: 'Breitkopf & Härtel score, p. 17, rehearsal I, reproduced in the Sibelius Society of Finland’s account; the same account dates Koskenniemi’s text and its first performance to 1940. https://sibelius.klubi.fi/english/musiikki/ork_finlandia.htm' },
    { t: 182, kind: 'form', title: 'Fanfares around the hymn', text: 'The closing passage brings the fanfares back around the hymn. Its broad tune can stand against the quicker figures without hurrying. Sibelius carries both towards the final orchestral chords.', basis: 'score-proportion', precision: 'passage', evidence: 'Sibelius Society of Finland describes the faster closing passage, returning brass fanfares and continued hymn. The abridgement’s individual cuts and revised orchestration are undocumented. https://sibelius.klubi.fi/english/musiikki/ork_finlandia.htm' },
  ],
};
