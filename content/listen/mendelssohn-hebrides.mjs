// Historical sources:
// https://artandmusic.yale.edu/romantic-landscapes/mendelssohn-scotland/mendelssohn-gallery2-letter-his-family
// https://www.theportobelloorchestra.co.uk/ProgrammeNotes/MendelssohnHebrides.php
// https://interactive.britishart.yale.edu/critique-of-reason/360/staffa-fingals-cave
// https://www.mphil.de/en/ueber-uns/musicians/details/felix-mendelssohn-bartholdy
export default {
  id: 'mendelssohn-hebrides',
  composer: 'mendelssohn',
  order: 1,
  work: 'The Hebrides, Op. 26',
  movement: 'Allegro moderato',
  year: '1830–32',
  key: 'B minor',
  forces: 'Orchestra',
  performers: 'Musopen Symphony',
  // 2012 dates the Musopen project release; a recording session date is not established.
  recorded: '',
  source: { file: 'File:Mendelssohn - Hebrides Overture, Op. 26 (Musopen Symphony).flac' },
  question: 'How much music can grow from one falling figure?',
  intro: 'A short falling figure generates much of Mendelssohn’s concert overture. How does it remain recognisable as harmony, register and orchestral weight change around it?',
  sections: [
    { t: 0, label: 'Exposition · the falling figure' },
    { t: 120, label: 'Lyrical contrast' },
    { t: 200, label: 'First orchestral crest' },
    { t: 256, label: 'Development · changing ground' },
    { t: 455, label: 'Return' },
    { t: 510, label: 'Quiet major-key passage' },
    { t: 570, label: 'Closing drive' },
    { t: 670, label: 'Withdrawal' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Begin with the lower line', text: 'The opening idea is a short falling figure, introduced in the lower orchestral register. Follow its shape and the space before it: those small features offer landmarks as the music expands beyond the opening passage.', basis: 'general', precision: 'passage', evidence: 'The score supplies the falling figure and its low-register setting; this note does not time an instrumental entrance.' },
    { t: 38, kind: 'life', title: 'Before entering the cave', text: 'On 7 August 1829 Mendelssohn wrote a family letter containing the overture’s opening twenty-one bars. He visited Fingal’s Cave the following day, so this musical sketch preceded the celebrated visit rather than being composed inside the cave.', basis: 'documented', precision: 'passage', evidence: 'Yale’s Art and Music in Britain exhibition reproduces the dated letter and establishes the order of the two events.' },
    { t: 76, kind: 'listen', title: 'A figure beneath the melody', text: 'Throughout the opening, follow the short descending figure rather than only the highest line. Its repeated shape offers continuity even as the harmonies and orchestral layers around it change.', basis: 'general', precision: 'passage', evidence: 'The score develops the opening figure across the exposition; no new entrance is claimed at this display time.' },
    { t: 120, kind: 'form', title: 'A longer singing phrase', text: 'The lyrical second subject offers a longer line than the opening figure. Compare the broad melody with the continuing movement underneath it: a slower melodic pace need not bring the accompaniment to rest.', basis: 'score-proportion', precision: 'passage', evidence: 'The score and Duncan Gillies’s programme note distinguish the longer second subject; its placement here is an estimate from the opening span’s proportions.' },
    { t: 190, kind: 'listen', title: 'The first large crest', text: 'The latter part of the exposition gathers orchestral weight. Listen for how the compact material can support a sustained stronger passage, rather than assuming that a large peak requires a wholly new theme.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level rises across 3:00–3:20; the 3:20–3:35 windows include the recording’s strongest sustained passage.' },
    { t: 225, kind: 'world', title: 'An overture without an opera', text: '<i>The Hebrides</i> was written for the concert hall, not to introduce a stage work. It was first performed in London on 14 May 1832, and Mendelssohn continued revising it after that performance.', basis: 'documented', precision: 'passage', evidence: 'Duncan Gillies’s Portobello Orchestra programme note records the concert premiere and subsequent revision.' },
    { t: 256, kind: 'form', title: 'Developing familiar fragments', text: 'In the development, familiar fragments are moved and recombined rather than replaced by a new principal tune. Listen for the opening contour in less settled surroundings; recognition matters as much as novelty here.', basis: 'score-proportion', precision: 'passage', evidence: 'The score has a sonata-form development; several audio changes around 4:16–4:40 support an approximate location, not a formal boundary by themselves.' },
    { t: 290, kind: 'listen', title: 'The bass changes the meaning', text: 'Follow the low notes beneath the recurring material. A familiar contour can acquire a different harmonic meaning over a new bass, allowing the overture to move away from its starting point without abandoning its vocabulary.', basis: 'general', precision: 'passage', evidence: 'This is a listening guide to the development’s use of recurring material, not a machine-derived chord label.' },
    { t: 325, kind: 'world', title: 'Turner visits Staffa', text: 'Turner visited Staffa in 1831, two years after Mendelssohn. His painting <i>Staffa, Fingal’s Cave</i>, dated around 1831–32, places a modern steamship beside the ancient geological formation.', basis: 'documented', precision: 'passage', evidence: 'The Yale Center for British Art’s record B1978.43.14 documents the visit, dating and steamship.' },
    { t: 360, kind: 'listen', title: 'Colour and overall level', text: 'This stretch contains a change from brighter to darker sound without a comparable disappearance in level. Listen separately to the upper-frequency edge of the sound and the strength of the musical line.', basis: 'audio-feature', precision: 'passage', evidence: 'The analysis shows a substantial shift towards lower-frequency sound around 6:00–6:05, with a smaller change in relative level.' },
    { t: 395, kind: 'listen', title: 'Short attacks, longer build-up', text: 'In this part of the development, repeated attacks accompany a gradual increase in level. Try following the small rhythmic units and the longer rise at the same time: they shape the passage at different scales.', basis: 'audio-feature', precision: 'passage', evidence: 'Detected attacks become more frequent around 6:25–6:45 while relative level rises towards 7:00.' },
    { t: 455, kind: 'form', title: 'Recognising the opening ground', text: 'The later return brings the opening material back into the overture’s home-key argument. Compare it with your memory of the first passage: a recapitulation restores familiar material without necessarily replaying everything unchanged.', basis: 'score-proportion', precision: 'passage', evidence: 'The score establishes the recapitulation; the withdrawal around 7:35 supports only an approximate location in this recording.' },
    { t: 495, kind: 'listen', title: 'A quieter exposed stretch', text: 'Through the quieter passage, follow how the line stays connected between attacks. With less overall weight, the shape of the phrase and the balance between parts become useful points of attention.', basis: 'audio-feature', precision: 'passage', evidence: 'The relative level falls across 8:15–8:30, reaching one of the recording’s lowest non-terminal stretches.' },
    { t: 535, kind: 'life', title: 'Building a musical institution', text: 'Mendelssohn took charge of Leipzig’s Gewandhaus concerts in 1835. In 1843 he founded the Leipzig Conservatoire; orchestral direction and musical education accompanied his work as a composer.', basis: 'documented', precision: 'passage', evidence: 'The Munich Philharmonic’s biography records the 1835 appointment and 1843 conservatoire foundation.' },
    { t: 570, kind: 'listen', title: 'The closing drive', text: 'The closing span moves from the quiet passage towards a stronger, more articulated texture. Listen for the familiar figures within the larger sound rather than treating the ending as a separate episode.', basis: 'audio-feature', precision: 'passage', evidence: 'The analysis shows renewed activity around 9:30 and a substantial relative-level rise by 9:50.' },
    { t: 610, kind: 'listen', title: 'Separate attacks within the whole', text: 'Within the fuller closing music, listen for the space between short notes. Coordinated articulation can make a figure recognisable even when several orchestral parts contribute to the surrounding sound.', basis: 'general', precision: 'passage', evidence: 'This is an articulation-focused listening invitation; the analysis does not identify which instruments make individual attacks.' },
    { t: 650, kind: 'listen', title: 'The last rise and withdrawal', text: 'The final span gathers force before drawing back. Keep the opening figure in memory as the texture contracts: the overture does not sustain its greatest orchestral weight to the end.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level rises towards 10:55, then declines through 11:10–11:20.' },
    { t: 673, kind: 'form', title: 'A reduced closing scale', text: 'The closing passage brings the music back to a smaller scale after the full-orchestra surges. Compare that contraction with the compact, low-register idea that opened the overture.', basis: 'score-proportion', precision: 'passage', evidence: 'The score’s reduced close is supported by the recording’s lower relative level and darker sound in its final passage.' },
  ],
};
