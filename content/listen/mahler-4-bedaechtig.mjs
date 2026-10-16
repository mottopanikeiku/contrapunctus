// Score and historical sources:
// https://usuo.org/explore/2015/05/mahler-4-listening-guide/
// https://mahlerfoundation.org/mahler/compositions/symphony-no-4/symphony-no-4-introduction/
// https://mahlerfoundation.org/mahler/locations/netherlands/amsterdam/1904-concert-amsterdam-23-10-1904/
// Commons identifies European Archive as the source, not an orchestra or conductor.
// The performers and recording date are therefore left blank; 2021 is the upload date.
// Its separate “Recording” permission explicitly releases the recording into the public domain.
export default {
  id: 'mahler-4-bedaechtig',
  composer: 'mahler',
  order: 3,
  work: 'Symphony No. 4',
  movement: 'I. Bedächtig. Nicht eilen',
  year: '1899–1900',
  key: 'G major',
  forces: 'Orchestra',
  performers: '',
  recorded: '',
  license: 'Public domain',
  source: { file: 'File:Mahler Symphony No.4 in G major 1. Badachtig Nicht ellen (Mahler) European Archive.ogg' },
  intro: 'Mahler begins with sleigh bells and a G major violin tune, then builds a sonata movement from material that first sounds almost domestic. Listen for how the same themes change character when played against one another.',
  question: 'How do familiar themes change when they overlap?',
  sections: [
    { t: 0, label: 'Exposition · G major' },
    { t: 90, label: 'Lyrical theme · approximate' },
    { t: 290, label: 'Development · approximate' },
    { t: 516, label: 'Central outburst' },
    { t: 568, label: 'Recapitulation · approximate' },
    { t: 745, label: 'Closing pages · approximate' },
  ],
  cues: [
    { t: 0, kind: 'listen', title: 'Short figures, longer tunes', text: 'The opening sets a short bell-like figure beside a longer melody. Keep both kinds of material in mind: Mahler can make a brief rhythmic interruption as important to the movement as a complete tune.', basis: 'general', precision: 'passage', evidence: 'Bettie Jo Basinger’s Utah Symphony guide describes the opening figure and first theme. This is an opening-passage guide, not a timed identification of an instrumental entrance. https://usuo.org/explore/2015/05/mahler-4-listening-guide/' },
    { t: 60, kind: 'world', title: 'Composed between conducting seasons', text: 'Mahler began the Fourth during his 1899 summer holiday at Bad Aussee and completed it the following summer. His conducting schedule left a limited interval between operatic seasons for composition.', basis: 'documented', precision: 'passage', evidence: 'Basinger’s work-history account describes the 1899 holiday, the seasonal constraint and completion in 1900. https://usuo.org/explore/2015/05/mahler-4-listening-guide/' },
    { t: 120, kind: 'listen', title: 'A longer singing line', text: 'Through the lyrical passages, follow the long notes rather than expecting every phrase to use the opening’s clipped rhythm. Contrast can come from the length of a line as well as its key or instrumental colour.', basis: 'score-proportion', precision: 'passage', evidence: 'Basinger describes the broadly sung second theme. The sparse attacks around 1:35–2:25 suggest its broad location, but no player or entrance has been verified against this recording.' },
    { t: 165, kind: 'music', title: 'A change of scale', text: 'Across this stretch, the stronger sound gives way to quieter, more closely articulated writing. Listen for how a reduction in weight can coexist with more frequent attacks.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level drops markedly around 2:25–2:40 while detected attacks become more frequent. The report establishes this contrast, not its orchestration.' },
    { t: 215, kind: 'world', title: 'The ending came first', text: 'Mahler composed the song Das himmlische Leben in 1892, before the symphony. He considered it for the Third, then made it the Fourth’s finale; the preceding movements share thematic material with that earlier song.', basis: 'documented', precision: 'passage', evidence: 'Basinger dates the song and traces its changing place in Mahler’s symphonic plans. https://usuo.org/explore/2015/05/mahler-4-listening-guide/' },
    { t: 275, kind: 'listen', title: 'A return is not a repeat', text: 'The exposition itself recalls the opening theme before reaching its close. In this movement, recognising familiar material does not automatically mean the main recapitulation has arrived.', basis: 'general', precision: 'passage', evidence: 'Basinger describes the first theme’s return within the exposition. This is a distinction about the score’s design, not a precisely placed return cue. https://usuo.org/explore/2015/05/mahler-4-listening-guide/' },
    { t: 325, kind: 'form', title: 'Working with fragments', text: 'The development recombines earlier figures and changes their harmonic setting. Through the central section, listen for small recognisable fragments rather than waiting only for complete melodies.', basis: 'score-proportion', precision: 'passage', evidence: 'The score-based guide describes these transformations. Increased activity after about 4:50 helps locate the central section approximately; this is not an aligned bar boundary.' },
    { t: 385, kind: 'music', title: 'Activity gathers again', text: 'Across this passage, the sound gains weight and attacks become more frequent. Try following one line through the busier writing rather than taking every simultaneous note as part of one chord.', basis: 'audio-feature', precision: 'passage', evidence: 'The report shows rising relative level and attack density around 6:15–6:35. Following a separate line is a listening invitation, not an automatic voice identification.' },
    { t: 440, kind: 'world', title: 'A programme withheld', text: 'In 1900 Mahler publicly criticised descriptive programmes for instrumental music. He issued the completed work simply as Symphony No. 4, although earlier plans and private conversations connected it with extra-musical ideas.', basis: 'documented', precision: 'passage', evidence: 'Basinger distinguishes Mahler’s public withdrawal of programmes from earlier outlines and private explanations. https://usuo.org/explore/2015/05/mahler-4-listening-guide/' },
    { t: 500, kind: 'listen', title: 'Several ideas under pressure', text: 'Through the later development, listen for fragments sounding against one another. Counterpoint means that lines retain some independence; it need not sound like one melody with a subordinate accompaniment.', basis: 'score-proportion', precision: 'passage', evidence: 'Basinger describes the combination and distortion of themes before the central outburst. Placement in this performance remains approximate, guided by the broad build towards 8:35–9:00.' },
    { t: 545, kind: 'music', title: 'After the central crest', text: 'The surrounding stretch contrasts sustained orchestral weight with a substantial withdrawal. Listen for the changed scale of the music after the crest rather than assuming the whole movement is ending.', basis: 'audio-feature', precision: 'passage', evidence: 'The highest relative-level region clusters around 8:35–9:00, followed by a marked reduction from about 9:05. The report does not identify particular fanfares.' },
    { t: 595, kind: 'form', title: 'Returning without a repeat sign', text: 'The later recapitulation brings the principal themes back after the central transformations. Compare their new surroundings with the opening; a formal return need not reproduce the earlier balance or weight.', basis: 'score-proportion', precision: 'passage', evidence: 'Basinger describes the modified recapitulation. The change around 9:28 and renewed opening pitch region suggest its broad location, not a verified entrance.' },
    { t: 650, kind: 'listen', title: 'Long notes, strong sound', text: 'In this later stretch, separate the strength of the sound from the rate of new attacks. A broadly sustained phrase can carry substantial weight without becoming more rhythmically crowded.', basis: 'audio-feature', precision: 'passage', evidence: 'Around 10:30–11:25 the report finds relatively few attacks despite substantial relative level. This does not independently identify the second theme or its players.' },
    { t: 710, kind: 'music', title: 'Another sudden thinning', text: 'Across this passage, the stronger sustained writing gives way to quieter activity. Listen for smaller gestures continuing after the weight has fallen away.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level drops around 11:30–11:40 while detected attacks become more frequent. That supports a textural contrast, not an instrumental assignment.' },
    { t: 770, kind: 'listen', title: 'Closing without a straight line', text: 'Through the closing pages, compare renewed swells with the smaller withdrawals between them. The ending is not one uninterrupted increase or decrease in force.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level rises around 12:50–13:05, recedes by 13:35 and changes again through the later closing passage.' },
    { t: 830, kind: 'listen', title: 'Sustaining the slower surface', text: 'In these late phrases, attend to held sound as well as new attacks. A less busy surface can maintain tension while the eventual closing gesture remains withheld.', basis: 'audio-feature', precision: 'passage', evidence: 'The report detects few attacks across much of 13:25–14:10. It does not identify a particular rest, note value or tempo change.' },
    { t: 880, kind: 'music', title: 'Withdrawal before the final burst', text: 'The final stretch approaches quiet, then recovers its weight before the cutoff. Listen beyond the withdrawal: the movement does not finish by fading gradually away.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level is low around 14:30–14:35, rises strongly around 14:50–14:55 and falls to the recording’s quiet tail by 15:00.' },
  ],
};
