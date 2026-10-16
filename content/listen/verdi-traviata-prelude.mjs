// Opera: https://www.eno.org/discover-opera/articles/an-introduction-to-la-traviata/
// Life: https://www.treccani.it/enciclopedia/giuseppina-strepponi_%28Dizionario-Biografico%29/
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
  intro: 'Before the party starts, Verdi gives Violetta an orchestral portrait: exposed high strings, then the melody she will sing when she leaves Alfredo. Toscanini recorded this complete prelude in Carnegie Hall in 1929.',
  sections: [
    { t: 0, label: 'Exposed high strings' },
    { t: 85, label: 'Cantabile · Violetta’s melody' },
    { t: 130, label: 'Melody with decoration' },
    { t: 198, label: 'Quiet close' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Before the public face', text: 'High, divided violins begin quietly, without the weight of the full orchestra. This is Violetta’s opera before it is her party: the exposed string writing anticipates the frailty that the stage’s social bustle will conceal.', evidence: 'Opening 0:00–0:40 stays around −26 to −28.7 dB, with brightness 2369–2862 Hz. High divided strings are a score fact; the historic transfer’s noise makes chroma unreliable here.' },
    { t: 35, kind: 'world', title: 'Venice, March 1853', text: 'La traviata was first performed at La Fenice on 6 March 1853, with a libretto by Francesco Maria Piave. Its central figure is a Parisian courtesan, not a queen or a mythological heroine; illness, money and respectability determine her fate.' },
    { t: 70, kind: 'music', title: 'A first expansion', text: 'The introduction grows much stronger, then withdraws again before the broader melody. Verdi separates the two ideas with a change in weight: the quiet opening is not simply an accompaniment waiting for a singer.', evidence: 'Boundary 1:04 (0.87); −26.7 dB at 1:00 rises to −12.2 at 1:10, then drops to −29.9 at 1:20 before the boundary at 1:28.' },
    { t: 105, kind: 'world', title: 'A contemporary French source', text: 'Piave adapted Alexandre Dumas fils’s La Dame aux camélias, whose heroine Marguerite Gautier became Violetta. Dumas had first published the story as a novel in 1848, then made it a play staged in Paris in 1852: Verdi was adapting very recent theatre.' },
    { t: 140, kind: 'music', title: 'Melody beneath the decoration', text: 'Listen through the light upper-string decoration to the longer melody underneath. It anticipates Violetta’s “Amami, Alfredo” — “Love me, Alfredo” — in Act II, when she leaves him. The same line can carry either an orchestral portrait or a direct plea.', evidence: 'Boundary 2:10 (1.00); changed attack profile at 2:10–2:25, with 0.2–1.6 onsets/s and brightness 1296–1561 Hz. The score’s decorated statement follows the broad melody introduced around 1:25.' },
    { t: 175, kind: 'life', title: 'A household outside marriage', text: 'When Verdi composed La traviata, he was living at Sant’Agata with the retired soprano Giuseppina Strepponi. They had moved there in 1851 and married in 1859. A household outside marriage was part of the composer’s own circumstances, not just his opera’s plot.' },
    { t: 205, kind: 'music', title: 'The prelude withdraws', text: 'The decorated phrase thins into a quiet ending. Verdi leaves space before the party begins: the prelude closes without the brilliant orchestral punctuation that would turn it into a conventional overture.', evidence: 'Boundary 3:18 (0.48); −23.7 to −26.5 dB at 3:20–3:35, then −46.9 with no onsets at 3:40. No key claim is made from this noisy transfer.' },
  ],
};
