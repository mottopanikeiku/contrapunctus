export default {
  id: 'ravel-ma-mere-loye-pavane', composer: 'ravel', order: 40,
  work: 'Ma mère l’Oye', movement: 'I. Pavane de la Belle au bois dormant',
  year: '1908–10', key: 'A minor', forces: 'Piano four hands',
  performers: 'Duo Campion/Vachon', recorded: '1992',
  source: { file: "File:Ravel Duo Campion-Vachon Ma Mere l'oye 1 Pavane de la Belle au bois dormant.OGG" },
  set: { id: 'ravel-ma-mere-loye', title: 'Ma mère l’Oye — piano duet', part: 1, of: 5 },
  "intro": "Sleeping Beauty’s pavane opens <i>Ma mère l’Oye</i> with twenty quiet bars for four hands at one piano. The melody passes between the two players as simply as a story told at bedtime.",
  "sections": [
    { "t": 0, "label": "A · A low tune, a high answer", "m": "A", "mNote": "The lower player begins; the upper player answers" },
    { "t": 38, "label": "B · The upper melody keeps walking", "m": "B", "mNote": "Quavers carry the tune through the middle of the keyboard" },
    { "t": 72, "label": "A′ · The high tune returns", "m": "A′", "mNote": "The opening answer returns over gently repeated notes" }
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Two people, one piano",
      "text": "The lower player begins alone with a small, stepwise tune. The upper player answers, then reaches higher for a melody over softly repeated notes. Both parts fit comfortably under the hands.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano-duet score (1910), pp. 2–3, bars 1–8: Seconda opening, Prima answer and high melody from bar 5. https://hdl.handle.net/1802/17620"
    },
    {
      "t": 30, "kind": "world", "title": "Children at the piano",
      "text": "Ravel dedicates the suite to Mimie and Jean Godebski. At the first public performance, on 20 April 1910 in Paris’s Salle Gaveau, Jeanne Leleu and Geneviève Durony sit at the piano. They are eleven and fourteen.",
      "basis": "documented", "precision": "passage",
      "evidence": "IRCAM work catalogue: dedication, date, venue, performers and ages. https://brahms.ircam.fr/fr/work/ma-mere-l%27oye"
    },
    {
      "t": 72, "kind": "form", "title": "The high tune returns",
      "text": "The earlier high melody returns over the same softly repeated accompaniment. Ravel lets it slow at the end, with a fermata over the last notes. The two players finish together.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano-duet score, pp. 2–3, bars 17–20: return of bars 5–8, altered ending, Rall. and fermata."
    }
  ],
  "transitions": [
    {
      "id": "connected-middle", "title": "The tune walks down the keyboard",
      "from": "A · A low tune, a high answer", "to": "B · The upper melody keeps walking",
      "at": { t: 38 }, "span": [30, 48],
      "how": "<p>The high answer descends into the middle of the keyboard. The upper player’s repeated accompanying notes stop, leaving a line of quavers above the lower player’s slower notes. Ravel keeps the quiet dynamic and the unhurried four-beat bar.</p>",
      "devices": ["texture change", "register change"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano-duet score (1910), pp. 2–3, bars 8–12."
    },
    {
      "id": "upper-return", "title": "The high answer comes back",
      "from": "B · The upper melody keeps walking", "to": "A′ · The high tune returns",
      "at": { t: 72 }, "span": [64, 90],
      "how": "<p>The upper part returns to its high melody at <i>pp</i>, with gently repeated notes below it. The lower player restores the earlier accompaniment. A rallentando and a fermata lengthen the final bar.</p>",
      "devices": ["motivic link", "tempo change", "fermata"],
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano-duet score, pp. 2–3, bars 17–20."
    }
  ],
  orchestra: {
    ensemble: ['piano'],
    basis: 'score-proportion',
    source: {
      title: 'Ravel, Ma mère l’Oye, original piano-duet score (Durand, 1910)',
      url: 'https://hdl.handle.net/1802/17620',
      note: 'Printed pp. 2–3: Seconda and Prima, the lower and upper parts at one piano.',
    },
    timeline: [
      { t: 0, playing: ['piano'], lead: ['piano'], note: 'The lower player begins alone. The upper player answers, then takes the tune higher up the same keyboard.' },
    ],
  },
};
