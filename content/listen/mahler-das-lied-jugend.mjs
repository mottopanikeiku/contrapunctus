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
  "intro": "Friends drink, talk and write verses in a green-and-white porcelain pavilion. Mahler paints this small scene with bright woodwinds, then turns it upside down in the pond.",

  "sections": [
    { "t": 0, "label": "A · A porcelain pavilion", "m": "A", "mNote": "Woodwind trills and bouncing strings surround the tenor" },
    { "t": 50, "label": "B · Friends drinking and writing verses", "m": "B", "mNote": "G major brings chattering clarinets and a muted trumpet" },
    { "t": 102, "label": "C · The pavilion in the pond", "m": "C", "mNote": "The pace eases in G minor beneath a solo violin" },
    { "t": 164, "label": "A′ · Everything standing on its head", "m": "A′", "mNote": "The first tempo returns with the reflected scene" },
  ],

  "cues": [
    { "t": 0, "kind": "music", "title": "A pavilion made of woodwinds", "text": "A horn note and a touch of triangle open this tiny scene. Flutes, oboe and clarinets trade trills and quick, neat figures. When the tenor describes the porcelain pavilion, violins and violas join him with a bouncing bow-stroke.", "basis": "score-proportion", "precision": "passage", "evidence": "Universal Edition full score, pp. 51–52, opening and rehearsal figure 2: winds, horn and triangle, followed by tenor and saltando strings. https://s9.imslp.org/files/imglnks/usimg/6/65/IMSLP20582-PMLP47886-Mahler_-_Das_Lied_von_der_Erde_(orch._score).pdf" },
    { "t": 50, "kind": "form", "title": "Sleeves rolled up for verses", "text": "The music turns to G major, with chattering clarinets and a muted trumpet. Inside the little pavilion, friends drink, talk and write verses. Their silk sleeves are pushed back; their caps sit low on their necks.", "basis": "score-proportion", "precision": "passage", "evidence": "Full score, pp. 53–56, figures 5–9: G-major signature, muted trumpet and the friends’ scene. German text and its earlier versions: http://www.mahlerarchives.net/Archive%20documents/DLvDE/Der_Jugend.htm" },
    { "t": 80, "kind": "world", "title": "A pavilion that never stood", "text": "The porcelain pavilion began as a mistranslation. Li Bai’s poem is called “Banquet at Tao’s Family Pavilion”, and the Chinese word for the surname Tao can also mean porcelain. Judith Gautier’s French turned the family’s house into china; Bethge and Mahler kept it.", "basis": "documented", "precision": "passage", "evidence": "Mahler Archives, Von der Jugend page, gives Li Bai’s “Banquet at Tao’s Family Pavilion”, Gautier’s mistranslation of the double-meaning character and her French “Le pavillon de porcelaine”, with Bethge’s and Mahler’s texts: http://www.mahlerarchives.net/Archive%20documents/DLvDE/Der_Jugend.htm" },
    { "t": 102, "kind": "form", "title": "The pond becomes a mirror", "text": "A solo violin sings above rocking strings as the music slows into G minor. The tenor describes the pond’s still surface. Everything the song has shown us is there again, reflected in the water.", "basis": "score-proportion", "precision": "passage", "evidence": "Full score, pp. 57–58, figure 10, Ruhiger: solo violin, rocking strings and the tenor’s words about the reflection." },
    { "t": 135, "kind": "life", "title": "Toblach, summer 1908", "text": "Mahler composes the songs largely in the summer of 1908, forbidden the long walks he needs. From Bethge’s 83 paraphrases of 38 poets he chooses seven. In early September he reports to Bruno Walter: “I was very diligent … I believe it is the most personal thing I have yet created.”", "basis": "documented", "precision": "passage", "evidence": "Stephen E. Hefling’s introduction for Universal Edition, March 2010, gives the doctors’ restrictions, the 83 paraphrases of 38 poets, the seven chosen and Mahler’s letter to Walter of early September 1908: https://www.universaledition.com/en/Works/Das-Lied-von-der-Erde/P0109538" },
    { "t": 164, "kind": "form", "title": "The bridge turns upside down", "text": "The first tempo returns suddenly in B♭ major, and the strings take off their mutes. In the tenor’s words, everything stands on its head: pavilion, friends and the bridge, whose reflected arch becomes a half-moon.", "basis": "score-proportion", "precision": "passage", "evidence": "Full score, pp. 59–60, figure 14: Tempo I subito, Dämpfer ab and the reordered final stanzas. Mahler Archives prints Mahler’s text beside Bethge’s." },
  ],

  "transitions": [
    { "id": "into-friends", "title": "A muted trumpet in G major", "from": "A · A porcelain pavilion", "to": "B · Friends drinking and writing verses", "at": { "t": 50 }, "span": [38, 64], "how": "<p>Oboes and clarinets carry the quick figures out of B♭ major. At rehearsal figure 5 the signature changes to G major: a muted trumpet joins the woodwinds, clarinets repeat little chords and the triangle keeps shimmering. The tenor enters a few bars later with the friends in the pavilion.</p>", "devices": ["direct modulation", "link passage", "orchestration change"], "basis": "score-proportion", "precision": "passage", "evidence": "Universal Edition full score, pp. 52–54, figures 5–6." },
    { "id": "into-reflection", "title": "A solo violin darkens the pond", "from": "B · Friends drinking and writing verses", "to": "C · The pavilion in the pond", "at": { "t": 102 }, "span": [90, 116], "how": "<p>The woodwind figures subside while a solo violin carries a longer line. At <i>Ruhiger</i>, G turns from major to minor. The strings rock quietly beneath the violin, and the tenor begins to describe the scene’s reflection.</p>", "devices": ["tempo change", "texture change", "direct modulation"], "basis": "score-proportion", "precision": "passage", "evidence": "Full score, p. 57, figure 10: Ruhiger, solo violin and the change to G minor." },
    { "id": "into-return", "title": "The mutes come off", "from": "C · The pavilion in the pond", "to": "A′ · Everything standing on its head", "at": { "t": 164 }, "span": [138, 178], "how": "<p>Repeated ritardandos slow the strings almost to a halt. <i>Tempo I subito</i> brings the opening pace back at once, with flutes and oboes in B♭ major. The strings remove their mutes and resume their bouncing accompaniment as the tenor describes the world standing on its head.</p>", "devices": ["tempo change", "motivic link", "retransition"], "basis": "score-proportion", "precision": "passage", "evidence": "Full score, pp. 58–59, figures 11–14, successive slowing and Tempo I subito." },
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
      { "t": 6, "playing": ["flutes", "oboes", "horns", "percussion"], "lead": ["flutes", "oboes"], "note": "Second flute and oboe weave a quick figure over the horn." },
      { "t": 14, "playing": ["piccolo", "flutes", "oboes", "clarinets", "horns", "percussion"], "lead": ["piccolo", "flutes", "clarinets"], "note": "Piccolo, flutes and clarinets trade trills above the horn’s repeated notes." },
      { "t": 26, "playing": ["flutes", "oboes", "clarinets", "bassoons", "violins-1", "violins-2", "violas", "solo-voice"], "lead": ["solo-voice"], "note": "The tenor enters with bouncing bow-strokes in violins and violas." },
      { "t": 50, "playing": ["oboes", "clarinets", "bassoons", "horns", "trumpets", "percussion", "cellos", "basses"], "lead": ["clarinets", "bassoons"], "note": "G major brings chattering clarinets, a muted trumpet and triangle." },
      { "t": 62, "playing": ["flutes", "clarinets", "percussion", "violins-1", "violins-2", "violas", "cellos", "solo-voice"], "lead": ["solo-voice"], "note": "Violins and violas bow near the fingerboard beneath the friends’ conversation." },
      { "t": 80, "playing": ["piccolo", "flutes", "oboes", "clarinets", "bassoons", "horns", "percussion", "violins-1", "violins-2", "violas", "cellos", "basses", "solo-violin", "solo-voice"], "lead": ["solo-violin", "solo-voice"], "note": "A solo violin rises above the tenor and the other strings." },
      { "t": 102, "playing": ["flutes", "oboes", "clarinets", "bassoons", "violins-1", "violins-2", "violas", "cellos", "basses", "solo-violin", "solo-voice"], "lead": ["solo-violin", "solo-voice"], "note": "At Ruhiger, rocking strings support the solo violin and tenor." },
      { "t": 126, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "violins-2", "violas", "cellos", "basses", "solo-voice"], "lead": ["solo-voice"], "note": "The tenor’s reflection scene slows over held winds and plucked basses." },
      { "t": 164, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "percussion", "violins-1", "violins-2", "violas", "cellos", "solo-voice"], "lead": ["solo-voice"], "note": "Flutes and oboes restore the first tempo; unmuted strings accompany the tenor." },
      { "t": 186, "playing": ["piccolo", "flutes", "oboes", "clarinets", "violins-1", "violins-2", "violas"], "lead": ["flutes", "violins-1"], "note": "Woodwinds and upper strings hold the final pianississimo chord." },
    ],
  },
};
