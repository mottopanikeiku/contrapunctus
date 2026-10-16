// Historical sources:
// https://www.bruzanemediabase.com/en/exploration/works/pavane-infante-defunte-maurice-ravel
// https://www.laphil.com/works/pavane-pour-une-infante-defunte
export default {
  id: 'ravel-pavane',
  composer: 'ravel',
  order: 2,
  work: 'Pavane pour une infante défunte',
  movement: '',
  year: '1899',
  key: 'G major',
  forces: 'Piano',
  performers: 'Thérèse Dussaut, piano',
  recorded: '1976 (inferred)',
  source: { file: 'File:Maurice Ravel - Thérèse Dussaut - Pavane pour une infante défunte.ogg' },
  license: 'CC BY-SA 2.0',
  question: 'How can a melody float above a steady dance pulse?',
  intro: 'Thérèse Dussaut plays Ravel’s 1899 piano original, with its long melody above evenly spaced accompanying chords. How does the tune stretch across that regular pulse?',
  sections: [
    { t: 0, label: 'A · The refrain' },
    { t: 48, label: 'B · First episode' },
    { t: 114, label: 'A · The refrain returns' },
    { t: 164, label: 'C · The broader episode' },
    { t: 244, label: 'A · Final return' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'A line above the chords', text: 'The opening melody stretches across the regular accompanying chords. Listen for the independence of those two rhythms: a long melodic note can continue while the harmony beneath it takes another step.', basis: 'general', precision: 'passage', evidence: 'The piano score gives the melody longer values above a regular accompaniment; no individual note is aligned to the recording.' },
    { t: 38, kind: 'life', title: 'Fauré and a patron’s salon', text: 'Ravel wrote the <i>Pavane</i> in 1899 while studying with Fauré. His teacher introduced him to the salon of the Princesse de Polignac, the work’s dedicatee.', basis: 'documented', precision: 'passage', evidence: 'Bru Zane’s work note records the composition year, Fauré’s introduction and the dedication.' },
    { t: 76, kind: 'listen', title: 'Let the phrase release', text: 'Through the first contrasting episode, follow how the phrase expands and then releases. The piano’s decay matters between attacks: reducing a chord’s weight need not mean abandoning the underlying dance pulse.', basis: 'audio-feature', precision: 'passage', evidence: 'The analysis shows a pronounced relative-level fall around 1:10–1:15 within the first contrasting span.' },
    { t: 114, kind: 'form', title: 'The returning refrain', text: 'The opening melody serves as a refrain between contrasting episodes. Around its return, compare the lengths of the phrases with the first statement: familiarity gives the ear a reference point without making the intervening music redundant.', basis: 'score-proportion', precision: 'passage', evidence: 'The score supplies the refrain’s return; an audio change near 1:54 supports approximate placement rather than a verified melodic onset.' },
    { t: 148, kind: 'world', title: 'An imagined Spanish court', text: 'The title does not commemorate a particular dead princess. Ravel described an imagined pavane that a princess might have danced at the Spanish court in earlier centuries, rather than a funeral lament.', basis: 'documented', precision: 'passage', evidence: 'Bru Zane and Herbert Glass’s LA Phil note quote Ravel’s explanation of the title and character.' },
    { t: 178, kind: 'listen', title: 'The broader contrasting episode', text: 'The later contrasting episode builds stronger phrases than the opening refrain. Keep the upper melody distinct from the chordal weight beneath it; the measured pace leaves room to follow both.', basis: 'score-proportion', precision: 'passage', evidence: 'The score supplies the contrasting episode; changes around 2:44–2:52 precede stronger relative-level peaks near 3:10.' },
    { t: 212, kind: 'listen', title: 'Expansion and release', text: 'Within this broader episode, listen to the shape of successive rises and withdrawals. A stronger chord is part of a phrase, not necessarily its destination; keep following the upper line after each peak.', basis: 'audio-feature', precision: 'passage', evidence: 'The relative-level peak near 3:10 is followed by a withdrawal around 3:20 and further peaks around 3:45–3:50.' },
    { t: 244, kind: 'form', title: 'The last refrain', text: 'The final refrain carries the piece towards its close after the broader episode. Compare the familiar melody’s scale with the larger intervening phrases, rather than treating its return as a completely new beginning.', basis: 'score-proportion', precision: 'passage', evidence: 'The score places the refrain last; the low-level interval around 4:00 supports its approximate position in the recording.' },
    { t: 277, kind: 'world', title: 'From piano to orchestra', text: 'Ricardo Viñes gave the piano premiere on 5 April 1902 at the Société nationale de musique. Ravel made his orchestral version in 1910; this recording uses the earlier piano version.', basis: 'documented', precision: 'passage', evidence: 'Bru Zane’s work note records Viñes’s premiere and the 1910 orchestration; the recording source identifies a piano performance.' },
    { t: 300, kind: 'listen', title: 'The closing resonance', text: 'The closing passage settles into G major and leaves the piano’s resonance to diminish. Listen through that decay rather than treating the last chord’s attack as the whole ending.', basis: 'score-proportion', precision: 'passage', evidence: 'The score supplies the final key; the analysis shows a substantial relative-level decline and no detected new attacks in the last window.' },
  ],
};
