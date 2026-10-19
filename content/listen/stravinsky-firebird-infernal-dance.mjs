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
  intro: 'The United States Marine Band, conducted by John R. Bourgeois, plays Thomas Knox’s concert-band arrangement of Kashchei’s <i>Infernal Dance</i>. The Firebird has the sorcerer and his creatures in her power: every jagged leap is another step they cannot resist.',
  sections: [
    { t: 0, label: 'A · Kashchei’s forced dance', m: 'A', mNote: 'Short figures, sharp accents and wide leaps' },
    { t: 108, label: 'B · The longer melody', m: 'B', mNote: 'The melody stretches across the beat' },
    { t: 144, label: 'A′ · Short figures return', m: 'A′', mNote: 'The dance starts to gather itself again' },
    { t: 194, label: 'Dev · The dance bears down', m: 'Dev', mNote: 'Repeated figures press towards the ending' },
    { t: 240, label: 'Coda · The last chord', m: 'Coda', mNote: 'The last attacks give way to a held sound' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'A spell with teeth', text: 'The Firebird forces Kashchei and his creatures to dance. Their own violence turns against them: the short phrases lurch, strike and start again. This is a fairy-tale rescue with very little gentleness in it.', basis: 'general', precision: 'passage', evidence: 'The ballet scenario describes the Firebird enchanting Kashchei and his subjects into an infernal dance: https://en.wikipedia.org/wiki/The_Firebird. Marcel Bowman, The Human Versus the Supernatural, pp. 98–99, discusses the dance’s angular motifs: https://collections.lib.utah.edu/dl_files/6e/34/6e3433faa6efb79c80229fe8373f0a7d3aaeab9c.pdf.' },
    { t: 62, kind: 'music', title: 'Small steps, huge leaps', text: 'The tune squeezes neighbouring notes together, then jumps across a tritone. Those cramped semitones and ungainly leaps give Kashchei’s dance its crooked gait. Even a phrase that seems ready to sing has something sharp in its mouth.', basis: 'general', precision: 'passage', evidence: 'Bowman, The Human Versus the Supernatural, pp. 98–99, examples 45a–e, traces the semitone and tritone motifs through rehearsal figures 133–141 and 161 of the ballet score: https://collections.lib.utah.edu/dl_files/6e/34/6e3433faa6efb79c80229fe8373f0a7d3aaeab9c.pdf.' },
    { t: 92, kind: 'world', title: 'Karsavina at the Opéra', text: 'On 25 June 1910, Tamara Karsavina dances the Firebird at the Paris Opéra. Michel Fokine supplies the choreography for Diaghilev’s Ballets Russes. Stravinsky is twenty-eight; this glittering, dangerous bird carries his name into the Paris theatres.', basis: 'documented', precision: 'passage', evidence: 'The premiere date, theatre, company, choreographer and original Firebird are documented at https://en.wikipedia.org/wiki/The_Firebird. Stravinsky’s birth on 17 June 1882 is documented by the Fondation Igor Stravinsky: https://fondation-igor-stravinsky.org/en/composer/biography/.' },
    { t: 144, kind: 'music', title: 'Four descending notes', text: 'One of Kashchei’s recurring gestures crawls down through four neighbouring notes. It is a tiny scrap of melody, easy to pass from one phrase to another. Alongside the wide leaps, that close-packed descent keeps the dance recognisably his.', basis: 'general', precision: 'passage', evidence: 'Bowman, The Human Versus the Supernatural, pp. 103–05, examples 49 and 52, identifies the descending four-note chromatic motif at rehearsal figures 141 and 160 of the Infernal Dance. This note describes a recurring motif, not a single entrance: https://collections.lib.utah.edu/dl_files/6e/34/6e3433faa6efb79c80229fe8373f0a7d3aaeab9c.pdf.' },
    { t: 175, kind: 'life', title: 'The name that sticks', text: 'In his 1962 book with Robert Craft, Stravinsky recalls a stranger addressing him in an American railway dining car as “Mr. Fireberg”. Half a century after the premiere, the bird still gets there before its composer.', basis: 'documented', precision: 'passage', evidence: 'Igor Stravinsky and Robert Craft, Expositions and Developments (1962), passage on The Firebird, quoted in Marcel Bowman, The Human Versus the Supernatural, p. 4: https://collections.lib.utah.edu/dl_files/6e/34/6e3433faa6efb79c80229fe8373f0a7d3aaeab9c.pdf. The recollection does not date the encounter.' },
  ],
};
