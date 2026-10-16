// Historical sources:
// https://mahlerfoundation.org/mahler/compositions/symphony-no-2/symphony-no-2-movement-4-lied-1-urlicht-sehr-feierlich-aber-schlicht/
// https://www.deutschestextarchiv.de/book/show/arnim_wunderhorn02_1808
// https://www.mahler.cz/en/about-gustav-mahler/conductor-and-opera-director
// Sung text: https://mahlerfoundation.org/mahler/compositions/wunderhorn-12/des-knaben-wunderhorn-12-songs-lied-11-urlicht/
// Commons credits the conductor and orchestra, but does not identify the alto.
export default {
  id: 'mahler-2-urlicht',
  composer: 'mahler',
  order: 2,
  work: 'Symphony No. 2 “Resurrection”',
  movement: 'IV. Urlicht — Sehr feierlich, aber schlicht',
  year: '1888–94',
  key: 'D♭ major',
  forces: 'Alto and orchestra',
  performers: 'Barbara Schubert, the DuPage Symphony Orchestra',
  recorded: '2004',
  license: 'CC0',
  source: { file: 'File:Mahler Symphony no. 2, IV. "Urlicht".ogg' },
  question: 'How does one voice change the scale of a symphony?',
  intro: 'After three orchestral movements, an alto gives Mahler’s Second Symphony its first words in a setting of <i>Des Knaben Wunderhorn</i>. How do the solitary voice and hymn-like orchestral writing change the scale of the music?',
  sections: [
    { t: 0, label: 'Invocation and chorale' },
    { t: 64, label: 'The first stanza' },
    { t: 160, label: 'The angel on the road' },
    { t: 204, label: 'Closing declaration' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'A single human voice', text: 'This is the first sung movement of the Second Symphony. Mahler asks for “very solemn, but simple”; compare the scale of one vocal line with the orchestral writing around it.', basis: 'general', precision: 'passage', evidence: 'The score establishes the first vocal movement and the marking Sehr feierlich, aber schlicht; no vocal entrance is aligned here.' },
    { t: 20, kind: 'music', title: 'Voice and chorale', text: 'The opening sets a solitary vocal phrase beside a brass chorale: a melody harmonised in measured, hymn-like chords. Compare the lengths of the phrases and the difference between a single line and several parts moving together.', basis: 'score-proportion', precision: 'passage', evidence: 'The score gives the opening voice-and-chorale design; increased relative level around 0:20 supports a broad contrast, not a brass entrance time.' },
    { t: 58, kind: 'world', title: 'A poem from 1808', text: '“Urlicht” appears in the second volume of <i>Des Knaben Wunderhorn</i>, published in Heidelberg in 1808 by Achim von Arnim and Clemens Brentano. Mahler uses its words for a newly composed song, not a transcription of a folk performance.', basis: 'documented', precision: 'passage', evidence: 'Deutsches Textarchiv’s 1808 volume lists Urlicht; the Mahler Foundation documents Mahler’s setting.' },
    { t: 95, kind: 'life', title: 'Summer at Steinbach', text: 'An early orchestral manuscript of “Urlicht” ends with “Steinbach / 19 Juli 1893”. Mahler subsequently revised the orchestration for the Second Symphony; the song existed before he decided to include it there.', basis: 'documented', precision: 'passage', evidence: 'The Mahler Foundation describes Zweig MS 49, folio 6r, and Mahler’s 1895 letter to Hermann Behn about the song’s earlier existence.' },
    { t: 130, kind: 'listen', title: 'Listen beneath the voice', text: 'Through the sustained vocal writing, follow the slower changes in the accompaniment. A held note need not mean that the harmony beneath it is standing still; the lower parts can give a long phrase its direction.', basis: 'general', precision: 'passage', evidence: 'This is a guide to the sustained voice-and-accompaniment texture, without identifying a particular chord or word at this time.' },
    { t: 160, kind: 'form', title: 'A narrative middle passage', text: 'The middle passage brings more movement into the song’s broad phrasing. The poem includes an encounter with an angel on a road; compare the more active musical writing with the solemn manner of the opening.', basis: 'score-proportion', precision: 'passage', evidence: 'The text supplies the encounter; a strong audio change near 2:40 and more frequent attacks support the passage’s approximate position, not word timings.' },
    { t: 194, kind: 'world', title: 'Refusing the angel', text: 'The poem’s speaker refuses to be turned away: “Ich bin von Gott und will wieder zu Gott!” — “I am from God and want to return to God.” The line is the traveller’s reply to the angel, not a request for permission.', basis: 'documented', precision: 'passage', evidence: 'The German text is reproduced by the Mahler Foundation; the English wording here is a close translation, not a timed subtitle.' },
    { t: 228, kind: 'listen', title: 'A sustained crest', text: 'The later part of the song contains a broad swell followed by a withdrawal. Follow the length of the phrase rather than looking for a quicker beat to explain the increase in intensity.', basis: 'audio-feature', precision: 'passage', evidence: 'The strongest five-second relative-level window falls near 3:50, followed by a marked reduction towards 4:00.' },
    { t: 260, kind: 'listen', title: 'The last broad swell', text: 'The closing span makes another broad rise before receding. Listen to the harmony beneath the long notes: the decrease in level begins before the movement has reached its final cadence.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level rises across 4:15–4:25 and falls substantially by 4:35, while the recording continues for another 24 seconds.' },
    { t: 284, kind: 'form', title: 'Before the choral finale', text: 'This small vocal movement ends in D♭ major before the symphony’s much larger finale. Compare its restrained close with the scale promised by the title “Resurrection”: the chorus’s answer still lies ahead in the complete work.', basis: 'general', precision: 'passage', evidence: 'The score gives the closing key and the movement’s position before the finale; the recording’s relative level declines through its final passage.' },
  ],
};
