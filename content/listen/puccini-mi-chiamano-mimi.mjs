// Synopsis: http://static.roh.org.uk/showings/la-boheme-live-2017/en.pdf
// Biography and premieres: https://www.puccinifestival.it/en/giacomo-puccini/
export default {
  id: 'puccini-mi-chiamano-mimi',
  composer: 'puccini',
  order: 1,
  work: 'La bohème',
  movement: 'Act I · Sì, mi chiamano Mimì',
  year: '1893–95',
  key: 'D major',
  forces: 'Soprano and orchestra',
  performers: 'Claudia Muzio',
  recorded: '1911',
  source: { file: 'File:Puccini Mi chiamano Mimì par Claudia Muzio.ogg' },
  question: 'How does a conversation become an aria?',
  intro: 'Mimì answers Rodolfo’s introduction by describing her work as an embroiderer and her solitary life. How does Puccini move between speech-like phrases and a sustained vocal line without stopping the conversation?',
  sections: [
    { t: 0, label: 'Mimì introduces herself' },
    { t: 70, label: 'A quieter account' },
    { t: 140, label: 'The long lyrical span' },
    { t: 212, label: 'Back to conversation' },
  ],
  cues: [
    { t: 0, kind: 'form', title: 'An answer to Rodolfo', text: 'Rodolfo has described his life as a poet; Mimì responds with her own. Throughout the aria, compare short, speech-like phrases with sustained singing: both belong to the same first conversation.', basis: 'general', precision: 'passage', evidence: 'The Act I scene supplies the exchange; this is a listening frame, not word-by-word synchronisation.' },
    { t: 30, kind: 'world', title: 'Paris through two librettists', text: 'Luigi Illica and Giuseppe Giacosa adapted Henry Murger’s stories for Puccini. In Act I, Mimì comes to the Paris attic asking for a light for her candle; conversation follows while she and Rodolfo search for her lost key.', basis: 'documented', precision: 'passage', evidence: 'The Royal Opera’s 2017 programme credits the authors and describes the candle and key episode in its Act I synopsis.' },
    { t: 60, kind: 'listen', title: 'A swell within the conversation', text: 'The first part of the aria expands into a stronger phrase and then recedes. Listen for how sustained singing changes the scale of the conversation without turning it into a separate dramatic scene.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level peaks near 1:00 and falls through 1:10–1:25; the analysis does not identify individual vowels or words.' },
    { t: 93, kind: 'life', title: 'From organ to theatre', text: 'Puccini came from a family of church musicians in Lucca and worked as an organist. He entered the Milan Conservatory in 1880, studying with Bazzini and Ponchielli, and completed his studies in 1883.', basis: 'documented', precision: 'passage', evidence: 'The Puccini Festival biography, drawn from Eduardo Rescigno’s Dizionario Pucciniano, records this education and early work.' },
    { t: 126, kind: 'world', title: 'Turin, February 1896', text: '<i>La bohème</i> opened at Turin’s Teatro Regio on 1 February 1896. Puccini, Illica and Giacosa subsequently worked together on <i>Tosca</i> and <i>Madama Butterfly</i>.', basis: 'documented', precision: 'passage', evidence: 'The Puccini Festival’s biography and work list give the premiere and the collaborators on the three operas.' },
    { t: 160, kind: 'listen', title: 'The longer lyrical swell', text: 'In the broad lyrical passage, follow the length of the line rather than waiting for one high note. The build-up extends across a stretch of singing before the sound withdraws again.', basis: 'audio-feature', precision: 'passage', evidence: 'The relative level rises across 2:20–2:45, reaches its highest five-second window, then falls towards 2:55.' },
    { t: 196, kind: 'listen', title: 'Another rise before the close', text: 'A further rise follows the earlier retreat. Compare its shape with the preceding long swell, keeping the aria’s alternation between sustained song and conversational phrasing in mind.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level rises across 3:10–3:20 and recedes again by 3:35; no specific sung phrase is aligned here.' },
    { t: 232, kind: 'form', title: 'The encounter continues', text: 'The aria’s ending returns the scene to the two neighbours’ encounter. In the complete opera, Mimì and Rodolfo go on to join his friends at the Café Momus: this solo is not the end of their conversation.', basis: 'documented', precision: 'passage', evidence: 'The Royal Opera’s Act I synopsis describes the scene after the introductions; the recording’s level declines in its final seconds.' },
  ],
};
