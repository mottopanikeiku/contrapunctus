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
  intro: 'Rachmaninoff’s <i>Polichinelle</i> lurches between booming notes and tiny, almost whispered flurries. In this 1923 recording the composer plays the piece he wrote at nineteen, with its surprisingly fluent song in the middle.',

  sections: [
    { t: 0, label: 'A · Booming notes and whispered flurries', m: 'A', mNote: 'Allegro vivace; fff notes answer ppp grace-note figures' },
    { t: 94, label: 'B · Agitato: a song inside running notes', m: 'B', mNote: 'An accented melody runs over long bass notes' },
    { t: 158, label: 'A′ · The jerky opening returns', m: 'A′', mNote: 'Quiet grace notes return before the final detached chords' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'A shout, then a whisper', text: 'Two notes marked <i>fff</i>, then a flurry at <i>ppp</i>. The hands jump between these extremes, with grace notes and rests interrupting the line. Soon both hands strike full chords at <i>ff</i>. Polichinelle has a heavy foot.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano Street score, p. 1: Allegro vivace, fff single notes, ppp grace-note figures and ff chords. https://www.pianostreet.com/rachmaninoff-sheet-music/morceaux-de-fantaisie/polichinelle-op-3-4.htm' },
    { t: 28, kind: 'life', title: 'Slonov supplies the name', text: 'In 1892 the tenor Mikhail Slonov suggests the title <i>Polichinelle</i> to his friend Rachmaninoff. The composer is assembling pieces around his C♯ minor Prelude for a concert in Kharkov. Gutheil publishes the five <i>Morceaux de fantaisie</i> the following February, dedicated to Anton Arensky.', basis: 'documented', precision: 'passage', evidence: 'Robert Matthew-Walker’s notes for Hyperion CDA66081 give Slonov’s suggestion, the Kharkov concert, February 1893 publication and dedication to Arensky. https://www.hyperion-records.co.uk/dw.asp?dc=W6690_66081' },
    { t: 62, kind: 'world', title: 'A first take destroyed', text: 'Rachmaninoff first tries <i>Polichinelle</i> for Victor on 20 October 1920, at the company’s laboratory in Camden, New Jersey. That take is destroyed. On 6 March 1923, in New York, he plays it again; the second take is the one issued, on Victor 74807 and on 6452 with Chopin’s F♯ major Nocturne.', basis: 'documented', precision: 'passage', evidence: 'DAHR matrix C-24643 lists take 1 (20 October 1920, Camden, Church Building Laboratory, destroyed) and take 2 (6 March 1923, New York, master), issued on Victor 74807 and 6452: https://adp.library.ucsb.edu/index.php/matrix/detail/700009866/C-24643-Polichinelle_op._3_no._4. Victor 6452 couples it with the Nocturne in F♯ major: https://adp.library.ucsb.edu/index.php/objects/refer/41140' },
    { t: 94, kind: 'form', title: 'A song in running notes', text: '<i>Agitato</i> brings a long, slurred line over held bass notes. Accents pick out a melody inside the fast figures. Semiquavers and triplets tumble over the singing notes, each little group bound together by a slur.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano Street score, p. 4, from Agitato: slurred semiquavers and triplets with accented lower melody and long bass notes.' },
    { t: 158, kind: 'form', title: 'The whispered flurries return', text: 'Heavy chords interrupt the running figures. Then the opening’s grace notes return at <i>ppp</i>, darting between short, emphatic notes. The smooth middle section is over; the hands are jumping again.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano Street score, p. 6: sfff chords followed by the return of the ppp grace-note figures.' },
    { t: 206, kind: 'music', title: 'A rest gets the fermata', text: 'The closing chords are short and fierce, marked <i>fff</i>, with rests between them. The last fermata sits over a rest. Rachmaninoff writes the silence into the ending.', basis: 'score-proportion', precision: 'passage', evidence: 'Piano Street score, p. 8, final system: fff detached chords and a fermata over the final rest.' },
  ],

  transitions: [
    {
      id: 'into-the-agitato',
      title: 'The jumps become a singing line',
      from: 'A · Booming notes and whispered flurries',
      to: 'B · Agitato: a song inside running notes',
      at: { t: 94 },
      span: [82, 106],
      how: '<p>The quick figures run down into the bass, leaving rests in the left hand. At <i>Agitato</i>, a low octave anchors a new phrase. Slurred right-hand figures carry an accented melody while the bass notes last for a whole bar; semiquavers alternate with triplets above them.</p>',
      devices: ['texture change', 'tempo change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Piano Street score, p. 4, second and third systems: descending figures, rests and Agitato over whole-note basses.',
    },
    {
      id: 'into-the-return',
      title: 'Heavy chords, then the quiet flurry',
      from: 'B · Agitato: a song inside running notes',
      to: 'A′ · The jerky opening returns',
      at: { t: 158 },
      span: [146, 170],
      how: '<p>The left hand strikes chords marked <i>sfff</i>, cut short by rests, while the right hand keeps running. More chord pairs interrupt the descent. Then both hands drop to <i>ppp</i> and the opening grace-note figures return, with the same sudden leaps across the keyboard.</p>',
      devices: ['crescendo build', 'decrescendo', 'motivic link', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Piano Street score, p. 6: interrupted sfff chords and the return of the ppp grace-note passage.',
    },
  ],
};
