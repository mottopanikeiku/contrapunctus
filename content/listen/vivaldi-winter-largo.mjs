export default {
  "id": "vivaldi-winter-largo",
  "composer": "vivaldi",
  "order": 5,
  "work": "The Four Seasons · Winter, RV 297",
  "movement": "II. Largo",
  "set": {
    "id": "vivaldi-winter",
    "title": "The Four Seasons · Winter, RV 297",
    "part": 2,
    "of": 3
  },
  "year": "1725, publication",
  "key": "E♭ major",
  "forces": "Solo violin, strings and continuo",
  "performers": "John Harrison, violin; Wichita State University Chamber Players; Robert Turizziani, conductor",
  "recorded": "6 February 2000",
  "license": "CC BY-SA 4.0",
  "source": {
    "file": "File:11 - Vivaldi Winter mvt 2 Largo - John Harrison violin.ogg"
  },
  "intro": "The Largo of “Winter”, RV 297, from Vivaldi’s <i>The Four Seasons</i>, sets the solo violin by the fire while the orchestral violins play the rain against the window. Vivaldi wrote the raindrops pizzicato and forte, with the bass kept quiet beneath them.",
  "sections": [
    { "t": 0, "label": "A · Solo violin over pizzicato, Largo", "m": "A", "mNote": "Bowed solo violin above pizzicato violins and bass." },
    { "t": 58, "label": "A′ · Opening melody returns from B♭", "m": "A′", "mNote": "The opening tune returns in B♭ and moves towards E♭." },
    { "t": 114, "label": "Coda · Solo E♭ over pizzicato violins", "m": "Coda" }
  ],
  "cues": [
    {
      "bar": { "n": "1", "occ": 1 },
      "kind": "music",
      "title": "Winter sonnet, letter E",
      "text": "“Passar al foco i dì quieti e contenti” (“To spend the days by the fire, peaceful and content.”) The 1725 sonnet moves the scene indoors. The solo violin plays in E♭ major over plucked violin notes, and the bass is marked always quiet.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Winter sonnet, letter E; translation ours. Mutopia score after Performers’ Facsimiles, II, opening bars, bass marked Sempre Piano: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351. Italian text also at https://en.wikipedia.org/wiki/The_Four_Seasons_(Vivaldi)."
    },
    {
      "bar": { "n": "9", "occ": 1 },
      "kind": "music",
      "title": "Pizzicato rain, orchestral violins",
      "text": "“Mentre la pioggia fuor bagna ben cento” — “While outside the rain soaks a hundred others.” The orchestral violins play pizzicato throughout. After its first cadence in B♭ major, the solo melody starts again from B♭ and moves back towards E♭.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Winter sonnet, 1725, letter E; translation ours. Italian text at https://nac-cna.ca/en/event/notes/36996; Mutopia score, II, bars 8–16, with La Pioggia and Pizziccati forte in the orchestral violins."
    },
    {
      "t": 85,
      "kind": "life",
      "title": "Letter to Guido Bentivoglio, 1737",
      "text": "In November 1737 Vivaldi wrote to his patron Guido Bentivoglio that he had not said Mass in twenty-five years. The cause was a chest ailment he had had from birth, his “strettezza di petto”. He was ordained in 1703 and stopped saying Mass after leaving the altar three times before the end of the service.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Vivaldi to Marchese Guido Bentivoglio, Venice, 16 November 1737, in Karl Heller, <i>Antonio Vivaldi: The Red Priest of Venice</i> (Amadeus Press, 1997), Appendix, letter 5, pp. 287–288: no Mass in twenty-five years, “the ailment from which I have suffered from birth”, three departures from the altar, “constriction of the chest”. Michael Talbot, Dizionario Biografico degli Italiani, gives the phrase “strettezza di petto” and the ordination in March 1703. https://www.treccani.it/enciclopedia/antonio-vivaldi_%28Dizionario-Biografico%29/"
    },
    {
      "bar": { "n": "16", "occ": 1 },
      "kind": "form",
      "title": "Closing bars, solo E♭",
      "text": "The solo violin reaches E♭ and holds it through the last bars. Below, the orchestral violins continue their plucked semiquavers, the rain of the movement. They stop only at the final fermata, where they hold the chord.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Mutopia score, II, bars 16–18: the solo E♭ is tied across the closing bars, and the orchestral violin semiquavers end at the final fermata: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351."
    }
  ],
  "transitions": [
    {
      "id": "varied-continuation",
      "title": "The melody begins again on B♭",
      "from": "A · Solo violin over pizzicato, Largo",
      "to": "A′ · Opening melody returns from B♭",
      "at": { "t": 58 },
      "how": "<p>At the end of the first eight bars the solo’s C trill resolves to B♭. The melody then begins again on B♭, a fourth below its original E♭. The plucked violins and the quiet bass continue underneath, and the altered second half leads back to E♭ major.</p>",
      "devices": ["perfect cadence", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, II, bars 7–16; the two-phrase design is described at https://www.teoria.com/en/articles/2022/vivaldi-seasons/inverno/02.php."
    },
    {
      "id": "closing-tonic",
      "title": "Held solo E♭ over pizzicato arpeggios",
      "from": "A′ · Opening melody returns from B♭",
      "to": "Coda · Solo E♭ over pizzicato violins",
      "at": { "t": 114 },
      "how": "<p>The solo’s D rises to E♭ and is held. Beneath the held note the orchestral violins continue their pizzicato E♭ major arpeggios until the final fermata.</p>",
      "devices": ["perfect cadence", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, II, bars 16–18: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351."
    }
  ],
  "orchestra": {
    "ensemble": [
      "solo-violin",
      "violins-1",
      "violins-2",
      "violas",
      "cellos",
      "basses"
    ],
    "solo": "solo-violin",
    "basis": "score-proportion",
    "source": {
      "title": "Vivaldi, The Four Seasons — Mutopia score after Performers’ Facsimiles",
      "url": "https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351",
      "locator": "II. Largo, all 18 bars; stable bowed-solo / pizzicato-violin / quiet-bass texture. Passage-level participation, not individual attack alignment; cellos/basses represent the written basso part, with no claim about keyboard realization."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin"
        ],
        "note": "The solo violin plays the melody above plucked orchestral violins and quieter accompanying strings. The diagram shows the texture that holds for most of the movement; not every part plays throughout."
      }
    ]
  }
};
