export default {
  slug: 'workshop',
  title: 'The Workshop',
  kicker: 'How it works',
  glyph: '𝄢',
  accent: '#2d4f6b',
  lede: 'In a Bach fugue a second voice enters while the first continues. In Ravel’s <i>Boléro</i> the same tune changes in character when the clarinet takes it over from the flute. Eighteen lessons examine details of this kind, using passages from real scores and short, playable examples.',
  lessons: [
    {
      id: 'counterpoint', numeral: 'i', label: 'Melodies together', heading: 'Counterpoint: room for another voice',
      question: 'Counterpoint: independent melodies sounding together',
      listen: [{ id: 'couperin-nations-piemontaise', t: 95, why: 'Violin and flute exchange quick figures, and the bass joins in with runs of its own.' }],
      html: `
<p>Counterpoint combines melodies that are each independent enough to be followed on their own. In [[couperin|Couperin]]’s <i>La Piémontoise</i>, violin and flute pass short phrases between them while the bass plays its own line. Each note belongs both to a melody moving through time and to the chord sounding at that moment.</p>
<p>Johann Joseph Fux turned this problem into a course of lessons in <i>Gradus ad Parnassum</i>, published in Vienna in 1725. His imaginary teacher, Aloysius, represented Palestrina; the pupil, Josephus, kept trying examples. The first exercise adds one note against each long note of a given melody, the <i>cantus firmus</i>. Every meeting must be consonant: a unison, fifth, octave, third or sixth. Consecutive parallel fifths and octaves are forbidden; thirds and sixths may move in parallel.</p>
<aside class="note"><b>Five species</b>Fux’s species are exercises in controlling two parts. He proceeds from one note against one to two against one, then four against one. The fourth species uses tied notes; the fifth mixes the preceding rhythms.</aside>
<p>Rhythm allows dissonance. In second species, a passing note on the weak half of the bar can move by step between consonances. In fourth species, a note that fitted the previous chord is held while the bass changes beneath it. The held note is dissonant against the new harmony and then falls one step. This is a <i>suspension</i>. A held F over C can resolve to E, so the fourth becomes a third.</p>
<aside class="note"><b>The fourth’s special case</b>In this teaching tradition, a fourth above the bass is dissonant. A fourth between two upper parts can be consonant.</aside>
<p>Invertible counterpoint lets complete lines exchange places. In the second example, E–F starts above C–D; moving C–D up an octave turns the thirds into sixths. A fifth would turn into a fourth and would need care. Fugues depend on this technique for the lines that recur with the subject. In [[bach|Bach]]’s C minor Fugue, BWV 847, the subject and countersubjects return in new positions relative to one another.</p>`,
      score: [
        {
          kicker: 'Schematic · first species', title: 'One note against one note',
          abc: `X:1
T:Consonant two-part counterpoint
M:4/4
L:1/4
Q:1/4=92
K:C
V:1 name="Upper"
V:2 name="Cantus" clef=bass
V:1
%%MIDI program 19
G4 | F4 | D4 | C4 |]
V:2
%%MIDI program 19
C,4 | D,4 | B,,4 | C,4 |]`,
          caption: 'An invented note-against-note exercise: a twelfth, two tenths and an octave. A tenth is a third plus an octave. At the close the bass rises B–C while the upper voice falls D–C.',
        },
        {
          kicker: 'Schematic · invertible at the octave', title: 'Thirds inverted as sixths',
          abc: `X:2
T:Exchanging the two lines
M:4/4
L:1/4
Q:1/4=100
K:C
V:1 name="Upper"
V:2 name="Lower" clef=bass
V:1
%%MIDI program 19
E4 | F4 | c4 | d4 |]
V:2
%%MIDI program 19
C4 | D4 | E4 | F4 |]`,
          caption: 'Bars 1–2 put E–F above C–D. In bars 3–4, C–D moves up an octave while E–F stays where it was. The same two short lines now make sixths. This is an invented example of invertible counterpoint.',
        },
      ],
      arts: [
        {
          relation: 'shared-context',
          type: 'painting', frame: 'mat', file: 'File:Fux-Gradus-ad-Parnassum.jpg',
          artist: 'Johann Joseph Fux; title-page designer uncredited', title: 'Gradus ad Parnassum: title page', date: '1725',
          medium: 'Printed title page', collection: 'First edition, Vienna',
          note: '<p>Fux’s <i>Gradus ad Parnassum</i>, printed in Vienna in 1725, is written as a conversation between an imaginary pupil and teacher. Josephus brings his exercises; Aloysius, modelled on Palestrina, corrects them one note at a time.</p>',
        },
      ],
    },
    {
      id: 'fugue', numeral: 'ii', label: 'One tune, several voices', heading: 'Fugue: the tune comes back with company',
      question: 'New voice entering while earlier voices continue singing',
      listen: [{ id: 'bach-wtc1-fugue-b-minor', t: 14, why: 'The answer takes up the B minor fugue’s winding subject while the first voice continues above it.' }],
      html: `
<p>A fugue states a tune on its own before other tunes are set around it. In bars 1–2 of [[bach|Bach]]’s C major Fugue, BWV 846, an inner voice rises C–D–E–F, turns round G and continues. This is the <i>subject</i>. During bar 2 a higher voice starts the same tune on G. The first voice continues to move beneath it.</p>
<aside class="note"><b>Voices on a keyboard</b>“Alto”, “soprano”, “tenor” and “bass” name the four lines, from their positions on the staff. One player supplies all four. The score example isolates the opening alto.</aside>
<p>The second entrance is the <i>answer</i>, usually starting a fifth above or a fourth below the subject. A real answer preserves every interval; a tonal answer adjusts some intervals to keep the exchange close to the home key. BWV 846 has a real answer. Its opening entries arrive in the unusual order subject, answer, answer, subject: alto, soprano, tenor, bass.</p>
<p>A recurring tune that accompanies the subject is a <i>countersubject</i>. It often has to work both above and below its partner, using [[workshop#counterpoint|invertible counterpoint]]. BWV 846 has no regular countersubject. Bach’s C minor Fugue, BWV 847, has two. By the end of its eight-bar exposition all three voices have entered. Bar 9 begins an <i>episode</i>, in which fragments of the subject move through a sequence without a complete statement of the tune.</p>
<aside class="note"><b>Other ways to alter a subject</b>Augmentation lengthens its note values. Melodic inversion turns upward intervals downward and downward intervals upward. Neither operation requires a change of tempo.</aside>
<p>In <i>stretto</i>, one voice starts the subject before another has finished it. After its opening entries the C major Fugue contains many of these overlaps. The subject has to fit against a delayed copy of itself, sometimes against several copies. Bach builds the fugue on these overlapping entries and introduces no new theme.</p>`,
      score: [
        {
          kicker: 'Bach · BWV 846, fugue, bars 1–2', title: 'The subject and its first continuation',
          abc: `X:1
T:BWV 846 opening alto
M:4/4
L:1/8
Q:1/4=66
K:C
V:1 name="Alto"
%%MIDI program 6
z C D E F3/2 G/4 F/4 E A | D G- G/2 A/2 G/2 F/2 E/2 F/2 E/2 D/2 C/2 D/2 C/2 B,/2 |]`,
          caption: 'Bach’s opening alto, bars 1–2, with the other voices left out. The fourteen-note subject ends on the first E in bar 2; the semiquavers continue beyond it. Pitches and rhythm follow the <a href="https://www.mutopiaproject.org/ftp/BachJS/BWV846/wtk1-fugue1/wtk1-fugue1.ly">Mutopia score</a>. The playback tempo was chosen for this site.',
        },
      ],
      arts: [],
    },
    {
      id: 'figured-bass', numeral: 'iii', label: 'The accompanist’s shorthand', heading: 'Figured bass: a chord in a few figures',
      question: 'Figured bass and the player’s realised accompaniment',
      listen: [{ id: 'couperin-nations-piemontaise', t: 0, why: 'Gamba and keyboard share the bass beneath violin and flute; the keyboard fills out the chords.' }],
      html: `
<p>Figured bass tells an accompanist which notes belong above a written bass line. In the opening of Couperin’s <i>La Piémontoise</i>, four players share three lines. Violin and flute take the upper parts, and gamba and keyboard share the bass. The keyboard player also supplies chords, choosing how widely to spread them and when to repeat them. This shared bass part, with its chords, is called the <i>basso continuo</i>.</p>
<aside class="note"><b>Counting upwards</b>A 6 over C calls for A, six letter names above C. A 6 over E calls for C. The key signature supplies the appropriate sharps or flats.</aside>
<p>A bare bass note usually implies a third and fifth above it. The figure 6 normally means a third and sixth: over E in C major, G and C make a C-major chord with its third at the bottom. A 6/4 over G calls for C and E. At a cadence those notes can fall to B and D while G is held. The figures 6–5 and 4–3 describe the two downward steps.</p>
<p>An accidental beside a figure alters that interval; an accidental on its own usually alters the third. The figures leave many choices to the player. E–G–C and G–C–E both realise a 6 over a bass E, but their top lines lead to different notes. Under a singer holding a dissonant note, the player may need to add a chord; during a long instrumental note, the player may add a short answering phrase.</p>
<aside class="note"><b>Two kinds of shorthand</b>The modern symbol “C/E” names a C-major chord over E. A continuo figure 6 over E names the intervals above that bass. Both can lead to the same notes.</aside>
<p>In the example, the right hand holds E–G–C while the bass moves from C to E. The chord keeps its name, but the figures change. At the end the accompanist leads the individual voices into the final chord, with B rising to C and F falling to E.</p>`,
      score: [
        {
          kicker: 'Schematic · one possible realisation', title: 'Same upper chord over a different bass',
          abc: `X:1
T:Realising a figured bass
M:4/4
L:1/4
Q:1/4=88
K:C
V:1 name="Right hand"
V:2 name="Bass" clef=bass
V:1
%%MIDI program 6
[EGc]4 | [EGc]4 | [DFA]4 | [DFB]2 [CEc]2 |]
V:2
%%MIDI program 6
"5/3"C,4 | "6"E,4 | "6"F,4 | "7"G,2 "5/3"C,2 |]`,
          caption: 'An invented realisation. The first two bars keep E–G–C in the right hand while the bass moves C–E, changing 5/3 to 6. In the final bar, B rises to C and F falls to E. The last chord contains three Cs and an E; its fifth, G, is left out.',
        },
      ],
      arts: [],
    },
    {
      id: 'temperament', numeral: 'iv', label: 'Tuning the keyboard', heading: 'Temperament: the fifths will not quite fit',
      question: 'Keyboard tuning: distributing an unavoidable small discrepancy',
      html: `
<p>A pure fifth and a pure major third cannot both be kept on a keyboard. Four pure fifths, C–G–D–A–E, produce an E that is noticeably higher than the E of a pure C-major third once the octaves are brought together. A tuner has to decide where to make the adjustment, and the resulting compromise is called a <i>temperament</i>.</p>
<aside class="note"><b>The arithmetic</b>A pure fifth has the frequency ratio 3:2; a pure major third, 5:4. Four pure fifths, reduced by two octaves, give 81:64. The difference from 5:4 is the syntonic comma, 81:80, about 21.51 cents. A cent is one hundredth of an equal-tempered semitone.</aside>
<p>Twelve pure fifths do not close the circle. They exceed seven octaves by about 23.46 cents, the Pythagorean comma, 531441:524288. Quarter-comma meantone narrows each regular fifth by about 5.38 cents, which makes its major thirds pure. On a conventional twelve-note keyboard the closing interval is then badly out of tune; it is called the “wolf”. G♯ and A♭ need separate keys, and some old keyboards provide them.</p>
<p>Unequal well temperaments spread the adjustments so that all twenty-four major and minor keys are usable, while their thirds and fifths differ in size. Equal temperament divides the octave into twelve equal semitones, each with the ratio 2<sup>1/12</sup>. Its fifth is 700 cents; its major third is 400 cents, wider than pure by about 13.69 cents. [[bach|Bach]]’s <i>Well-Tempered Clavier</i> ranges through every key, from its opening C major to the closing B minor.</p>
<aside class="note"><b>Bach’s tuning</b>The title promises access to every key. It does not specify the exact temperament, and proposed reconstructions of Bach’s tuning differ.</aside>
<p>The buttons below play the compromise. Each pair of notes contains upper tones, called <i>partials</i>. When two partials nearly coincide, they produce a regular throbbing, or beating. Over the low A used here, the equal-tempered fifth beats slowly and the equal-tempered major third beats much faster. With the pure ratios, the corresponding partials coincide and that particular beating stops.</p>
<div class="lab" data-lab="tuning"><h4>Tuning laboratory</h4><div class="row"><button type="button" data-ratio="1.5" data-say="The matching upper tones meet at 660 Hz; this pair has no beating.">Pure fifth, 3:2</button><button type="button" data-ratio="1.4983070768766815" data-say="The upper tones sound at 660 and 659.255 Hz: about three beats every four seconds.">Equal-tempered fifth</button></div><div class="row"><button type="button" data-ratio="1.25" data-say="The matching upper tones meet at 1100 Hz; this pair has no beating.">Pure major third, 5:4</button><button type="button" data-ratio="1.2599210498948732" data-say="The upper tones sound at 1100 and 1108.731 Hz: about 8.73 beats each second.">Equal-tempered third</button><button type="button" data-ratio="1.265625" data-say="The upper tones sound at 1100 and 1113.75 Hz: 13.75 beats each second.">Pythagorean third</button></div><p class="readout">Each button pairs the same low A, tuned to 220 Hz, with a note above it.</p></div>`,
      score: [
        {
          kicker: 'Schematic · equal-tempered reference', title: 'A fifth and a major third above A',
          abc: `X:1
T:Fifth and third above A
M:4/4
L:1/4
Q:1/4=64
K:C
V:1
%%MIDI program 19
[A,E]4 | [A,^C]4 |]`,
          caption: 'A fifth and a major third above A3, the A below middle C. This notation player uses equal temperament. The laboratory keeps that low A at 220 Hz and changes the upper note, so that the beating between corresponding partials can quicken, slow down or disappear.',
        },
      ],
      arts: [],
    },
    {
      id: 'harmony', numeral: 'v', label: 'Chords finding home', heading: 'Harmony: why G7 wants to reach C',
      question: 'Voice leading and harmonic arrival',
      listen: [{ id: 'couperin-nations-piemontaise', t: 590, why: 'The sonade’s running lines converge on the closing cadence.' }],
      html: `
<p>In bars 1–4 of [[bach|Bach]]’s C major Prelude, BWV 846, the right hand repeats its figure while the harmony moves from C major through D minor seventh and G7, then back to C. The bass moves from C to B and returns. In the return to C, F falls to E.</p>
<aside class="note"><b>Tonic and dominant</b>C–E–G is the tonic chord in C major, written I. G–B–D is the dominant, V. Adding F makes G7: its B usually rises to C while F falls to E. The interval B–F is a tritone.</aside>
<p>A <i>cadence</i> closes a phrase. A dominant-to-tonic arrival, V–I, is an authentic cadence; its strongest textbook form puts both chord roots in the bass and ends with the tonic on top. A phrase ending on V makes a half cadence. A deceptive cadence moves V to a chord other than I, often to A minor in the key of C. IV–I, F major to C major, makes the plagal close.</p>
<p>Chords also prepare those arrivals. F major or D minor can lead into G7, and the first chord is then a <i>predominant</i>, preparing the dominant. A chain of descending fifths can extend the approach, as in E–A–D–G–C. Within a key, the chords take their notes from its scale, so the chain includes minor chords and sometimes a diminished fifth between roots.</p>
<aside class="note"><b>From a chord to a key</b>A tonicisation briefly treats another chord as home. A modulation establishes a new key through a longer passage, often confirmed by a cadence. C major and G major share six scale notes; F♯ distinguishes G major.</aside>
<p>The second example uses A minor as a hinge. It is vi in C major and ii in G major. D7 then introduces F♯, which rises to G as the chord’s C falls to B. Bach’s prelude reached C by the same movement; here it leads to G.</p>`,
      score: [
        {
          kicker: 'Schematic · tonic, predominant, dominant', title: 'I–IV–V7–I in C',
          abc: `X:1
T:Functional cadence
M:4/4
L:1/4
Q:1/4=92
K:C
V:1 name="Upper parts"
V:2 name="Bass" clef=bass
V:1
%%MIDI program 0
[EGc]4 | [FAc]4 | [FGB]4 | [EGc]4 |]
V:2
%%MIDI program 0
"I"C,4 | "IV"F,4 | "V7"G,4 | "I"C,4 |]`,
          caption: 'An invented I–IV–V7–I cadence in C. The G7 leaves out D, its fifth, but keeps the two notes that resolve most strongly. F falls to E and B rises to C, moving in contrary motion in the upper parts.',
        },
        {
          kicker: 'Schematic · a pivot chord', title: 'A minor',
          abc: `X:2
T:C major towards G major
M:4/4
L:1/4
Q:1/4=92
K:C
V:1 name="Upper parts"
V:2 name="Bass" clef=bass
V:1
%%MIDI program 0
[EGc]4 | [EAc]4 | [D^Fc]4 | [DGB]4 |]
V:2
%%MIDI program 0
"C"C,4 | "Am"A,,4 | "D7"D,4 | "G"G,4 |]`,
          caption: 'An invented progression from C towards G. A minor belongs to both keys. In bar 3, F♯ leads up to G while C leads down to B. The final G-major chord becomes a new tonic if the music that follows confirms it.',
        },
      ],
      arts: [],
    },
    {
      id: 'sonata-form', numeral: 'vi', label: 'Departure and return', heading: 'Sonata form: bringing the second theme home',
      question: 'Beethoven: a familiar melody returns in a new key',
      listen: [
        { id: 'beethoven-5-first', t: 54, why: 'The first violins play in E♭ major while the opening short–short–short–long rhythm continues beneath them.' },
        { id: 'beethoven-5-first', t: 350, why: 'The second group returns in C major, on the same home note as the opening music.' },
      ],
      html: `
<p>In sonata form, music that leaves the home key returns to it later in the movement. In the first movement of [[beethoven|Beethoven]]’s Fifth Symphony, the opening is in C minor. At bar 63 the first violins begin a quiet melody in E♭ major, marked <i>dolce</i> (sweetly). The same melody returns at bar 307 in C major, the home key with a major third in place of the opening’s minor third.</p>
<aside class="note"><b>Exposition</b>The opening section establishes the home key and a contrasting key. In a major-key movement, the new key is often the dominant; in a minor-key movement, often the relative major. C minor and E♭ major share a key signature.</aside>
<p>The <i>development</i> works on what the exposition has introduced. Beethoven starts his at bar 125, after the exposition repeat. The horn call returns in altered form; strings answer with D♭ falling to C. Later, the four-note rhythm is reduced to isolated chords passed between winds and strings.</p>
<p>The <i>recapitulation</i> brings back the principal themes and changes the route between them. Beethoven’s second group now reaches C major, with bassoons taking the call previously played by horns. Beneath the violin melody, the opening rhythm continues. After the <i>coda</i>, the movement’s closing section, the Fifth’s first movement ends in C minor.</p>
<aside class="note"><b>Second group in another key</b>In the <i>Waldstein</i> Sonata, Op. 53, Beethoven sends the C-major exposition to E major. At the return, the second group first appears in A major before reaching C.</aside>
<p>A sonata-form movement does not need a second tune. It can use the same theme in both key areas, which are defined by the key in which the music settles. In the Fifth, the four-note rhythm of the opening continues beneath the new violin theme. At bars 65–66, the cellos play three short B♭s and a longer E♭.</p>`,
      score: [
        {
          kicker: 'Schematic · Beethoven’s Fifth, first movement', title: 'Return of the second key area on C',
          abc: `X:1
T:Key areas in Beethoven's Fifth
M:4/4
L:1/2
Q:1/4=88
K:C
V:1
%%MIDI program 0
"Exposition: C minor"[C_EG]2 | "E-flat major"[_EG_B]2 | "Return: C minor"[C_EG]2 | "C major"[CEG] "C minor"[C_EG] |]`,
          caption: 'A schematic map of the first movement of the Fifth. The exposition moves from C minor to E♭ major. In the recapitulation the second group is transposed to C but stays in the major; the coda restores C minor. The held chords stand for the key areas and do not reproduce their lengths.',
        },
      ],
      arts: [],
    },
    {
      id: 'chromaticism', numeral: 'vii', label: 'Sharps and flats at work', heading: 'Chromaticism: the force of a semitone',
      question: 'Chromatic alteration and chord function',
      listen: [{ id: 'wagner-tannhauser-overture', t: 70, why: 'In this concert-band performance, the pilgrims’ hymn continues in long phrases while the chords beneath it change.' }],
      html: `
<p>Chromatic notes lie outside the scale of the current key. In [[chopin|Chopin]]’s E minor Prelude, Op. 28 No. 4, the left-hand chords descend by small steps beneath a melody that barely moves. In bars 1–4 the bass falls G–F♯–F–E. F♮ is not part of the ordinary E minor scale; it falls between F♯ and E in a descent by semitones.</p>
<aside class="note"><b>A passing note</b>C–C♯–D can fill the gap between C and D. One sharp is not enough to establish D as a new key.</aside>
<p>Some chromatic chords have standard functions. In C minor, D♭–F–A♭ is the <i>Neapolitan</i>, a major chord on the lowered second scale degree. It usually appears with F in the bass and prepares the dominant, G. An <i>augmented-sixth chord</i> approaches that G from both sides. A♭ falls and F♯ rises, and the two voices move outward to an octave.</p>
<aside class="note"><b>Three augmented sixths</b>In C, A♭–C–F♯ is the Italian form. Adding D makes the French; adding E♭ makes the German. The German commonly passes through C minor over a G bass before reaching G major, which avoids the parallel fifths of a direct resolution.</aside>
<p>Spelling tells a player where the notes are going. A♭–C–E♭–F♯ can lead towards G as a German sixth in C. Written A♭–C–E♭–G♭, the same piano keys make A♭7, which can resolve to D♭. This <i>enharmonic reinterpretation</i> lets one chord link two keys.</p>
<p>A diminished seventh offers several such junctions. B–D–F–A♭ can lead into C minor. With A♭ rewritten as G♯, the chord becomes G♯–B–D–F and can lead into A minor instead. The two versions in the second example sound identical on an equal-tempered piano. The resolution shows which note was the leading note: B rising to C, or G♯ rising to A.</p>`,
      score: [
        {
          kicker: 'Schematic · chromatic predominants', title: 'Neapolitan and German sixth chords towards G',
          abc: `X:1
T:Chromatic approach to the dominant
M:4/4
L:1/4
Q:1/4=88
K:C
V:1
%%MIDI program 0
"N6"[F,_A,_DF]4 | "German +6"[_A,C_E^F]4 | "Cadential 6/4"[G,C_EG]4 | "V7"[G,B,DF]4 | "i"[C,C_EG]4 |]`,
          caption: 'An invented progression in C minor. D♭ major over F is the Neapolitan sixth. In the next chord, A♭ and F♯ move outwards to G; C and E♭ then fall to B and D over that G bass.',
        },
        {
          kicker: 'Schematic · enharmonic reinterpretation', title: 'One diminished seventh chord, two resolutions',
          abc: `X:2
T:Two resolutions of one sounding collection
M:4/4
L:1/4
Q:1/4=80
K:C
V:1
%%MIDI program 0
"B diminished 7"[B,DF_A]4 | "C minor"[C_EG]4 | "G-sharp diminished 7"[B,DF^G]4 | "A minor"[A,CEA]4 |]`,
          caption: 'An invented pair of resolutions. Bars 1 and 3 use the same piano keys, but A♭ is spelt as G♯ in the second. The first chord resolves to C minor; in the second, G♯ acts as the leading note and the chord resolves to A minor.',
        },
      ],
      arts: [],
    },
    {
      id: 'tristan-chord', numeral: 'viii', label: 'An unfinished sentence', heading: 'The Tristan chord: a resolution that keeps us waiting',
      question: 'Wagner: the unresolved dominant',
      html: `
<p>The <i>Tristan</i> chord is the first harmony in [[wagner|Wagner]]’s <i>Tristan und Isolde</i>. After the cellos’ opening phrase, F–B–D♯–G♯ sounds in bar 2. The oboe’s G♯ rises. By bar 3 the harmony has reached E7, the dominant of A minor, which would normally resolve to an A-minor chord. Wagner follows it with a silence.</p>
<aside class="note"><b>Four notes</b>Above the bass F, B makes an augmented fourth, D♯ an augmented sixth and the high G♯ an augmented ninth. Rewritten F–A♭–C♭–E♭, the same piano keys would form a half-diminished seventh.</aside>
<p>One influential explanation treats G♯ as an <i>appoggiatura</i>, a note leaning towards its neighbour A. That A would complete F–A–B–D♯, a French augmented sixth preparing E. The oboe continues upwards, G♯–A–A♯–B, a four-note phrase that moves across the changing harmony.</p>
<aside class="note"><b>Two readings</b>The appoggiatura reading explains the chord’s tonal function. John Rothgeb’s analysis treats the whole G♯–A–A♯–B ascent as an ornament arriving early over the F bass. Both readings depend on the movement of the voices across bars 2–3.</aside>
<p>The second chord has not yet resolved. The first dissonance has resolved, and a second dissonance has replaced it. During the pause E7 is held before the phrase begins again at a new pitch.</p>
<p>[[debussy|Debussy]] later quoted this opening in <i>Golliwogg’s Cake-walk</i>, from <i>Children’s Corner</i>. In the middle of the dance the piano takes up Wagner’s phrase. The quotation is identified by the rising phrase and the pause that follows it, as well as by the four notes of the chord.</p>`,
      score: [
        {
          kicker: 'Schematic · exact pitch collections', title: 'F–B–D♯–G♯ to E7',
          abc: `X:1
T:Tristan chord and dominant seventh
M:4/4
L:1/4
Q:1/4=56
K:C
V:1
%%MIDI program 0
"Tristan chord"[F,B,^D^G]4 | "E7"[E,B,=D^G]4 |]`,
          caption: 'The two pitch collections, held as schematic chords. F falls to E and D♯ falls to D, while B and G♯ are held. Wagner’s oboe line moves through the change; this reduction isolates the arrival on E7, which does not yet resolve to A minor.',
        },
      ],
      arts: [],
    },
    {
      id: 'leitmotif', numeral: 'ix', label: 'Recurring themes', heading: 'Leitmotif',
      question: 'Returning phrase representing an absent person or object',
      listen: [
        { id: 'wagner-tannhauser-overture', t: 0, why: 'The pilgrims’ hymn opens the overture, its long phrases played here by a concert band.' },
        { id: 'wagner-tannhauser-overture', t: 690, why: 'The pilgrims’ hymn returns after the Venusberg music, bringing back the slow tempo of the overture’s opening.' },
      ],
      html: `
<p>A leitmotif is a recurring musical idea with a dramatic association. In [[wagner|Wagner]]’s <i>Ring</i>, the sword Nothung has its own music, which can sound before anyone draws a blade. The same idea accompanies the weapon as it is promised, possessed, broken and reforged across <i>Das Rheingold</i>, <i>Die Walküre</i> and <i>Siegfried</i>.</p>
<aside class="note"><b>The names came later</b>Commentators, especially Hans von Wolzogen, supplied many of the familiar labels for Wagner’s motives. In the score, a motive may be transformed long after its first dramatic association.</aside>
<p>A motive stays recognisable through changes because one distinctive feature stays the same, such as its opening leap or the pattern of its long and short notes. Transposition moves it to another pitch. Augmentation lengthens its notes in proportion. Reharmonisation puts different chords beneath the tune, so a phrase first heard over a major chord can return over a different bass.</p>
<p>In [[berlioz|Berlioz]]’s <i>Symphonie fantastique</i> (1830), the beloved has a recurring melody, the <i>idée fixe</i>. It appears in all five movements. In the finale, a high E♭ clarinet plays it as a dance with trills, representing the beloved at the witches’ sabbath.</p>
<aside class="note"><b>Transformation and association</b>A melody can change without representing a character. [[liszt|Liszt]] also used thematic transformation in instrumental forms, where a theme’s intervals remain recognisable when its pace or metre changes.</aside>
<p>The invented C–E–G figure below keeps its rising outline in each version. With E♭ the first leap becomes a minor third. Halving the note lengths makes it twice as fast, and doubling them spreads it across two bars. A composer could attach any of these versions to the sword’s next appearance on stage.</p>`,
      score: [
        {
          kicker: 'Schematic · thematic transformation', title: 'Changes of mode and duration in a cell',
          abc: `X:1
T:Transforming an invented cell
M:4/4
L:1/8
Q:1/4=80
K:C
V:1
%%MIDI program 60
"Cell"C2 E2 G4 | "Minor"C2 _E2 G4 | "Diminution"C E G2 C E G2 | "Augmentation"C4 E4 | G8 |]`,
          caption: 'An invented figure, C–E–G, altered three ways. The minor version lowers E to E♭. Diminution halves every note length; augmentation doubles it. The proportion short–short–long stays the same at both speeds.',
        },
      ],
      arts: [
        {
          relation: 'shared-context',
          type: 'painting', frame: 'mat', file: 'File:Siegfried and the Twilight of the Gods p 004.jpg',
          artist: 'Arthur Rackham', title: 'Mime at the anvil', date: '1911', medium: 'Colour book illustration',
          collection: 'Siegfried and the Twilight of the Gods, William Heinemann',
          note: '<p>Rackham’s 1911 illustration for <i>Siegfried</i> shows Mime bent over his anvil in a smoky workshop. He can make swords, but he cannot mend Nothung, and Siegfried later does what he cannot. In the opera, the sword’s music from earlier in the cycle returns in this scene.</p>',
        },
      ],
    },
    {
      id: 'modes', numeral: 'x', label: 'Another note feels like home', heading: 'Modes: the white keys change their meaning',
      question: 'White-key scale with D as final: Dorian mode',
      html: `
<p>A mode gives a familiar set of notes a different centre. The piano’s white keys make C major when C is the tonal centre. With D as the resting note, they make D Dorian: D–E–F–G–A–B–C. F gives it a minor third, and B♮ gives it a major sixth. Ordinary D natural minor has B♭.</p>
<aside class="note"><b>Establishing the centre</b>The first note of a scale exercise can suggest a centre. In a piece, a held bass, repeated notes and phrase endings help establish it. The seven white keys alone do not show which note is the centre.</aside>
<p>The other modes alter different degrees. E Phrygian begins with the close semitone E–F. F Lydian has B♮, a raised fourth compared with F major. G Mixolydian has F♮, a lowered seventh compared with G major. Transposing a mode preserves these distances: C Lydian needs F♯; D Mixolydian needs F♯ and C♮.</p>
<p>In [[debussy|Debussy]]’s <i>L’isle joyeuse</i> (1904), the broad second theme begins at bar 67 around A major, with the D♯ of A Lydian in its harmony. A Lydian contains A–B–C♯–D♯–E–F♯–G♯. Lowering that G♯ to G produces the <i>acoustic scale</i>, which Debussy also used.</p>
<aside class="note"><b>Older meanings</b>Medieval church modes classify a chant by its final note, range and reciting tone as well as its pattern of steps. Modern uses of Dorian or Phrygian usually describe the interval pattern; the older system has further distinctions, including authentic and plagal forms.</aside>
<p>The examples put two minor-third modes beside two major-third modes. Dorian’s B and Phrygian’s F lie at very different places above their centres. In the second pair, C Lydian has F♯ and G Mixolydian has F♮.</p>`,
      score: [
        {
          kicker: 'Schematic · minor-third modes', title: 'D Dorian and E Phrygian',
          abc: `X:1
T:Dorian and Phrygian
M:4/4
L:1/4
Q:1/4=112
K:C
V:1
%%MIDI program 0
"D Dorian"D E F G | A B c d || "E Phrygian"E F G A | B c d e |]`,
          caption: 'Two white-key scales with different resting notes. D Dorian has B♮, a major sixth above D. E Phrygian begins E–F, a semitone. These are schematic scales, with their steps laid out evenly.',
        },
        {
          kicker: 'Schematic · major-third modes', title: 'C Lydian and G Mixolydian',
          abc: `X:2
T:Lydian and Mixolydian
M:4/4
L:1/4
Q:1/4=112
K:C
V:1
%%MIDI program 0
"C Lydian"C D E ^F | G A B c || "G Mixolydian"G A B c | d e f g |]`,
          caption: 'Two schematic scales with major thirds. C Lydian raises C major’s F to F♯. G Mixolydian lowers G major’s F♯ to F♮.',
        },
      ],
      arts: [],
    },
    {
      id: 'whole-tone', numeral: 'xi', label: 'A scale without semitones', heading: 'Whole-tone harmony: six equal steps',
      question: 'Debussy’s whole-tone scale: six equal steps, no leading note',
      html: `
<p>The whole-tone scale has six notes, each a whole tone from the next: C–D–E–F♯–G♯–A♯, then C again. There are no semitones and no perfect fifths. C has the same neighbours, at the same distances, as every other note. A long bass note can still make one pitch stand out. In Debussy’s <i>Voiles</i> the bass keeps returning to low B♭.</p>
<aside class="note"><b>Two possible collections</b>A semitone transposition produces the other whole-tone collection. Another semitone returns to the original six notes, in a new order. [[messiaen|Messiaen]] called the whole-tone scale his first mode of limited transposition.</aside>
<p>Alternate notes make an augmented triad: C–E–G♯, three major thirds dividing the octave. The remaining notes make D–F♯–A♯. Both chords belong entirely to the scale. They can slide up and down together without acquiring the leading note and perfect fifth of a conventional dominant chord.</p>
<p>[[debussy|Debussy]]’s <i>Voiles</i> keeps to whole-tone writing for bars 1–41. At bar 42 the piano moves to a pentatonic passage on the five black keys, whose scale has unequal steps, including minor thirds. The whole-tone notes return at bar 48. The pentatonic passage lasts six bars and is the only sustained departure from the whole-tone scale in the piece.</p>
<aside class="note"><b>Voiles</b>The French title can mean sails or veils. Debussy printed it after the final bar of the prelude.</aside>
<p>In the example, the scale becomes two chords. C–E–G♯ and D–F♯–A♯ contain all six notes between them, without overlap. Neither chord supplies a B that can rise by a semitone into C. The bass, the rhythm and the placement of a phrase ending must do that work instead.</p>`,
      score: [
        {
          kicker: 'Schematic · whole-tone collection', title: 'A scale and its two augmented triads',
          abc: `X:1
T:Whole-tone collection on C
M:3/4
L:1/4
Q:1/4=100
K:C
V:1
%%MIDI program 0
C D E | ^F ^G ^A | "C augmented"[CE^G]3 | "D augmented"[D^F^A]3 |]`,
          caption: 'A schematic whole-tone scale followed by its two augmented triads. C–E–G♯ and D–F♯–A♯ divide the six notes between them. Every step of the scale is a tone; every step within either chord is a major third.',
        },
      ],
      arts: [],
    },
    {
      id: 'octatonic', numeral: 'xii', label: 'Semitone, tone, semitone', heading: 'Octatonic harmony: eight notes with several centres',
      question: 'Two major chords from one unfamiliar scale',
      html: `
<p>An octatonic scale alternates semitones and whole tones. From C, one version runs C–D♭–E♭–E–F♯–G–A–B♭, then back to C. Its eight notes include C major’s C–E–G and F♯ major’s F♯–A♯–C♯, with A♯ and C♯ respelled as B♭ and D♭. Two chords a tritone apart can therefore share the same scale.</p>
<aside class="note"><b>Three possible collections</b>Moving an octatonic collection up a minor third reproduces its original notes. Only the starting position and the transpositions one and two semitones above it give distinct collections. Messiaen called the octatonic scale his second mode of limited transposition.</aside>
<p>The same eight notes divide into two diminished-seventh chords, each built from minor thirds. In the example they are F♯–A–C–E♭ and C♯–E–G–B♭. Moving one chord up a minor third rearranges its notes. Moving it a semitone produces the other chord.</p>
<p>[[stravinsky|Stravinsky]] combined C major and F♯ major in the second tableau of <i>Petrushka</i>. Clarinets play the two triads together as the puppet’s motif. Their six notes all belong to the octatonic collection printed here. At the end of the third tableau, versions on A and E♭ add the remaining notes.</p>
<aside class="note"><b>A chord within a scale</b>The “Petrushka chord” contains six different notes. The full octatonic collection contains eight. The two triads can still be heard as separate shapes when their notes belong to a common scale.</aside>
<p>Whole-tone harmony removes semitones; octatonic harmony has four of them spaced around the octave. C–D♭, E♭–E, F♯–G and A–B♭ can each form an adjacent pair. A repeated bass or a strongly accented chord can bring one pair to the foreground while the others remain available.</p>`,
      score: [
        {
          kicker: 'Schematic · Messiaen mode 2, first transposition', title: 'Eight notes, two diminished sevenths',
          abc: `X:1
T:Octatonic collection and its partition
M:4/4
L:1/4
Q:1/4=108
K:C
V:1
%%MIDI program 0
C _D _E =E | ^F G A _B | "F-sharp diminished 7"[^F,A,C_E]4 | "C-sharp diminished 7"[^CEG_B]4 |]`,
          caption: 'A schematic octatonic scale and its two diminished sevenths. E♮ follows E♭ by a semitone. The scale’s D♭ is written as C♯ in the second chord, so its stacked minor thirds read C♯–E–G–B♭.',
        },
      ],
      arts: [],
    },
    {
      id: 'atonality', numeral: 'xiii', label: 'Beyond the home key', heading: 'Atonality: connections without a tonic',
      question: 'Note groups as structure without dominant–tonic cadence',
      listen: [{ id: 'schoenberg-quartet-2-entrueckung', t: 0, why: 'The four string parts rise and cross one another before the soprano enters, and no home key is established beneath them.' }],
      html: `
<p>Atonal music abandons the rule of tonic and dominant. At the opening of the finale of [[schoenberg|Schoenberg]]’s Second String Quartet, the strings play chromatic lines before a soprano enters. The movement’s title is <i>Entrückung</i>, rapture. In places its harmony has no home key, although tonal cadences return elsewhere in the movement.</p>
<aside class="note"><b>Before the row</b>The quartet dates from 1907–08 and the Three Piano Pieces, Op. 11, from 1909. Schoenberg developed his twelve-tone method later. Atonal music can be composed without a twelve-note row.</aside>
<p>A recurring group of intervals can hold such music together. The invented C–C♯–F figure below rises one semitone, then four. G–G♯–C repeats those distances a fifth higher. C–B–G turns both movements downwards. In each figure the small step comes first and the larger one second.</p>
<p>A composer can spread those notes across the keyboard or sound them together as a chord. <i>Pitch-class analysis</i> sets aside the octave differences to describe such relationships. Every C belongs to one pitch class. The ear also hears how far apart the notes are, which instrument plays them and how long the gaps last. A high violin harmonic and a low cello note can belong to the same pitch class and have very different effects.</p>
<aside class="note"><b>Consonant intervals remain</b>A major third or perfect fifth can occur inside an atonal passage. An isolated C–E–G chord establishes a key only when the surrounding music supports C as tonic.</aside>
<p>On 2 January 1911 Kandinsky heard Schoenberg’s music at a concert in Munich. Soon afterwards he painted <i>Impression III (Concert)</i>, in which the piano is a black shape and a field of yellow spreads across the room.</p>`,
      score: [
        {
          kicker: 'Schematic · interval-cell organisation', title: 'Cell with one transposition and two inversions',
          abc: `X:1
T:Transforming a three-note cell
M:3/4
L:1/4
Q:1/4=88
K:C
V:1
%%MIDI program 0
"Cell"C ^C F | "Up a fifth"G ^G c | "Inversion"C B, G, | "Inversion + tone"D ^C A, |]`,
          caption: 'An invented three-note figure. Its rises of one and four semitones become falls of one and four in the inversion. The second bar moves the original up a fifth; the last moves the inversion up a tone. No twelve-note row is involved.',
        },
      ],
      arts: [
        {
          relation: 'shared-context',
          type: 'painting', frame: 'lacquer', file: 'File:Wassily Kandinsky - Impression III (Concert) - Google Art Project.jpg',
          artist: 'Wassily Kandinsky', title: 'Impression III (Concert)', date: '1911', medium: 'Oil on canvas', collection: 'Lenbachhaus, Munich',
          note: '<p>Kandinsky attended a Schoenberg concert in Munich on 2 January 1911, with Franz Marc among his companions. He painted <i>Impression III (Concert)</i> soon afterwards. The black grand piano and the bent backs of the audience remain recognisable within the large area of yellow. The <a href="https://www.lenbachhaus.de/en/digital/collection-online/detail/impression-iii-konzert-30012206">Lenbachhaus account</a> also identifies them in the preparatory drawings.</p>',
        },
      ],
    },
    {
      id: 'twelve-tone', numeral: 'xiv', label: 'Twelve notes in order', heading: 'Twelve-tone writing: one row, many phrases',
      question: 'Schoenberg: fixed pitch order, free rhythm',
      html: `
<p>Twelve-tone writing starts with an ordering of all twelve chromatic pitch classes, each used once. Schoenberg’s <i>Suite for Piano</i>, Op. 25, is based on E–F–G–D♭–G♭–E♭–A♭–D–B–C–A–B♭. That row can supply a melody, be divided between several voices or be grouped into chords. It fixes neither the note lengths nor the octave in which each note sounds.</p>
<aside class="note"><b>Bach in the row</b>The last four notes, read backwards, are B♭–A–C–B♮. In German notation B means B♭ and H means B♮, so the row can spell B–A–C–H.</aside>
<p>The row has four standard forms. The <i>prime</i> gives the chosen order. <i>Inversion</i> reverses the direction of each interval, so E–F becomes E–E♭. <i>Retrograde</i> reads the order backwards; retrograde inversion reads the inverted order backwards. Each form can begin on any of twelve pitch levels, which gives forty-eight possibilities before any duplicates caused by symmetry in the row.</p>
<p>Schoenberg used only eight of those possibilities in Op. 25, the four forms and their transpositions by a tritone. His Gavotte and Musette have different characters, and the Prelude moves forward on repeated pitches from bar 3. Immediate repetitions of a note do not break a row’s ordering, and the method does not forbid repeating a pitch that has just sounded.</p>
<aside class="note"><b>The examples</b>The prime and inversion both begin on E. Equal crotchets make the order clear; the barlines group the notes in fours. These rhythms and octave positions are schematic.</aside>
<p>Writing to Nicolas Slonimsky on 3 June 1937, Schoenberg recalled wanting “a uniform musical idea” that could govern both themes and their accompaniment. Op. 25, composed in 1921–23, puts that idea into practice. The same row underlies a calm low melody in the Intermezzo and the sharply accented music of the Gigue.</p>`,
      score: [
        {
          kicker: 'Schoenberg · Op. 25 row, schematic rhythm', title: 'Prime and inversion, both beginning on E',
          abc: `X:1
T:Op. 25 prime and inversion
M:4/4
L:1/4
Q:1/4=108
K:C
V:1
%%MIDI program 0
"Prime"E F G _D | _G _E _A D | B C A _B || "Inversion about E"E _E _D G | D F C _G | A _A B _B |]`,
          caption: 'The exact pitch-class order of Op. 25, followed by its inversion about E. E–F–G rises by a semitone and a tone; E–E♭–D♭ falls by the same intervals. The equal crotchets and the octave placement are schematic.',
        },
        {
          kicker: 'Schematic · operations on the same row', title: 'Retrograde and retrograde inversion',
          abc: `X:2
T:Op. 25 retrograde forms
M:4/4
L:1/4
Q:1/4=108
K:C
V:1
%%MIDI program 0
"Retrograde"_B A C =B | D _A _E _G | _D G F E || "Retrograde inversion"_B =B _A =A | _G C F D | G _D _E =E |]`,
          caption: 'The preceding two rows read backwards, with schematic rhythm. The retrograde begins B♭–A–C–B♮, spelling B–A–C–H in German note names. Every note appears once in each twelve-note group.',
        },
      ],
      arts: [],
    },
    {
      id: 'rhythm', numeral: 'xv', label: 'Where the accents fall', heading: 'Rhythm: two beats can become three',
      question: 'Steady pulse under conflicting larger groupings',
      listen: [{ id: 'ravel-quartet-scherzo', t: 0, why: 'Plucked strings set groups of three quavers against groups of two, so the six quavers of the dance can be counted in two ways at once.' }],
      html: `
<p>Rhythm is the pattern of notes and silences; metre groups them into beats and bars. The plucked opening of the scherzo in [[ravel|Ravel]]’s String Quartet groups six quavers in two ways at once, as two groups of three (as in 6/8) and as three groups of two (as in 3/4). The quavers stay at the same speed while the grouping into larger beats changes.</p>
<aside class="note"><b>Hemiola</b>Six equal units can be regrouped from 3+3 to 2+2+2. Across two bars of 3/4, three minims can replace the expected two groups of three crotchets. The total length stays the same and the accents fall in different places.</aside>
<p><i>Additive rhythm</i> joins unequal groups. In [[bartok|Bartók]]’s first Dance in Bulgarian Rhythm, No. 148 of <i>Mikrokosmos</i>, nine quavers divide 4+2+3. The next dance uses 2+2+3. In both, the quaver stays constant while the groups vary in length.</p>
<p>[[messiaen|Messiaen]]’s <i>added values</i> alter a pattern from within. A short note, rest or dot lengthens part of a familiar rhythm. In the example, two quavers plus two become three plus two, and the extra quaver delays the start of the next group. His non-retrogradable rhythms have a different property. A sequence such as 2–3–2 has the same durations forwards and backwards.</p>
<aside class="note"><b>Changing bars</b>In the <i>Rite of Spring</i>’s Sacrificial Dance, Stravinsky uses changing bar lengths so that accents return at uneven distances. Elsewhere in the ballet, he shifts accents inside an unchanged metre.</aside>
<p><i>Polyrhythm</i> sounds different divisions of one span at once. In three against two, the upper part places three evenly spaced notes against two below. Dividing the span into six equal units puts the upper attacks at 0, 2 and 4, and the lower ones at 0 and 3. They meet again at 6. In the second example, only the first note of each bar is attacked together.</p>`,
      score: [
        {
          kicker: 'Schematic · regrouping and addition', title: 'Triple metre, hemiola, unequal groups',
          abc: `X:1
T:Regrouping a pulse
M:3/4
L:1/8
Q:1/4=88
K:C
V:1
%%MIDI program 0
"Three crotchets"C2 C2 C2 | "Hemiola"C4 C2- | C2 C4 | [M:7/8]"2 + 2 + 3"C2 C2 C3 | [M:2/4]"2 + 2"C2 C2 | [M:5/8]"3 + 2"C3 C2 |]`,
          caption: 'Invented rhythms on one note. Bars 2–3 make three minims across two bars of 3/4; the tied note crosses the barline without a new attack. Later, 7/8 divides 2+2+3. The last bar adds a quaver to the preceding bar’s first note.',
        },
        {
          kicker: 'Schematic · three against two', title: 'Three attacks against two',
          abc: `X:2
T:Three against two
M:2/4
L:1/8
Q:1/4=72
K:C
V:1 name="Three"
V:2 name="Two" clef=bass
V:1
%%MIDI program 0
(3C2 E2 G2 | (3C2 E2 G2 |]
V:2
%%MIDI program 0
C,2 G,2 | C,2 G,2 |]`,
          caption: 'An invented three-against-two pattern. The upper part fits three triplet crotchets into the time of the bass’s two ordinary crotchets. Both parts begin together, separate and meet again at the next barline.',
        },
      ],
      arts: [],
    },
    {
      id: 'orchestration', numeral: 'xvi', label: 'Choosing the player', heading: 'Orchestration: the flute hands over its tune',
      question: 'Same notes, different instrument: changes of timbre',
      listen: [
        { id: 'ravel-bolero', t: 13, why: 'A solo flute plays the first tune over the snare drum and the bass’s alternating C and G.' },
        { id: 'ravel-bolero', t: 56, why: 'A clarinet takes the same tune while the drum and bass continue their pattern.' },
      ],
      html: `
<p>Orchestration decides which instrument plays each note. In [[ravel|Ravel]]’s <i>Boléro</i>, the first tune passes from solo flute to clarinet while the snare drum repeats its two-bar rhythm. On its second appearance the melody is the same and the instrument playing it is different. Later, the second tune climbs into the bassoon’s high range, where every note sounds more exposed.</p>
<aside class="note"><b>Register</b>The same instrument sounds different in different parts of its range. A low flute is easily covered by other players; a high flute can be heard above them. The choice of octave for a melody is part of orchestrating it.</aside>
<p>Ravel also made new voices by combining instruments. A horn carries the tune with celesta and piccolos sounding above it, so that the separate parts suggest the upper tones of one composite instrument. Elsewhere, a muted trumpet shares a statement with a flute, and a high trombone solo brings the line closer to a sliding human voice.</p>
<p>The way a note begins matters as much as the way it is sustained. A plucked violin string starts sharply and dies away; a bowed note can grow louder after it begins. A mute changes the sound again. <i>Sul ponticello</i> brings the bow close to the bridge; <i>col legno</i> uses its wood. Wind multiphonics use special fingerings and ways of blowing to sound several pitches together.</p>
<aside class="note"><b>More players, less clarity</b>Doubling a line can make it stronger, but another instrument’s attack may blur its edges. The composer also has to leave space around the melody. A quiet solo flute will struggle against a full brass chord.</aside>
<p><i>Boléro</i> keeps its two tunes and its repeating bass in place for nearly the whole piece, so each new player is conspicuous. Later, whole sections take the melody, and the orchestra around the drum rhythm grows very large. The example below reduces this to two solo sounds: a flute plays a phrase, then an oboe plays the same notes.</p>`,
      score: [
        {
          kicker: 'Schematic · identical melody, different instrument', title: 'Flute followed by oboe',
          abc: `X:1
T:Changing the instrument, not the notes
M:4/4
L:1/8
Q:1/4=88
K:C
V:1 name="Flute"
V:2 name="Oboe"
V:1
%%MIDI program 73
c2 d2 e2 g2 | f2 e2 d4 | z8 | z8 |]
V:2
%%MIDI program 68
z8 | z8 | c2 d2 e2 g2 | f2 e2 d4 |]`,
          caption: 'An invented two-bar phrase, first on flute, then oboe, at the same sounding pitch and speed. The synthesised playback isolates the change of instrument. Live players would also shape the notes with breath and articulation.',
        },
      ],
      arts: [],
    },
    {
      id: 'minimalism', numeral: 'xvii', label: 'A pattern begins to change', heading: 'Minimalism: two players slip apart',
      question: 'Repeated figure against a partner one note ahead',
      html: `
<p>In late 1966, [[reich|Steve Reich]] made a tape loop of a short piano pattern and tried playing along with it. He had already developed phasing with tape recorders and now wanted to do it with live performers. <i>Piano Phase</i> (1967) begins with two pianists repeating the same figure together. One speeds up slightly until the parts are one note apart. The overlapping notes form patterns that neither pianist plays alone.</p>
<aside class="note"><b>The phase shift</b>The moving player returns to the other player’s speed at each new alignment. The process continues until the two patterns are in unison again. The first example shows two settled positions, with an abrupt jump between them.</aside>
<p>Terry Riley gave performers a different freedom in <i>In C</i> (1964). All the players have the same fifty-three patterns in the same order, and each player chooses how many times to repeat a pattern before moving on to the next. Riley asked the players to stay within two or three patterns of one another. A repeated high C can keep the quaver pulse while the neighbouring patterns interlock.</p>
<p>Philip Glass’s <i>Two Pages</i> lengthens and shortens a repeating line. The technique is called <i>additive process</i>, in which a figure returns with an extra piece attached or with a piece removed. An invented C–D–E could become C–D–E–G, then C–D–E–G–A. The notes keep their speed, but the beginning comes round later.</p>
<aside class="note"><b>A different use of few notes</b>[[part|Pärt]]’s tintinnabuli joins a melodic line to a second voice drawn from a fixed triad. Its rules determine which triad note is placed beside each melody note.</aside>
<p>In Pärt’s <i>Für Alina</i> (1976), the piano pairs a free-moving melody with notes of the B-minor triad. Phrases gain a note at a time, then lose them again. The second example below invents a simpler rule in A minor: each melody note receives the nearest strictly lower A, C or E. When the melody reaches F, the partner is E, leaving a bare semitone between them.</p>`,
      score: [
        {
          kicker: 'Schematic · two phase positions', title: 'One-quaver advance in the lower pattern',
          abc: `X:1
T:Fixed positions in a phase process
M:4/4
L:1/8
Q:1/4=100
K:C
V:1 name="Pattern A"
V:2 name="Pattern B"
V:1
%%MIDI program 0
C D E G C D E G | C D E G C D E G | C D E G C D E G | C D E G C D E G |]
V:2
%%MIDI program 0
C D E G C D E G | C D E G C D E G | D E G C D E G C | D E G C D E G C |]`,
          caption: 'An invented four-note pattern. The two parts coincide in bars 1–2. In bars 3–4 the lower part starts on D, one quaver ahead. Reich’s opening figure has twelve notes, and his players move gradually between alignments; this example shows the two endpoints.',
        },
        {
          kicker: 'Schematic · a tintinnabuli rule', title: 'Scale voice with the nearest lower triad note',
          abc: `X:2
T:Melody and triadic partner
M:4/4
L:1/4
Q:1/4=64
K:Am
V:1 name="Melody"
V:2 name="Triad"
V:1
%%MIDI program 0
B c d e | f e d c |]
V:2
%%MIDI program 0
A A c c | e c c A |]`,
          caption: 'An invented tintinnabuli rule: the lower part always takes the nearest A, C or E strictly below the melody. Under a melodic E it plays C; under F it plays E. The rule produces close seconds as readily as thirds.',
        },
      ],
      arts: [],
    },
    {
      id: 'spectralism', numeral: 'xviii', label: 'The notes inside a note', heading: 'Spectralism: an ensemble inside a low E',
      question: 'Overtones of one note as a chord',
      html: `
<p>An instrumental note usually combines a fundamental with higher tones. In an ideal <i>harmonic spectrum</i>, these upper tones vibrate at two, three, four and more times the frequency of the fundamental. Over a low E, the first few fall near E, B, E, G♯, B, D and E. Differences in their relative strengths help make a bowed string sound different from a horn playing the same note.</p>
<aside class="note"><b>Partials and harmonics</b>A partial is one component of a complex sound. A harmonic partial vibrates at a whole-number multiple of the fundamental. A bell’s partials can fall between those positions, producing an inharmonic spectrum.</aside>
<p>Spectral composition turns those inner relationships into notes for instruments. Gérard Grisey’s <i>Partiels</i> (1975), for eighteen musicians, opens around a low E. Other instruments enter above it and spread the E’s upper tones across several octaves. The timing of each entrance helps the separate notes merge into one large sound.</p>
<aside class="note"><b>The sketches</b>François-Xavier Féron’s research distinguishes the constructed spectra of <i>Périodes</i> and <i>Partiels</i> from the direct sound analyses Grisey used later in <i>Modulations</i> and <i>Transitoires</i>. His <a href="https://ressources.ircam.fr/en/media/xc3f6d1_francois-xavier-feron-lexploration-musi">IRCAM lecture of 9 November 2022</a> corrected the familiar account that a recorded trombone served as the model for the early works.</aside>
<p>Tristan Murail’s <i>Gondwana</i> (1980) uses calculated pitches to build bell-like chords for orchestra. These chords can change by degrees towards more harmonic spectra. The intervals between the notes shift while instruments hold or re-attack them, so a chord’s make-up can change before it moves to another chord.</p>
<p>The piano can only approximate some of these pitches. Above E, the fifth harmonic falls about 13.69 cents below the equal-tempered G♯; the seventh falls about 31.17 cents below D. A cent is one hundredth of a semitone. String and wind players can adjust those notes, while the equal-tempered example below fixes them to the piano’s keys.</p>`,
      score: [
        {
          kicker: 'Schematic · equal-tempered landmarks only', title: 'Eight partials in equal temperament',
          abc: `X:1
T:Tempered landmarks of the E harmonic series
M:4/4
L:1/4
Q:1/4=88
K:C
V:1 name="Low partials" clef=bass
V:2 name="Upper partials"
V:1
%%MIDI program 0
E,,2 E,2 | B,2 E2 | z4 | z4 |]
V:2
%%MIDI program 0
z4 | z4 | ^G2 B2 | d2 e2 |]`,
          caption: 'An invented piano map of the first eight harmonics above E, with frequency ratios 1:2:3:4:5:6:7:8. The octave Es are exact. The true third and sixth harmonics lie about 1.96 cents above these Bs; the fifth is 13.69 cents below G♯, and the seventh 31.17 cents below D.',
        },
      ],
      arts: [
        {
          relation: 'documented-use',
          type: 'painting', frame: 'mat', file: 'File:Piero della Francesca - Madonna del Parto - WGA17613.jpg',
          artist: 'Piero della Francesca', title: 'Madonna del Parto', date: 'c. 1450–65', medium: 'Fresco, detached', collection: 'Musei Civici Madonna del Parto, Monterchi',
          note: '<p>Two angels open a tent; Mary’s fingers part her dress. Grisey saw one opening inside another in Piero’s <i>Madonna del Parto</i>. In his programme note for <i>L’Icône paradoxale</i>, published at Festival Musica in 1996, he described turning the fresco’s proportions, 3:5:8:12, into musical durations. The two singers sing Piero’s names and words from his treatise on perspective. The <a href="https://brahms.ircam.fr/fr/work/l%27icone-paradoxale">composer’s account</a> also describes how these proportions are carried into the divided orchestra.</p>',
        },
      ],
    },
  ],
};
