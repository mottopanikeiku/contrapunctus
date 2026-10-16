// Opera: https://www.eno.org/discover-opera/articles/an-introduction-to-la-traviata/
// Life: https://www.treccani.it/enciclopedia/giuseppina-strepponi_%28Dizionario-Biografico%29/
// Dumas chronology: https://essentiels.bnf.fr/fr/litterature/19e-siecle-1/e7bb7905-4ec3-45c9-bb63-0bd87831aef0-theatre-19e-siecle/article/d9574ee1-3fcb-45f7-8919-baec6a855507-dame-camelias
// Source and recording date: Commons file description below. Surface noise limits pitch estimates.
export default {
  id: 'verdi-traviata-prelude',
  composer: 'verdi',
  order: 1,
  work: 'La traviata',
  movement: 'Act I · Prelude',
  year: '1853',
  key: '',
  forces: 'Orchestra',
  performers: 'New York Philharmonic, Arturo Toscanini',
  recorded: '1929',
  source: { file: 'File:PDP-CH - New York Philharmonic - Arturo Toscanini - La traviata - Prelude - Act 1 - Electrola-ej423-6-0755.flac' },
  question: 'What can an orchestra reveal before a character sings?',
  intro: 'Before Violetta’s party begins, Verdi contrasts exposed high strings with a broader melody that returns later in the opera. How does the prelude change your expectations before any singer appears?',
  sections: [
    { t: 0, label: 'Exposed high strings' },
    { t: 85, label: 'Cantabile · Violetta’s melody' },
    { t: 130, label: 'Melody with decoration' },
    { t: 198, label: 'Quiet close' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'The exposed opening', text: 'The score opens with quiet, divided high strings rather than the weight of the full orchestra. Compare that exposed texture with the broader melody later in the prelude; it can suggest a vulnerability quite unlike the party scene that follows.', basis: 'general', precision: 'passage', evidence: 'The instrumentation comes from the score; the dramatic reading is an interpretation, not something established by the noisy transfer’s pitch estimates.' },
    { t: 35, kind: 'world', title: 'Venice, March 1853', text: '<i>La traviata</i> was first performed at La Fenice on 6 March 1853, with a libretto by Francesco Maria Piave. Its central figure, Violetta, is a Parisian courtesan whose relationship with Alfredo is constrained by illness and social respectability.', basis: 'documented', precision: 'passage', evidence: 'English National Opera’s introduction gives the premiere details, authorship and central dramatic situation.' },
    { t: 70, kind: 'listen', title: 'A swell within the introduction', text: 'The introductory span grows stronger and then withdraws before the broader melody. Follow the whole rise and release: the opening has its own phrase shape, rather than merely filling time before a singer enters.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level rises around 1:05–1:10 and falls substantially towards 1:20.' },
    { t: 105, kind: 'world', title: 'A contemporary French source', text: 'Piave adapted Alexandre Dumas fils’s <i>La Dame aux camélias</i>, whose heroine Marguerite Gautier became Violetta. The novel appeared in 1848 and Dumas’s stage adaptation opened in Paris in 1852, only a year before the opera.', basis: 'documented', precision: 'passage', evidence: 'Julie Anselmini’s BnF account dates the novel and play and traces the adaptation into Verdi’s opera.' },
    { t: 140, kind: 'music', title: 'A melody beneath decoration', text: 'In the decorated passage, listen through the lighter upper activity to the longer melody underneath. That melody is associated with Violetta’s Act II plea “Amami, Alfredo” — “Love me, Alfredo”; here it is an orchestral line, not a sung text.', basis: 'score-proportion', precision: 'passage', evidence: 'The score establishes the melodic connection; the audio change around 2:10 only helps locate the decorated span approximately.' },
    { t: 175, kind: 'life', title: 'A household outside marriage', text: 'When Verdi composed <i>La traviata</i>, he was living at Sant’Agata with the retired soprano Giuseppina Strepponi. They moved there in 1851 and married in 1859; these circumstances do not by themselves make the opera autobiographical.', basis: 'documented', precision: 'passage', evidence: 'Dino Rizzo’s Treccani biography records the move to Sant’Agata and the marriage date.' },
    { t: 205, kind: 'listen', title: 'The quiet closing span', text: 'The prelude’s decorated writing recedes towards a quiet close. Listen through the diminishing sound rather than waiting for a brilliant final flourish: the party belongs to the stage scene after the prelude.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level remains low across 3:20–3:35 and falls further in the final window, which has no detected new attacks.' },
  ],
};
