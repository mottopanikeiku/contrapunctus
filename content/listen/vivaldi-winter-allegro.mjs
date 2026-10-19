export default {
  "id": "vivaldi-winter-allegro",
  "composer": "vivaldi",
  "order": 4,
  "work": "The Four Seasons · Winter, RV 297",
  "movement": "I. Allegro non molto",
  "set": {
    "id": "vivaldi-winter",
    "title": "The Four Seasons · Winter, RV 297",
    "part": 1,
    "of": 3
  },
  "year": "1725, publication",
  "key": "F minor",
  "forces": "Solo violin, strings and continuo",
  "performers": "John Harrison, violin; Wichita State University Chamber Players; Robert Turizziani, conductor",
  "recorded": "6 February 2000",
  "license": "CC BY-SA 4.0",
  "source": {
    "file": "File:Vivaldi - Four Seasons 4 Winter mvt 1 Allegro non molto - John Harrison violin.oga"
  },
  "intro": "Cold gets into the strings: first a shiver, then stamping feet and chattering teeth. Between them the solo violin sends gusts of demisemiquavers across the orchestra.",
  "sections": [
    { "t": 0, "label": "A · Shivering strings", "m": "A", "mNote": "Repeated notes gather from the bass upwards; the violin adds trills" },
    { "t": 38, "label": "B · The violin’s bitter wind", "m": "B", "mNote": "Rapid broken chords interrupt the shivering" },
    { "t": 58, "label": "A′ · Shivering turns to stamping", "m": "A′", "mNote": "Repeated quavers tighten into semiquavers and demisemiquavers" },
    { "t": 84, "label": "C · Solo runs and orchestral gusts", "m": "C", "mNote": "The violin travels from F minor towards E♭ major" },
    { "t": 122, "label": "A″ · Shivering in E♭ major", "m": "A″", "mNote": "The strings return with the refrain’s repeated notes" },
    { "t": 141, "label": "D · The violin chatters its teeth", "m": "D", "mNote": "Repeated semiquavers carry the solo back towards F minor" },
    { "t": 181, "label": "A′ · Stamping in F minor", "m": "A′", "mNote": "The full strings repeat the stamping music to close" }
  ],
  "cues": [
    {
      "bar": { "n": "1", "occ": 1 },
      "kind": "music",
      "title": "Cold from the ground up",
      "text": "“Aggiacciato tremar trà nevi algenti” — “To shiver, frozen, among icy snows.” The 1725 sonnet starts with a body in the cold. Repeated string notes build upwards from the bass; the solo violin joins with a trill on each short note.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Winter sonnet, letter A; translation ours. Mutopia score after Performers’ Facsimiles, I, bars 1–11: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351. The sonnets were published anonymously with Op. 8."
    },
    {
      "bar": { "n": "12", "occ": 1 },
      "kind": "music",
      "title": "The bitter wind",
      "text": "“Al Severo Spirar d’orrido Vento” — “In the harsh breath of a dreadful wind.” The solo violin breaks into demisemiquavers, leaping through broken chords and racing down scales. Short orchestral interruptions bring back the shivering.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Winter sonnet, 1725, letter B; translation ours. Mutopia score, I, bars 12–18, solo marked Orrido Vento: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351."
    },
    {
      "bar": { "n": "22", "occ": 1 },
      "kind": "music",
      "title": "Feet against the cold",
      "text": "“Correr battendo i piedi ogni momento” — “To run, stamping one’s feet at every moment.” Vivaldi squeezes the repeated notes closer together. Semiquavers sprout little bursts of demisemiquavers: the shivering body is trying to warm itself.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Winter sonnet, 1725, letter C; translation ours. Mutopia score, I, bars 20–26; the stamping inscription begins halfway through bar 22: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351."
    },
    {
      "bar": { "n": "47", "occ": 1 },
      "kind": "music",
      "title": "Teeth in the bow",
      "text": "“E pel Soverchio gel batter i denti” — “And to chatter one’s teeth from the excessive frost.” The solo violin repeats short notes under the words <i>Batter li denti</i>. The teeth keep chattering while the harmony passes through A♭ major and C minor towards F minor.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Winter sonnet, 1725, letter D; translation ours. Mutopia score, I, bars 47–56; harmonic route in José Rodríguez Alvira’s commentary: https://www.teoria.com/en/articles/2022/vivaldi-seasons/inverno/01.php."
    },
    {
      "bar": { "n": "56", "occ": 1 },
      "kind": "form",
      "title": "One last stamp",
      "text": "The full strings take over in F minor. Vivaldi brings back the stamping part of the refrain, with its rapid repeated notes, and drives it to the final cadence. The movement ends on its feet.",
      "basis": "score-aligned",
      "precision": "passage",
      "evidence": "Mutopia score, I, bars 56–63, final ritornello; its use of the stamping music is identified at https://www.teoria.com/en/articles/2022/vivaldi-seasons/inverno/01.php."
    }
  ],
  "transitions": [
    {
      "id": "wind-breaks-in",
      "title": "A C-minor gust",
      "from": "A · Shivering strings",
      "to": "B · The violin’s bitter wind",
      "at": { "t": 38 },
      "how": "<p>The shivering passage moves from F minor to C minor. The solo violin begins the wind on C, leaping an octave before racing through the notes of a C-minor chord. The orchestra interrupts with short returns of the shivering rhythm; the Allegro non molto marking remains.</p>",
      "devices": ["texture change", "register change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, I, bars 9–18; key change discussed at https://www.teoria.com/en/articles/2022/vivaldi-seasons/inverno/01.php."
    },
    {
      "id": "refrain-stamps",
      "title": "The shiver becomes a stamp",
      "from": "B · The violin’s bitter wind",
      "to": "A′ · Shivering turns to stamping",
      "at": { "t": 58 },
      "how": "<p>The wind returns to F minor and the full strings resume the repeated-note refrain. At bar 20 the violin turns its short quavers into semiquavers on F. Demisemiquaver bursts then break into that pulse under the inscription about running and stamping feet.</p>",
      "devices": ["motivic link", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, I, bars 18–26: https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=351."
    },
    {
      "id": "second-solo",
      "title": "The violin runs out of F minor",
      "from": "A′ · Shivering turns to stamping",
      "to": "C · Solo runs and orchestral gusts",
      "at": { "t": 84 },
      "how": "<p>The stamping strings release the soloist in F minor. Its demisemiquavers wind around F, E♮ and G before climbing higher. The orchestra keeps the shivering figure beneath it, then interrupts with bursts marked winds as the episode travels towards E♭ major.</p>",
      "devices": ["orchestration change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, I, bars 26–38; orchestral wind interruptions and E♭-major destination described at https://www.teoria.com/en/articles/2022/vivaldi-seasons/inverno/01.php."
    },
    {
      "id": "major-refrain",
      "title": "The strings shiver in E♭",
      "from": "C · Solo runs and orchestral gusts",
      "to": "A″ · Shivering in E♭ major",
      "at": { "t": 122 },
      "how": "<p>The solo episode reaches E♭ major. The full strings bring back the repeated-note refrain in that key, including its semiquaver version. Vivaldi saves the denser stamping figures for the final return in F minor.</p>",
      "devices": ["motivic link", "orchestration change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, I, bars 38–44; the refrain’s contents are identified at https://www.teoria.com/en/articles/2022/vivaldi-seasons/inverno/01.php."
    },
    {
      "id": "teeth-episode",
      "title": "The solo begins to chatter",
      "from": "A″ · Shivering in E♭ major",
      "to": "D · The violin chatters its teeth",
      "at": { "t": 141 },
      "how": "<p>The soloist leaves the E♭-major refrain and begins another rapid passage. At bar 47 repeated semiquavers carry the inscription <i>Batter li denti</i>. The episode passes through A♭ major and C minor before reaching F minor for the last tutti.</p>",
      "devices": ["orchestration change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, I, bars 44–56; harmonic itinerary at https://www.teoria.com/en/articles/2022/vivaldi-seasons/inverno/01.php."
    },
    {
      "id": "final-stamping",
      "title": "F minor under stamping feet",
      "from": "D · The violin chatters its teeth",
      "to": "A′ · Stamping in F minor",
      "at": { "t": 181 },
      "how": "<p>The solo episode reaches F minor and the full strings take up the stamping music. Rapid repeated notes alternate with broken chords. The final refrain keeps this denser part of the earlier tutti through to the F-minor cadence.</p>",
      "devices": ["motivic link", "orchestration change", "perfect cadence"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mutopia score, I, bars 56–63; final ritornello described at https://www.teoria.com/en/articles/2022/vivaldi-seasons/inverno/01.php."
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
      "locator": "I. Allegro non molto; opening staggered entries, solo passages and ritornellos. Passage-level participation, not individual attack alignment; cellos/basses represent the written basso part, with no claim about keyboard realization."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "cellos",
          "basses"
        ],
        "lead": [],
        "note": "Low repeated notes begin the opening accumulation."
      },
      {
        "t": 4,
        "playing": [
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "violas"
        ],
        "note": "The viola joins the repeated-note texture; timing is approximate."
      },
      {
        "t": 8,
        "playing": [
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "violins-2"
        ],
        "note": "The second violin part adds another layer; timing is approximate."
      },
      {
        "t": 12,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin",
          "violins-1"
        ],
        "note": "The upper violin parts complete the shivering texture, including the soloist’s trills."
      },
      {
        "t": 38,
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
        "note": "Wind solo with brief orchestral interruptions, not continuous full-string playing."
      },
      {
        "t": 58,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin",
          "violins-1"
        ],
        "note": "The refrain develops its stamping figure."
      },
      {
        "t": 84,
        "playing": [
          "solo-violin",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin"
        ],
        "note": "The next solo passage begins while orchestral upper strings rest."
      },
      {
        "t": 107,
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
        "note": "Orchestral wind interruptions enter the solo-led passage."
      },
      {
        "t": 122,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "violins-1"
        ],
        "note": "The refrain returns in E♭ major."
      },
      {
        "t": 141,
        "playing": [
          "solo-violin",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin"
        ],
        "note": "The soloist begins the later episode before the chattering figure."
      },
      {
        "t": 152,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin",
          "violins-1"
        ],
        "note": "Repeated semiquavers animate the chattering-teeth passage."
      },
      {
        "t": 181,
        "playing": [
          "solo-violin",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-violin",
          "violins-1"
        ],
        "note": "Full strings take the final stamping refrain."
      }
    ]
  }
};
