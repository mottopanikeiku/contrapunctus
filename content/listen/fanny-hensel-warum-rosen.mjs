// Recording: duo Béla (Adèle Bérard, soprano; Laura Lazayre, piano), recital of 22 January 2026 at the ICCARE days “Science ouverte, données ouvertes et musique” (22–23 January), Logis du Roy, Amiens.
// Source file: Wikimedia Commons video, CC BY-SA 4.0, uploaded by Magiraud; the site hosts an audio-only MP3 extracted from it (node tools/audio.mjs derive).
// Score: Bote & Bock first edition, plate B. et B. 1046 (IMSLP #99178), No. 3 on pp. 9–11; OpenScore Lieder transcription of the same edition (CC0), 42 bars counting the quaver upbeat.
// Text: Heine, Lyrisches Intermezzo no. 23, Buch der Lieder (1827), p. 129; LiederNet, https://www.lieder.net/lieder/get_text.html?TextId=7780
// Key: the soprano’s first notes (A4, E5), the piano’s opening E5 and the final A minor chord sound at the printed pitch, A = 440 Hz; the recording is not transposed.
const EDITION = 'https://s9.imslp.org/files/imglnks/usimg/2/24/IMSLP99178-PMLP194743-Hensel_Fanny_Sechs_Lieder_fuer_eine_Stimme_mit_Begleitung_des_Pianoforte_Op_1_Bote_1046_1846.pdf';

export default {
  id: 'fanny-hensel-warum-rosen',
  composer: 'fanny-hensel',
  order: 1,
  work: 'Warum sind denn die Rosen so blass',
  movement: 'No. 3 of Sechs Lieder, Op. 1 — Andante',
  year: '1837',
  key: 'A minor',
  forces: 'Voice and piano',
  performers: 'Adèle Bérard, soprano; Laura Lazayre, piano (duo Béla)',
  recorded: '22 January 2026, Amiens',
  source: {
    file: 'File:Warum sind denn die Rosen so blass – Fanny Mendelssohn, Heinrich Heine.webm',
    derived: 'assets/audio/fanny-hensel-warum-rosen.mp3',
  },
  intro: 'Eight of the sixteen lines of Heine’s <i>Warum sind denn die Rosen so blass</i> begin with “Warum”, and Fanny Hensel sets its four stanzas to two melodies, each heard twice. Adèle Bérard (soprano) and Laura Lazayre (piano), who perform as duo Béla, recorded the song in Amiens in January 2026.',
  sections: [
    { t: 0, label: 'Intro · Piano alone', m: 'Intro', mNote: 'Piano alone, on the dominant of A minor' },
    { t: 8, label: 'A · First stanza, roses and violets', m: 'A' },
    { t: 33, label: 'B · Second stanza, lark and balsam herb', m: 'B', mNote: 'D minor, marked f; a held E leads back' },
    { t: 63, label: 'A′ · Third stanza, sun and earth', m: 'A′', mNote: 'The first stanza’s melody returns for new words' },
    { t: 88, label: 'B′ · Fourth stanza, the speaker’s question', m: 'B′', mNote: 'The second stanza’s music returns, again over the held E' },
    { t: 118, label: 'Coda · Last line repeated, piano close', m: 'Coda', mNote: 'The opening melody is sung to “Warum, warum verliessest du mich?”' },
  ],
  cues: [
    {
      t: 0,
      kind: 'life',
      title: 'Composed 1837, published 1846',
      text: 'Hensel wrote this song in 1837. It appeared in 1846 as No. 3 of her Sechs Lieder, Op. 1, from Bote & Bock in Berlin. On 9 July of that year she told her brother Felix, who had opposed her publishing, that she had accepted Herr Bock’s terms.',
      basis: 'documented',
      precision: 'passage',
      evidence: 'IMSLP lists the song as Op. 1, No. 3 (H.312) in Sechs Lieder, first published by Bote & Bock, Berlin, in 1846 (plate B. et B. 1046; title page of IMSLP #99178). The Naxos 8.570981 booklet and LiederNet date it 1837, as does the chronological list of her works after Hellwig-Unruh’s catalogue (H-U 312). Hensel to Felix, 22 November 1836 (“Hensel wünscht es, Du bist dagegen”, “Hensel wants it, you are against it”) and 9 July 1846 (“ich fange an herauszugeben”, “I am beginning to publish”, after giving Herr Bock’s offer and terms a favourable hearing): https://fannyhensel.de/?page_id=138 https://imslp.org/wiki/Warum_sind_denn_die_Rosen_so_blass,_H.312_(Hensel,_Fanny) https://stor.imslp.org/naxos/booklets/booklet-8.570981.pdf https://www.lieder.net/lieder/get_text.html?TextId=7780 https://en.wikipedia.org/wiki/List_of_compositions_by_Fanny_Hensel',
    },
    {
      t: 33,
      kind: 'music',
      title: 'Second stanza in D minor',
      text: 'The second stanza starts marked f, in D minor, with a stepwise descent in the voice and running sixteenths in the piano. Near its end the left hand holds E for two bars, a dominant pedal. The first stanza’s melody then returns for the third stanza.',
      basis: 'score-proportion',
      precision: 'passage',
      evidence: `Bote & Bock first edition (IMSLP #99178), pp. 9–10: f at the entry of the second stanza, with B♭ in the voice and piano and the left hand beginning D, E, C, F; the left hand holds E for two bars at the end of the first system and the start of the second system of p. 10; the third stanza then opens with the music of the first (p. 10, second system). ${EDITION}`,
    },
    {
      t: 118,
      kind: 'music',
      title: 'Last line repeated, piano close',
      text: 'After the fourth stanza Hensel repeats the last line, with “warum” sung twice. The soprano sings the melody of the opening line, marked <i>con espress.</i> The piano then plays alone, <i>dim.</i> and <i>rallent.</i>, and finishes <i>pp</i> on an A minor arpeggio rising to a high A under a fermata.',
      basis: 'score-proportion',
      precision: 'passage',
      evidence: `Bote & Bock first edition (IMSLP #99178), p. 11, systems 3–4: “Warum, warum verliessest du mich?” marked con espress., to the music of the opening line on p. 9; the piano bars after it are marked dim. rallent. and pp and end on a high A with a fermata. Heine’s text has the line once (LiederNet, after Buch der Lieder, 1827, p. 129: https://www.lieder.net/lieder/get_text.html?TextId=7780). ${EDITION}`,
    },
  ],
};
