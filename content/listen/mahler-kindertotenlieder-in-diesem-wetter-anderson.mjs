export default {
  "id": "mahler-kindertotenlieder-in-diesem-wetter-anderson",
  "composer": "mahler",
  "order": 39,
  "set": {
    "id": "mahler-kindertotenlieder-anderson",
    "title": "Kindertotenlieder — Marian Anderson",
    "part": 5,
    "of": 5
  },
  "concert": false,
  "work": "Kindertotenlieder",
  "movement": "V. In diesem Wetter, in diesem Braus",
  "year": "1901–04",
  "key": "D minor → D major (written score; playback pitch unverified)",
  "forces": "Contralto and orchestra",
  "performers": "Marian Anderson, contralto; San Francisco Symphony Orchestra; Pierre Monteux, conductor",
  "recorded": "1950",
  "source": {
    "file": "File:Mahler - Kindertotenlieder, V (Anderson, Monteux, 1950).ogg"
  },
  "intro": "Marian Anderson sings the storm and the lullaby that end <i>Kindertotenlieder</i>, with Pierre Monteux and the San Francisco Symphony. The parent’s repeated protest finally becomes a song of shelter, accompanied by celesta and rocking strings.",
  "sections": [
    {
      "t": 0,
      "label": "A · Wind and the parent’s protest",
      "m": "A",
      "mNote": "Short wind phrases over trembling cellos"
    },
    {
      "t": 165,
      "label": "Link · The piccolo’s held note",
      "m": "Link",
      "mNote": "A small bell sounds as the strings slow"
    },
    {
      "t": 185,
      "label": "B · Celesta beneath the lullaby",
      "m": "B",
      "mNote": "Anderson repeats the weather words over rocking strings"
    },
    {
      "t": 275,
      "label": "Coda · The orchestra keeps watch",
      "m": "Coda",
      "mNote": "Bassoon and horns continue after the voice"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Restless winds, trembling cellos",
      "text": "The harp strikes sharply while flutes and clarinets toss short phrases across the muted strings. The cellos tremble beneath them. Mahler’s opening direction asks for restless pain; Anderson’s part must speak through this weather.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mahler, Kindertotenlieder, C. F. Kahnt full score, plate 4460 (1905), p. 60: Mit ruhelos schmerzvollem Ausdruck, muted strings, cello tremolos and harp accents. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    },
    {
      "t": 70,
      "kind": "world",
      "title": "The fears that come too late",
      "text": "Rückert’s parent worries that the children might fall ill, then that they might die tomorrow. Each fear collapses as soon as it is spoken. “Das sind nun eitle Gedanken” — those are idle thoughts now. The children have already been carried away.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Rückert, In diesem Wetter, second and third stanzas; German text at https://en.wikipedia.org/wiki/Kindertotenlieder#Text. Our translation."
    },
    {
      "t": 165,
      "kind": "form",
      "title": "The bell in the clearing",
      "text": "The piccolo holds high above the orchestra, and a small bell sounds in the gaps. The string phrases grow slower and shorter. This bridge carries Anderson’s final stanza out of the storm.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 78–79: rehearsal 8, piccolo, Glöckchen and Allmählich langsamer."
    },
    {
      "t": 185,
      "kind": "form",
      "title": "“Wie ein Wiegenlied”",
      "text": "“Wie ein Wiegenlied” — like a lullaby. Anderson returns to the same weather words over celesta and rocking strings. The children now rest as safely as in their mother’s house, “von Gottes Hand bedecket” — covered by God’s hand.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 79–84: Mahler’s marking and Rückert’s last stanza; our translations. The score moves from D minor to D major; this transfer’s playback pitch is unverified."
    },
    {
      "t": 275,
      "kind": "music",
      "title": "After Anderson’s last words",
      "text": "The violas keep the cradle moving after Anderson finishes. Bassoon and horns sing softly over divided cellos, and the celesta has the small descending figures of the last page. The final chord dwindles under a fermata.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 84–86, rehearsal 10 and the closing page: weich, Morendo dim. and the final fermata."
    },
    {
      "t": 315,
      "kind": "world",
      "title": "Five songs, no applause",
      "text": "On the score’s first page, Mahler calls the five songs “ein einheitliches, untrennbares Ganzes” — one unified, inseparable whole. He asks for their continuity to be preserved, including through the silence between songs, without applause.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Mahler’s performance instruction, C. F. Kahnt full score (1905), p. 3, footnote; our translation. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    }
  ],
  "transitions": [
    {
      "id": "storm-withdrawal",
      "title": "The piccolo holds above the bell",
      "from": "A · Wind and the parent’s protest",
      "to": "Link · The piccolo’s held note",
      "at": { "t": 165 },
      "span": [155, 177],
      "how": "<p>A held piccolo note stands above the small bell’s repeated taps. Harp chords and low bassoon notes remain below. The strings fall in diminishing waves under <i>Allmählich langsamer</i> — gradually slower — until the storm leaves room for the lullaby.</p>",
      "devices": ["decrescendo", "tempo change", "texture change", "link passage"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 78–79, rehearsal 8. The held note is written D; the transfer’s playback pitch is unverified. https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425"
    },
    {
      "id": "lullaby",
      "title": "The celesta takes up the cradle",
      "from": "Link · The piccolo’s held note",
      "to": "B · Celesta beneath the lullaby",
      "at": { "t": 185 },
      "span": [175, 197],
      "how": "<p>The piccolo sustains across the change from minor to major. At <i>Langsam. Wie ein Wiegenlied</i>, the celesta joins the rocking strings, with the low strings resting beneath Anderson’s quiet return. The melody keeps the opening words about the weather.</p>",
      "devices": ["tempo change", "orchestration change", "texture change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, p. 79: D minor to D major, celesta entry and lullaby marking. Key names describe the score; the recording’s playback pitch is unverified."
    },
    {
      "id": "orchestral-postlude",
      "title": "Horns take over the lullaby",
      "from": "B · Celesta beneath the lullaby",
      "to": "Coda · The orchestra keeps watch",
      "at": { "t": 275 },
      "span": [265, 287],
      "how": "<p>Anderson’s last “Haus” ends while the violas continue rocking. Divided cellos sustain beneath them. Horn and bassoon begin soft phrases marked <i>weich</i>, carrying the major-key lullaby into the instrumental ending without a break.</p>",
      "devices": ["texture change", "orchestration change", "decrescendo"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Kahnt full score, pp. 84–86, rehearsal 10 and the D-major ending. Key names describe the score; the recording’s playback pitch is unverified."
    }
  ],
  "orchestra": {
    "ensemble": [
      "piccolo",
      "flutes",
      "oboes",
      "cor-anglais",
      "clarinets",
      "bass-clarinet",
      "bassoons",
      "contrabassoon",
      "horns",
      "timpani",
      "percussion",
      "harp",
      "celesta",
      "violins-1",
      "violins-2",
      "violas",
      "cellos",
      "basses",
      "solo-voice"
    ],
    "solo": "solo-voice",
    "basis": "score-proportion",
    "source": {
      "title": "Mahler, Kindertotenlieder, full score (C. F. Kahnt, plate 4460)",
      "url": "https://urresearch.rochester.edu/fileDownloadForInstitutionalItem.action?itemId=18417&itemFileId=62425",
      "locator": "Song V, printed pp. 60–86: storm music, the high piccolo and small bell, then the lullaby with celesta."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "flutes",
          "clarinets",
          "bass-clarinet",
          "bassoons",
          "contrabassoon",
          "harp",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "flutes",
          "cellos"
        ],
        "note": "Opening storm: short wind figures, muted strings, tremolo cellos and accented harp chords."
      },
      {
        "t": 30,
        "playing": [
          "solo-voice",
          "flutes",
          "oboes",
          "cor-anglais",
          "clarinets",
          "bass-clarinet",
          "bassoons",
          "horns",
          "harp",
          "violins-1",
          "violins-2",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "solo-voice"
        ],
        "note": "Anderson’s protests cut across the short wind phrases and restless strings."
      },
      {
        "t": 165,
        "playing": [
          "piccolo",
          "bassoons",
          "percussion",
          "harp",
          "violins-1",
          "violins-2"
        ],
        "lead": [
          "piccolo"
        ],
        "note": "A held high piccolo note and the small bell remain as the storm subsides."
      },
      {
        "t": 185,
        "playing": [
          "solo-voice",
          "piccolo",
          "percussion",
          "celesta",
          "violins-1",
          "violins-2",
          "violas"
        ],
        "lead": [
          "solo-voice"
        ],
        "note": "Celesta and soft strings accompany the lullaby; the bass line falls silent at its opening."
      },
      {
        "t": 275,
        "playing": [
          "horns",
          "bassoons",
          "celesta",
          "violins-1",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "horns",
          "bassoons"
        ],
        "note": "Horn and bassoon continue after the voice, with rocking violas and divided cellos."
      },
      {
        "t": 330,
        "playing": [
          "clarinets",
          "bass-clarinet",
          "horns",
          "celesta",
          "violins-1",
          "violas",
          "cellos",
          "basses"
        ],
        "lead": [
          "horns",
          "clarinets"
        ],
        "note": "The celesta descends while winds and strings settle into the final chord."
      }
    ]
  }
};
