export default {
  "id": "chopin-nocturne-op15-2-paderewski",
  "composer": "chopin",
  "order": 20,
  "work": "Nocturne in F♯ major, Op. 15 No. 2",
  "movement": "Larghetto",
  "year": "1830–33",
  "key": "F♯ major",
  "forces": "Piano",
  "performers": "Ignacy Jan Paderewski",
  "recorded": "14 May 1917, New York",
  "source": {
    "file": "File:PDP-CH - Nocturne in F-sharp major, Op. 15, No. 2 - Chopin - Ignacy Jan Paderewski - Hmv-db375-05616.flac"
  },
  "concert": false,
  "intro": "Paderewski recorded Chopin’s Nocturne in F♯ major, Op. 15 No. 2 (Larghetto), in New York in May 1917. His playing uses rolled chords and lets the hands sound at different moments.",
  "sections": [
    { "t": 0, "label": "A · Melody in F♯ major, Larghetto", "m": "A", "mNote": "Decorated right-hand melody above bass notes and chords." },
    { "t": 96, "label": "B · Doppio movimento, dotted theme", "m": "B", "mNote": "Doppio movimento begins sotto voce over a C♯ bass." },
    { "t": 144, "label": "A′ · Opening melody returns, F♯ major", "m": "A′", "mNote": "The opening tempo and melody return after a pause." }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "Opening melody and accompaniment",
      "text": "Chopin’s melody moves through quick ornaments while the left hand plays bass notes and chords beneath it. Paderewski’s playing often separates the attacks of the two hands and spreads chords, so that the melody sounds before or after its accompaniment.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Opening piano writing: Breitkopf & Härtel first edition, bars 1–16, https://chopinscores.org/partytura/86. Jonathan Woolf discusses hand dislocation and arpeggiated chords across Paderewski’s Victor recordings: https://www.musicweb-international.com/classrev/2017/May/Paderewski_American_7505.htm"
    },
    {
      "t": 56,
      "kind": "world",
      "title": "Victor recording, New York, 1917",
      "text": "On 14 May 1917 Paderewski recorded this nocturne for Victor in New York, and the company issued the first take. He returned on 18 June to record Chopin’s G♭ major <i>Butterfly</i> Étude.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "APR 7505 session listing: Nocturne, matrix C 19781-1, 14 May 1917; Étude Op. 25 No. 9, 18 June 1917. https://www.musicweb-international.com/classrev/2017/May/Paderewski_American_7505.htm"
    },
    {
      "t": 96,
      "kind": "form",
      "title": "Central section, bars 25–40",
      "text": "The central passage (bars 25–40) begins <i>sotto voce</i>, with a dotted tune set among quick accompanying notes. Chopin asks for twice the motion. The left hand leaps and the dotted patterns continue as the passage builds to the central climax.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 25–40; Mieczysław Tomaszewski discusses the dotted rhythms and central climax. https://chopinscores.org/partytura/86; https://chopin.nifc.pl/en/chopin/kompozycja/173"
    },
    {
      "t": 144,
      "kind": "form",
      "title": "Return of the opening theme",
      "text": "The repeated figures slow and descend. After a pause, A♯ rises to B, the turn that opens the nocturne. The theme returns with its original outline, and Chopin adds new ornaments to it.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 47–52. https://chopinscores.org/partytura/86"
    },
    {
      "t": 188,
      "kind": "world",
      "title": "Paderewski on rubato, 1909",
      "text": "In his 1909 essay on rubato, Paderewski mocked the rule that time borrowed from one phrase must be repaid in another. “What is lost is lost,” he wrote. “For any lawlessness there is, after a certain term, proscription.”",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Ignacy Jan Paderewski, ‘Tempo Rubato’, in Henry T. Finck, Success in Music and How It Is Won (1909), chapter 28, pp. 454–461; reprinted by the USC Polish Music Center: https://polishmusic.usc.edu/research/publications/polish-music-journal/vol4no1/paderewski-tempo-rubato/"
    }
  ],
  "transitions": [
    {
      "id": "into-central-motion",
      "title": "The bass turns to C♯",
      "from": "A · Melody in F♯ major, Larghetto",
      "to": "B · Doppio movimento, dotted theme",
      "at": { "t": 96 },
      "span": [86, 108],
      "how": "<p>The slow section has repeated A♯s. A C♯ bass begins the middle section and supports a dominant seventh with E♯, G♯ and B. At <i>Doppio movimento</i> the motion doubles, and the right hand plays both a dotted tune and quick notes beneath it. The opening of the passage is marked <i>sotto voce</i>.</p>",
      "devices": ["tempo change", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 24–26. https://chopinscores.org/partytura/86"
    },
    {
      "id": "into-larghetto-return",
      "title": "Return of the opening tune",
      "from": "B · Doppio movimento, dotted theme",
      "to": "A′ · Opening melody returns, F♯ major",
      "at": { "t": 144 },
      "span": [134, 156],
      "how": "<p>In bars 47–50 of the Breitkopf &amp; Härtel first edition, Chopin writes <i>molto rallentando, smorzando</i> over repeated figures above a low C♯. The left hand then stops. After a pause, A♯ and B lead into the opening tune at its first tempo, and the bass moves from C♯ to F♯ beneath it.</p>",
      "devices": ["decrescendo", "tempo change", "fermata", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 47–50. https://chopinscores.org/partytura/86"
    }
  ]
};
