export default {
  "id": "vivaldi-spring-largo",
  "composer": "vivaldi",
  "order": 2,
  "work": "The Four Seasons · Spring, RV 269",
  "movement": "II. Largo",
  "set": {
    "id": "vivaldi-spring",
    "title": "The Four Seasons · Spring, RV 269",
    "part": 2,
    "of": 3
  },
  "year": "1725, publication",
  "key": "C♯ minor",
  "forces": "Solo violin, two violin parts and viola; continuo silent",
  "performers": "John Harrison, violin; Wichita State University Chamber Players; Robert Turizziani, conductor",
  "recorded": "6 February 2000",
  "license": "CC BY-SA 4.0",
  "source": {
    "file": "File:Vivaldi - Four Seasons 1 Spring mvt 2 Largo - John Harrison violin.oga"
  },
  "intro": "A goatherd sleeps while leaves rustle and his dog barks beside him. Vivaldi puts all three in the strings: the solo violin dreams, the orchestral violins murmur, and the viola refuses to keep quiet.",
  "sections": [
    { "t": 0, "label": "A · The sleeping goatherd", "m": "A", "mNote": "Solo violin over rustling violins and the viola’s bark" },
    { "t": 32, "label": "B · The melody reaches G♯ minor", "m": "B", "mNote": "Long violin notes above a descending-fifths progression" },
    { "t": 85, "label": "A′ · The opening tune returns", "m": "A′", "mNote": "G♯–E–C♯ again, with the same rustling accompaniment" },
    { "t": 102, "label": "C · The violin climbs higher", "m": "C", "mNote": "The solo reaches a high C♯ before coming down" },
    { "t": 146, "label": "C′ · A repeated C♯-minor cadence", "m": "C′", "mNote": "The solo finishes; the accompanying strings continue" }
  ],
  "cues": [
    {
      "bar": { "n": "1", "occ": 1 },
      "kind": "music",
      "title": "Leaves over a sleeping man",
      "text": "“E quindi Sul fiorito ameno prato / Al caro mormorio di fronde e piante” — “And then, on the pleasant flowered meadow, to the gentle murmur of leaves and plants.” Vivaldi’s 1725 sonnet places the goatherd under trees. Two violin parts rustle in dotted rhythms; the solo melody begins above them.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Spring sonnet, letter F; translation ours. Mutopia score after Performers’ Facsimiles, II, bars 1–7: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=301. The sonnets were published anonymously with Op. 8."
    },
    {
      "bar": { "n": "8", "occ": 1 },
      "kind": "music",
      "title": "The dog stays awake",
      "text": "“Dorme’l Caprar col fido can’ à lato” — “The goatherd sleeps with his faithful dog beside him.” The viola supplies the bark: two notes, then a rest, marked always very loud and sharply attacked. The continuo is silent throughout. There is nowhere for this dog to hide.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Spring sonnet, 1725, letter F; translation ours. Mutopia score, II: viola marked Il Cane che grida and sempre molto forte, e Strappato; continuo tacet for all 39 bars: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=301."
    },
    {
      "bar": { "n": "20", "occ": 1 },
      "kind": "form",
      "title": "G♯, E, C♯ again",
      "text": "After a cadence in G♯ minor and a bar’s rest, the solo violin returns to its opening three notes: G♯, E, C♯. The leaves have kept rustling through the pause. This time the melody takes a shorter path to C♯ minor.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Mutopia score, II, bars 18–23; the solo rests in bar 19 and restates its opening in bar 20. José Rodríguez Alvira identifies the third phrase as a variation of the first: https://www.teoria.com/en/articles/2021/vivaldi-seasons/primavera/02.php."
    },
    {
      "t": 112,
      "kind": "world",
      "title": "The girls’ concerts of Venice",
      "text": "In 1739 the French traveller Charles de Brosses writes home about Venice’s four girls’ hospitals: concerts of some forty young women, one conducting in a white habit with a bunch of pomegranates at her ear. His favourite is the Pietà, where Vivaldi became violin master in 1703.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Charles de Brosses, letter XVIII to M. de Blancey, 29 August (1739), <i>Lettres familières écrites d’Italie</i> (ed. Hippolyte Babou, Poulet-Malassis et de Broise, 1858, vol. 1, pp. 141–148): concerts of about forty girls, the young woman in white conducting with pomegranates by her ear, and the Pietà as his favourite and the first for its symphonies; translation ours. https://fr.wikisource.org/wiki/Lettres_famili%C3%A8res_%C3%A9crites_d%E2%80%99Italie_T.1/%C3%80_M._DE_BLANCEY._%E2%80%94_Suite_du_s%C3%A9jour_%C3%A0_Venise Vivaldi became violin master at the Pietà in September 1703: Michael Talbot, Dizionario Biografico degli Italiani. https://www.treccani.it/enciclopedia/antonio-vivaldi_%28Dizionario-Biografico%29/"
    },
    {
      "bar": { "n": "34", "occ": 1 },
      "kind": "form",
      "title": "The goatherd sleeps on",
      "text": "The violin repeats its last approach to C♯, with a trill on D♯ just before the resolution. It finishes before the other strings. The murmuring violins and the dog’s two-note bark continue for another bar before the accompanying strings hold the final chord.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Mutopia score, II, bars 34–39: solo cadence in bars 36–37, solo rests in bars 38–39, accompaniment continuing to the final fermata: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=301."
    }
  ],
  "transitions": [
    {
      "id": "phrase-two",
      "title": "The viola walks through fifths",
      "from": "A · The sleeping goatherd",
      "to": "B · The melody reaches G♯ minor",
      "at": { "t": 32 },
      "how": "<p>The solo violin repeats its opening G♯–E–C♯, then stretches into longer notes. Underneath, the viola’s barking figure moves through a descending-fifths progression towards G♯ minor. The orchestral violins keep their soft dotted rhythm; the cello remains silent.</p>",
      "devices": ["sequence", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, II, bars 8–18; the fifths progression and G♯-minor destination are shown by Rodríguez Alvira: https://www.teoria.com/en/articles/2021/vivaldi-seasons/primavera/02.php."
    },
    {
      "id": "varied-return",
      "title": "The tune wakes from its rest",
      "from": "B · The melody reaches G♯ minor",
      "to": "A′ · The opening tune returns",
      "at": { "t": 85 },
      "how": "<p>The solo holds G♯ at the cadence, then rests for a bar. Its opening G♯–E–C♯ returns over C♯ in the viola. The two accompanying violin parts continue rustling across the pause, so the returning melody arrives inside a sound already in motion.</p>",
      "devices": ["motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, II, bars 18–23: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=301."
    },
    {
      "id": "fourth-phrase",
      "title": "The violin reaches upwards",
      "from": "A′ · The opening tune returns",
      "to": "C · The violin climbs higher",
      "at": { "t": 102 },
      "how": "<p>The solo starts again with G♯–E–C♯ over C♯ in the viola, then rises to A. The viola moves to F♯ and D♯ beneath the longer phrase. The violin climbs as high as C♯ before descending towards its final cadence.</p>",
      "devices": ["sequence", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, II, bars 24–33, solo violin and viola; harmonic progression discussed at https://www.teoria.com/en/articles/2021/vivaldi-seasons/primavera/02.php."
    },
    {
      "id": "closing-repetition",
      "title": "The cadence comes round again",
      "from": "C · The violin climbs higher",
      "to": "C′ · A repeated C♯-minor cadence",
      "at": { "t": 146 },
      "how": "<p>The solo repeats C♯–F♯–A from the preceding phrase. Its D♯ trill resolves to C♯ over the viola’s G♯–C♯ cadence. The violin then rests while the accompanying parts finish their rustling and barking on a held C♯-minor chord.</p>",
      "devices": ["motivic link", "perfect cadence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, II, bars 30–39: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=301."
    }
  ],
  "orchestra": {
    "ensemble": [
      "solo-violin",
      "violins-1",
      "violins-2",
      "violas"
    ],
    "solo": "solo-violin",
    "basis": "documented",
    "source": {
      "title": "Vivaldi, Spring, RV 269 — Mutopia 301, after Performers’ Facsimiles",
      "url": "https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=301",
      "locator": "II. Largo, all 39 bars. The continuo is marked tacet; this stable-texture overview does not claim that each part plays every instant."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas"
        ],
        "lead": [
          "solo-violin"
        ],
        "note": "The solo melody, rustling accompanying violins and viola figure remain the movement’s three layers; continuo is silent."
      }
    ]
  }
};
