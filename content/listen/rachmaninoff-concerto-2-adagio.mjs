// Historical sources: https://www.bso.org/works/piano-concerto-no-2-6
// https://rachmaninoff.de/themen/bio_EN.shtml
// https://www.laphil.com/works/suite-no-2-for-two-pianos-op-17
// https://www.classicfm.com/composers/rachmaninov/piano-concerto-2-all-by-myself/
// Score outline: https://en.wikipedia.org/wiki/Piano_Concerto_No._2_(Rachmaninoff)
export default {
  id: 'rachmaninoff-concerto-2-adagio',
  composer: 'rachmaninoff',
  order: 2,
  work: 'Piano Concerto No. 2, Op. 18',
  movement: 'II. Adagio sostenuto',
  year: '1900–01',
  key: 'E major',
  forces: 'Piano and orchestra',
  performers: 'Sviatoslav Richter, Warsaw National Philharmonic Orchestra, Stanisław Wisłocki',
  recorded: '1959',
  source: { file: 'File:Sergei Rachmaninov - Concerto no. 2 for Piano and Orchestra in C minor - 2. Adagio sostenuto (Sviatoslav Richter, Stanisław Wisłocki, Warsaw National Philharmonic Orchestra, 1959).flac' },
  intro: 'A slow movement with a fast centre. The piano’s circling accompaniment passes beneath a melody first shared by flute and clarinet; later the soloist breaks out into a cadenza.',
  sections: [
    { t: 0, label: 'Introduction · from C minor' },
    { t: 35, label: 'A · E-major song' },
    { t: 255, label: 'B · quicker middle section' },
    { t: 442, label: 'Cadenza span' },
    { t: 524, label: 'A′ · quiet return' },
    { t: 639, label: 'Final swell' },
    { t: 680, label: 'Close · E major' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'A bridge between keys', text: 'Muted strings begin in the C minor left by the first movement, then move towards E major. Rachmaninoff writes the connection into the music: the slow movement’s key is reached, not simply announced.', evidence: 'No detected attacks in the sustained introduction 0:00–0:25; C minor estimates 0:00–0:15, boundary 0:20, then E/B/G♯ pitch classes at 0:30 and E major from 0:45. Muted-string scoring is documented in the score outline.' },
    { t: 35, kind: 'music', title: 'The piano makes a pulse', text: 'The piano’s broken chords establish a repeating motion beneath the melody. Listen for the two different rates: the accompaniment keeps turning while the tune takes much longer to complete a phrase.', evidence: 'Onset density increases from 0 at 0:25 to 1.2/s at 0:35; brightness falls from 1212 Hz at 0:15 to 773 Hz at 0:35, marking the piano texture after the string introduction.' },
    { t: 74, kind: 'listen', title: 'A melody shared by winds', text: 'The opening tune begins with flute and continues through an extended clarinet solo. Follow the line across the change of instrument rather than treating each timbre as a new theme; the piano remains underneath it.', evidence: 'E-major opening span 0:45–1:50; sustained melodic texture around 1:20–1:30, with 0.2–0.4 onsets/s and E/B/G♯ pitch classes. General cue across the score’s flute–clarinet presentation, not an asserted entrance time.' },
    { t: 112, kind: 'world', title: 'Heard before the first movement', text: 'This Adagio and the finale were first performed in Moscow on 15 December 1900, almost eleven months before the complete concerto. Rachmaninoff played and Siloti conducted at a benefit for the Ladies’ Charity Prison Committee.' },
    { t: 150, kind: 'listen', title: 'A pianist’s sustained note', text: 'A piano note starts to fade as soon as it is struck; wind and string players can continue feeding a note with breath or bow. Listen for how the moving accompaniment supports long melodic notes without requiring every instrument to sustain sound in the same way.', evidence: 'Quiet opening continuation at 2:25–2:35 (−23.9 to −22.6 dB), followed by another swell at 2:40–2:55. General listening cue within the established song texture.' },
    { t: 188, kind: 'music', title: 'The phrase leans away', text: 'The harmony begins to pull away from the opening’s E-major centre. The melodic pace remains broad, but the bass and inner notes change its direction; a slow tune need not sit on a static chord.', evidence: 'Boundaries 2:54 and 3:10; E/C♯/G♯ colouring at 3:00–3:05, then a sustained B-major region at 3:30–4:10. Onset density remains relatively low, mostly 0.4–1.4/s.' },
    { t: 225, kind: 'life', title: 'A marriage in 1902', text: 'The year after the complete concerto’s premiere, Rachmaninoff married Natalia Satina, his first cousin. Their daughters Irina and Tatiana were born in 1903 and 1907. The Satins’ estate at Ivanovka became his summer base for composition.' },
    { t: 255, kind: 'form', title: 'The middle begins to move', text: 'The accompaniment becomes more active and the harmony moves into minor-key territory. This is the movement’s contrasting middle, not another quiet repetition of the opening song; its eventual destination is a piano cadenza.', evidence: 'Onset density rises from 0.4/s at 4:10 to 2.2–3.0/s at 4:15–4:30; boundary 4:24; F♯/A/C♯ pitch classes and F♯ minor r=0.97 at 4:30 confirm the new region.' },
    { t: 293, kind: 'music', title: 'The sound gains weight', text: 'The middle section grows substantially louder. Listen to the difference between speed and weight: more forceful chords can intensify a passage without every layer moving faster.', evidence: 'Boundary 4:50; loudness increases from −23.3 dB at 4:45 to −10.0 at 5:10. Onset density varies between 0.4 and 2.6/s rather than rising continuously.' },
    { t: 332, kind: 'life', title: 'Two pianos that same year', text: 'Rachmaninoff completed his Second Suite for two pianos in April 1901, during the same recovery of confidence that produced the concerto. He and Siloti gave its premiere that November: the concerto’s conductor was also a partner at the keyboard.' },
    { t: 370, kind: 'music', title: 'Another climb', text: 'The central section resumes its climb after a quieter interval. Successive phrases increase the volume towards another peak rather than prolonging the evenly paced song with which the movement began.', evidence: 'Loudness rises from −23.1 dB at 6:00 to −6.1 at 6:40; boundary 6:38; brightness increases from 712 Hz at 6:05 to 1245 Hz at 6:40.' },
    { t: 406, kind: 'listen', title: 'Not the final peak', text: 'The swell falls back, but the middle section is not finished. Listen for a second accumulation of force: the next large arrival exceeds the one that has just passed.', evidence: 'Loudness drops from −6.1 dB at 6:40 to −16.5 at 6:45, then rises to the movement’s loudest five-second window at 7:10 (−5.1 dB); boundary 7:10.' },
    { t: 442, kind: 'listen', title: 'Cadenza territory', text: 'The soloist’s central display breaks the regular accompaniment pattern. Listen for the alternation of rapid figures, broader chords and pauses: a cadenza can change the perceived pulse without a new theme.', evidence: 'Boundary 7:24; onset density changes from 0.2/s at 7:20 to 1.8 at 7:30, then 5.0–5.4 at 7:55–8:00 before collapsing at 8:05. Score places the cadenza before the quiet thematic return.' },
    { t: 478, kind: 'music', title: 'A run into silence', text: 'The rapid piano figures break off into a near-silence. Let the gap register before the next phrase: it separates the solo display from the slow music’s return more decisively than a simple reduction in tempo would.', evidence: 'Onset density 5.0/s at 7:55 and 5.4 at 8:00 falls to 0.6 at 8:05; loudness drops from −8.9 to −44.0 dB between 7:55 and 8:05; strong boundary 8:04 (0.89).' },
    { t: 524, kind: 'form', title: 'The song returns quietly', text: 'The opening material returns in E major after the cadenza’s final gestures. The melody is recognisable, but its surroundings are quieter; returning home is not the same event as arriving there for the first time.', evidence: 'Boundary 8:44; E/B/G♯ pitch classes and E-major estimates from 8:40 onward; loudness falls from −10.2 dB at 8:25 to −30.3 at 8:55.' },
    { t: 564, kind: 'world', title: 'The borrowed verse', text: 'Eric Carmen used this movement’s melody for the verse of “All by Myself” in 1975. The familiar title belongs to the chorus, not to the borrowed passage; the concerto supplies the tune that begins the song’s account of loneliness.' },
    { t: 602, kind: 'listen', title: 'Below the returning melody', text: 'During the return, listen below the melody: the piano’s arpeggios keep the harmony moving even when the orchestral phrase holds a note. Slow melodic rhythm and continuous smaller notes occupy different layers.', evidence: 'Returning E-major span from boundary 8:44; E/B/G♯ pitch classes persist around 9:30–10:10 while brightness rises to 1567 Hz at 10:10. General texture cue within the score’s recapitulation.' },
    { t: 639, kind: 'music', title: 'The final broad swell', text: 'The returning song reaches its last broad swell in E major. This is not a reprise of the cadenza’s rapid display: the increase in volume comes within the restored slow-moving texture.', evidence: 'Loudness rises from −16.3 dB at 10:25 to −9.1 at 10:40, then recedes; E major estimates throughout 10:30–10:55, with only 0.4–1.4 onsets/s.' },
    { t: 680, kind: 'music', title: 'Closing in E major', text: 'The texture subsides and the final harmonies are spaced more widely. E major remains in place while the sound decays; the movement ends quietly rather than answering its central climax with another one.', evidence: 'E/B/G♯ pitch classes persist through 11:40; loudness declines from −23.9 dB at 11:20 to −41.1 at 11:45 and −49.7 at 11:50; no detected attacks after 11:45.' },
  ],
};
