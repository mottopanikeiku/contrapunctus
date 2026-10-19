export default {
  "id": "ravel-tombeau-fugue", "composer": "ravel", "order": 31,
  "work": "Le Tombeau de Couperin", "movement": "II. Fugue",
  "year": "1914–17", "key": "E minor", "forces": "Piano",
  "performers": "Alan Chan, piano", "recorded": "",
  "source": { "file": "File:Maurice Ravel - Le Tombeau de Couperin. II. Fugue.opus" },
  "set": { "id": "ravel-tombeau-de-couperin", "title": "Le Tombeau de Couperin — piano version", "part": 2, "of": 6 },
  "intro": "One small, off-beat phrase starts a conversation between three voices. Alan Chan plays the quiet Fugue from <i>Le Tombeau de Couperin</i>, a memorial to Jean Cruppi.",
  "sections": [
    { "t": 0, "label": "A · One voice, then three", "m": "A", "mNote": "The short subject enters in each of three parts" },
    { "t": 66, "label": "Dev · The voices cross", "m": "Dev", "mNote": "Off-beat quavers pass between the piano’s three lines" },
    { "t": 180, "label": "Coda · Slower, into E minor", "m": "Coda", "mNote": "The three voices settle together under a fermata" },
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "A phrase after silence",
      "text": "A quaver rest, then the subject: short notes, little gaps and accents that fall between the beats. The piano begins <i>pianissimo</i>. Two more voices enter, each taking up the same phrase while the earlier voices continue around it.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Fugue, opening; Piano Practical Editions, bars 1–6, p. 13, shows the rest, off-beat accents and three successive entries. https://ks15.imslp.org/files/imglnks/usimg/4/48/IMSLP560971-PMLP4975-Le_Tombeau_de_Couperin.pdf",
    },
    {
      "t": 32, "kind": "world", "title": "Jean Cruppi’s family",
      "text": "The dedication remembers Second Lieutenant Jean Cruppi, killed in the First World War. His mother Louise, a pianist and salon hostess, encouraged Ravel’s early work; his father Jean was a politician. Ravel’s opera <i>L’Heure espagnole</i> carries Louise’s name, and this Fugue carries her son’s.",
      "basis": "documented", "precision": "passage",
      "evidence": "BnF records the dedication and rank: https://catalogue.bnf.fr/ark:/12148/cb13917720k. The family and Louise’s support are described by Maureen Buja, Interlude, 12 May 2022: https://interlude.hk/the-dead-are-sad-enough-ravel-le-tombeau-de-couperin/. The parental identities and opera dedication are also given by Apple Music Classical: https://classical.music.apple.com/us/work/maurice-ravel-1875-pp50",
    },
    {
      "t": 66, "kind": "music", "title": "Three voices, two hands",
      "text": "The subject’s clipped quavers keep moving between the three parts. A held note in one voice can outlast several notes in another, and the middle voice crosses the pianist’s hands. Ravel writes separate stems and slurs for each line.",
      "basis": "general", "precision": "passage",
      "evidence": "Durand piano score (1918), Fugue, pp. 7–9; Piano Practical Editions, pp. 13–17, preserves the three independently notated voices and their overlapping phrases.",
    },
    {
      "t": 160, "kind": "world", "title": "Three voices stay at home",
      "text": "In 1919 Ravel sends four movements of the suite into the orchestra. The Fugue stays at the piano, together with the Toccata. One player remains responsible for all three voices.",
      "basis": "documented", "precision": "passage",
      "evidence": "The 1919 orchestration omits the Fugue and Toccata: https://interlude.hk/the-dead-are-sad-enough-ravel-le-tombeau-de-couperin/. The piano score establishes the three-part writing.",
    },
    {
      "t": 180, "kind": "form", "title": "The subject slows down",
      "text": "<i>Meno allegro</i>, then <i>Lent</i>: the subject’s little quavers slow without losing their shape. The voices draw closer together and end on an E-minor chord, held under a fermata.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Fugue, final page; Piano Practical Editions, bars 58–61, p. 17: Meno allegro, slowing instructions, Lent and the E-minor ending.",
    },
  ],
  "transitions": [
    {
      "id": "into-the-close", "title": "E minor, with time to breathe", "from": "Dev · The voices cross", "to": "Coda · Slower, into E minor",
      "at": { "t": 180 }, "span": [180, 200],
      "how": "<p>At <i>Meno allegro</i>, the piano returns to <i>pianissimo</i> and keeps the subject’s off-beat quavers. Further slowing brings the three lines to <i>Lent</i>. They meet on E minor, with the last bass E and the upper notes held beneath fermatas.</p>",
      "devices": ["tempo change", "decrescendo", "fermata"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Fugue, p. 9; Piano Practical Editions, bars 58–61, p. 17.",
    },
  ],
};
