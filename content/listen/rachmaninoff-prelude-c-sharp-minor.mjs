// Historical sources: https://en.wikipedia.org/wiki/Prelude_in_C-sharp_minor_(Rachmaninoff)
// https://www.bso.org/works/piano-concerto-no-2-6
// Recording date, issue and restoration are documented on the source Commons page.
// Score: https://www.mutopiaproject.org/ftp/RachmaninoffS/O3/rach-prelude-op3-no2/rach-prelude-op3-no2-a4.pdf
export default {
  id: 'rachmaninoff-prelude-c-sharp-minor',
  composer: 'rachmaninoff',
  order: 3,
  work: 'Prelude in C♯ minor, Op. 3 No. 2',
  movement: '',
  year: '1892',
  key: 'C♯ minor',
  forces: 'Piano',
  performers: 'Sergei Rachmaninoff',
  recorded: '1919',
  source: { file: 'File:Sergei Rachmaninoff performs Rachmaninoff\'s Prelude in C sharp minor, Op. 3.ogg' },
  intro: 'Rachmaninoff plays the Prelude he wrote at nineteen, recorded for Edison in 1919. Three low notes generate a slow opening, an agitated middle and a return written across four staves.',
  sections: [
    { t: 0, label: 'Lento · opening' },
    { t: 106, label: 'Agitato · gathering force' },
    { t: 138, label: 'Tempo primo · enlarged return' },
    { t: 192, label: 'Coda' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Three notes, then an answer', text: 'The low A–G♯–C♯ figure supplies the Prelude’s opening signal. Quiet chords answer it; the distinction is between a few strongly projected notes and the softer voices around them, not between two separate themes.', evidence: 'Sound begins in the opening window; loudness drops from −22.4 dB at 0:00 to −32.1 at 0:10. The pitch sequence is specified by the score; acoustic-recording chroma does not reliably resolve every opening note.' },
    { t: 32, kind: 'life', title: 'Nineteen and newly qualified', text: 'Rachmaninoff wrote the Prelude in 1892, the year he graduated in composition from the Moscow Conservatory. It became the second of five <i>Morceaux de fantaisie</i>, Op. 3, dedicated to his teacher Anton Arensky.' },
    { t: 64, kind: 'listen', title: 'Inside the chords', text: 'Listen inside the quiet texture rather than following only the highest notes. A chord contains several moving voices; Rachmaninoff’s piano writing depends on their unequal weight, with a melodic note made distinct from the harmony that surrounds it.', evidence: 'Quiet span 0:50–1:15, −35.1 to −29.8 dB; C♯/E/G♯ pitch classes at 1:05 and C♯ minor r=0.82. General voicing cue, not a claim about a particular entrance.' },
    { t: 95, kind: 'world', title: 'Siloti takes it abroad', text: 'Alexander Siloti played the Prelude on his 1898 tour of Europe and America. Its popularity soon overshadowed Rachmaninoff’s other music; audiences would demand it as an encore long after he had written much larger works.' },
    { t: 112, kind: 'music', title: 'The middle gathers force', text: 'The agitated middle now accumulates louder, more frequent attacks. Hear the melodic notes through the triplet movement: the rapid figures lead towards the return of the opening material rather than supplying an unrelated episode.', evidence: 'Strongest boundary 1:46 (1.00); loudness jumps from −42.3 dB at 1:40 to −18.4 at 1:45, then reaches −10.9 at 1:55; onset density rises to 4.2/s at 1:55 and 5.4 at 2:10. This anchors the crescendo, not the uncertain first quiet bar of Agitato.' },
    { t: 138, kind: 'form', title: 'The opening, enlarged', text: 'The opening material returns in broad, heavily weighted chords. Rachmaninoff spreads the notation across four staves, two for each hand: the extra space separates registers and voices, not extra players.', evidence: 'Boundary 2:18; onset density falls from 4.8/s at 2:15 to 0.8 at 2:20, while loudness remains high through 3:05. This matches the score’s Tempo primo return after the running middle section.' },
    { t: 175, kind: 'life', title: 'The composer at the keyboard', text: 'This is Rachmaninoff himself, recorded for Edison in 1919 and issued in December 1920. The transfer comes from Edison Diamond Disc 82187-R; the Commons copy was cleaned and restored by Adam Cuerden.' },
    { t: 207, kind: 'music', title: 'After the weight', text: 'The closing chords are widely spaced and very soft. C♯ minor remains while the piano’s resonance fades; the loud return does not get the last word.', evidence: 'Coda boundary 3:12; onset density 0.4–0.6/s at 3:15–3:30; loudness falls from −21.6 dB at 3:20 to −45.0 at 3:40. C♯/E/G♯ pitch classes remain at 3:35–3:40.' },
  ],
};
