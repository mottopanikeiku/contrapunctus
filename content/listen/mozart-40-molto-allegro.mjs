export default {
  id: 'mozart-40-molto-allegro',
  composer: 'mozart',
  order: 1,
  work: 'Symphony No. 40, K. 550',
  movement: 'I. Molto allegro',
  year: '1788',
  key: 'G minor',
  forces: 'Orchestra',
  performers: 'Musopen Symphony (Commons credit; ensemble attribution disputed)',
  recorded: '',
  source: { file: 'File:Mozart - Symphony No. 40 in G minor, K550 - I. Molto allegro (Musopen Symphony).flac' },
  intro: 'No ceremonial introduction: the accompaniment is already moving when the violin tune arrives. The same falling semitone supplies melody, transition and contrapuntal argument across this compact sonata movement.',
  question: 'What changes when the second theme returns in the minor?',
  // Sources: https://www.abc.net.au/listen/classic/read-and-watch/music-reads/mozart-symphony-no-40-sonata-form/10160386
  // https://www.indianapolissymphony.org/backstage/program-notes/mozart-symphony-no-40/
  // Formal positions below are estimates, not an alignment to performed bars.
  sections: [
    { t: 0, label: 'Exposition · G minor' },
    { t: 50, label: 'Second theme · approximate' },
    { t: 120, label: 'Development · approximate' },
    { t: 194, label: 'Recapitulation · approximate' },
    { t: 265, label: 'Second theme returns · approximate' },
    { t: 338, label: 'Final extension · approximate' },
  ],
  cues: [
    { t: 0, kind: 'listen', title: 'Already in motion', text: 'The movement begins without a slow introduction. Listen for the opening melody’s repeated notes and small downward step against the moving accompaniment; a compact figure supplies material for much of the later argument.', basis: 'general', precision: 'passage', evidence: 'The score’s opening figure and its later development are discussed by Matthew Lorenzon for ABC Classic. This describes the opening passage rather than a timed violin entrance. https://www.abc.net.au/listen/classic/read-and-watch/music-reads/mozart-symphony-no-40-sonata-form/10160386' },
    { t: 30, kind: 'music', title: 'The opening gains weight', text: 'Across this stretch, the restrained opening gives way to stronger, busier writing. Listen for the contrast between a tune’s first presentation and the more forceful material that connects it to what follows.', basis: 'audio-feature', precision: 'passage', evidence: 'The report shows increasing relative level and more detected attacks around 0:25–0:40. It supports a broad change of texture, not an isolated entrance.' },
    { t: 65, kind: 'listen', title: 'A contrasting second theme', text: 'The exposition’s second theme is in B♭ major, the relative major of G minor. Keep its chromatic, semitone-rich shape in mind: its later return will change the tonal setting without abandoning the recognisable line.', basis: 'score-proportion', precision: 'passage', evidence: 'Lorenzon describes the second theme and its altered return. The quieter passage after about 0:50 suggests its approximate location here; it is not aligned to the score.' },
    { t: 95, kind: 'world', title: 'Three symphonies in one summer', text: 'Mozart composed his last three symphonies in the summer of 1788. The G minor symphony sits between No. 39 in E♭ major and No. 41 in C major; their sequence does not establish a private narrative programme.', basis: 'documented', precision: 'passage', evidence: 'Marianne Williams Tobias’s Indianapolis Symphony note documents the summer sequence of Nos. 39–41. https://www.indianapolissymphony.org/backstage/program-notes/mozart-symphony-no-40/' },
    { t: 130, kind: 'form', title: 'Developing a small fragment', text: 'Through the development, listen for the first theme’s opening cell rather than a complete melody. Changing its key, register and companions lets Mozart make one small figure perform several different jobs.', basis: 'score-proportion', precision: 'passage', evidence: 'The score-based ABC guide describes the development’s use of the opening cell. A strong recorded change near 2:00 is consistent with its approximate position; the report alone cannot prove repeat practice.' },
    { t: 165, kind: 'listen', title: 'Follow imitation across the parts', text: 'In the central writing, try following one fragment as another part takes it up. Imitation can overlap statements instead of waiting for one line to finish before the next begins.', basis: 'general', precision: 'passage', evidence: 'The Indianapolis Symphony commentary identifies counterpoint in the development. The prompt does not assign a particular entry or instrument. https://www.indianapolissymphony.org/backstage/program-notes/mozart-symphony-no-40/' },
    { t: 205, kind: 'form', title: 'A return with another task', text: 'The recapitulation brings the main themes back, but changes the route between them. Compare familiar shapes with the earlier exposition rather than assuming the movement has simply restarted.', basis: 'score-proportion', precision: 'passage', evidence: 'Lorenzon describes the recapitulation and its expanded transition. The report’s change near 3:14 supports an approximate location, not a verified score-bar boundary.' },
    { t: 240, kind: 'listen', title: 'The longer connecting passage', text: 'The returning transition is longer than its earlier counterpart. Listen for familiar figures being worked further: a recapitulation can continue the process of development rather than merely reciting the themes.', basis: 'score-proportion', precision: 'passage', evidence: 'The expanded transition is documented in the ABC analysis. The active stretch around 3:45–4:20 is its estimated location in this performance, not a reviewed alignment.' },
    { t: 280, kind: 'listen', title: 'The second theme in minor', text: 'In the recapitulation, the second theme returns in G minor rather than B♭ major. Compare its melodic outline with its first presentation: bringing the theme home also changes its mode.', basis: 'score-proportion', precision: 'passage', evidence: 'The score and Lorenzon’s analysis establish the changed tonal setting. The quieter region after about 4:25 suggests where to compare it; the report’s key estimates alone do not establish the mode.' },
    { t: 315, kind: 'world', title: 'Two orchestral versions', text: 'Two versions of the symphony survive, one without clarinets and a later one with them. The revision is evidence of Mozart’s return to the score, not by itself proof of a particular first-performance occasion.', basis: 'documented', precision: 'passage', evidence: 'The Indianapolis Symphony note distinguishes the two scorings and the uncertainty surrounding early performances. This recording’s version is not established here. https://www.indianapolissymphony.org/backstage/program-notes/mozart-symphony-no-40/' },
    { t: 345, kind: 'listen', title: 'One more closing insistence', text: 'Across the ending, listen for a brief reduction in activity followed by renewed attacks. A pause in the pressure can strengthen the final gestures rather than signal that the movement is already over.', basis: 'audio-feature', precision: 'passage', evidence: 'The report detects fewer attacks around 5:35–5:40 and renewed activity around 5:45–5:50, followed by the final decay. No precise coda bar is assigned.' },
  ],
};
