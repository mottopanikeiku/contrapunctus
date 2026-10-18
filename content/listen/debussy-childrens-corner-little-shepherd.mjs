export default {
  "id": "debussy-childrens-corner-little-shepherd",
  "composer": "debussy",
  "order": 34,
  "work": "Children’s Corner",
  "movement": "V. The Little Shepherd",
  "set": {
    "id": "debussy-childrens-corner",
    "title": "Children’s Corner",
    "part": 5,
    "of": 6
  },
  "year": "1906–08",
  "key": "A major",
  "forces": "Piano",
  "performers": "Robert Casadesus, piano",
  "recorded": "11 April 1950, Columbia 30th Street Studio, New York; LP published 1951",
  "source": {
    "archive": {
      "item": "lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0",
      "file": "disc1/02.05. Children's Corner Suite: The Little Shepherd.mp3"
    },
    "rights": {
      "basis": "eu-published-before-1963",
      "published": 1951,
      "evidence": "Columbia Masterworks ML 4366, 1951; Internet Archive item metadata and original carrier: https://archive.org/details/lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0. Territorial EU basis; US status not established."
    }
  },
  "intro": "An unaccompanied piano line calls into silence; a more animated answer brings supporting chords. Debussy returns to that exchange in varied forms, making the pauses and the differences between successive answers part of the miniature’s shape.",
  "question": "How much can a returning phrase change while still sounding like an answer?",
  "sections": [
    { "t": 0, "label": "A · First call and answer", "m": "A", "mNote": "an unaccompanied call meets a livelier chord-supported answer" },
    { "t": 50, "label": "A′ · The exchange renewed", "m": "A′", "mNote": "the call-and-answer pattern returns with altered melodic details" },
    { "t": 78, "label": "A″ · A larger answer and close", "m": "A″", "mNote": "another call leads to greater animation, then a quiet conclusion" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "A call without accompaniment", "text": "At first there is only a single line, with little turns and a pause at the end of its phrase. When chords begin to support the answer, listen for the change from a solitary call to something more rhythmically grounded.", "basis": "score-proportion", "precision": "passage", "evidence": "Viewed Durand score, printed p. 22, opens with a single right-hand line and a fermata, followed by Plus mouvementé and supporting left-hand chords. The report’s first substantial rise is around 0:20, with a change at 0:20. No orchestral instrument is claimed. Score: https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 35, "kind": "listen", "title": "Leave room for the silence", "text": "The animated answers do not run straight into the next call. They slow and settle into very quiet held harmonies. Follow that remaining resonance: the space between phrases helps the next unaccompanied line sound newly exposed.", "basis": "score-proportion", "precision": "passage", "evidence": "Viewed score pp. 22–23 repeatedly places Cédez, quiet held chords and rests between the calls. The report shows a withdrawal around 0:35–0:45 before the stronger 0:50 window. This describes the intervening passage, not an exact release or recorded silence." },
    { "t": 70, "kind": "form", "title": "A pattern, not a literal repeat", "text": "Listen across the successive exchanges rather than expecting one tune to repeat unchanged. Debussy varies the calls, but the familiar contrast survives: a free-sounding line, then a more animated answer with chords beneath it.", "basis": "general", "precision": "passage", "evidence": "The two viewed score pages show three related call-and-answer exchanges, with changed melodic details and recurring Plus mouvementé writing. The report has changes at 0:50 and 1:18 separated by a quieter 1:05–1:15 span. The sections group whole exchanges; they do not assign every small phrase its own boundary." },
    { "t": 105, "kind": "listen", "title": "An answer becomes an ending", "text": "After the fuller later answer, the dance-like figure returns more quietly. Debussy asks it to be held back while preserving the rhythm. Listen for that balance: the phrase relaxes, but its identity should remain clear until the final sustained harmony.", "basis": "score-proportion", "precision": "passage", "evidence": "Viewed score p. 23 gives Un peu retenu (en conservant le rythme), then Cédez and ppp at the final A-major harmony. The report shows its strongest level around 1:30, a withdrawal at 1:35–1:40, a change at 1:46 and quiet final windows. The timing covers the closing paragraph rather than one marked bar." }
  ],
  "transitions": [
    {
      "id": "into-renewed-exchange",
      "title": "Resonance clears for another solitary call",
      "from": "A · First call and answer",
      "to": "A′ · The exchange renewed",
      "at": { "t": 50 },
      "span": [40, 62],
      "how": "<p>The first animated answer gives way to held, very soft chords. Debussy then removes the accompaniment so another single-line call can emerge, altered in its melodic detail. The accompanying chords subsequently return beneath the more active answer. The repeated formal gesture is the alternation between exposed line and supported movement, not an exact repetition of every note.</p>",
      "devices": ["decrescendo", "texture change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Viewed Durand score p. 22, third and fourth systems, supplies the held chords, renewed unaccompanied line and chordal answer. The report’s quiet 0:40–0:45 span precedes a change and higher level around 0:50. The section start is an approximate anchor for the renewed exchange."
    },
    {
      "id": "into-larger-answer",
      "title": "The same exchange gains a larger reach",
      "from": "A′ · The exchange renewed",
      "to": "A″ · A larger answer and close",
      "at": { "t": 78 },
      "span": [66, 92],
      "how": "<p>Another quiet held harmony clears the way for a renewed call, this time marked a little stronger. The following answer keeps its familiar dotted figures and triplets but becomes more animated, with denser chords and a growing melodic reach. Debussy subsequently brings that figure back softly for the close. The larger third exchange grows from the established pattern rather than introducing an unrelated episode.</p>",
      "devices": ["texture change", "motivic link", "tempo change", "crescendo build"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Viewed score p. 23 supplies the third call, un poco più forte, Plus mouvementé, Poco animato and the subsequent quiet return of the answer. The report’s strongest change is at 1:18, followed by rising level through 1:25–1:30. This anchors the broad exchange, not its precise first note."
    }
  ]
};
