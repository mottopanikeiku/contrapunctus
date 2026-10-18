export default {
  id: 'origins-pange-lingua',
  composer: 'origins-gregorian',
  order: 1,
  work: 'Pange lingua gloriosi corporis mysterium',
  movement: 'Traditional plainchant hymn',
  year: 'Medieval melody; exact date unknown',
  key: 'Mode III',
  forces: 'Unaccompanied solo voice',
  performers: 'Gareth Hughes, voice',
  recorded: '14 March 2005',
  source: { file: 'File:Pange Lingua Latin in Latin.ogg' },
  intro: 'A single voice carries the melody without a harmonic accompaniment. Listen for the recurring shape of the chant as successive stanzas give it new words.',
  question: 'How does a single melodic line mark a phrase ending without a chord?',

  sections: [
    { t: 0, label: 'Opening stanzas', m: 'A', mNote: 'one melodic line; the hymn’s recurring stanza tune' },
    { t: 64, label: 'Continuing stanzas', m: 'A′', mNote: 'the same tune carries further Latin text' },
    { t: 129, label: 'Later stanzas', m: 'A″', mNote: 'strophic continuation, leading to the final sustained close' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'A melody without chords', text: 'Gareth Hughes sings alone. Follow the rise and fall of the line and the spaces between phrases: in monophony, a single melody supplies the shape without a separate bass or chordal accompaniment.', basis: 'documented', precision: 'passage', evidence: 'The Commons description identifies Hughes and the traditional mode-III plainchant. This concerns the recording’s solo texture, not an onset measured at zero. https://commons.wikimedia.org/wiki/File:Pange_Lingua_Latin_in_Latin.ogg' },
    { t: 34, kind: 'world', title: 'Aquinas supplies the text', text: 'Thomas Aquinas wrote this Eucharistic hymn for the Office of Corpus Christi in the thirteenth century. That authorship belongs to the words; it does not establish that Aquinas composed the traditional melody heard here.', basis: 'documented', precision: 'passage', evidence: 'Hugh Henry, Catholic Encyclopedia, “The Hymn of St. Thomas Aquinas”, identifies the author, century and liturgical function. The recording source calls the melody traditional. https://www.newadvent.org/cathen/11441c.htm' },
    { t: 68, kind: 'listen', title: 'The stanza tune returns', text: 'Throughout the hymn, compare successive phrases with the tune already heard. New syllables alter the delivery while the recurring melodic outline holds the stanzas together; recurrence matters more than a succession of new themes.', basis: 'general', precision: 'passage', evidence: 'The six-stanza hymn is strophic. The report’s low-level windows around 0:30, 1:00 and 1:35 support broad phrase groupings, not word alignment or exact stanza starts. The section markers group the continuing hymn approximately.' },
    { t: 102, kind: 'world', title: 'Two hymns share an opening', text: 'Aquinas’s hymn is not the older Passion hymn beginning with the same words, usually credited to Venantius Fortunatus. Aquinas takes up its verse pattern but writes a different text about the Eucharist.', basis: 'documented', precision: 'passage', evidence: 'The Catholic Encyclopedia distinguishes the Passion and Blessed Sacrament hymns and describes Aquinas’s imitation of the earlier metre. https://www.newadvent.org/cathen/11441c.htm' },
    { t: 136, kind: 'world', title: 'A shorter separate hymn', text: 'The last two stanzas also circulate as <i>Tantum ergo</i>, sung at Benediction. This file preserves the longer <i>Pange lingua</i> recording rather than the separately cropped two-stanza derivative on Commons.', basis: 'documented', precision: 'passage', evidence: 'The Catholic Encyclopedia explains the separate Tantum ergo use; Commons links its cropped derivative. This is contextual information, not a claim that the words Tantum ergo begin at 2:16.' },
    { t: 170, kind: 'listen', title: 'The final rise and release', text: 'The late part of this performance reaches a stronger recorded crest before the line subsides. Follow the last sustained sound into its release rather than expecting an instrumental chord to finish the hymn.', basis: 'audio-feature', precision: 'passage', evidence: 'The report places the loudest five-second window at 2:50, then declining level and onset density across 3:15–3:25. It does not establish a particular vowel, pitch or breath at this cue.' },
  ],
  transitions: [
    { id: 'continuing-stanzas', title: 'The stanza melody carries the next text', from: 'Opening stanzas', to: 'Continuing stanzas', at: { t: 64 }, span: [54, 77], how: '<p>The hymn continues by returning to its stanza tune, not by changing ensemble or introducing a contrasting theme. With only one voice, the end of a phrase and the renewed melodic contour do the work that a chordal cadence might do in accompanied music. The marker groups the continuing stanzas; it does not identify an exact syllable or breath.</p>', devices: ['motivic link'], basis: 'score-proportion', precision: 'passage', evidence: 'The documented six-stanza hymn supplies the strophic design. The measured level trough near 1:00 and renewed level around 1:05–1:10 support an approximate grouping here. No word-level or stanza-number alignment has been made.' },
    { id: 'later-stanzas', title: 'The same melody continues towards the close', from: 'Continuing stanzas', to: 'Later stanzas', at: { t: 129 }, span: [119, 143], how: '<p>Further stanzas keep the same monophonic plan. The new words fit the established melodic phrases, while brief gaps separate their delivery. Continuity comes from the returning tune rather than a harmonic modulation or a new instrumental colour; this broad marker does not locate the opening of <i>Tantum ergo</i>.</p>', devices: ['motivic link'], basis: 'score-proportion', precision: 'passage', evidence: 'The report shows a level trough near 2:05 followed by a renewed rise at 2:10–2:15, consistent with the hymn’s recurring phrase groups. The timing remains approximate; no sung word is assigned to 2:09.' },
  ],
};
