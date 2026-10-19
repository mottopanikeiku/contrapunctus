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
  intro: 'Rachmaninoff plays his own piano transcription of <i>Lilacs</i>, Op. 21 No. 5, a song about a search for happiness among flowers. The melody sits inside the right hand’s running figuration, with short cadenzas added around it.',

  sections: [
    { t: 0, label: 'A · Non allegro, tune within the triplets', m: 'A', mNote: 'Non allegro; the right hand plays tune and accompaniment.' },
    { t: 60, label: 'B · Trill, accelerando and crescendo to fermata', m: 'B', mNote: 'Accelerando and crescendo lead to a fermata.' },
    { t: 106, label: 'C · High register and closing veloce run', m: 'C', mNote: 'The tune passes between the hands before a veloce flourish.' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Opening, melody in the right hand', text: 'Two quiet bars of triplets come first, and then the melody enters beneath them. The right hand plays both, with the thumb taking the melody while the upper fingers continue the triplets. The left hand joins with widely spaced broken chords in A♭ major.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano transcription, Piano Street scan, p. 1: Non allegro, opening triplets, melody in the lower right-hand voice and left-hand arpeggios. https://www.pianostreet.com/rachmaninoff-sheet-music/transcriptions/lilacs.htm' },
    { t: 26, kind: 'world', title: 'Beketova’s poem and the 1913 transcription', text: 'In 1902 Rachmaninoff set Ekaterina Beketova’s poem about lilacs and the search for happiness. In 1913 he arranged the song for solo piano. He added cadenzas and a coda around the melody, which is built from a three-note phrase.', basis: 'documented', precision: 'passage', evidence: 'Yevgeny Sudbin’s 2005 liner notes identify Beketova’s poem, the 1902 song, the 1913 transcription and its added cadenzas and coda. https://www.yevgenysudbin.com/artist.php?view=prog&rid=458' },
    { t: 60, kind: 'music', title: 'Trill under a fermata', text: 'The repeated right-hand figures quicken and grow louder, then stop on a trill under a fermata. The bass holds its chord while the trill makes a diminuendo. A rising flourish ends the pause, and the melody continues <i>più mosso</i>, more quickly.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano Street score, p. 3, first system: accelerando, crescendo, trill with fermata, diminuendo and più mosso.' },
    { t: 106, kind: 'form', title: 'Closing page', text: 'On the closing page the melody passes between the hands beneath high, quick notes. A final run marked <i>veloce</i> rises and falls across the keyboard. The accompaniment continues a little longer, then stops on an A♭ major chord.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano Street score, p. 4: melodic hand crossings, veloce run, ritardando and final pp A♭ major chord.' },
  ],

  transitions: [
    {
      id: 'into-the-trill',
      title: 'Trill and fermata before più mosso',
      from: 'A · Non allegro, tune within the triplets',
      to: 'B · Trill, accelerando and crescendo to fermata',
      at: { t: 70 },
      span: [58, 84],
      how: '<p>The right hand accelerates over a held left-hand chord and reaches a trill, marked <i>f</i>, under a fermata. The trill fades in a diminuendo, and a rising run leads into <i>più mosso</i>. The left hand holds its chord through the pause and the restart of the melody.</p>',
      devices: ['crescendo build', 'fermata', 'tempo change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Piano Street score, p. 3, first system: accelerando, trill with fermata, tied left-hand chord and più mosso.',
    },
    {
      id: 'into-the-closing-page',
      title: 'One bar of 4/4, then 3/4',
      from: 'B · Trill, accelerando and crescendo to fermata',
      to: 'C · High register and closing veloce run',
      at: { t: 106 },
      span: [94, 118],
      how: '<p>The quiet <i>a tempo</i> passage reaches a double bar, followed by a single bar of common time. The right hand moves up into the top octave, marked 8va, and the metre then returns to 3/4. At <i>mf</i> the melody crosses between the hands beneath running semiquavers.</p>',
      devices: ['metre change', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Piano Street score, end of p. 3 and beginning of p. 4: common time, 8va, return to 3/4 and melodic hand crossings.',
    },
  ],
};
