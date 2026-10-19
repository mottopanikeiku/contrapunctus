export default {
  "id": "debussy-clair-de-lune",
  "composer": "debussy",
  "order": 36,
  "work": "Suite bergamasque",
  "movement": "III. Clair de lune",
  "set": {
    "id": "debussy-suite-bergamasque",
    "title": "Suite bergamasque",
    "part": 3,
    "of": 4
  },
  "year": "1890; revised 1905",
  "key": "D♭ major",
  "forces": "Piano",
  "performers": "Benno Moiseiwitsch, piano",
  "recorded": "28 February 1946, Abbey Road Studio 3, London",
  "source": {
    "archive": {
      "item": "78_clair-de-lune-moonlight_benno-moiseiwitsch-debussy_gbia3042373b",
      "file": "CLAIR DE LUNE (Moonlight) - BENNO MOISEIWITSCH.mp3"
    },
    "rights": {
      "basis": "eu-published-before-1963",
      "published": 1946,
      "evidence": "His Master’s Voice C.3485, 1946; Internet Archive item metadata and original carrier: https://archive.org/details/78_clair-de-lune-moonlight_benno-moiseiwitsch-debussy_gbia3042373b. Territorial EU basis; US status not established."
    }
  },
  "intro": "Benno Moiseiwitsch plays the quiet heart of Debussy’s <i>Suite bergamasque</i>. Its opening melody returns an octave higher, with the middle section’s flowing piano figures still moving beneath it.",
  "sections": [
    { "t": 0, "label": "A · A melody in paired notes", "m": "A", "mNote": "Quiet thirds open into fuller, slower chords" },
    { "t": 86, "label": "B · Arpeggios beneath the song", "m": "B", "mNote": "The left hand rolls through D♭ major and C♯ minor" },
    { "t": 154, "label": "A′ · The melody an octave higher", "m": "A′", "mNote": "The opening tune returns above brief arpeggios and held bass notes" },
    { "t": 220, "label": "Coda · Arpeggios dying into D♭", "m": "Coda", "mNote": "High broken chords descend towards the final D♭-major chord" }
  ],
  "cues": [
    { "bar": { "n": "1", "occ": 1 }, "kind": "music", "title": "Two notes in moonlight", "text": "F and A♭ begin the melody, a quiet third with no bass beneath it. The phrase moves in paired notes, gently separating and coming together. Debussy marks it <i>Andante très expressif</i>, with the soft pedal down. For the first few bars, the piano seems to float.", "basis": "score-aligned", "precision": "moment", "evidence": "Debussy, Suite bergamasque, III, bars 1–8: paired upper notes, pp and con sordina. Mutopia edition, transcribed from Fromont (1905). https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=1778" },
    { "t": 35, "kind": "world", "title": "The masked dancers", "text": "In Verlaine’s <i>Clair de lune</i>, masked dancers play lutes under the moon. They sing about love and good fortune, yet seem doubtful of their own happiness. The poem appears in <i>Fêtes galantes</i> in 1869; its first stanza names the bergamasques that also give Debussy’s suite its title.", "basis": "documented", "precision": "passage", "evidence": "Paul Verlaine, Clair de lune, Fêtes galantes (1869), first and second stanzas. French text reproduced by the University of Chicago Press: https://press.uchicago.edu/Misc/Chicago/853446.html" },
    { "bar": { "n": "27", "occ": 1 }, "kind": "music", "title": "The left hand starts flowing", "text": "D♭-major arpeggios spread out beneath a new melody. The left hand does most of the travelling; the right hand has time to linger on its long notes. <i>Un poco mosso</i> asks for a little more movement, and the quiet song finds a current to carry it.", "basis": "score-aligned", "precision": "moment", "evidence": "Fromont (1905), as transcribed in the Mutopia edition, bars 27–36: Un poco mosso, pp, D♭-major arpeggios beneath longer melody notes." },
    { "bar": { "n": "37", "occ": 1 }, "kind": "form", "title": "Sharps replace the flats", "text": "C♯ minor replaces D♭ major. The bass keeps rolling while the melody climbs, and <i>En animant</i> urges it forward. This is the restless heart of the piece: the tune reaches high, swells to forte, then descends towards the marking <i>Calmato</i>.", "basis": "score-aligned", "precision": "moment", "evidence": "Fromont (1905), Mutopia edition, bars 37–43: C♯-minor signature, En animant, forte at bar 41 and Calmato at bar 43." },
    { "bar": { "n": "51", "occ": 1 }, "kind": "form", "title": "The tune comes home changed", "text": "The opening melody returns an octave higher, very softly. This time a low F supports it, and little arpeggios open the bars beneath its paired notes. The flowing middle has left something behind; the tune no longer sings alone.", "basis": "score-aligned", "precision": "moment", "evidence": "Fromont (1905), Mutopia edition, bars 51–58: a Tempo I, ppp, opening melody an octave higher, F in the bass and arpeggiated accompaniment." },
    { "bar": { "n": "66", "occ": 1 }, "kind": "music", "title": "D♭ at the end", "text": "Broken chords rise into the treble, then settle back towards D♭ major. Debussy writes <i>morendo jusqu’à la fin</i> — dying away to the end. The final chord is rolled gently across both hands, followed by a rest.", "basis": "score-aligned", "precision": "moment", "evidence": "Fromont (1905), Mutopia edition, bars 66–72: morendo jusqu’à la fin, arpeggios and the final rolled D♭-major chord followed by a dotted-crotchet rest." }
  ],
  "transitions": [
    {
      "id": "into-flowing-middle",
      "title": "Held chords give way to arpeggios",
      "from": "A · A melody in paired notes",
      "to": "B · Arpeggios beneath the song",
      "at": { "t": 86 },
      "span": [74, 102],
      "how": "<p>The piano’s high, held chords diminish markedly. At <i>Un poco mosso</i>, the left hand begins rolling D♭-major arpeggios, pianissimo, beneath a long upper note. The bass now moves through the chord instead of holding it still.</p>",
      "devices": ["decrescendo", "texture change", "tempo change", "register change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Fromont (1905), Mutopia edition, bars 25–30: dim. molto, Un poco mosso and D♭-major arpeggios. The section begins within the held-chord preparation."
    },
    {
      "id": "into-quiet-recollection",
      "title": "The opening tune returns over F",
      "from": "B · Arpeggios beneath the song",
      "to": "A′ · The melody an octave higher",
      "at": { "t": 154 },
      "span": [138, 180],
      "how": "<p><i>Calmato</i> restores D♭ major after the C♯-minor crest. The left hand keeps moving as the upper phrases soften. At <i>a Tempo I</i>, a low F supports the opening melody an octave higher, with brief arpeggios beneath it and a pianississimo marking.</p>",
      "devices": ["retransition", "decrescendo", "tempo change", "motivic link", "texture change"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Fromont (1905), Mutopia edition, bars 43–58: Calmato, D♭-major signature and the a Tempo I return at bar 51."
    },
    {
      "id": "into-dying-close",
      "title": "The song dissolves into arpeggios",
      "from": "A′ · The melody an octave higher",
      "to": "Coda · Arpeggios dying into D♭",
      "at": { "t": 220 },
      "span": [210, 238],
      "how": "<p>The returning melody gives way to broken chords that climb into the treble. Low D♭ and F anchor them; the whole passage is marked <i>morendo jusqu’à la fin</i>. The last rise through D♭ major leads to a rolled chord in both hands and a written rest.</p>",
      "devices": ["liquidation", "texture change", "decrescendo", "fade"],
      "basis": "score-proportion",
      "precision": "passage",
      "evidence": "Fromont (1905), Mutopia edition, bars 65–72: final arpeggios, morendo jusqu’à la fin and D♭-major close."
    }
  ]
};
