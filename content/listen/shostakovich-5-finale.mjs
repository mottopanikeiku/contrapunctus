const score = 'https://imslp.tw/uploads/PMLASIA01319-Shostakovich_Fifth_Symphony%2C__Op__47_-_Full_Score.pdf';
const history = 'https://shostakovich-en.ru/140en';
const cut = 'https://www.opusklassiek.nl/cd-recensies/cd-nn/nnrodzinski_westminster.htm';
const audio = 'cache/analysis/shostakovich-5-finale.txt; source: https://archive.org/details/lp_symphony-no-5-opus-47_dmitri-shostakovich-philharmonic-symphony';

export default {
  id: 'shostakovich-5-finale',
  composer: 'shostakovich',
  order: 4,
  work: 'Symphony No. 5 in D minor, Op. 47',
  movement: 'IV. Allegro non troppo',
  set: { id: 'shostakovich-5', title: 'Symphony No. 5', part: 4, of: 4 },
  year: '1937',
  key: 'D minor → D major',
  forces: 'Orchestra',
  performers: 'Philharmonic Symphony Orchestra of London; Artur Rodzinski, conductor',
  recorded: '1954, London; Westminster LP issued 1956',
  source: {
    archive: { item: 'lp_symphony-no-5-opus-47_dmitri-shostakovich-philharmonic-symphony', file: 'disc1/02.02. Symphony No. 5 Op. 47: Allegro Non Troppo.mp3' },
    rights: { basis: 'eu-published-before-1963', published: 1956, evidence: 'Westminster WN 18001 / XWN 18001, published 1956: https://archive.org/details/lp_symphony-no-5-opus-47_dmitri-shostakovich-philharmonic-symphony . Rule 3 is territorial EU sound-recording public domain; US status is not established.' },
  },
  intro: 'The fourth movement of the Symphony No. 5 in D minor, Op. 47, marked Allegro non troppo, ends with the brass in D major over a repeated high A. Rodzinski conducts a shortened version that cuts 37 bars from the finale.',
  sections: [
    { t: 0, label: 'A · Brass march theme over timpani', m: 'A', mNote: 'Trumpets, trombones and tuba play the march theme over timpani.' },
    { t: 196, label: 'B · Quiet violins', m: 'B', mNote: 'The brass recede and the violins continue.' },
    { t: 312, label: 'Link · Low winds and drum', m: 'Link', mNote: 'Low woodwinds and drum lead into the return of the march' },
    { t: 398, label: 'A′ · Brass over repeated string notes', m: 'A′', mNote: 'Brass phrases lengthen over repeated notes in the strings.' },
    { t: 436, label: 'Coda · D major, repeated A', m: 'Coda', mNote: 'High repeated notes continue over sustained brass chords.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Brass march over timpani', text: 'After a full attack from woodwind and brass, trumpets, trombones and tuba play the march in D minor over the timpani. The strings rest.', basis: 'score-proportion', precision: 'passage', evidence: `Shostakovich, Symphony No. 5, Muzgiz full score, plate M. 16313 Г, p. 109, rehearsal 97: Allegro non troppo, brass march and timpani; strings resting. ${score}` },
    { t: 80, kind: 'world', title: 'Rodzinski’s 37-bar cut', text: 'Rodzinski cut 37 bars from this finale. He made the same cut in his 1942 Cleveland recording and kept it in the Westminster version twelve years later.', basis: 'documented', precision: 'passage', evidence: `Niek Nelissen, review of Artur Rodzinski: Complete Westminster Recordings, August 2026, identifies a 37-bar cut in the 1942 recording and the same cut in the Westminster account. Its position in this transfer has not been established. ${cut}` },
    { t: 196, kind: 'form', title: 'Violins after the march', text: 'The brass grow softer and stop. The violins continue in a much quieter passage, playing small repeated figures above long notes in the lower parts.', basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 138–142, from rehearsal 112: reduced dynamics and quieter violin writing after the opening march. The cut in this performance limits closer placement within this passage. ${score}` },
    { t: 240, kind: 'life', title: 'Introduction to the score, 1956', text: 'In the introduction to the 1956 Muzgiz score, published under his name, Shostakovich called the finale “an optimistic, invigorating outlet for all the tragic tensions of the earlier parts”.', basis: 'documented', precision: 'passage', evidence: `Introduction to the Score of Symphony No. 5, published under Shostakovich’s name by Muzgiz in 1956; text reproduced by DSCH Publishers. ${history}` },
    { t: 320, kind: 'world', title: 'Première, Leningrad, 21 November 1937', text: 'At the première in Leningrad on 21 November 1937, the artist Lyubov Yakovleva watched Shostakovich respond to the applause. In her diary she described him as pale and biting his lips: “I think he might have burst into tears.”', basis: 'documented', precision: 'passage', evidence: `Lyubov Yakovleva’s diary account after the première of 21 November 1937, quoted in the DSCH Publishers work history. ${history}` },
    { t: 398, kind: 'music', title: 'Brass over repeated notes', text: 'The march returns over repeated notes in the strings and woodwinds. Above this accompaniment the brass play longer phrases, and their note values lengthen towards the end.', basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 156–158, rehearsals 130–131: repeated wind and string figures with longer brass phrases. ${score}` },
    { t: 436, kind: 'form', title: 'Repeated A over D major', text: 'High strings and woodwinds repeat A above long D major chords in the brass. The harmony underneath scarcely moves.', basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 158–165: repeated A figures and the sustained D major close. ${score}` },
    { t: 480, kind: 'music', title: 'Closing chords in D major', text: 'The repeated notes stop. Brass and strings hold the closing D major chords, and the bass drum and timpani play repeated strokes beneath them.', basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, p. 165: repeated-note figures cease before the final sustained chords; bass drum and timpani provide the closing accents. ${score}` },
  ],
  transitions: [
    { id: 'quiet-middle', title: 'Violins continue after the brass chords', from: 'A · Brass march theme over timpani', to: 'B · Quiet violins', at: { t: 196 }, span: [180, 216], how: '<p>The brass sustain their chords and diminish. At rehearsal 112 much of the orchestra stops, and the violins continue with repeated notes over a held bass. The tempo slows to crotchet = 80.</p>', devices: ['decrescendo', 'tempo change', 'orchestration change'], basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, p. 138, rehearsal 112. This describes the broad written withdrawal; the 37-bar cut prevents closer placement. ${score}` },
    { id: 'march-weight', title: 'Repeated string figures and returning brass', from: 'Link · Low winds and drum', to: 'A′ · Brass over repeated string notes', at: { t: 398 }, span: [380, 417], how: '<p>The passage for low wind and drums leads into repeated figures for the strings and upper woodwinds. Trumpets and trombones re-enter above them with longer phrases, and the bass supports the climb towards the closing D major.</p>', devices: ['crescendo build', 'orchestration change', 'texture change'], basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 146–158, from rehearsal 121 to the later brass writing at rehearsals 130–131. ${score}` },
    { id: 'final-field', title: 'Repeated A over D major', from: 'A′ · Brass over repeated string notes', to: 'Coda · D major, repeated A', at: { t: 436 }, span: [418, 458], how: '<p>The repeated upper notes stay on A while the brass broaden into long chords. Underneath, the harmony is D major, with D in the bass. The strings continue their repeated notes through the sustained brass phrases up to the final orchestral chords.</p>', devices: ['texture change', 'tonic pedal'], basis: 'score-proportion', precision: 'passage', evidence: `Muzgiz full score, pp. 158–165: closing D major, repeated upper A and sustained brass and bass parts. ${score}` },
  ],
  orchestra: {
    ensemble: ['piccolo', 'flutes', 'oboes', 'e-flat-clarinet', 'clarinets', 'bassoons', 'contrabassoon', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'harp', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'],
    basis: 'score-proportion',
    source: { title: 'Symphony No. 5 — Muzgiz M. 16313 Г, historical full score', url: score, locator: `Printed pp. 109–165; PDF pp. 111–167. The reported 37-bar cut (${cut}) is not located; selected broad snapshots must not be read as an uncut bar map. Viewed score is public domain in Taiwan, not cleared for EU/US republication; exact performing edition unknown. Timing evidence: ${audio}.` },
    timeline: [
      { t: 0, playing: ['flutes', 'oboes', 'clarinets', 'bassoons', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani'], lead: ['trumpets', 'trombones', 'tuba', 'timpani'], note: 'Opening wind/brass attack, then brass march with timpani, p. 109; strings rest at first. Successive opening events grouped, not one static chord.' },
      { t: 40, playing: ['flutes', 'oboes', 'clarinets', 'bassoons', 'horns', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['violins-1', 'flutes'], note: 'Moving wind/string layers after the opening, p. 111 and following; approximate regional snapshot.' },
      { t: 200, playing: ['violins-1', 'violins-2', 'cellos', 'basses'], lead: ['violins-1'], note: 'Reduced string region after the opening wave, p. 138; acoustic withdrawal near 3:16–3:20. Exact page-to-time correspondence remains uncertain because the cut is unaligned.' },
      { t: 360, playing: ['clarinets', 'bassoons', 'contrabassoon', 'horns', 'tuba', 'timpani', 'percussion', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['timpani', 'clarinets'], note: 'Selected rebuilding texture from p. 146/rehearsal 121, including side drum within percussion; approximate correspondence to the gradual late recovery, not an exact entrance.' },
      { t: 400, playing: ['flutes', 'oboes', 'clarinets', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['trumpets', 'violins-1'], note: 'Later orchestral accumulation, pp. 156–158; selected active groups, not an exhaustive chord inventory or an uncut timing map.' },
      { t: 450, playing: ['piccolo', 'flutes', 'oboes', 'e-flat-clarinet', 'clarinets', 'bassoons', 'contrabassoon', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'piano', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['horns', 'trumpets', 'trombones'], note: 'D-major closing section, pp. 164–165: repeated notes in the upper parts, long brass notes and bass support; approximate snapshot of the late coda.' },
      { t: 480, playing: ['flutes', 'oboes', 'clarinets', 'bassoons', 'contrabassoon', 'horns', 'trumpets', 'trombones', 'tuba', 'timpani', 'percussion', 'violins-1', 'violins-2', 'violas', 'cellos', 'basses'], lead: ['trumpets', 'trombones', 'timpani', 'percussion'], note: 'Final sustained chords and percussion accents, p. 165. The last repeated-note attack and the final chords come one after the other in this closing excerpt.' },
    ],
  },
};
