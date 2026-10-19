export default {
  "id": "ravel-tombeau-fugue", "composer": "ravel", "order": 31,
  "work": "Le Tombeau de Couperin", "movement": "II. Fugue",
  "year": "1914–17", "key": "E minor", "forces": "Piano",
  "performers": "Alan Chan, piano", "recorded": "",
  "source": { "file": "File:Maurice Ravel - Le Tombeau de Couperin. II. Fugue.opus" },
  "set": { "id": "ravel-tombeau-de-couperin", "title": "Le Tombeau de Couperin — piano version", "part": 2, "of": 6 },
  "intro": "Alan Chan plays the Fugue, the second movement of <i>Le Tombeau de Couperin</i>. The movement is a three-voice fugue on a short off-beat subject and is dedicated to the memory of Jean Cruppi.",
  "sections": [
    { "t": 0, "label": "A · Subject entries in three voices", "m": "A", "mNote": "The short subject enters in each of the three parts." },
    { "t": 66, "label": "Dev · The voices cross", "m": "Dev", "mNote": "Off-beat quavers pass between the piano’s three lines" },
    { "t": 180, "label": "Coda · Slower, into E minor", "m": "Coda", "mNote": "The three voices end together on a held chord under a fermata." },
  ],
  "cues": [
    {
      "t": 0, "kind": "music", "title": "Opening subject and entries",
      "text": "The subject begins after a quaver rest, with short notes, small gaps and accents off the beat. The piano starts <i>pianissimo</i>. Two more voices enter in turn with the same phrase, and the earlier voices continue against each new entry.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Fugue, opening; Piano Practical Editions, bars 1–6, p. 13, shows the rest, off-beat accents and three successive entries. https://ks15.imslp.org/files/imglnks/usimg/4/48/IMSLP560971-PMLP4975-Le_Tombeau_de_Couperin.pdf",
    },
    {
      "t": 32, "kind": "world", "title": "Jean Cruppi and his family",
      "text": "The Fugue is dedicated to Second Lieutenant Jean Cruppi, who was killed in the First World War. His mother Louise, a pianist and salon hostess, encouraged Ravel’s early work, and his father Jean was a politician. Ravel had dedicated his opera <i>L’Heure espagnole</i> to Louise.",
      "basis": "documented", "precision": "passage",
      "evidence": "BnF records the dedication and rank: https://catalogue.bnf.fr/ark:/12148/cb13917720k. The family and Louise’s support are described by Maureen Buja, Interlude, 12 May 2022: https://interlude.hk/the-dead-are-sad-enough-ravel-le-tombeau-de-couperin/. The parental identities and opera dedication are also given by Apple Music Classical: https://classical.music.apple.com/us/work/maurice-ravel-1875-pp50",
    },
    {
      "t": 66, "kind": "music", "title": "Three-voice texture",
      "text": "The subject’s clipped quavers move between the three parts. A held note in one voice can outlast several notes in another, and the middle voice passes between the pianist’s hands. Ravel writes separate stems and slurs for each line.",
      "basis": "general", "precision": "passage",
      "evidence": "Durand piano score (1918), Fugue, pp. 7–9; Piano Practical Editions, pp. 13–17, preserves the three independently notated voices and their overlapping phrases.",
    },
    {
      "t": 160, "kind": "world", "title": "Orchestration of 1919",
      "text": "In 1919 Ravel orchestrated four movements of the suite. He left out the Fugue and the Toccata, which exist only for piano. The Fugue is in three voices, all played by one pianist.",
      "basis": "documented", "precision": "passage",
      "evidence": "The 1919 orchestration omits the Fugue and Toccata: https://interlude.hk/the-dead-are-sad-enough-ravel-le-tombeau-de-couperin/. The piano score establishes the three-part writing.",
    },
    {
      "t": 180, "kind": "form", "title": "Final bars of the Fugue",
      "text": "At <i>Meno allegro</i>, then <i>Lent</i>, the quavers of the subject slow down and keep their shape. The voices move closer together and end on an E-minor chord held under a fermata.",
      "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Fugue, final page; Piano Practical Editions, bars 58–61, p. 17: Meno allegro, slowing instructions, Lent and the E-minor ending.",
    },
  ],
  "transitions": [
    {
      "id": "into-the-close", "title": "Meno allegro to Lent, closing on E minor", "from": "Dev · The voices cross", "to": "Coda · Slower, into E minor",
      "at": { "t": 180 }, "span": [180, 200],
      "how": "<p>At <i>Meno allegro</i> the piano returns to <i>pianissimo</i> and keeps the subject’s off-beat quavers. The tempo slows further to <i>Lent</i>, and the three lines close on E minor. The last bass E and the upper notes are held under fermatas.</p>",
      "devices": ["tempo change", "decrescendo", "fermata"], "basis": "score-proportion", "precision": "passage",
      "evidence": "Durand piano score (1918), Fugue, p. 9; Piano Practical Editions, bars 58–61, p. 17.",
    },
  ],
};
