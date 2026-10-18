export default {
  "id": "debussy-childrens-corner-snow-dancing",
  "composer": "debussy",
  "order": 33,
  "work": "Children’s Corner",
  "movement": "IV. The Snow Is Dancing",
  "set": {
    "id": "debussy-childrens-corner",
    "title": "Children’s Corner",
    "part": 4,
    "of": 6
  },
  "year": "1906–08",
  "key": "D minor",
  "forces": "Piano",
  "performers": "Robert Casadesus, piano",
  "recorded": "11 April 1950, Columbia 30th Street Studio, New York; LP published 1951",
  "source": {
    "archive": {
      "item": "lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0",
      "file": "disc1/02.04. Children's Corner Suite: The Snow Is Dancing.mp3"
    },
    "rights": {
      "basis": "eu-published-before-1963",
      "published": 1951,
      "evidence": "Columbia Masterworks ML 4366, 1951; Internet Archive item metadata and original carrier: https://archive.org/details/lp_childrens-corner-suite-forest-scenes-o_claude-debussy-robert-schumann-robert-c_0. Territorial EU basis; US status not established."
    }
  },
  "intro": "Tiny alternating notes keep the surface in motion while longer notes form a quieter line within it. Rather than treating every flurry as a new event, follow what remains still, what repeats and what gradually gathers weight.",
  "question": "How can the same piano texture suggest both movement and stillness?",
  "sections": [
    { "t": 0, "label": "A · Interlocking motion", "m": "A", "mNote": "short alternating notes surround longer melodic tones" },
    { "t": 44, "label": "B · Repetition and pressure", "m": "B", "mNote": "repeated figures and conflicting groupings intensify the motion" },
    { "t": 84, "label": "A′ · The flurry recedes", "m": "A′", "mNote": "opening interlocking figures return and gradually lose weight" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "Two hands, one flickering surface", "text": "The opening’s short notes alternate between the hands. Listen to them as one continuous surface, then search for the longer tones that emerge within it. The changing harmony can be felt even when the pattern of movement stays similar.", "basis": "score-proportion", "precision": "passage", "evidence": "Viewed Durand score, printed pp. 16–17: alternating semiquavers, doux et estompé and longer notes within the texture. The report shows the opening building from its low initial level to a strong change at 0:22. Score: https://s9.imslp.org/files/imglnks/usimg/0/0d/IMSLP252526-PMLP02387-Debussy%2C_Claude-Childrens_Corner_Durand_7188_filter.pdf" },
    { "t": 32, "kind": "listen", "title": "A line inside the weather", "text": "A longer melodic line can sound almost motionless beside the quick notes around it. Try following its sustained tones across the little attacks, rather than allowing the busiest part of the texture to claim all your attention.", "basis": "general", "precision": "passage", "evidence": "Viewed score p. 17 marks the longer upper line doux et triste against continued movement. The report’s louder 0:25–0:40 region anchors this early expansion, but the cue is a general invitation to hear the layered writing, not a timed melodic entrance." },
    { "t": 65, "kind": "world", "title": "An old engraving, a later impression", "text": "Durand published Children’s Corner in 1908. The score consulted here preserves that engraving, but its final page bears a February 1952 printing date. A score’s original publication and the date of the surviving printed copy need not be the same.", "basis": "documented", "precision": "passage", "evidence": "The work catalogue gives the 1908 Durand publication and plate D. & F. 7188: https://imslp.org/wiki/Children%27s_Corner%2C_CD_119_%28Debussy%2C_Claude%29. The opened score has 1908 copyright notices and Février 1952 on printed p. 28. It is not described here as a physically first-issue copy." },
    { "t": 100, "kind": "music", "title": "Motion dwindles without stopping", "text": "As the opening pattern returns, the music gradually loses weight. Debussy’s closing instructions combine dying-away sound with “without holding back”: the flurry should fade without being turned into a heavy procession of final notes.", "basis": "score-proportion", "precision": "passage", "evidence": "Viewed score pp. 20–21 supplies the restored interlocking figures, molto pp e perdendo and Sans retenir. The report has a quieter 1:25–1:30 region and a final decline after 1:45, reaching very low levels at 1:55–2:00. No beat-by-beat slowing or pedal release is inferred." }
  ],
  "transitions": [
    {
      "id": "into-repeated-figures",
      "title": "The flickering pattern meets another rhythm",
      "from": "A · Interlocking motion",
      "to": "B · Repetition and pressure",
      "at": { "t": 44 },
      "span": [34, 58],
      "how": "<p>The regular alternation between the hands gives way to passages of repeated upper notes, including triplets against the lower part’s straighter divisions. Debussy briefly asks the motion to yield, then restores it. The changing rhythmic groupings disturb the smooth surface without abandoning small repeated figures; later accents and fuller writing increase the pressure before the quieter return.</p>",
      "devices": ["texture change", "tempo change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Viewed Durand score pp. 18–19 supplies Cédez un peu, triplets against the lower movement, Au Mouvement and later accents. The report identifies changes at 0:40, 0:44 and 0:58, with level dropping after 0:40. The join describes a surrounding passage, not a precise first triplet."
    },
    {
      "id": "into-receding-flurry",
      "title": "The opening motion sheds its weight",
      "from": "B · Repetition and pressure",
      "to": "A′ · The flurry recedes",
      "at": { "t": 84 },
      "span": [74, 98],
      "how": "<p>After the accented, fuller passage, a running link leads back to the opening’s interlocking notes. The return is quieter: the hands recover their alternating movement while the music gradually rises into a thinner register and loses strength. The figure supplies continuity all the way towards the final held harmony; the ending comes through diminishing motion and sound, not through a separate closing melody.</p>",
      "devices": ["link passage", "motivic link", "texture change", "register change", "decrescendo"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Viewed score pp. 20–21 supplies the running link, restored opening texture and thinning close. The report shows a strong 1:15 window followed by falling level at 1:20–1:30, with a change at 1:24. That change anchors the approximate return, not a timestamped chord."
    }
  ]
};
