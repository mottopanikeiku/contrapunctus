// Recording and arrangement: https://commons.wikimedia.org/wiki/File:Infernal_Dance_from_The_Firebird_by_Stravinsky.ogg
// Premiere and scenario: https://en.wikipedia.org/wiki/The_Firebird
// Biography: https://fondation-igor-stravinsky.org/en/composer/biography/
export default {
  id: 'stravinsky-firebird-infernal-dance',
  composer: 'stravinsky',
  order: 1,
  work: 'The Firebird',
  movement: 'Infernal Dance of Kashchei',
  year: '1909–10',
  key: '',
  forces: 'Concert band, arranged by Thomas Knox',
  performers: 'United States Marine Band; Col John R. Bourgeois',
  recorded: '',
  license: 'Public domain in the US (US Marine Band recording; composition published 1910)',
  source: { file: 'File:Infernal Dance from The Firebird by Stravinsky.ogg' },
  intro: 'The United States Marine Band, conducted by John R. Bourgeois, plays Thomas Knox’s concert-band arrangement of Kashchei’s <i>Infernal Dance</i> from <i>The Firebird</i>. In the ballet the dance is the Firebird’s spell on the sorcerer and his creatures.',
  sections: [
    { t: 0, label: 'A · Kashchei’s dance: short figures, sharp accents', m: 'A', mNote: 'Short figures, sharp accents and wide leaps.' },
    { t: 108, label: 'B · The longer melody', m: 'B', mNote: 'The melody stretches across the beat.' },
    { t: 144, label: 'A′ · Return of the short figures', m: 'A′', mNote: 'The short figures of the opening return.' },
    { t: 194, label: 'Dev · Repeated figures before the ending', m: 'Dev', mNote: 'Repeated figures lead to the ending.' },
    { t: 240, label: 'Coda · Last chord', m: 'Coda', mNote: 'The last attacks stop, and a held sound follows.' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Infernal Dance, scenario', text: 'In the ballet scenario, the Firebird enchants Kashchei and his subjects into an infernal dance. The music is built from short, angular phrases that break off and start again.', basis: 'general', precision: 'passage', evidence: 'The ballet scenario describes the Firebird enchanting Kashchei and his subjects into an infernal dance: https://en.wikipedia.org/wiki/The_Firebird. Marcel Bowman, The Human Versus the Supernatural, pp. 98–99, discusses the dance’s angular motifs: https://collections.lib.utah.edu/dl_files/6e/34/6e3433faa6efb79c80229fe8373f0a7d3aaeab9c.pdf.' },
    { t: 62, kind: 'music', title: 'Semitone and tritone motifs', text: 'The tune moves by semitones between neighbouring notes, then jumps a tritone. Bowman traced these two motifs through rehearsal figures 133–141 and 161 of the ballet score.', basis: 'general', precision: 'passage', evidence: 'Bowman, The Human Versus the Supernatural, pp. 98–99, examples 45a–e, traces the semitone and tritone motifs through rehearsal figures 133–141 and 161 of the ballet score: https://collections.lib.utah.edu/dl_files/6e/34/6e3433faa6efb79c80229fe8373f0a7d3aaeab9c.pdf.' },
    { t: 92, kind: 'world', title: 'First performance, Paris Opéra, 1910', text: 'On 25 June 1910 Tamara Karsavina danced the Firebird at the Paris Opéra. Michel Fokine provided the choreography for Diaghilev’s Ballets Russes. Stravinsky was twenty-eight.', basis: 'documented', precision: 'passage', evidence: 'The premiere date, theatre, company, choreographer and original Firebird are documented at https://en.wikipedia.org/wiki/The_Firebird. Stravinsky’s birth on 17 June 1882 is documented by the Fondation Igor Stravinsky: https://fondation-igor-stravinsky.org/en/composer/biography/.' },
    { t: 144, kind: 'music', title: 'Four-note descending motif', text: 'One of Kashchei’s recurring motifs descends chromatically through four neighbouring notes, as at rehearsal figures 141 and 160. The fragment is short and passes easily from one phrase to another. It is heard alongside Kashchei’s wide leaps.', basis: 'general', precision: 'passage', evidence: 'Bowman, The Human Versus the Supernatural, pp. 103–05, examples 49 and 52, identifies the descending four-note chromatic motif at rehearsal figures 141 and 160 of the Infernal Dance. This note describes a recurring motif, not a single entrance: https://collections.lib.utah.edu/dl_files/6e/34/6e3433faa6efb79c80229fe8373f0a7d3aaeab9c.pdf.' },
    { t: 175, kind: 'life', title: 'Stravinsky as “Mr. Fireberg”', text: 'In <i>Expositions and Developments</i>, his 1962 book with Robert Craft, Stravinsky recalled a stranger in an American railway dining car who addressed him as “Mr. Fireberg”. He did not date the encounter.', basis: 'documented', precision: 'passage', evidence: 'Igor Stravinsky and Robert Craft, Expositions and Developments (1962), passage on The Firebird, quoted in Marcel Bowman, The Human Versus the Supernatural, p. 4: https://collections.lib.utah.edu/dl_files/6e/34/6e3433faa6efb79c80229fe8373f0a7d3aaeab9c.pdf. The recollection does not date the encounter.' },
  ],
};
