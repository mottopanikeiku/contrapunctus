export default {
  "id": "chopin-prelude-op28-4",
  "composer": "chopin",
  "order": 10,
  "work": "Prelude in E minor, Op. 28 No. 4",
  "movement": "Largo",
  "year": "1836–39",
  "key": "E minor",
  "forces": "Piano",
  "performers": "Ivan Ilić",
  "recorded": "Paris, October 2005",
  "source": {
    "file": "File:Ivan Ilić-Chopin Prelude Opus 28 n.4.ogg"
  },
  "intro": "A few repeated melody notes rest above an accompaniment that keeps changing by small steps. Ivan Ilić’s performance of the E-minor Prelude offers a short study in harmonic attention: the quiet middle voices carry much of the motion even when the tune seems almost still.",
  "question": "Can you follow the descending harmony without asking the melody to move faster?",
  "sections": [
    {
      "t": 0,
      "label": "A · Opening phrase",
      "m": "A"
    },
    {
      "t": 48,
      "label": "A′ · Renewed phrase",
      "m": "A′",
      "mNote": "the opening shape returns and grows more urgent"
    },
    {
      "t": 90,
      "label": "Close · Pause and final chords",
      "m": "Coda"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Small movement, changing harmony",
      "text": "The melody begins with very little movement, while the repeated accompaniment changes underneath it. Listen inside those chords: small shifts between voices create a sense of descent without requiring a busy tune.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Tomaszewski describes the semitone motif and slow, terse construction: https://chopin.nifc.pl/en/chopin/kompozycja/197. General opening texture, not a claim that the bass descends on every chord."
    },
    {
      "t": 17,
      "kind": "life",
      "title": "The Mallorca winter",
      "text": "Chopin completed the Op. 28 collection during the winter of 1838–39, spent with George Sand and her children in Mallorca. Some ideas were older; the place of completion does not establish a literal scene behind each Prelude.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Composition history of the collection: https://chopin.nifc.pl/en/chopin/gatunki/12_preludia"
    },
    {
      "t": 34,
      "kind": "listen",
      "title": "Follow an inner voice",
      "text": "Choose one note within the accompanying chord and listen for where it seems to move next. The harmony changes through voices shifting by small intervals, not through all the notes descending together in parallel.",
      "basis": "general",
      "precision": "passage",
      "evidence": "Listening invitation to the chromatic accompaniment; no individual note is aligned to this timestamp."
    },
    {
      "t": 51,
      "kind": "world",
      "title": "Bach within reach",
      "text": "Chopin had Bach’s Well-Tempered Clavier with him in Mallorca. His own preludes likewise traverse all major and minor keys, but they do not copy Bach’s chromatic ordering or require a following fugue.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "NIFC prelude overview documents Bach’s collection and the different ordering: https://chopin.nifc.pl/en/chopin/gatunki/12_preludia"
    },
    {
      "t": 68,
      "kind": "music",
      "title": "A phrase gathers weight",
      "text": "The renewed phrase rises towards the main crest before drawing back. Listen for how a modest melodic range can gain urgency through harmonic pressure, fuller sound and closer-spaced activity.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "Report shows a rise around0:50–1:05 followed by a marked fall around1:10. This anchors the broad crest, not a precise written dynamic or harmonic event."
    },
    {
      "t": 85,
      "kind": "world",
      "title": "A complete miniature",
      "text": "The fourth Prelude is an independent piece within a set of twenty-four. Chopin turns a form associated with introductory playing into music that can make a complete statement in only a few phrases.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "The autonomous character of the Op.28 preludes, in contrast to earlier preluding practice: https://chopin.nifc.pl/en/chopin/gatunki/12_preludia"
    },
    {
      "t": 100,
      "kind": "listen",
      "title": "The final space matters",
      "text": "The closing chords follow a withdrawal and a pause. Listen to the silence and decay as part of the phrase’s ending; do not mistake the absence of new attacks for an invitation to hurry the final resolution.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "Report novelty near1:30 and low onset density in the closing windows support a passage-level close. No exact fermata length or pedal technique is claimed."
    }
  ],
  "transitions": [
    {
      "id": "into-renewed-phrase",
      "title": "The opening shape returns under pressure",
      "from": "A · Opening phrase",
      "to": "A′ · Renewed phrase",
      "at": {
        "t": 48
      },
      "span": [
        38,
        60
      ],
      "how": "<p>The first phrase’s descent leads to a renewal of the opening melodic shape. The accompaniment continues to change by small voice-leading steps, but the new phrase grows towards a stronger crest. Familiar material becomes more urgent through harmonic and dynamic intensification rather than through an unrelated contrasting tune.</p>",
      "devices": [
        "motivic link",
        "crescendo build"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Approximate phrase renewal near0:48; report activity increases around0:50 and builds to the1:00–1:05 crest. The semitone-based design is described by https://chopin.nifc.pl/en/chopin/kompozycja/197"
    },
    {
      "id": "into-final-chords",
      "title": "The descending phrase leaves space for closure",
      "from": "A′ · Renewed phrase",
      "to": "Close · Pause and final chords",
      "at": {
        "t": 90
      },
      "span": [
        80,
        102
      ],
      "how": "<p>The renewed phrase loses force and the chordal motion is interrupted by a pause. The final chords then complete the cadence rather than launching another phrase. The contrast between the earlier repeating pulse and the sparse ending makes the resolution feel deliberately delayed.</p>",
      "devices": [
        "decrescendo",
        "fermata",
        "general pause"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Approximate closing boundary at1:30, with reduced onset density and quiet late windows; a passage marker, not a measured fermata onset."
    }
  ]
};
