const score = 'https://imslp.tw/uploads/PMLASIA01319-Shostakovich_Fifth_Symphony%2C__Op__47_-_Full_Score.pdf';
const history = 'https://shostakovich-en.ru/140en';
const audio = 'cache/analysis/shostakovich-5-moderato.txt; source: https://archive.org/details/lp_symphony-no-5-opus-47_dmitri-shostakovich-philharmonic-symphony';

export default {
  id: 'shostakovich-5-moderato',
  composer: 'shostakovich',
  order: 1,
  work: 'Symphony No. 5 in D minor, Op. 47',
  movement: 'I. Moderato',
  set: { id: 'shostakovich-5', title: 'Symphony No. 5', part: 1, of: 4 },
  year: '1937',
  key: 'D minor',
  forces: 'Orchestra',
  performers: 'Philharmonic Symphony Orchestra of London; Artur Rodzinski, conductor',
  recorded: '1954, London; Westminster LP issued 1956',
  source: {
    archive: { item: 'lp_symphony-no-5-opus-47_dmitri-shostakovich-philharmonic-symphony', file: 'disc1/01.01. Symphony No. 5 Op. 47: Moderato.mp3' },
    rights: { basis: 'eu-published-before-1963', published: 1956, evidence: 'Westminster WN 18001 / XWN 18001, published 1956: https://archive.org/details/lp_symphony-no-5-opus-47_dmitri-shostakovich-philharmonic-symphony . Rule 3 is territorial EU sound-recording public domain; US status is not established.' },
  },
  intro: 'Low strings fling a phrase at the violins, and the Fifth Symphony begins. Rodzinski conducts a movement that grows from that bare exchange to a brass-and-drum march, then ends with the small, cold gleam of a celesta.',
  sections: [
    { t: 0, label: 'A · Low strings, high strings', m: 'A', mNote: 'Cellos and basses exchange sharp phrases with the violins' },
    { t: 180, label: 'B · A long violin melody', m: 'B', mNote: 'Harp and repeated lower strings support the quiet tune' },
    { t: 322, label: 'Dev · Piano in the bass', m: 'Dev', mNote: 'Low piano figures and cellos set the development moving' },
    { t: 540, label: 'C · Brass and strings in force', m: 'C', mNote: 'Brass chords and driven strings enlarge the opening argument' },
    { t: 660, label: 'B′ · Flute and horn', m: 'B′', mNote: 'The long melody returns above quiet repeated strings' },
    { t: 810, label: 'Coda · Violin, harp, then celesta', m: 'Coda', mNote: 'Muted strings surround the last solos and celesta scales' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'D minor in reply', text: 'Cellos and basses leap from D to B♭; the violins answer. The phrases pull against one another across the orchestra, with rests leaving each reply exposed. Winds and brass wait.', basis: 'score-proportion', precision: 'passage', evidence: `Shostakovich, Symphony No. 5, Muzgiz full score, plate M. 16313 Г, p. 3: Moderato, opening string exchange. ${score}` },
    { t: 80, kind: 'world', title: 'Pravda attacks the opera', text: 'On 28 January 1936, <i>Pravda</i> prints an unsigned attack on Shostakovich’s <i>Lady Macbeth of the Mtsensk District</i>, headed “Muddle Instead of Music”. The opera is driven from Soviet theatres. Shostakovich begins the Fifth the following spring.', basis: 'documented', precision: 'passage', evidence: 'Harlow Robinson, Boston Symphony Orchestra programme note, on the Pravda editorial, the opera’s ban and the symphony’s composition: https://www.bso.org/works/symphony-no-5-shostakovich .' },
    { t: 180, kind: 'music', title: 'A long violin line', text: 'The violins stretch out a quiet melody over repeated notes in the lower strings. Harp chords mark the harmony beneath them. The tune has room to breathe, though the accompaniment keeps counting.', basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 8–10, rehearsal 9 onwards: first violins marked pp espressivo, repeated lower strings and harp. ${score}` },
    { t: 240, kind: 'life', title: 'A first night in Leningrad', text: 'On 21 November 1937, Yevgeny Mravinsky conducts the première in the Great Hall of the Leningrad Philharmonic. Shostakovich’s old teacher Maximilian Steinberg writes in his diary: “The ovation was stupendous.”', basis: 'documented', precision: 'passage', evidence: `DSCH Publishers, work history: première details and Steinberg’s diary entry after the concert of 21 November 1937. ${history}` },
    { t: 322, kind: 'form', title: 'The piano starts digging', text: 'The piano enters low down, with short, hard-edged figures beside the cellos and basses. Horns stretch longer notes above it. The accompaniment has become the thing driving the music.', basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 12–13, rehearsals 17–18: low piano, cellos and basses, followed by horns. ${score}` },
    { t: 540, kind: 'music', title: 'Brass over the marching strings', text: 'Trumpets and trombones bear down on the strings. Repeated notes and heavy brass chords turn the movement into a march, with percussion adding its hard edge. The opening’s small exchanges have become orchestral proclamations.', basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 34–36: brass chords, repeated string figures and percussion in the climactic development and return. ${score}` },
    { t: 660, kind: 'form', title: 'Flute beside a horn', text: 'The lyrical tune returns in the flute and horn, over harp and gently repeated strings. A phrase that once belonged to the violin section is now passed between two solitary players.', basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, p. 46, rehearsal 39: Più mosso, flute and horn solos over harp and quiet repeated strings. ${score}` },
    { t: 810, kind: 'music', title: 'A celesta at the edge', text: 'The coda pares the orchestra down to solo violin, harp and muted strings. On the last page, the celesta climbs in small, bright scales while the bass and inner strings die away.', basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 50–51, rehearsals 44–47: muted strings, solo violin, harp and closing celesta scales; final parts marked morendo. ${score}` },
  ],
  transitions: [
    { id: 'lyrical-withdrawal', title: 'A long tune above repeated strings', from: 'A · Low strings, high strings', to: 'B · A long violin melody', at: { t: 180 }, span: [165, 200], how: '<p>The winds withdraw and the strings become very quiet. Harp chords and repeated notes in the lower strings establish a steady accompaniment; above them the first violins begin their long melody, marked <i>pp espressivo</i>.</p>', devices: ['decrescendo', 'orchestration change', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 8–10, rehearsal 9 onwards. ${score}` },
    { id: 'development-engine', title: 'The piano takes over the bass', from: 'B · A long violin melody', to: 'Dev · Piano in the bass', at: { t: 322 }, span: [305, 340], how: '<p>The harp’s sustained chords finish, the violin line sinks away, and the low piano begins its clipped figures. Cellos and double basses join it; the horns then lay a slower phrase over the moving bass. The piano is marked <i>una corda</i>, using the soft pedal.</p>', devices: ['register change', 'orchestration change', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 12–13, rehearsals 16–18. ${score}` },
    { id: 'reduced-recollection', title: 'The flute resumes the long melody', from: 'C · Brass and strings in force', to: 'B′ · Flute and horn', at: { t: 660 }, span: [640, 685], how: '<p>A slowing passage ends with the brass dying away. At <i>Più mosso</i>, harp chords and repeated strings return very softly. Flute and horn share the lyrical melody above them; the heavy orchestral bass has fallen silent.</p>', devices: ['decrescendo', 'orchestration change', 'texture change', 'tempo change'], basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, p. 46, rehearsal 39. ${score}` },
    { id: 'coda-colours', title: 'Muted strings surround the final solos', from: 'B′ · Flute and horn', to: 'Coda · Violin, harp, then celesta', at: { t: 810 }, span: [790, 835], how: '<p>The score returns to <i>Moderato</i>, now at crotchet = 42. Muted violas, cellos and basses carry the opening rhythm beneath a flute solo. Harp and solo violin follow; the celesta’s ascending scales belong to the last page.</p>', devices: ['tempo change', 'motivic link', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 50–51, rehearsals 44–47. ${score}` },
  ],
  orchestra: {
    ensemble: ['piccolo', 'flutes', 'oboes', 'e-flat-clarinet', 'clarinets', 'bassoons', 'contrabassoon', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'celesta', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: { title: 'Symphony No. 5 — Muzgiz M. 16313 Г, historical full score', url: score, locator: `Printed pp. 3–51; PDF pp. 5–53. Viewed historical score, hosted as public domain in Taiwan, not cleared for EU/US republication. Exact performing edition unknown. Selected passage snapshots, not a complete instrument-on/off transcription; approximate times use ${audio}.` },
    timeline: [
      { t: 0, playing: ['violins-1', 'violins-2', 'cellos', 'basses'], lead: ['cellos', 'violins-1'], note: 'Opening exchange across low and high strings; p. 3. A passage snapshot includes successive replies, not simultaneous playing on the first attack.' },
      { t: 200, playing: ['violins-1', 'violins-2', 'violas', 'cellos', 'basses', 'harp'], lead: ['violins-1'], note: 'Long violin line over patterned lower strings and harp, pp. 8–10/rehearsal 9 and following; proportional placement within the quieter B span, supported by the report’s sustained low levels after 3:15.' },
      { t: 322, playing: ['piano', 'cellos', 'basses', 'horns'], lead: ['piano', 'horns'], note: 'Low-register development texture, pp. 12–13; report boundaries at 5:10/5:22 support the regional marker, not an exact horn entrance.' },
      { t: 540, playing: ['flutes', 'oboes', 'clarinets', 'bassoons', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['violins-1', 'trumpets', 'trombones'], note: 'Broad orchestral crest, pp. 34–43; sustained loud region near 9:00–10:45. Snapshot omits instruments whose individual entries are not timed.' },
      { t: 680, playing: ['flutes', 'horns', 'harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['flutes', 'horns'], note: 'Reduced flute-and-horn lyrical texture, p. 46/rehearsal 39; approximately after the measured withdrawal near 11:00.' },
      { t: 810, playing: ['harp', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses', 'horns'], lead: ['violins-1', 'harp'], note: 'Closing solo-violin/harp and muted-string region, pp. 50–51; solo violin remains represented within violins-1.' },
      { t: 845, playing: ['celesta', 'harp', 'timpani', 'trumpets', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['celesta'], note: 'Late celesta figures and quiet supporting parts, p. 51/rehearsal 47. Approximate closing-page snapshot, not an exact entry claim.' },
    ],
  },
};
