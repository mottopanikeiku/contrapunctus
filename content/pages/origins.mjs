export default {
  slug: 'origins',
  title: 'Before Bach',
  kicker: 'Origins',
  glyph: '𝄐',
  accent: '#7a2a1d',
  lede: '<p>A vibrating string, a remembered chant, a second voice: the techniques behind Bach’s music were made over two thousand years. Their history runs through Greek mathematics, monastic classrooms, Parisian choir stalls, Italian workshops and the first opera theatres.</p>',
  lessons: [
    {
      id: 'monochord', numeral: 'i', label: 'c. 530 BC',
      heading: 'A string divided',
      html: `
<p class="dropcap">Pythagoras settled at Croton in southern Italy around 530 BC. He left no writings, and the musical discoveries attached to his name belong to a tradition assembled by later authors. What survives is a proposition that could be tested: the octave, fifth and fourth correspond to small whole-number ratios. These ratios did not invent music, which already had long histories in Mesopotamia, Egypt and Greece. They made musical intervals available to mathematical demonstration.</p>
<aside class="note"><b>The blacksmith story</b>Later writers describe Pythagoras discovering consonance from hammers of different weights. The experiment does not work as told: hammer weight alone does not determine pitch, and string frequency varies with the square root of tension, not directly with the suspended weight.</aside>
<p>A monochord is one string stretched over a resonating box, with a movable bridge that changes its vibrating length. Keep the string’s tension and mass per unit length constant and halve that length: the frequency doubles, producing an octave. Stop the string at two-thirds of its original length and the frequency becomes three-halves, a perfect fifth above the original note. Three-quarters of the length gives four-thirds of the frequency, a perfect fourth. The frequency ratios are therefore <b>2:1, 3:2 and 4:3</b>; the corresponding length ratios run in the opposite direction. A fifth divided by a fourth gives 9:8, the Pythagorean whole tone.</p>
<p>A real stretched string also vibrates in several patterns at once. Its whole length produces the fundamental; two equal sections produce the second partial, three sections the third, and so on. For an ideal flexible string these frequencies form the harmonic series: 1, 2, 3, 4, 5, 6 times the fundamental. Over C, the first six partials are C, C, G, C, E and G in successively higher registers. The third partial is a fifth above the second, the fourth a fourth above the third. The fifth introduces the pure major third, 5:4, above the fourth.</p>
{{harmonic-series}}
<aside class="note"><b>Not sixteen piano keys</b>The diagram gives integer multiples of C’s frequency. The seventh partial lies about 31 cents below the nearest equal-tempered B♭; the eleventh lies about 49 cents below F♯. A cent is one hundredth of an equal-tempered semitone.</aside>
<p>The harmonic series is a modern acoustical explanation, not a report of what Pythagoras knew. It also does not prescribe a single musical language. Pythagorean tuning builds notes from successive pure fifths; its major third is 81:64, wider than the series’ 5:4. A flute, a violin and a voice emphasise their partials differently, which helps distinguish their timbres even on the same pitch. Bells and other vibrating bodies can have strongly inharmonic partials, whose frequencies are not whole-number multiples of one fundamental.</p>
<p>Boethius’s <i>De institutione musica</i>, written around the beginning of the sixth century AD, carried Greek mathematical theory into Latin education. Music joined arithmetic, geometry and astronomy in the quadrivium: number studied in relation to sounding intervals. This written inheritance is not an unbroken transmission of Greek performance. Ancient theorists organised scales through tetrachords — four notes spanning a fourth — and used terms such as <i>harmonia</i> and <i>tonos</i> in several distinct senses.</p>
<p>The Greek names Dorian, Phrygian and Lydian were later reassigned to [[origins#chant|church modes]]. Ancient Greek Dorian and medieval Dorian do not name the same octave arrangement. A modern white-note scale from D to D is a useful first model of church Dorian, but it cannot reconstruct an ancient Greek song: the surviving names conceal changes of theory, repertory and musical practice.</p>`,
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
        caption: 'An interval schematic, not an ancient melody. Each bar begins on the same C. The written octave, fifth and fourth represent the intervals associated with 2:1, 3:2 and 4:3; this keyboard playback uses equal temperament, so only the octave reproduces its ratio exactly. Use the harmonic-series diagram to hear integer-ratio partials.',
      }],
      arts: [{
        type: 'painting', frame: 'gilt',
        file: 'File:Raphael School of Athens.jpg',
        artist: 'Raphael', title: 'The School of Athens', date: '1509–11',
        medium: 'Fresco', collection: 'Stanza della Segnatura, Vatican Museums',
        note: `<p>Pythagoras sits in the lower-left foreground, writing beside a tablet of musical proportions. Raphael placed the mathematical study of consonance among philosophy’s principal disciplines, more than two millennia after Pythagoras. The <a href="https://www.museivaticani.va/content/museivaticani/en/collezioni/musei/stanze-di-raffaello/stanza-della-segnatura/scuola-di-atene.html">Vatican’s account</a> identifies the interval under discussion as the <i>diatessaron</i>, the fourth. This is a Renaissance image of ancient theory, not evidence for an ancient performance.</p>`,
      }],
    },
    {
      id: 'chant', numeral: 'ii', label: 'c. 750–1200',
      heading: 'One line, many functions',
      html: `
<p class="dropcap">Gregorian chant is a repertory of Latin liturgical melodies, not the work of Pope Gregory the Great. Gregory died in 604; the repertory’s decisive formation and dissemination belong to the eighth- and ninth-century encounter between Roman worship and the Frankish church under the Carolingians. Its exact relationship to the separately transmitted Old Roman chant remains a subject of scholarship. The papal name gave authority to a body of music transmitted first through singers, then through books.</p>
<p>Chant is monophonic: one melodic line, whether sung by a soloist or a group. It serves two large structures, the Mass and the Divine Office, the daily cycle of services organised around psalms, readings and prayers. The Mass Ordinary includes recurring texts such as the Kyrie, Gloria and Sanctus; the Proper supplies texts that change with the day or feast. A syllabic chant gives mostly one note to each syllable. A melismatic chant stretches a syllable over many notes, sometimes turning one vowel into a substantial musical span.</p>
<aside class="note"><b>Four finals, eight modes</b>Modes 1–2 end normally on D, 3–4 on E, 5–6 on F and 7–8 on G. The odd-numbered modes are authentic; their even-numbered partners are plagal. These are categories of melodic behaviour, not eight modern keys.</aside>
<p>The eight-mode system classified chants by their final, range and characteristic melodic relationships. An authentic melody generally occupies the octave above its final, with some extension below; a plagal melody places the same final more centrally in its range. The customary names are Dorian and Hypodorian, Phrygian and Hypophrygian, Lydian and Hypolydian, Mixolydian and Hypomixolydian. Actual melodies often exceed the textbook compass. B♭ can appear where a white-note diagram would suggest B♮, and some older chants fit their assigned category imperfectly.</p>
<p>A psalm tone is a reusable formula rather than a through-composed tune. An opening intonation leads to a reciting pitch on which many syllables can be sung; a cadence marks the middle of the verse, and another closes it. The amount of recitation expands or contracts with the words. An antiphon, a short chant sung around the psalm, determines the appropriate tone and ending. Modal classification thus solved a practical problem: how to connect hundreds of different antiphons with a manageable stock of psalm formulas.</p>
<aside class="note"><b>Reading a gesture</b>Staffless neumes record ascent, descent, grouping and details of delivery without consistently fixing interval size. The <a href="https://www.e-codices.unifr.ch/en/searchresult/list/one/csg/0359">St Gall Cantatorium</a>, copied in the early tenth century, preserves exceptionally detailed signs for solo chants.</aside>
<p>The earliest neumes sit above the text like marks of vocal movement. They usually assume that the singer already knows the melody; they are not defective versions of a modern score. Later heighted notation makes relative pitch more visible, and the staff fixes it more precisely. Rhythmic interpretation remains less secure: neither modern bar lines nor an unvarying sequence of equal notes can simply be projected back onto all medieval practice. The Latin accent, the grouping of notes and the liturgical sentence all shape delivery.</p>
<p>The <i>Dies irae</i> is a later medieval sequence, not a chant composed by Gregory. Its opening stanza describes the day of judgement and invokes David and the Sibyl as witnesses. The tune begins F–E–F–D–E–C–D–D, returning repeatedly to D without a leading-note C♯. [[berlioz|Berlioz]] quotes it in the <i>Symphonie fantastique</i>; [[rachmaninoff|Rachmaninoff]] repeatedly uses its opening contour. Hildegard of Bingen’s twelfth-century songs show a different extension of monophony: unusually wide ranges and long melismas, composed for a women’s religious community rather than inherited anonymously from the Carolingian repertory.</p>`,
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
        caption: 'Pitches and syllabic groupings transcribed from the <i>Liber Usualis</i> (Solesmes, 1961), p. 1810, checked against the <a href="https://gregobase.selapa.net/sources/3/2055.png">printed page</a> and <a href="https://gregobase.selapa.net/chant.php?id=1198">GregoBase transcription</a>. There is no metre: the separators mark text phrases. Quavers are a neutral transcription unit; dotted chant endings are doubled for playback, not a claim that medieval singers followed this measured rhythm. The opening eight pitches are the incipit later composers quote.',
      }],
      arts: [{
        type: 'painting', frame: 'mat',
        file: 'File:Hildegard von Bingen.jpg',
        artist: 'Anonymous Rupertsberg illuminator', title: 'Hildegard receiving a vision', date: 'Late twelfth century',
        medium: 'Manuscript illumination, reproduced from the Rupertsberg Scivias',
        collection: 'Formerly Wiesbaden, manuscript lost during the Second World War',
        note: `<p>Hildegard receives the fiery light of inspiration while a scribe records her words. The image belongs to the visual transmission of <i>Scivias</i>, her account of visions completed in 1151; it is not a portrait drawn from a documented sitting. Her songs and the musical drama <i>Ordo Virtutum</i> connect this visionary theology with the daily sung worship of her community. Their single melodic lines require no added harmony to articulate register, verbal emphasis and formal return.</p>`,
      }],
    },
    {
      id: 'notation', numeral: 'iii', label: 'c. 1025',
      heading: 'A melody that can be read',
      html: `
<p class="dropcap">Guido of Arezzo, a Benedictine monk active in the early eleventh century, addressed a costly part of a singer’s education: learning an enormous repertory by repetition. His <i>Micrologus</i>, written around 1025–28, and his other teaching texts combine interval theory with practical methods for reading unfamiliar chant. Earlier musicians had used pitch letters, reference lines and heighted neumes. Guido’s importance lies in making these resources into a teachable system, not in creating musical notation from nothing.</p>
<p>A staff gives pitch a repeatable location. A line labelled F or C fixes the surrounding succession of tones and semitones; the spaces count as positions just as the lines do. Coloured reference lines could make F and C recognisable before the singer read a letter. Four-line staves became standard in square chant notation, although early layouts were not uniform. The five-line staff familiar from a piano score was a later convention, not the complete system delivered by Guido in one invention.</p>
<aside class="note"><b>A clef is a letter</b>The C and F clefs identify one staff position, from which the others can be inferred. A change of clef need not change the melody: it can keep a wide-ranging phrase on the same small staff.</aside>
<p>Guido also described learning intervals through a familiar hymn to John the Baptist, <i>Ut queant laxis</i>. In the teaching melody, six successive phrases begin one degree higher: C, D, E, F, G, A. Their opening syllables supply <i>ut, re, mi, fa, sol, la</i>: <i>Ut queant laxis / resonare fibris / mira gestorum / famuli tuorum / solve polluti / labii reatum</i>. The singer recalls a known phrase to find an unknown note. The crucial small interval is always <i>mi–fa</i>, the semitone between the third and fourth steps.</p>
<p>Later medieval teaching developed this into overlapping six-note units, or hexachords. The natural hexachord begins on C; the hard hexachord on G includes B♮; the soft hexachord on F includes B♭. Each has the same interval pattern: tone, tone, semitone, tone, tone. A melody extending beyond six notes requires a change of hexachord, called mutation. The pitch itself need not change when its syllable does: G can be <i>sol</i> in the natural hexachord and <i>ut</i> in the hard one.</p>
<aside class="note"><b>Six syllables, not seven</b>Guido’s method did not contain a seventh syllable <i>si</i> or the replacement <i>do</i>. Those belong to later solmisation histories. Nor is each syllable permanently attached to one pitch in the medieval system.</aside>
<p>The Guidonian hand puts the gamut — the available succession of named pitches — onto the joints and fingertips of a left hand. A teacher can point to a location; a singer retrieves its pitch-name and possible syllables. Surviving hand diagrams belong to the later transmission of Guidonian pedagogy, and Guido’s own surviving writings do not establish that he invented the familiar diagram. The painted hand is both a picture and a working memory aid: spatial position carries information that would otherwise have to be recited.</p>
<p>Notation changed what could be preserved without abolishing oral teaching. A staff can specify the interval between two notes while leaving pronunciation, vocal production and much rhythmic detail to the community that uses it. It also makes comparison possible: the same melody can be copied, corrected and discussed far from its original singers. When musicians begin coordinating independent lines in [[origins#organum|organum]], that stable record of pitch becomes indispensable; exact duration will require another set of inventions.</p>`,
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
        caption: 'A schematic, not the melody of <i>Ut queant laxis</i>. In each six-note group, <i>mi–fa</i> is the only semitone: E–F, B–C, then A–B♭. The same six syllables therefore identify interval relationships in three overlapping pitch collections. Bar lines separate teaching units rather than hymn phrases.',
      }],
      arts: [
        {
          type: 'painting', frame: 'mat',
          file: 'File:The Hand of Guido.jpg',
          artist: 'Anonymous illuminator', title: 'The Guidonian hand', date: '1274',
          medium: 'Manuscript diagram', collection: 'Biblioteca Ambrosiana, Milan, MS D.75 inf., fol. 6r',
          note: `<p>The enlarged hand makes a human body into a diagram of pitch and solmisation. Its date is more than two centuries after Guido’s teaching: this is evidence for the method’s later use, not Guido’s autograph. The outer circle repeats the syllables that are distributed across the hand, giving the pupil two spatial routes through the same information.</p>`,
        },
        {
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
          note: `<p>The hymn asks John the Baptist to release the singer’s voice from impediment. Guido used the first syllables of its six half-lines as a ladder of pitches. The words are older than his teaching method; the authorship traditionally assigned to Paul the Deacon is not certain.</p>`,
        },
      ],
    },
    {
      id: 'organum', numeral: 'iv', label: 'c. 900–1200',
      heading: 'A second voice above the chant',
      html: `
<p class="dropcap">The anonymous ninth-century treatise <i>Musica enchiriadis</i> describes ways of singing a second part with a chant. Some passages proceed in parallel fourths or fifths, sometimes doubled at the octave; others hold one voice still while the other moves, allowing the parts to meet in unison. The treatise is a surviving record of polyphonic practice, not proof that Europeans had only just begun singing together in more than one pitch. Unwritten practices leave a different kind of historical trace from a classroom demonstration.</p>
<p><i>Organum</i> names several changing techniques rather than one fixed texture. In the simplest parallel model, every note of a melody acquires a companion at a constant interval. In more independent writing, the voices can move in contrary directions, embellish their approach to a consonance or place several notes against one. Eleventh- and twelfth-century sources show a growing distance between the borrowed chant and the newly composed part. The chant supplies an inherited sequence; the added voice decides how much time each part of that sequence will occupy.</p>
<aside class="note"><b>The tenor holds</b><i>Tenor</i> comes from Latin <i>tenere</i>, to hold. Here it names the part that holds the pre-existing chant, not necessarily a modern male voice type. A single tenor note can support a long phrase in the upper voice.</aside>
<p>In late-twelfth-century Paris, the repertory associated with Notre-Dame developed this contrast on a much larger scale. Léonin is linked with the <i>Magnus liber organi</i>, the ‘great book of organum’, a collection for important services. In sustained-note passages, one chant note lies underneath a freely unfolding upper line. In discant passages, both voices move in coordinated measured rhythm. A setting can pass between these textures and plainchant; polyphony elaborates particular liturgical portions rather than turning an entire service into continuous four-part music.</p>
<p>Our principal account of Léonin and Pérotin comes from a later thirteenth-century theorist conventionally called Anonymous IV. He credits Léonin with the great book and describes Pérotin’s revisions and compositions in three and four parts. This is retrospective testimony, not a dated register of premieres. The surviving manuscripts preserve a repertory copied and altered by successive musicians. Even the familiar connection between Pérotin’s four-part <i>Viderunt omnes</i> and Christmas 1198 remains a historical reconstruction, not a date written on an autograph score.</p>
<aside class="note"><b>Rhythmic modes</b>Patterns of long and short values organise the upper parts. The shape and grouping of ligatures — several notes joined as one written sign — help indicate the pattern. A medieval rhythmic mode is not a modern key or church mode.</aside>
<p><i>Viderunt omnes</i> elaborates the Christmas gradual whose text begins ‘All the ends of the earth have seen the salvation of our God’. Three upper parts move above the chant-bearing tenor. At the opening, the first syllable is extended so far that the listener hears changing rhythmic combinations before hearing a complete word. Repeated figures pass between voices; coordinated rests expose the separate strands; unisons, fifths and octaves articulate points of arrival. The governing contrast is between the very slow progress of the inherited melody and the faster activity above it.</p>
<p>A discant section could be detached and replaced by another setting of the same tenor fragment: such a unit is called a clausula. Adding words to an upper part helped generate the thirteenth-century motet, in which different voices could eventually sing different texts at once. The route from chant to polyphony was therefore also a route from one shared liturgical utterance to several simultaneous layers of language. [[workshop#counterpoint|Counterpoint]] begins with the practical task of making those independent lines agree at chosen moments.</p>`,
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
          caption: 'An invented two-bar melody with an added part a perfect fifth above; not a quotation from <i>Musica enchiriadis</i>. Both voices change note together. This deliberately restricted schematic isolates parallel motion, which was only one of the procedures described by early theorists.',
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
          caption: 'A schematic of sustained-note texture, not a transcription of Pérotin. One D underlies four bars of upper-voice motion; the modern metre merely makes the two time-scales visible. Notre-Dame organum uses more complex relationships between sustained tenor, measured discant and unmeasured chant.',
        },
      ],
      arts: [{
        type: 'painting', frame: 'mat',
        file: 'File:Pérotin - Viderunt omnes.jpg',
        artist: 'Anonymous Parisian scribe', title: 'Opening of Pérotin’s Viderunt omnes', date: 'Thirteenth century',
        medium: 'Music manuscript on parchment', collection: 'Biblioteca Medicea Laurenziana, Florence, MS Pluteo 29.1',
        note: `<p>The Florence manuscript is one of the principal witnesses to the Notre-Dame repertory. Its written ligatures encode groups of notes rather than the separate, equally spaced symbols of a modern score. The page belongs to the work’s transmission, not to a surviving manuscript in Pérotin’s hand: the distance between composition and copy is part of the evidence.</p>`,
      }],
    },
    {
      id: 'ars-nova', numeral: 'v', label: 'c. 1320–1370',
      heading: 'Time can be counted twice',
      html: `
<p class="dropcap">Around 1320, French musicians acquired more precise ways of writing divisions of musical time. The label <i>ars nova</i>, ‘new art’, is associated with Philippe de Vitry and the theoretical writings transmitted under his name. It does not mark a single invention or a clean replacement of everything earlier. Thirteenth-century mensural notation, particularly that described by Franco of Cologne, had already made note shapes carry durational information. Fourteenth-century practice extended the system’s treatment of smaller values, binary division and syncopation.</p>
<p>Mensuration specifies how one value divides into the next. A breve can contain three semibreves, called perfect tempus, or two, imperfect tempus; a semibreve can contain three minims, major prolation, or two, minor prolation. These two decisions are independent. A circle and a semicircle, with or without a dot, eventually provide a compact visual vocabulary for the combinations. Our common-time sign descends from the semicircle: its shape is not originally the letter C standing for ‘common’.</p>
<aside class="note"><b>Not just a time signature</b>Medieval note values can change through context, imperfection, alteration and coloration. Translating a mensural sign directly into a modern metre loses some of the rules that determine the notes’ actual durations.</aside>
<p>Isorhythm separates a repeating rhythmic pattern from a repeating sequence of pitches. The rhythmic pattern is conventionally called the <i>talea</i>; the pitch sequence, the <i>color</i>. Their lengths need not agree. If three durations cycle through a five-note melody, the two beginnings meet again only after fifteen note attacks. A composer can also restate a rhythmic structure at a changed proportional speed. The procedure is especially associated with the tenor of fourteenth-century motets, although other voices may participate in the design.</p>
<p>The listener need not count the entire scheme to hear its effects. A returning tenor rhythm regulates where upper voices can settle, where a cadence can arrive and where a new span begins. Above it, syncopation can carry a note across an expected division, and hocket can split a line between voices by alternating notes and rests. Vitry’s motets combine these resources with texts that can address political and ecclesiastical circumstances. The composed surface moves against a framework whose repetitions are often slower than an ordinary melodic phrase.</p>
<aside class="note"><b>A modern analytical name</b>The term ‘isorhythm’ was coined long after the medieval repertory. It identifies a compositional procedure; it is not a title that Machaut placed at the top of his Mass.</aside>
<p>Guillaume de Machaut, a poet as well as a composer, brought together courtly song, motet and large-scale sacred music. His four-voice <i>Messe de Nostre Dame</i>, usually dated to the 1360s, is the earliest surviving complete polyphonic Mass Ordinary attributed to one composer. It includes Kyrie, Gloria, Credo, Sanctus, Agnus Dei and <i>Ite, missa est</i>. Earlier polyphonic Mass movements and assembled cycles survive, so ‘the first Mass’ is too loose a description. Its precise original occasion is not known; the familiar claim that it was written for Charles V’s coronation in 1364 is unsupported.</p>
<p>The shorter texts — Kyrie, Sanctus, Agnus Dei and dismissal — permit chant-based isorhythmic construction. The long Gloria and Credo move much more often in syllabic, coordinated declamation. A contratenor works against the tenor, while the two upper parts can carry more active lines; the lowest sounding part is not invariably the tenor. Machaut’s secular ballades, rondeaux and virelais organise another kind of recurrence through poetic refrains and fixed forms. His manuscript collections place music alongside narrative poems, making the control of musical time one part of a larger practice of authorship.</p>`,
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
        caption: 'An invented isorhythmic schematic, not Machaut’s music. The talea is three durations — long, short, short — repeated five times. The color is D–E–F–G–A, repeated three times. Follow the pitches across the bar lines: each return of D falls at a different point in the rhythmic pattern until the full fifteen-note cycle is complete. Modern bars make the talea visible.',
      }],
      arts: [{
        type: 'painting', frame: 'mat',
        file: 'File:Machaut 1.jpg',
        artist: 'Anonymous French illuminator', title: 'Nature presents Sense, Rhetoric and Music to Machaut', date: 'Fourteenth century',
        medium: 'Manuscript illumination', collection: '',
        note: `<p>The allegory belongs to the presentation of Machaut as an author: Nature supplies the faculties with which he makes poetry and music. His literary and musical works circulated together in carefully organised books. The miniature therefore illustrates an actual relationship between the arts, not a later comparison between unrelated objects; Music stands beside Rhetoric because Machaut practised both.</p>`,
      }],
    },
    {
      id: 'polyphony', numeral: 'vi', label: 'c. 1430–1600',
      heading: 'Each voice has a sentence',
      html: `
<p class="dropcap">Guillaume Dufay worked across the church and court networks that connected northern France, the Low Countries and Italy. His motet <i>Nuper rosarum flores</i> was written for the consecration of Florence Cathedral in 1436. Its large-scale proportional design retains an isorhythmic inheritance, while the sonorities of fifteenth-century music increasingly make room for thirds and sixths. These intervals had not suddenly been discovered; their changing treatment altered how voices could combine between the open fifths and octaves of cadences.</p>
<p>A cantus firmus — literally a ‘fixed song’ — can organise an entire Mass by returning in successive movements. It may come from chant or from a secular melody such as <i>L’homme armé</i>, which Dufay and many later composers used. A voice may present it slowly while other parts move faster; a composer may change its register, proportion or position in the texture. Another technique, fauxbourdon, produces chains of sixth-chord sonorities through a partly prescribed relationship between voices. The resulting music is not simply a succession of modern chords: the parts remain responsible for their melodic progress.</p>
<aside class="note"><b>Imitation is an entry</b>One part states a melodic idea; another begins the same idea later, often at a different pitch. A point of imitation can run through the ensemble and then dissolve. It need not be a strict canon, in which the copying continues throughout.</aside>
<p>Josquin des Prez makes these entries an audible means of articulating a text. In <i>Ave Maria … virgo serena</i>, the opening greeting passes through successive voices before the texture changes. New clauses can receive new motifs, paired voices can answer other pairs, and all the singers can come together for a direct utterance. Imitation is therefore not constant busyness: its force depends on contrast with fewer parts, longer notes and coordinated syllables. Ottaviano Petrucci’s <i>Misse Josquin</i> of 1502 gave one composer’s Masses a printed collection, helping the repertory circulate beyond the institutions that commissioned or copied it.</p>
<p>Giovanni Pierluigi da Palestrina’s Roman church music controls dissonance through the motion of individual parts. A suspension begins as a consonant note, is held while another voice changes beneath it, then resolves down by step. Passing notes usually occupy weaker positions. Leaps are balanced by stepwise movement, and the lines avoid repeatedly reaching perfect consonances in parallel motion. These are descriptions of a varied musical practice, not a complete set of laws that every bar obeys mechanically. Later counterpoint teaching extracted a more regular classroom style from that repertory.</p>
<aside class="note"><b>The rescue that did not happen</b>The Council of Trent met between 1545 and 1563. Its reforms concerned abuses in worship, but the story that one performance of Palestrina’s <i>Missa Papae Marcelli</i> saved all polyphony from prohibition is not supported by contemporary evidence. Giuseppe Baini’s 1828 biography helped consolidate the legend.</aside>
<p>The <i>Missa Papae Marcelli</i>, published in 1567, normally uses six voices and expands to seven in its final Agnus Dei. Its Gloria and Credo often align the words across groups of singers; clear declamation is not confined to monophony. Palestrina’s carefully prepared dissonances also make musical tension audible without requiring abrupt chromatic changes. To hear the mechanism, follow a single held note across the moment when the other voices move: the same pitch changes from stable to unstable before its own resolution.</p>
<p>Thomas Tallis’s <i>Spem in alium</i>, probably composed around 1570, uses forty separate parts arranged in eight five-part choirs. Entries travel through successive groups, accumulate and give way to passages for the full ensemble. Its original occasion and layout are not securely documented; a forty-part score does not prove a particular arrangement of singers in a surviving room. The technical problem is nevertheless concrete: maintaining independent lines while controlling when the listener hears one group, neighbouring groups or all forty voices. Polyphony can organise physical separation as well as melodic agreement.</p>`,
      score: [{
        kicker: 'Schematic · a point of imitation',
        title: 'The lower voice takes up the opening',
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
        caption: 'An invented schematic, not a quotation from Josquin or Palestrina. The lower part enters one bar later and an octave below, copying the upper part’s first two bars. The upper part then continues independently. This is an opening point of imitation, not a strict canon sustained to the final cadence.',
      }],
      arts: [{
        type: 'painting', frame: 'gilt',
        file: 'File:Ghent Altarpiece - Singing Angels (left).jpg',
        artist: 'Hubert and Jan van Eyck', title: 'The Ghent Altarpiece: Singing Angels', date: '1432',
        medium: 'Oil on oak panel', collection: 'St Bavo’s Cathedral, Ghent',
        note: `<p>The angels crowd around one book, their mouths opened differently as they sing. The panel belongs to the same early-fifteenth-century ecclesiastical culture in which Dufay’s music circulated. Its lectern and shared volume make the material conditions of choral reading visible; the painting does not identify a particular composition or prove how many musical parts the angels sing. The facing musical panel gives their companions an organ and stringed instruments.</p>`,
      }],
    },
    {
      id: 'instruments', numeral: 'vii', label: 'c. 1400–1700',
      heading: 'Wood, gut, wind and wire',
      html: `
<p class="dropcap">The instruments of Bach’s ensembles did not emerge as one orchestra. Church organs, courtly lutes, domestic viol consorts and professional violin bands developed in different settings, with different ways of producing and sustaining a note. Their mechanisms mattered to composition. An organ can hold a tone while the key remains down and wind is supplied; a lute or harpsichord note begins to decay as soon as its string has been plucked. A bowed instrument can change pressure and speed during a single note.</p>
<p>The organ’s ancestry reaches back to the ancient Mediterranean hydraulis, whose water mechanism regulated wind pressure. Medieval European organs used bellows, and by the later Middle Ages builders were separating ranks of pipes into selectable stops. A stop gives access to a set of pipes with a particular construction and pitch level; it is not a volume knob. At an 8-foot pitch a key sounds at its ordinary register, a 4-foot rank an octave higher, a 16-foot rank an octave lower. Multiple manuals and pedal keyboards eventually let an organist distribute parts and colours between hands and feet.</p>
<aside class="note"><b>Not every pipe is eight feet</b>The foot designation refers to the nominal length of an open pipe at the bottom of a rank. Stopped pipes can sound the same pitch at roughly half that length. Mixture stops combine several higher ranks rather than duplicating a single melodic register.</aside>
<p>The European lute derives from the Arabic <i>ʿūd</i>, transmitted through Mediterranean contact. Its rounded back, fretted neck and paired strings, called courses, support both accompaniment and independent polyphony. Renaissance players could reduce a vocal piece to one instrument, deciding which voices to sustain, repeat or ornament when several lines competed for the same hand. Tablature often records where the fingers go rather than giving every sounding pitch on a staff. Longer-necked bass members of the lute family, especially the theorbo, later supplied low notes and chords to the [[origins#continuo|continuo]] group.</p>
<p>Viols and violins are related bowed families, not successive stages of one instrument. Renaissance viols usually have frets and six strings tuned mainly in fourths with a central third; they are supported against or between the legs, including the smaller sizes. Their consort repertory distributes polyphonic lines among treble, tenor and bass instruments. The violin family normally has four strings tuned in fifths and no frets. Its curved bridge helps the bow select one string, while the left hand can adjust intonation without being confined by fixed fret positions.</p>
<aside class="note"><b>Cremona, not one inventor</b>Andrea Amati’s surviving sixteenth-century instruments are central evidence for the early violin family. Nicolò Amati and Antonio Stradivari developed the Cremonese tradition in the seventeenth century. A formal apprenticeship of Stradivari to Nicolò is often asserted more confidently than the documents permit.</aside>
<p>Andrea Amati, his descendants and the other Cremonese workshops established models that later makers repeatedly studied. Stradivari’s career extended into Bach’s lifetime; he died in 1737. Many old instruments subsequently acquired altered necks, bass bars and other fittings, so a surviving seventeenth-century body does not necessarily preserve its original playing setup. Early violin ensembles served dances, ceremonies and theatre as well as the developing sonata. The cello’s later orchestral prominence should not be projected onto every sixteenth-century bass instrument, whose size and tuning could vary.</p>
<p>A harpsichord key raises a jack whose plectrum plucks a string; a damper stops the string when the key is released. Its rectangular relatives include the virginals, familiar from Dutch paintings. Unlike a piano, the harpsichord does not normally make a note louder simply because the player strikes the key harder. Articulation, timing, added notes and changes of register produce its contrasts. It can therefore sustain the harmonic outline of a vocal piece through repeated or newly voiced chords even while each individual string is decaying.</p>`,
      score: [],
      arts: [{
        type: 'painting', frame: 'gilt',
        file: 'File:The Lute Player-Caravaggio (Hermitage).jpg',
        artist: 'Caravaggio', title: 'The Lute Player', date: 'c. 1595–96',
        medium: 'Oil on canvas', collection: 'State Hermitage Museum, St Petersburg',
        note: `<p>The singer holds a lute while a violin and music books lie on the table. The painted notation includes madrigals by Jacques Arcadelt: repertory written for separate vocal parts could also belong to a singer’s instrumental practice. The presence of both lute and violin matters more than a general association with ‘music’: it places two different string technologies beside the printed song they could help perform. The <a href="https://resources.metmuseum.org/resources/metpublications/pdf/A_Caravaggio_Rediscovered_The_Lute_Player.pdf">Metropolitan Museum’s study of the related version</a> examines the instruments and identifiable music.</p>`,
      }],
    },
    {
      id: 'opera', numeral: 'viii', label: 'c. 1570–1607',
      heading: 'The words take command',
      html: `
<p class="dropcap">In Florence during the 1570s and 1580s, Giovanni de’ Bardi’s circle of musicians and scholars discussed how ancient Greek drama had been performed. The group later called the Camerata included Vincenzo Galilei, Galileo’s father, and the singer-composer Giulio Caccini. Their knowledge of ancient sound was fragmentary. What they could act on was an argument: a single voice, supported without competing words, could deliver a text more directly than several singers pursuing different phrases at once.</p>
<p>Monody means a solo vocal line with instrumental accompaniment, but solo singing itself was not new. The change around 1600 was the cultivation, publication and theatrical use of an explicitly declamatory style over a written bass. Caccini’s <i>Le nuove musiche</i>, published in 1602, offered songs with instructions on delivery and ornament. Jacopo Peri’s largely lost <i>Dafne</i>, performed in Florence in 1598, and his surviving <i>Euridice</i> of 1600 applied related ideas to continuous drama. Neither their experiments nor the Camerata’s theories justify calling opera a recovered Greek practice.</p>
<aside class="note"><b>Recitative is composed speech</b>A singer may repeat one pitch through several syllables, lengthen a stressed word and move at a cadence while the bass changes slowly. The rhythm follows dramatic syntax more closely than a dance, but the notes and bass still make a composed musical argument.</aside>
<p>The dispute over expressive dissonance developed partly within the older medium of the polyphonic madrigal. In publications of 1600 and 1603, Giovanni Maria Artusi attacked passages from music by Claudio Monteverdi, initially without naming him. His examples included unprepared or unusually approached dissonances that violated the contrapuntal teaching Artusi defended. Removing the words from such examples made their intervals easy to inspect but excluded the evidence Monteverdi considered decisive: the particular meaning and emphasis of the text.</p>
<p>Monteverdi’s Fifth Book of Madrigals appeared in 1605 with <i>Cruda Amarilli</i>, one of the disputed works, and a brief response promising an account of his practice. In 1607 his brother Giulio Cesare’s explanation in the <i>Scherzi musicali</i> distinguished the <i>seconda pratica</i>, in which the words govern the musical treatment, from the inherited <i>prima pratica</i>. This was not a declaration that counterpoint no longer mattered. Monteverdi continued to compose in learned older styles, while allowing a poetic demand to justify a dissonance that a detached interval exercise would reject.</p>
<aside class="note"><b>A documented sequence</b>The publications, letters and performances behind the controversy are set out in <a href="https://sscm-jscm.org/jscm-issues/volume-18-no-1/claudio-monteverdi-a-chronology/">the Journal of Seventeenth-Century Music chronology</a>. The argument concerns madrigals before it becomes shorthand for the birth of opera.</aside>
<p><i>L’Orfeo</i>, with a libretto by Alessandro Striggio, was first performed at the Gonzaga court in Mantua on 24 February 1607. It was not the first opera. Its five acts combine recitative, solo song, choruses, dances and instrumental ritornellos, making the contrast between musical types part of the drama. A shepherd’s measured song and the Messenger’s report of Eurydice’s death do not ask for the same delivery. In ‘Tu se’ morta’, Orpheus’s repeated questions and widening vocal gestures turn the news into a resolve to enter the underworld.</p>
<p>The printed score of 1609 names a substantial instrumental collection, including strings, cornetts, trombones, harpsichords, organs, chitarroni and a double harp. The contrasting bass resources help distinguish pastoral scenes from the underworld. In ‘Possente spirto’, Orpheus attempts to persuade the ferryman through increasingly elaborate song, with instrumental responses between the vocal phrases. The score supplies both an ornamented vocal line and a plainer alternative. Vocal display has a dramatic function: Orpheus is a musician trying to make his art change another character’s decision.</p>
<p>The courts supplied the earliest productions with money, performers and invited audiences. Venice’s public opera theatres, beginning in 1637, later changed that institutional arrangement. By then Monteverdi had served at San Marco since 1613; the composer of courtly <i>Orfeo</i> would also write for the city’s commercial stage. The new genre’s continuity lay in a practical division of labour: the singer delivers the words, the bass supports their pacing, and instruments can intervene when speech alone is no longer the scene’s only action.</p>`,
      score: [],
      arts: [{
        type: 'painting', frame: 'gilt',
        file: 'File:Bernardo Strozzi - Claudio Monteverdi (c.1630).jpg',
        artist: 'Bernardo Strozzi', title: 'Portrait identified as Claudio Monteverdi', date: 'c. 1630',
        medium: 'Oil on canvas', collection: 'Tiroler Landesmuseum Ferdinandeum, Innsbruck',
        note: `<p>The sitter’s identification rests on comparison with the securely identified engraving published in the commemorative <i>Fiori poetici</i> of 1644. The portrait is later than <i>Orfeo</i> and belongs to the composer’s Venetian decades, not the young Mantuan court musician. Strozzi also worked in Venice: painting and opera shared a city of commissioned portraits, church appointments and, from 1637, ticket-selling musical theatres.</p>`,
      }],
    },
    {
      id: 'continuo', numeral: 'ix', label: 'c. 1600–1722',
      heading: 'The bass becomes a working plan',
      html: `
<p class="dropcap">A continuo part gives an accompanist a bass line rather than every note to play. Figures specify intervals above that bass; the player supplies a suitable spacing, texture and voice-leading. A keyboard or plucked-string instrument can provide the harmony, often with a bowed bass instrument or bassoon reinforcing the written line. The combination varies with place, genre and available musicians. ‘Continuo’ therefore names a practice and a function, not an invariable ensemble of harpsichord and cello.</p>
<p>Some roots of the practice lie in organ accompaniment that followed the lowest sounding voice of a choral texture, the <i>basso seguente</i>. Around 1600, an independent written bass became central to solo song, sacred concertos and theatre. Lodovico da Viadana’s <i>Cento concerti ecclesiastici</i> of 1602, for small vocal forces with organ, helped disseminate the practice; it did not invent it. A composer could now write a solo line against a continuous harmonic support without specifying all the inner parts as separate singers.</p>
<aside class="note"><b>Read upwards from the bass</b>A figure 6 normally asks for a sixth above the written note, with a third commonly understood. A bare sharp or flat commonly alters the third. The figures describe sounding intervals, not modern chord symbols or scale degrees.</aside>
<p>With C in the bass, an unfigured consonant sonority will often contain E and G. With E in the bass and a 6, the player may supply G and C: the same C-major triad in another position. The bass note and the chord’s root are therefore not always identical. A 4–3 figure can require C to remain over a G bass before resolving down to B. That one suspension joins the older discipline of prepared dissonance to a notation designed for practical accompaniment. [[workshop#figured-bass|Realisation]] still requires decisions about register, doubling, rhythm and the movement of each part.</p>
<p>Seventeenth-century music increasingly organises these sonorities around a tonic and cadences that confirm it. A bass moving from G to C, together with B rising to C in another voice, can establish C as a local centre. Repeated cadential patterns, sequences and contrasting key areas gradually make major–minor tonality a stronger organising principle. This is not the moment when modes suddenly disappear or composers first hear chords. Modal habits, contrapuntal formulas and newer bass-led patterns coexist for decades. [[rameau|Rameau]]’s <i>Traité de l’harmonie</i> of 1722 later explains chords through roots and inversions, distinguishing a theoretical fundamental bass from the lowest notes actually played.</p>
<aside class="note"><b>A keyboard cannot keep every ratio</b>Twelve pure fifths do not coincide with seven octaves. A tuning must distribute or isolate the discrepancy. Changing the tuning changes the sizes of thirds and fifths, not the written notes on the page.</aside>
<p>Quarter-comma meantone narrows the fifths so that several major thirds become pure 5:4 intervals. On a conventional twelve-note keyboard, however, the chain leaves a badly mistuned ‘wolf’ interval and makes some remote keys impractical. Extra keys or split accidentals can provide alternatives, but require a different instrument. Twelve-tone equal temperament instead divides the octave into twelve equal semitones. Every key then has the same interval pattern: fifths are slightly narrow and major thirds appreciably wider than pure thirds. The gain is unrestricted transposition, not perfect consonance.</p>
<p>Unequal circulating temperaments offer another solution: all keys remain usable, but their intervals differ. ‘Well-tempered’ therefore does not necessarily mean ‘equal-tempered’. [[bach|Bach]]’s first book of <i>The Well-Tempered Clavier</i>, dated 1722, contains a prelude and fugue in each of the twelve major and twelve minor keys. Its title does not identify one uniquely recoverable tuning, and the familiar claim that Bach invented or conclusively established equal temperament is false. The practical inheritance visible in those pieces includes far more than tuning: a fixed staff, measured durations, independent voices, recurring bass patterns and the ability to carry a musical argument through several keys.</p>`,
      score: [{
        kicker: 'Schematic · figured bass',
        title: 'A 4–3 suspension over the dominant',
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
        caption: 'An invented late-seventeenth-century-style cadence, not a quotation from Bach. The upper C is prepared in the F-major sonority, becomes a dissonant fourth above the G bass, then falls to B before rising to C in the final chord. The figure 4–3 specifies that motion; it does not prescribe the complete keyboard texture shown here. The bass moves C–F–G–C, outlining tonic, subdominant, dominant and tonic.',
      }],
      arts: [{
        type: 'painting', frame: 'gilt',
        file: 'File:Gerard ter Borch (der Jüngere) (1617 - 1681) - The Concert - 791G - Gemäldegalerie.jpg',
        artist: 'Gerard ter Borch', title: 'The Concert', date: 'c. 1675',
        medium: 'Oil on panel', collection: 'Gemäldegalerie, Berlin',
        note: `<p>The two halves of a continuo team in one room: a woman with her back to us plays a cello — a bowed instrument that can sustain a bass line — while another sits at a harpsichord, the instrument that turned a figured bass into chords. Ter Borch paints the satin and the scroll of the cello more carefully than any music on the desk; the picture records the instruments and the domestic setting of accompanied music, not a particular piece.</p>`,
      }],
    },
  ],
};
