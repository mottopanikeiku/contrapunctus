export default {
  id: 'schubert-impromptu-gflat',
  composer: 'schubert',
  order: 1,
  work: 'Impromptu in G♭ major, D. 899 No. 3',
  movement: 'Andante',
  year: '1827',
  key: 'G♭ major',
  forces: 'Piano',
  performers: 'Chiara Bertoglio',
  recorded: '',
  license: 'CC BY 3.0',
  source: { file: 'File:Schubert\'s Impromptu no. 3 in G-flat major, D.899 - Chiara Bertoglio.ogg' },
  intro: 'The right hand has two jobs: carrying the melody and keeping the broken chords in motion underneath it. Schubert makes a single pianist sustain a singer, an accompaniment and a bass line at three different levels of weight.',
  // Sources: https://www.henle.de/Impromptu-G-flat-major-op.-90-no.-3-D-899/HN-488
  // https://en.wikipedia.org/wiki/Impromptus_(Schubert)
  // https://academic.oup.com/book/53320/chapter-abstract/422034629
  sections: [
    { t: 0, label: 'A · G♭ major melody' },
    { t: 100, label: 'B · E♭ minor and away' },
    { t: 218, label: 'A′ · the melody returns' },
    { t: 298, label: 'Coda · chromatic pressure and release' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'One hand, two levels', text: 'The top line moves in longer notes while the broken chords continue beneath it. Listen for the pianist’s balance: the accompaniment must remain active without making the melody sound like merely the highest note of each arpeggio.', evidence: 'Opening F♯/C♯/B♭ pitch classes represent the written G♭/D♭/B♭; F♯-major estimate at 0:05–0:10. Continuous 2.0–3.0 detected onsets/s supports the score’s flowing accompaniment.' },
    { t: 35, kind: 'listen', title: 'The bass has a direction', text: 'Throughout this opening section, follow the bass as well as the tune. Its movement changes the meaning of a melody note that has not moved; the flowing accompaniment joins the two rather than supplying all the harmonic information on its own.', evidence: 'Boundary 0:40 and E♭-minor region at 0:40–0:50, then G♭-major confirmation at 0:55. The score maintains the broken-chord texture through these harmonic changes.' },
    { t: 70, kind: 'life', title: 'Music beside the classroom', text: 'Schubert trained as a teacher and worked as an assistant in his father’s school. In 1814, while still a teenager, he wrote Gretchen am Spinnrade: voice and piano already had distinct jobs, the singer’s recollection set against the spinning wheel’s motion.' },
    { t: 100, kind: 'form', title: 'The middle section presses harder', text: 'The central section begins in E♭ minor, the relative minor of G♭ major. Stronger melodic accents and greater bass weight disturb the opening balance, but the broken chords keep moving.', evidence: 'Loudness rises from −18 dB at 1:30 to −8.8 at 1:40; E♭/B♭/F pitch classes and E♭-minor estimates at 1:40–1:45. Matches the score’s forte middle section after its opening 24 bars.' },
    { t: 140, kind: 'world', title: 'Published in the wrong key', text: 'This impromptu did not appear in print until 1857, nearly thirty years after Schubert’s death. The publisher transposed it into G major; modern editions restore the original G♭ major, with its six-flat key signature.' },
    { t: 173, kind: 'music', title: 'The louder second wave', text: 'The middle section gathers force again after its quieter passage. Notice that the accompaniment has not had to stop for the contrast: the changing harmony and weight of the attacks do the work.', evidence: 'B-major estimates, enharmonic C♭, and −19 dB at 2:20–2:25 give way to E♭-minor colour; boundary 2:38 and loud windows 2:40–2:55, reaching −8.3 dB at 2:55.' },
    { t: 218, kind: 'form', title: 'The opening melody returns', text: 'The first melody returns quietly in G♭ major. Its long notes again sit above the moving accompaniment, after the dominant harmony has prepared the return; the piece has a three-part song shape rather than a sonata development.', evidence: 'D♭-dominant pitch classes at 3:30–3:35 and a quiet −24.8 dB window at 3:35; G♭-major estimates from 3:40–4:00. Corresponds to the opening material’s return after the middle section.' },
    { t: 252, kind: 'life', title: 'The year of Winterreise', text: 'Schubert wrote the two sets of four Impromptus in 1827, also the year of Winterreise. The piano pieces are not arrangements of those songs, but both repertories depend on keeping an accompanying figure alive while the harmony changes beneath a sustained line.' },
    { t: 286, kind: 'listen', title: 'The accompaniment keeps its pace', text: 'Throughout the return, listen for the difference between the melody’s breathing and the accompaniment’s repeated groups. The pianist has to give the upper line room without turning every melodic hesitation into a complete stoppage.', evidence: 'G♭-major estimates at 4:35–4:55; stable 3.0–3.4 detected onsets/s at 4:35–4:50. General performance cue across the restored texture.' },
    { t: 316, kind: 'music', title: 'A chromatic last pressure', text: 'The coda briefly puts greater harmonic and dynamic pressure on the home key. The following dominant harmony releases that tension; the familiar flowing texture carries the change rather than yielding to a separate closing tune.', evidence: 'Boundary 4:58 begins altered pitch content; D/A and then C/B♭/G become prominent at 5:15–5:20, with −10.9 dB at 5:15. Boundary 5:26 introduces sustained D♭-dominant estimates at 5:25–5:30; chromatic coda follows the score.' },
    { t: 340, kind: 'form', title: 'The motion finally stops', text: 'G♭ major settles and the broken chords give way to the last held sound. The final chord can decay only once the accompaniment’s continuous motion has ended.', evidence: 'Boundary 5:40; G♭/B♭/D♭ pitch classes, onset density falling to 0.8/s at 5:45 and 0.0 at 5:50–5:55; loudness falls to −37.8 dB.' },
  ],
};
