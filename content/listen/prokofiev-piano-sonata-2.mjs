// Score and chronology:
// https://imslp.org/wiki/Piano_Sonata_No.2,_Op.14_(Prokofiev,_Sergey)
// https://www.flaminioonline.it/Guide/Prokofiev/Prokofiev-Sonata14.html
// https://guarnerihall.org/program-notes-prokofiev-and-the-russian-avant-garde/
// https://www.boosey.com/composer/Serge+Prokofieff?ttype=BIOGRAPHY
// https://www.henle.de/media/7f/27/66/1708068498/1581.pdf
// Performer, recording date and recording-specific CC BY-SA licence:
// https://commons.wikimedia.org/wiki/File:Prokofiev_-_Sonata_No._2_(E.M._Zinger).ogg
export default {
  id: 'prokofiev-piano-sonata-2',
  composer: 'prokofiev',
  order: 2,
  work: 'Piano Sonata No. 2, Op. 14',
  movement: 'Complete · Allegro ma non troppo — Scherzo — Andante — Vivace',
  year: '1912',
  key: 'D minor',
  forces: 'Piano',
  performers: 'E.M. Zinger',
  recorded: '8 October 1962',
  source: { file: 'File:Prokofiev - Sonata No. 2 (E.M. Zinger).ogg' },
  license: 'CC BY-SA 4.0',
  intro: 'Prokofiev’s Second Sonata lets the piano sing, then makes it bite. A tune from the first movement returns inside the rushing tarantella finale, like someone trying to finish a sentence in a crowded room.',
  sections: [
    { t: 0, label: 'A · Allegro: two against three', m: 'A', mNote: 'Paired melody notes above triplet arpeggios' },
    { t: 350, label: 'B · Scherzo: short, sharp phrases', m: 'B', mNote: 'Repeated piano chords and clipped accents' },
    { t: 454, label: 'C · Andante: a rocking bass', m: 'C', mNote: 'A long melody above the slower accompaniment' },
    { t: 712, label: 'D · Vivace: the tarantella', m: 'D', mNote: 'Fast dancing notes, interrupted by an earlier tune' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Two against three', text: 'The right hand groups its melody in pairs while triplet arpeggios run underneath. The hands share a beat but divide it differently. Soon the piano turns sharply percussive; then the opening song comes back.', basis: 'score-proportion', precision: 'passage', evidence: 'Emilia Zanetti, Santa Cecilia programme note, 12 March 1965: the first theme’s duple figure and triplet arpeggios frame a percussive central passage. https://www.flaminioonline.it/Guide/Prokofiev/Prokofiev-Sonata14.html' },
    { t: 175, kind: 'life', title: 'A student’s earlier pieces', text: 'Prokofiev builds the sonata partly from music already in his drawer. An earlier sonatina grows into the first movement; a piece for Lyadov’s composition class becomes the scherzo. In 1912 he adds the Andante and finale.', basis: 'documented', precision: 'passage', evidence: 'Zanetti’s Santa Cecilia programme note traces the sonata’s construction through Prokofiev’s autobiography and Israel Nestyev’s biography. https://www.flaminioonline.it/Guide/Prokofiev/Prokofiev-Sonata14.html' },
    { t: 350, kind: 'form', title: 'The scherzo snaps back', text: 'The scherzo is marked <i>Allegro marcato</i>: fast, with the notes clearly struck. Brief phrases jab against repeated chords. Its middle section loosens the pace before the clipped opening returns.', basis: 'score-proportion', precision: 'passage', evidence: 'The movement marking is listed in the IMSLP work catalogue. Zanetti describes the ABA form and more flexible middle section; Arrigo Quattrocchi identifies the repeated chords. https://www.flaminioonline.it/Guide/Prokofiev/Prokofiev-Sonata14.html' },
    { t: 454, kind: 'form', title: 'A song over rocking bass', text: 'The Andante begins with a rocking bass and a melody that has time to stretch. The piano’s singing voice grows more urgent over that repeated motion, before a gentler middle section opens up.', basis: 'score-proportion', precision: 'passage', evidence: 'Zanetti’s note describes the Andante’s rocking bass, expanding melody and contrasting middle section. https://www.flaminioonline.it/Guide/Prokofiev/Prokofiev-Sonata14.html' },
    { t: 580, kind: 'music', title: 'Between the song and bass', text: 'In the Andante’s middle section, a chromatic line winds between the melody and the bass. It moves in semitones while the upper voice sings more broadly. For a few bars, the accompaniment shifts into an uneven seven-quaver measure.', basis: 'score-proportion', precision: 'passage', evidence: 'Zanetti identifies the upper melody, chromatic inner line and brief 7/8 passage in the Andante’s second section. The existing cue places this discussion within the slow movement.' },
    { t: 680, kind: 'life', title: 'The melodies matter', text: 'Writing his autobiography in 1941, Prokofiev puts the lyrical side of his music ahead of its toccata-like drive. He remembers how little attention critics paid to the melodies of his youth. This slow movement gives the piano plenty of room to sing.', basis: 'documented', precision: 'passage', evidence: 'Simon Morrison, preface to Henle HN 1581 (2023), p. IV, discussing Prokofiev’s 1941 autobiography. https://www.henle.de/media/7f/27/66/1708068498/1581.pdf' },
    { t: 712, kind: 'form', title: 'The tarantella takes off', text: 'The finale dances in quick groups of three. Leaps and sharp accents interrupt the running notes, and the first movement’s singing second theme returns for a brief visit. Then the tarantella carries on to the end.', basis: 'score-proportion', precision: 'passage', evidence: 'Zanetti identifies the tarantella rhythm, leaping episode and return of the first movement’s cantabile theme. https://www.flaminioonline.it/Guide/Prokofiev/Prokofiev-Sonata14.html' },
    { t: 890, kind: 'world', title: 'Prokofiev at the piano', text: 'On 5 February 1914, Prokofiev gives the sonata its first public performance in Moscow. Jurgenson has already published it the previous year. The composer is still a student at the St Petersburg Conservatory.', basis: 'documented', precision: 'passage', evidence: 'IMSLP documents the première, pianist and 1913 publication: https://imslp.org/wiki/Piano_Sonata_No.2,_Op.14_(Prokofiev,_Sergey). Prokofiev’s Conservatory studies run to 1914.' },
  ],
  transitions: [
    {
      id: 'allegro-to-scherzo',
      title: 'The piano changes its stride',
      from: 'A · Allegro: two against three',
      to: 'B · Scherzo: short, sharp phrases',
      at: { t: 350 },
      span: [334, 363],
      how: '<p>The first movement ends its long D-minor argument. The separate Scherzo starts with short accents and repeating piano chords, marked <i>Allegro marcato</i>. The hands now strike out compact rhythmic phrases after the first movement’s singing line and triplet arpeggios.</p>',
      devices: ['tempo change', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Prokofiev, Sonata No. 2, movements I–II. The movement markings are listed by IMSLP; Zanetti and Quattrocchi describe their contrasting piano writing at https://www.flaminioonline.it/Guide/Prokofiev/Prokofiev-Sonata14.html .',
    },
    {
      id: 'scherzo-to-andante',
      title: 'A rocking bass replaces the scherzo',
      from: 'B · Scherzo: short, sharp phrases',
      to: 'C · Andante: a rocking bass',
      at: { t: 454 },
      span: [442, 469],
      how: '<p>The Scherzo finishes before the Andante begins. The piano settles into a slower rocking bass, and a long melody rises above it. Repeated chords have carried the short movement; now the upper voice can hold its notes across several changes beneath it.</p>',
      devices: ['tempo change', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Zanetti’s Santa Cecilia programme note describes the Scherzo’s brief figures and the Andante’s melody over a rocking bass. https://www.flaminioonline.it/Guide/Prokofiev/Prokofiev-Sonata14.html',
    },
    {
      id: 'andante-to-finale',
      title: 'The piano begins a tarantella',
      from: 'C · Andante: a rocking bass',
      to: 'D · Vivace: the tarantella',
      at: { t: 712 },
      span: [695, 729],
      how: '<p>The slow movement closes; the new marking is <i>Vivace</i>. Fast groups of three replace the Andante’s longer notes. The pianist’s hands drive the tarantella together, with leaps and accents cutting across its running figures.</p>',
      devices: ['tempo change', 'texture change'],
      basis: 'score-proportion',
      precision: 'passage',
      evidence: 'Prokofiev, Sonata No. 2, movements III–IV; the Vivace marking is listed in the IMSLP catalogue. Zanetti describes the tarantella and leaping figures: https://www.flaminioonline.it/Guide/Prokofiev/Prokofiev-Sonata14.html .',
    },
  ],
};
