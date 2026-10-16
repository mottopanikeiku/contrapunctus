export default {
  id: 'mozart-40-molto-allegro',
  composer: 'mozart',
  order: 1,
  work: 'Symphony No. 40, K. 550',
  movement: 'I. Molto allegro',
  year: '1788',
  key: 'G minor',
  forces: 'Orchestra',
  performers: 'Musopen Symphony',
  recorded: '2012',
  source: { file: 'File:Mozart - Symphony No. 40 in G minor, K550 - I. Molto allegro (Musopen Symphony).flac' },
  intro: 'No ceremonial introduction: the accompaniment is already moving when the violin tune arrives. The same falling semitone supplies melody, transition and contrapuntal argument across this compact sonata movement.',
  // Sources: https://www.abc.net.au/listen/classic/read-and-watch/music-reads/mozart-symphony-no-40-sonata-form/10160386
  // https://www.indianapolissymphony.org/backstage/program-notes/mozart-symphony-no-40/
  // Exposition repeat omitted. "Coda" here means the added final extension, not the whole closing group.
  sections: [
    { t: 0, label: 'Exposition · G minor' },
    { t: 50, label: 'Second theme · B♭ major' },
    { t: 120, label: 'Development · no exposition repeat' },
    { t: 194, label: 'Recapitulation · G minor' },
    { t: 265, label: 'Second theme · tonic minor' },
    { t: 338, label: 'Coda · final extension' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Exposition: already in motion', text: 'The violas begin the accompaniment; the violins enter with repeated notes leaning down a semitone. That small interval is the first theme’s working material, not merely an expressive decoration.', evidence: 'Opening G/D/B♭ chroma and G-minor estimate; low initial loudness, −30.5 dB at 0:00, rising to −22.8 at 0:05. Opening scoring follows the score.' },
    { t: 28, kind: 'music', title: 'The transition interrupts', text: 'The fuller orchestra drives away from the quiet opening. Faster movement and stronger attacks prepare a contrasting tonal area rather than simply repeating the violin tune more loudly.', evidence: 'Boundary 0:28; loudness rises from −21 dB at 0:25 to −9.8 at 0:35; onsets increase to 5.4/s at 0:40, with F-major dominant-region estimates.' },
    { t: 58, kind: 'music', title: 'The second theme', text: 'The second theme belongs to B♭ major, G minor’s relative major. Strings and winds share a chromatic line; the phrases move by semitone even though the larger harmonic setting has changed.', evidence: 'Boundary 0:50 and drop to −23.5 dB; B♭-major estimate at 0:55 and again 1:15–1:45. The quieter second-theme region begins after the F-dominant transition.' },
    { t: 90, kind: 'life', title: 'Three symphonies in 1788', text: 'Mozart entered his last three symphonies in his catalogue during the summer of 1788. Their keys are E♭ major, G minor and C major; the intended concerts remain uncertain, so the Forty’s agitation is not evidence of a documented private programme.' },
    { t: 120, kind: 'form', title: 'Development, without the repeat', text: 'This performance omits the exposition repeat. Instead of hearing the opening again in G minor, we meet its motif in the remote key of F♯ minor; Mozart now breaks it into fragments and moves those fragments between parts.', evidence: 'Strongest boundary 2:00; preceding B♭/F region changes to C♯/A/F♯, F♯-minor r=0.72. No intervening recurrence of the opening G-minor progression: the exposition is played once.' },
    { t: 154, kind: 'music', title: 'A fragment in several voices', text: 'Throughout this development, listen for the first theme’s small cell rather than a complete melody. Imitation lets different parts begin the same idea before the previous statement has finished.', evidence: 'Development established at 2:00; loud, active passage 2:15–2:35, reaching −8 dB at 2:35; abrupt thinning at boundary 2:44. The score develops the opening motif contrapuntally.' },
    { t: 178, kind: 'life', title: 'Vienna, not a court post', text: 'Mozart settled in Vienna in 1781 after leaving the service of Salzburg’s archbishop. Teaching, concerts, publication and commissions supported his household; by 1788 his letters to Michael Puchberg were repeatedly asking for loans.' },
    { t: 194, kind: 'form', title: 'Recapitulation: the opening returns', text: 'The first theme returns in G minor. In sonata form, a recapitulation must do more than bring back a tune: it must redirect music that previously left home so that the later themes can remain in the tonic.', evidence: 'Boundary 3:14 after the D-dominant region at 3:00–3:10; G bass at 3:15 and G-minor r=0.76 at 3:20. Corresponds to the score’s return at bar 165.' },
    { t: 230, kind: 'music', title: 'A longer route home', text: 'The transition is substantially expanded on its return. Mozart brings developmental counterpoint into the recapitulation; familiar material does not mean the argument has become predictable.', evidence: 'Sustained active passage 3:45–4:20, reaching 6.2 onsets/s at 3:55; F-minor and G-minor regions lead back towards D. The recapitulation’s transition is longer than the exposition’s.' },
    { t: 265, kind: 'form', title: 'The second theme, altered', text: 'The second theme returns in the tonic region, now G minor rather than B♭ major. Its outline is familiar, but the harmonic change removes the contrast that the exposition established.', evidence: 'Drop from −8.6 dB at 4:20 to −22.9 at 4:25 and onset reduction to 1.2/s; this corresponds to the second-theme return after the expanded D-dominant transition. Local estimates fluctuate, so the tonic-minor identification follows the score.' },
    { t: 300, kind: 'world', title: 'Two orchestral versions', text: 'Mozart later added clarinets to this symphony and rewrote the oboe parts around them. Both versions survive. The revision documents his return to the work; it does not tell us the exact circumstances of its first performance.' },
    { t: 338, kind: 'form', title: 'Coda: one more insistence', text: 'After the closing material appears to have made its point, Mozart adds a final extension. Quiet chords interrupt the pressure, then the opening motif helps force the last G minor cadence; there is no turn to a consoling major ending.', evidence: 'Onsets drop from 5.0/s at 5:30 to 0.2 at 5:35; −20 dB at 5:40, then renewed activity at 5:45–5:50 and final G/D/B♭ at 5:55. Anchors the added coda after the closing group, around score bar 286.' },
  ],
};
