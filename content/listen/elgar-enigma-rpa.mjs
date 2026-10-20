export default {
  "id": "elgar-enigma-rpa",
  "composer": "elgar",
  "order": 5,
  "work": "Variations on an Original Theme “Enigma”, Op. 36",
  "movement": "V. “R.P.A.” (Moderato)",
  "set": {
    "id": "elgar-enigma",
    "title": "Enigma Variations, Op. 36",
    "part": 5,
    "of": 14, "unit": "parts" },
  "year": "1898–99",
  "key": "C minor",
  "forces": "Orchestra",
  "performers": "Hallé Orchestra, John Barbirolli",
  "recorded": "1947",
  "source": {
    "file": "File:Elgar; Enigma variations, Theme V. R.P.A.ogg"
  },
  "intro": "The fifth of Elgar’s “Enigma” Variations, Op. 36, “R.P.A.” (Moderato), portrays Richard Penrose Arnold, who could never keep a serious conversation serious for long. The basses play a solemn tune, and the woodwinds break in with interjections.",
  "sections": [
    {
      "t": 0,
      "label": "A · Theme in C minor, cellos and basses",
      "m": "A"
    },
    {
      "t": 32,
      "label": "B · C major, flute and oboe replies",
      "m": "B",
      "mNote": "C major, with quick replies from flute and oboe."
    },
    {
      "t": 98,
      "label": "Link · String figure leading to Ysobel",
      "m": "Link",
      "mNote": "A string figure continues into the next variation."
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Theme in C minor, lower strings",
      "text": "Cellos and double basses play the theme in C minor, marked <i>sostenuto</i>. Around it the violins play a figure on the G string. In his commentary on the variation, Elgar linked the solemnity of the theme to Arnold’s conversation.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 24, rehearsal 15: sostenuto lower strings, violin figuration marked sul G. Elgar connects the theme’s solemnity with Arnold’s conversation in his commentary on variation V: https://en.wikipedia.org/wiki/Enigma_Variations"
    },
    {
      "t": 35,
      "kind": "world",
      "title": "Arnold at the piano",
      "text": "Arnold, son of the poet Matthew Arnold, taught himself the piano. Elgar enjoyed the way he got round the difficult passages while still conveying the music’s feeling. In his conversation, earnest talk kept breaking into whimsical remarks.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Elgar’s recollections of Arnold’s piano playing and conversation, quoted in John Pickard’s BBC programme note (2005): https://www.bbc.com/radio3/classical/elgar/notes/note_enigma.shtml"
    },
    {
      "t": 98,
      "kind": "music",
      "title": "Link to Variation VI",
      "text": "The woodwind figures stop. Short string figures continue over soft timpani and low brass and lead directly into Isabel Fitton’s portrait, <i>Ysobel</i>. Elgar marks <i>attacca</i> at the end of the page.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, pp. 29–30: chromatic closing link, soft trombones and tuba, timpani roll and attacca into variation VI."
    }
  ],
  "transitions": [
    {
      "id": "lighter-replies",
      "title": "Flute and wind over C major",
      "from": "A · Theme in C minor, cellos and basses",
      "to": "B · C major, flute and oboe replies",
      "at": {
        "t": 32
      },
      "how": "<p>The C minor bass melody comes to rest on C, and E♮ turns the harmony to C major. A solo flute runs upwards and oboes and clarinets exchange short phrases. The strings drop to <i>pianissimo</i>, and the Moderato tempo continues.</p>",
      "devices": [
        "direct modulation",
        "texture change",
        "orchestration change"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, p. 25, rehearsal 16: C in the bass, E naturals in the flute line, pianissimo strings and wind exchanges."
    },
    {
      "id": "into-link",
      "title": "Low brass and attacca into “Ysobel”",
      "from": "B · C major, flute and oboe replies",
      "to": "Link · String figure leading to Ysobel",
      "at": {
        "t": 98
      },
      "how": "<p>A falling solo clarinet run leads into the closing link. The strings play a small curling figure while the timpani hold a soft roll. Trombones and tuba enter <i>pianissimo</i>, and the double basses sustain their note beneath them. The page is marked <i>attacca</i>, and the music continues without a break into <i>Ysobel</i>.</p>",
      "devices": [
        "decrescendo",
        "link passage",
        "attacca"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Novello full score, pp. 29–30: descending solo clarinet, sustained bass and timpani, pianissimo trombones and tuba, and the attacca marking."
    }
  ],
  "orchestra": {
    "ensemble": [
      "piccolo",
      "flutes",
      "oboes",
      "clarinets",
      "bassoons",
      "contrabassoon",
      "horns",
      "trumpets",
      "trombones",
      "tuba",
      "timpani",
      "percussion",
      "violins-1",
      "violins-2",
      "violas",
      "cellos",
      "basses"
    ],
    "basis": "score-proportion",
    "source": {
      "title": "Elgar, Enigma Variations, full score (Novello)",
      "url": "https://s9.imslp.org/files/imglnks/usimg/1/1e/IMSLP23792-PMLP07276-Elgar_-_Enigma_Variations_(orch._score).pdf",
      "locator": "Novello full score, pp. 24–30, rehearsal figures 15–18: the solemn C-minor melody, its C-major wind interruptions and the link into Ysobel."
    },
    "timeline": [
      { "t": 0, "playing": ["bassoons", "horns", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["cellos", "basses"], "note": "Cellos and basses play the melody, with answering phrases in bassoon and horn (p. 24)." },
      { "t": 32, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["flutes", "clarinets"], "note": "Short wind phrases interrupt in C major over quiet strings (pp. 25–26)." },
      { "t": 48, "playing": ["flutes", "oboes", "clarinets", "bassoons", "contrabassoon", "horns", "trumpets", "trombones", "tuba", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["violins-1", "oboes"], "note": "Wind and brass take up the long melody while the strings continue their moving figures beneath it (pp. 26–28)." },
      { "t": 84, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["clarinets", "flutes"], "note": "The brass stop and short clarinet and flute replies return (pp. 28–29)." },
      { "t": 98, "playing": ["flutes", "oboes", "clarinets", "bassoons", "horns", "trombones", "tuba", "timpani", "violins-1", "violins-2", "violas", "cellos", "basses"], "lead": ["clarinets", "violins-1"], "note": "A clarinet run and moving strings lead into quiet low-brass chords and timpani (pp. 29–30)." }
    ]
  }
};
