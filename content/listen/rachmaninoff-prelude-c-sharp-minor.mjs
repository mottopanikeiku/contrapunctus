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
  question: 'What makes the same opening sound larger on its return?',
  intro: 'Rachmaninoff plays his 1892 Prelude in a 1919 Edison recording, moving from a slow opening through an agitated middle to an enlarged return. What changes when the opening material spreads across a much wider chordal texture?',
  sections: [
    { t: 0, label: 'Lento · opening' },
    { t: 106, label: 'Agitato · gathering force' },
    { t: 138, label: 'Tempo primo · enlarged return' },
    { t: 192, label: 'Coda' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Three notes and an answer', text: 'The opening’s low A–G♯–C♯ figure is set against quieter answering chords. Listen for the contrast between strongly projected notes and the softer lines around them; the score gives both roles to a single pianist.', basis: 'general', precision: 'passage', evidence: 'The Mutopia score specifies the three-note figure and answering chords; the old recording’s pitch estimates are not used to identify individual notes.' },
    { t: 32, kind: 'life', title: 'Nineteen and newly qualified', text: 'Rachmaninoff wrote the Prelude in 1892, the year he graduated from the Moscow Conservatory. It was published as the second of five <i>Morceaux de fantaisie</i>, Op. 3, dedicated to his teacher Anton Arensky.', basis: 'documented', precision: 'passage', evidence: 'The Prelude’s publication history dates its composition to 1892 and the five-piece set to 1893, with the dedication to Arensky.' },
    { t: 64, kind: 'listen', title: 'Inside the chords', text: 'Listen inside the quieter texture rather than following only the highest notes. Voicing means giving simultaneous notes different weights, so that a melodic line remains distinct within the surrounding harmony.', basis: 'general', precision: 'passage', evidence: 'This is a guide to the score’s chordal piano writing, not an identification of an individual voice from the audio.' },
    { t: 95, kind: 'world', title: 'Siloti takes it abroad', text: 'Alexander Siloti included the Prelude in his 1898 tour of Western Europe and the United States. Publishers subsequently marketed it under descriptive titles, including <i>The Burning of Moscow</i> and <i>The Day of Judgement</i>, rather than the composer’s plain key-and-genre title.', basis: 'documented', precision: 'passage', evidence: 'The Prelude’s reception history records Siloti’s tour and the titles used by London publishers.' },
    { t: 112, kind: 'listen', title: 'Motion in the agitated middle', text: 'The middle section’s triplet movement gathers force towards the opening material’s return. Listen through the rapid figures for the melodic notes, distinguishing their line from the increased number of attacks.', basis: 'score-proportion', precision: 'passage', evidence: 'The score marks an Agitato middle; rising activity around 1:45–2:15 locates its build-up, not its first bar.' },
    { t: 138, kind: 'form', title: 'The opening, enlarged', text: 'The return presents the opening material in a broad chordal texture. Rachmaninoff spreads the notation across four staves, two for each hand: the added space separates registers and lines, not additional players.', basis: 'score-proportion', precision: 'passage', evidence: 'The Mutopia score shows the four-stave return; reduced attack activity around 2:18–2:20 supports its approximate placement.' },
    { t: 175, kind: 'life', title: 'The composer at the keyboard', text: 'Commons identifies this as Rachmaninoff’s 1919 Edison recording, issued in December 1920 on Diamond Disc 82187-R. It credits Adam Cuerden with cleaning and restoring this digital copy.', basis: 'documented', precision: 'passage', evidence: 'The Commons source page distinguishes recording and issue dates, identifies the disc and names the restorer.' },
    { t: 207, kind: 'listen', title: 'After the weight', text: 'The coda retreats from the enlarged return into softer, more widely spaced chords. Follow the line through the fading resonance: the strongest passage is not the last thing the piece has to say.', basis: 'score-proportion', precision: 'passage', evidence: 'The score ends with a quiet coda; the relative level declines markedly across 3:15–3:40.' },
  ],
};
