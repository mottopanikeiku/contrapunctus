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
  "intro": "Paderewski records the F♯-major Nocturne in New York in May 1917. His piano belongs to an age of rolled chords and hands that can speak at different moments.",
  "sections": [
    { "t": 0, "label": "A · The slow F♯-major song", "m": "A", "mNote": "A decorated right-hand melody above bass notes and chords" },
    { "t": 96, "label": "B · A dotted tune runs faster", "m": "B", "mNote": "Doppio movimento begins sotto voce over a C♯ bass" },
    { "t": 144, "label": "A′ · The slow song returns", "m": "A′", "mNote": "The opening tempo and melody return after a pause" }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "A melody with elbows",
      "text": "Chopin’s melody curls through quick ornaments while the left hand places bass notes and chords beneath it. Paderewski’s playing often separates the hands’ attacks and spreads chords, giving the tune room to lean ahead of its accompaniment or linger behind.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Opening piano writing: Breitkopf & Härtel first edition, bars 1–16, https://chopinscores.org/partytura/86. Jonathan Woolf discusses hand dislocation and arpeggiated chords across Paderewski’s Victor recordings: https://www.musicweb-international.com/classrev/2017/May/Paderewski_American_7505.htm"
    },
    {
      "t": 56,
      "kind": "world",
      "title": "New York, May 1917",
      "text": "On 14 May 1917 Paderewski plays this nocturne for Victor in New York. The company issues the first take. A few weeks later he returns to record Chopin’s G♭-major <i>Butterfly</i> Étude.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "APR 7505 session listing: Nocturne, matrix C 19781-1, 14 May 1917; Étude Op. 25 No. 9, 18 June 1917. https://www.musicweb-international.com/classrev/2017/May/Paderewski_American_7505.htm"
    },
    {
      "t": 96,
      "kind": "form",
      "title": "Quickened, still under the breath",
      "text": "The central passage starts <i>sotto voce</i>, its dotted tune threaded through quick accompanying notes. Chopin asks for twice the motion. The left hand’s leaps and the insistent dotted patterns gradually turn the murmur into a struggle.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 25–40; Mieczysław Tomaszewski discusses the dotted rhythms and central climax. https://chopinscores.org/partytura/86; https://chopin.nifc.pl/en/chopin/kompozycja/173"
    },
    {
      "t": 144,
      "kind": "form",
      "title": "The opening turn returns",
      "text": "The repeated figures lose speed and sink lower. A pause, then A♯ rises to B: the little turn that begins the nocturne. The returning song keeps its old outline while Chopin fits new ornaments into it.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 47–52. https://chopinscores.org/partytura/86"
    },
    {
      "t": 188,
      "kind": "world",
      "title": "“What is lost is lost”",
      "text": "In his 1909 essay on rubato, Paderewski laughs at the rule that time borrowed from one phrase must be paid back in another. “What is lost is lost,” he writes. “For any lawlessness there is, after a certain term, proscription.”",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Ignacy Jan Paderewski, ‘Tempo Rubato’, in Henry T. Finck, Success in Music and How It Is Won (1909), chapter 28, pp. 454–461; reprinted by the USC Polish Music Center: https://polishmusic.usc.edu/research/publications/polish-music-journal/vol4no1/paderewski-tempo-rubato/"
    }
  ],
  "transitions": [
    {
      "id": "into-central-motion",
      "title": "The bass turns to C♯",
      "from": "A · The slow F♯-major song",
      "to": "B · A dotted tune runs faster",
      "at": { "t": 96 },
      "span": [86, 108],
      "how": "<p>The slow section lingers on repeated A♯s. A C♯ bass starts the middle, supporting a dominant seventh with E♯, G♯ and B. <i>Doppio movimento</i> doubles the motion, and the right hand divides its work between a dotted tune and quick notes underneath. The opening of the passage is marked <i>sotto voce</i>.</p>",
      "devices": ["tempo change", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 24–26. https://chopinscores.org/partytura/86"
    },
    {
      "id": "into-larghetto-return",
      "title": "The quick figures die away",
      "from": "B · A dotted tune runs faster",
      "to": "A′ · The slow song returns",
      "at": { "t": 144 },
      "span": [134, 156],
      "how": "<p>Chopin writes <i>molto rallentando, smorzando</i> over repeated figures above a low C♯. The left hand then falls silent. After a pause, A♯ and B introduce the opening tune at its first tempo; the bass moves from C♯ to F♯ beneath the restored melody.</p>",
      "devices": ["decrescendo", "tempo change", "fermata", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 47–50. https://chopinscores.org/partytura/86"
    }
  ]
};
