// Score: Carl Nielsen Edition, series II, vol. 11, Chamber Music 2 (Edition Wilhelm Hansen, Copenhagen, 2003), Quintet, Op. 43; bar numbers are those printed there: https://www.kb.dk/dcm/assets/cnu/pdf/CNU_II_11_chamber_music_2.pdf
const SCORE = 'Carl Nielsen Edition, series II, vol. 11, Chamber Music 2 (Edition Wilhelm Hansen, Copenhagen, 2003), Quintet, Op. 43, second movement, with the bar numbers printed there: https://www.kb.dk/dcm/assets/cnu/pdf/CNU_II_11_chamber_music_2.pdf';
const PREFACE = 'Carl Nielsen Edition, series II, vol. 11 (2003), preface to the Quintet: https://www.kb.dk/dcm/assets/cnu/pdf/CNU_II_11_chamber_music_2.pdf';
const ITEM = 'Internet Archive item db-5200-3-nielsen-wind-quintet-iii (description and label scans), https://archive.org/details/db-5200-3-nielsen-wind-quintet-iii';
const KELLY = 'The Gramophone Company Discography (after Alan Kelly), matrix 2CS 295, https://www.gramophonecompanydiscography.com/';

export default {
  id: 'nielsen-wind-quintet-menuet',
  composer: 'nielsen',
  order: 1,
  work: 'Wind Quintet, Op. 43',
  movement: 'II. Menuet',
  year: '1922',
  key: 'A major',
  forces: 'Flute, oboe, clarinet, horn and bassoon',
  performers: 'Wind Quintet of the Royal Orchestra, Copenhagen (Det Kgl. Kapels Blæserkvintet): Holger Gilbert-Jespersen, flute; Svend Christian Felumb, oboe; Aage Oxenvad, clarinet; Hans Sørensen, horn; Knud Lassen, bassoon',
  recorded: '5 May 1936, Copenhagen',
  source: {
    archive: { item: 'db-5200-3-nielsen-wind-quintet-iii', file: 'DB5200-3 Nielsen Wind Quintet (ii).mp3' },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1937,
      evidence: 'The Musical Quarterly, vol. 23 no. 2, April 1937, “Quarterly Record-List”, Nielsen entries, lists Quintet, Op. 43, and Taagen letter as Danish Gramophone DB 5200–3: https://archive.org/details/sim_musical-quarterly_1937-04_23_2 . The four 12-inch discs DB5200–DB5203 are reviewed at $2.50 each in The New Records (H. Royer Smith Co., Philadelphia), vol. 5 no. 6, August 1937: https://archive.org/details/TNR05 . Matrices and recording dates: The Gramophone Company Discography (after Alan Kelly), https://www.gramophonecompanydiscography.com/ . Territorial EU basis only; US status not established.',
    },
  },
  intro: 'The Menuet of Nielsen’s Wind Quintet has a clarinet melody over a staccato bassoon, a Trio in F major and a short Coda. This side was re-recorded on 5 May 1936, more than three months after the rest of the quintet was made for HMV in Copenhagen.',
  sections: [
    { t: 0, label: 'A · Menuet, clarinet over bassoon', m: 'A' },
    { t: 95, label: 'B · Trio in F major', m: 'B' },
    { t: 151, label: 'A′ · Menuet returns, written out', m: 'A′', mNote: 'Bar 72 repeats the opening texture, clarinet over bassoon.' },
    { t: 240, label: 'Coda · Rising lines, then diminuendo', m: 'Coda' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Menuet, clarinet and bassoon', text: 'The Menuet is in 3/4, marked ♩ = 96. The clarinet plays the melody at mp over staccato repeated notes in the bassoon. Flute and oboe rest for the first fifteen bars, and the horn enters at p in bar 9.', basis: 'score-proportion', precision: 'passage', evidence: `${SCORE}, pp. 121–122, bars 1–16.` },
    { t: 45, kind: 'life', title: 'Written in Gothenburg, 1922', text: 'Nielsen began the Quintet before leaving for Gothenburg in February 1922 and wrote the rest there, living with Herman and Lisa Mannheimer. The first movement was finished at the end of March, the second and third within a month, and the work was played at the Mannheimers’ home on 30 April.', basis: 'documented', precision: 'passage', evidence: `${PREFACE}, p. xxxv. Private performance of 30 April 1922: Catalogue of Carl Nielsen’s Works, CNW 70, https://www.kb.dk/dcm/cnw/document.xq?n=70` },
    { t: 95, kind: 'form', title: 'Trio, bar 45', text: 'The Trio begins at bar 45 and moves to F major. Oboe and clarinet carry the melody, and the flute enters at p in bar 48. The section ends at bar 71 on a pp chord under a fermata.', basis: 'audio-feature', precision: 'passage', evidence: `${SCORE}, pp. 124–125, bars 45–71.` },
    { t: 151, kind: 'form', title: 'Return of the Menuet, bar 72', text: 'The Menuet returns at bar 72, written out in full. The clarinet plays the melody at mp over the staccato bassoon, as in the opening bars.', basis: 'audio-feature', precision: 'passage', evidence: `${SCORE}, p. 125, bars 72–76.` },
    { t: 190, kind: 'world', title: 'This side re-recorded, May 1936', text: 'Four takes were made of this side, matrix 2CS 295. The first three date from January 1936, and the fourth, which was issued, was made on 5 May 1936.', basis: 'documented', precision: 'passage', evidence: `Take 4 of 2CS 295 and its date: ${KELLY}. The transferred side is listed as 2CS 295-4 in ${ITEM}.` },
    { t: 240, kind: 'form', title: 'Coda, bar 115', text: 'The Coda begins at bar 115 at f, with a rising run in the clarinet and a held note in the horn. In the last three bars all five instruments diminuendo together on repeated chords, marked rall., and the movement ends at bar 122 on a p chord under a fermata.', basis: 'audio-feature', precision: 'passage', evidence: `${SCORE}, p. 128, bars 109–122.` },
  ],
};
