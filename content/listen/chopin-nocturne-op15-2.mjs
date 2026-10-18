export default {
  "id": "chopin-nocturne-op15-2",
  "composer": "chopin",
  "order": 10,
  "work": "Nocturne in F♯ major, Op. 15 No. 2",
  "movement": "Larghetto",
  "year": "1830–33",
  "key": "F♯ major",
  "forces": "Piano",
  "performers": "Luke Faulkner",
  "recorded": "",
  "source": {
    "file": "File:Chopin - Nocturne No. 5 in F-sharp major, Op. 15 No. 2 (Luke Faulkner).flac"
  },
  "intro": "The F♯-major Nocturne places an ornamented singing line above a supporting accompaniment, then interrupts that poise with a faster central section. Luke Faulkner’s recording is a modern counterpart to the historical performances: follow the same melody, but ask how its timing and balance are shaped.",
  "question": "How does the opening melody sound different after the faster middle?",
  "sections": [
    {
      "t": 0,
      "label": "A · Larghetto song",
      "m": "A"
    },
    {
      "t": 86,
      "label": "B · Doppio movimento",
      "m": "B"
    },
    {
      "t": 132,
      "label": "A′ · Larghetto returns",
      "m": "A′",
      "mNote": "the opening song returns after the faster middle"
    }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "A decorated singing line",
      "text": "Follow the main melody through its ornaments rather than treating every quick note as equally important. The accompaniment supports a slower phrase underneath the surface decoration.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Opening song and ornamental writing described by Tomaszewski: https://chopin.nifc.pl/en/chopin/kompozycja/173"
    },
    {
      "t": 26,
      "kind": "world",
      "title": "Dedicated to Ferdinand Hiller",
      "text": "Chopin dedicated the three nocturnes of Op. 15 to Ferdinand Hiller. The dedication belongs to the history of the published collection; it does not turn the second Nocturne into a portrait of its dedicatee.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "NIFC work record names Ferdinand Hiller: https://chopin.nifc.pl/en/chopin/kompozycja/173"
    },
    {
      "t": 52,
      "kind": "listen",
      "title": "The opening contains contrast",
      "text": "Even before the faster middle, the opening region has a contrasting minor-key idea. Listen for changes in the melodic direction and harmonic colour, not only for changes of speed.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Tomaszewski describes the F-sharp-minor counter-theme within the opening region: https://chopin.nifc.pl/en/chopin/kompozycja/173. This cue describes the surrounding span, not its exact onset."
    },
    {
      "t": 76,
      "kind": "life",
      "title": "A work of the early 1830s",
      "text": "The Nocturne dates from 1830–33. Its compact return form already gives the singing melody a dramatic setting: the central contrast changes how a listener hears material that was initially self-contained.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Composition dating and reprise form in https://chopin.nifc.pl/en/chopin/kompozycja/173"
    },
    {
      "t": 94,
      "kind": "form",
      "title": "Twice the motion",
      "text": "The central section is marked doppio movimento, with an initially subdued sotto voce character. Faster motion is not the same instruction as immediate loudness; the passage has room to build after the change of pace.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Estimated middle at the strongest report boundary,1:26; the following windows rise towards a1:50 crest. Score headings and dramatic trajectory: https://chopin.nifc.pl/en/chopin/kompozycja/173"
    },
    {
      "t": 118,
      "kind": "listen",
      "title": "The middle draws back",
      "text": "After the central rise, the sound rapidly subsides. Listen for the reduction in momentum that allows the opening song to return without sounding like another forceful interruption.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "Report level falls steeply from the crest around 1:50 into the quiet 2:05–2:10 windows. This is an amplitude contour, not an estimate of written dynamics."
    },
    {
      "t": 142,
      "kind": "form",
      "title": "The singing line returns",
      "text": "The opening’s slower melodic character returns after the turbulent middle. Compare its phrasing with the beginning: the return restores the theme, but the intervening contrast changes the listener’s frame of reference.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Approximate return at2:12, after the low2:10 window and before renewed F-sharp-major-coloured activity at2:15. Reprise form: https://chopin.nifc.pl/en/chopin/kompozycja/173"
    },
    {
      "t": 168,
      "kind": "world",
      "title": "A German first edition",
      "text": "Breitkopf & Härtel’s first edition of the three nocturnes appeared in early 1834. The surviving printed score lets listeners distinguish Chopin’s tempo and articulation instructions from choices made by a particular recorded performer.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "NIFC digital score record gives January–February1834 for the German first edition: https://chopinscores.org/partytura/86"
    },
    {
      "t": 190,
      "kind": "listen",
      "title": "Let the last sound decay",
      "text": "At the close, attend to the space after the final gestures as well as to their attacks. The recording preserves a decay, but it does not by itself identify which piano, room or microphone produced that sound.",
      "basis": "audio-feature",
      "precision": "passage",
      "evidence": "Late report windows decline towards the204-second end. Source documentation leaves instrument, venue and recording technique unknown."
    }
  ],
  "transitions": [
    {
      "id": "into-doubled-motion",
      "title": "The song yields to a faster inner pulse",
      "from": "A · Larghetto song",
      "to": "B · Doppio movimento",
      "at": {
        "t": 86
      },
      "span": [
        76,
        98
      ],
      "how": "<p>The ornamented Larghetto gives way to a middle marked doppio movimento and sotto voce. Faster articulation changes the sense of movement before the section develops its full dynamic force. The contrast therefore begins with tempo and texture, not with an instruction to play every note loudly.</p>",
      "devices": [
        "tempo change",
        "texture change"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Strong report boundary1:26; level rises thereafter towards1:50. Markings and central design: https://chopin.nifc.pl/en/chopin/kompozycja/173"
    },
    {
      "id": "into-song-reprise",
      "title": "The central surge subsides into the song",
      "from": "B · Doppio movimento",
      "to": "A′ · Larghetto returns",
      "at": {
        "t": 132
      },
      "span": [
        122,
        144
      ],
      "how": "<p>The faster middle retreats and the Larghetto melody returns. Its ornamental surface and supporting accompaniment recover the opening balance after the concentrated central activity. A decrease in density and force helps make the familiar song audible as a return rather than a fresh episode.</p>",
      "devices": [
        "decrescendo",
        "tempo change",
        "motivic link"
      ],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Report falls steeply at2:00–2:10 and recovers around2:15; the2:12 marker is approximate. Formal reprise: https://chopin.nifc.pl/en/chopin/kompozycja/173"
    }
  ]
};
