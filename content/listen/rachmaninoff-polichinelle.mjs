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
  intro: 'Rachmaninoff wrote <i>Polichinelle</i>, Op. 3 No. 4 (Allegro vivace), at nineteen; it alternates loud, heavy notes with soft, rapid flurries and has a song-like middle section. The composer plays it in this 1923 recording.',

  sections: [
    { t: 0, label: 'A · Notes at fff, grace-note figures at ppp', m: 'A', mNote: 'Allegro vivace; fff notes alternate with ppp grace-note figures.' },
    { t: 94, label: 'B · Agitato, melody within running notes', m: 'B', mNote: 'An accented melody runs over long bass notes.' },
    { t: 158, label: 'A′ · Return of the opening theme', m: 'A′', mNote: 'Grace notes return, played quietly, before the final detached chords.' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Opening, fff and ppp contrasts', text: 'Two notes are marked <i>fff</i>, followed by a rapid figure at <i>ppp</i>. The hands jump between these extremes, and grace notes and rests break up the line. Both hands soon play full chords at <i>ff</i>.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano Street score, p. 1: Allegro vivace, fff single notes, ppp grace-note figures and ff chords. https://www.pianostreet.com/rachmaninoff-sheet-music/morceaux-de-fantaisie/polichinelle-op-3-4.htm' },
    { t: 28, kind: 'life', title: 'Title suggested by Slonov, 1892', text: 'In 1892 the tenor Mikhail Slonov suggested the title <i>Polichinelle</i> to his friend Rachmaninoff, who was assembling pieces around his C♯ minor Prelude for a concert in Kharkov. Gutheil published the five <i>Morceaux de fantaisie</i> the following February, dedicated to Anton Arensky.', basis: 'documented', precision: 'passage', evidence: 'Robert Matthew-Walker’s notes for Hyperion CDA66081 give Slonov’s suggestion, the Kharkov concert, February 1893 publication and dedication to Arensky. https://www.hyperion-records.co.uk/dw.asp?dc=W6690_66081' },
    { t: 62, kind: 'world', title: 'Victor recordings, 1920 and 1923', text: 'Rachmaninoff first recorded <i>Polichinelle</i> for Victor on 20 October 1920, at the company’s laboratory in Camden, New Jersey, and that take was destroyed. He recorded it again in New York on 6 March 1923. This second take was issued on Victor 74807, and on 6452 with Chopin’s F♯ major Nocturne.', basis: 'documented', precision: 'passage', evidence: 'DAHR matrix C-24643 lists take 1 (20 October 1920, Camden, Church Building Laboratory, destroyed) and take 2 (6 March 1923, New York, master), issued on Victor 74807 and 6452: https://adp.library.ucsb.edu/index.php/matrix/detail/700009866/C-24643-Polichinelle_op._3_no._4. Victor 6452 couples it with the Nocturne in F♯ major: https://adp.library.ucsb.edu/index.php/objects/refer/41140' },
    { t: 94, kind: 'form', title: 'Agitato section', text: 'At <i>Agitato</i> a long slurred line moves over held bass notes. Accents mark out a melody within the fast figures. Each group of semiquavers and triplets above it is slurred.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano Street score, p. 4, from Agitato: slurred semiquavers and triplets with accented lower melody and long bass notes.' },
    { t: 158, kind: 'form', title: 'Return of the opening figures', text: 'Heavy chords interrupt the running figures. The grace notes of the opening then return at <i>ppp</i>, placed between short, accented notes. The smooth middle section has ended, and the hands jump again.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano Street score, p. 6: sfff chords followed by the return of the ppp grace-note figures.' },
    { t: 206, kind: 'music', title: 'Closing chords', text: 'The closing chords are short and detached, marked <i>fff</i>, with rests between them. The last fermata is placed over the final rest.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano Street score, p. 8, final system: fff detached chords and a fermata over the final rest.' },
  ],

  transitions: [
    {
      id: 'into-the-agitato',
      title: 'Descent into the <i>Agitato</i>',
      from: 'A · Notes at fff, grace-note figures at ppp',
      to: 'B · Agitato, melody within running notes',
      at: { t: 94 },
      span: [82, 106],
      how: '<p>The quick figures descend into the bass, with rests in the left hand. At <i>Agitato</i>, a new phrase begins over a low octave. Slurred right-hand figures carry an accented melody over bass notes held for a whole bar. Above the bass, semiquavers alternate with triplets.</p>',
      devices: ['texture change', 'tempo change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Piano Street score, p. 4, second and third systems: descending figures, rests and Agitato over whole-note basses.',
    },
    {
      id: 'into-the-return',
      title: 'Heavy chords, then the quiet flurry',
      from: 'B · Agitato, melody within running notes',
      to: 'A′ · Return of the opening theme',
      at: { t: 158 },
      span: [146, 170],
      how: '<p>The left hand strikes chords marked <i>sfff</i>, each cut short by rests, while the right hand continues its running figures. Further pairs of chords break into the descent. Both hands then drop to <i>ppp</i>, and the grace-note figures of the opening return with the same sudden leaps across the keyboard.</p>',
      devices: ['crescendo build', 'decrescendo', 'motivic link', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Piano Street score, p. 6: interrupted sfff chords and the return of the ppp grace-note passage.',
    },
  ],
};
