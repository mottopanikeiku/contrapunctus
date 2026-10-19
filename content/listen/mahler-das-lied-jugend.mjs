export default {
  id: 'mahler-das-lied-jugend',
  composer: 'mahler',
  order: 42,
  set: { id: 'mahler-das-lied-von-der-erde', title: 'Das Lied von der Erde', part: 3, of: 6 },
  work: 'Das Lied von der Erde',
  movement: 'III. Von der Jugend — Behaglich heiter',
  year: '1908–09',
  key: 'B♭ major',
  forces: 'Tenor and orchestra',
  performers: 'Carl Martin Öhmann, tenor; Concertgebouw Orchestra, Amsterdam; Carl Schuricht (live; Kerstin Thorborg sings the alto songs of the same concert)',
  recorded: '5 October 1939',
  source: {
    archive: {
      item: '06-das-lied-von-der-erde-mahler-concertgebouw-amsterdam-carl-schuricht-5.-x.-193',
      file: '03 - Das Lied von der Erde (Mahler) - Concertgebouw Amsterdam Carl SCHURICHT (5.X.1939) - Carl Martin ÖHMANN (Tenor) - 5.Von der Jugend.mp3',
    },
  },
  "intro": "“Von der Jugend”, marked “Behaglich heiter”, is the third song of Mahler’s Das Lied von der Erde. Friends drink, talk and write verses in a green-and-white porcelain pavilion, and Mahler sets the scene with bright woodwinds before it appears upside down, reflected in the pond.",

  "sections": [
    { "t": 0, "label": "A · A porcelain pavilion", "m": "A", "mNote": "Woodwind trills and bouncing strings accompany the tenor." },
    { "t": 50, "label": "B · Friends drinking and writing verses", "m": "B", "mNote": "G major; clarinets and muted trumpet enter" },
    { "t": 102, "label": "C · Pavilion in the pond, G minor", "m": "C", "mNote": "The tempo slows in G minor under a solo violin." },
    { "t": 164, "label": "A′ · First tempo returns, reflected scene", "m": "A′", "mNote": "The first tempo returns with the reflected scene." },
  ],

  "cues": [
    { "t": 0, "kind": "music", "title": "Opening, winds, horn and triangle", "text": "The movement opens with a horn note and the triangle. Flutes, oboe and clarinets exchange trills and short, quick figures. When the tenor describes the porcelain pavilion, violins and violas enter with a bouncing bow-stroke.", "basis": "score-proportion", "precision": "passage", "evidence": "Universal Edition full score, pp. 51–52, opening and rehearsal figure 2: winds, horn and triangle, followed by tenor and saltando strings. https://s9.imslp.org/files/imglnks/usimg/6/65/IMSLP20582-PMLP47886-Mahler_-_Das_Lied_von_der_Erde_(orch._score).pdf" },
    { "t": 50, "kind": "form", "title": "G-major section, figures 5–9", "text": "At figure 5 the music moves to G major, with clarinets and a muted trumpet. Inside the little pavilion, friends drink, talk and write verses. Their silk sleeves are pushed back, and their caps sit low on their necks.", "basis": "score-proportion", "precision": "passage", "evidence": "Full score, pp. 53–56, figures 5–9: G-major signature, muted trumpet and the friends’ scene. German text and its earlier versions: http://www.mahlerarchives.net/Archive%20documents/DLvDE/Der_Jugend.htm" },
    { "t": 80, "kind": "world", "title": "Source of the porcelain pavilion", "text": "The porcelain pavilion came from a mistranslation. Li Bai’s poem is called “Banquet at Tao’s Family Pavilion”, and the Chinese word for the surname Tao can also mean porcelain. Judith Gautier’s French made the family’s house into porcelain, and Bethge and Mahler kept her reading.", "basis": "documented", "precision": "passage", "evidence": "Mahler Archives, Von der Jugend page, gives Li Bai’s “Banquet at Tao’s Family Pavilion”, Gautier’s mistranslation of the double-meaning character and her French “Le pavillon de porcelaine”, with Bethge’s and Mahler’s texts: http://www.mahlerarchives.net/Archive%20documents/DLvDE/Der_Jugend.htm" },
    { "t": 102, "kind": "form", "title": "Ruhiger, G minor, figure 10", "text": "At figure 10, marked <i>Ruhiger</i>, the music slows into G minor and a solo violin plays above rocking strings. The tenor describes the still surface of the pond and the reflection in it.", "basis": "score-proportion", "precision": "passage", "evidence": "Full score, pp. 57–58, figure 10, Ruhiger: solo violin, rocking strings and the tenor’s words about the reflection." },
    { "t": 135, "kind": "life", "title": "Toblach, summer 1908", "text": "Mahler composed the songs largely in the summer of 1908, when he was forbidden the long walks he needed. From Bethge’s 83 paraphrases of 38 poets he chose seven. In early September he wrote to Bruno Walter: “I was very diligent … I believe it is the most personal thing I have yet created.”", "basis": "documented", "precision": "passage", "evidence": "Stephen E. Hefling’s introduction for Universal Edition, March 2010, gives the doctors’ restrictions, the 83 paraphrases of 38 poets, the seven chosen and Mahler’s letter to Walter of early September 1908: https://www.universaledition.com/en/Works/Das-Lied-von-der-Erde/P0109538" },
    { "t": 164, "kind": "form", "title": "Return of Tempo I, figure 14", "text": "At figure 14 the first tempo returns subito in B♭ major, and the strings remove their mutes. The tenor sings of the reflected scene standing on its head, with pavilion, friends and the bridge, whose arch becomes a half-moon.", "basis": "score-proportion", "precision": "passage", "evidence": "Full score, pp. 59–60, figure 14: Tempo I subito, Dämpfer ab and the reordered final stanzas. Mahler Archives prints Mahler’s text beside Bethge’s." },
  ],

  "transitions": [
    { "id": "into-friends", "title": "Muted trumpet at the move to G major", "from": "A · A porcelain pavilion", "to": "B · Friends drinking and writing verses", "at": { "t": 50 }, "span": [38, 64], "how": "<p>Oboes and clarinets carry the quick figures out of B♭ major. At rehearsal figure 5 the key signature changes to G major. A muted trumpet joins the woodwinds, the clarinets repeat short chords and the triangle continues. A few bars later the tenor enters with the friends in the pavilion.</p>", "devices": ["direct modulation", "link passage", "orchestration change"], "basis": "score-proportion", "precision": "passage", "evidence": "Universal Edition full score, pp. 52–54, figures 5–6." },
    { "id": "into-reflection", "title": "Solo violin and the turn to G minor", "from": "B · Friends drinking and writing verses", "to": "C · Pavilion in the pond, G minor", "at": { "t": 102 }, "span": [90, 116], "how": "<p>The woodwind figures subside as a solo violin plays a longer line. At <i>Ruhiger</i> (figure 10, p. 57 of the full score), G major changes to G minor. The strings play a rocking accompaniment beneath the violin, and the tenor begins to describe the reflection of the scene.</p>", "devices": ["tempo change", "texture change", "direct modulation"], "basis": "score-proportion", "precision": "passage", "evidence": "Full score, p. 57, figure 10: Ruhiger, solo violin and the change to G minor." },
    { "id": "into-return", "title": "The mutes come off", "from": "C · Pavilion in the pond, G minor", "to": "A′ · First tempo returns, reflected scene", "at": { "t": 164 }, "span": [138, 178], "how": "<p>Repeated ritardandos slow the strings to near standstill. At <i>Tempo I subito</i> the opening tempo returns at once, with flutes and oboes in B♭ major. The strings remove their mutes and resume their accompaniment figure as the tenor describes the world standing on its head.</p>", "devices": ["tempo change", "motivic link", "retransition"], "basis": "score-proportion", "precision": "passage", "evidence": "Full score, pp. 58–59, figures 11–14, successive slowing and Tempo I subito." },
  ],

  "orchestra": {
    "ensemble": ["piccolo", "flutes", "oboes", "clarinets", "bassoons", "horns", "trumpets", "percussion", "violins-1", "violins-2", "violas", "cellos", "basses", "solo-violin", "solo-voice"],
    "basis": "score-proportion",
    "source": {
      "title": "Mahler, Das Lied von der Erde, III. Von der Jugend, full score (Universal Edition, 1912, plate U.E. 3637)",
      "url": "https://s9.imslp.org/files/imglnks/usimg/6/65/IMSLP20582-PMLP47886-Mahler_-_Das_Lied_von_der_Erde_(orch._score).pdf",
      "locator": "Printed pp. 51–60: woodwind opening; strings and tenor at figure 2; G major at figure 5; Ruhiger at figure 10; Tempo I subito at figure 14.",
    },
    "timeline": [
      { "t": 0, "playing": ["horns", "percussion"], "lead": ["horns"], "note": "A held horn note and soft triangle strokes open the song." },
      { "t": 6, "playing": ["flutes", "oboes", "horns", "percussion"], "lead": ["flutes", "oboes"], "note": "Second flute and oboe play a quick figure over the horn." },
      { "t": 14, "playing": ["piccolo", "flutes", "oboes", "clarinets", "horns", "percussion"], "lead": ["piccolo", "flutes", "clarinets"], "note": "Piccolo, flutes and clarinets trade trills above the horn’s repeated notes." },
      { "t": 26, "playing": ["flutes", "oboes", "clarinets", "bassoons", "violins-1", "violins-2", "violas", "solo-voice"], "lead": ["solo-voice"], "note": "The tenor enters with bouncing bow-strokes in violins and violas." },
      { "t": 50, "playing": ["oboes", "clarinets", "bassoons", "horns", "trumpets", "percussion", "cellos", "basses"], "lead": ["clarinets", "bassoons"], "note": "In G major, clarinets, a muted trumpet and triangle play." },
      { "t": 62, "playing": ["flutes", "clarinets", "percussion", "violins-1", "violins-2", "violas", "cellos", "solo-voice"], "lead": ["solo-voice"], "note": "Violins and violas bow near the fingerboard beneath the friends’ conversation." },
      { "t": 80, "playing": ["piccolo", "flutes", "oboes", "clarinets", "bassoons", "horns", "percussion", "violins-1", "violins-2", "violas", "cellos", "basses", "solo-violin", "solo-voice"], "lead": ["solo-violin", "solo-voice"], "note": "A solo violin plays above the tenor and the other strings." },
      { "t": 102, "playing": ["flutes", "oboes", "clarinets", "bassoons", "violins-1", "violins-2", "violas", "cellos", "basses", "solo-violin", "solo-voice"], "lead": ["solo-violin", "solo-voice"], "note": "At Ruhiger, the strings play a rocking figure under the solo violin and tenor." },
      { "t": 126, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "violins-2", "violas", "cellos", "basses", "solo-voice"], "lead": ["solo-voice"], "note": "The tenor’s reflection scene slows over held winds and plucked basses." },
      { "t": 164, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "percussion", "violins-1", "violins-2", "violas", "cellos", "solo-voice"], "lead": ["solo-voice"], "note": "Flutes and oboes restore the first tempo; unmuted strings accompany the tenor." },
      { "t": 186, "playing": ["piccolo", "flutes", "oboes", "clarinets", "violins-1", "violins-2", "violas"], "lead": ["flutes", "violins-1"], "note": "Woodwinds and upper strings hold the final pianississimo chord." },
    ],
  },
};
