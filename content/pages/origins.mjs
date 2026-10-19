export default {
  slug: 'origins',
  title: 'Before Bach',
  kicker: 'Origins',
  glyph: '𝄐',
  accent: '#7a2a1d',
  lede: '<p>Guido of Arezzo took a book of chants to Rome and taught a pope to sing a tune he had never heard. Six centuries later, Monteverdi gave Orpheus a song to charm the keeper of the underworld. The intervening years filled the page with new possibilities: a rhythm that could be written down, a melody answered by another voice, a bass line that left room for a player’s invention.</p>',
  lessons: [
    {
      id: 'monochord', numeral: 'i', label: 'Southern Italy · c. 530 BC',
      heading: 'Pythagoras and a piece of string',
      question: 'An octave fits into half a string; a fifth into two-thirds.',
      html: `
<p class="dropcap">Pythagoras settled in Croton, in southern Italy, around 530 BC. Later storytellers sent him past a blacksmith’s shop, where the hammers rang out in agreeable intervals. He weighed them, the story goes, and discovered music’s arithmetic. The legend gave a noisy workshop to an enduring idea: an octave, a fifth and a fourth could be expressed in small whole numbers.</p>
<aside class="note"><b>The smithy</b>Pythagoras left no writings. The hammer experiment belongs to later accounts of his life and fails as physics: doubling a hammer’s weight does not lower its sound by an octave. A string offers a reliable demonstration.</aside>
<p>A monochord has one string stretched over a box and a movable bridge beneath it. With the tension unchanged, a bridge at the halfway point makes the string sound an octave higher. Two-thirds of the length gives a fifth; three-quarters gives a fourth. The shorter the string, the faster it vibrates. The pitches have frequency ratios of <b>2:1, 3:2 and 4:3</b>; the string lengths run the other way round.</p>
<p>That string is also doing several things at once. Alongside the vibration of its whole length, it vibrates in halves, thirds and smaller divisions. These produce its partials: for an ideal flexible string, the frequencies are one, two, three and more times the lowest. Over a low C, the first six are C, C, G, C, E and G, climbing through the octaves. The fifth partial supplies an E, a pure major third above the fourth partial’s C.</p>
{{harmonic-series}}
<aside class="note"><b>Between the piano keys</b>The seventh partial falls about 31 cents below an equal-tempered B♭; the eleventh about 49 cents below F♯. A cent is one hundredth of an equal-tempered semitone. The diagram plots sixteen partials above C.</aside>
<p>A violin and a flute can play the same C and still be unmistakable: their partials sound with different strengths. Pythagorean tuning builds its notes by stacking pure fifths. Four such fifths lead to an E which, brought down into C’s octave, makes a wider third than the harmonic series supplies: 81:64 against 5:4. The two Es are close enough to share a name, and far enough apart to trouble a tuner.</p>
<p>Around the beginning of the sixth century AD, Boethius gathered Greek musical learning into his Latin <i>De institutione musica</i>. His book carried the ratios into medieval classrooms, where music belonged to the quadrivium alongside arithmetic, geometry and astronomy. A pupil studying music could spend much of the lesson dividing a string.</p>
<p>Greek theorists also divided scales into tetrachords, four notes spanning a fourth. Their names travelled less neatly than their arithmetic. Medieval musicians reassigned Dorian, Phrygian and Lydian to the [[origins#chant|church modes]]; a white-note scale from D to D models medieval Dorian, although ancient Greek Dorian used a different arrangement.</p>`,
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
        caption: 'Each bar returns to C, then rises by an octave, a fifth or a fourth. This schematic sets out the intervals associated with 2:1, 3:2 and 4:3. The keyboard playback uses equal temperament; the harmonic-series diagram above supplies the exact integer ratios.',
      }],
      arts: [{
        relation: 'shared-context',
        type: 'painting', frame: 'gilt',
        file: 'File:Raphael School of Athens.jpg',
        artist: 'Raphael', title: 'The School of Athens', date: '1509–11',
        medium: 'Fresco', collection: 'Stanza della Segnatura, Vatican Museums',
        note: `<p>Raphael’s Pythagoras bends over a book while a young figure holds up a tablet of musical proportions. Around him, philosophers argue and pupils gather. In the Vatican’s Renaissance schoolroom, the fourth — the <i>diatessaron</i> — takes its place beside Euclid’s geometry.</p>`,
      }],
    },
    {
      id: 'chant', numeral: 'ii', label: 'Rome and the Frankish churches · c. 750–1200',
      heading: 'The day is sung',
      question: 'A single tune carries the psalm, the prayer and the long vowel of an Alleluia.',
      html: `
<p class="dropcap">Pepin and his son Charlemagne made Roman worship a concern of the Frankish kings. From the middle of the eighth century, the chant of Rome spread through their churches and monasteries, taking new forms in the mouths of Frankish singers. This became the repertory we call Gregorian chant. Its name honours Pope Gregory the Great, who had died in 604.</p>
<p>The singers had a great deal to remember. At Mass, the Kyrie, Gloria and Sanctus returned with their familiar words; other texts changed with the feast. Around the Mass lay the Divine Office, the daily round of psalms, readings and prayers. All could be sung on a single melodic line, by one singer or a whole choir. One note to a syllable carried the words quickly. A melisma lingered on one vowel through a succession of notes.</p>
<p>A psalm tone made a long text manageable. A few opening notes brought the singers to a reciting pitch, where they could stay for as many syllables as the verse required. A small turn marked its middle; another ended it. The antiphon sung around the psalm determined which formula would fit. A choir could sing a new verse with a tune already in its memory.</p>
<aside class="note"><b>Four endings, eight modes</b>The usual finals are D, E, F and G. Each has an authentic mode, lying mainly above it, and a plagal partner, with the final nearer the middle of the melody’s range. The Greek names were adopted later: Dorian and Hypodorian, Phrygian and Hypophrygian, Lydian and Hypolydian, Mixolydian and Hypomixolydian. B♭ often softens a passage that a white-note scale would give B♮.</aside>
<p>Above the Latin words, scribes began to add neumes: small marks for rising, falling and grouping notes. In the early-tenth-century St Gall Cantatorium, these signs preserve fine details of a solo singer’s delivery. They worked with the singer’s memory. Later scribes placed the notes at different heights, then against reference lines, until an unfamiliar interval could be read from the page.</p>
<p>The later medieval sequence <i>Dies irae</i> begins F–E–F–D–E–C–D–D. It circles D with a C♮ below it, far from the sharpened leading note of a modern minor key. Its opening stanza summons David and the Sibyl to witness the day of judgement. Those eight notes would survive in [[berlioz|Berlioz]]’s <i>Symphonie fantastique</i> and haunt [[rachmaninoff|Rachmaninoff]]’s music.</p>
<p>At Rupertsberg in the twelfth century, Hildegard of Bingen wrote chants for her nuns whose leaps and long melismas stretched the voice beyond the compass of many older melodies. Near the end of her life, a dispute over a burial brought an interdict on the community. The women had to recite their services. Writing to the prelates of Mainz in 1178–79, Hildegard told them that those who unjustly silenced a church would “lose their share in the angels’ praises in heaven”.</p>`,
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
        caption: 'The first stanza of <i>Dies irae</i>, from the <i>Liber Usualis</i> (Solesmes, 1961), p. 1810. The opening eight notes fall back to D; the second line gives several notes to single syllables. Phrase separators replace a regular metre. Quavers provide a transcription unit, with dotted chant endings doubled for playback. Sources: <a href="https://gregobase.selapa.net/sources/3/2055.png">printed page</a> and <a href="https://gregobase.selapa.net/chant.php?id=1198">GregoBase</a>.',
      }],
      arts: [{
        relation: 'shared-context',
        type: 'painting', frame: 'mat',
        file: 'File:Hildegard von Bingen.jpg',
        artist: 'Anonymous Rupertsberg illuminator', title: 'Hildegard receiving a vision', date: 'Late twelfth century',
        medium: 'Manuscript illumination, reproduced from the Rupertsberg Scivias',
        collection: 'Formerly Wiesbaden, manuscript lost during the Second World War',
        note: `<p>Flames descend into Hildegard’s head as she writes; beside her, a scribe waits with his own tablet. This is the visionary author of <i>Scivias</i>, completed in 1151. The same woman supplied her community with the words and melodies of its chants, and made the Virtues sing in her drama <i>Ordo Virtutum</i>.</p>`,
      }],
    },
    {
      id: 'notation', numeral: 'iii', label: 'Arezzo and Rome · c. 1025',
      heading: 'The pope tries a new tune',
      question: 'Guido’s staff lets a singer find notes without first hearing them.',
      html: `
<p class="dropcap">Around 1028, Guido of Arezzo brought his chant book to Pope John XIX in Rome. The pope turned its pages and studied the rules. Guido later told his fellow monk Michael of Pomposa that John would not leave his seat until he had learnt a verse he had never heard: he wanted to try for himself what seemed scarcely believable in the schoolboys.</p>
<p>Guido had been tackling the slow business of teaching an enormous repertory by ear. His <i>Micrologus</i>, written around 1025–28, joined practical instruction to interval theory. Pitch letters and reference lines already existed. In the staff system he promoted, the lines and the spaces each gave a note its place. A C or F at the beginning fixed the surrounding tones and semitones; coloured lines helped the eye find them.</p>
<aside class="note"><b>The clef</b>A clef is a letter turned into a sign. C and F clefs identify one note on the staff. Moving the clef lets a scribe fit a high or low melody on the same few lines. Four lines eventually became usual for chant; the familiar five-line staff followed later.</aside>
<p>Guido’s other aid was a hymn to John the Baptist, <i>Ut queant laxis</i>. In its teaching melody, six phrases begin on successively higher notes: C, D, E, F, G and A. Their first syllables are <i>ut, re, mi, fa, sol, la</i>. A boy who knew the hymn could recall the opening of a phrase and find its note. Between <i>mi</i> and <i>fa</i> lay the semitone, E–F.</p>
<p>Later teachers developed overlapping six-note scales, or hexachords. The natural one began on C. The hard one began on G and included B♮; the soft one began on F and included B♭. Every hexachord kept its semitone between <i>mi</i> and <i>fa</i>. As a tune climbed beyond six notes, the singer changed hexachord — a mutation. G could become <i>ut</i> where it had just been <i>sol</i>, without changing pitch.</p>
<aside class="note"><b>Six syllables</b><i>Si</i>, and the substitution of <i>do</i> for <i>ut</i>, came later. The familiar Guidonian hand also survives in later teaching sources; Guido’s own writings do not describe that diagram.</aside>
<p>The hand put those notes on the body. A teacher pointed to a fingertip or joint, and the pupil supplied its pitch and syllable. In the thirteenth-century picture below, an enormous hand is crowded with tiny inscriptions. The master’s face peers out from beside it.</p>
<p>A staff could carry a melody far beyond Guido’s classroom, with its intervals intact. Singers still learnt pronunciation and phrasing from one another. The notes on the page settled where the voice should go; as composers began to set several voices moving together, scribes would also have to settle how long each note should last.</p>`,
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
        caption: 'Three schematic hexachords, beginning on C, G and F. The semitone always falls between <i>mi</i> and <i>fa</i>: E–F, B–C, then A–B♭. The syllables stay put while the pitches change. Bar lines separate the three teaching examples.',
      }],
      arts: [
        {
          relation: 'shared-context',
          type: 'painting', frame: 'mat',
          file: 'File:The Hand of Guido.jpg',
          artist: 'Anonymous illuminator', title: 'The Guidonian hand', date: '1274',
          medium: 'Manuscript diagram', collection: 'Biblioteca Ambrosiana, Milan, MS D.75 inf., fol. 6r',
          note: `<p>The hand dwarfs the smiling figure beside it. Each joint and fingertip carries pitches and syllables, packed so tightly that the skin seems embroidered. This copy of Elias Salomonis’s <i>Scientia artis musicae</i>, made around 1274, puts a singing lesson within reach of a pointing finger.</p>`,
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
          note: `<p>The singers ask John the Baptist to free their lips for praise. Guido gave the prayer a second job: the beginnings of its six half-lines became <i>ut, re, mi, fa, sol, la</i>. The final invocation, <i>Sancte Ioannes</i>, falls outside his six-note ladder.</p>`,
        },
      ],
    },
    {
      id: 'organum', numeral: 'iv', label: 'Notre-Dame, Paris · c. 900–1200',
      heading: 'Pérotin holds a word in the air',
      question: 'Three voices move above a chant note that scarcely seems to change.',
      html: `
<p class="dropcap">An English theorist writing after 1280 remembered two Parisian masters. Léonin had made a great book of organum for worship at Notre-Dame; Pérotin had revised it and written music in three and four parts. The theorist, whose name is lost, called him “Pérotin the Great”. He named <i>Viderunt</i> and <i>Sederunt</i> among his excellent four-part pieces. We call this witness Anonymous IV.</p>
<p>The extra voice had a much older history. The ninth-century <i>Musica enchiriadis</i> describes singers joining a chant at the fourth or fifth, sometimes doubling the parts at the octave. In a parallel passage the two voices rise and fall together. Elsewhere one waits while the other moves, and they meet on the same note. Organum could begin with that simple pleasure: a known melody acquiring a companion.</p>
<p>In the Notre-Dame repertory, the companion could become gloriously talkative. The chant moved into a tenor part, from the Latin <i>tenere</i>, to hold. One tenor note might last through a whole phrase of the upper voice. When both parts moved in measured rhythm, the singers had entered a passage of discant. A service could pass from plainchant into these elaborate stretches and back again.</p>
<aside class="note"><b>Long and short</b>Rhythmic modes arrange notes in recurring patterns of long and short values. Ligatures — groups of notes joined in a single written shape — helped singers recognise the pattern. Here a mode concerns rhythm; the church modes concern melody.</aside>
<p>Pérotin’s <i>Viderunt omnes</i> adds three upper parts to the tenor. The Christmas gradual begins with the words ‘All the ends of the earth have seen the salvation of our God’, but the opening syllable takes a remarkable time to unfold. Above the held chant note, short figures turn and pass between the singers. A rest opens a gap; another voice fills it. The word is still waiting to be finished.</p>
<p>A measured section could be lifted out and replaced with another setting of the same chant fragment. Such a section was called a clausula. When singers added words to an upper part, they helped create the motet. Soon different voices could sing different texts at once, while the tenor held to its fragment of chant.</p>`,
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
          caption: 'An invented melody, sung with a second voice a fifth above. C and G rise together to D and A, then E and B. Both parts keep exactly the same rhythm: a schematic of parallel organum.',
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
          caption: 'The tenor holds D through all four bars while the upper voice rises and falls. This invented schematic separates the two speeds clearly; the modern 6/8 metre makes the upper part easy to read.',
        },
      ],
      arts: [{
        relation: 'documented-use',
        type: 'painting', frame: 'mat',
        file: 'File:Pérotin - Viderunt omnes.jpg',
        artist: 'Anonymous Parisian scribe', title: 'Opening of Pérotin’s Viderunt omnes', date: 'Thirteenth century',
        medium: 'Music manuscript on parchment', collection: 'Biblioteca Medicea Laurenziana, Florence, MS Pluteo 29.1',
        note: `<p>The opening of <i>Viderunt omnes</i> fills this thirteenth-century page from the Florence manuscript, now MS Pluteo 29.1. Groups of square notes crowd the upper staves; the tenor has far fewer.</p>`,
      }],
    },
    {
      id: 'ars-nova', numeral: 'v', label: 'Machaut’s France · c. 1320–1370',
      heading: 'The poet counts the beats',
      question: 'A repeating rhythm can carry a different set of notes each time.',
      html: `
<p class="dropcap">Guillaume de Machaut spent years in the service of John, King of Bohemia, before making his later home in Reims, where he was a cathedral canon. He wrote love songs and long narrative poems as well as sacred music, and saw them gathered into carefully arranged manuscript books. In their pictures, Nature herself comes to equip him with Sense, Rhetoric and Music.</p>
<p>He inherited a new precision on the musical page. Around 1320, the <i>ars nova</i> — ‘new art’ — associated with Philippe de Vitry extended the ways scribes could divide a note. A breve could hold two semibreves or three; each semibreve could in turn hold two minims or three. The choices were independent. A singer could sustain a note across an expected division while another part marked it.</p>
<aside class="note"><b>The signs survive</b>A circle indicated perfect tempus, with three semibreves to a breve; a semicircle indicated two. A dot indicated major prolation, with three minims to a semibreve. The semicircle is the ancestor of today’s common-time sign. Context and coloured notes could alter the written values.</aside>
<p>In an isorhythmic tenor, the composer repeats a rhythm called the <i>talea</i> through a sequence of pitches called the <i>color</i>. The two can have different lengths. In the example below, three durations — long, short, short — travel through five notes, D–E–F–G–A. The next D arrives on the last beat of the second bar. Rhythm and melody have to turn through fifteen attacks before their beginnings meet again.</p>
<p>Above a slowly repeating tenor, Machaut’s upper voices can trade quick notes and rests. In hocket, one voice sounds precisely where another falls silent, breaking a phrase into hiccups. A cadence brings the parts together again. The tenor’s recurring rhythm can shape a whole span of music while the upper singers seem busy with the next syllable.</p>
<aside class="note"><b>Two later labels</b>‘Isorhythm’ is a modern analytical term. The story that Machaut wrote his Mass for Charles V’s coronation in 1364 has also been set aside; research connects it with Marian worship and the memorial foundation of Guillaume and his brother Jean at Reims.</aside>
<p>His four-voice <i>Messe de Nostre Dame</i>, usually dated to the 1360s, sets the Mass Ordinary from Kyrie to <i>Ite, missa est</i>. The short texts allow the singers to linger in chant-based, isorhythmic music. The long Gloria and Credo often bring them together syllable by syllable. The tenor and contratenor cross beneath the two upper parts, so even the lowest voice can change hands.</p>
<p>In his secular songs, Machaut gave recurrence another face. A rondeau’s refrain returns with its words; a virelai turns between refrain and verse; a ballade works through its repeated stanzas. The manuscript could hold a lover’s complaint beside a Mass, with the same poet-composer responsible for both.</p>`,
      score: [{
        kicker: 'Schematic · isorhythm',
        title: 'Three durations through five pitches',
        abc: `X:6
T:Talea and color
M:4/4
L:1/4
Q:1/4=84
K:Ddor
V:1 name="Tenor model"
%%MIDI program 52
D2 E F | G2 A D | E2 F G | A2 D E | F2 G A |]`,
        caption: 'An invented isorhythmic tenor. The rhythm long–short–short repeats five times; D–E–F–G–A repeats three times. D first falls on a long note, then on a short one. After fifteen attacks, the two patterns are ready to begin together again.',
      }],
      arts: [{
        relation: 'shared-context',
        type: 'painting', frame: 'mat',
        file: 'File:Machaut 1.jpg',
        artist: 'Anonymous French illuminator', title: 'Nature presents Sense, Rhetoric and Music to Machaut', date: 'Fourteenth century',
        medium: 'Manuscript illumination', collection: '',
        note: `<p>Nature brings Sense, Rhetoric and Music to Machaut, who stands ready with a book. They are characters in the <i>Prologue</i> to his collected works. The poet’s helpers arrive as people, and Music is one of the household.</p>`,
      }],
    },
    {
      id: 'polyphony', numeral: 'vi', label: 'Florence, Rome and England · c. 1430–1600',
      heading: 'A greeting passes from voice to voice',
      question: 'Four singers can enter separately and arrive at the same prayer.',
      listen: [{ id: 'bach-wtc1-fugue-b-minor', t: 88, why: 'Bach’s four-part fugue gives the returning subject to voices inside the ensemble as well as to the highest part.' }],
      html: `
<p class="dropcap">On 25 March 1436, Pope Eugene IV consecrated Florence Cathedral. Guillaume Dufay supplied <i>Nuper rosarum flores</i>, a motet whose two lower parts draw on the chant for the dedication of a church. Above their long notes, two quicker voices sing of the pope’s gift of roses and ask the Virgin to hear the people of Florence.</p>
<p>A borrowed melody could also run through the movements of a Mass. This <i>cantus firmus</i>, or ‘fixed song’, might come from worship or from a secular song: Dufay and many successors built Masses on <i>L’homme armé</i>, a song about an armed man. The tune could move to a different voice or stretch into longer notes. Meanwhile, thirds and sixths were becoming familiar consonances between the open fifths and octaves of cadences. In fauxbourdon, voices travel together through a chain of sixth chords.</p>
<aside class="note"><b>A delayed answer</b>In imitation, one voice begins a melody and another takes it up later, often at a different pitch. The parts can then go their separate ways. In a strict canon, the copying continues.</aside>
<p>Josquin des Prez was a composer worth bargaining over. In 1502, a singer advising Duke Ercole I d’Este of Ferrara admitted that Josquin wrote better music than his rival Heinrich Isaac, but warned: “he composes when he wants to”. Isaac also cost less. The duke chose Josquin.</p>
<p>In Josquin’s <i>Ave Maria … virgo serena</i>, the greeting descends through four voices, each entering with the same melody. Later, pairs of singers answer each other; at the final plea, ‘O mother of God, remember me’, all four sing together. The first words spread through the choir. The last come from everyone at once.</p>
<p>Palestrina’s <i>Missa Papae Marcelli</i>, published in Rome in 1567, gives six voices room to move without losing the words. In the long Gloria and Credo, groups of singers often pronounce their syllables together. Elsewhere, one voice holds a note while its neighbours move: a consonance becomes a dissonance, then eases down by a step. This suspension can make a small descent feel urgent.</p>
<aside class="note"><b>A famous rescue story</b>The claim that this Mass saved church polyphony from a ban became part of Palestrina’s legend. Agostino Agazzari was telling it by 1607. The surviving evidence gives no such decisive performance before the Council of Trent.</aside>
<p>Thomas Tallis enlarged the company to forty in <i>Spem in alium</i>, written around 1570. Eight choirs of five parts enter in turn, overlap and gather into the full ensemble. A phrase that begins with a few singers can draw an answer from voices far across the room. Then all forty arrive.</p>`,
      score: [{
        kicker: 'Schematic · imitation in two voices',
        title: 'An answer one bar later',
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
        note: `<p>The Van Eycks’ angels press around a single book, mouths open at different angles. Across the altarpiece, other angels play an organ and a harp, and one holds a bowed string instrument. Even heaven needs someone at the bellows: a strand of a second angel’s hair shows at the far left of the organ panel.</p>`,
      }],
    },
    {
      id: 'instruments', numeral: 'vii', label: 'Cremona and Lübeck · c. 1400–1700',
      heading: 'The player’s hands and feet',
      question: 'A pipe can hold its note; a plucked string begins to fade.',
      listen: [
        { id: 'bach-brandenburg-5-allegro', t: 22, why: 'The harpsichord’s plucked notes flicker beneath the longer flute and violin phrases.' },
        { id: 'bach-brandenburg-5-allegro', t: 386, why: 'The harpsichord takes the floor alone, filling the gap with scales, arpeggios and repeated notes.' },
      ],
      html: `
<p class="dropcap">Dieterich Buxtehude became organist of St Mary’s in Lübeck in 1668. In 1705, the young [[bach|Bach]] walked there to hear him. An organist could keep a bass going with the feet while both hands played above it; changing keyboards or drawing a stop brought another set of pipes into the music. Bach stayed far longer than his employers in Arnstadt had allowed.</p>
<p>Bellows feed air to the organ’s pipes. A held key admits wind, and the note continues for as long as the supply lasts. An 8-foot stop sounds at ordinary keyboard pitch; a 4-foot stop sounds an octave higher, a 16-foot stop an octave lower. Several stops can sound together from one key. The organist chooses which pipes will speak before choosing the notes.</p>
<aside class="note"><b>A pipe measured in feet</b>The number comes from the nominal length of an open pipe at the bottom of the rank. A stopped pipe can give the same pitch at roughly half the length. Mixture stops bring several higher ranks into play together.</aside>
<p>A lute note begins to die away as soon as the finger releases the string. The European instrument descends from the Arabic <i>ʿūd</i>; its rounded body carries a fretted neck and strings grouped in courses, usually pairs. A player fitting a many-voiced song under one hand must choose which notes to hold, which to repeat and which to let go. Lute tablature shows positions on the strings. The long-necked theorbo adds low bass strings for accompanying a singer.</p>
<p>The bow gives a string a longer breath. A player can lean into a note or let it dwindle before changing pitch. Viols usually have frets and six strings, tuned mostly in fourths with a third in the middle; even the smaller sizes rest against the legs. Violins have no frets and normally carry four strings tuned in fifths. Their curved bridges let the bow reach one string without catching its neighbours.</p>
<p>In sixteenth-century Cremona, Andrea Amati made violins with the familiar narrow waist and arched wooden body. His family’s workshops passed the craft through four generations. One surviving Amati violin from the 1560s, now in the Musical Instrument Museum in Phoenix, combines spruce and maple with ebony and rosewood.</p>
<aside class="note"><b>A family of bowed voices</b>Treble, tenor and bass viols could take the separate lines of a consort piece. The violin family developed its own sizes and repertories. A bass viol and a cello belong to different families, despite their similar playing position.</aside>
<p>A harpsichord brings the plucked string to a keyboard. Pressing a key raises a jack; its small plectrum catches the string, then a damper stills it when the key comes up. The player can lengthen the gap between notes or pile more notes into a chord, but a harder touch does little to increase the volume. [[bach|Bach]] makes that limitation sound extravagant in the <i>Fifth Brandenburg Concerto</i>: the harpsichord’s great solo keeps renewing the sound with fresh attacks.</p>`,
      score: [],
      arts: [{
        relation: 'shared-context',
        type: 'painting', frame: 'gilt',
        file: 'File:The Lute Player-Caravaggio (Hermitage).jpg',
        artist: 'Caravaggio', title: 'The Lute Player', date: 'c. 1595–96',
        medium: 'Oil on canvas', collection: 'State Hermitage Museum, St Petersburg',
        note: `<p>Caravaggio’s singer holds a lute close to the chest. A violin lies on the table beside the music books, whose painted pages include madrigals by Jacques Arcadelt. The songs have left the choirbook for a room where one person can sing and play.</p>`,
      }],
    },
    {
      id: 'opera', numeral: 'viii', label: 'Florence and Mantua · c. 1570–1607',
      heading: 'Everyone will speak musically',
      question: 'A ferryman hears Orpheus’s finest song and refuses him passage.',
      listen: [
        { id: 'puccini-mi-chiamano-mimi', t: 0, why: 'Three centuries later, Mimì introduces herself in short sung phrases that still sound like conversation.' },
        { id: 'puccini-mi-chiamano-mimi', t: 160, why: 'Mimì’s voice opens into a long lyrical phrase after the hesitant exchanges of her introduction.' },
      ],
      html: `
<p class="dropcap">On 23 February 1607, Carlo Magno wrote from Mantua to his brother in Rome about the entertainment planned for the following evening. It would be unusual: “all the characters will speak musically”. The work was Monteverdi’s <i>L’Orfeo</i>, with words by Alessandro Striggio, performed at the Gonzaga court on 24 February.</p>
<p>The experiment had a Florentine past. In the 1570s and 1580s, musicians and scholars met at Giovanni de’ Bardi’s house to discuss ancient Greek drama. Among them were Vincenzo Galilei, Galileo’s father, and the singer Giulio Caccini. They wanted a voice that could make every word count, supported by instruments that would leave the text clear. Caccini’s <i>Le nuove musiche</i>, published in 1602, offered solo songs and advice on singing them. Jacopo Peri had already brought <i>Dafne</i> to the stage in 1598 and <i>Euridice</i> in 1600.</p>
<aside class="note"><b>Speech with pitches</b>Monody is solo singing with instrumental accompaniment. Recitative gives that voice the pace of speech: several syllables on one note, a pause at a question, a longer sound on a word that matters. The bass can stay still while the singer thinks aloud.</aside>
<p>Monteverdi had been arguing about words before he put Orpheus onstage. In books published in 1600 and 1603, Giovanni Maria Artusi attacked his treatment of dissonance. The disputed passages broke rules about how a note should approach or leave a clash. Artusi printed the offending notes without their words.</p>
<p><i>Cruda Amarilli</i>, one of the madrigals under attack, opened Monteverdi’s Fifth Book in 1605. Its lover praises Amarilli’s beauty, then finds her deafer and more elusive than a snake. In 1607, Monteverdi’s brother Giulio Cesare explained the <i>seconda pratica</i>: the words govern the harmony. A cruel word might deserve a cruel interval.</p>
<aside class="note"><b>The quarrel in print</b>The Fifth Book contains Monteverdi’s short promise of a fuller answer. Giulio Cesare’s explanation followed in the 1607 <i>Scherzi musicali</i>. The <a href="https://sscm-jscm.org/jscm-issues/volume-18-no-1/claudio-monteverdi-a-chronology/">Journal of Seventeenth-Century Music chronology</a> traces the publications and letters.</aside>
<p>In <i>L’Orfeo</i>, a messenger interrupts the shepherds’ happiness with news of Eurydice’s death. Orpheus begins <i>Tu se’ morta</i> by setting her death against his own continuing life. The voice pauses, climbs and finds the will to go after her. In the next act he reaches Charon, keeper of the crossing into the underworld.</p>
<p>Charon sings low, accompanied by the rasp of a small reed organ. Orpheus offers <i>Possente spirto</i>, a song whose flourishes try to win him over. Two violins answer, then two cornetts, then a double harp. In the 1609 printed score, a plain vocal line sits beside an elaborately ornamented one. Charon hears all this beauty and still refuses. Only when Orpheus’s later lament puts him to sleep can the singer cross.</p>
<p>The Mantuan audience came by invitation. From 1637, Venice offered opera to people who bought a ticket. Monteverdi had been in the city since 1613 as music director at San Marco; in his last years, he also wrote for its commercial theatres. A court entertainment had acquired a box office.</p>`,
      score: [],
      arts: [{
        relation: 'shared-context',
        type: 'painting', frame: 'gilt',
        file: 'File:Bernardo Strozzi - Claudio Monteverdi (c.1630).jpg',
        artist: 'Bernardo Strozzi', title: 'Portrait identified as Claudio Monteverdi', date: 'c. 1630',
        medium: 'Oil on canvas', collection: 'Tiroler Landesmuseum Ferdinandeum, Innsbruck',
        note: `<p>By the time of this portrait, Monteverdi had left Mantua for Venice and spent years directing the music at San Marco. The dark clothes and white collar belong to an older man than the composer who first sent Orpheus into the underworld. The sitter is identified through his likeness to the engraving in the memorial volume <i>Fiori poetici</i>, published in 1644.</p>`,
      }],
    },
    {
      id: 'continuo', numeral: 'ix', label: 'Siena to Köthen · c. 1600–1722',
      heading: 'Room for the accompanist',
      question: 'A bass line and a few figures leave much of the music in the player’s hands.',
      listen: [{ id: 'couperin-nations-piemontaise', t: 0, why: 'The keyboard supplies harmony while the viol shares its bass line beneath two independent upper parts.' }],
      html: `
<p class="dropcap">Agostino Agazzari had heard enough busy lute players. In his 1607 book on accompanying an ensemble, published in Siena, he complained of players who ran through divisions from beginning to end, especially when others were doing the same. The result was “soup and confusion”. A good accompanist needed to hear the singer and leave space.</p>
<p>The basso continuo gave that accompanist a written bass line and, where needed, figures specifying the notes above it. An organ, harpsichord or plucked-string instrument could fill in the chords; a bowed bass could share the lower line. Agazzari advised fuller chords for many voices and fewer notes for a soloist. He also knew the convenience of the system: an organist expected to keep every vocal part in full score would need a library larger than a lawyer’s.</p>
<aside class="note"><b>Numbers above a note</b>A 6 calls for a sixth above the bass, usually with a third as well. A bare sharp or flat commonly alters the third. The player counts from the note being sounded, so the figures change when the bass moves.</aside>
<p>Over C, the accompanist might supply E and G. Over E marked with a 6, the notes G and C make the same C-major chord with a different note at the bottom. A 4–3 over G asks for C to move down to B. In the example below, C belongs comfortably to the preceding F-major chord; the bass then moves to G and makes that held C ache for its downward step. The figures give the essential motion. The player chooses where to put the other notes and how much to play.</p>
<p>The cadence G–C in the bass, with B rising to C above it, became one of the familiar ways to close a phrase in C major. Composers could establish another key with another such arrival, then find their way home. In his <i>Traité de l’harmonie</i> of 1722, [[rameau|Rameau]] explained chords through their roots and inversions: the lowest sounding note and the chord’s root can differ. His ‘fundamental bass’ follows those roots beneath the notes the players actually sound.</p>
<aside class="note"><b>A circle that will not close</b>Twelve pure fifths overshoot seven octaves. A keyboard tuner must put the discrepancy somewhere, narrowing some intervals or leaving an unusable one. The written C, E and G stay the same; their distances change.</aside>
<p>Quarter-comma meantone narrows the fifths to make several major thirds pure. The sweet C–E comes at a price: on an ordinary twelve-note keyboard, the remaining ‘wolf’ interval makes some distant keys painful. Some instruments supplied extra notes with split keys. Equal temperament spreads the compromise evenly through twelve semitones, giving every major third the same slightly wide span.</p>
<p>Unequal circulating temperaments make every key available while giving their thirds and fifths different sizes. [[bach|Bach]] dated the first book of <i>The Well-Tempered Clavier</i> 1722: twelve major keys and twelve minor keys, each with a prelude and fugue. A player begins in C major, moves to C minor and works through the keyboard to B minor.</p>
<aside class="note"><b>Bach’s tuning</b>The title promises access to all twenty-four keys. It leaves the precise temperament unspecified; equal temperament is one of several proposed solutions.</aside>`,
      score: [{
        kicker: 'Schematic · a figured-bass cadence',
        title: 'The held C gives way to B',
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
        caption: 'An invented cadence in C major. The upper C stays in place as the bass moves from F to G, turning a comfortable fifth into a dissonant fourth. It falls to B, then rises to C at the final chord. The figures 4–3 specify the descent; the chords shown are one possible realisation.',
      }],
      arts: [{
        relation: 'shared-context',
        type: 'painting', frame: 'gilt',
        file: 'File:Gerard ter Borch (der Jüngere) (1617 - 1681) - The Concert - 791G - Gemäldegalerie.jpg',
        artist: 'Gerard ter Borch', title: 'The Concert', date: 'c. 1675',
        medium: 'Oil on panel', collection: 'Gemäldegalerie, Berlin',
        note: `<p>Ter Borch places a bowed bass in the foreground, its player turned away from us, with a harpsichord beyond. The satin catches the light; the instruments draw the women together across the room. Bowed bass and keyboard were a familiar pair for continuo, one sustaining the line while the other supplied chords.</p>`,
      }],
    },
  ],
};
