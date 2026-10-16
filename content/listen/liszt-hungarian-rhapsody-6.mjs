// Context: https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA67418%2F9
// Life: https://www.liszt.org/p/chronology.html
export default {
  id: 'liszt-hungarian-rhapsody-6',
  composer: 'liszt',
  order: 1,
  work: 'Hungarian Rhapsody No. 6, S. 244/6',
  movement: '',
  year: 'Published 1853',
  key: 'D♭ major',
  forces: 'Piano',
  performers: 'Martha Argerich',
  recorded: '', // Commons says 1962; the recording dossier documents a conflicting 1960 session attribution.
  source: { file: 'File:Franz Liszt - Hungarian Rhapsody in D-flat major, S. 244 no. 6 (Martha Argerich, 1962).flac' },
  intro: 'Four contrasting sections move from march to quick dance, slow declamation and an octave-driven finale. Listen for the changes of pace as well as the changes of register.',
  question: 'How does repeated octave writing turn a tune into momentum?',
  sections: [
    { t: 0, label: 'Tempo giusto · march' },
    { t: 85, label: 'Presto · quick dance' },
    { t: 126, label: 'Andante · slow song' },
    { t: 248, label: 'Allegro · friss' },
    { t: 288, label: 'Octave variations' },
    { t: 355, label: 'Final drive · B♭ major' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'Four sections, one pianist', text: 'The opening has the measured tread of a march. Liszt sets it beside a quick dance, a slower song and an extended fast finale; the contrasts of pace are part of the design, not interruptions of it.', basis: 'documented', precision: 'passage', evidence: 'The score gives the contrasting tempo headings. Leslie Howard’s Hyperion notes describe the work’s four-section design.' },
    { t: 35, kind: 'world', title: 'Published in a larger group', text: 'The sixth rhapsody appeared in 1853, alongside Nos. 3–15. Liszt reused and reshaped material from his earlier Hungarian pieces rather than composing the whole collection from newly invented melodies.', basis: 'documented', precision: 'passage', evidence: 'Leslie Howard’s Hyperion notes document the publication group and its earlier sources: https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA67418%2F9' },
    { t: 70, kind: 'listen', title: 'Between march and dance', text: 'Around the transition out of the opening section, listen for the contrast between measured phrases and freer, more rapid passagework. The changing pace helps separate the rhapsody’s sections.', basis: 'score-proportion', precision: 'passage', evidence: 'The report shows a withdrawal around 1:05–1:10, quicker attacks around 1:15 and a renewed phrase around 1:25. The score places a quick section after the opening march.' },
    { t: 100, kind: 'world', title: 'Sources beyond one tradition', text: 'The rhapsodies draw on songs, published dances and the improvisatory playing of Romani musicians. Their material is not a single body of anonymous rural folk song: composed melodies and performing traditions both contributed.', basis: 'documented', precision: 'passage', evidence: 'Howard distinguishes folk material, published compositions and Romani improvisation in his Hyperion account: https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA67418%2F9' },
    { t: 136, kind: 'form', title: 'The slower song', text: 'The Andante gives the melody more room for pauses and ornament after the quick section. Listen for a longer line spanning those pauses rather than a succession of unrelated flourishes.', basis: 'score-proportion', precision: 'passage', evidence: 'The score places the slow section third. A measured change around 2:06 and fewer attacks through 2:15 suggest its start, without locating each phrase.' },
    { t: 165, kind: 'world', title: 'A song before Liszt', text: 'The slow section’s melody is by Ádám Pálóczi Horváth and was published in 1813. Liszt had already used it in his earlier “Rumanian Rhapsody”. Its apparently improvisatory setting therefore contains a tune with a documented printed history.', basis: 'documented', precision: 'passage', evidence: 'Howard identifies the composer, publication date and earlier Liszt use in the notes on Rhapsody VI: https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA67418%2F9' },
    { t: 230, kind: 'listen', title: 'Activity and a quiet gap', text: 'Near the end of the slow span, freer passagework separates the song from the fast finale. Listen through the quicker activity to the quieter space before the next sustained dance rhythm.', basis: 'score-proportion', precision: 'passage', evidence: 'The report shows rapid activity around 3:50, followed by very low level around 4:00–4:05. This is compatible with the score’s transition, not a precise cadenza boundary.' },
    { t: 258, kind: 'form', title: 'The fast final dance', text: 'The final dance establishes a repeated rhythmic support in B♭ major. Listen for that foundation while the melodic writing becomes increasingly elaborate.', basis: 'score-proportion', precision: 'passage', evidence: 'The score’s fast final section follows the Andante. Increasing attacks and B♭-centred pitch estimates around 4:10–4:25 suggest a start around 4:08.' },
    { t: 295, kind: 'music', title: 'The octave writing', text: 'In the finale’s repeated-octave passages, the same pitch is doubled at the octave while the hand repeats and moves as a unit. Try to follow the tune through the repeated attacks rather than treating the technique as the whole musical point.', basis: 'score-proportion', precision: 'passage', evidence: 'Repeated octaves are written in the finale. The report shows a sustained increase in attacks around 4:50–5:15, compatible with this placement but not a note-by-note alignment.' },
    { t: 330, kind: 'listen', title: 'More than fast notes', text: 'Through the fuller final stretch, follow the longer phrase beneath the repeated attacks. A change in register or emphasis can shape the melody even while the small notes keep moving.', basis: 'general', precision: 'passage', evidence: 'This is a listening suggestion for the score’s octave-driven finale. The report shows a sustained high relative level around 5:20–5:45; it does not measure the pianist’s phrasing.' },
    { t: 355, kind: 'form', title: 'A different home key', text: 'The rhapsody finishes in B♭ major rather than the D♭ major of the opening. Compare the final dance’s tonal destination with the march that began the piece.', basis: 'score-proportion', precision: 'passage', evidence: 'The opening and final keys come from the score. B♭, D and F dominate the closing recorded span around 5:55–6:10, before the level drops around 6:15.' },
  ],
};
