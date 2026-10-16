// Historical sources: Simon Morrison, Henle HN 1581 preface (2023),
// https://www.henle.de/media/7f/27/66/1708068498/1581.pdf
// Recording and licence:
// https://commons.wikimedia.org/wiki/File:Serge_Prokofiev_-_Toccata,_op._11_(Martha_Argerich,_1962).flac
export default {
  id: 'prokofiev-toccata',
  composer: 'prokofiev',
  order: 1,
  work: 'Toccata in D minor, Op. 11',
  movement: '',
  year: '1912',
  key: 'D minor',
  forces: 'Piano',
  performers: 'Martha Argerich',
  recorded: '', // Commons says 1962; the recording dossier documents a conflicting 1960 session attribution.
  source: { file: 'File:Serge Prokofiev - Toccata, op. 11 (Martha Argerich, 1962).flac' },
  intro: 'Two hands share a stream of repeated notes; chromatic lines and displaced accents keep changing what those notes mean. Martha Argerich plays the Toccata Prokofiev wrote while he was still a St Petersburg Conservatory student.',
  question: 'How can repeated notes keep changing their weight and direction?',
  sections: [
    { t: 0, label: 'Repeated-note opening' },
    { t: 100, label: 'Quiet restart' },
    { t: 134, label: 'Central surge' },
    { t: 202, label: 'D-centred return' },
    { t: 230, label: 'Final burst' },
  ],
  cues: [
    { t: 0, kind: 'listen', title: 'One note, two hands', text: 'The opening shares repeated Ds between the hands before chromatic neighbours widen the pitch field. Listen for the distinction between the running semiquavers and the accents laid across them: regular small notes can carry shifting emphasis.', basis: 'score-proportion', precision: 'passage', evidence: 'The score specifies the repeated-note opening. D dominates the report’s first 25 seconds, with frequent attacks; this supports the opening span, not an exact note alignment.' },
    { t: 33, kind: 'life', title: 'A classmate’s fingers', text: 'Prokofiev dedicated the Toccata to Nikolay Shtember, his fellow pupil in Anna Esipova’s piano class at the St Petersburg Conservatory. Written in spring 1912, it tested Shtember’s technique and the composer’s own.', basis: 'documented', precision: 'passage', evidence: 'Simon Morrison documents the dedication and composition in the Henle HN 1581 preface, pp. IV–V: https://www.henle.de/media/7f/27/66/1708068498/1581.pdf' },
    { t: 68, kind: 'world', title: 'Seventy-five roubles', text: 'Koussevitzky’s publishing firm rejected the Toccata. Jurgenson offered fifty roubles; Prokofiev negotiated seventy-five, then complained about delayed proofs. The first edition appeared in July 1913.', basis: 'documented', precision: 'passage', evidence: 'Morrison’s Henle preface, p. IV, documents the fees and publication history, citing Prokofiev’s diary: https://www.henle.de/media/7f/27/66/1708068498/1581.pdf' },
    { t: 105, kind: 'music', title: 'Less weight, continued movement', text: 'This stretch reduces the weight of the repeated-note writing without replacing it with a slow song. Compare the quieter attacks with the force of the preceding passage.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level falls sharply around 1:40 and again near 1:50 while frequent attacks continue. The measurement supports the contrast across the passage.' },
    { t: 139, kind: 'listen', title: 'Follow movement underneath', text: 'As the sound grows heavier again, follow the changing lower notes beneath the repeated attacks. The underlying line can move while the surface keeps its persistent rhythmic pattern.', basis: 'audio-feature', precision: 'passage', evidence: 'The report shows a stronger span around 2:10–2:25 and changing low-pitch estimates. It does not establish a chord-by-chord harmonic analysis.' },
    { t: 166, kind: 'life', title: 'A restrained American debut', text: 'At his American debut in the Brooklyn Museum on 29 October 1918, Prokofiev played the Toccata before a reception for an exhibition of Boris Anisfeld’s work. Simon Morrison’s account describes him softening its impact for that audience, even leaving notes out.', basis: 'documented', precision: 'passage', evidence: 'Morrison’s Henle preface, p. V, describes the occasion and cites the Brooklyn Daily Eagle review of 30 October 1918: https://www.henle.de/media/7f/27/66/1708068498/1581.pdf' },
    { t: 202, kind: 'listen', title: 'The opening pitch returns', text: 'In the later D-centred stretch, compare the recurring pitch with its quieter opening role. A fixed note can become a reference point even when neighbouring notes keep pressing against it.', basis: 'score-proportion', precision: 'passage', evidence: 'D dominates both the opening and the span around 3:20–3:35, at a higher relative level later. The score supplies the repeated-note comparison; the key labels alone are not treated as proof.' },
    { t: 220, kind: 'music', title: 'A break in the stream', text: 'The closing stretch includes a marked withdrawal before a final burst. Listen for the contrast between sparse attacks and the continuous motion that has occupied much of the piece.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level falls around 3:35–3:45, and detected attacks become sparse by 3:45, before renewed activity around 3:50–3:55. No exact interruption second is claimed.' },
    { t: 235, kind: 'listen', title: 'The last burst and decay', text: 'Near the end, the repeated attacks make one more concentrated burst. Listen beyond the final attack to the resonance that remains after the rhythmic stream has stopped.', basis: 'audio-feature', precision: 'passage', evidence: 'The report shows high relative level and frequent attacks around 3:55, followed by a sharp retreat around 4:00 and near silence by 4:05. The final keystroke is not precisely timed.' },
  ],
};
