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
  intro: 'Lilacs began in 1902 as a song; in 1913 Rachmaninoff rewrote it as a piano solo, which he recorded for Victor in December 1923. Follow the melody inside a rocking texture, through a swell to a held trill at the middle and a last rapid run.',
  question: 'How does a pianist keep a song’s melody singing when there is no voice?',

  sections: [
    { t: 0, label: 'Non allegro · the song’s melody', m: 'A' },
    { t: 60, label: 'Accelerando to a held trill · più mosso', m: 'B' },
    { t: 106, label: 'Closing page · approximate', m: 'C' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A tune inside the rocking', text: 'The opening is marked Non allegro, pp, in 3/4. A piano has no voice, so the transcription carries the song’s melody inside a rocking texture of triplets and broken chords. Listen for the tune rather than the figuration.', basis: 'score-proportion', precision: 'passage', evidence: 'The Piano Street scan shows Non allegro, pp, 3/4, triplet figures and left-hand broken chords on page 1; Yevgeny Sudbin describes the transcription as more polyphonic than the song (https://www.yevgenysudbin.com/artist.php?view=prog&rid=458). The analysis puts 0:00 and 0:55 among the quietest windows of the first minute.' },
    { t: 26, kind: 'world', title: 'A poem and a three-note phrase', text: 'The song sets a poem by Ekaterina Beketova and is dedicated to A. N. Strekalova. Sudbin hears “an unfulfilled search for happiness” in it, and notes that it grows almost entirely from the voice’s opening three-note phrase.', basis: 'documented', precision: 'passage', evidence: 'IMSLP’s Op. 21 page gives Beketova as librettist and Strekalova as dedicatee of No. 5: https://imslp.org/wiki/12_Romances,_Op.21_(Rachmaninoff,_Sergei). Sudbin’s liner notes (2005) give the description and the three-note remark: https://www.yevgenysudbin.com/artist.php?view=prog&rid=458' },
    { t: 52, kind: 'life', title: 'Rewritten in the summer of 1913', text: 'Rachmaninoff composed the song in the summer of 1902 and transcribed it in the summer of 1913, when the first version of his Second Piano Sonata was conceived. The solo version adds cadenzas and a coda, Sudbin writes.', basis: 'documented', precision: 'passage', evidence: 'Sudbin’s liner notes give the 1902 and 1913 dates, the Sonata’s original version conceived that summer, and the cadenzas and coda: https://www.yevgenysudbin.com/artist.php?view=prog&rid=458' },
    { t: 64, kind: 'music', title: 'Speeding up to a held trill', text: 'Around 1:10 the music reaches the loudest window of the record. The score marks accel. and cresc., then a fermata over a trill, then più mosso, close to its midpoint. Listen for how he handles the pause.', basis: 'audio-feature', precision: 'passage', evidence: 'The score’s third page begins with accel., a fermata over a trill (f, dim.) and più mosso (mf). The analysis shows the level rising from −22.5 dB at 1:05 to −11.0 dB at 1:10, the loudest window of the file, and the strongest boundary (1.00) at 1:12.' },
    { t: 86, kind: 'listen', title: 'Holding back, then a tempo', text: 'After the faster più mosso, the score marks rallent. and then returns to a tempo at pp. In this record the level drops after about 1:20, with a structural boundary at 1:24, so the return is quieter than the passage before it.', basis: 'audio-feature', precision: 'passage', evidence: 'The score’s third page shows più mosso, rallent. and a tempo (pp). The analysis shows a boundary of 0.80 at 1:24 and the level falling from −15.2 dB at 1:15 to −20.6 dB at 1:20 and −23.7 dB at 1:25.' },
    { t: 106, kind: 'life', title: 'Twelve takes over three years', text: 'Victor’s ledger lists twelve takes of Lilacs between May 1920 and December 1923. Take 9, made on 27 December 1923, was approved and issued as Victor 1051, backed with Tchaikovsky’s Humoresque. Takes 10–12, made the next day, were not used.', basis: 'documented', precision: 'passage', evidence: 'DAHR matrix B-24123 lists take 1 (17 May 1920), takes 2–3 (24 February 1922), takes 4–7 (24–25 October 1923), takes 8–9 (27 December 1923) and takes 10–12 (28 December 1923), with take 9 as the master issued on Victor 1051: https://adp.library.ucsb.edu/index.php/matrix/detail/700009327/B-24123-Lilacs_op._21_no._5' },
    { t: 132, kind: 'music', title: 'A last run, then decay', text: 'Near 2:10 a rapid run rises and falls, and the sound thins to pp. The score marks the run accel. and veloce, then a diminuendo to a final quiet chord. In this record the level falls steadily until about 2:25, when only decay remains.', basis: 'audio-feature', precision: 'passage', evidence: 'The score’s last page shows accel. and veloce (mf, dim.) and a closing pp. The analysis shows the level rising from −25.6 dB at 2:05 to −17.1 dB at 2:10, then falling to −32.7 dB at 2:20 and −43.0 dB at 2:25.' },
  ],

  transitions: [
    {
      id: 'into-the-trill',
      title: 'A faster run into a held trill',
      from: 'Non allegro',
      to: 'Accelerando',
      at: { t: 70 },
      span: [58, 84],
      how: '<p>Rhythm does the joining. Right-hand sixteenth-note figures speed up (accel.) over a left-hand chord that swells (cresc.), reach a fermata over a trill marked f, and fall back (dim.). Più mosso then begins at mf, so the melody restarts at a quicker tempo with a bigger sound than before the pause.</p>',
      devices: ['crescendo build', 'fermata', 'tempo change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'The score’s third page opens with accel., cresc., a fermata over a trill (f, dim.) and più mosso (mf). The analysis shows the largest early rise in level (−22.5 dB at 1:05 to −11.0 dB at 1:10) and the strongest boundary at 1:12. Bar numbers are not assigned.',
    },
    {
      id: 'into-the-closing-page',
      title: 'A double bar before the last page',
      from: 'Accelerando',
      to: 'Closing page',
      at: { t: 106 },
      span: [94, 118],
      how: '<p>A double bar ends the third page after a quiet a tempo passage marked pp, with flowing sixteenth-note figures. The last page opens pp in common time, moves back to 3/4 at mf, and then settles into continuous sixteenth-note figuration over sustained chords before the closing run.</p>',
      devices: ['metre change', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'The score shows a double bar at the end of page 3 and, on page 4, common time followed by 3/4 and mf. The analysis shows a boundary at 1:46 (strength 0.48), attack density rising to 6.4 per second at 1:45, and the loudest window of the file at 1:50. The timing is approximate.',
    },
  ],
};
