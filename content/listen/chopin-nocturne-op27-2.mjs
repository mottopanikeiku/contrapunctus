// Historical and musical sources:
// https://chopin.nifc.pl/en/chopin/kompozycja/271
// https://www.laphil.com/works/two-nocturnes-op-27
// https://chopin.nifc.pl/en/chopin/kalendarium/123_lata-adaptacji-18311835/712
// https://www.bbc.co.uk/radio3/classical/chopinexperience/timeline/timeline.shtml
export default {
  id: 'chopin-nocturne-op27-2',
  composer: 'chopin',
  order: 2,
  work: 'Nocturne in D♭ major, Op. 27 No. 2',
  movement: 'Lento sostenuto',
  year: '1835',
  key: 'D♭ major',
  forces: 'Piano',
  performers: 'Frank Lévy',
  recorded: 'c. 2014',
  source: { file: 'File:Chopin - Nocturne No. 8 in D-flat major, Op. 27 No. 2 (Frank Levy).flac' },
  intro: 'A rocking left hand supports a melody that repeatedly grows a second voice. Listen for the difference between the notes that carry the phrase and the ornaments that delay their arrival.',
  question: 'How does a returning melody change without losing its shape?',
  sections: [
    { t: 0, label: 'The solo singing line' },
    { t: 42, label: 'Paired voices and expansion' },
    { t: 116, label: 'First return' },
    { t: 154, label: 'A darker expansion' },
    { t: 206, label: 'The opening melody returns again' },
    { t: 280, label: 'Coda · D♭ sustained' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Singing above broken chords', text: 'Across the opening, broken chords support a slower singing line. Chopin marks the piece “Lento sostenuto” — slow and sustained. Listen for how the melody connects notes whose piano sound begins decaying as soon as they are struck.', basis: 'score-proportion', precision: 'passage', evidence: 'The score specifies this opening texture and marking. The report places a relatively quiet D♭-centred span at the start; individual notes are not aligned.' },
    { t: 42, kind: 'listen', title: 'One voice and two', text: 'The nocturne repeatedly lets its melody grow into paired voices, often in thirds and sixths. When that happens, follow the lower melodic note as well as the top one: the duet is part of the phrase, not just added weight.', basis: 'general', precision: 'passage', evidence: 'The paired writing is a score feature described in John Henken’s LA Phil note. The change around 0:42 suggests an expanding phrase, but does not locate a particular doubling.' },
    { t: 70, kind: 'music', title: 'The phrase gathers activity', text: 'In this stretch, the phrase becomes more active before drawing back. Try to keep hold of the longer melodic line through the quicker notes around it.', basis: 'audio-feature', precision: 'passage', evidence: 'The report shows rising relative level and more attacks around 0:50–1:10, followed by a retreat around 1:15–1:20. This is a passage-level contour.' },
    { t: 105, kind: 'world', title: 'A Parisian dedication', text: 'The two Op. 27 Nocturnes were published in 1836 and dedicated to Countess Thérèse d’Apponyi, whose Paris salon Chopin frequented. The dedication identifies a patron, not a hidden subject for the music.', basis: 'documented', precision: 'passage', evidence: 'John Henken’s LA Phil programme note documents publication and dedication: https://www.laphil.com/works/two-nocturnes-op-27' },
    { t: 125, kind: 'form', title: 'A decorated return', text: 'The opening melody returns more than once in this nocturne. Around each return, compare the familiar phrase with its changing ornaments and the expansion that follows; the design is not simply quiet–stormy–quiet.', basis: 'score-proportion', precision: 'passage', evidence: 'Henken describes three strophes beginning with the same melody. A quieter tonic-centred span around 1:55–2:10 supports the first return’s approximate placement.' },
    { t: 170, kind: 'listen', title: 'Keep the longer line', text: 'The more forceful writing in this stretch still belongs to a melodic phrase. Listen beyond the quicker notes for the points where the line leans on a harmony and where it releases that pressure.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level rises across 2:30–2:55 and remains high through much of 3:00–3:20. The report does not identify individual ornaments or voices.' },
    { t: 215, kind: 'form', title: 'The melody returns again', text: 'In this later return, compare the familiar melody with its earlier versions. Ornament changes what the phrase contains without requiring a wholly new tune.', basis: 'score-proportion', precision: 'passage', evidence: 'A strong measured change around 3:26 and a quieter D♭-centred span through 3:45 are compatible with the score’s third strophe. The return time remains an estimate.' },
    { t: 250, kind: 'listen', title: 'Another broad swell', text: 'The later expansion rises towards another crest. Follow the length of the phrase through the decorative movement rather than treating every quick note as a separate destination.', basis: 'audio-feature', precision: 'passage', evidence: 'The report’s highest five-second relative-level window is around 4:25, after a rise beginning around 4:05. The cue concerns that build, not a single climax note.' },
    { t: 290, kind: 'form', title: 'The coda stays close', text: 'The closing span stays near D♭ while small changes continue within the texture. Listen for how the accompaniment can move without requiring the whole phrase to leave its tonal centre.', basis: 'score-proportion', precision: 'passage', evidence: 'The score’s coda follows the final expansion. Lower recorded level after 4:35 and a persistent low D♭ through much of the remaining minute support this approximate placement.' },
    { t: 315, kind: 'life', title: 'Chopin plays in Leipzig', text: 'Chopin played this nocturne during his September 1835 visit to Leipzig, where he met Schumann and Mendelssohn at Friedrich Wieck’s house. Mendelssohn later told his sister Fanny that he had learnt a substantial part of the new piece by ear.', basis: 'documented', precision: 'passage', evidence: 'Henken’s LA Phil programme note identifies the visit, the work and Mendelssohn’s letter: https://www.laphil.com/works/two-nocturnes-op-27' },
    { t: 350, kind: 'listen', title: 'Listen past the attack', text: 'Through the closing phrases, listen to the sound left after each attack. The remaining resonance contributes to the ending even as fresh notes become less frequent.', basis: 'audio-feature', precision: 'passage', evidence: 'The analysis records fewer attacks around 5:40–6:00 and a long fall in level through 6:15. It cannot determine the pianist’s pedalling or a precise final release.' },
  ],
};
