// Glossary of listening vocabulary (schema: CONTRACTS.md, “Glossary”).
// Entries are grouped by kind for editing; the default export is one flat array.
// `hear` pointers use times and bars taken from content/listen/*.mjs (cues, sections, transitions).

const form = [
  {
    slug: 'sonata-form', term: 'Sonata form', aka: ['sonata-allegro form', 'sonata-allegro'], kind: 'form',
    short: 'Sonata form presents themes in different keys, develops them, then brings them back around the home key.',
    html: `<p>A sonata-form movement usually has three main sections: exposition, development and recapitulation. In the exposition of [[beethoven|Beethoven]]’s Fifth Symphony, C minor meets a gentler theme in E♭ major. The development breaks up the opening four-note figure and sends it through other keys. When the themes return, the second group moves to C major: its home note is now the same as the first theme’s. A long coda drives the movement back to C minor.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 1 }, note: 'The exposition begins with the four-note motto, twice brought to a halt by a fermata.' },
      { listen: 'beethoven-5-first', bar: { n: '125', occ: 1 }, note: 'The development begins: the horns’ call leads to a held G and the strings answer on D♭, a new harmonic direction.' },
      { listen: 'beethoven-5-first', bar: { n: '303', occ: 1 }, note: 'The recapitulated second group arrives in C major, where the exposition had reached E♭ major.' },
    ],
    see: ['exposition', 'development', 'recapitulation', 'coda', 'medial-caesura', 'retransition'],
  },
  {
    slug: 'exposition', term: 'Exposition', aka: [], kind: 'form',
    short: 'An exposition introduces the main themes of a sonata-form movement or the first round of subject entries in a fugue.',
    html: `<p>The exposition is the first substantial account of a piece’s main ideas. In sonata form it also establishes a second key: Beethoven’s Fifth moves from C minor to E♭ major across bars 1–124, then repeats the whole stretch. In a fugue, the exposition introduces the voices one by one. Bach’s B minor fugue from Book I of <i>The Well-Tempered Clavier</i> begins in the alto; tenor, bass and soprano join it in turn.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 1 }, note: 'The exposition’s first group: the motto, then a horn call at bar 59 that leads to the E♭-major theme.' },
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 2 }, note: 'The repeat: the exposition begins again, so bar 1 is heard a second time.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '1', occ: 1 }, note: 'A fugal exposition begins: the alto states the subject alone.' },
    ],
    see: ['sonata-form', 'fugue', 'subject', 'medial-caesura', 'bar'],
  },
  {
    slug: 'development', term: 'Development section', aka: ['development section'], kind: 'form',
    short: 'The development is the middle section of a sonata-form movement, where earlier themes are altered and taken through other keys.',
    html: `<p>A development takes liberties with music already heard. A tune may lose all but its opening notes; two instruments may argue over the same fragment. In Beethoven’s Fifth, bars 125–247 keep returning to the four-note motto. Towards the end, wind and strings exchange pairs of chords, then single chords, until almost nothing of the tune remains. The full opening returns at bar 248.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '125', occ: 1 }, note: 'The horns launch the motto’s rhythm on a held G; the strings answer on D♭ falling to C.' },
      { listen: 'beethoven-5-first', bar: { n: '165', occ: 1 }, note: 'The material is in fragments: violins climb G–B♭–C while cellos run downwards and the horns repeat the motto’s rhythm.' },
    ],
    see: ['sonata-form', 'liquidation', 'retransition', 'sequence', 'imitation'],
  },
  {
    slug: 'recapitulation', term: 'Recapitulation', aka: [], kind: 'form',
    short: 'The recapitulation brings back a sonata-form movement’s opening themes, usually with the later themes now in the home key.',
    html: `<p>After the development, the opening themes return with their route through the keys redrawn. In Beethoven’s Fifth, the second group first appeared in E♭ major. At bar 303 it returns in C major, introduced by bassoons playing the call previously given to the horns. The movement began in C minor, so the home note is restored while the major third briefly brightens it.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '248', occ: 1 }, note: 'The recapitulation breaks in as the motto’s rhythm re-emerges from the fragments of the retransition.' },
      { listen: 'beethoven-5-first', bar: { n: '303', occ: 1 }, note: 'Bassoons take the horn call and the violins’ melody begins in C major.' },
      { listen: 'mozart-40-molto-allegro', t: 265, note: 'In this stretch the second theme returns in G minor, after the same kind of pause as in the exposition.' },
    ],
    see: ['sonata-form', 'development', 'retransition', 'medial-caesura'],
  },
  {
    slug: 'coda', term: 'Coda', aka: [], kind: 'form',
    short: 'A coda is a closing passage added after a piece’s main sections, ranging from a few chords to a substantial final section.',
    html: `<p><i>Coda</i> is Italian for ‘tail’. It follows the last main section of a movement and can do much more than round things off. In Beethoven’s Fifth, the first movement’s coda occupies bars 374–502, almost as long as the exposition. The violins hold C while the bass changes beneath them; the four-note motto still has work to do. Chopin’s First Ballade ends with a headlong coda marked <i>Presto con fuoco</i>.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '374', occ: 1 }, note: 'The coda begins as the recapitulation’s cadence arrives; the violins hold C while the cellos change the bass every two bars.' },
      { listen: 'chopin-ballade-1', t: 486, note: 'The recalled theme narrows towards a dominant chord and the fast coda is released: two urgent beats replace the earlier 6/4 sway.' },
    ],
    see: ['sonata-form', 'recapitulation', 'elision', 'perfect-cadence'],
  },
  {
    slug: 'rondo', term: 'Rondo', aka: ['rondo form'], kind: 'form',
    short: 'A rondo brings its main tune back between contrasting episodes, often in the pattern A–B–A–C–A.',
    html: `<p>The returning tune is called the refrain; the passages between its appearances are episodes. The refrain usually returns in the home key, though its accompaniment or scoring may change. Ravel’s <i>Pavane pour une infante défunte</i> follows A–B–A–C–A: its measured G-major tune returns after each of two contrasting episodes. In the orchestral version, the first statement belongs to a solo horn.</p>`,
    hear: [
      { listen: 'ravel-pavane', t: 114, note: 'The refrain returns after the first episode; a held chord has just stopped the episode’s harmonic sliding.' },
      { listen: 'ravel-pavane', t: 244, note: 'The refrain returns a last time after the broader second episode.' },
      { listen: 'richard-strauss-till-eulenspiegel', t: 35, note: 'A winding tune and a clipped motif identify Till through the changing episodes.' },
    ],
    see: ['ternary-form', 'ritornello', 'episode', 'leitmotif'],
  },
  {
    slug: 'ternary-form', term: 'Ternary form', aka: ['A–B–A form', 'ABA form'], kind: 'form',
    short: 'Ternary form has an opening section, a contrasting middle and a return of the opening, often with changes.',
    html: `<p>The outline is A–B–A. The middle section can change key or introduce another tune; the return may be written out with new details. In Schubert’s G♭-major Impromptu, D. 899 No. 3, a singing piano melody surrounds a more forceful E♭-minor middle section. The rippling accompaniment continues underneath both. At bar 55 the opening melody returns, very softly.</p>`,
    hear: [
      { listen: 'schubert-impromptu-gflat', bar: { n: '25', occ: 1 }, note: 'The middle section begins: E♭ minor, accented B♭s in the melody over broken chords.' },
      { listen: 'schubert-impromptu-gflat', bar: { n: '55', occ: 1 }, note: 'After a held dominant the opening melody returns, pianissimo, over the same triplets.' },
    ],
    see: ['rondo', 'binary-form', 'minuet-and-trio', 'retransition'],
  },
  {
    slug: 'binary-form', term: 'Binary form', aka: ['rounded binary'], kind: 'form',
    short: 'Binary form divides a piece into two main sections, usually repeated, with the second bringing the music home.',
    html: `<p>Binary form has two sections, commonly marked with repeat signs. The first often ends away from the home key; the second finds its way back. Scarlatti’s Sonata in D major, K. 119, reaches A major at the end of its first half. Taking the repeat jumps straight from that A-major close back to D. In rounded binary form, the opening tune also returns within the second half.</p>`,
    hear: [
      { listen: 'scarlatti-sonata-k119', t: 68, note: 'The first-half repeat is taken: the music jumps from the A-major cadence back to D-major material, with no bridge written for it.' },
    ],
    see: ['ternary-form', 'sonata-form', 'catalogue-number'],
  },
  {
    slug: 'theme-and-variations', term: 'Theme and variations', aka: ['variation form', 'variations'], kind: 'form',
    short: 'Theme and variations presents a tune followed by altered versions that retain something of its melody, bass or chords.',
    html: `<p>A variation can ornament a tune, put it in another voice or turn it from major to minor. Haydn’s ‘Surprise’ Symphony gives its Andante a plain C-major theme and four variations; the second turns to C minor. In Rameau’s Gavotte with Six Doubles, each <i>double</i> is another variation, with faster notes threaded through the theme’s chords. Beethoven’s Op. 109 finale eventually clears away its trills and restores the unadorned theme.</p>`,
    hear: [
      { listen: 'haydn-94-andante', t: 84, note: 'The first variation adds decoration around the theme.' },
      { listen: 'haydn-94-andante', t: 164, note: 'Variation II restarts the theme in C minor; E♭ replaces E♮ and the attacks are forceful.' },
      { listen: 'rameau-gavotte-six-doubles', t: 84, note: 'The first double: continuous semiquavers run above a slower chordal version of the theme.' },
      { listen: 'beethoven-109-variations', t: 750, note: 'The theme returns without the accumulated passagework, as slow chords after the trills.' },
    ],
    see: ['passacaglia', 'chaconne', 'ostinato', 'modal-mixture'],
  },
  {
    slug: 'fugue', term: 'Fugue', aka: [], kind: 'form',
    short: 'A fugue builds a piece from a theme that enters in successive voices and returns throughout the music.',
    html: `<p>One voice begins the subject; another answers it while the first carries on. The other voices enter in turn, and later statements of the subject alternate with passages called episodes. In Bach’s B minor fugue, BWV 869, the alto starts alone. The tenor enters at bar 4, the bass at bar 9 and the soprano at bar 13. A pianist plays all four voices with two hands.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '1', occ: 1 }, note: 'The alto states the subject alone in B minor, beginning F♯–D–B after a quaver rest.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '4', occ: 1 }, note: 'The tenor answers in F♯ minor while the alto continues with a countersubject.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '13', occ: 1 }, note: 'The soprano completes the four voices, carrying the subject to the top of the texture.' },
    ],
    see: ['subject', 'answer', 'countersubject', 'episode', 'stretto', 'counterpoint', 'imitation'],
  },
  {
    slug: 'subject', term: 'Fugue subject', aka: ['fugal subject', 'first subject', 'second subject'], kind: 'form',
    short: 'A fugue subject is the main melody that the different voices introduce and repeatedly take up.',
    html: `<p>The subject is the melody by which a fugue is recognised. Bach’s B minor fugue begins F♯–D–B, then winds through pairs of notes a semitone apart. Over its full length it touches all twelve notes of the chromatic scale. ‘First subject’ and ‘second subject’ also name themes in sonata form: in the first movement of Rachmaninoff’s Second Piano Concerto, the piano introduces the second subject in E♭ major.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '1', occ: 1 }, note: 'The whole subject in the alto alone, before any other voice enters.' },
      { listen: 'rachmaninoff-concerto-2-moderato', t: 150, note: 'The piano introduces the broad second subject in E♭ major.' },
    ],
    see: ['fugue', 'answer', 'countersubject', 'sonata-form', 'motif'],
  },
  {
    slug: 'answer', term: 'Fugal answer', aka: ['tonal answer', 'real answer'], kind: 'form',
    short: 'A fugal answer repeats the subject in another voice, usually a fifth higher or a fourth lower.',
    html: `<p>When the second voice enters a fugue, it answers the subject in a different pitch range, usually on the dominant. A real answer transposes every interval exactly; a tonal answer adjusts some intervals to keep the home key in view. Bach’s B minor fugue has a tonal answer in the tenor at bar 4. Above it, the alto continues with the countersubject.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '4', occ: 1 }, note: 'The tenor answers in F♯ minor while the alto begins its descending countersubject.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '13', occ: 1 }, note: 'The soprano gives the answer in F♯ minor, bringing the subject to the top of the texture.' },
    ],
    see: ['fugue', 'subject', 'countersubject', 'modulation'],
  },
  {
    slug: 'countersubject', term: 'Countersubject', aka: [], kind: 'form',
    short: 'A countersubject is a recurring melody designed to accompany a fugue’s subject or answer.',
    html: `<p>When a fugue’s first voice finishes the subject, it may begin a second melody against the next voice’s answer. If this companion returns with later entries, it is a countersubject. In Bach’s B minor fugue, descending crotchets in the alto accompany the tenor’s answer. At bar 9 the tenor carries that companion above the bass’s subject, while the alto adds a quicker line.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '4', occ: 1 }, note: 'The alto’s countersubject: descending crotchets against the tenor’s quavers, two independent speeds.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '9', occ: 1 }, note: 'The bass states the subject while the tenor carries the countersubject and the alto adds a quicker line.' },
    ],
    see: ['fugue', 'subject', 'counterpoint'],
  },
  {
    slug: 'episode', term: 'Episode', aka: [], kind: 'form',
    short: 'An episode is a passage between statements of a fugue subject or returns of a refrain.',
    html: `<p>In a fugue, an episode usually works with fragments of the subject or its companions and often changes key. Bach’s B minor fugue has a descending bass sequence in its first episode, with quicker imitations above. In a rondo, episodes contrast with the returning tune. In Vivaldi’s <i>Spring</i>, the first solo episode sets three violins exchanging little trills and calls: the birds of the accompanying sonnet.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '17', occ: 1 }, note: 'An episode: the bass descends in repeating shapes while soprano and tenor imitate a quicker figure.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '50', occ: 1 }, note: 'Running semiquavers pass through the voices, preparing a move from D major to F♯ minor.' },
      { listen: 'vivaldi-spring-allegro', t: 34, note: 'After the opening refrain, the first episode: three violins exchange birdsong figures with trills.' },
    ],
    see: ['fugue', 'sequence', 'ritornello', 'rondo'],
  },
  {
    slug: 'stretto', term: 'Stretto', aka: [], kind: 'form',
    short: 'Stretto overlaps entries of a fugue subject, with the next voice starting before the previous statement has finished.',
    html: `<p>In stretto, the voices crowd closer together. A second entry begins while the first is still sounding. In Bach’s B minor fugue, the alto starts a shortened subject at bar 34 and the soprano follows one bar later. From bar 41, soprano, alto, bass and tenor enter in successive bars, each taking up the subject’s opening before the preceding voice has finished.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '34', occ: 1 }, note: 'The alto starts a shortened subject, and a bar later the soprano enters over it.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '41', occ: 1 }, note: 'Four overlapping entries in four bars, each arriving before a full subject’s length has passed.' },
    ],
    see: ['fugue', 'subject', 'imitation', 'canon'],
  },
  {
    slug: 'ritornello', term: 'Ritornello', aka: ['ritornello form'], kind: 'form',
    short: 'A ritornello is a returning instrumental passage, often the orchestral refrain between solo episodes in a Baroque concerto.',
    html: `<p>The Italian word means ‘little return’. In a Baroque concerto, the full ensemble commonly opens with a ritornello, then returns to it between solo episodes. Later appearances may be shortened or moved to another key. Vivaldi’s <i>Spring</i> repeatedly brings back parts of its E-major refrain between birdsong and storms. Bach’s Fifth Brandenburg Concerto restores its opening D-major ritornello after the harpsichord’s long solo cadenza.</p>`,
    hear: [
      { listen: 'bach-brandenburg-5-allegro', t: 0, note: 'The ensemble opens with the D-major ritornello.' },
      { listen: 'bach-brandenburg-5-allegro', t: 568, note: 'The final ritornello, released by a dominant pedal at the end of the harpsichord cadenza.' },
      { listen: 'vivaldi-spring-allegro', t: 0, note: 'The refrain of Spring: the shape that returns, shortened, after each episode.' },
    ],
    see: ['concerto', 'episode', 'rondo', 'cadenza'],
  },
  {
    slug: 'passacaglia', term: 'Passacaglia', aka: [], kind: 'form',
    short: 'A passacaglia builds continuous variations over a recurring bass line or sequence of chords.',
    html: `<p>A short pattern returns again and again while the music around it changes. It may stay in the bass or move into another voice. In the finale of Brahms’s Fourth Symphony, an eight-bar theme supports thirty variations and a coda. A solo flute and a trombone chorale appear along the way. The closely related name <i>chaconne</i> is also used for this movement.</p>`,
    hear: [
      { listen: 'brahms-4-finale', t: 0, note: 'The eight-bar theme in wind and brass: the pattern that underpins thirty variations.' },
      { listen: 'brahms-4-finale', t: 205, note: 'A slower variation: 3/4 becomes 3/2, doubling the length of each bar, with the flute unfolding the pattern.' },
    ],
    see: ['chaconne', 'theme-and-variations', 'ostinato', 'lament-bass', 'modelling'],
  },
  {
    slug: 'chaconne', term: 'Chaconne', aka: [], kind: 'form',
    short: 'A chaconne is a set of variations built on a recurring bass or chord pattern, usually in triple time.',
    html: `<p>A chaconne keeps returning to the same short foundation while the upper parts find new things to say. Bach’s D-minor Chaconne fills the last movement of his Second Partita for solo violin. His Cantata No. 150 ends with another chaconne; Brahms adapted its bass for the finale of his Fourth Symphony, stretching the pattern to eight bars and adding a chromatic note.</p>`,
    hear: [
      { listen: 'brahms-4-finale', t: 105, note: 'In this stretch the recurring pattern borrowed from Bach’s cantata continues beneath the variations.' },
    ],
    see: ['passacaglia', 'modelling', 'theme-and-variations', 'lament-bass'],
  },
  {
    slug: 'scherzo', term: 'Scherzo', aka: [], kind: 'form',
    short: 'A scherzo is a lively piece or movement, often in triple time with a contrasting middle section called a trio.',
    html: `<p><i>Scherzo</i> means ‘joke’, though the music can be fierce. In symphonies and quartets it often takes the place of the older minuet, retaining the plan of an outer section, a trio and a return. Bruckner’s Seventh Symphony has an A-minor scherzo marked <i>Sehr schnell</i>, ‘very fast’: a trumpet calls above a repeated string figure. The F-major trio slows the pace.</p>`,
    hear: [
      { listen: 'bruckner-7-scherzo', t: 0, note: 'A scherzo in A minor, Sehr schnell: a repeated figure beneath the themes binds the sections.' },
      { listen: 'ravel-quartet-scherzo', t: 0, note: 'Plucked first theme, bowed second theme: a change of technique alters the character without another player.' },
      { listen: 'prokofiev-piano-sonata-2', t: 350, note: 'The Scherzo begins: a short movement of brief accented figures over a recurring motion.' },
    ],
    see: ['minuet-and-trio', 'pizzicato', 'ternary-form'],
  },
  {
    slug: 'minuet-and-trio', term: 'Minuet and trio', aka: [], kind: 'form',
    short: 'A minuet and trio pairs two contrasting dances in triple time, then repeats the minuet.',
    html: `<p>A minuet is a dance in three beats. In the paired form, it is followed by a contrasting trio, then returns, often under the instruction <i>da capo</i>, ‘from the beginning’. The two dances commonly have their own repeated halves. The scherzo inherited this plan: in Bruckner’s Seventh, the fast A-minor music surrounds an F-major trio marked <i>Etwas langsamer</i>, ‘somewhat slower’.</p>`,
    hear: [
      { listen: 'bruckner-7-scherzo', t: 198, note: 'The trio begins in F major: the rushing figure stops, a sustained melody enters and the marking is Etwas langsamer.' },
      { listen: 'bruckner-7-scherzo', t: 328, note: 'After a pause the scherzo returns, with A minor and the fast tempo restored together.' },
    ],
    see: ['scherzo', 'ternary-form', 'direct-modulation', 'general-pause'],
  },
  {
    slug: 'toccata', term: 'Toccata', aka: [], kind: 'form',
    short: 'A toccata is an instrumental showpiece, usually for keyboard, built around the player’s touch and dexterity.',
    html: `<p>The name comes from the Italian <i>toccare</i>, ‘to touch’. A toccata may alternate free flourishes with tightly worked counterpoint, or keep the fingers moving almost without a break. Prokofiev’s Toccata, Op. 11, takes the second course: repeated Ds pass between the hands, then acquire chromatic neighbours and hard-edged chords. The pianist gets little chance to catch breath.</p>`,
    hear: [
      { listen: 'prokofiev-toccata', t: 0, note: 'Repeated Ds pass between the hands; neighbouring notes gradually join them.' },
      { listen: 'prokofiev-toccata', t: 134, note: 'The central surge: chromatic lines driven in opposite directions, before the music contracts onto repeated D octaves.' },
    ],
    see: ['prelude', 'fantasia', 'ostinato', 'homage'],
  },
  {
    slug: 'fantasia', term: 'Fantasia', aka: [], kind: 'form',
    short: 'A fantasia is a freely shaped piece that often sounds improvised, with sudden changes of pace and direction.',
    html: `<p>A fantasia gives the composer room to make an unexpected turn. A keyboard run may stop on a held chord, followed by a phrase as short and broken as speech. C. P. E. Bach’s F♯-minor Fantasia, Wq 67, moves between these kinds of writing. Schumann’s Piano Concerto began as a one-movement fantasy; its opening sets an orchestral chord against a falling piano flourish.</p>`,
    hear: [
      { listen: 'cpe-bach-fantasia-fsharp', t: 0, note: 'The free opening: the clavichord’s tangents strike and stay in contact with the strings while keys are held.' },
      { listen: 'cpe-bach-fantasia-fsharp', t: 180, note: 'The running notes stop; short phrases speak across the silences.' },
      { listen: 'schumann-piano-concerto-1', t: 0, note: 'The first movement of the concerto that began as a fantasy: one orchestral attack, then a descending piano flourish.' },
    ],
    see: ['clavichord', 'recitative', 'toccata', 'concerto'],
  },
  {
    slug: 'prelude', term: 'Prelude', aka: ['preludes'], kind: 'form',
    short: 'A prelude is an introductory piece, or a self-contained piece that keeps the freedom of an introduction.',
    html: `<p>A prelude can open an opera, prepare a fugue or stand alone. Bach placed a prelude before each fugue in <i>The Well-Tempered Clavier</i>; Chopin and Debussy made independent piano pieces of the name. Rachmaninoff’s C♯-minor Prelude opens with three low notes, A–G♯–C♯, answered by softer chords. Verdi’s <i>La traviata</i> begins its drama with a prelude for thin, high strings.</p>`,
    hear: [
      { listen: 'rachmaninoff-prelude-c-sharp-minor', t: 0, note: 'The opening: a low three-note figure set against quieter answering chords.' },
      { listen: 'debussy-cathedrale-engloutie', t: 0, note: 'Debussy’s prelude begins with bare fifths before full chords; its title appears only after the music.' },
      { listen: 'verdi-traviata-prelude', t: 0, note: 'An operatic prelude: exposed high strings, with Violetta’s melody to follow.' },
    ],
    see: ['toccata', 'fugue', 'nocturne', 'pedal-point'],
  },
  {
    slug: 'nocturne', term: 'Nocturne', aka: [], kind: 'form',
    short: 'A nocturne is a night piece, most often a lyrical piano work with a singing melody over flowing chords.',
    html: `<p>John Field established the piano nocturne’s familiar pairing: a melody that sings above a left hand of broken chords. Chopin made that singing more elaborate. In his D♭-major Nocturne, Op. 27 No. 2, a second voice joins the right-hand melody, making a duet above the flowing accompaniment. Later returns decorate the tune with delicate runs.</p>`,
    hear: [
      { listen: 'chopin-nocturne-op27-2', t: 0, note: 'The solo singing line above broken chords in the left hand.' },
      { listen: 'chopin-nocturne-op27-2', t: 42, note: 'A lower voice joins the melody: one voice becomes a pair.' },
    ],
    see: ['ternary-form', 'rubato', 'ornament', 'enharmonic-reinterpretation'],
  },
  {
    slug: 'lied', term: 'Lied', aka: ['Lieder', 'art song'], kind: 'form',
    short: 'A Lied is a German-language song, especially an art song for solo voice with piano or orchestra.',
    html: `<p>The plural is <i>Lieder</i>. In the art song, the accompaniment can carry as much of a poem as the singer: the piano supplies a recurring figure, an interrupted phrase or the last word after the voice has stopped. Mahler’s <i>Urlicht</i> uses orchestra. Its alto solo is answered by a brass chorale; Mahler placed the song as the fourth movement of his Second Symphony.</p>`,
    hear: [
      { listen: 'mahler-2-urlicht', t: 0, note: 'A solitary vocal phrase beside a brass chorale: one line, then several parts moving in hymn-like chords.' },
      { listen: 'mahler-2-urlicht', t: 64, note: 'The hymn yields to a flexible vocal sentence: the first stanza begins in the alto.' },
    ],
    see: ['aria', 'recitative', 'transcription', 'programme-music'],
  },
  {
    slug: 'aria', term: 'Aria', aka: ['arias'], kind: 'form',
    short: 'An aria is a substantial solo song in an opera, oratorio or cantata.',
    html: `<p>An aria gives a singer room to dwell on what a character feels or wants. A Baroque da capo aria returns to its opening section after a contrasting middle, with scope for new ornaments. Puccini’s <i>Sì, mi chiamano Mimì</i> grows more freely from conversation: in Act I of <i>La bohème</i>, Mimì answers Rodolfo’s introduction with her own, moving from short phrases into sustained singing.</p>`,
    hear: [
      { listen: 'puccini-mi-chiamano-mimi', t: 0, note: 'Mimì begins her answer: short speech-like phrases beside sustained singing, in one conversation.' },
      { listen: 'puccini-mi-chiamano-mimi', t: 140, note: 'A held pause, then the long lyrical span: a new metre and a melody in a broader register.' },
    ],
    see: ['recitative', 'lied', 'metre-change', 'fermata'],
  },
  {
    slug: 'recitative', term: 'Recitative', aka: ['recitatives'], kind: 'form',
    short: 'Recitative is singing shaped by the rhythm of speech, often used for dialogue or narrative.',
    html: `<p>The singer moves through words at something like speaking pace, lingering or hurrying as the sentence demands. In <i>secco</i> recitative, continuo instruments supply the chords; in accompanied recitative, the orchestra takes part. Handel’s <i>Comfort ye</i> in <i>Messiah</i> is accompanied recitative. Instrumental music can borrow the manner too: C. P. E. Bach’s fantasias often interrupt their runs with short phrases and telling pauses.</p>`,
    hear: [
      { listen: 'cpe-bach-fantasia-fsharp', t: 180, note: 'Short phrases interrupt the run, with silence between them.' },
    ],
    see: ['aria', 'basso-continuo', 'fantasia'],
  },
  {
    slug: 'symphonic-poem', term: 'Symphonic poem', aka: ['tone poem'], kind: 'form',
    short: 'A symphonic poem is a usually single-movement orchestral work inspired by a story, poem, picture or idea.',
    html: `<p>A symphonic poem gives an orchestra a subject beyond the notes. Themes can represent characters and change with their fortunes. In Richard Strauss’s <i>Till Eulenspiegels lustige Streiche</i>, a winding horn tune and a cheeky clarinet figure introduce the prankster. His adventures lead to a trial and execution. The Hall presents the piece in Herb Weber’s concert-band transcription.</p>`,
    hear: [
      { listen: 'richard-strauss-till-eulenspiegel', t: 0, note: 'The opening: a quiet, sustained prologue before the shorter, more pointed figures of the story.' },
      { listen: 'richard-strauss-till-eulenspiegel', t: 35, note: 'Two musical signatures for one character: a winding tune and a short clipped motif.' },
    ],
    see: ['programme-music', 'rondo', 'leitmotif', 'transcription'],
  },
  {
    slug: 'programme-music', term: 'Programme music', aka: ['program music'], kind: 'form',
    short: 'Programme music is instrumental music linked to a story, scene or other subject beyond the music itself.',
    html: `<p>The composer may provide a title, a poem or a detailed account of what happens. Berlioz supplied a programme for <i>Symphonie fantastique</i>: an opium-dazed musician dreams that he has killed his beloved and is led to execution. Near the end of the March to the Scaffold, a clarinet recalls her melody. The orchestra cuts it short with the fall of the blade.</p>`,
    hear: [
      { listen: 'berlioz-fantastique-march', t: 0, note: 'The fourth movement of five: the dream of an execution, with a heavy march tread and more ceremonial passages.' },
      { listen: 'vivaldi-spring-allegro', t: 100, note: 'A sonnet printed beside the parts: letters link its lines to passages in the score.' },
      { listen: 'debussy-la-mer-dawn', t: 138, note: 'Debussy’s own choice of Hokusai’s The Great Wave off Kanagawa for the published score.' },
    ],
    see: ['symphonic-poem', 'cyclic-form', 'quotation', 'leitmotif'],
  },
  {
    slug: 'concerto', term: 'Concerto', aka: ['concertos'], kind: 'form',
    short: 'A concerto brings one or more soloists into musical partnership and competition with an orchestra.',
    html: `<p>The soloist may lead, answer the orchestra or step out alone in a cadenza. Bach’s Fifth Brandenburg Concerto has three solo instruments: flute, violin and harpsichord. The harpsichord eventually takes the movement over with a long unaccompanied passage. In Schumann’s Piano Concerto, the piano announces itself immediately, cascading down after the orchestra’s opening chord.</p>`,
    hear: [
      { listen: 'bach-brandenburg-5-allegro', t: 22, note: 'Flute, violin and harpsichord form the solo group, in conversation above the ensemble.' },
      { listen: 'schumann-piano-concerto-1', t: 0, note: 'One orchestral attack and a falling piano flourish: the soloist is involved from the first bar.' },
      { listen: 'mozart-clarinet-adagio', t: 34, note: 'The clarinet’s phrase rests on the dominant and the orchestra answers with the same shape in D major.' },
    ],
    see: ['ritornello', 'cadenza', 'basset-clarinet', 'sonata-form'],
  },
];

const harmony = [
  {
    slug: 'tonic', term: 'Tonic', aka: ['home key'], kind: 'harmony',
    short: 'The tonic is a key’s home note, and the tonic chord is the chord built on that note.',
    html: `<p>C is the tonic of both C major and C minor. The major chord is C–E–G; the minor chord lowers E to E♭. Other chords can draw the music away, while a return to the tonic brings it home. At the end of Chopin’s D♭-major Nocturne, Op. 27 No. 2, the left hand repeatedly renews D♭ beneath the right hand’s final duet.</p>`,
    hear: [
      { listen: 'chopin-nocturne-op27-2', t: 280, note: 'The last expansion relaxes into a D♭ bass that the coda keeps renewing: a tonic pedal under the melody’s final duet.' },
    ],
    see: ['dominant', 'cadence', 'tonic-pedal', 'modulation'],
  },
  {
    slug: 'dominant', term: 'Dominant', aka: [], kind: 'harmony',
    short: 'The dominant is the fifth note of a key, or the chord built on it, which commonly leads back to the tonic.',
    html: `<p>In C major, G is the dominant and G–B–D is its chord. B lies a semitone below C and tends to rise towards it; adding F makes a dominant seventh, G–B–D–F. Composers can hold this chord to postpone a return. Before the opening tune comes back in Schubert’s G♭-major Impromptu, a D♭ dominant seventh waits under a fermata.</p>`,
    hear: [
      { listen: 'schubert-impromptu-gflat', bar: { n: '55', occ: 1 }, note: 'The held dominant releases: C♭ falls to B♭ and the G♭-major melody returns.' },
      { listen: 'mozart-40-molto-allegro', t: 50, note: 'In this stretch the transition gathers on the dominant of B♭ major and breaks off before the second theme.' },
    ],
    see: ['tonic', 'half-cadence', 'dominant-pedal', 'standing-on-the-dominant', 'perfect-cadence'],
  },
  {
    slug: 'modulation', term: 'Modulation', aka: ['modulate'], kind: 'harmony',
    short: 'Modulation is a change from one established key to another within a piece.',
    html: `<p>A modulation makes another note feel like home. The new key may emerge through shared chords, or arrive with a sudden turn. In the first movement of Beethoven’s Fifth, the exposition leaves C minor for its relative major, E♭. A horn call introduces the new key at bar 59, and a quiet violin melody follows.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '59', occ: 1 }, note: 'The horn call begins the second group, in E♭ major; quiet violins take over its melody at bar 63.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '24', occ: 1 }, note: 'An episode’s sequence changes the destination, moving towards E minor.' },
    ],
    see: ['pivot-chord', 'common-tone-modulation', 'direct-modulation', 'enharmonic-reinterpretation', 'sequence'],
  },
  {
    slug: 'cadence', term: 'Cadence', aka: ['cadences'], kind: 'harmony',
    short: 'A cadence is a melodic and harmonic arrival that marks the end of a phrase or section.',
    html: `<p>A cadence gives a phrase somewhere to land. Dominant to tonic can make a firm close; a stop on the dominant leaves the phrase waiting. The final cadence of Bach’s B minor fugue reaches B major. Its D♯ replaces the D♮ of the minor key, a brightening called a Picardy third, and the last chord rests under a fermata.</p>`,
    hear: [
      { listen: 'bach-brandenburg-5-allegro', t: 22, note: 'The opening ritornello closes in D major, and its pulse carries on into the solo episode.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '76', occ: 1 }, note: 'The final chord settles on B major: D♯ replaces D♮ in the held fermata chord.' },
    ],
    see: ['perfect-cadence', 'half-cadence', 'deceptive-cadence', 'plagal-cadence', 'elision'],
  },
  {
    slug: 'pedal-point', term: 'Pedal point', aka: ['pedal note', 'organ point'], kind: 'harmony',
    short: 'A pedal point is a note held or repeated while the chords around it change.',
    html: `<p>A pedal is usually in the bass, though it can appear above the other parts. The changing chords sometimes agree with the held note and sometimes clash against it. At bar 74 of Bach’s B minor fugue, the bass holds F♯ while the alto recalls the subject. In Debussy’s <i>La cathédrale engloutie</i>, a low C supports the great moving chords of the cathedral’s bells.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '74', occ: 1 }, note: 'The alto gives one last subject while the bass holds F♯ across the barline, postponing the arrival on B.' },
      { listen: 'chopin-nocturne-op27-2', t: 280, note: 'The coda: a D♭ bass renewed repeatedly beneath the right hand’s duet.' },
      { listen: 'debussy-cathedrale-engloutie', t: 106, note: 'A low C foundation replaces the moving triplets as parallel chords carry the melody.' },
    ],
    see: ['dominant-pedal', 'tonic-pedal', 'standing-on-the-dominant', 'ostinato'],
  },
  {
    slug: 'neapolitan-sixth', term: 'Neapolitan sixth', aka: ['Neapolitan chord'], kind: 'harmony',
    short: 'A Neapolitan sixth is a major chord on the flattened second note of a key, with its third in the bass.',
    html: `<p>In C minor, the Neapolitan chord is D♭–F–A♭. With F in the bass, it is a Neapolitan sixth; the name describes the interval from F up to D♭. It commonly leads towards the dominant, G. Chopin opens his G-minor First Ballade by outlining A♭ major in bare octaves: the same flattened-second harmony, announced before the home key has settled.</p>`,
    hear: [
      { listen: 'chopin-ballade-1', t: 0, note: 'The Largo outlines A♭ major — the flattened supertonic of G minor — in bare octaves, before the Moderato.' },
    ],
    see: ['chromaticism', 'cadence', 'augmented-sixth'],
  },
  {
    slug: 'augmented-sixth', term: 'Augmented sixth chord', aka: ['augmented sixth', 'German sixth', 'Italian sixth', 'French sixth'], kind: 'harmony',
    short: 'An augmented sixth chord contains two notes that usually move outwards by a semitone to an octave on the dominant.',
    html: `<p>In C major or minor, the crucial notes are A♭ below and F♯ above. A♭ falls to G while F♯ rises to G, opening the augmented sixth into an octave. The Italian sixth adds C between them. The French version also adds D; the German version adds E♭. Those inner notes change the sound while the two outer notes keep their pull towards G.</p>`,
    hear: [],
    see: ['tristan-chord', 'neapolitan-sixth', 'enharmonic-reinterpretation', 'diminished-seventh'],
  },
  {
    slug: 'diminished-seventh', term: 'Diminished seventh', aka: ['diminished seventh chord', 'diminished chord'], kind: 'harmony',
    short: 'A diminished seventh chord consists of four notes a minor third apart, making a tense chord with several possible resolutions.',
    html: `<p>B–D–F–A♭ divides the octave into four equal minor thirds. In C minor, B rises to C and the chord can resolve to the tonic. Respelled notes can point towards other keys. Beethoven’s Fifth uses the chord to keep the return in suspense: in bars 233–240, winds and strings exchange B–D–F–A♭ in quiet blocks.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '56', occ: 1 }, note: 'The exposition cuts off on a diminished seventh over C; the next bar is silent.' },
      { listen: 'beethoven-5-first', bar: { n: '233', occ: 1 }, note: 'Winds and strings trade B–D–F–A♭, the diminished seventh on C minor’s leading note, in quiet blocks.' },
      { listen: 'brahms-3-poco-allegretto', t: 330, note: 'In this stretch strings join the recalled chords and a diminished seventh intensifies the last swell.' },
    ],
    see: ['augmented-sixth', 'retransition', 'general-pause', 'enharmonic-reinterpretation'],
  },
  {
    slug: 'tristan-chord', term: 'Tristan chord', aka: [], kind: 'harmony',
    short: 'The Tristan chord is the unsettled F–B–D♯–G♯ chord heard near the opening of Wagner’s Tristan und Isolde.',
    html: `<p>In the Prelude to <i>Tristan und Isolde</i>, a short cello phrase leads into F–B–D♯–G♯. The notes move by small steps into another dissonant chord, then the phrase falls silent. Wagner repeats the pattern higher, keeping the music reaching forward. The chord’s spelling and the movement of its individual notes allow several harmonic readings; its yearning sound has become the opera’s calling card.</p>`,
    hear: [],
    see: ['chromaticism', 'augmented-sixth', 'appoggiatura', 'quotation', 'leitmotif'],
  },
  {
    slug: 'chromaticism', term: 'Chromaticism', aka: ['chromatic'], kind: 'harmony',
    short: 'Chromaticism uses notes outside the prevailing scale, often bringing semitone movement into melodies and chords.',
    html: `<p>In C major, F♯ is a chromatic note; a melody rising F–F♯–G passes through it between two notes of the scale. Chromatic notes can briefly sharpen a phrase or gradually loosen its hold on a key. Bach’s B minor fugue fits all twelve notes into its subject, joining little semitone pairs with wide leaps. The fugue still has B minor as its home.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '1', occ: 1 }, note: 'The alto’s subject: leaps connect pairs of notes a semitone apart, using all twelve chromatic pitch classes.' },
      { listen: 'schoenberg-quartet-2-entrueckung', t: 0, note: 'Across the instrumental introduction, chromatic lines without an immediate home-key cadence.' },
    ],
    see: ['atonality', 'chromatic-slide', 'tristan-chord', 'twelve-note-row'],
  },
  {
    slug: 'atonality', term: 'Atonality', aka: ['atonal'], kind: 'harmony',
    short: 'Atonality is music without an established home key or the usual pull of dominant chords towards a tonic.',
    html: `<p>In atonal music, a phrase can be held together by a recurring interval or rhythm while chords move freely. Schoenberg’s Second String Quartet stands at the threshold: the instrumental opening of its finale, <i>Entrückung</i>, suspends the sense of a home key before the soprano enters with Stefan George’s poem. Tonal chords still surface elsewhere in the movement.</p>`,
    hear: [
      { listen: 'schoenberg-quartet-2-entrueckung', t: 0, note: 'The introduction suspends the usual harmonic bearings: chromatic lines with no immediate home-key cadence.' },
      { listen: 'schoenberg-quartet-2-entrueckung', t: 590, note: 'The motion settles into an F♯-major triad: A♯ and C♯ complete it over F♯, major where the quartet began in F♯ minor.' },
    ],
    see: ['chromaticism', 'twelve-note-row', 'tristan-chord'],
  },
  {
    slug: 'twelve-note-row', term: 'Twelve-note row', aka: ['twelve-tone row', 'tone row', 'twelve-tone', 'serialism'], kind: 'harmony',
    short: 'A twelve-note row places the twelve notes of the chromatic scale in an order that supplies a piece’s melodies and chords.',
    html: `<p>A row uses each of the twelve notes once, treating notes in different octaves as the same pitch class. A composer can transpose it, reverse its order or turn its intervals upside down. Notes from the row can sound together as chords. Schoenberg’s Piano Suite, Op. 25, builds a prelude and old dance forms from one row; its minuet’s trio works the row into a canon.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '1', occ: 1 }, note: 'Bach’s subject touches all twelve notes while retaining its home in B minor.' },
    ],
    see: ['atonality', 'chromaticism', 'counterpoint'],
  },
  {
    slug: 'modes', term: 'Modes', aka: ['modal', 'Dorian', 'Phrygian'], kind: 'harmony',
    short: 'Modes are ways of arranging a scale around a home note, each with its own pattern of tones and semitones.',
    html: `<p>D Dorian uses the white piano keys from D to D: D–E–F–G–A–B–C. Its B♮ distinguishes it from D natural minor, which has B♭. E Phrygian uses the white keys from E to E, with a semitone immediately above its home note. F Lydian begins on F and has B♮, a raised fourth. Major and natural minor correspond to the Ionian and Aeolian modes.</p>`,
    hear: [
      { listen: 'satie-gymnopedie-1', bar: { n: '19', occ: 1 }, note: 'The following phrase brings C♮, F♮ and B♮ above D in the bass, suggesting D Dorian.' },
      { listen: 'dvorak-9-largo', t: 40, note: 'The cor anglais melody uses a limited collection of pitches and long breaths.' },
    ],
    see: ['whole-tone-scale', 'octatonic-scale', 'modal-mixture'],
  },
  {
    slug: 'whole-tone-scale', term: 'Whole-tone scale', aka: ['whole-tone'], kind: 'harmony',
    short: 'A whole-tone scale has six notes, with a whole tone between every neighbouring pair.',
    html: `<p>C–D–E–F♯–G♯–A♯ is one whole-tone scale. Starting a semitone higher gives the other; every further transposition repeats one of those two collections. There are no semitones, so no leading note presses upwards into a tonic. A chord made from alternate notes of the scale, such as C–E–G♯, is an augmented triad.</p>`,
    hear: [],
    see: ['modes', 'octatonic-scale', 'chromaticism'],
  },
  {
    slug: 'octatonic-scale', term: 'Octatonic scale', aka: ['octatonic'], kind: 'harmony',
    short: 'An octatonic scale has eight notes, with tones and semitones alternating.',
    html: `<p>One octatonic scale runs C–D–E♭–F–G♭–A♭–A–B. Moving the whole scale up a minor third produces the same collection of notes, so there are only three distinct collections. The scale contains interlocking diminished seventh chords and several major and minor triads. Messiaen called it his second mode of limited transposition.</p>`,
    hear: [
      { listen: 'stravinsky-firebird-infernal-dance', t: 0, note: 'Kashchei’s forced dance in <i>The Firebird</i>, where octatonic writing helps distinguish the supernatural characters.' },
    ],
    see: ['whole-tone-scale', 'modes', 'bitonality'],
  },
  {
    slug: 'bitonality', term: 'Bitonality', aka: ['polytonality', 'bitonal'], kind: 'harmony',
    short: 'Bitonality places two keys side by side in the same passage.',
    html: `<p>One part of the music asserts one key while another asserts a different one. Stravinsky’s <i>Petrushka</i> provides the famous chordal example: C–E–G, a C-major triad, sounds against F♯–A♯–C♯, an F♯-major triad. The two chords are a tritone apart. Their collision belongs to the unhappy puppet’s music in the ballet’s second scene.</p>`,
    hear: [],
    see: ['octatonic-scale', 'atonality', 'ostinato'],
  },
  {
    slug: 'suspension', term: 'Suspension', aka: ['suspensions'], kind: 'harmony',
    short: 'A suspension holds a note from one chord into the next, where it clashes before resolving down by step.',
    html: `<p>A note arrives late at the new chord because it is still hanging on from the old one. For a simple example, a melody’s F can remain over a new C-major chord, then fall to E. In Bach’s B minor fugue, the soprano holds B over the dominant F♯ near the close, then steps down to A♯ before the final chord.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '19', occ: 1 }, note: 'The soprano’s E tied over the bass’s D resolves down to D: the next step waits.' },
      { listen: 'mahler-5-adagietto', t: 555, note: 'Dissonances delay consonant arrivals as the returning phrase grows into the climax.' },
    ],
    see: ['appoggiatura', 'cadence', 'sequence'],
  },
  {
    slug: 'appoggiatura', term: 'Appoggiatura', aka: ['appoggiaturas'], kind: 'harmony',
    short: 'An appoggiatura is a leaning note that delays a chord note, usually on a strong beat, then resolves by step.',
    html: `<p>The Italian <i>appoggiare</i> means ‘to lean’. The melody lands on a note outside the chord and gives it emphasis before moving to a chord note. A held F over C–E–G, resolving to E, is a simple example. Unlike a suspension, the leaning note arrives afresh. In the Adagietto of Mahler’s Fifth, such delayed arrivals help the long string phrases ache.</p>`,
    hear: [
      { listen: 'mahler-5-adagietto', t: 80, note: 'The melody leans on notes outside the chord, then eases into chord notes by step.' },
    ],
    see: ['suspension', 'tristan-chord', 'ornament'],
  },
  {
    slug: 'modal-mixture', term: 'Modal mixture', aka: ['parallel minor', 'Picardy third'], kind: 'harmony',
    short: 'Modal mixture borrows notes or chords from the major or minor scale that shares a piece’s tonic.',
    html: `<p>C major can borrow F–A♭–C from C minor: the F-minor chord changes the sound without moving the home note. Switching a whole theme from major to minor is a larger version of the same contrast. Haydn does this in the ‘Surprise’ Symphony’s Andante, where the second variation turns the C-major theme to C minor and E♭ replaces E♮.</p>`,
    hear: [
      { listen: 'haydn-94-andante', t: 164, note: 'The theme restarts in C minor: the tonic and fifth, C and G, remain while E♭ replaces E.' },
      { listen: 'chopin-nocturne-op27-2', t: 154, note: 'The home note D♭ is respelled C♯ as the music turns to C♯ minor.' },
      { listen: 'dvorak-9-largo', t: 270, note: 'The same sounding tonic, respelled C♯, turns to minor: E♮ replaces the major third F.' },
    ],
    see: ['modulation', 'enharmonic-reinterpretation', 'cadence', 'theme-and-variations'],
  },
  {
    slug: 'lament-bass', term: 'Lament bass', aka: ['lamento bass', 'descending tetrachord'], kind: 'harmony',
    short: 'A lament bass descends from the tonic to the dominant, often repeating beneath a song of grief.',
    html: `<p>In A minor, the simplest version is A–G–F–E. Filling in the semitones makes the descent more insistent: A–G♯–G–F♯–F–E. Repeated as a ground bass, it keeps returning beneath changing vocal phrases. Purcell’s <i>When I am laid in earth</i> from <i>Dido and Aeneas</i> sets Dido’s farewell over a chromatic descending bass.</p>`,
    hear: [],
    see: ['passacaglia', 'chaconne', 'ostinato'],
  },
];

const texture = [
  {
    slug: 'counterpoint', term: 'Counterpoint', aka: ['contrapuntal'], kind: 'texture',
    short: 'Counterpoint combines melodic lines that keep their own shape and rhythm while sounding together.',
    html: `<p>Each part has a tune worth hearing on its own, and each affects the others. One may hold a note while another moves, or answer a rising phrase with a descent. At bar 9 of Bach’s B minor fugue, the bass begins the subject, the tenor continues the countersubject and the alto has a quicker line above them. The pianist has three voices to sustain with two hands.</p>`,
    hear: [
      { listen: 'beethoven-109-variations', t: 388, note: 'The lower part has its own melodic shape beneath the upper line.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '9', occ: 1 }, note: 'Subject in the bass, countersubject in the tenor and a quicker line in the alto: three distinct rhythms.' },
    ],
    see: ['fugue', 'imitation', 'canon', 'homophony', 'countersubject'],
  },
  {
    slug: 'imitation', term: 'Imitation', aka: ['imitative'], kind: 'texture',
    short: 'Imitation occurs when one voice repeats a melody or fragment just heard in another voice.',
    html: `<p>A phrase begins in one part and is taken up by another, often at a different pitch. The first voice can carry on, so the entries overlap. Imitation helps a fugue grow from one subject, and can enliven a few bars of otherwise chordal music. In Handel’s <i>Hallelujah</i> chorus, entries chase one another between passages where the singers move together.</p>`,
    hear: [
      { listen: 'handel-messiah-hallelujah', t: 36, note: 'Overlapping entries follow the chorus’s opening acclamations.' },
      { listen: 'mozart-40-molto-allegro', t: 165, note: 'A short fragment passes from one orchestral part to another.' },
    ],
    see: ['canon', 'fugue', 'stretto', 'counterpoint'],
  },
  {
    slug: 'canon', term: 'Canon', aka: [], kind: 'texture',
    short: 'A canon is a melody followed by another voice that keeps imitating it at a fixed distance in time.',
    html: `<p>One voice leads and another follows. In a round such as <i>Frère Jacques</i>, each group sings the same notes, entering later and continuing while the next group begins. More elaborate canons start the following voice at another pitch, turn the melody upside down or stretch its note values. Bach’s <i>Goldberg Variations</i> includes nine canons, with the distance between their entering voices increasing from unison to ninth.</p>`,
    hear: [],
    see: ['imitation', 'stretto', 'fugue', 'counterpoint'],
  },
  {
    slug: 'homophony', term: 'Homophony', aka: ['homophonic'], kind: 'texture',
    short: 'Homophony gives one melody the lead while the other parts supply its harmony.',
    html: `<p>A tune over piano chords is homophonic; so is a hymn whose voices move together beneath a leading melody. The accompaniment can be busy or plain. Handel’s <i>Hallelujah</i> chorus alternates chordal proclamations with overlapping entries. In the finale of Brahms’s Fourth, trombones, bassoons and horns make a measured chorale among the more restless variations.</p>`,
    hear: [
      { listen: 'handel-messiah-hallelujah', t: 0, note: 'The chorus’s chordal proclamations put the voices on the same rhythm.' },
      { listen: 'brahms-4-finale', t: 284, note: 'Trombones with bassoons and horns take over in measured chorale phrases, a low, blended chordal body.' },
    ],
    see: ['counterpoint', 'imitation', 'orchestration'],
  },
  {
    slug: 'ostinato', term: 'Ostinato', aka: ['ground bass'], kind: 'texture',
    short: 'An ostinato is a short musical pattern repeated persistently while the music around it changes.',
    html: `<p>The repeated pattern can be a rhythm, a melody or a bass line. Ravel’s <i>Boléro</i> opens with a two-bar snare-drum rhythm that continues as successive instruments take the tune. The pattern stays obstinate while the orchestra grows. A recurring line in the bass is called a ground bass; passacaglias and chaconnes often build their variations on one.</p>`,
    hear: [
      { listen: 'ravel-bolero', t: 0, note: 'Two tunes over a two-bar drum rhythm: the orchestra grows while the pattern stays fixed.' },
      { listen: 'bartok-quartet-2-allegro', t: 0, note: 'Repeated notes beneath the moving lines: a fixed pitch as anchor, with changing accents.' },
    ],
    see: ['passacaglia', 'lament-bass', 'pedal-point', 'tonic-pedal'],
  },
  {
    slug: 'motif', term: 'Motif', aka: ['motive', 'motifs'], kind: 'texture',
    short: 'A motif is a short, recognisable musical idea that can be repeated, altered and combined with other ideas.',
    html: `<p>Three short notes and a long one are enough. Beethoven’s Fifth opens with G–G–G–E♭, then F–F–F–D. The rhythm returns in different voices and at different pitches throughout the movement. At bar 59, the horns turn it into a rising call. The notes and intervals have changed; the repeated-note rhythm still identifies the motif.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 1 }, note: 'The motto: rest, G–G–G, E♭ held under a fermata, then F–F–F and D.' },
      { listen: 'beethoven-5-first', bar: { n: '59', occ: 1 }, note: 'The horns turn the motto into a call; the repeated-note rhythm survives but the intervals widen.' },
      { listen: 'ives-concord-alcotts', t: 74, note: 'Across the stronger chordal passages, the short-short-short-long rhythm of Beethoven’s Fifth inside Ives’s own melody.' },
    ],
    see: ['motivic-link', 'leitmotif', 'cyclic-form', 'quotation'],
  },
  {
    slug: 'leitmotif', term: 'Leitmotif', aka: ['Leitmotiv', 'leitmotifs'], kind: 'texture',
    short: 'A leitmotif is a recurring musical idea associated with a character, object or thought in a drama.',
    html: `<p>The orchestra can recall someone who is absent, or suggest what a character has left unsaid. A leitmotif can change as the story develops: slower, harsher or caught in another harmony. Wagner’s <i>Ring</i> makes extensive use of these associations. In Strauss’s <i>Till Eulenspiegel</i>, the prankster has two signatures, a winding horn tune and a clipped clarinet figure, which return through his adventures.</p>`,
    hear: [
      { listen: 'richard-strauss-till-eulenspiegel', t: 35, note: 'Two musical signatures for one character, returning amid changing episodes.' },
    ],
    see: ['motif', 'cyclic-form', 'tristan-chord', 'symphonic-poem'],
  },
  {
    slug: 'cyclic-form', term: 'Cyclic form', aka: ['cyclic', 'idée fixe'], kind: 'texture',
    short: 'Cyclic form links the movements of a work by bringing back themes heard in earlier movements.',
    html: `<p>A familiar theme returns in a new setting, carrying a memory of what came before. In Berlioz’s <i>Symphonie fantastique</i>, the melody representing the beloved appears in all five movements. It dances at the ball and becomes grotesque at the Witches’ Sabbath. In the March to the Scaffold, a solo clarinet recalls it just before the orchestra’s fatal blow.</p>`,
    hear: [
      { listen: 'berlioz-fantastique-march', t: 252, note: 'A solo voice interrupts the crowd: the last thought of love, cut off by the orchestra’s blow.' },
      { listen: 'dvorak-9-largo', t: 490, note: 'The quicker episode admits remembered themes: the Largo’s tune combined with first-movement themes.' },
    ],
    see: ['programme-music', 'motif', 'leitmotif', 'quotation'],
  },
  {
    slug: 'orchestration', term: 'Orchestration', aka: ['orchestrate', 'orchestrated'], kind: 'texture',
    short: 'Orchestration assigns music to instruments and combines their sounds.',
    html: `<p>A flute and a trumpet can play the same notes and make quite different impressions. Combining them makes a third sound. In the sixth melodic statement of Ravel’s <i>Boléro</i>, a flute plays an octave above a muted trumpet. Later, a horn carries the tune with celesta and two piccolos high above it. The tune stays familiar while its clothing grows stranger.</p>`,
    hear: [
      { listen: 'ravel-bolero', t: 232, note: 'A muted trumpet carries the tune with a flute an octave above.' },
      { listen: 'ravel-bolero', t: 360, note: 'Solo colours give way to mixtures: horn, celesta and piccolos share the melody across registers.' },
    ],
    see: ['orchestration-change', 'transcription', 'divisi', 'pizzicato'],
  },
  {
    slug: 'divisi', term: 'Divisi', aka: [], kind: 'texture',
    short: 'Divisi tells the players in an instrumental section to divide between separate parts.',
    html: `<p>A violin section marked <i>divisi</i> may split in two, with half the players on an upper line and half on a lower one. This lets one section make chords or carry several melodies. <i>Unisono</i>, often shortened to <i>unis.</i>, brings the players back to one part. Verdi opens the Prelude to <i>La traviata</i> with divided violins playing quietly in their high register.</p>`,
    hear: [
      { listen: 'mahler-5-adagietto', t: 555, note: 'The return grows into a climax: the violin line rises and the divided strings add weight.' },
      { listen: 'verdi-traviata-prelude', t: 0, note: 'Quiet, divided violins make the thin chords of the opening.' },
    ],
    see: ['orchestration', 'tremolo', 'pizzicato'],
  },
  {
    slug: 'pizzicato', term: 'Pizzicato', aka: ['pizz.'], kind: 'texture',
    short: 'Pizzicato means plucking the strings of a bowed instrument with a finger.',
    html: `<p>A plucked note begins sharply and fades as the string’s vibration dies away. The marking <i>pizz.</i> lasts until <i>arco</i> tells the players to use their bows again. Ravel opens his String Quartet’s scherzo with plucked strings, then contrasts their dry attacks with a bowed tune. Brahms uses pizzicato in the first variation of his Fourth Symphony’s finale: horns and timpani strike the first beat, strings answer on the second.</p>`,
    hear: [
      { listen: 'ravel-quartet-scherzo', t: 0, note: 'The players pluck the opening theme; its quick attacks contrast with the bowed phrases that follow.' },
      { listen: 'ravel-quartet-scherzo', t: 290, note: 'The scherzo’s plucked attacks return after the sustained middle section.' },
      { listen: 'brahms-4-finale', t: 16, note: 'The theme’s harmonies broken into separate beats: horns and timpani on the first, plucked strings on the second.' },
    ],
    see: ['col-legno', 'tremolo', 'divisi'],
  },
  {
    slug: 'tremolo', term: 'Tremolo', aka: ['tremolos'], kind: 'texture',
    short: 'Tremolo is the rapid repetition of a note or rapid alternation between notes.',
    html: `<p>String players make a bowed tremolo with quick, short strokes; pianists can alternate two notes or chords. A measured tremolo has a specified rhythm. An unmeasured one leaves the repetitions fast and free, making a trembling band of sound. In the first-movement coda of Beethoven’s Fifth, the violins’ high C alternates between held notes and tremolo while the bass changes beneath it.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '374', occ: 1 }, note: 'High C in the violins alternates between held and tremolo notes above the changing bass.' },
      { listen: 'debussy-la-mer-dawn', t: 514, note: 'The closing chorale in a band transcription: wind and brass weight in place of string tremolos.' },
    ],
    see: ['pizzicato', 'col-legno', 'orchestration'],
  },
  {
    slug: 'col-legno', term: 'Col legno', aka: [], kind: 'texture',
    short: 'Col legno tells string players to use the wooden stick of the bow against the strings.',
    html: `<p><i>Col legno battuto</i> means tapping the strings with the stick, which makes a dry, pitched rattle. <i>Col legno tratto</i> means drawing the wood across them, producing a faint, rough sound. Berlioz asks for the tapping kind in the Witches’ Sabbath finale of <i>Symphonie fantastique</i>. The strings join the grotesque dance with the clatter of their bows.</p>`,
    hear: [],
    see: ['pizzicato', 'tremolo', 'programme-music'],
  },
  {
    slug: 'ornament', term: 'Ornament', aka: ['ornaments', 'ornamentation', 'trill'], kind: 'texture',
    short: 'An ornament is a note or group of notes that decorates and shapes a melody.',
    html: `<p>A trill alternates a principal note with its upper neighbour; a turn circles the main note from above and below. Ornaments may be written out, shown by signs or supplied by the performer. They can grow far beyond a flourish. In the last variation of Beethoven’s Piano Sonata, Op. 109, long trills keep sounding while other melodic lines move through them.</p>`,
    hear: [
      { listen: 'couperin-nations-piemontaise', t: 310, note: 'Trills and other ornaments curl around the principal notes of the airs.' },
      { listen: 'beethoven-109-variations', t: 700, note: 'Long trills continue beneath and around the moving melodies.' },
    ],
    see: ['appoggiatura', 'suspension', 'basso-continuo'],
  },
];

const rhythm = [
  {
    slug: 'rubato', term: 'Rubato', aka: ['tempo rubato'], kind: 'rhythm',
    short: 'Rubato is expressive flexibility of timing, with some notes lingering and others moving ahead.',
    html: `<p>A singer or player can delay a note, then let the phrase catch up. Sometimes the melody moves freely over a steady accompaniment; sometimes all the parts breathe together. Writing to his father from Augsburg on 23 October 1777, Mozart complained that other pianists let the left hand follow every hesitation: “When they play the left hand always follows.” His own left hand kept strict time.</p>`,
    hear: [],
    see: ['tempo-change', 'score-alignment', 'nocturne'],
  },
  {
    slug: 'metre', term: 'Metre', aka: ['meter', 'time signature'], kind: 'rhythm',
    short: 'Metre groups musical beats into recurring patterns, such as the three beats in a waltz.',
    html: `<p>A time signature shows how the beats fit into a bar. In 3/4 there are three crotchet beats; in 6/8 there are usually two main beats, each divided into three quavers. Accents can rub against that pattern. Brahms’s Third Symphony has a third movement in 3/8, but held wind chords and a syncopated cello line sometimes make the bar lines hard to feel.</p>`,
    hear: [
      { listen: 'brahms-3-poco-allegretto', t: 110, note: 'A cadence loses its downbeat: held wind chords cross the bar lines and the cellos’ line is syncopated.' },
      { listen: 'brahms-4-finale', t: 205, note: '3/4 becomes 3/2: each bar is twice as long while the note values keep the same speed.' },
    ],
    see: ['metre-change', 'polyrhythm', 'tempo-change'],
  },
  {
    slug: 'polyrhythm', term: 'Polyrhythm', aka: ['two against three', 'cross-rhythm'], kind: 'rhythm',
    short: 'Polyrhythm combines different divisions of the same span of time, such as two even notes against three.',
    html: `<p>In two against three, one part divides a beat or bar in half while another divides it into thirds. They begin together and then fall out of step until the next group. Prokofiev’s Second Piano Sonata opens with a melody in pairs over triplet accompaniment. Ravel’s String Quartet scherzo plays with a related conflict: six quavers can sound as three pairs or two groups of three.</p>`,
    hear: [
      { listen: 'prokofiev-piano-sonata-2', t: 0, note: 'The melody moves in pairs above triplet arpeggios.' },
      { listen: 'debussy-la-mer-dawn', t: 164, note: 'Throughout this movement, groups of two and three share the same stretch of time.' },
      { listen: 'ravel-quartet-scherzo', t: 290, note: 'The scherzo returns with its two-against-three friction after the middle’s sustained phrases.' },
    ],
    see: ['metre', 'ostinato'],
  },
];

const notation = [
  {
    slug: 'bar', term: 'Bar', aka: ['bars', 'bar number', 'bar numbers'], kind: 'notation',
    short: 'A bar is a span of music between bar lines, normally containing the number of beats shown by the time signature.',
    html: `<p>American musicians call it a measure. Bar numbers give players a shared address in the score. Repeats mean that one address can be visited twice: the exposition of Beethoven’s Fifth runs from bars 1–124, then starts again in this recording. The Hall distinguishes the visits as occurrences, so ‘bar 1, occurrence 2’ means the second playing of the opening bar.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 1 }, note: 'Bar 1, occurrence 1: the first time the motto is heard.' },
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 2 }, note: 'Bar 1, occurrence 2: the exposition repeat begins, and the bar is played again.' },
    ],
    see: ['score-alignment', 'catalogue-number'],
  },
  {
    slug: 'catalogue-number', term: 'Catalogue number', aka: ['catalogue numbers', 'opus number', 'opus numbers', 'BWV'], kind: 'notation',
    short: 'A catalogue number identifies a particular work within a composer’s output.',
    html: `<p>An opus number often reflects publication order. Other numbers come from catalogues: BWV for Bach, K. for Mozart, D. for Schubert and Wq for C. P. E. Bach. The composer’s name matters. Mozart’s K. numbers refer to Köchel’s catalogue; Scarlatti’s refer to Kirkpatrick’s. Thus Mozart’s Symphony No. 40 is K. 550, while Scarlatti’s D-major keyboard sonata heard in the Hall is K. 119.</p>`,
    hear: [],
    see: ['bar', 'binary-form'],
  },
];

const tuning = [
  {
    slug: 'equal-temperament', term: 'Equal temperament', aka: ['equal-tempered'], kind: 'tuning',
    short: 'Twelve-note equal temperament divides the octave into twelve equal semitones, giving every key the same pattern of intervals.',
    html: `<p>A melody moved from C major to D♭ major keeps exactly the same interval sizes in this tuning. The compromise is small but audible in chords: a major third is wider than a pure third, and a fifth is slightly narrower than a pure fifth. Equal temperament is the usual starting point for modern piano tuning, allowing the keyboard to move freely among keys.</p>`,
    hear: [
      { listen: 'scarlatti-sonata-k119', t: 0, note: 'A harpsichord sonata, performed here on a piano.' },
      { listen: 'rameau-gavotte-six-doubles', t: 0, note: 'A harpsichord suite movement, performed here on a piano.' },
    ],
    see: ['well-temperament', 'concert-pitch'],
  },
  {
    slug: 'well-temperament', term: 'Well temperament', aka: ['well-tempered'], kind: 'tuning',
    short: 'Well temperament is a family of unequal keyboard tunings that makes every key usable while giving different keys different interval sizes.',
    html: `<p>The tuner distributes small adjustments unevenly among the notes. Some keys have sweeter thirds; others sound more strained. Bach’s <i>The Well-Tempered Clavier</i> explores all twenty-four major and minor keys in each book, from the opening C-major prelude to the final B-minor fugue.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '1', occ: 1 }, note: 'The final fugue in Book I’s journey through all twenty-four keys, played here on a piano.' },
    ],
    see: ['equal-temperament', 'concert-pitch', 'fugue'],
  },
  {
    slug: 'concert-pitch', term: 'Concert pitch', aka: ['A=440', 'A = 440', 'A440', 'A=415', 'A = 415', 'pitch standard'], kind: 'tuning',
    short: 'Concert pitch is the agreed reference pitch to which musicians tune their instruments.',
    html: `<p>The reference is usually A above middle C. At A=440, that note vibrates 440 times a second; ISO 16 sets this international standard. Ensembles can choose another pitch, especially when playing historical instruments. Tuning pitch establishes how high the music sounds, while temperament determines the sizes of the intervals within it.</p>`,
    hear: [
      { listen: 'couperin-nations-piemontaise', t: 38, note: 'Violin, flute and continuo share a tuning reference as they exchange phrases.' },
    ],
    see: ['period-instruments', 'equal-temperament', 'well-temperament'],
  },
];

const instrument = [
  {
    slug: 'clavichord', term: 'Clavichord', aka: [], kind: 'instrument',
    short: 'A clavichord is a quiet, touch-sensitive keyboard instrument whose metal tangents strike the strings and remain against them.',
    html: `<p>The tangent stays in contact for as long as the key is held. A player can vary the attack and gently rock the key to produce <i>Bebung</i>, a small vibrato. In Hamburg in 1772, Charles Burney persuaded C. P. E. Bach to play after dinner; Bach continued until nearly eleven at night. Joan Benson plays the F♯-minor Fantasia, Wq 67, on clavichord in the Hall.</p>`,
    hear: [
      { listen: 'cpe-bach-fantasia-fsharp', t: 0, note: 'The tangent strikes the string and stays against it while the player holds the key.' },
      { listen: 'cpe-bach-fantasia-fsharp', t: 180, note: 'Short phrases and pauses give the quiet instrument a speaking voice.' },
    ],
    see: ['fantasia', 'ornament', 'recitative'],
  },
  {
    slug: 'basset-clarinet', term: 'Basset clarinet', aka: ['basset clarinets'], kind: 'instrument',
    short: 'A basset clarinet extends the clarinet’s range downwards to written low C.',
    html: `<p>The extra length and keys add a major third below the ordinary clarinet’s lowest note, written E. Mozart wrote his Clarinet Concerto for Anton Stadler’s extended instrument. Its low passages can dip further beneath the melody, giving the soloist a wider range of colour. In the Hall’s Adagio recording, William McColl plays a basset clarinet he built himself.</p>`,
    hear: [
      { listen: 'mozart-clarinet-adagio', t: 182, note: 'McColl plays a basset clarinet of his own construction through the Adagio.' },
    ],
    see: ['concerto', 'period-instruments'],
  },
];

const performance = [
  {
    slug: 'basso-continuo', term: 'Basso continuo', aka: ['continuo', 'figured bass', 'thoroughbass'], kind: 'performance',
    short: 'Basso continuo is a bass line with chords supplied by a keyboard or plucked-string player, often joined by a bass instrument.',
    html: `<p>A harpsichordist, organist or lutenist builds chords above the written bass. Figures beneath the notes can specify the intervals: a 6 calls for a sixth above the bass, for instance. A cello, viol or bassoon may reinforce the line. Couperin’s <i>La Piémontaise</i> gives two treble instruments this support; the Hall’s performance pairs violin and flute above viol and keyboard.</p>`,
    hear: [
      { listen: 'couperin-nations-piemontaise', t: 0, note: 'Violin and flute carry the upper parts; viol and keyboard share the bass.' },
      { listen: 'bach-brandenburg-5-allegro', t: 22, note: 'The harpsichord steps forward with a written-out solo part alongside flute and violin.' },
    ],
    see: ['clavichord', 'recitative', 'concerto'],
  },
  {
    slug: 'period-instruments', term: 'Period instruments', aka: ['period instrument', 'historically informed performance', 'original instruments'], kind: 'performance',
    short: 'Period instruments are instruments of a historical period, or copies built to its designs.',
    html: `<p>A gut-strung violin, a wooden flute or a natural horn brings its own strengths and difficulties to a score. A fortepiano answers the hands differently from a modern concert grand. Historically informed performance combines these instruments with study of old scores and treatises: how musicians tuned, phrased and ornamented the music. The instruments give that research a practical test at every rehearsal.</p>`,
    hear: [],
    see: ['concert-pitch', 'basso-continuo', 'clavichord'],
  },
];

const recording = [
  {
    slug: 'acoustic-recording', term: 'Acoustic recording', aka: ['acoustic recordings', 'electrical recording', 'electrical recordings'], kind: 'recording',
    short: 'Acoustic recording uses a horn and diaphragm to move a cutting stylus directly, without microphones.',
    html: `<p>A singer faces the recording horn; instrumentalists gather close enough for their sound to reach it. The sound shakes a diaphragm connected to a stylus, which cuts the vibrations into a wax master. Rachmaninoff recorded his C♯-minor Prelude this way for Edison in 1919. Electrical recording brought microphones and amplifiers into the process during the 1920s, allowing engineers much greater freedom in placing performers.</p>`,
    hear: [
      { listen: 'rachmaninoff-prelude-c-sharp-minor', t: 0, note: 'The composer at the keyboard in 1919: an acoustic recording on an Edison Diamond Disc.' },
      { listen: 'haydn-94-andante', t: 0, note: 'An electrical recording: Koussevitzky and the Boston Symphony for Victor, 22 April 1929.' },
    ],
    see: ['78-rpm', 'matrix-number', 'transfer', 'public-domain-audio'],
  },
  {
    slug: '78-rpm', term: '78 rpm', aka: ['78s', '78 rpm disc', 'shellac disc'], kind: 'recording',
    short: 'A 78 rpm record is a disc designed to turn at roughly seventy-eight revolutions per minute.',
    html: `<p>These discs were usually made from a shellac compound, and each side held only a few minutes. A symphony occupied several records, which had to be turned and changed as the music progressed. The Hall’s Koussevitzky recording of Haydn’s ‘Surprise’ Andante originally filled two sides in Victor set M-55. Its digital transfer joins them into one movement.</p>`,
    hear: [
      { listen: 'haydn-94-andante', t: 0, note: 'This Andante is two 78 rpm sides of Victor set M-55, joined in the transfer.' },
      { listen: 'rimsky-korsakov-scheherazade-prince', t: 0, note: 'Bob Varney’s transfer from the original Victor 78 rpm set DM-920, recorded in March 1942.' },
    ],
    see: ['acoustic-recording', 'matrix-number', 'transfer'],
  },
  {
    slug: 'matrix-number', term: 'Matrix number', aka: ['matrix', 'take number'], kind: 'recording',
    short: 'A matrix number identifies a recording master, while an accompanying take number distinguishes separate attempts.',
    html: `<p>The matrix number follows the recorded performance; the catalogue number identifies the record sold to the public. The National Park Service lists Rachmaninoff’s 1919 Edison recording of his Prelude under matrix 6742-C-2-3 [2-1], issued as record 82187-R. These numbers let a collector match a disc to an archive’s session details even when its label gives little information.</p>`,
    hear: [
      { listen: 'sibelius-valse-triste', t: 0, note: 'Columbia matrix FX 51, recorded on 5 June 1925 and issued on catalogue number D 12801.' },
      { listen: 'verdi-traviata-prelude', t: 0, note: 'Matrix CVE-48936, take 3: Toscanini’s performance was issued on Victor record 6994.' },
    ],
    see: ['78-rpm', 'acoustic-recording', 'evidence-status'],
  },
  {
    slug: 'transfer', term: 'Transfer', aka: ['transfers'], kind: 'recording',
    short: 'A transfer copies sound from one medium to another, such as an old disc into a digital file.',
    html: `<p>A transfer begins with playback. For a disc, the engineer chooses a stylus that fits the groove and a speed that restores the music’s pitch and pace. Equalisation adjusts the balance of low and high sounds; restoration may remove clicks and soften surface noise. The Hall’s copy of Rachmaninoff playing his Prelude comes from an Edison disc and was cleaned and restored by Adam Cuerden.</p>`,
    hear: [
      { listen: 'rachmaninoff-prelude-c-sharp-minor', t: 175, note: 'This digital copy of the 1919 Edison disc was cleaned and restored by Adam Cuerden.' },
    ],
    see: ['78-rpm', 'acoustic-recording', 'public-domain-audio', 'evidence-status'],
  },
  {
    slug: 'public-domain-audio', term: 'Public domain', aka: ['public-domain recordings'], kind: 'recording',
    short: 'A work in the public domain is free of copyright protection in the country concerned.',
    html: `<p>A composition and a recording have separate copyright histories. Mozart’s notes are in the public domain, while a new recording of them can belong to its performers or producer. A recording’s status depends on the law of the country where it is used and on such details as its publication date. The Hall records rights information separately for the music and the recorded performance.</p>`,
    hear: [],
    see: ['transfer', 'evidence-status', 'acoustic-recording'],
  },
  {
    slug: 'level-trace', term: 'Level trace', aka: ['relative level'], kind: 'recording',
    short: 'A level trace is a graph showing the changing strength of the sound captured in a recording.',
    html: `<p>The Hall’s graph rises during stronger stretches of the recorded sound and falls during quieter ones. It can help locate an orchestral outburst or a sudden hush. Each trace has its own scale. Microphone placement, surface noise and the engineer’s settings all help shape it, so the graph describes that particular recording.</p>`,
    hear: [
      { listen: 'bach-brandenburg-5-allegro', t: 204, note: 'Quick harpsichord notes keep the music moving through this passage.' },
    ],
    see: ['score-alignment', 'evidence-status'],
  },
  {
    slug: 'score-alignment', term: 'Score alignment', aka: ['score-aligned'], kind: 'recording',
    short: 'Score alignment matches places in a written score to the moments when they are played in a recording.',
    html: `<p>A bar number identifies a place on the page; alignment supplies its place in a performance. A repeated bar needs a separate time for each occurrence. This lets the Hall’s second link to bar 1 of Beethoven’s Fifth find the exposition repeat. Software produces the initial matches, which carry a provisional label until they have been checked by ear.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 2 }, note: 'The exposition repeat: bar 1 is played again, so it has a second aligned time.' },
    ],
    see: ['bar', 'level-trace', 'evidence-status'],
  },
];

const influence = [
  {
    slug: 'quotation', term: 'Quotation', aka: ['musical quotation'], kind: 'influence',
    short: 'A musical quotation brings a recognisable passage from an existing tune or work into another piece.',
    html: `<p>A borrowed tune can bring its old associations into a new scene. Berlioz puts the funeral chant <i>Dies irae</i> into the Witches’ Sabbath of <i>Symphonie fantastique</i>, where it becomes part of a grotesque ceremony. In <i>The Alcotts</i> from Ives’s <i>Concord</i> Sonata, the short-short-short-long rhythm of Beethoven’s Fifth sounds within Ives’s own broad melody.</p>`,
    hear: [
      { listen: 'ives-concord-alcotts', t: 74, note: 'Across the stronger chordal passages, the rhythm of Beethoven’s Fifth sounds inside Ives’s own melody.' },
    ],
    see: ['parody', 'modelling', 'homage', 'motif', 'tristan-chord'],
  },
  {
    slug: 'parody', term: 'Parody', aka: ['parodied'], kind: 'influence',
    short: 'Musical parody can mean reworking an existing composition or imitating music for comic effect.',
    html: `<p>In a Renaissance parody Mass, a composer takes several voices from a motet or chanson and makes new music from them. Bach’s reuse of his earlier cantatas in the B minor Mass belongs to this older practice of adaptation. The comic sense is familiar too: Mozart’s <i>A Musical Joke</i> makes deliberate blunders, and Berlioz turns the solemn <i>Dies irae</i> into a grotesque dance in <i>Symphonie fantastique</i>.</p>`,
    hear: [],
    see: ['quotation', 'modelling', 'transcription'],
  },
  {
    slug: 'modelling', term: 'Modelling', aka: ['modelled on', 'modelled'], kind: 'influence',
    short: 'Modelling uses another work’s musical plan or pattern as a starting point for a new composition.',
    html: `<p>A composer can borrow the shape of a movement, the working of a fugue or a repeating bass. Brahms took the bass of the closing chaconne in Bach’s Cantata No. 150 as a model for his Fourth Symphony’s finale. He stretched it to eight bars and added a chromatic note. Thirty variations explore what that altered pattern can support.</p>`,
    hear: [
      { listen: 'brahms-4-finale', t: 105, note: 'Brahms adapted this recurring pattern from a Bach cantata, adding a chromatic note.' },
    ],
    see: ['chaconne', 'passacaglia', 'quotation', 'transcription'],
  },
  {
    slug: 'homage', term: 'Homage', aka: ['tombeau', 'tombeaux', 'hommage'], kind: 'influence',
    short: 'An homage is a piece written in honour of someone, sometimes borrowing their style or favourite forms.',
    html: `<p>A <i>tombeau</i>, literally a tomb, is a musical memorial. Ravel’s <i>Le Tombeau de Couperin</i> honours French keyboard music through a prelude, fugue, toccata and old dances. Each movement also remembers a friend killed in the First World War. Debussy’s <i>Hommage à Rameau</i> offers another kind of tribute: a slow piano piece marked to be played in the manner of a sarabande.</p>`,
    hear: [],
    see: ['quotation', 'modelling', 'toccata'],
  },
  {
    slug: 'transcription', term: 'Transcription', aka: ['transcriptions'], kind: 'influence',
    short: 'A transcription adapts a piece for different instruments or voices.',
    html: `<p>The new players inherit the melodies, harmonies and shape of the piece, but must find new ways to make them sound. Liszt brought all nine Beethoven symphonies to the solo piano. Ravel carried his piano <i>Pavane pour une infante défunte</i> into the orchestra, giving its opening tune to a horn. The Hall’s <i>La Mer</i> recording uses Lawrence Odom’s transcription for concert band.</p>`,
    hear: [
      { listen: 'debussy-la-mer-dawn', t: 0, note: 'Lawrence Odom’s concert-band transcription: sustained sounds in the low register support the shorter figures.' },
      { listen: 'mussorgsky-night-bald-mountain', t: 375, note: 'Rimsky-Korsakov’s concert version reshapes Mussorgsky’s material, including the quiet dawn at the end.' },
    ],
    see: ['orchestration', 'quotation', 'modelling'],
  },
  {
    slug: 'evidence-status', term: 'Evidence status', aka: [], kind: 'influence',
    short: 'Evidence status tells the reader whether a claim is documented, inferred or disputed.',
    html: `<p><b>Documented</b> means that a cited source states the fact. <b>Inferred</b> means that the available evidence supports a conclusion reached by the editor. <b>Disputed</b> means that sources disagree. A record label, a session ledger and a later catalogue may give conflicting dates; the status keeps that disagreement visible. <i>Unknown</i> marks a detail that the sources consulted leave unanswered.</p>`,
    hear: [],
    see: ['public-domain-audio', 'level-trace', 'score-alignment', 'matrix-number'],
  },
];

const transition = [
  {
    slug: 'perfect-cadence', term: 'Perfect cadence', aka: ['authentic cadence', 'perfect cadences'], kind: 'transition',
    short: 'A perfect cadence closes a phrase by moving from the dominant chord to the tonic.',
    html: `<p>In C major, G–B–D moves to C–E–G. The bass goes from G to C, and the leading note B rises to C. The close is especially firm when the melody also lands on the tonic; this is called a perfect authentic cadence. At bars 373–374 of Beethoven’s Fifth, that G-major to C-major arrival ends the recapitulation and begins the coda.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '374', occ: 1 }, note: 'The G-major chord resolves to C major, and the arrival is also the coda’s first chord.' },
      { listen: 'bach-brandenburg-5-allegro', t: 22, note: 'The opening ritornello closes in D major and the pulse carries on into the solo episode.' },
    ],
    see: ['cadence', 'elision', 'dominant', 'tonic'],
  },
  {
    slug: 'half-cadence', term: 'Half cadence', aka: ['half close'], kind: 'transition',
    short: 'A half cadence ends a phrase on the dominant chord, leaving the music poised to continue.',
    html: `<p>In C major or minor, a phrase that stops on G major has reached a half cadence. The dominant still points towards C. Beethoven’s Fifth makes an extraordinary pause of one at bar 268: the orchestra stops on G major, and the oboe continues alone in a little Adagio. The violins then recover the movement’s fast pulse.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '268', occ: 1 }, note: 'A half cadence on G major, then the oboe alone: the pulse is suspended before the violins resume.' },
      { listen: 'mozart-clarinet-adagio', t: 34, note: 'The clarinet’s phrase rests on the dominant and the orchestra answers.' },
    ],
    see: ['cadence', 'dominant', 'cadenza', 'medial-caesura'],
  },
  {
    slug: 'deceptive-cadence', term: 'Deceptive cadence', aka: ['interrupted cadence'], kind: 'transition',
    short: 'A deceptive cadence sends the dominant to an unexpected chord, usually the chord on the sixth degree, delaying the close.',
    html: `<p>In C major, G–B–D seems ready to resolve to C–E–G. An A-minor chord arrives instead: A–C–E. The melody can still reach C, but the bass has moved to A, leaving the phrase open for more music. In a minor key, the usual sixth-degree chord is major. British musicians also call this an interrupted cadence.</p>`,
    hear: [],
    see: ['cadence', 'perfect-cadence', 'dominant'],
  },
  {
    slug: 'plagal-cadence', term: 'Plagal cadence', aka: ['amen cadence'], kind: 'transition',
    short: 'A plagal cadence moves from the subdominant chord to the tonic, as in many settings of ‘Amen’.',
    html: `<p>In C major, F–A–C moves to C–E–G. The common C can stay while F falls to E and A moves to G. Hymns often use this close for the last two syllables, ‘Amen’. Handel gives it a grander scale at the end of the <i>Hallelujah</i> chorus: after the pause, G-major harmony settles into D major.</p>`,
    hear: [
      { listen: 'handel-messiah-hallelujah', t: 186, note: 'After a general pause the last declaration resolves from G major to D major.' },
      { listen: 'brahms-4-finale', t: 284, note: 'A descending oboe line delays the plagal movement into the chorale-like writing.' },
    ],
    see: ['cadence', 'perfect-cadence', 'elision', 'general-pause'],
  },
  {
    slug: 'elision', term: 'Elision', aka: ['elided'], kind: 'transition',
    short: 'Elision overlaps the end of one musical phrase or section with the beginning of the next.',
    html: `<p>One chord does two jobs: it completes an arrival and launches a new phrase. The music can keep moving through what might have been a stopping place. At bar 374 of Beethoven’s Fifth, the recapitulation’s final cadence reaches C major just as the coda begins. The violins hold a high C while the bass starts to move beneath it.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '374', occ: 1 }, note: 'The cadence that closes the recapitulation is the first chord of the coda.' },
      { listen: 'brahms-4-finale', t: 284, note: 'An oboe line carries one variation into the next with no full stop.' },
    ],
    see: ['perfect-cadence', 'coda', 'link-passage'],
  },
  {
    slug: 'pivot-chord', term: 'Pivot chord', aka: ['pivot chords'], kind: 'transition',
    short: 'A pivot chord belongs to both the old key and the new one, helping the music pass between them.',
    html: `<p>An A-minor chord is vi in C major and ii in G major. It can leave C as an ordinary chord of that key, then lead through D major to G and acquire a new meaning. Vivaldi uses the same principle near the end of <i>Spring</i>’s first movement: F♯ minor seventh belongs to both C♯ minor and E major, linking them on the way home.</p>`,
    hear: [
      { listen: 'vivaldi-spring-allegro', t: 166, note: 'The returning phrase changes its destination: C♯ minor, through F♯ minor seventh and B seventh, to E major.' },
    ],
    see: ['modulation', 'common-tone-modulation', 'direct-modulation'],
  },
  {
    slug: 'common-tone-modulation', term: 'Common-tone modulation', aka: ['common tone modulation'], kind: 'transition',
    short: 'Common-tone modulation connects keys through a note that belongs to both the departing and arriving harmonies.',
    html: `<p>A held note stays in place while its surroundings change. C, for example, is the root of C major and the third of A♭ major. Fauré uses that shared pitch in the <i>Agnus Dei</i> of his <i>Requiem</i>. The sopranos hold C alone; when the other voices enter beneath them, the note belongs to A♭ major and <i>Lux aeterna</i> has begun.</p>`,
    hear: [
      { listen: 'faure-requiem-agnus-dei', t: 138, note: 'One held note changes its harmonic meaning as the Lux aeterna begins.' },
    ],
    see: ['modulation', 'pivot-chord', 'enharmonic-reinterpretation'],
  },
  {
    slug: 'direct-modulation', term: 'Direct modulation', aka: ['abrupt modulation'], kind: 'transition',
    short: 'Direct modulation moves into a new key without a connecting passage or pivot chord.',
    html: `<p>A section closes, and the next begins in another key. The change can be striking even when the keys are related. Bruckner’s Seventh ends its A-minor scherzo before the F-major trio begins. The persistent fast string figure stops, and the trio has a slower pace and a sustained melody.</p>`,
    hear: [
      { listen: 'bruckner-7-scherzo', t: 198, note: 'The repeated figure stops at the border and the trio begins in F major.' },
      { listen: 'brahms-3-poco-allegretto', t: 110, note: 'A C minor cadence, then an A♭ minor chord in the same bar.' },
    ],
    see: ['modulation', 'pivot-chord', 'minuet-and-trio'],
  },
  {
    slug: 'enharmonic-reinterpretation', term: 'Enharmonic reinterpretation', aka: ['enharmonic'], kind: 'transition',
    short: 'Enharmonic reinterpretation gives a note or chord a new spelling and harmonic role while keeping its sounding pitch.',
    html: `<p>D♭ and C♯ use the same piano key, yet their spellings suggest different routes through a score. A composer can make one become the other at a turning point. Chopin’s D♭-major Nocturne, Op. 27 No. 2, respells its home note as C♯ for a turn to C♯ minor. The tonic stays put while its major third, F, falls to E.</p>`,
    hear: [
      { listen: 'liszt-hungarian-rhapsody-6', t: 85, note: 'A flourish releases the Presto, with D♭ major respelled as C♯ major.' },
      { listen: 'chopin-nocturne-op27-2', t: 154, note: 'The tonic D♭ is respelled C♯ and the music darkens into C♯ minor.' },
    ],
    see: ['modulation', 'modal-mixture', 'augmented-sixth', 'diminished-seventh'],
  },
  {
    slug: 'chromatic-slide', term: 'Chromatic slide', aka: [], kind: 'transition',
    short: 'A chromatic slide shifts a note or chord by a semitone into a new harmonic setting.',
    html: `<p>A tiny move can change the ground beneath a whole phrase. In Debussy’s <i>La cathédrale engloutie</i>, the bass drops from C to B while the rising figures continue above it. B major begins to emerge, with left-hand triplets under the chords. The semitone in the bass leads into a brighter, more flowing passage.</p>`,
    hear: [
      { listen: 'debussy-cathedrale-engloutie', t: 74, note: 'A bass semitone, C to B, starts the emergence of B major.' },
      { listen: 'rachmaninoff-concerto-2-moderato', t: 500, note: 'A chromatic descent leaves the horn alone.' },
    ],
    see: ['chromaticism', 'modulation', 'pedal-point'],
  },
  {
    slug: 'sequence', term: 'Sequence', aka: ['sequences'], kind: 'transition',
    short: 'A sequence repeats a melodic or harmonic pattern at successively higher or lower pitches.',
    html: `<p>A little phrase takes another step up or down each time it returns. A tonal sequence adjusts some intervals to stay within the scale; a real sequence keeps the exact intervals. In bars 19–20 of Bach’s B minor fugue, the bass repeats its four-note shape a tone lower. The upper voices continue their lines while the sequence carries the episode downwards.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '410', occ: 1 }, note: 'A short violin figure keeps stepping down while the lower parts descend more slowly.' },
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '19', occ: 1 }, note: 'The bass repeats a four-note shape a tone lower in the episode’s descending sequence.' },
    ],
    see: ['episode', 'development', 'modulation'],
  },
  {
    slug: 'dominant-pedal', term: 'Dominant pedal', aka: [], kind: 'transition',
    short: 'A dominant pedal holds or repeats the fifth note of the key while the music above it changes.',
    html: `<p>In C major, a low G can stay beneath several different chords, keeping the expected C in suspense. Bach’s B minor fugue holds F♯ in the bass at bar 74 under the alto’s last subject fragment. Near the end of the Fifth Brandenburg Concerto’s harpsichord cadenza, the pedal is A; the returning orchestra brings D major.</p>`,
    hear: [
      { listen: 'bach-wtc1-fugue-b-minor', bar: { n: '74', occ: 1 }, note: 'The bass holds F♯ beneath the alto’s last subject fragment.' },
      { listen: 'bach-brandenburg-5-allegro', t: 568, note: 'A in the bass anchors the cadenza’s end; the final ritornello releases it.' },
      { listen: 'mozart-40-molto-allegro', t: 194, note: 'Fragments wait on D until the first theme returns.' },
    ],
    see: ['pedal-point', 'tonic-pedal', 'standing-on-the-dominant', 'retransition'],
  },
  {
    slug: 'tonic-pedal', term: 'Tonic pedal', aka: [], kind: 'transition',
    short: 'A tonic pedal holds or repeats the home note while the chords and melodies around it move.',
    html: `<p>The bass can remain on C while the upper parts move through C-major, F-major and other chords. The held note gives the passage a firm footing, though some chords may clash against it. Chopin closes his D♭-major Nocturne, Op. 27 No. 2, over repeated D♭s. The right hand continues its duet while the bass has already come home.</p>`,
    hear: [
      { listen: 'chopin-nocturne-op27-2', t: 280, note: 'The bass stops travelling and keeps renewing D♭.' },
      { listen: 'vivaldi-spring-allegro', t: 34, note: 'Over tonic and dominant pedals, three violins exchange birdsong.' },
    ],
    see: ['pedal-point', 'dominant-pedal', 'tonic', 'coda'],
  },
  {
    slug: 'retransition', term: 'Retransition', aka: [], kind: 'transition',
    short: 'A retransition leads back from a contrasting passage to the return of familiar opening music.',
    html: `<p>The retransition often settles on the home key’s dominant, giving the returning theme a place to enter. In the first movement of Mozart’s G minor Symphony, fragments gather over D before the opening tune comes back. Beethoven’s Fifth takes another route: quiet diminished-seventh chords pass between winds and strings, then fragments of the four-note rhythm prepare the return at bar 248.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '233', occ: 1 }, note: 'Diminished-seventh chords in winds and strings begin the retransition.' },
      { listen: 'mozart-40-molto-allegro', t: 194, note: 'Fragments wait on D; the first theme regains its full phrase.' },
      { listen: 'mendelssohn-hebrides', t: 455, note: 'F♯ gives the opening figure its ground as the home key returns.' },
    ],
    see: ['recapitulation', 'dominant-pedal', 'standing-on-the-dominant', 'diminished-seventh'],
  },
  {
    slug: 'standing-on-the-dominant', term: 'Standing on the dominant', aka: [], kind: 'transition',
    short: 'Standing on the dominant prolongs dominant harmony while the melody and rhythm continue to move.',
    html: `<p>The music has reached the dominant but keeps finding ways to postpone the tonic. It may repeat a phrase, spin out scales or linger on a trill. Near the end of Chopin’s First Ballade, the opening theme returns over D in the bass. The dominant holds G minor at a distance until the cadence releases the fast coda.</p>`,
    hear: [
      { listen: 'tchaikovsky-waltz-flowers', t: 26, note: 'The dominant waits while the dance pulse disappears into a cadenza.' },
      { listen: 'chopin-ballade-1', t: 486, note: 'The recalled theme narrows towards the dominant, then the Presto coda is released.' },
    ],
    see: ['dominant', 'dominant-pedal', 'retransition', 'cadenza'],
  },
  {
    slug: 'liquidation', term: 'Liquidation', aka: [], kind: 'transition',
    short: 'Liquidation gradually removes a motif’s distinctive features until only a simple figure or chord remains.',
    html: `<p>A phrase loses its ending, then its opening, and finally its recognisable rhythm. This can clear the way for a cadence or a return. In the development of Beethoven’s Fifth, the busy repeated notes give way to pairs of slow chords exchanged by winds and strings. From bar 196 onwards, those replies shrink again until each group offers a single chord.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '196', occ: 1 }, note: 'Two-note replies shrink to isolated chords, exchanged between winds and strings.' },
    ],
    see: ['development', 'decrescendo', 'motivic-link'],
  },
  {
    slug: 'motivic-link', term: 'Motivic link', aka: [], kind: 'transition',
    short: 'A motivic link carries a recognisable musical fragment from one phrase or section into the next.',
    html: `<p>A rhythm or interval can survive a change of key or instrumentation. In Beethoven’s Fifth, the horn call at bar 59 keeps the opening motto’s repeated-note rhythm as the music enters E♭ major. When the quiet violin melody follows, the lower strings continue the short-short-short-long pattern underneath it. The new tune has the old rhythm for company.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '59', occ: 1 }, note: 'The horn call keeps the motto’s rhythm with widened intervals.' },
      { listen: 'brahms-3-poco-allegretto', t: 214, note: 'The song’s three-note opening is tried in A♭ minor and B♭ minor before the return.' },
    ],
    see: ['motif', 'sequence', 'retransition'],
  },
  {
    slug: 'fermata', term: 'Fermata', aka: ['fermatas'], kind: 'transition',
    short: 'A fermata is a sign that extends a note, chord or rest beyond its written duration.',
    html: `<p>The usual sign is a dot under an arc. It gives the performer or conductor room to hold the moment before continuing. Beethoven’s Fifth begins with two such interruptions: three short Gs fall to a held E♭, then three Fs fall to a longer D. The fermatas make the silences and held notes part of the opening’s argument.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '1', occ: 1 }, note: 'Fermatas on the held E♭ and the tied D interrupt the pulse of the opening.' },
      { listen: 'beethoven-5-first', bar: { n: '125', occ: 1 }, note: 'The horns’ G and the strings’ D♭–C lead to a fermata before F minor is established.' },
    ],
    see: ['general-pause', 'cadenza', 'motif'],
  },
  {
    slug: 'general-pause', term: 'General pause', aka: [], kind: 'transition',
    short: 'A general pause is a rest for the whole ensemble at once.',
    html: `<p>The score may mark it <i>G.P.</i>, or simply give everyone rests. A sudden silence can separate sections or hold back an expected ending. Bar 57 of Beethoven’s Fifth is empty: the orchestra has cut off a diminished seventh, and the horn call is still to come. Handel places a general pause before the final declaration of the <i>Hallelujah</i> chorus.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '57', occ: 1 }, note: 'A silent bar between the cut-off chord and the horn call.' },
      { listen: 'handel-messiah-hallelujah', t: 186, note: 'The moving parts converge, then a general pause precedes the final declaration.' },
    ],
    see: ['fermata', 'medial-caesura', 'plagal-cadence'],
  },
  {
    slug: 'medial-caesura', term: 'Medial caesura', aka: ['caesura'], kind: 'transition',
    short: 'A medial caesura is the break between the transition and the second theme in a sonata exposition.',
    html: `<p>The transition builds towards an arrival, often on the dominant of the coming key, then breaks off. The second theme enters in the space left behind. Mozart’s G minor Symphony prepares B♭ major with F-major harmony before its quiet second theme. Beethoven’s Fifth makes the break unusually dramatic: a cut-off chord, a silent bar and a short B♭-major chord precede the horns’ call in E♭.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '59', occ: 1 }, note: 'Silence clears space for the horn call that begins the second group.' },
      { listen: 'mozart-40-molto-allegro', t: 50, note: 'The transition gathers on the dominant and breaks off before the second theme.' },
    ],
    see: ['exposition', 'half-cadence', 'general-pause', 'sonata-form'],
  },
  {
    slug: 'crescendo-build', term: 'Crescendo build', aka: ['crescendo', 'crescendos'], kind: 'transition',
    short: 'A crescendo build is a passage that grows gradually louder towards a climax.',
    html: `<p>The score may mark <i>cresc.</i> or show a hairpin opening from left to right. A composer can strengthen the rise by bringing in more players or moving the melody higher. Ravel’s <i>Boléro</i> makes almost an entire piece from this process: the snare-drum pattern continues while solo wind instruments become groups, then a full orchestra.</p>`,
    hear: [
      { listen: 'debussy-la-mer-dawn', t: 514, note: 'Small gestures become broad chordal motion as the closing chorale arrives.' },
      { listen: 'ravel-bolero', t: 0, note: 'The growing orchestra supplies the large-scale change over a fixed rhythm.' },
    ],
    see: ['decrescendo', 'ostinato', 'orchestration'],
  },
  {
    slug: 'decrescendo', term: 'Decrescendo', aka: ['diminuendo', 'decrescendi'], kind: 'transition',
    short: 'A decrescendo gradually makes the music quieter.',
    html: `<p><i>Diminuendo</i> usually means the same thing; a closing hairpin is the common sign. A player can soften a phrase without changing its pace. In the development of Beethoven’s Fifth, the wind and string replies become quieter as they shrink from short phrases to isolated chords. Elgar’s <i>Nimrod</i> lets its long melody descend from the climax into quiet.</p>`,
    hear: [
      { listen: 'elgar-enigma-nimrod', t: 156, note: 'The orchestra gives back the melody: the climax is released into a quiet withdrawal.' },
      { listen: 'beethoven-5-first', bar: { n: '196', occ: 1 }, note: 'The chord exchanges shrink and the weight falls away, with the metre unchanged.' },
    ],
    see: ['crescendo-build', 'liquidation', 'fade'],
  },
  {
    slug: 'texture-change', term: 'Texture change', aka: ['change of texture'], kind: 'transition',
    short: 'A texture change alters the number of musical lines or the way they fit together.',
    html: `<p>A single tune can become a conversation; moving voices can join in one chord. Handel’s <i>Hallelujah</i> chorus shifts repeatedly between singers moving together and parts entering one after another. Bach’s Fifth Brandenburg Concerto thins its opening ensemble into a trio of flute, solo violin and harpsichord, with the quick pulse continuing across the change.</p>`,
    hear: [
      { listen: 'bach-brandenburg-5-allegro', t: 22, note: 'The ensemble yields to a conversation among flute, violin and harpsichord.' },
      { listen: 'handel-messiah-hallelujah', t: 36, note: 'One declaration becomes several pursuing voices.' },
    ],
    see: ['orchestration-change', 'homophony', 'imitation'],
  },
  {
    slug: 'orchestration-change', term: 'Orchestration change', aka: [], kind: 'transition',
    short: 'An orchestration change gives the music to different instruments or alters their combination.',
    html: `<p>A familiar tune can sound newly exposed or newly weighty when another player takes it. In the exposition of Beethoven’s Fifth, horns give the call that opens the second group in E♭ major. In the recapitulation, bassoons take the corresponding call in C major. The change of instrument helps distinguish the return from its earlier appearance.</p>`,
    hear: [
      { listen: 'beethoven-5-first', bar: { n: '59', occ: 1 }, note: 'Exposed horns fill the gap with the call.' },
      { listen: 'beethoven-5-first', bar: { n: '303', occ: 1 }, note: 'Bassoons give the returning call in C major.' },
    ],
    see: ['orchestration', 'texture-change', 'register-change'],
  },
  {
    slug: 'register-change', term: 'Register change', aka: [], kind: 'transition',
    short: 'A register change moves the music into a higher or lower pitch range.',
    html: `<p>A melody can keep its shape while moving an octave lower, where the same instrument may sound darker or fuller. It can also change register through a single leap. At bar 19 of Satie’s first <i>Gymnopédie</i>, the melody drops to a low E and holds it for three bars. The accompaniment changes beneath this newly quiet, low-lying phrase.</p>`,
    hear: [
      { listen: 'satie-gymnopedie-1', bar: { n: '19', occ: 1 }, note: 'The melody drops to a low E held for three bars while the harmony changes beneath it.' },
      { listen: 'mahler-5-adagietto', t: 555, note: 'The violin line rises as the returning phrase becomes the climax.' },
    ],
    see: ['orchestration-change', 'texture-change', 'divisi'],
  },
  {
    slug: 'tempo-change', term: 'Tempo change', aka: [], kind: 'transition',
    short: 'A tempo change alters the speed of the musical beat.',
    html: `<p>The change can happen gradually through <i>accelerando</i> or <i>ritardando</i>, or at once under a new marking. Chopin’s First Ballade moves from a broad <i>Largo</i> introduction to a flowing <i>Moderato</i>; its coda is <i>Presto con fuoco</i>, very fast and fiery. Bruckner marks the trio of his Seventh Symphony’s scherzo <i>Etwas langsamer</i>, ‘somewhat slower’, before the fast opening returns.</p>`,
    hear: [
      { listen: 'chopin-ballade-1', t: 30, note: 'Declamation finds a regular bass as the Moderato begins.' },
      { listen: 'bruckner-7-scherzo', t: 198, note: 'The trio is marked Etwas langsamer: somewhat slower.' },
    ],
    see: ['metre-change', 'metre', 'rubato'],
  },
  {
    slug: 'metre-change', term: 'Metre change', aka: [], kind: 'transition',
    short: 'A metre change alters the grouping or division of the beat, usually shown by a new time signature.',
    html: `<p>Music in 3/4 has three crotchet beats to the bar; 2/4 regroups them in pairs. A change of note value can broaden the bar too. Brahms’s Fourth Symphony finale moves from 3/4 to 3/2 for its quieter central variations, giving each bar three minims. Chopin’s First Ballade leaves the introduction’s 4/4 for the two broad groups of three in 6/4.</p>`,
    hear: [
      { listen: 'brahms-4-finale', t: 205, note: 'Twice the space within each bar: 3/4 becomes 3/2.' },
      { listen: 'puccini-mi-chiamano-mimi', t: 140, note: 'A held pause, then common time and the long lyrical span.' },
    ],
    see: ['metre', 'tempo-change', 'fermata'],
  },
  {
    slug: 'link-passage', term: 'Link passage', aka: ['linking passage', 'bridge passage'], kind: 'transition',
    short: 'A link passage connects two musical phrases or sections.',
    html: `<p>A few running notes can bridge a gap; a longer link may change key or bring in the next theme’s rhythm. In Mendelssohn’s <i>The Hebrides</i>, the transition leaves the opening’s B minor for D major. Its restless figures make room for the long second subject, sung by cellos and bassoons. In Brahms’s Fourth finale, a short oboe descent carries one variation into the next.</p>`,
    hear: [
      { listen: 'mendelssohn-hebrides', t: 120, note: 'The bass figure makes room for song: the transition leads to the cellos’ long second subject.' },
      { listen: 'brahms-4-finale', t: 284, note: 'An oboe line opens the chorale.' },
    ],
    see: ['elision', 'modulation', 'texture-change'],
  },
  {
    slug: 'cadenza', term: 'Cadenza', aka: ['cadenzas'], kind: 'transition',
    short: 'A cadenza is a solo display, usually unaccompanied, within a concerto, aria or other work.',
    html: `<p>A cadenza can be improvised or written out, and may turn the movement’s themes into scales, trills and other feats of playing. Bach gives the harpsichord a long solo near the end of the Fifth Brandenburg Concerto’s first movement. Schumann writes a cadenza into his Piano Concerto. Beethoven borrows the effect for the lone oboe Adagio at bar 268 of his Fifth Symphony.</p>`,
    hear: [
      { listen: 'bach-brandenburg-5-allegro', t: 386, note: 'One harpsichord supplies the whole texture: the movement’s largest change of scale.' },
      { listen: 'schumann-piano-concerto-1', t: 692, note: 'The orchestra leaves the argument to the piano: a written-out cadenza.' },
      { listen: 'beethoven-5-first', bar: { n: '268', occ: 1 }, note: 'The strings stop and the oboe continues alone in a written Adagio.' },
    ],
    see: ['concerto', 'half-cadence', 'standing-on-the-dominant', 'fermata'],
  },
  {
    slug: 'attacca', term: 'Attacca', aka: ['attacca subito'], kind: 'transition',
    short: 'Attacca tells performers to continue straight into the next movement or section without a break.',
    html: `<p>The instruction keeps an ending from becoming a stopping place. Mendelssohn joins the movements of his E-minor Violin Concerto: a bassoon holds B after the first movement’s closing chord, then moves to C as the Andante begins. A short passage also links the slow movement to the finale.</p>`,
    hear: [],
    see: ['general-pause', 'link-passage', 'fermata'],
  },
  {
    slug: 'fade', term: 'Fade-out', aka: ['fade out'], kind: 'transition',
    short: 'A fade-out ends a passage by making its sound gradually disappear.',
    html: `<p>A composer can bring the players down to a whisper and leave the last notes to die away. In a recorded fade-out, an engineer gradually lowers the sound while the performance continues. Debussy composes a disappearance at the end of <i>La cathédrale engloutie</i>: the great chords return as a distant echo, and the closing bells sink into silence.</p>`,
    hear: [
      { listen: 'debussy-cathedrale-engloutie', t: 305, note: 'The echo sheds its accompaniment: closing bells, then silence.' },
      { listen: 'cpe-bach-fantasia-fsharp', t: 698, note: 'Quick figures leave isolated sounds in the closing withdrawal.' },
    ],
    see: ['decrescendo', 'tonic-pedal', 'clavichord'],
  },
];

export default [...form, ...harmony, ...texture, ...rhythm, ...notation, ...tuning, ...instrument, ...performance, ...recording, ...influence, ...transition];
