// Messiaen’s programme note for the first performance (Boston, 2 December 1949), movement by movement, as reprinted in Barbara Heninger’s note for the Redwood Symphony: https://redwoodsymphony.org/piece/turangalila-symphony/
// Messiaen’s own note on the Vega sleeve (28.001/28.002, 1962), scanned in the Internet Archive item: https://archive.org/details/lp_turangalila-symphonie_olivier-messiaen-yvonne-loriod-jeanne-l
const ITEM = 'https://archive.org/details/lp_turangalila-symphonie_olivier-messiaen-yvonne-loriod-jeanne-l';
const BOSTON = 'Messiaen’s programme note for the first performance (Boston, 2 December 1949), as reprinted in Barbara Heninger’s note for the Redwood Symphony: https://redwoodsymphony.org/piece/turangalila-symphony/';

export default {
  id: 'messiaen-turangalila-jardin',
  composer: 'messiaen',
  order: 3,
  work: 'Turangalîla-Symphonie',
  movement: 'VI. Jardin du sommeil d’amour',
  year: '1946–48',
  key: '',
  forces: 'Solo piano, ondes Martenot and orchestra',
  performers: 'Yvonne Loriod, piano; Jeanne Loriod, ondes Martenot; Orchestre National de la R.T.F.; Maurice Le Roux, conductor',
  recorded: '',
  source: {
    archive: { item: 'lp_turangalila-symphonie_olivier-messiaen-yvonne-loriod-jeanne-l', file: 'disc2/03.01. Jardin Du Sommeil D\'Amour.mp3' },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1962,
      evidence: 'Vega 28.001/28.002 (two 30 cm LPs): every label carries the notice (P) 1962, scanned in the Internet Archive item. Jean Roy, Présences contemporaines: musique française (Paris: Nouvelles Éditions Debresse, 1962), index of works and discs, lists Turangalîla-Symphonie, Orchestre National de la R.T.F., Maurice Le Roux, 2 discs 30 cm 33 rpm, Véga 339-40 (mono) and 20.033-34 (stereo): https://archive.org/details/presencescontemp0000royj . The catalogue numbers on the transferred pressing differ from Roy’s; the session date is not established. Territorial EU basis only; US status not established.',
    },
  },
  intro: 'Jardin du sommeil d’amour is the sixth of the ten movements of Messiaen’s <i>Turangalîla-Symphonie</i>. Yvonne Loriod plays the piano and her sister Jeanne the ondes Martenot, with Maurice Le Roux conducting the Orchestre National de la R.T.F. on a Vega set dated 1962.',
  sections: [
    { t: 0, label: 'A · First section', m: 'A' },
    { t: 132, label: 'B · Second section', m: 'B' },
    { t: 286, label: 'C · Third section', m: 'C' },
    { t: 406, label: 'D · Fourth section', m: 'D' },
    { t: 558, label: 'E · Quiet close', m: 'E' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Sixth of ten movements', text: 'Jardin du sommeil d’amour follows Joie du sang des étoiles, a long dance, and comes before Turangalîla 2. The Vega labels give its length as 10′05″.', basis: 'documented', precision: 'passage', evidence: `Movement list and timings printed on the Vega 28.001/28.002 sleeve and labels (1962): ${ITEM} . Joie du sang des étoiles as “a long and frenzied dance of joy”: ${BOSTON}` },
    { t: 12, kind: 'music', title: 'Love theme, ondes and strings', text: 'Messiaen’s programme note calls the melody of this movement long and slow, for ondes Martenot and strings, decorated by vibraphone, glockenspiel and the piano’s birdsong. It is the third of his four cyclic themes, the love theme.', basis: 'documented', precision: 'passage', evidence: `${BOSTON} Movement VI: “Here appears the third cyclic theme: that of love.” The sleeve text of the Vega set names the third cyclic theme as the most important and calls it the love theme.` },
    { t: 75, kind: 'life', title: 'Yvonne and Jeanne Loriod', text: 'Messiaen’s note on the Vega sleeve says Yvonne Loriod played the solo piano part at every performance, whoever conducted. Her sister Jeanne plays the ondes Martenot on this record. Yvonne became Messiaen’s second wife in 1961.', basis: 'documented', precision: 'passage', evidence: `Vega sleeve and labels, 1962 (piano: Yvonne Loriod; ondes Martenot: Jeanne Loriod): ${ITEM} . Jeanne as Yvonne’s younger sister: Wikipedia, https://en.wikipedia.org/wiki/Jeanne_Loriod . Marriage in 1961: Los Angeles Philharmonic note on Messiaen, https://www.laphil.com/works/trois-petites-liturgies-de-la-presence-divine` },
    { t: 150, kind: 'world', title: 'Koussevitzky’s commission', text: 'Serge Koussevitzky commissioned the symphony for the Boston Symphony Orchestra. Messiaen says on the Vega sleeve that he wrote and orchestrated it between 17 July 1946 and 29 November 1948.', basis: 'documented', precision: 'passage', evidence: `Messiaen’s note printed on the Vega sleeve (English text): ${ITEM}` },
    { t: 225, kind: 'world', title: 'First performance, Boston, 1949', text: 'Leonard Bernstein conducted the first performance in Symphony Hall, Boston, on 2 December 1949. Loriod played the piano and Ginette Martenot the ondes Martenot. Koussevitzky, who had been scheduled to conduct, was ill.', basis: 'documented', precision: 'passage', evidence: `Date, hall, conductor and pianist: Messiaen’s note on the Vega sleeve, ${ITEM} . Ginette Martenot and Koussevitzky’s illness: https://en.wikipedia.org/wiki/Turangal%C3%AEla-Symphonie` },
    { t: 300, kind: 'form', title: 'Love theme in later movements', text: 'Messiaen’s note on the eighth movement, Développement de l’amour, says it develops the three cyclic themes. In the Finale he names two themes, a fanfare for trumpets and horns and the love theme, and bases the coda on the love theme.', basis: 'documented', precision: 'passage', evidence: `${BOSTON} Movements VIII and X.` },
    { t: 390, kind: 'world', title: 'The Vega set, 1962', text: 'The Vega labels carry the date 1962. Jean Roy’s guide to contemporary French music, also of 1962, lists Maurice Le Roux’s Turangalîla with the Orchestre National de la R.T.F. as a two-disc Vega set.', basis: 'documented', precision: 'passage', evidence: `Labels of Vega 28.001/28.002, (P) 1962: ${ITEM} . Jean Roy, Présences contemporaines: musique française (Paris: Nouvelles Éditions Debresse, 1962), index of discs: https://archive.org/details/presencescontemp0000royj` },
    { t: 558, kind: 'form', title: 'Quiet close', text: 'The last stretch of the movement is its quietest. The sleeve timing of 10′05″ includes it, and Turangalîla 2 follows on the same record side.', basis: 'audio-feature', precision: 'passage', evidence: `Heard on the transfer of Vega 28.002, face 3: the final minute of the track is its softest. Order of movements and timings: Vega sleeve and labels, ${ITEM}` },
  ],
};
