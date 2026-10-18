// Score: Breitkopf & Härtel first edition, later issue, plate 6016 (IMSLP #03060), p. 10.
// Rellstab’s review (Iris im Gebiete der Tonkunst, 1839) and Schumann’s reply: Robert-Schumann-Haus Zwickau, catalogue 175 Jahre Kinderszenen (2013), items 11–12;
// letter to Heinrich Dorn, 1839, quoted in GMTH Proceedings 2006 (storage.gmth.de/proceedings/articles/117/pdf/gmth-proceedings-artikel-117.pdf).
export default {
  id: 'schumann-kinderszenen-important-event',
  composer: 'schumann',
  order: 60,
  work: 'Kinderszenen, Op. 15',
  movement: 'No. 6 · Wichtige Begebenheit — An Important Event',
  set: { id: 'schumann-kinderszenen', title: 'Kinderszenen, Op. 15', part: 6, of: 13 },
  year: '1838',
  key: 'A major',
  forces: 'Piano',
  performers: 'Donald Betts',
  recorded: '2005',
  source: { file: 'File:Robert Schumann - scenes from childhood, op. 15 - vi. an important event.ogg' },
  intro: 'A child announces something momentous, in a mock-ceremonial A major. The second section is marked ff and repeated; then the opening comes back.',
  question: 'How does a piece sound serious and amused at once?',

  sections: [
    { t: 0, label: 'A · the announcement', m: 'A' },
    { t: 14, label: 'B · ff, played twice', m: 'B', mNote: 'eight bars repeated; the repeat is taken' },
    { t: 40, label: 'A′ · the announcement again', m: 'A′', mNote: 'opening music returns marked forte' },
  ],

  cues: [
    { t: 0, kind: 'music', title: 'Accented chords, octave basses', text: 'Three beats to the bar in A major, marked f. Nearly every chord carries an accent, and the left hand plays octaves. The effect is a small procession with a straight face, which is the joke of the title.', basis: 'score-proportion', precision: 'passage', evidence: 'First edition p. 10 (IMSLP #03060): 3/4, three sharps, f at the opening, accent marks on most chords, left-hand octaves. Report: A major (global r = 0.88), −13.4 dB at 0:00 rising to −8.8 dB by 0:15.' },
    { t: 14, kind: 'form', title: 'ff, then the same eight bars again', text: 'The second section is marked ff and enclosed in repeat signs. This performance takes the repeat: the form analysis finds the same music at about 0:15–0:26 and 0:29–0:39, thirteen seconds apart.', basis: 'audio-feature', precision: 'passage', evidence: 'Report: novelty 0.82 at 0:14. Form analysis: 0:15.5–0:26 matches 0:28.5–0:39 (lag 13 s, mean 0.97, the closest recurrence in this piece). Score p. 10: ff at the opening repeat sign of the second section and a closing repeat sign.' },
    { t: 30, kind: 'world', title: 'A critic counts the hands', text: 'Ludwig Rellstab reviewed the set in 1839 and judged it unplayable for the children he supposed it was for, since a child would need three hands. Schumann told Heinrich Dorn he had rarely met anything so clumsy and narrow-minded as that review.', basis: 'documented', precision: 'passage', evidence: 'Zwickau catalogue, item 11: Rellstab, Iris im Gebiete der Tonkunst, 1839, “ein Kind das nicht drei Hände hat”. Schumann to Heinrich Dorn, 1839: “Ungeschickteres und Bornierteres ist mir aber nicht leicht vorgekommen”, quoted in GMTH Proceedings 2006 (article 117), which cites Edler 1982; schumann-portal.de/3213.html quotes the next sentences of the same letter.' },
  ],

  transitions: [
    {
      id: 'into-ff-section',
      title: 'Forte gives way to ff',
      from: 'A · the announcement',
      to: 'B · ff, played twice',
      at: { t: 14 },
      span: [8, 22],
      how: '<p>After the opening eight bars the second section begins at a repeat sign and the mark is raised to <i>ff</i>. The accented chords now sit above falling left-hand figures and the harmony turns towards D major, the subdominant, so the procession is louder and more energetic. The metre is that of the opening; the contrast is one of weight, texture and key region.</p>',
      devices: ['texture change'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Report: novelty 0.82 at 0:14; level −8.8 dB at 0:15 and −7.2 dB at 0:20; local key D major from 0:15 to 0:35 (r = 0.82–0.89), A major again at 0:40. Mutopia transcription (SchumannOp15No06.ly) shows D-major chords and a G natural in the middle section. Score p. 10: ff at the repeat sign that begins the second section; falling left-hand figures in the third system.',
    },
    {
      id: 'return-of-the-announcement',
      title: 'The repeat ends and the opening returns',
      from: 'B · ff, played twice',
      to: 'A′ · the announcement again',
      at: { t: 40 },
      span: [32, 48],
      how: '<p>The closing repeat sign sends the music back through the ff section once; after its second pass the opening march returns, marked <i>f</i> as at the start, and the piece closes on the music it began with.</p>',
      devices: ['retransition', 'motivic link'],
      basis: 'audio-feature',
      precision: 'passage',
      evidence: 'Report: novelty 1.00 at 0:40 and 0.68 at 0:46; level −11.2 dB at 0:40. Score p. 10, fourth system: closing repeat sign followed by f and the opening music.',
    },
  ],
};
