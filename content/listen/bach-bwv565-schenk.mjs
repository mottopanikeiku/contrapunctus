export default {
  intro: 'Bach’s Toccata and Fugue in D minor, BWV 565, opens with a flourish, a rest and a chord built up from the bass. Norbert Schenk plays the complete work on the organ of the Evangelische Kirche in Solms-Albshausen.',
  sections: [
    { t: 0, label: 'Intro · Flourishes and held chords', m: 'Intro', mNote: 'Octave runs alternate with pauses over the pedal bass.' },
    { t: 138, label: 'A · Fugue subject in semiquavers', m: 'A', mNote: 'The semiquaver subject passes between the organ’s voices.' },
    { t: 268, label: 'B · Fugue entries and episodes', m: 'B', mNote: 'Entries of the running subject alternate with shorter episodes.' },
    { t: 382, label: 'C · Recitative passages and broad chords', m: 'C', mNote: 'Free flourishes interrupt the fugue’s steady motion.' },
    { t: 450, label: 'Coda · D minor and the church', m: 'Coda', mNote: 'The organ’s sound continues after the closing chord.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Opening flourish and diminished-seventh chord', text: 'The organ opens with a mordent on its first note, pauses, then descends in octaves. Over a held low D, a diminished-seventh chord is built up one note at a time.', basis: 'score-proportion', precision: 'passage', evidence: 'Opening of BWV 565: octave doubling, mordent and diminished-seventh chord over D. Netherlands Bach Society: https://www.bachvereniging.nl/en/bwv/bwv-565. Harmonic description: https://en.wikipedia.org/wiki/Toccata_and_Fugue_in_D_minor,_BWV_565.' },
    { t: 138, kind: 'music', title: 'Fugue subject and exposition', text: 'The fugue’s subject is made entirely of semiquavers. It returns repeatedly to a fixed note, an implied pedal, while a second melodic line falls and rises around it. Other voices then take up the subject in turn.', basis: 'score-proportion', precision: 'passage', evidence: 'BWV 565, fugue subject and exposition; the implied pedal note and melodic line are described at https://en.wikipedia.org/wiki/Toccata_and_Fugue_in_D_minor,_BWV_565.' },
    { t: 268, kind: 'world', title: 'Johannes Ringk’s copy', text: 'The earliest surviving copy bears the name of Johannes Ringk. On the title page he wrote <i>Toccata con Fuga</i> and named Bach. Inside, the pedal part is written on the keyboard staves, and small letters mark where the feet play.', basis: 'documented', precision: 'passage', evidence: 'Johannes Ringk manuscript, Staatsbibliothek zu Berlin, Mus. ms. Bach P 595; pedal notes marked p. The copy’s date is disputed. https://en.wikipedia.org/wiki/Toccata_and_Fugue_in_D_minor,_BWV_565' },
    { t: 382, kind: 'form', title: 'Coda, <i>Recitativo</i>', text: 'The closing section leaves behind the steady semiquavers of the fugue. It is marked <i>Recitativo</i> and moves in runs, pauses and broad chords. Several changes of tempo lead to the final <i>Molto adagio</i> and the close in D minor.', basis: 'score-proportion', precision: 'passage', evidence: 'BWV 565, seventeen-bar coda, marked Recitativo and ending Molto adagio with a minor plagal cadence. https://en.wikipedia.org/wiki/Toccata_and_Fugue_in_D_minor,_BWV_565' },
  ],
  "id": "bach-bwv565-schenk",
  "composer": "bach",
  "order": 110,
  "concert": false,
  "work": "Toccata and Fugue in D minor, BWV 565",
  "movement": "",
  "year": "",
  "key": "D minor",
  "forces": "Organ",
  "performers": "Norbert Schenk, organ (Evangelische Kirche Solms-Albshausen)",
  "recorded": "2017",
  "source": {
    "file": "File:Bach, Toccata und Fuge d-moll BWV 565, Norbert Schenk.mp3"
  },
  "license": "CC BY 4.0"
};
