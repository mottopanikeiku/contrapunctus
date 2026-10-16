export default {
  id: 'satie-gymnopedie-1',
  composer: 'satie',
  order: 1,
  work: 'Trois Gymnopédies',
  movement: 'I. Lent et douloureux',
  year: '1888',
  key: 'D major',
  forces: 'Piano',
  performers: 'Robin Alciatore',
  recorded: 'c. 2008',
  source: { file: 'File:Erik Satie - gymnopedies - la 1 ere. lent et douloureux.ogg' },
  intro: 'A bass note on beat one, a chord on beat two, and a melody that crosses the repeated pattern. Satie’s first Gymnopédie lets unresolved sevenths remain in the harmony instead of demanding their immediate resolution.',
  // Biography: https://www.encyclopedia.com/people/literature-and-arts/music-history-composers-and-performers-biographies/erik-satie
  // Debussy’s orchestration: https://fcsymphony.org/satie-gymnopedie/
  sections: [
    { t: 0, label: 'First statement' },
    { t: 42, label: 'Beyond the opening pair' },
    { t: 88, label: 'The opening repeated' },
    { t: 158, label: 'The altered close' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Bass, chord, empty beat', text: 'The left hand places a bass on the first beat and a chord on the second, leaving the third beat without a new accompaniment attack. G major seventh alternates with D major seventh. The melody crosses this regular pattern rather than supplying a note for every beat.', evidence: 'Opening G/D classes and G bass, then recurrent D/G/C♯ at 0:05–0:10 and 0:20–0:30; D-major estimates r=0.75–0.80. Score: triple-time bass-and-chord pattern with alternating G-major-seventh and D-major-seventh harmonies.' },
    { t: 30, kind: 'life', title: 'Montmartre, not the Conservatoire', text: 'Satie wrote the three Gymnopédies in 1888, during his early years in Montmartre’s cabaret world. He had left the Paris Conservatoire without completing its training. Piano work at venues including the Chat Noir paid for a life outside the official institutions.' },
    { t: 60, kind: 'listen', title: 'A swell without acceleration', text: 'The line gains weight, but the bass-and-chord pattern keeps the same measured pace. Listen for the distinction between a louder phrase and a faster one: Satie can intensify this small texture without filling the space between its beats.', evidence: 'First substantial loudness arc: −19.8 dB at 0:45, −11.0 at 0:50, −9.6 at 1:00, back to −18.3 at 1:05. Onset density remains within 0.8–1.6 per second; score retains the accompaniment rhythm.' },
    { t: 88, kind: 'form', title: 'Almost the same again', text: 'The quiet opening pattern returns. Satie repeats a large span rather than breaking the tune into fragments for development. Keep the first ending in mind: the second traversal will eventually change its destination.', evidence: 'Boundaries 1:24 and 1:28, novelty 0.90 and 0.88; D/G/C♯ classes and G bass return at 1:30–1:35, matching 0:05–0:10, at the reduced level of −23 to −24 dB.' },
    { t: 119, kind: 'world', title: 'Debussy changes the medium', text: 'Debussy later orchestrated the first and third Gymnopédies, reversing their order in his pair. He left the second alone. The familiar piano piece therefore also belongs to an orchestral history, although this recording preserves Satie’s original single instrument.' },
    { t: 149, kind: 'life', title: 'Back to counterpoint at thirty-nine', text: 'In 1905 Satie entered the Schola Cantorum and studied counterpoint with Albert Roussel. He was thirty-nine and already the composer of these pieces. The later fugues and canons came from sustained technical study, not just the eccentric persona attached to his name.' },
    { t: 174, kind: 'music', title: 'A different final third', text: 'The second half does not end exactly like the first. F♮ takes the place of the opening’s F♯ in the final D minor harmony. The last chord decays instead of being followed by another turn of the bass pattern.', evidence: 'Changed closing region after boundaries 2:38 and 2:42; A/D/F pitch classes at 2:55–3:00, D-minor estimate r=0.75 at 3:00; level falls from −25.1 to −45.2 dB with no attacks at 3:00.' },
  ],
};
