// Source files and recording credit: see content/dossiers/mussorgsky-pictures-cum-mortuis.json.
// Orchestration treated as Ravel's 1922 scoring (inferred); instrument claims follow the Philharmonia guide (Joanna Wyld).
// Mussorgsky's manuscript notes: Wikipedia's Pictures at an Exhibition article (movement 8) and Steinberg's Boston Symphony note.
// Score facts from Lamm's piano text, Mutopia Project (promenade-6.ly): upper tremolo starts on F♯ and moves chromatically for about a dozen bars; a fixed high F♯ tremolo is the later backdrop; the last chord is B–D♯–F♯ under a fermata (B major).
export default {
  id: 'mussorgsky-pictures-cum-mortuis',
  composer: 'mussorgsky',
  order: 2,
  work: 'Pictures at an Exhibition',
  movement: 'Cum mortuis in lingua mortua — Andante non troppo, con lamento',
  set: { id: 'mussorgsky-pictures', title: 'Pictures at an Exhibition', part: 13, of: 15 },
  year: '1874',
  key: 'B minor',
  forces: 'Orchestra',
  performers: 'Skidmore College Orchestra, per the Free Music Archive and Internet Archive; not named on the Commons page',
  recorded: '',
  source: { file: 'File:Modest Mussorgsky - pictures at an exhibition - cum mortuis in lingua mortua - andante non troppo, con lamento.ogg' },
  intro: 'The walking theme returns changed into a lament, beneath a quiet tremolo. In Lamm’s piano text it starts on F♯, moves chromatically, and later settles on a fixed high F♯. Here the visitor stops looking at the pictures and speaks to the dead. Instruments named here follow Ravel’s orchestration, the probable but undocumented version.',
  question: 'What happens to the walking theme when it is slowed into a lament?',

  sections: [
    { t: 0, label: 'The theme as a hushed lament', m: 'A' },
    { t: 58, label: 'Fuller, louder statements', m: 'B' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'The Promenade as a ghost', text: 'The Promenade theme returns as a hushed lament, with ethereal strings and delicate woodwinds. F♯ is among the three strongest pitch classes in all 23 five-second windows; the count shows the note is always present, not that it is held or where it lies.', basis: 'audio-feature', precision: 'passage', evidence: 'Ethereal strings and delicate woodwinds, the Promenade theme: Philharmonia guide (Joanna Wyld). The report’s top three pitch classes include F♯ in every one of the 23 windows from 0:00 to 1:50; the first three windows read F, F♯, E and F♯, F, E. Pitch-class presence cannot show a continuously held note or its register. In Lamm’s piano text (Mutopia, promenade-6.ly) the upper tremolo begins on F♯ and then changes chromatically, with a fixed high F♯ tremolo as a later backdrop. The local key reading is F♯ minor, which here confirms a dominant of B minor and is not used as proof.' },
    { t: 32, kind: 'world', title: 'Notes in the margin', text: 'Mussorgsky pencilled on the manuscript: “Latin text: with the dead in a dead language”, then added that the creative spirit of the dead Hartmann leads him towards the skulls, which “begin to glow softly”.', basis: 'documented', precision: 'passage', evidence: 'Wikipedia’s Pictures at an Exhibition article (movement 8) quotes both pencilled notes; Michael Steinberg’s Boston Symphony note gives them in another translation. Related edge: hartmann-pictures--mussorgsky-pictures-1874. The note sits near the quietest early window (−11.9 dB at 0:30).' },
    { t: 58, kind: 'form', title: 'The sound opens out', text: 'The strongest boundary of the movement comes at about 0:58, and the level climbs from about −10 dB to −5.4 dB at 1:00, among its loudest windows. After it the statements are fuller; the lament is now heard by a larger orchestra.', basis: 'audio-feature', precision: 'passage', evidence: 'Boundary at 0:58 (novelty 1.00); relative level −10.5 dB (0:55), −5.4 dB (1:00) and −4.4 dB (1:10), the loudest windows. The report does not identify which instruments join.' },
    { t: 80, kind: 'world', title: 'Observer and observed', text: 'At the Catacombs the Promenade stops being a mere link and becomes part of the picture itself. In this movement the line between the visitor and what he looks at disappears.', basis: 'documented', precision: 'passage', evidence: 'Wikipedia’s Pictures at an Exhibition article, section “Movements”: the turn at the Catacombs, where the Promenade theme becomes an integral element of Cum mortuis and the line between observer and observed vanishes. The note sits in a quieter stretch (−7 to −12 dB, 1:15–1:35).' },
    { t: 102, kind: 'listen', title: 'A last swell, then a quiet B major', text: 'Near 1:45 the sound swells once more, reaching −6.8 dB, before the final window at 1:50 falls to −15 dB. The score ends on a B major chord under a fermata: a major close to a minor lament. No timestamp is claimed for it.', basis: 'audio-feature', precision: 'passage', evidence: 'Relative level −8.8 dB (1:40), −6.8 dB (1:45; one of the loudest windows) and −15.0 dB (1:50, the quietest window); onsets per second 1.0, 0.6, 0.4. The final B–D♯–F♯ chords with a fermata are in Lamm’s piano text (Mutopia, promenade-6.ly); the report cannot time the final chord, so the ending is described only as a broad closing region.' },
  ],

  transitions: [
    {
      id: 'into-fuller-statements',
      title: 'The lament grows to full volume',
      from: 'The theme as a hushed lament',
      to: 'Fuller, louder statements',
      at: { t: 58 },
      span: [48, 68],
      how: '<p>Near 0:58 the level climbs about five decibels in five seconds to reach one of the movement’s loudest windows at 1:00, and the statements that follow are fuller. The report cannot tell which instruments join. In the piano text the later bars lie over a fixed high F♯ tremolo, but the recording cannot be aligned to those bars, so the match is left open.</p>',
      devices: ['crescendo build', 'orchestration change'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Boundary at 0:58 (novelty 1.00); relative level −10.5 dB (0:55) to −5.4 dB (1:00); the report’s top-three pitch classes include F♯ in all 23 windows, which is presence and not a held note. The fixed high F♯ tremolo as the later backdrop is in Lamm’s piano text (Mutopia, promenade-6.ly); where it begins in this recording is not aligned.',
    },
  ],
};
