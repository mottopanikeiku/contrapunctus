export default {
  id: 'bizet-carmen-toreador', composer: 'bizet', order: 2,
  work: 'Carmen', movement: 'Act II · Toreador Song — sung in Italian',
  year: '1873–75', key: 'F minor / F major', forces: 'Baritone and orchestra',
  performers: 'Pasquale Amato, baritone; Victor orchestra, Walter B. Rogers',
  recorded: '1911, Camden, New Jersey',
  source: { file: 'File:Pasquale Amato, Georges Bizet, Chanson du toréador, Carmen.ogg' },
  intro: 'In this song from Act II of <i>Carmen</i>, Escamillo replies to a toast with a description of the bullring. Pasquale Amato sings both verses in Italian, each a minor-key narrative followed by a broad refrain in the major.',
  sections: [
    { t: 0, label: 'A · Toast and bullfight narrative, sung in Italian', m: 'A' },
    { t: 63, label: 'B · Toreador, take care', m: 'B' },
    { t: 93, label: 'A′ · Second verse, minor-key narrative', m: 'A′' },
    { t: 154, label: 'B′ · Refrain, major key, final statement', m: 'B′', mNote: 'The major-key tune closes the song.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Escamillo’s verse, F minor', text: 'Escamillo’s song opens with a fortissimo orchestral introduction, after which he describes the arena. The verse stays in F minor, set to short repeated figures.', basis: 'general', precision: 'passage', evidence: 'Bizet’s piano reduction, Choudens vocal score (archive.org copy catalogued 1883), no. 14, p. 128: four-flat signature, F minor, fortissimo introduction (pp. 129–130 are missing from the scan). The Toreador Song article gives the key as F minor with the refrain in F major: https://en.wikipedia.org/wiki/Toreador_Song and https://archive.org/details/carmenopracomi00bize' },
    { t: 65, kind: 'form', title: 'Refrain in F major', text: 'The refrain is in F major. At its first appearance in the score it is marked <i>piano</i> and “avec fatuité” (with self-satisfaction). In the stage score the other characters and the chorus join the refrain. This recording is a solo version.', basis: 'score-proportion', precision: 'passage', evidence: 'Choudens vocal score (archive.org copy catalogued 1883), no. 14, p. 131: F-major refrain, piano, “avec fatuité”. The stage score adds the other characters and chorus to the refrain; this disc is a solo version. https://archive.org/details/carmenopracomi00bize' },
    { t: 120, kind: 'world', title: 'Amato’s Italian <i>Carmen</i>, 1911', text: 'Amato sings an Italian translation of a French opera set in Spain. His Victor disc 88327, recorded on 9 November 1911, puts a star singer, an orchestra and one substantial scene on a single record side. The Library of Congress catalogues it as an Italian-language vocal solo with harp and orchestra.', basis: 'documented', precision: 'passage', evidence: 'Truesound Transfers TT-3080, track 3, prints the Italian incipit with Victor 88327, matrix C 11213-1, Victor orchestra and Walter B. Rogers. The Library of Congress National Jukebox catalogues Victor 88327, C-11213/1, as an Italian-language vocal solo with harp and orchestra recorded 9 November 1911. https://www.truesoundtransfers.de/Titellisten/TT3080.htm and https://www.loc.gov/item/jukebox-131050/' },
    { t: 158, kind: 'music', title: 'Refrain after the second verse', text: 'After the second verse the broad refrain returns. In the opera it ties Escamillo to the crowd. The refrain returns later from the bullring, sung by the chorus during Carmen and José’s private confrontation outside.', basis: 'general', precision: 'passage', evidence: 'Choudens vocal score (archive.org copy catalogued 1883), no. 14, from p. 137 (the refrain after the second verse), and no. 27, p. 350, where the chorus sings the refrain as Don José strikes Carmen down. The opera’s synopsis describes the same reprise: https://en.wikipedia.org/wiki/Carmen and https://archive.org/details/carmenopracomi00bize' },
  ],
};
