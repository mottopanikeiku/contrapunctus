// Historical and score context:
// https://www.laphil.com/works/ballade-no-1-in-g-minor-op-23
// https://chopin2020.pl/en/compositions/27/ballade-in-g-minor-op.-23
// https://chopin.nifc.pl/en/chopin/kalendarium/123_lata-adaptacji-18311835/712
// https://www.bbc.co.uk/radio3/classical/chopinexperience/timeline/timeline.shtml
export default {
  id: 'chopin-ballade-1',
  composer: 'chopin',
  order: 1,
  work: 'Ballade No. 1, Op. 23',
  movement: 'Largo — Moderato',
  year: '1831–35',
  key: 'G minor',
  forces: 'Piano',
  performers: 'Frank Lévy',
  recorded: 'c. 2014',
  source: { file: 'File:Chopin - Ballade No. 1 in G minor, Op. 23 (Frank Levy).flac' },
  intro: 'Chopin gives the piano the title of a narrative poem without supplying a plot. Two themes return in altered proportions, and a fast coda overturns the measured pace of the opening.',
  question: 'How does a quiet theme become a forceful return?',
  sections: [
    { t: 0, label: 'Largo · introduction' },
    { t: 30, label: 'First theme · approximate' },
    { t: 200, label: 'Lyrical theme · approximate' },
    { t: 272, label: 'Central transformations · approximate' },
    { t: 420, label: 'Lyrical return · approximate' },
    { t: 454, label: 'First theme recalled · approximate' },
    { t: 486, label: 'Fast coda · approximate' },
    { t: 564, label: 'Closing interruptions' },
  ],
  cues: [
    { t: 0, kind: 'listen', title: 'Before the regular pulse', text: 'The introduction sets rising octaves against pauses and quieter chords. Listen for the change from a single line spread across the keyboard to melody with accompaniment, rather than expecting the main theme’s pace from the first note.', basis: 'general', precision: 'passage', evidence: 'Orrin Howard’s LA Phil note describes the octave introduction and its transition to the first theme. The report shows contrasting attacks and quiet spaces in the opening half-minute. https://www.laphil.com/works/ballade-no-1-in-g-minor-op-23' },
    { t: 35, kind: 'listen', title: 'A broad underlying pulse', text: 'Through the first theme, try grouping the six quarter-note beats into two broad halves. The melody can lean across those groups while the accompaniment maintains their movement.', basis: 'general', precision: 'passage', evidence: 'The Moderato is notated in 6/4. This is a listening suggestion for the first-theme passage, not a claim that a particular bar begins at this timestamp.' },
    { t: 105, kind: 'listen', title: 'Keep the singing line', text: 'As the keyboard writing becomes busier, follow the longer melodic notes rather than giving every attack equal attention. Melody and decoration can move at different rates within one hand’s part.', basis: 'general', precision: 'passage', evidence: 'Howard describes the alternation of lyricism and passagework. The analysis records changing attack density around 1:45–2:00 but cannot identify the melody independently.' },
    { t: 150, kind: 'music', title: 'Restraint gives way', text: 'Across this stretch, the piano gains force and activity. Compare the sound with the quiet first theme: expansion can involve more attacks, a wider register and greater weight without introducing a new tune.', basis: 'audio-feature', precision: 'passage', evidence: 'The report shows a sustained increase in relative level from about 2:05 to 2:40, with more detected attacks around 2:35. Register is offered as a listening comparison, not a measured transcription.' },
    { t: 190, kind: 'music', title: 'Room for another phrase', text: 'Around this passage, the forceful writing gives way to quieter, more widely spaced attacks. Listen to how that release makes room for a longer-breathed melodic span.', basis: 'audio-feature', precision: 'passage', evidence: 'The largest detected change is near 3:06. Relative level and attack density both fall around 3:10–3:20; the report does not establish an exact theme entrance.' },
    { t: 235, kind: 'listen', title: 'Remember the quieter scale', text: 'Keep the quieter lyrical writing in mind for the later returns. Compare the length of the phrases and the weight of their accompaniment, not just whether you recognise the tune.', basis: 'general', precision: 'passage', evidence: 'Howard identifies a lyrical second theme that later becomes much more forceful. The cue invites comparison without assigning a precisely aligned statement. https://www.laphil.com/works/ballade-no-1-in-g-minor-op-23' },
    { t: 290, kind: 'music', title: 'The middle gathers weight', text: 'Across this central stretch, quiet writing grows into a much stronger passage. Follow the accumulating sound without assuming that every increase in force marks a new formal section.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level rises strongly between about 4:45 and 5:00, after the detected change near 4:32. The measured contour does not itself identify a thematic transformation.' },
    { t: 325, kind: 'listen', title: 'A line inside the weight', text: 'Through the stronger central passage, try to retain a sense of a long melodic line inside the chords and faster notes. A sustained phrase can remain the organising idea even when its accompaniment gains weight.', basis: 'general', precision: 'passage', evidence: 'The report shows a sustained high-level stretch around 5:00–5:40. The distinction between melody and surrounding activity is an editorial listening invitation, not an automatic voice separation.' },
    { t: 360, kind: 'world', title: 'Schumann’s favourite', text: 'Schumann reported telling Chopin during his 1836 Leipzig visit that the G minor Ballade was his favourite of Chopin’s works. In that account, Chopin replied that he preferred it too. This records an exchange of judgement, not a hidden literary programme.', basis: 'documented', precision: 'passage', evidence: 'Orrin Howard’s LA Phil programme note quotes Schumann’s account of the conversation. https://www.laphil.com/works/ballade-no-1-in-g-minor-op-23' },
    { t: 395, kind: 'listen', title: 'Activity is not force', text: 'In this stretch, compare the number of attacks with the weight of the sound. The piano can become busier while its relative level falls; faster surface movement need not produce a heavier phrase.', basis: 'audio-feature', precision: 'passage', evidence: 'Around 6:25–6:35, the report shows falling relative level alongside more detected attacks. This describes a short contrast within the passage, not a tempo measurement.' },
    { t: 435, kind: 'listen', title: 'Compare the returning themes', text: 'In the later returns, compare familiar melodies with their earlier presentations. Listen for changes in accompaniment and scale: recognising a tune is only the first part of recognising what its return does.', basis: 'general', precision: 'passage', evidence: 'The work’s recurring themes are described in Howard’s commentary. Their precise return boundaries have not been aligned to this performance. https://www.laphil.com/works/ballade-no-1-in-g-minor-op-23' },
    { t: 470, kind: 'music', title: 'A quieter preparation', text: 'Across the passage before the final rush, the sound falls back substantially. Listen to the space this creates between the broad preceding statements and the concentrated activity of the ending.', basis: 'audio-feature', precision: 'passage', evidence: 'The analysis shows a sustained reduction around 7:35–8:00 before a rise around 8:05–8:10. It does not establish a particular harmonic preparation.' },
    { t: 500, kind: 'form', title: 'The fast coda', text: 'The closing section is marked Presto con fuoco. Follow its larger two-beat measures rather than counting every fast note; the change of gait matters as well as the accumulation of attacks.', basis: 'score-proportion', precision: 'passage', evidence: 'The score’s coda is in cut time. Its approximate location follows the work’s closing structure and increased recorded activity after 8:05; it has not been checked by ear.' },
    { t: 540, kind: 'listen', title: 'Accents inside the rush', text: 'Through the coda, listen for accented notes within the running figures. A rapid surface does not make every note equally important; larger groupings give the ending its direction.', basis: 'general', precision: 'passage', evidence: 'This is a score-informed listening suggestion for the closing Presto, not an automatically detected accent pattern. The report shows sustained activity around 8:25–9:05.' },
    { t: 570, kind: 'music', title: 'The rush is interrupted', text: 'The closing stretch alternates forceful gestures with much quieter gaps. Attend to the waiting as well as the attacks: each renewed gesture has to recover momentum after the preceding withdrawal.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level alternates sharply around 9:20–9:45, while detected attacks become sparse. Five-second windows support this pattern but not the precise start of a rest.' },
    { t: 600, kind: 'music', title: 'After the final attacks', text: 'Across the final passage, renewed activity gives way to a long decay. Listen through the remaining resonance rather than treating the last forceful gesture as an instantaneous end.', basis: 'audio-feature', precision: 'passage', evidence: 'A renewed burst appears around 9:50; no further attacks are detected in the 10:05–10:10 windows, and relative level falls sharply. No key claim is taken from the unreliable final estimate.' },
  ],
};
