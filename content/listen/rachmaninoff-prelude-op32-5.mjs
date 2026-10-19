export default {
  "id": "rachmaninoff-prelude-op32-5",
  "composer": "rachmaninoff",
  "order": 60,
  "work": "Prelude in G major, Op. 32 No. 5",
  "movement": "Moderato",
  "year": "1910",
  "key": "G major",
  "forces": "Piano",
  "performers": "Sergei Rachmaninoff",
  "recorded": "3 May 1920",
  "source": { "archive": { "item": "195-complete-rachmaninoff-cd-10", "file": "189 - Complete RACHMANINOFF - CD 10 - Rachmaninov - Prelude, Op. 32, No. 5 (rec. 3.V.1920).mp3" } },
  "intro": "A long melody floats over five-note groups in the left hand. Rachmaninoff plays this G major Prelude himself, letting its song climb into delicate high figures before the final chord.",
  "sections": [
    { "t": 0, "label": "A · A melody above five-note groups", "m": "A", "mNote": "The left hand ripples beneath a slow upper tune" },
    { "t": 58, "label": "B · The tune moves below", "m": "B", "mNote": "A lower melody sounds beneath quick right-hand figures" },
    { "t": 120, "label": "A′ · G major and the first melody", "m": "A′", "mNote": "A tempo restores the opening over five-note groups" },
    { "t": 152, "label": "Coda · High figures and a trill", "m": "Coda", "mNote": "The right hand climbs, then settles on a trill" }
  ],
  "cues": [
    { "t": 0, "kind": "music", "title": "Five notes to a beat", "text": "The left hand rocks through five-note groups before the melody enters above it, marked <i>dolce</i>. Long right-hand notes stretch across the busy accompaniment. Little triplets in the tune set three against five.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition (1911), p. 22: Moderato, left-hand quintuplets and a dolce melody with triplets. https://s9.imslp.org/files/imglnks/usimg/e/e0/IMSLP105591-PMLP02018-Rachmaninov_-_32_-_13_Preludes_(ed.Gutheil).pdf" },
    { "t": 28, "kind": "world", "title": "Victor keeps the first take", "text": "On 3 May 1920, Rachmaninoff records the Prelude at Victor’s Church Building Laboratory in Camden, New Jersey. The company keeps take one and issues it on a twelve-inch record, Victor 74645.", "basis": "documented", "precision": "passage", "evidence": "Discography of American Historical Recordings, matrix C-23985: take 1, 3 May 1920, Camden Church Building Laboratory; issued as Victor 74645. https://adp.library.ucsb.edu/index.php/matrix/detail/700009184/C-23985-Prelude_in_G_major_op._32_no._5" },
    { "t": 58, "kind": "music", "title": "The song moves downstairs", "text": "In the middle passage, the melody slips into the lower part while the right hand keeps up quick, turning figures. Sharps and flats draw the music away from G major. A rising chromatic run carries the piano towards a pause.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, pp. 23–24: lower melody beneath right-hand figuration, chromatic run and fermata." },
    { "t": 120, "kind": "form", "title": "G major comes back", "text": "The first melody returns at <i>a tempo</i>, again above the left hand’s five-note groups. Its long notes have their old ease; the small decorations begin to curl around them once more.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 24, final system, continuing on p. 25: a tempo and the return of the G major melody over quintuplets." },
    { "t": 152, "kind": "music", "title": "A trill above the ripples", "text": "The right hand climbs into high, light figures, marked <i>pp leggiero</i>. A long trill hangs over the left hand’s last ripples. Under <i>perdendo</i>, the piano settles on its final G major chord.", "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 25: pp leggiero, high figuration, trill, perdendo and final G major chord." }
  ],
  "transitions": [
    { "id": "into-middle-expansion", "title": "The melody slips beneath the figures", "from": "A · A melody above five-note groups", "to": "B · The tune moves below", "at": { "t": 58 }, "span": [45, 74], "how": "<p>The piano keeps its quick notes moving as the melody drops into the lower part. The right hand’s little figures continue above it, and chromatic notes carry the harmony away from G major. The bass now has the song.</p>", "devices": ["motivic link", "register change", "texture change"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, pp. 23–24: the melody moves beneath right-hand figuration in the chromatic middle passage." },
    { "id": "into-opening-return", "title": "The first melody rises again", "from": "B · The tune moves below", "to": "A′ · G major and the first melody", "at": { "t": 120 }, "span": [105, 135], "how": "<p>A quiet <i>dolce</i> phrase slows towards <i>a tempo</i>. The right hand then recovers the first G major melody, while the left hand resumes its familiar five-note groups. The piano returns to the opening division between a long song and a rippling accompaniment.</p>", "devices": ["retransition", "motivic link", "texture change"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 24: dolce continuation, ritardando and a tempo return in G major." },
    { "id": "into-decorated-close", "title": "The tune climbs into a trill", "from": "A′ · G major and the first melody", "to": "Coda · High figures and a trill", "at": { "t": 152 }, "span": [140, 174], "how": "<p>At <i>pp leggiero</i>, the right hand climbs above the returning tune. The left hand keeps its five-note groups beneath the high figures and the long trill. The marking <i>perdendo</i> carries the piano down to a quiet G major chord.</p>", "devices": ["register change", "texture change", "decrescendo"], "basis": "score-proportion", "precision": "passage", "evidence": "Gutheil first edition, p. 25: pp leggiero, quintuplet accompaniment, trill, perdendo and the G major close." }
  ]
};
