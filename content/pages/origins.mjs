export default {
  slug: 'origins',
  title: 'Before Bach',
  kicker: 'Origins',
  glyph: '𝄐',
  accent: '#7a2a1d',
  lede: '<p>Guido of Arezzo took a book of chants to Rome and taught a pope to sing a tune he had never heard. Six centuries later, Monteverdi gave Orpheus a song to charm the keeper of the underworld. In the centuries between, musicians learned to write rhythm down, to set a second voice against a melody and to write a bass line that left room for a player’s invention.</p>',
  lessons: [
    {
      id: 'monochord', numeral: 'i', label: 'Southern Italy · c. 530 BC',
      heading: 'Pythagoras and a piece of string',
      question: 'String lengths: octave one-half, fifth two-thirds',
      html: `
<p class="dropcap">Pythagoras settled in Croton, in southern Italy, around 530 BC. Later writers told how he passed a blacksmith’s shop where the hammers sounded in consonant intervals, weighed the hammers and found the numerical ratios behind them. The legend is attached to the idea that the octave, the fifth and the fourth can be expressed as ratios of small whole numbers.</p>
<aside class="note"><b>The smithy</b>Pythagoras left no writings. The hammer experiment belongs to later accounts of his life, and it fails as physics, because doubling a hammer’s weight does not lower its sound by an octave. A string gives a reliable demonstration.</aside>
<p>A monochord has one string stretched over a box and a movable bridge beneath it. With the tension unchanged, a bridge at the halfway point makes the string sound an octave higher. Two-thirds of the length gives a fifth; three-quarters gives a fourth. The shorter the string, the faster it vibrates. The pitches have frequency ratios of <b>2:1, 3:2 and 4:3</b>; the string lengths run the other way round.</p>
<p>The string also vibrates in several ways at once. As well as vibrating along its whole length, it vibrates in halves, thirds and smaller divisions. These produce its partials. For an ideal flexible string, their frequencies are one, two, three and more times the lowest. Over a low C, the first six are C, C, G, C, E and G, rising through the octaves. The fifth partial gives an E, a pure major third above the C of the fourth partial.</p>
{{harmonic-series}}
<aside class="note"><b>The seventh and eleventh partials</b>The seventh partial falls about 31 cents below an equal-tempered B♭, and the eleventh about 49 cents below F♯. A cent is one hundredth of an equal-tempered semitone. The diagram plots sixteen partials above C.</aside>
<p>A violin and a flute can play the same C and still sound different, because their partials sound with different strengths. Pythagorean tuning builds its notes by stacking pure fifths. Four such fifths lead to an E which, brought down into C’s octave, makes a wider third than the harmonic series supplies, 81:64 against 5:4. Both notes are called E, and the difference between them is a problem in tuning.</p>
<p>Around the beginning of the sixth century AD, Boethius gathered Greek musical learning into his Latin <i>De institutione musica</i>. His book carried the ratios into medieval classrooms, where music belonged to the quadrivium with arithmetic, geometry and astronomy.</p>
<p>Greek theorists also divided scales into tetrachords, groups of four notes spanning a fourth. Medieval musicians later gave the names Dorian, Phrygian and Lydian to the [[origins#chant|church modes]]. A white-note scale from D to D models medieval Dorian; ancient Greek Dorian used a different arrangement.</p>`,
      score: [{
        kicker: 'Schematic · intervals',
        title: 'Octave, fifth, fourth',
        abc: `X:1
T:Three intervals above C
M:4/4
L:1/4
Q:1/4=72
K:C
V:1 name="Intervals"
%%MIDI program 0
"Octave"C2 c2 | "Fifth"C2 G2 | "Fourth"C2 F2 |]`,
        caption: 'Each bar returns to C, then rises by an octave, a fifth or a fourth. This schematic sets out the intervals associated with 2:1, 3:2 and 4:3. The keyboard playback uses equal temperament; the harmonic-series diagram above gives the exact integer ratios.',
      }],
      arts: [{
        relation: 'shared-context',
        type: 'painting', frame: 'gilt',
        file: 'File:Raphael School of Athens.jpg',
        artist: 'Raphael', title: 'The School of Athens', date: '1509–11',
        medium: 'Fresco', collection: 'Stanza della Segnatura, Vatican Museums',
        note: `<p>Raphael’s Pythagoras bends over a book while a young figure holds up a tablet of musical proportions. Around him, philosophers argue and pupils gather. The tablet shows the fourth, the <i>diatessaron</i>, and the same fresco in the Vatican includes Euclid with his geometry.</p>`,
      }],
    },
    {
      id: 'chant', numeral: 'ii', label: 'Rome and the Frankish churches · c. 750–1200',
      heading: 'The day is sung',
      question: 'Single melody for psalm, prayer and Alleluia',
      html: `
<p class="dropcap">Pepin and his son Charlemagne made Roman worship a concern of the Frankish kings. From the middle of the eighth century the chant of Rome spread through their churches and monasteries, and Frankish singers changed it as they sang it. This became the repertory now called Gregorian chant. Its name honours Pope Gregory the Great, who had died in 604.</p>
<p>The singers had a great deal to remember. At Mass, the Kyrie, Gloria and Sanctus returned with the same words each time, and other texts changed with the feast. Around the Mass lay the Divine Office, the daily round of psalms, readings and prayers. All of these could be sung on a single melodic line, by one singer or by a whole choir. A setting with one note to a syllable carried the words quickly. A melisma set one vowel to a succession of notes.</p>
<p>A psalm tone made a long text manageable. A few opening notes brought the singers to a reciting pitch, where they could stay for as many syllables as the verse required. A small turn marked the middle of the verse and another marked its end. The antiphon sung around the psalm determined which formula would fit. A choir could sing a new verse to a tune it already knew.</p>
<aside class="note"><b>Four endings, eight modes</b>The usual finals are D, E, F and G. Each has an authentic mode, lying mainly above it, and a plagal partner, with the final nearer the middle of the melody’s range. The Greek names were adopted later: Dorian and Hypodorian, Phrygian and Hypophrygian, Lydian and Hypolydian, Mixolydian and Hypomixolydian. B♭ often replaces the B♮ that a white-note scale would give.</aside>
<p>Scribes began to add neumes above the Latin words. These were small marks showing notes that rise, fall or are grouped together. In the early-tenth-century St Gall Cantatorium, these signs record fine details of a solo singer’s delivery. They were used together with the singer’s memory. Later scribes placed the notes at different heights, and then against reference lines, until an unfamiliar interval could be read from the page.</p>
<p>The later medieval sequence <i>Dies irae</i> begins F–E–F–D–E–C–D–D. The melody circles D with a C♮ below it, where a modern minor key would have a sharpened leading note. Its opening stanza calls David and the Sibyl as witnesses to the day of judgement. Those eight notes appear in [[berlioz|Berlioz]]’s <i>Symphonie fantastique</i> and recur in [[rachmaninoff|Rachmaninoff]]’s music.</p>
<p>At Rupertsberg in the twelfth century, Hildegard of Bingen wrote chants for her nuns with leaps and long melismas that took the voice beyond the range of many older melodies. Near the end of her life, a dispute over a burial brought an interdict on the community, and the women had to recite their services instead of singing them. Writing to the prelates of Mainz in 1178–79, Hildegard told them that those who unjustly silenced a church would “lose their share in the angels’ praises in heaven”.</p>`,
      score: [{
        kicker: 'Quotation · medieval sequence',
        title: 'Dies irae — first stanza',
        abc: `X:2
T:Dies irae
M:none
L:1/8
Q:1/4=72
K:Ddor
V:1 name="Chant"
%%MIDI program 52
F E F D E C D D2 |
w: Di-es i-rae, di-es il-la,
F (FG) (FE) (DC) E F E D2 |
w: Sol-vet _ sae- _ clum _ in fa-vil-la:
A, (CD) D (DC) E F E D2 |]
w: Te-ste _ Da-vid _ cum Si-byl-la.`,
        caption: 'The first stanza of <i>Dies irae</i>, from the <i>Liber Usualis</i> (Solesmes, 1961), p. 1810. The opening eight notes fall back to D; the second line sets several notes to single syllables. There is no regular metre; phrases are marked by separators. The transcription uses quavers as its unit, and dotted chant endings are doubled in length for playback. Sources: <a href="https://gregobase.selapa.net/sources/3/2055.png">printed page</a> and <a href="https://gregobase.selapa.net/chant.php?id=1198">GregoBase</a>.',
      }],
      arts: [{
        relation: 'shared-context',
        type: 'painting', frame: 'mat',
        file: 'File:Hildegard von Bingen.jpg',
        artist: 'Anonymous Rupertsberg illuminator', title: 'Hildegard receiving a vision', date: 'Late twelfth century',
        medium: 'Manuscript illumination, reproduced from the Rupertsberg Scivias',
        collection: 'Formerly Wiesbaden, manuscript lost during the Second World War',
        note: `<p>Flames descend into Hildegard’s head as she writes; beside her, a scribe holds his own tablet. She was the author of the visionary book <i>Scivias</i>, completed in 1151. She also wrote the words and melodies of her community’s chants, and in her drama <i>Ordo Virtutum</i> the Virtues sing.</p>`,
      }],
    },
    {
      id: 'notation', numeral: 'iii', label: 'Arezzo and Rome · c. 1025',
      heading: 'The pope tries a new tune',
      question: 'Guido’s staff and sight-singing',
      html: `
<p class="dropcap">Around 1028, Guido of Arezzo brought his chant book to Pope John XIX in Rome. The pope turned its pages and studied the rules. Guido later told his fellow monk Michael of Pomposa that John would not leave his seat until he had learnt a verse he had never heard, because he wanted to try for himself what he found scarcely believable in the schoolboys.</p>
<p>Guido was concerned with the slow business of teaching an enormous repertory by ear. His <i>Micrologus</i>, written around 1025–28, combined practical instruction with interval theory. Pitch letters and reference lines already existed. In the staff system he promoted, both lines and spaces gave each note a fixed position. A C or F at the beginning of the staff fixed the surrounding tones and semitones, and coloured lines marked them for the reader.</p>
<aside class="note"><b>The clef</b>A clef is a letter written as a sign. C and F clefs identify one note on the staff. Moving the clef lets a scribe fit a high or low melody on the same few lines. Four lines eventually became usual for chant; the five-line staff followed later.</aside>
<p>Guido’s other aid was a hymn to John the Baptist, <i>Ut queant laxis</i>. In its teaching melody, six phrases begin on successively higher notes: C, D, E, F, G and A. Their first syllables are <i>ut, re, mi, fa, sol, la</i>. A boy who knew the hymn could recall the opening of a phrase and so find its note. The semitone, E–F, lay between <i>mi</i> and <i>fa</i>.</p>
<p>Later teachers developed overlapping six-note scales, or hexachords. The natural hexachord began on C. The hard hexachord began on G and included B♮; the soft hexachord began on F and included B♭. Every hexachord kept its semitone between <i>mi</i> and <i>fa</i>. When a tune went beyond six notes, the singer changed hexachord, and the change was called a mutation. G could become <i>ut</i> where it had been <i>sol</i> a moment before, without changing pitch.</p>
<aside class="note"><b>Six syllables</b><i>Si</i>, and the substitution of <i>do</i> for <i>ut</i>, came later. The familiar Guidonian hand survives in later teaching sources; Guido’s own writings do not describe that diagram.</aside>
<p>The hand placed those notes on the body. A teacher pointed to a fingertip or joint, and the pupil gave its pitch and syllable. In the thirteenth-century picture below, a very large hand is covered with small inscriptions. The master’s face appears beside it.</p>
<p>A staff could carry a melody far beyond Guido’s classroom, with its intervals intact. Singers still learnt pronunciation and phrasing from one another. The notes on the page fixed the pitch. Once composers began to set several voices moving together, scribes also had to show how long each note should last.</p>`,
      score: [{
        kicker: 'Schematic · solmisation',
        title: 'Natural, hard and soft hexachords',
        abc: `X:3
T:Three hexachords
M:6/4
L:1/4
Q:1/4=90
K:C
V:1 name="Voice"
%%MIDI program 52
"Natural"C D E F G A | "Hard"G A B c d e | "Soft"F G A _B c d |]
w: ut re mi fa sol la ut re mi fa sol la ut re mi fa sol la`,
        caption: 'Three schematic hexachords, beginning on C, G and F. The semitone always falls between <i>mi</i> and <i>fa</i>: E–F, B–C, then A–B♭. The syllables stay the same while the pitches change. Bar lines separate the three teaching examples.',
      }],
      arts: [
        {
          relation: 'shared-context',
          type: 'painting', frame: 'mat',
          file: 'File:The Hand of Guido.jpg',
          artist: 'Anonymous illuminator', title: 'The Guidonian hand', date: '1274',
          medium: 'Manuscript diagram', collection: 'Biblioteca Ambrosiana, Milan, MS D.75 inf., fol. 6r',
          note: `<p>The hand is much larger than the smiling figure beside it. Pitches and syllables are written closely on each joint and fingertip. This copy of Elias Salomonis’s <i>Scientia artis musicae</i> was made around 1274.</p>`,
        },
        {
          relation: 'documented-use',
          type: 'poem', author: 'Traditionally attributed to Paul the Deacon',
          title: 'Ut queant laxis — first stanza', date: 'Eighth century', lang: 'Latin', translator: 'Our translation',
          original: `Ut queant laxis
resonare fibris
mira gestorum
famuli tuorum,
solve polluti
labii reatum,
Sancte Ioannes.`,
          translation: `So that your servants
may sing with loosened voices
the wonders of your deeds,
release the guilt
of defiled lips,
Saint John.`,
          note: `<p>The singers ask John the Baptist to free their lips for praise. Guido took the syllables <i>ut, re, mi, fa, sol, la</i> from the beginnings of the prayer’s six half-lines. The final invocation, <i>Sancte Ioannes</i>, falls outside his six-note series.</p>`,
        },
      ],
    },
    {
      id: 'organum', numeral: 'iv', label: 'Notre-Dame, Paris · c. 900–1200',
      heading: 'Pérotin holds a word in the air',
      question: 'Three voices above a sustained chant note',
      html: `
<p class="dropcap">An English theorist writing after 1280 remembered two Parisian masters. Léonin had made a great book of organum for worship at Notre-Dame; Pérotin had revised it and written music in three and four parts. The theorist, whose name is lost, called him “Pérotin the Great”. He named <i>Viderunt</i> and <i>Sederunt</i> among his excellent four-part pieces. This witness is known as Anonymous IV.</p>
<p>The extra voice had a much older history. The ninth-century <i>Musica enchiriadis</i> describes singers joining a chant at the fourth or fifth, sometimes doubling the parts at the octave. In a parallel passage the two voices rise and fall together. Elsewhere one voice holds a note while the other moves, and they end on the same note.</p>
<p>In the Notre-Dame repertory the added voice could become much more elaborate. The chant moved into a tenor part, from the Latin <i>tenere</i>, to hold. One tenor note might last through a whole phrase of the upper voice. When both parts moved in measured rhythm, the passage was in discant. A service could pass from plainchant into these elaborate sections and back again.</p>
<aside class="note"><b>Long and short</b>Rhythmic modes arrange notes in recurring patterns of long and short values. Ligatures, groups of notes joined in a single written shape, helped singers recognise the pattern. A rhythmic mode concerns rhythm; the church modes concern melody.</aside>
<p>Pérotin’s <i>Viderunt omnes</i> adds three upper parts to the tenor. The Christmas gradual begins with the words ‘All the ends of the earth have seen the salvation of our God’, but the opening syllable is drawn out at great length. Above the held chant note, short figures turn and pass between the singers. When one voice rests, another fills the gap.</p>
<p>A measured section could be lifted out and replaced with another setting of the same chant fragment. Such a section was called a clausula. When singers added words to an upper part, they helped create the motet. Soon different voices could sing different texts at once, while the tenor kept to its fragment of chant.</p>`,
      score: [
        {
          kicker: 'Schematic · parallel organum',
          title: 'A melody and its fifth',
          abc: `X:4
T:Parallel fifths
M:4/4
L:1/4
Q:1/4=72
K:C
V:1 name="Added voice"
V:2 name="Model melody"
V:1
%%MIDI program 52
G A B c | B A G2 |]
V:2
%%MIDI program 52
C D E F | E D C2 |]`,
          caption: 'An invented melody, sung with a second voice a fifth above, as a schematic of parallel organum. C and G rise together to D and A, then E and B. Both parts have exactly the same rhythm.',
        },
        {
          kicker: 'Schematic · sustained tenor',
          title: 'Two rates of movement',
          abc: `X:5
T:A moving voice over a held note
M:6/8
L:1/8
Q:3/8=52
K:Ddor
V:1 name="Upper voice"
V:2 name="Tenor" clef=bass
V:1
%%MIDI program 52
A2 G F2 E | D2 F E2 D | F2 G A2 G | F2 E D3 |]
V:2
%%MIDI program 52
D,6- | D,6- | D,6- | D,6 |]`,
          caption: 'The tenor holds D through all four bars while the upper voice rises and falls. This invented schematic is written in modern 6/8 metre.',
        },
      ],
      arts: [{
        relation: 'documented-use',
        type: 'painting', frame: 'mat',
        file: 'File:Pérotin - Viderunt omnes.jpg',
        artist: 'Anonymous Parisian scribe', title: 'Opening of Pérotin’s Viderunt omnes', date: 'Thirteenth century',
        medium: 'Music manuscript on parchment', collection: 'Biblioteca Medicea Laurenziana, Florence, MS Pluteo 29.1',
        note: `<p>This thirteenth-century page from the Florence manuscript, now MS Pluteo 29.1, holds the opening of <i>Viderunt omnes</i>. Groups of square notes fill the upper staves. The tenor has far fewer.</p>`,
      }],
    },
    {
      id: 'ars-nova', numeral: 'v', label: 'Machaut’s France · c. 1320–1370',
      heading: 'The poet counts the beats',
      question: 'Repeating rhythm with different notes each time',
      html: `
<p class="dropcap">Guillaume de Machaut spent years in the service of John, King of Bohemia, before settling in Reims, where he was a canon of the cathedral. He wrote love songs, long narrative poems and sacred music, and saw them collected in carefully arranged manuscript books. In the illustrations to these books, Nature comes to him and gives him Sense, Rhetoric and Music.</p>
<p>He inherited a new precision in musical notation. Around 1320 the <i>ars nova</i> (‘new art’), associated with Philippe de Vitry, extended the ways scribes could divide a note. A breve could hold two semibreves or three; each semibreve could in turn hold two minims or three. The two choices were independent of each other. A singer could sustain a note across an expected division while another part marked it.</p>
<aside class="note"><b>The signs survive</b>A circle indicated perfect tempus, with three semibreves to a breve; a semicircle indicated two. A dot indicated major prolation, with three minims to a semibreve. The semicircle is the ancestor of today’s common-time sign. Context and coloured notes could alter the written values.</aside>
<p>In an isorhythmic tenor, the composer repeats a rhythm called the <i>talea</i> through a sequence of pitches called the <i>color</i>. The two can have different lengths. In the example below, three durations (long, short, short) are applied to five notes, D–E–F–G–A. The next D falls on the last beat of the second bar. The talea and the color begin together again only after fifteen attacks.</p>
<p>Above a slowly repeating tenor, Machaut’s upper voices can trade quick notes and rests. In hocket, one voice sounds exactly where another stops, breaking a phrase into short fragments. A cadence brings the parts together again. The tenor’s recurring rhythm can shape a whole span of music while the upper voices move on to the next syllable.</p>
<aside class="note"><b>Two later labels</b>‘Isorhythm’ is a modern analytical term. The story that Machaut wrote his Mass for Charles V’s coronation in 1364 has also been set aside. Research connects the Mass with Marian worship and with the memorial foundation of Guillaume and his brother Jean at Reims.</aside>
<p>His four-voice <i>Messe de Nostre Dame</i>, usually dated to the 1360s, sets the Mass Ordinary from Kyrie to <i>Ite, missa est</i>. The movements with short texts are set in extended chant-based, isorhythmic music. In the long Gloria and Credo the voices often declaim the text together, syllable by syllable. The tenor and contratenor cross beneath the two upper parts, so the lowest sounding note can pass from one of these voices to the other.</p>
<p>Machaut also used repetition in his secular songs. In a rondeau the refrain returns with its words; a virelai alternates between refrain and verse; a ballade repeats its stanza form. The same manuscript could contain a lover’s complaint and a Mass, both by Machaut as poet and composer.</p>`,
      score: [{
        kicker: 'Schematic · isorhythm',
        title: 'Three durations, five pitches',
        abc: `X:6
T:Talea and color
M:4/4
L:1/4
Q:1/4=84
K:Ddor
V:1 name="Tenor model"
%%MIDI program 52
D2 E F | G2 A D | E2 F G | A2 D E | F2 G A |]`,
        caption: 'An invented isorhythmic tenor. The rhythm long–short–short repeats five times; D–E–F–G–A repeats three times. D first falls on a long note, then on a short one. Both patterns end together after fifteen attacks.',
      }],
      arts: [{
        relation: 'shared-context',
        type: 'painting', frame: 'mat',
        file: 'File:Machaut 1.jpg',
        artist: 'Anonymous French illuminator', title: 'Nature presents Sense, Rhetoric and Music to Machaut', date: 'Fourteenth century',
        medium: 'Manuscript illumination', collection: '',
        note: `<p>Nature brings Sense, Rhetoric and Music to Machaut, who stands ready with a book. They are characters in the <i>Prologue</i> to his collected works.</p>`,
      }],
    },
    {
      id: 'polyphony', numeral: 'vi', label: 'Florence, Rome and England · c. 1430–1600',
      heading: 'A greeting passes from voice to voice',
      question: 'Four separate vocal entries on one prayer',
      listen: [{ id: 'bach-wtc1-fugue-b-minor', t: 88, why: 'Bach’s four-part fugue gives the returning subject to voices inside the ensemble as well as to the highest part.' }],
      html: `
<p class="dropcap">On 25 March 1436, Pope Eugene IV consecrated Florence Cathedral. Guillaume Dufay supplied <i>Nuper rosarum flores</i>, a motet whose two lower parts draw on the chant for the dedication of a church. Above their long notes, two quicker voices sing of the pope’s gift of roses and ask the Virgin to hear the people of Florence.</p>
<p>A borrowed melody could also run through the movements of a Mass. This <i>cantus firmus</i>, or ‘fixed song’, might come from worship or from a secular song. Dufay and many successors built Masses on <i>L’homme armé</i>, a song about an armed man. The tune could move to a different voice or stretch into longer notes. At the same time, thirds and sixths were becoming familiar consonances between the open fifths and octaves of cadences. In fauxbourdon, voices move together through a chain of sixth chords.</p>
<aside class="note"><b>Imitation and canon</b>In imitation, one voice begins a melody and another takes it up later, often at a different pitch. The parts can then diverge. In a strict canon, the copying continues.</aside>
<p>In 1502 a singer advising Duke Ercole I d’Este of Ferrara reported that Josquin des Prez wrote better music than his rival Heinrich Isaac, but warned that “he composes when he wants to”. Isaac also cost less. The duke chose Josquin.</p>
<p>In Josquin’s <i>Ave Maria … virgo serena</i>, the greeting descends through four voices, each entering with the same melody. Later, pairs of singers answer each other; at the final plea, ‘O mother of God, remember me’, all four sing together.</p>
<p>Palestrina’s <i>Missa Papae Marcelli</i>, published in Rome in 1567, is written for six voices and keeps the words audible. In the long Gloria and Credo, groups of singers often pronounce their syllables together. Elsewhere, one voice holds a note while the voices around it move, so that a consonance becomes a dissonance and then resolves down by a step. This figure is called a suspension.</p>
<aside class="note"><b>A famous rescue story</b>The claim that this Mass saved church polyphony from a ban became part of Palestrina’s legend. Agostino Agazzari was telling it by 1607. The surviving evidence records no such decisive performance before the Council of Trent.</aside>
<p>Thomas Tallis enlarged the company to forty in <i>Spem in alium</i>, written around 1570. Eight choirs of five parts enter in turn, overlap and join in the full ensemble. A phrase begun by a few singers can be answered by voices on the far side of the room. At points all forty voices sing together.</p>`,
      score: [{
        kicker: 'Schematic · imitation in two voices',
        title: 'Answer at one bar’s distance',
        abc: `X:7
T:An imitative entry
M:4/4
L:1/4
Q:1/4=80
K:C
V:1 name="Upper"
V:2 name="Lower" clef=bass
V:1
%%MIDI program 52
C2 D E | G2 F E | E2 A G | c4 |]
V:2
%%MIDI program 52
z4 | C,2 D, E, | G,2 F, E, | C,4 |]`,
        caption: 'In this invented example, the lower voice enters one bar later, an octave below. It copies the first two bars of the upper melody while the upper voice continues on its own.',
      }],
      arts: [{
        relation: 'shared-context',
        type: 'painting', frame: 'gilt',
        file: 'File:Ghent Altarpiece - Singing Angels (left).jpg',
        artist: 'Hubert and Jan van Eyck', title: 'The Ghent Altarpiece: Singing Angels', date: '1432',
        medium: 'Oil on oak panel', collection: 'St Bavo’s Cathedral, Ghent',
        note: `<p>The Van Eycks’ angels stand close around a single book, their mouths open at different angles. Elsewhere in the altarpiece other angels play an organ and a harp, and one holds a bowed string instrument. A strand of a second angel’s hair shows at the far left of the organ panel, presumably belonging to the angel working the bellows.</p>`,
      }],
    },
    {
      id: 'instruments', numeral: 'vii', label: 'Cremona and Lübeck · c. 1400–1700',
      heading: 'The player’s hands and feet',
      question: 'Sustained pipe tone and decaying plucked string',
      listen: [
        { id: 'bach-brandenburg-5-allegro', t: 22, why: 'The harpsichord’s plucked notes sound beneath the longer flute and violin phrases.' },
        { id: 'bach-brandenburg-5-allegro', t: 386, why: 'The harpsichord plays alone, filling the gap with scales, arpeggios and repeated notes.' },
      ],
      html: `
<p class="dropcap">Dieterich Buxtehude became organist of St Mary’s in Lübeck in 1668. In 1705 the young [[bach|Bach]] walked there to hear him. An organist could keep a bass going with the feet while both hands played above it, and changing keyboards or drawing a stop brought another set of pipes into the music. Bach stayed far longer than his employers in Arnstadt had allowed.</p>
<p>Bellows feed air to the organ’s pipes. A held key admits wind, and the note continues for as long as the supply lasts. An 8-foot stop sounds at ordinary keyboard pitch; a 4-foot stop sounds an octave higher, a 16-foot stop an octave lower. Several stops can sound together from one key. The organist chooses which pipes will sound before choosing the notes.</p>
<aside class="note"><b>A pipe measured in feet</b>The number comes from the nominal length of an open pipe at the bottom of the rank. A stopped pipe can give the same pitch at roughly half the length. Mixture stops bring several higher ranks into play together.</aside>
<p>A lute note begins to die away as soon as the finger releases the string. The European instrument descends from the Arabic <i>ʿūd</i>; its rounded body carries a fretted neck and strings grouped in courses, usually pairs. A player arranging a song in several parts for one instrument has to choose which notes to hold, which to repeat and which to let go. Lute tablature shows positions on the strings. The long-necked theorbo has additional low bass strings for accompanying a singer.</p>
<p>The bow lets a string sound for longer than a plucked note. A player can increase the pressure on a note or let it fade before changing pitch. Viols usually have frets and six strings, tuned mostly in fourths with a third in the middle; even the smaller sizes are held against the legs. Violins have no frets and normally carry four strings tuned in fifths. Their curved bridges let the bow reach one string without touching the strings beside it.</p>
<p>In sixteenth-century Cremona, Andrea Amati made violins with the familiar narrow waist and arched wooden body. His family’s workshops passed the craft through four generations. One surviving Amati violin from the 1560s, now in the Musical Instrument Museum in Phoenix, combines spruce and maple with ebony and rosewood.</p>
<aside class="note"><b>Viol and violin families</b>Treble, tenor and bass viols could take the separate lines of a consort piece. The violin family developed its own sizes and repertories. A bass viol and a cello belong to different families, despite their similar playing position.</aside>
<p>A harpsichord brings the plucked string to a keyboard. Pressing a key raises a jack; its small plectrum plucks the string, and a damper stops it when the key comes up. The player can lengthen the gap between notes or add more notes to a chord, but a harder touch does little to increase the volume. In the long harpsichord solo of [[bach|Bach]]’s <i>Fifth Brandenburg Concerto</i>, the sound is kept going by repeated fresh attacks.</p>`,
      score: [],
      arts: [{
        relation: 'shared-context',
        type: 'painting', frame: 'gilt',
        file: 'File:The Lute Player-Caravaggio (Hermitage).jpg',
        artist: 'Caravaggio', title: 'The Lute Player', date: 'c. 1595–96',
        medium: 'Oil on canvas', collection: 'State Hermitage Museum, St Petersburg',
        note: `<p>Caravaggio’s singer holds a lute close to the chest. A violin lies on the table beside the music books, whose painted pages include madrigals by Jacques Arcadelt, here sung by one person who also plays.</p>`,
      }],
    },
    {
      id: 'opera', numeral: 'viii', label: 'Florence and Mantua · c. 1570–1607',
      heading: 'Everyone will speak musically',
      question: 'Orpheus’s song and the ferryman’s refusal',
      listen: [
        { id: 'puccini-mi-chiamano-mimi', t: 0, why: 'Three centuries later, Mimì introduces herself in short sung phrases that follow the rhythms of conversation.' },
        { id: 'puccini-mi-chiamano-mimi', t: 160, why: 'After the hesitant exchanges of her introduction, Mimì sings a long lyrical phrase.' },
      ],
      html: `
<p class="dropcap">On 23 February 1607 Carlo Magno wrote from Mantua to his brother in Rome about the entertainment planned for the following evening. He called it unusual, because “all the characters will speak musically”. The work was Monteverdi’s <i>L’Orfeo</i>, with words by Alessandro Striggio, performed at the Gonzaga court on 24 February.</p>
<p>The experiment had a Florentine past. In the 1570s and 1580s, musicians and scholars met at Giovanni de’ Bardi’s house to discuss ancient Greek drama. Among them were Vincenzo Galilei, Galileo’s father, and the singer Giulio Caccini. They wanted a solo voice that carried every word, with instrumental support that left the text audible. Caccini’s <i>Le nuove musiche</i>, published in 1602, contained solo songs and advice on how to sing them. Jacopo Peri had already brought <i>Dafne</i> to the stage in 1598 and <i>Euridice</i> in 1600.</p>
<aside class="note"><b>Speech with pitches</b>Monody is solo singing with instrumental accompaniment. Recitative gives that voice the pace of speech, with several syllables on one note, a pause at a question and a longer note on an important word. The bass can hold one note while the singer declaims.</aside>
<p>Monteverdi was already in a dispute about words before he put Orpheus onstage. In books published in 1600 and 1603, Giovanni Maria Artusi attacked his treatment of dissonance. The disputed passages broke rules about how a note should approach or leave a clash. Artusi printed the offending notes without their words.</p>
<p><i>Cruda Amarilli</i>, one of the madrigals under attack, opened Monteverdi’s Fifth Book in 1605. The lover in the poem praises Amarilli’s beauty, then calls her deafer and more elusive than a snake. In 1607 Monteverdi’s brother Giulio Cesare explained the <i>seconda pratica</i> as a practice in which the words govern the harmony.</p>
<aside class="note"><b>The quarrel in print</b>The Fifth Book contains Monteverdi’s short promise of a fuller answer. Giulio Cesare’s explanation followed in the 1607 <i>Scherzi musicali</i>. The <a href="https://sscm-jscm.org/jscm-issues/volume-18-no-1/claudio-monteverdi-a-chronology/">Journal of Seventeenth-Century Music chronology</a> traces the publications and letters.</aside>
<p>In <i>L’Orfeo</i>, a messenger interrupts the shepherds’ celebration with news of Eurydice’s death. Orpheus begins <i>Tu se’ morta</i> by setting her death against his own continuing life. The vocal line pauses and rises, and Orpheus resolves to follow her. In the next act he reaches Charon, keeper of the crossing into the underworld.</p>
<p>Charon sings in a low register, accompanied by a small reed organ. Orpheus sings <i>Possente spirto</i>, a song with elaborate flourishes addressed to Charon. Two violins answer, then two cornetts, then a double harp. In the 1609 printed score, a plain vocal line is printed beside an elaborately ornamented one. Charon refuses Orpheus passage. Orpheus crosses only after his later lament has put Charon to sleep.</p>
<p>The Mantuan audience came by invitation. From 1637, Venice offered opera to people who bought a ticket. Monteverdi had been in the city since 1613 as music director at San Marco; in his last years he also wrote for its commercial theatres.</p>`,
      score: [],
      arts: [{
        relation: 'shared-context',
        type: 'painting', frame: 'gilt',
        file: 'File:Bernardo Strozzi - Claudio Monteverdi (c.1630).jpg',
        artist: 'Bernardo Strozzi', title: 'Portrait identified as Claudio Monteverdi', date: 'c. 1630',
        medium: 'Oil on canvas', collection: 'Tiroler Landesmuseum Ferdinandeum, Innsbruck',
        note: `<p>By the time of this portrait, Monteverdi had left Mantua for Venice and had directed the music at San Marco for some years. The dark clothes and white collar show an older man than the composer who first set the story of Orpheus’s descent to the underworld. The sitter is identified by his likeness to the engraving in the memorial volume <i>Fiori poetici</i>, published in 1644.</p>`,
      }],
    },
    {
      id: 'continuo', numeral: 'ix', label: 'Siena to Köthen · c. 1600–1722',
      heading: 'Room for the accompanist',
      question: 'Figured bass and the player’s realisation',
      listen: [{ id: 'couperin-nations-piemontaise', t: 0, why: 'The keyboard supplies harmony while the viol shares its bass line beneath two independent upper parts.' }],
      html: `
<p class="dropcap">Agostino Agazzari objected to busy lute players. In his 1607 book on accompanying an ensemble, published in Siena, he complained of players who ran through divisions from beginning to end, especially when others were doing the same. The result, he wrote, was “soup and confusion”. In his view a good accompanist needed to hear the singer and leave space.</p>
<p>The basso continuo gave that accompanist a written bass line and, where needed, figures specifying the notes above it. An organ, harpsichord or plucked-string instrument could fill in the chords; a bowed bass could share the lower line. Agazzari advised fuller chords for many voices and fewer notes for a soloist. He also noted the convenience of the system, since an organist expected to keep every vocal part in full score would need a library larger than a lawyer’s.</p>
<aside class="note"><b>Numbers above a note</b>A 6 calls for a sixth above the bass, usually with a third as well. A bare sharp or flat commonly alters the third. The player counts from the note being sounded, so the figures change when the bass moves.</aside>
<p>Over C, the accompanist might supply E and G. Over E marked with a 6, the notes G and C make the same C-major chord with a different note at the bottom. A 4–3 over G calls for C to move down to B. In the example below, C belongs to the preceding F-major chord; the bass then moves to G, and the held C becomes a dissonance that resolves down a step. The figures give the essential motion. The player chooses where to put the other notes and how much to play.</p>
<p>The cadence G–C in the bass, with B rising to C above it, became one of the familiar ways to close a phrase in C major. Composers could establish another key with another such cadence and then return to the home key. In his <i>Traité de l’harmonie</i> of 1722, [[rameau|Rameau]] explained chords through their roots and inversions, so that the lowest sounding note and the root of the chord can differ. His ‘fundamental bass’ follows those roots beneath the notes the players actually sound.</p>
<aside class="note"><b>The Pythagorean comma</b>Twelve pure fifths overshoot seven octaves. A keyboard tuner must put the discrepancy somewhere, narrowing some intervals or leaving one unusable. Written C, E and G stay the same; the distances between them change.</aside>
<p>Quarter-comma meantone narrows the fifths to make several major thirds pure, among them C–E. On an ordinary twelve-note keyboard, the remaining ‘wolf’ interval makes some distant keys painful. Some instruments supplied extra notes with split keys. Equal temperament spreads the compromise evenly through twelve semitones, giving every major third the same slightly wide span.</p>
<p>Unequal circulating temperaments make every key available while giving their thirds and fifths different sizes. [[bach|Bach]] dated the first book of <i>The Well-Tempered Clavier</i> 1722. It contains a prelude and fugue in each of the twelve major keys and twelve minor keys. A player begins in C major, moves to C minor and works through the keyboard to B minor.</p>
<aside class="note"><b>Bach’s tuning</b>The title refers to all twenty-four keys. It does not specify the temperament; equal temperament is one of several proposed solutions.</aside>`,
      score: [{
        kicker: 'Schematic · a figured-bass cadence',
        title: 'The held C, then B',
        abc: `X:8
T:A continuo cadence
M:4/4
L:1/4
Q:1/4=64
K:C
V:1 name="Realisation"
V:2 name="Bass" clef=bass
V:1
%%MIDI program 6
[E G c]4 | [F A c]4 | [D G c]2 [D G B]2 | [E G c]4 |]
V:2
%%MIDI program 42
C,4 | F,4 | "4 - 3"G,4 | C,4 |]`,
        caption: 'An invented cadence in C major. The upper C is held as the bass moves from F to G, so that the consonant fifth becomes a dissonant fourth. The C then falls to B and rises to C at the final chord. The figures 4–3 specify the descent; the chords shown are one possible realisation.',
      }],
      arts: [{
        relation: 'shared-context',
        type: 'painting', frame: 'gilt',
        file: 'File:Gerard ter Borch (der Jüngere) (1617 - 1681) - The Concert - 791G - Gemäldegalerie.jpg',
        artist: 'Gerard ter Borch', title: 'The Concert', date: 'c. 1675',
        medium: 'Oil on panel', collection: 'Gemäldegalerie, Berlin',
        note: `<p>Ter Borch places a bowed bass in the foreground, its player turned away from the viewer, with a harpsichord beyond. The satin catches the light. Bowed bass and keyboard were a familiar pair for continuo, one sustaining the line while the other supplied chords.</p>`,
      }],
    },
  ],
};
