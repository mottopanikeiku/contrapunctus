export default {
  id: 'saint-saens-cygne-bokor',
  composer: 'saint-saens',
  concert: false,
  order: 5,
  work: 'Le Carnaval des animaux',
  movement: 'XIII. Le Cygne — cello and piano',
  year: '1886',
  key: 'G major',
  forces: 'Cello and piano',
  performers: 'Judith Bokor, cello; unidentified pianist',
  recorded: 'Around 1925',
  source: {
    file: 'File:Judith Bokor plays Le Cygne by Saint-Saëns.flac',
    rights: { basis: 'eu-published-before-1963', published: 1925, evidence: ['https://archive.org/details/3-judith-bokor-col-d-17144-fx-16-17-kol-nidrei_202309'] },
  },
  intro: 'Judith Bokor plays “Le Cygne”, the thirteenth movement of <i>Le Carnaval des animaux</i> (<i>The Carnival of the Animals</i>), for cello and piano. The cello plays a long melody over continuous figuration in the piano.',
  sections: [
    { t: 0, label: 'A · Cello melody over piano broken chords', m: 'A' },
    { t: 58, label: 'B · Cello melody rises and turns', m: 'B', mNote: 'Long cello notes over running semiquavers in the piano.' },
    { t: 86, label: 'C · Cello melody in long phrases', m: 'C', mNote: 'The piano continues its figuration beneath the cello’s sustained melody.' },
    { t: 130, label: 'Coda · The cello’s last G', m: 'Coda' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Opening, piano and cello', text: 'The piano sets out G major in broken chords. The cello enters after one bar with a melody that falls twice and then climbs. Each bar has six crotchet beats, and the piano divides them into short, even notes beneath the cello’s longer ones.', basis: 'score-proportion', precision: 'passage', evidence: 'Saint-Saëns, Le Cygne, Durand score, plate D.S. 3891, pp. 1–3; cello part edited by Alvin Buechner, Carl Fischer (1907), opening bars. https://s9.imslp.org/files/imglnks/usimg/5/5f/IMSLP925269-PMLP06099-2024-03-15-12-42-19-01.PDF' },
    { t: 58, kind: 'world', title: 'The Dying Swan, 1905', text: 'In 1905 Anna Pavlova and the choreographer Michel Fokine made this cello solo into <i>The Dying Swan</i>. Saint-Saëns’s movement has twenty-eight bars. The dance became the role most closely associated with Pavlova.', basis: 'documented', precision: 'passage', evidence: 'The ballet’s creation for Pavlova in 1905 is described at https://en.wikipedia.org/wiki/Le_cygne, citing Lynn Garafola, Legacies of Twentieth-Century Dance (2005), pp. 155–156. The Durand score has twenty-eight bars.' },
    { t: 130, kind: 'music', title: 'Final bars, held G', text: 'The last phrase slows and the cello holds a high G, marked pianissimo. The piano continues its broken chords beneath the held note, then finishes alone. The final rest also carries a pause mark.', basis: 'score-proportion', precision: 'passage', evidence: 'Durand score, plate D.S. 3891, p. 3, last five bars; Carl Fischer cello part (1907), last line. The recording is dated around 1925 in its discography: https://archive.org/details/3-judith-bokor-col-d-17144-fx-16-17-kol-nidrei_202309' },
  ],
};
