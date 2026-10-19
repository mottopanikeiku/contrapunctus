const IMSLP = 'IMSLP, List of works by Heitor Villa-Lobos, https://imslp.org/wiki/List_of_works_by_Heitor_Villa-Lobos';
const ITEM = 'Internet Archive item victor-11214-villa-lobos-choros-no7-victor-brazil-orchestra-villa-lobos (description by DogintheManger), https://archive.org/details/victor-11214-villa-lobos-choros-no7-victor-brazil-orchestra-villa-lobos';

export default {
  id: 'villa-lobos-choros-7',
  composer: 'villa-lobos',
  order: 2,
  work: 'Chôros No. 7 (Septeto)',
  movement: '',
  year: '1924',
  key: '',
  forces: 'Flute, oboe, clarinet, alto saxophone, bassoon, violin, cello and tam-tam',
  performers: 'Victor Brazilian Orchestra (Orquestra Victor Brasileira); Heitor Villa-Lobos, conductor',
  recorded: '8 January 1932',
  source: {
    archive: { item: 'victor-11214-villa-lobos-choros-no7-victor-brazil-orchestra-villa-lobos', file: 'Victor 11214 Villa-Lobos Chôros No7 (Septet) Victor Brazil Orch, Villa-Lobos.mp3' },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1936,
      evidence: 'The American Music Lover, vol. 1 no. 10, February 1936, “A Recording from Brazil”: the International Record Agency announces the importation of Villa-Lobos’s Chôros No. 7, played by the Brazilian orchestra under the composer, as a companion to Victor 11212–11213: https://archive.org/details/sim_american-record-guide_1936-02_1_10 . Territorial EU basis only; US status not established.',
    },
  },
  intro: 'Villa-Lobos conducted his Chôros No. 7 (Septeto) for winds, violin and cello in a recording made on 8 January 1932. The Victor labels credited the septet as the Victor Brazilian Orchestra.',
  sections: [
    { t: 0, label: 'A · First section', m: 'A' },
    { t: 136, label: 'B · Second section', m: 'B' },
    { t: 254, label: 'C · Third section', m: 'C' },
    { t: 370, label: 'D · Final stretch', m: 'D' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Scoring and recorded ensemble', text: 'The score calls for flute, oboe, clarinet, alto saxophone, bassoon, violin and cello, with an optional tam-tam played off stage. The Victor labels bill the group as the “Victor Brazilian Orchestra” and do not name the players.', basis: 'documented', precision: 'passage', evidence: `Scoring: IMSLP, Chôros No.7, W199 (“tam-tam ad lib. (offstage)”), https://imslp.org/wiki/Ch%C3%B4ros_No.7,_W199_(Villa-Lobos,_Heitor). Billing on both labels of Victor 11214, and unnamed personnel: ${ITEM}.` },
    { t: 60, kind: 'life', title: 'Dedication to Arnaldo Guinle', text: 'The score is dedicated to Arnaldo Guinle, who financed Villa-Lobos when he settled in Paris in 1923. Chôros No. 5, for piano, is also dedicated to him.', basis: 'documented', precision: 'passage', evidence: `Dedications: ${IMSLP} (W199 and W207). Guinle’s financing: Clóvis Bulcão, Os Guinle (Intrínseca), chapter excerpt, timeline entry for 1923, https://www.intrinseca.com.br/upload/livros/1%C2%BACAP_OsGuinle_ISSUU.pdf` },
    { t: 150, kind: 'world', title: 'First performance, Rio de Janeiro, 1925', text: 'Villa-Lobos wrote the Chôros in 1924. It was first performed on 17 September 1925 at the Instituto Nacional de Música in Rio de Janeiro. Ary Ferreira (flute) and Newton Pádua (cello) were among the players.', basis: 'documented', precision: 'passage', evidence: `${IMSLP}, W199: composed 1924; premiered 17 September 1925 at the Instituto Nacional de Música, Rio de Janeiro, with Ary Ferreira (flute) and Newton Pádua (cello) among the players. The Museu Villa-Lobos catalogue gives the same date and players, naming the venue as the Escola Nacional de Música: https://museuvillalobos.acervos.museus.gov.br/partituras/choros-n-7/` },
    { t: 250, kind: 'world', title: 'American import, 1936', text: 'In February 1936 <i>The American Music Lover</i> reported that this record was being imported, as a companion to the Carioca Quartet’s Victor discs of the Fifth Quartet. It added that Stokowski had played the work in the United States “upon several occasions”.', basis: 'documented', precision: 'passage', evidence: 'The American Music Lover, vol. 1 no. 10, February 1936, “A Recording from Brazil”, and the review of Victor 11212–11213 (Carioca String Quartet): https://archive.org/details/sim_american-record-guide_1936-02_1_10' },
    { t: 330, kind: 'life', title: 'Recording and new post, 1932', text: 'The record was made on 8 January 1932. In February the Federal District of Rio offered Villa-Lobos the post of head of a new department of music education, the Superintendência de Educação Musical e Artística.', basis: 'documented', precision: 'passage', evidence: `Recording date: ${ITEM}. Offer of February 1932: Simon Wright, note to Hyperion CDA66257 (1987), https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA66257` },
  ],
};
