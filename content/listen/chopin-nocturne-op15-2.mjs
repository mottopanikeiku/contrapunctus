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
  "intro": "Luke Faulkner plays a nocturne whose F♯-major song grows increasingly extravagant, then breaks into a quick, murmuring middle. Even the return has fresh ornaments to spare.",
  "sections": [
    { "t": 0, "label": "A · Song with curling ornaments", "m": "A", "mNote": "The right hand sings above widely spaced bass and chords" },
    { "t": 86, "label": "B · Twice as fast, sotto voce", "m": "B", "mNote": "Dotted rhythms over quick inner notes and a leaping bass" },
    { "t": 132, "label": "A′ · The ornamented song returns", "m": "A′", "mNote": "The opening melody comes back with new flourishes" }
  ],
  "cues": [
    {
      "t": 0,
      "kind": "music",
      "title": "A small upward turn",
      "text": "The melody begins with A♯ nudging up to B, then falls through the notes of a C♯ chord. A deep C♯ in the left hand keeps the phrase waiting; F♯ arrives in the next bar. The little turn already sounds like someone taking breath to sing.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, upbeat and bars 1–2: A♯–B upbeat, C♯ bass in bar 1, F♯ bass in bar 2. https://chopinscores.org/partytura/86"
    },
    {
      "t": 26,
      "kind": "world",
      "title": "For Ferdinand Hiller",
      "text": "Chopin dedicates the three nocturnes of Op. 15, published in 1833–34, to the German pianist Ferdinand Hiller. In a joint letter to Hiller of 20 June 1833 he writes that Liszt is at that moment playing his études, “transporting me outside of my respectable thoughts”.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "IMSLP, Nocturnes, Op. 15: composed 1830–33, first published 1833–34, dedicated to Ferdinand Hiller: https://imslp.org/wiki/Nocturnes,_Op.15_(Chopin,_Frédéric). Chopin, Liszt and Franchomme to Hiller, Paris, 20 June 1833, letter 76 in Chopin’s Letters, coll. Henryk Opienski, trans. E. L. Voynich (New York: Knopf, 1931), pp. 170–71: https://archive.org/details/chopinsletters00chop"
    },
    {
      "t": 52,
      "kind": "music",
      "title": "F♯ turns minor",
      "text": "The opening song has a troubled companion in F♯ minor. Its phrases climb high, then spill down in little runs marked <i>dolcissimo</i>, very sweetly. The bass keeps moving beneath those long upper notes.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Mieczysław Tomaszewski identifies the F♯-minor counter-theme and its rising and falling phrases: https://chopin.nifc.pl/en/chopin/kompozycja/173. Breitkopf & Härtel first edition, bars 17–24: https://chopinscores.org/partytura/86"
    },
    {
      "t": 86,
      "kind": "form",
      "title": "Twice as fast",
      "text": "<i>Doppio movimento</i>: twice the motion, with the piano still speaking <i>sotto voce</i>. A dotted melody rides above quick notes in the same hand while the bass jumps below. The storm starts as a murmur.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 25–32, marked doppio movimento and sotto voce. https://chopinscores.org/partytura/86"
    },
    {
      "t": 132,
      "kind": "form",
      "title": "A breath before the song",
      "text": "The quick figures slow and sink towards the middle of the keyboard. A pause makes room for the opening A♯–B turn. The Larghetto song returns, with new curls of small notes woven into the familiar phrase.",
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 47–52: molto rallentando, smorzando, a pause, a Tempo and the ornamented reprise. https://chopinscores.org/partytura/86"
    },
    {
      "t": 168,
      "kind": "life",
      "title": "Piano and film music",
      "text": "Faulkner’s training takes him from piano and composition at Chetham’s to music at Oxford, then screen composition at Edinburgh. He graduates there in 2014, having studied recording and engineering as well as writing music for film.",
      "basis": "documented",
      "precision": "passage",
      "evidence": "Luke Faulkner’s own biography gives his studies at Chetham’s, Oxford and Edinburgh, including the 2014 screen-composition degree: https://www.lukefaulkner.com/about"
    }
  ],
  "transitions": [
    {
      "id": "into-doubled-motion",
      "title": "C♯ beneath the quickened melody",
      "from": "A · Song with curling ornaments",
      "to": "B · Twice as fast, sotto voce",
      "at": { "t": 86 },
      "span": [76, 98],
      "how": "<p>Repeated A♯s hold up the end of the slow section. The bass then moves to C♯, with E♯, G♯ and B above it: a dominant seventh. Chopin marks the new passage <i>doppio movimento</i> and <i>sotto voce</i>. The right hand now has a dotted tune and quick notes beneath it; the left hand makes wide jumps.</p>",
      "devices": ["tempo change", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 24–26. https://chopinscores.org/partytura/86"
    },
    {
      "id": "into-song-reprise",
      "title": "A pause, then A♯–B",
      "from": "B · Twice as fast, sotto voce",
      "to": "A′ · The ornamented song returns",
      "at": { "t": 132 },
      "span": [122, 144],
      "how": "<p>Over a low C♯, the repeated figures slow and die away: <i>molto rallentando, smorzando</i>. The bass falls silent, and a pause separates the last figure from the opening A♯–B upbeat. Marked <i>a Tempo</i>, the melody returns over C♯ and reaches the F♯ bass in the following bar.</p>",
      "devices": ["decrescendo", "tempo change", "fermata", "motivic link"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Breitkopf & Härtel first edition, bars 47–50. https://chopinscores.org/partytura/86"
    }
  ]
};
