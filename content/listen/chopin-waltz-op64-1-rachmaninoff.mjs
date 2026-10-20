export default {
  "intro": "Rachmaninoff recorded Chopin’s <i>Minute Waltz</i> for Victor in 1923, one composer-pianist playing the music of another. A long melody and an unaccompanied trill interrupt the famous circling notes.",
  "sections": [
    { "t": 0, "label": "A · Quavers around A♭", "m": "A", "mNote": "The left hand enters after the opening right-hand figure." },
    { "t": 36, "label": "B · Sostenuto middle section", "m": "B", "mNote": "Sostenuto: longer notes above the waltz accompaniment." },
    { "t": 72, "label": "A′ · Return of the running figure", "m": "A′", "mNote": "The circling figure returns, then the bass enters." },
    { "t": 110, "label": "Coda · D♭ major", "m": "Coda", "mNote": "A final scale leads to a closing chord." }
  ],
  "cues": [
    {
      "bar": { "n": "1", "occ": 1 }, "kind": "music", "title": "Opening, right hand alone",
      "text": "At first only the right hand plays, a quick figure circling A♭, marked <i>leggiero</i>. The bass then enters with a single low note followed by two chords, marking the three beats of the bar. The melody continues in running notes over this accompaniment.",
      "basis": "score-aligned", "precision": "passage",
      "evidence": "Peters edition, bars 1–8. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=483"
    },
    {
      "t": 36, "kind": "world", "title": "Victor recording, April 1923",
      "text": "On 5 April 1923 Rachmaninoff recorded this waltz for Victor. The same day’s sessions included his recording of a piano arrangement of Strauss’s <i>The Blue Danube</i>.",
      "basis": "documented", "precision": "passage",
      "evidence": "Discography of American Historical Recordings, sessions for 5 April 1923; Chopin matrix B-24192 and Strauss C-27732. https://adp.library.ucsb.edu/index.php/date/browse/1923-04-05"
    },
    {
      "bar": { "n": "69", "occ": 1 }, "kind": "music", "title": "Unaccompanied trill, bars 69–77",
      "text": "The accompaniment stops. The right hand plays a long trill alone while the left hand rests. The running quaver figure then returns, still without accompaniment.",
      "basis": "score-aligned", "precision": "passage",
      "evidence": "Peters edition, bars 69–77: trill above a resting left hand, followed by the unaccompanied running figure. https://www.mutopiaproject.org/cgibin/piece-info.cgi?id=483"
    }
  ],
  "id": "chopin-waltz-op64-1-rachmaninoff",
  "composer": "chopin",
  "order": 100,
  "concert": false,
  "work": "Waltz in D♭ major, Op. 64 No. 1 (“Minute”)",
  "movement": "",
  "year": "1847",
  "key": "D♭ major",
  "forces": "Piano",
  "performers": "Sergei Rachmaninoff, piano (Steinway)",
  "recorded": "5 April 1923",
  "source": {
    "file": "File:Minute Waltz, by Chopin - Performed by Sergej Rachmaninoff.ogg"
  }
};
