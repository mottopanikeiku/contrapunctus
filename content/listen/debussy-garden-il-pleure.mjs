export default {
  "id": "debussy-garden-il-pleure",
  "composer": "debussy",
  "order": 40,
  "work": "Ariettes oubliées",
  "movement": "II. Il pleure dans mon cœur",
  "year": "1885–87; revised 1903",
  "key": "",
  "forces": "Soprano and piano",
  "performers": "Mary Garden, soprano; Claude Debussy, piano",
  "recorded": "1904, Paris",
  "source": {
    "archive": {
      "item": "78_ilpleuredansmacouer_318_15",
      "file": "Ilpleuredansmacouer - Mary Garden - Debussy - Debussy.mp3"
    },
    "rights": {
      "basis": "us-published-before-cutoff",
      "published": 1904,
      "evidence": "Original G&T/Gramophone catalogue33449, Paris1904: IA item metadata; Phonobase12051 identifies a contemporary copy and matrix3074-ii; The Record Collector IRCC discography links Garden/Debussy’s1904 performance to G&T33449. Matrix disagreement is retained in the dossier."
    }
  },
  "set": {
    "id": "debussy-garden-1904",
    "title": "Mary Garden and Debussy, 1904",
    "part": 1,
    "of": 2
  },
  "intro": "Mary Garden sings Verlaine’s rain-soaked sorrow with Debussy himself at the piano, in Paris in 1904. His running semiquavers keep falling beneath a voice that cannot explain its grief.",
  "sections": [
    {
      "t": 0,
      "label": "A · Rain in the piano",
      "m": "A",
      "mNote": "Long vocal notes stretch above running semiquavers"
    },
    {
      "t": 64,
      "label": "B · The rain pauses for a question",
      "m": "B",
      "mNote": "The piano breaks into chords beneath freer singing"
    },
    {
      "t": 82,
      "label": "A′ · Rain beneath the last stanza",
      "m": "A′",
      "mNote": "The semiquavers return and outlast the voice"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Rain in the piano",
      "text": "The piano sets fine semiquavers pattering beneath the song. Against their quick movement, the singer’s notes stretch out, marked <i>triste et monotone</i> — sad and monotonous. Verlaine’s falling rain and inward tears have different speeds.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Debussy, Ariettes oubliées, no. 2, voice-and-piano score, printed pp. 12–13: pp, con sordine, running semiquavers and the vocal marking triste et monotone. https://s9.imslp.org/files/imglnks/usimg/8/83/IMSLP14819-Debussy_-_Ariettes_oubli%C3%A9es_%28voice_and_piano%29.pdf"
    },
    {
      "t": 30,
      "kind": "world",
      "title": "A sorrow without a cause",
      "text": "Verlaine’s rain falls on roofs and the ground. Inside, someone grieves without knowing why: no betrayal, no love or hatred to account for the pain. The poem appears in <i>Romances sans paroles</i> in 1874. Debussy gives its unsettled heart a line that keeps circling back.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Paul Verlaine, Il pleure dans mon cœur, Romances sans paroles (1874), all four stanzas. French text: https://press.uchicago.edu/Misc/Chicago/853446.html. Recurrent vocal phrases are visible in the song score, pp. 12–17."
    },
    {
      "t": 82,
      "kind": "form",
      "title": "The rain returns",
      "text": "After the freer question about betrayal, the piano’s running notes come back. The final stanza names the worst pain: not knowing why the heart aches. The voice slows and finishes; the piano carries the rain on alone.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Voice-and-piano score, pp. 15–17: Modéré question, Revenez au 1er Mouvement, final stanza at 1° Tempo, Molto rallentando and piano postlude."
    }
  ],
  "transitions": [
    {
      "id": "into-freer-question",
      "title": "The semiquavers stop for the voice",
      "from": "A · Rain in the piano",
      "to": "B · The rain pauses for a question",
      "at": { "t": 64 },
      "span": [55, 76],
      "how": "<p>The piano’s running semiquavers stop. Debussy cancels the four-sharp key signature and marks the passage <i>Modéré</i>, allowing the voice to move freely over chords and a short piano reply. The poem asks whether betrayal explains the grief; the regular patter of rain is suspended.</p>",
      "devices": ["texture change", "tempo change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Voice-and-piano score, printed pp. 15–16: cancelled key signature, Modéré, ad libitum and the question beginning Quoi! nulle trahison?"
    },
    {
      "id": "into-rain-return",
      "title": "Semiquavers carry the last stanza",
      "from": "B · The rain pauses for a question",
      "to": "A′ · Rain beneath the last stanza",
      "at": { "t": 82 },
      "span": [73, 94],
      "how": "<p>The piano resumes its semiquavers while the voice holds the end of the word <i>raison</i>. <i>Revenez au 1er Mouvement</i> brings back the opening pace; the four-sharp signature returns with the final stanza. The singer’s long notes again stretch above the quick piano figure.</p>",
      "devices": ["retransition", "texture change", "tempo change", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Voice-and-piano score, printed p. 16: semiquavers beneath the held vocal note, Revenez au 1er Mouvement and restored four-sharp signature at 1° Tempo."
    }
  ],
  "orchestra": {
    "ensemble": [
      "solo-voice",
      "piano"
    ],
    "solo": "solo-voice",
    "basis": "score-proportion",
    "source": {
      "title": "Debussy, Ariettes oubliées no.2 · voice-and-piano score",
      "url": "https://s9.imslp.org/files/imglnks/usimg/8/83/IMSLP14819-Debussy_-_Ariettes_oubli%C3%A9es_%28voice_and_piano%29.pdf",
      "locator": "No. 2, printed pp. 12–17: running piano semiquavers, the freer central question and the piano postlude."
    },
    "timeline": [
      {
        "t": 0,
        "playing": [
          "piano"
        ],
        "lead": [
          "piano"
        ],
        "note": "Semiquavers patter quietly in the piano."
      },
      {
        "t": 8,
        "playing": [
          "solo-voice",
          "piano"
        ],
        "lead": [
          "solo-voice"
        ],
        "note": "Long vocal notes stretch above the piano’s running semiquavers."
      },
      {
        "t": 64,
        "playing": [
          "solo-voice",
          "piano"
        ],
        "lead": [
          "solo-voice"
        ],
        "note": "The voice asks about betrayal; the piano’s semiquavers stop."
      },
      {
        "t": 82,
        "playing": [
          "solo-voice",
          "piano"
        ],
        "lead": [
          "solo-voice",
          "piano"
        ],
        "note": "Running semiquavers return beneath the final stanza."
      },
      {
        "t": 120,
        "playing": [
          "piano"
        ],
        "lead": [
          "piano"
        ],
        "note": "The piano keeps the rain falling after the voice falls silent."
      }
    ]
  }
};
