// Recording: composer’s Victor acoustic session, New York, 6 March 1923 (DAHR matrix C-24643, take 2).
// Source file: track 192 of the 1992 RCA/BMG ‘Complete Rachmaninoff’ CD 10 as uploaded to the Internet Archive.
// Score read for form and markings: Piano Street scan, https://www.pianostreet.com/rachmaninoff-sheet-music/morceaux-de-fantaisie/polichinelle-op-3-4.htm
export default {
  id: 'rachmaninoff-polichinelle',
  composer: 'rachmaninoff',
  order: 90,
  work: 'Polichinelle, Op. 3 No. 4',
  movement: 'Allegro vivace',
  year: '1892',
  key: 'F♯ minor',
  forces: 'Piano',
  performers: 'Sergei Rachmaninoff, piano',
  recorded: '6 March 1923',
  source: {
    archive: { item: '195-complete-rachmaninoff-cd-10', file: '192 - Complete RACHMANINOFF - CD 10 - Rachmaninov - Polichinelle, Op. 3, No. 4 (rec. 6.III.1923).mp3' },
    rights: { basis: 'us-published-before-cutoff', published: 1925, evidence: 'Issued by Victor as 74807 (12-in. single-faced Red Seal) and 6452 (double-faced, with Chopin’s Nocturne in F♯ major); DAHR’s catalogue records for 6452 give [1923] (https://adp.library.ucsb.edu/index.php/objects/refer/41140). The 1925 Victor catalogue lists the Nocturne in F♯ major (Op. 15, No. 2) and Polichinelle by Rachmaninoff, https://archive.org/details/catalogueofvicto00vict_0. 1925 is the latest year of first publication; the exact release date is not documented.' },
  },
  intro: 'Polichinelle is Punch, the puppet, and this 1923 Victor record is the only issued disc of it that he made. Hear the jerky opening gestures, the smooth Agitato that interrupts them, and the return of the heavy chords.',
  question: 'How do silence and sudden loud chords build a character in music?',

  sections: [
    { t: 0, label: 'Allegro vivace · puppet gestures and chords', m: 'A' },
    { t: 94, label: 'Agitato · triplets over long bass notes', m: 'B' },
    { t: 158, label: 'Opening gestures return · approximate', m: 'A′', mNote: 'opening gestures return at ppp, then loud chords close' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Fragments, then chords', text: 'The Allegro vivace moves like a puppet: isolated fff notes, ppp flurries with grace notes, and silences. By about 0:25 the music has opened into ff chords in both hands, the first loud stretch.', basis: 'score-proportion', precision: 'passage', evidence: 'The score’s first page shows Allegro vivace, fff single notes, ppp grace-note figures and ff chords from the third system (https://www.pianostreet.com/rachmaninoff-sheet-music/morceaux-de-fantaisie/polichinelle-op-3-4.htm). The analysis shows 1.4–2.2 attacks per second in the first 20 s, then level rising from −16.5 dB (0:15) to −9.6 dB (0:25) with 4.6 attacks per second.' },
    { t: 28, kind: 'life', title: 'A title from a tenor', text: 'The tenor Mikhail Slonov, a friend, suggested the name Polichinelle. It was one of the pieces added to the C♯ minor Prelude to make a set for a Kharkov concert in December 1892. Gutheil published all five in February 1893, dedicated to Arensky.', basis: 'documented', precision: 'passage', evidence: 'Robert Matthew-Walker’s note for Hyperion CDA66081 gives Slonov’s suggestion, the Kharkov concert, Gutheil’s publication in February 1893 and the dedication: https://www.hyperion-records.co.uk/dw.asp?dc=W6690_66081' },
    { t: 56, kind: 'life', title: 'A destroyed first attempt', text: 'Victor’s ledger shows a first take on 20 October 1920 at Camden, destroyed. Rachmaninoff returned on 6 March 1923 in New York, four days after playing Polichinelle at Carnegie Hall; take 2 was issued on Victor 74807, and on 6452 with Chopin’s F♯ major Nocturne.', basis: 'documented', precision: 'passage', evidence: 'The Classical Pianists chronology lists Polichinelle on his Carnegie Hall programme of 2 March 1923 (https://classical-pianists.net/vii-b/sergei-rachmaninoff/chronology-2/). DAHR matrix C-24643 lists take 1 (20 October 1920, Camden, destroyed) and take 2 (6 March 1923, New York) as master, with issues on Victor 74807 and 6452: https://adp.library.ucsb.edu/index.php/matrix/detail/700009866/C-24643-Polichinelle_op._3_no._4 and https://adp.library.ucsb.edu/index.php/object/detail/41140/Victor_6452' },
    { t: 96, kind: 'form', title: 'The Agitato begins', text: 'Attacks fall below one a second around 1:25, then at about 1:34 the Agitato begins: smooth triplet figures, each group starting on an accented note, over long held bass notes. The spiky first section is gone.', basis: 'audio-feature', precision: 'passage', evidence: 'The score shows rests at the end of the first section and then Agitato with accented triplet groups over whole-note basses on pages 4–5. The analysis shows 0.4–0.8 attacks per second at 1:25–1:30 (level −25.2 dB at 1:30), a boundary of 0.66 at 1:34 and attacks back at 2.0 per second by 1:35.' },
    { t: 116, kind: 'listen', title: 'The phrase restarts', text: 'The Agitato phrase is stated three times. The first two end in quiet held notes, and each is followed by a louder restart. In this record the level dips at 1:50 and 2:15 and recovers by about 2:00 and 2:25.', basis: 'audio-feature', precision: 'passage', evidence: 'Pages 4–6 of the score show the Agitato phrase restarting twice at f, after pp held notes. The analysis shows −28.5 dB at 1:50 recovering to −14.9 dB at 2:00, and −25.8 dB at 2:15 recovering to −11.1 dB at 2:25; boundaries fall at 1:50 (0.38), 2:02 (0.42), 2:14 (0.95) and 2:26 (1.00). The restart times are approximate.' },
    { t: 145, kind: 'music', title: 'Chords struck like blows', text: 'Near 2:25 the third restart builds into sfff chords, mostly in the left hand and cut off by rests, while the right hand keeps its running figures above. This is one of the loudest stretches of the record, and the strongest boundary falls at 2:26.', basis: 'audio-feature', precision: 'passage', evidence: 'Page 6 of the score shows an f restart of the Agitato and then sfff chords, chiefly in the left hand with rests, under continuing right-hand figures. The analysis shows the strongest boundary (1.00) at 2:26 and levels of −11.1 and −9.4 dB at 2:25 and 2:30.' },
    { t: 178, kind: 'world', title: 'Taking the piece apart', text: 'The RCA booklet quotes Rachmaninoff on his method: “You must take the work apart, peer into every corner, before you can assemble the whole.” It adds that he shaped each piece around one climax, or “point”, towards which the music rises and from which it recedes.', basis: 'documented', precision: 'passage', evidence: 'Francis Crociata’s essay “The Composer” in the RCA/BMG booklet (1992) gives the quotation and the account of his interpretative method, linking it to Chaliapin: https://archive.org/details/9-0023-sergei-rachmaninoff-complete-recordings-booklet-to-10-cd-set-rca-bmg-09026-61265-2-1992. The booklet does not say where it locates the point of this piece, and no claim is made about it here.' },
    { t: 206, kind: 'music', title: 'Detached chords at the end', text: 'The last page returns to ff chords and fast runs, then ends on short fff chords separated by rests, with a fermata on the final rest. In this record the loud stretch runs from about 2:55 to 3:30 and the sound has stopped by 3:35.', basis: 'audio-feature', precision: 'passage', evidence: 'The score’s eighth page shows runs and a closing sequence of fff staccato chords with rests, ending on a rest with a fermata. The analysis shows levels of −8.0 to −10.6 dB from 2:55 to 3:25, −16.7 dB at 3:30 and silence at 3:35.' },
  ],

  transitions: [
    {
      id: 'into-the-agitato',
      title: 'Loud chords fall silent, then triplets',
      from: 'Allegro vivace',
      to: 'Agitato',
      at: { t: 94 },
      span: [82, 106],
      how: '<p>The first section dies away into rests: attacks fall to under one a second and the level drops by about fifteen decibels between 1:20 and 1:30. Agitato then replaces the spiky, staccato writing with smooth triplet figures, each group starting on an accented note, above long held bass notes. Articulation, texture and character change together, and the new section is built on restating one phrase rather than on the opening’s fragments.</p>',
      devices: ['decrescendo', 'texture change', 'tempo change'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'The score shows rests at the close of the first section and Agitato on page 4. The analysis shows level −10.0 dB at 1:20 and −25.2 dB at 1:30, 0.4–0.8 attacks per second at 1:25–1:30, and a boundary of 0.66 at 1:34.',
    },
    {
      id: 'into-the-return',
      title: 'Sfff chords, then the puppet returns',
      from: 'Agitato',
      to: 'Opening gestures return',
      at: { t: 158 },
      span: [146, 170],
      how: '<p>The third Agitato statement builds into sfff chords, chiefly in the left hand and cut off by rests, under continuing right-hand figures. Then the opening’s gestures come back at ppp: grace-note flurries and isolated staccato notes, followed by ff chords as at the start. Dynamics, articulation and texture all change at once, and the music recalls the first section rather than the Agitato.</p>',
      devices: ['crescendo build', 'decrescendo', 'motivic link', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Page 6 of the score shows sfff chords followed by ppp grace-note figures and, on page 7, ff chords. The analysis shows the strongest boundary (1.00) at 2:26, then level falling from −9.4 dB at 2:30 to −17.1 dB at 2:40 and attacks from 2.0 to 1.6 per second between 2:35 and 2:40. The time of the return, near 2:38, is estimated from the score and is not a detected boundary.',
    },
  ],
};
