// Recording: composer’s Victor acoustic session, 27 December 1923 (DAHR matrix B-24123, take 9).
// Source file: track 191 of the 1992 RCA/BMG ‘Complete Rachmaninoff’ CD 10 as uploaded to the Internet Archive.
// Score read for form and markings: Piano Street scan of the piano transcription, https://www.pianostreet.com/rachmaninoff-sheet-music/transcriptions/lilacs.htm
export default {
  id: 'rachmaninoff-lilacs-piano',
  composer: 'rachmaninoff',
  order: 80,
  work: 'Lilacs, Op. 21 No. 5 (composer’s piano transcription)',
  movement: '',
  year: '1902; transcribed 1913',
  key: 'A♭ major',
  forces: 'Piano',
  performers: 'Sergei Rachmaninoff, piano',
  recorded: '27 December 1923',
  source: {
    archive: { item: '195-complete-rachmaninoff-cd-10', file: '191 - Complete RACHMANINOFF - CD 10 - Rachmaninov - Lilacs, Op. 21, No. 5 (rec. 27.XII.1923).mp3' },
    rights: { basis: 'us-published-before-cutoff', published: 1925, evidence: 'Issued by Victor as 1051, a double-faced Red Seal coupled with Tchaikovsky’s Humoresque (DAHR matrix B-24123, https://adp.library.ucsb.edu/index.php/matrix/detail/700009327/B-24123-Lilacs_op._21_no._5); the 1925 Victor catalogue lists Lilacs (Rachmaninoff, Op. 21, No. 5) as 1051, https://archive.org/details/catalogueofvicto00vict_0. 1925 is the latest year of first publication; the exact release date is not documented.' },
  },
  intro: 'Rachmaninoff plays his own piano version of <i>Lilacs</i>, a song about a search for happiness among flowers. The melody nestles inside the right hand’s rippling notes, with little cadenzas growing around it.',

  sections: [
    { t: 0, label: 'A · A song inside the triplets', m: 'A', mNote: 'Non allegro; the right hand carries tune and accompaniment' },
    { t: 60, label: 'B · A trill holds the music still', m: 'B', mNote: 'Accelerando and crescendo lead to a fermata' },
    { t: 106, label: 'C · High notes and the final run', m: 'C', mNote: 'The tune passes between hands before a veloce flourish' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A song inside the hand', text: 'Two quiet bars of triplets, then the melody enters beneath them. The right hand plays both at once: its thumb carries the song while the upper fingers keep moving. The left hand joins with widely spaced broken chords in A♭ major.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano transcription, Piano Street scan, p. 1: Non allegro, opening triplets, melody in the lower right-hand voice and left-hand arpeggios. https://www.pianostreet.com/rachmaninoff-sheet-music/transcriptions/lilacs.htm' },
    { t: 26, kind: 'world', title: 'Beketova’s lilacs', text: 'In 1902 Rachmaninoff sets Ekaterina Beketova’s poem about lilacs and the search for happiness. Eleven years later he brings the song back to the piano alone, adding cadenzas and a coda around a melody built from a three-note phrase.', basis: 'documented', precision: 'passage', evidence: 'Yevgeny Sudbin’s 2005 liner notes identify Beketova’s poem, the 1902 song, the 1913 transcription and its added cadenzas and coda. https://www.yevgenysudbin.com/artist.php?view=prog&rid=458' },
    { t: 60, kind: 'music', title: 'A trill under a fermata', text: 'The repeated right-hand figures quicken and swell, then stop on a trill under a fermata. The bass holds its chord while the trill fades. A rising flourish releases the pause and the melody continues <i>più mosso</i>, more quickly.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano Street score, p. 3, first system: accelerando, crescendo, trill with fermata, diminuendo and più mosso.' },
    { t: 106, kind: 'form', title: 'The hands share the song', text: 'On the closing page the melody passes between the hands beneath high, quick notes. A final run marked <i>veloce</i> climbs and falls across the keyboard. The accompaniment keeps turning a little longer, then settles on a quiet A♭ major chord.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano Street score, p. 4: melodic hand crossings, veloce run, ritardando and final pp A♭ major chord.' },
  ],

  transitions: [
    {
      id: 'into-the-trill',
      title: 'The trill delays the melody',
      from: 'A · A song inside the triplets',
      to: 'B · A trill holds the music still',
      at: { t: 70 },
      span: [58, 84],
      how: '<p>The right hand accelerates over a held left-hand chord and reaches a trill, marked <i>f</i>, under a fermata. A diminuendo lets it fade; a rising run leads into <i>più mosso</i>. The left hand keeps its chord through the pause and the melody’s restart.</p>',
      devices: ['crescendo build', 'fermata', 'tempo change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Piano Street score, p. 3, first system: accelerando, trill with fermata, tied left-hand chord and più mosso.',
    },
    {
      id: 'into-the-closing-page',
      title: 'Four beats, then three again',
      from: 'B · A trill holds the music still',
      to: 'C · High notes and the final run',
      at: { t: 106 },
      span: [94, 118],
      how: '<p>The quiet <i>a tempo</i> passage reaches a double bar and a single bar of common time. The right hand climbs into the top octave, then the metre returns to 3/4. At <i>mf</i>, the melody crosses between the hands beneath the running semiquavers.</p>',
      devices: ['metre change', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Piano Street score, end of p. 3 and beginning of p. 4: common time, 8va, return to 3/4 and melodic hand crossings.',
    },
  ],
};
