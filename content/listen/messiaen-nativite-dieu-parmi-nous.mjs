const ITEM = 'https://archive.org/details/lp_messiaen-la-nativite-du-seigneur-the-nativ_ernest-white-olivier-messiaen';
const SLEEVE = `the Mercury Classics MG 10069 sleeve (notes on the composer, the music, the artist and the organ), scanned in the Internet Archive item ${ITEM}`;
const WIKI = 'https://en.wikipedia.org/wiki/La_Nativit%C3%A9_du_Seigneur';
const AO = 'The American Organist, October 1952 (vol. 35, no. 10), record reviews: https://archive.org/details/sim_american-organist-1918_1952-10_35_10';

export default {
  id: 'messiaen-nativite-dieu-parmi-nous',
  composer: 'messiaen',
  order: 1,
  work: 'La Nativité du Seigneur',
  movement: 'IX. Dieu parmi nous',
  year: '1935',
  key: '',
  forces: 'Organ',
  performers: 'Ernest White, organ',
  recorded: 'August 1949, Methuen, Massachusetts',
  source: {
    archive: { item: 'lp_messiaen-la-nativite-du-seigneur-the-nativ_ernest-white-olivier-messiaen', file: 'disc1/02.05. God Among Us.mp3' },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1952,
      evidence: 'Mercury Classics MG 10069 was on sale by autumn 1952: The American Organist, October 1952 (vol. 35, no. 10), reviews “Ernest White, Methuen Memorial Hall, Mass.… Mercury 12” lp. MG-10069, $4.85”, https://archive.org/details/sim_american-organist-1918_1952-10_35_10 ; American Music Teacher, November–December 1952 (vol. 2, no. 2), reviews the same record, https://archive.org/details/sim_american-music-teacher_november-december-1952_2_2 . The sleeve gives the session as August 1949. Territorial EU basis only; US status not established.',
    },
  },
  intro: 'Ernest White recorded Messiaen’s <i>La Nativité du Seigneur</i> in August 1949 on the rebuilt Walcker organ of Memorial Hall, Methuen, Massachusetts. This is the ninth and last piece, <i>Dieu parmi nous</i>, which ends in a toccata.',
  sections: [
    { t: 0, label: 'A · Loud opening, then quieter music', m: 'A' },
    { t: 145, label: 'B · Sustained loud section', m: 'B' },
    { t: 372, label: 'C · Loudest closing stretch', m: 'C' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Ninth and last meditation', text: 'Dieu parmi nous closes the nine meditations. Messiaen printed three scriptural passages above it, including “The Word was made flesh and dwelt among us”, and paired it with the seventh piece as the living, sorrowing God in our midst.', basis: 'documented', precision: 'passage', evidence: `Preface to the score (flyleaf) and the epigraph to piece 9 (Ecclesiasticus 24; John 1:14; Luke 1:46–47), as printed in English on ${SLEEVE}.` },
    { t: 40, kind: 'world', title: 'The Methuen organ', text: 'The organ was built by Walcker in 1857–62. It stood in the Boston Music Hall from 1863 to 1884 and was heard in Methuen’s Memorial Hall from 1909. G. Donald Harrison of Aeolian-Skinner redesigned it, and the recording used the rebuilt instrument.', basis: 'documented', precision: 'passage', evidence: `History of the organ in the sleeve note “The artist and his instrument”: ${SLEEVE} . Walcker 1863, rebuilt by Aeolian-Skinner 1949: ${AO}` },
    { t: 145, kind: 'form', title: 'Loud section begins', text: 'The organ becomes much louder here and stays loud, apart from short dips, to the end of the piece.', basis: 'audio-feature', precision: 'passage', evidence: `Heard in the transfer of Mercury MG 10069, side 2: after a near-silent moment at about 2:25 the sound jumps to its loud passages, the largest rise in the track, and stays there with brief dips to the end.` },
    { t: 200, kind: 'life', title: 'Ernest White', text: 'Ernest White was born in Canada and went to the United States in 1925 to study the organ with Lynnwood Farnam. He became musical director of the Church of St Mary the Virgin in New York.', basis: 'documented', precision: 'passage', evidence: `Sleeve note “The artist and his instrument”: ${SLEEVE}` },
    { t: 260, kind: 'world', title: 'Recording and issue, 1949–52', text: 'The sleeve says the recording was made in August 1949 under the engineering supervision of H. Vose Greenough. Mercury issued it as MG 10069 at $4.85, and The American Organist reviewed it in October 1952.', basis: 'documented', precision: 'passage', evidence: `Session and engineer: ${SLEEVE} . Issue and price: ${AO}` },
    { t: 320, kind: 'life', title: 'Messiaen at twenty-six', text: 'Messiaen wrote La Nativité in 1935, in Grenoble, at the age of twenty-six. His preface to the score begins: “Emotion and sincerity above all!”', basis: 'documented', precision: 'passage', evidence: `Preface as quoted on ${SLEEVE} . Composition in Grenoble, summer 1935: ${WIKI}` },
    { t: 372, kind: 'world', title: 'First performance, 1936', text: 'Three organists shared the first performance at La Trinité on 27 February 1936: Daniel-Lesur played pieces 1–3, Jean Langlais 4–6 and Jean-Jacques Grunenwald 7–9, which include this one. Leduc published piece 9 alone as the fourth book.', basis: 'documented', precision: 'passage', evidence: `${WIKI} (première on 27 February 1936; division among the players; Book IV for piece 9 alone).` },
    { t: 400, kind: 'world', title: 'Two reviews, 1952', text: 'The American Organist called the cycle “difficult-to-play and difficult-to-enjoy” but said White’s performance should satisfy admirers of the work. Mildred Andrews of the University of Oklahoma, quoted in American Music Teacher, called him “a musical architect of real genius”.', basis: 'documented', precision: 'passage', evidence: `${AO} . American Music Teacher, November–December 1952 (vol. 2, no. 2), record reviews: https://archive.org/details/sim_american-music-teacher_november-december-1952_2_2` },
  ],
};
