export default {
  id: 'bizet-carmen-toreador', composer: 'bizet', order: 2,
  work: 'Carmen', movement: 'Act II · Toreador Song — sung in Italian',
  year: '1873–75', key: 'F minor / F major', forces: 'Baritone and orchestra',
  performers: 'Pasquale Amato, baritone; Victor orchestra, Walter B. Rogers',
  recorded: '1911, Camden, New Jersey',
  source: { file: 'File:Pasquale Amato, Georges Bizet, Chanson du toréador, Carmen.ogg' },
  intro: 'Escamillo answers a toast by describing the bullring, then turns the room into his audience. Pasquale Amato sings both verses in Italian: muscular minor-key storytelling, each time followed by a broad major-key refrain.',
  sections: [
    { t: 0, label: 'A · A toast and a bullfight', m: 'A' },
    { t: 63, label: 'B · Toreador, take care', m: 'B' },
    { t: 93, label: 'A′ · The bull enters', m: 'A′', mNote: 'The minor-key narrative returns for the second verse' },
    { t: 154, label: 'B′ · The refrain returns', m: 'B′', mNote: 'The major-key tune closes the song' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'A public voice', text: 'Escamillo’s song starts with the orchestra’s emphatic gestures, then settles into his account of the arena. The verse stays in F minor; short repeated figures give his storytelling a clipped, physical energy.', basis: 'general', precision: 'passage', evidence: 'Bizet’s piano reduction, Choudens vocal score (archive.org copy catalogued 1883), no. 14, p. 128: four-flat signature, F minor, fortissimo introduction (pp. 129–130 are missing from the scan). The Toreador Song article gives the key as F minor with the refrain in F major: https://en.wikipedia.org/wiki/Toreador_Song and https://archive.org/details/carmenopracomi00bize' },
    { t: 65, kind: 'form', title: 'The refrain opens out', text: 'The tune everyone remembers is in F major. Its first appearance in the score is marked softly and “avec fatuité” — with self-satisfaction. Escamillo knows the effect his refrain will have before the room joins in.', basis: 'score-proportion', precision: 'passage', evidence: 'Choudens vocal score (archive.org copy catalogued 1883), no. 14, p. 131: F-major refrain, piano, “avec fatuité”. The stage score adds the other characters and chorus to the refrain; this disc is a solo version. https://archive.org/details/carmenopracomi00bize' },
    { t: 120, kind: 'world', title: 'Carmen travels in Italian', text: 'Amato sings an Italian translation of a French opera set in Spain. His 1911 Victor disc preserves one route by which the work travelled: a star singer, an orchestra and one substantial scene on a single record side.', basis: 'documented', precision: 'passage', evidence: 'Truesound Transfers TT-3080, track 3, prints the Italian incipit with Victor 88327, matrix C 11213-1, Victor orchestra and Walter B. Rogers. The Library of Congress National Jukebox catalogues Victor 88327, C-11213/1, as an Italian-language vocal solo with harp and orchestra recorded 9 November 1911. https://www.truesoundtransfers.de/Titellisten/TT3080.htm and https://www.loc.gov/item/jukebox-131050/' },
    { t: 158, kind: 'music', title: 'The room remembers him', text: 'After the second verse, the broad refrain returns. In the opera it binds Escamillo to the crowd; its later return from the bullring makes a dreadful counterpoint to Carmen and José’s private confrontation outside.', basis: 'general', precision: 'passage', evidence: 'Choudens vocal score (archive.org copy catalogued 1883), no. 14, from p. 137 (the refrain after the second verse), and no. 27, p. 350, where the chorus sings the refrain as Don José strikes Carmen down. The opera’s synopsis describes the same reprise: https://en.wikipedia.org/wiki/Carmen and https://archive.org/details/carmenopracomi00bize' },
  ],
};
