const CUETO = 'Amancio Cueto Jr., “Villa-Lobos: Bachianas Brasileiras nº5”, Euterpe, https://euterpe.blog.br/villa-lobos-bachianas-brasileiras-5';
const WRIGHT = 'Simon Wright, note to Hyperion CDA66257 (1987), https://www.hyperion-records.co.uk/dc.asp?dc=D_CDA66257';
const LABEL = 'Columbia Masterworks 71670-D, label scans on the Internet Archive item bachianas-brasileiras-no.-5 (label1.jpg, label2.jpg)';

export default {
  id: 'villa-lobos-bachianas-5-aria',
  composer: 'villa-lobos',
  order: 1,
  work: 'Bachianas Brasileiras No. 5',
  movement: 'I. Ária (Cantilena)',
  year: '1938',
  key: 'A minor',
  forces: 'Soprano and orchestra of cellos',
  performers: 'Bidú Sayão, soprano; Leonard Rose, solo cello; eight cellos and double bass; Heitor Villa-Lobos, conductor',
  recorded: '1945',
  source: {
    archive: { item: 'bachianas-brasileiras-no.-5', file: 'Bachianas Brasileiras No. 5.mp3' },
    rights: {
      basis: 'eu-published-before-1963',
      published: 1946,
      evidence: 'Columbia Record Catalog (1946), Columbia Recording Corporation, lists “Bachiana Brasileira No. 5 (Villa-Lobos), Bidú Sayão (soprano), Orchestra conducted by Heitor Villa-Lobos, 71670-D”: https://archive.org/details/columbiarecordca00colu_2 . The label scans of the Internet Archive item read Columbia Masterworks 71670-D, matrices XCO 34194 and 34195. Territorial EU basis only; US status not established.',
    },
  },
  intro: 'The Ária (Cantilena) is the first movement of Villa-Lobos’s Bachianas Brasileiras No. 5. In this Columbia recording it is sung by the soprano who gave the first American performance in 1939, with Villa-Lobos conducting eight cellos and a double bass and Leonard Rose as solo cellist.',
  sections: [
    { t: 0, label: 'A · Wordless melody, soprano and solo cello', m: 'A' },
    { t: 105, label: 'B · Text sung in Portuguese', m: 'B' },
    { t: 334, label: 'A′ · Opening melody, hummed', m: 'A′', mNote: 'The opening melody returns, sung with the mouth closed.' },
  ],
  cues: [
    { t: 0, kind: 'music', title: 'Eight cellos and a double bass', text: 'The Columbia label lists the forces as eight cellos and a double bass, with Leonard Rose as solo cello and Villa-Lobos conducting. According to Amancio Cueto Jr., the accompanying cellos play pizzicato.', basis: 'documented', precision: 'passage', evidence: `${LABEL}: “with Eight ’Celli and Bass … Solo ’Cello: Leonard Rose”. Pizzicato accompaniment: ${CUETO}.` },
    { t: 30, kind: 'music', title: 'Opening melody, soprano and cello', text: 'The soprano sings the opening melody on a vowel, without words, and the leading cellist plays the same line. Simon Wright described the principal cello as doubling the voice throughout. The record label names Leonard Rose as solo cellist.', basis: 'documented', precision: 'passage', evidence: `${WRIGHT}: “The soprano line is duplicated throughout by the leading cellist.” Melody sung on “Ah” and repeated by the first cello: ${CUETO}. Solo cellist: ${LABEL}.` },
    { t: 75, kind: 'life', title: 'Text by Ruth Valadares Corrêa', text: 'The words are by Ruth Valadares Corrêa. Simon Wright writes that the published text was substituted in haste after Villa-Lobos learned that his first choice, a poem by a minor Brazilian poet, could not be used because of copyright.', basis: 'documented', precision: 'passage', evidence: `${WRIGHT}. Author of the text: IMSLP, Bachianas brasileiras No.5, W389-391, https://imslp.org/wiki/Bachianas_brasileiras_No.5,_W389-391_(Villa-Lobos,_Heitor).` },
    { t: 120, kind: 'form', title: 'Text of the middle section', text: 'The middle section sets Ruth Valadares Corrêa’s poem, which begins “Tarde, uma nuvem rósea lenta e transparente” (afternoon, a rosy cloud, slow and transparent). Amancio Cueto Jr. described it as sung in the manner of a recitative.', basis: 'audio-feature', precision: 'passage', evidence: `Text of the poem and its recitative character: ${CUETO}. The place of the middle part is estimated from changes in the recording, not read from a score.` },
    { t: 190, kind: 'form', title: 'Second record side', text: 'Columbia issued the Ária on one 12-inch disc, with the sides labelled “Beginning” and “Conclusion”. The second side starts here, after a short break in the sound.', basis: 'audio-feature', precision: 'moment', evidence: `${LABEL}: side one, matrix XCO 34194, “(Beginning)”; side two, matrix XCO 34195, “(Conclusion)”. The join is placed at the silence in the transfer.` },
    { t: 250, kind: 'world', title: 'First American performance, New York, 1939', text: 'Bidú Sayão sang the Ária at the World’s Fair Hall in New York on 4 May 1939, with the New York Philharmonic under Walter Burle Marx. The Museu Villa-Lobos lists this as the first performance in the United States. Ruth Valadares Corrêa had given the first performance in Rio on 25 March.', basis: 'documented', precision: 'passage', evidence: 'Museu Villa-Lobos, online catalogue, autograph full score 1994.21.0002, “Execuções”: https://museuvillalobos.acervos.museus.gov.br/partituras/bachianas-brasileiras-n-5-2' },
    { t: 336, kind: 'form', title: 'Return of the opening melody', text: 'At the end of the movement the opening melody returns, hummed with the mouth closed (bocca chiusa), as Amancio Cueto Jr. describes it. Simon Wright describes the soprano as returning to “semi-conscious contemplation” after the declamation of the middle section.', basis: 'audio-feature', precision: 'passage', evidence: `Closing section sung bocca chiusa: ${CUETO}. Return to contemplation after the declamation: ${WRIGHT}. The place of the return is estimated from changes in the recording.` },
    { t: 385, kind: 'life', title: 'Dedication and second movement, 1945', text: 'Villa-Lobos dedicated the work to Arminda Neves d’Almeida. He added the second movement, the Dansa (Martelo), in 1945. The Columbia disc carries only the Ária.', basis: 'documented', precision: 'passage', evidence: `Dedication: IMSLP, Bachianas brasileiras No.5, W389-391, https://imslp.org/wiki/Bachianas_brasileiras_No.5,_W389-391_(Villa-Lobos,_Heitor). Second movement added in 1945: ${WRIGHT}. Contents of the disc: ${LABEL}.` },
  ],
};
