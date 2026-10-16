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
  intro: 'After three orchestral movements, a single alto gives the Second Symphony its first words. A poem from Des Knaben Wunderhorn becomes a five-minute declaration of faith, with a brass chorale rather than an operatic accompaniment.',
  sections: [
    { t: 0, label: 'Invocation and chorale' },
    { t: 64, label: 'The first stanza' },
    { t: 160, label: 'The angel on the road' },
    { t: 204, label: 'Closing declaration' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'A single human voice', text: 'This is the first sung movement of the Second Symphony. The alto’s opening phrase is separated from the brass response; Mahler asks for “very solemn, but simple”, not an operatic scene.', evidence: 'Opening sound: −35.1 dB at 0:00, −23.6 at 0:05; D♭ major estimates 0:05–0:15, before the structural boundary at 0:20.' },
    { t: 20, kind: 'music', title: 'A hymn without words', text: 'The brass answers with a chorale: a melody harmonised in measured blocks, like a hymn. Its fuller sound contrasts with the solitary opening voice; the orchestral reply takes longer than the phrase it answers.', evidence: 'Boundary 0:20 (0.58); rise from −30.9 dB at 0:15 to −11.7 at 0:20 and −8.8 at 0:25–0:30, then decline towards 1:04.' },
    { t: 58, kind: 'world', title: 'A poem from 1808', text: 'Urlicht appears in the second volume of Des Knaben Wunderhorn, published in Heidelberg in 1808 by Achim von Arnim and Clemens Brentano. Mahler takes the words from this collection of German folk poetry, but the melody and its orchestral setting are his own.' },
    { t: 95, kind: 'life', title: 'Summer at Steinbach', text: 'An early orchestral manuscript is dated 19 July 1893 at Steinbach am Attersee. Mahler was then chief conductor at Hamburg’s Stadttheater, a post he held from 1891 to 1897; the lake was his summer workplace.' },
    { t: 130, kind: 'listen', title: 'Listen beneath the voice', text: 'The melody moves in long spans over a slowly changing accompaniment. Listen past the held vocal notes to the chords underneath: the song’s sense of motion often comes from harmony rather than a busy surface.', evidence: 'Sustained passage 2:10–2:30: 0.0–0.6 onsets/s, with D♭ and A♭ regions; no large structural boundary until 2:40.' },
    { t: 160, kind: 'form', title: 'The angel on the road', text: 'The broad opening gives way to quicker movement. The poem turns from a statement about human suffering to a small narrative: a traveller, a road and an angel blocking the way.', evidence: 'Boundary 2:40 (0.92); −29.0 dB at 2:35 to −10.5 at 2:40; 1.2–2.0 onsets/s through 2:55, with B♭ minor/F-region pitch material.' },
    { t: 194, kind: 'world', title: 'Refusing the angel', text: 'The poem’s speaker refuses to be turned away from heaven: “Ich bin von Gott und will wieder zu Gott!” — “I am from God and want to return to God.” This is the traveller’s reply to the angel, not a prayer asking permission.' },
    { t: 228, kind: 'music', title: 'A sustained crest', text: 'The line swells towards the loudest crest of this performance, around 3:50. A sustained vocal phrase, rather than a quicker beat, produces the pressure; the sound then withdraws sharply.', evidence: '−16.3 dB at 3:35 rises to −7.9 at 3:50, the loudest five-second window; 0.0 onsets/s at 3:50, then −20.9 dB at 4:00.' },
    { t: 260, kind: 'music', title: 'One more broad phrase', text: 'The closing phrase makes another broad swell, then draws back. Its long notes leave space to hear the harmony change underneath; the volume falls well before the final chord.', evidence: '−20.2 dB at 4:15 rises to −8.4 at 4:25, with 0.2 onsets/s, then falls to −24.5 at 4:35; boundary 4:34 (0.30).' },
    { t: 284, kind: 'listen', title: 'Settling on D♭', text: 'The D♭ major close fades without a final accent. In the complete symphony, this little song stands immediately before the immense choral finale: one person’s confidence comes before the chorus’s answer.', evidence: 'D♭ major estimates 4:45–4:55; loudness falls from −26.3 dB at 4:45 to −40.3 at 4:55; file ends at 4:58.6.' },
  ],
};
