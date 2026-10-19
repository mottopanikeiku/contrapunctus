# Web of Influence — edges for the six new composers

Added 18 October 2026 to `content/influence/romantic.json` (Rossini, Bizet) and `content/influence/modern.json` (Price, Copland, Gershwin, Cage). Every source below was opened and read for this task; locators say where the claim sits. Wikipedia was used only as a pointer and is never the sole source of a claim. `node tools/validate-influence.mjs` and `node tools/validate.mjs` on the three changed files pass.

Direction follows the existing batches: `from` is the source of the connection, `to` the person who took it up. `championed` means `from` championed `to`; `heard` means `to` heard `from`.

## Rossini (`romantic.json`)

**`rossini--wagner-paris-visit-1860`** — heard, 1860, documented. After conducting extracts from his operas in Paris early in 1860, Wagner called on Rossini following a supposed bon mot and Rossini’s public denial of it; Rossini told him he might have achieved something if born and educated in Germany; Wagner never saw him again, and his estimate of modern Italian opera in the French preface to his opera poems drew largely on that conversation.
- Wagner, “A Remembrance of Rossini” (1868), in *Richard Wagner’s Prose Works*, vol. 4, trans. W. A. Ellis (London: William Reeves, 1912; preface dated 1895): https://archive.org/details/proseworks04wagnuoft (full text from the Internet Archive djvu text), pp. 269–271. Wagner’s own account, so the primary source for the visit and for the preface.
- Rossini Opera Festival, chronology, entry for 1860 (“visited by Richard Wagner in March”): https://www.rossinioperafestival.it/en/foundation/rof-people/gioachino-rossini/
- Limits: Wagner places the visit in Paris and gives no address. The Passy villa was not finished until spring 1861 (ROF, 1861), so the edge says “in Paris”, not Passy. Michotte’s fuller account of the conversation (Chicago, 1968 translation, https://archive.org/details/richardwagnersvi0000mich) is access-restricted and was not opened; nothing is taken from it.

**`beethoven--rossini-vienna-visit-1822`** — heard, 1822, **disputed**. Rossini’s story, told to Wagner in 1860 and written up by Michotte (1906): Beethoven praised the *Barbiere* as an excellent *opera buffa* and told him to write nothing else. The Fondazione Rossini concludes the visit never took place; in Vienna Rossini met only Beethoven’s brother.
- Rossini Opera Festival, Fondazione Rossini, “Rossini, Beethoven and the ‘opera buffa’” (Andrea Malnati, 26 January 2026): https://www.rossinioperafestival.it/en/archive-news/the-fondazione-rossini-tells-the-story/ — quotes Beethoven’s reported words, names Michotte’s 1906 pamphlet, gives the Foundation’s verdict.
- ROF chronology, entry for 1822 (Vienna, *Zelmira*, Kärntnertortheater, 13 April): same chronology URL as above.
- The brief asked for this visit to be verified rather than assumed. Verification found a documented denial, so the edge is `disputed`, with the verdict in `note`. Details found only in search summaries (Carpani translating in pencil, the attic lodging) were left out.

**`schiller--rossini-guillaume-tell-1829`** — set-text, 1829, documented. Jouy and Bis made the four-act libretto from Schiller’s *Wilhelm Tell* (1804); Rossini had chosen Tell in spring 1828 but wrote *Le Comte Ory* first to reuse *Il viaggio a Reims*; première at the Académie Royale de Musique on 3 August 1829; Bellini’s “musical bible”.
- ROF, *Guillaume Tell* (story): https://www.rossinioperafestival.it/en/stories/guillaume-tell/ — libretto authors, Schiller as source, première date.
- ROF chronology, entries for 1828 and 1829: https://www.rossinioperafestival.it/en/foundation/rof-people/gioachino-rossini/

**`rossini--verdi-messa-per-rossini-1868`** — dedicated, 1868, documented. Verdi’s letter of 17 November 1868 proposing a composite Requiem for the anniversary of Rossini’s death; Verdi’s *Libera me*; the planned San Petronio performance (13 November 1869) did not happen; first heard at Stuttgart in 1988 under Rilling; Verdi’s revision of the *Libera me* in the *Messa da Requiem* (Milan, 22 May 1874).
- John Quinn, review of Decca 483 4084 (Chailly, La Scala), MusicWeb International: http://www.musicweb-international.com/classrev/2019/Feb/Mass_Rossini_4834084.htm — letter of 17 November, the quoted “most distinguished Italian composers”, sealing in the Liceo archive, thirteen composers, San Petronio, Stuttgart September 1988.
- Ricordi, Verdi *Messa da Requiem*, critical edition ed. David Rosen (1990): https://www.ricordi.com/en-US/Critical-Editions/Verdi-Giuseppe-Critical-Editions/Verdi-Giuseppe-WGV/Verdi-Messa-da-Requiem.aspx — original *Libera me* kept and revised; Milan première 22 May 1874.
- ROF chronology, 1868 (death 13 November).
- Limits: the reviewer calls the addressee Giulio Ricordi; other accounts name Tito Ricordi. The edge says “his publisher Ricordi”. The reviewer’s remark on the rediscovery of the score (Rosen, 1970) is hedged (“I believe”) and is not used.

**`rossini--bizet-prix-de-rome-years-1857`** — heard, 1857, documented. Bru Zane: *Clovis et Clotilde* drew on Rossini, Meyerbeer and Gounod; Macdonald: at the Villa Medici Bizet had “a lively taste for Italian music, especially Rossini” and was “much more attached to Rossini, Mozart and Mendelssohn” than to Verdi; letter of 25 June 1858 about an Italian farce “in the style of *Don Pasquale*”.
- Palazzetto Bru Zane, *Georges Bizet et Paris*: https://www.bruzanemediabase.com/exploration/expositions/georges-bizet-paris (Prix de Rome panel).
- Hugh Macdonald, *Brief Biography*: https://hdwlabs.artsci.wustl.edu/bizet/ref/biography.html (Rome sojourn).
- Macdonald, catalogue entry *Don Procopio* (letters of 17 April, 16 May, 25 June 1858): https://hdwlabs.artsci.wustl.edu/bizet/works/Don_Procopio.html
- Limits: no source names a Rossini score as the model for *Don Procopio*, and the claim does not say so; the model Bizet himself names is Donizetti’s *Don Pasquale*.

## Bizet (`romantic.json`; the Rossini edge above also counts)

**`halevy--bizet-composition-class-1853`** — studied-with, 1853, documented. Benoist’s organ class 1852, Halévy’s composition class a year later; marriage to Geneviève Halévy in June 1869; completion of *Noé*.
- Macdonald, *Brief Biography*: https://hdwlabs.artsci.wustl.edu/bizet/ref/biography.html
- Bru Zane, *Georges Bizet et Paris* (panel “Fromental Halévy”): https://www.bruzanemediabase.com/exploration/expositions/georges-bizet-paris

**`gounod--bizet-symphony-in-c-1855`** — modelled, 1855, documented. Macdonald: Gounod “certainly the leading influence”; Sapho, *Ulysse* choruses, First Symphony; Bizet’s four-hand arrangement; the Symphony in C “clearly” modelled on it; autograph dated 29 October–November 1855; first performed at Basel, 26 February 1935; letter to Gounod, October 1872.
- Macdonald, *Brief Biography* (URL above).
- Macdonald, catalogue entry 1ère Symphonie: https://hdwlabs.artsci.wustl.edu/bizet/works/Symphonie_No_1.html
- Bru Zane (URL above): letter text, “Vous avez été le commencement de ma vie d’artiste. Je résulte de vous.” The edge uses Macdonald’s English, “I spring from you”.
- Limits: Macdonald says Bizet “probably” met Gounod through Zimmerman and that Gounod “is said to have” deputised in Zimmerman’s lessons; neither is stated. The key of Gounod’s symphony is not given, because no opened source gives it.

**`berlioz--bizet-pecheurs-de-perles-review-1863`** — championed, 1863, documented. Première 30 September 1863, eighteen performances; hostile press; Berlioz’s last feuilleton in the *Journal des débats* (8 October) recognised a serious talent; Bizet’s admiration of *Les Troyens à Carthage* and offer to fight a duel for it.
- Macdonald, *Brief Biography* (URL above).
- Macdonald, catalogue entry *Les Pêcheurs de perles*: https://hdwlabs.artsci.wustl.edu/bizet/works/Pecheurs_de_perles.html — performance list (30-9-1863) and review list (Berlioz, *Journal des débats*, 8-10-1863).

**`bizet--tchaikovsky-carmen-letter-1880`** — heard, 1880, documented. Vocal score by mid-1875 (Shilovsky); Opéra-Comique, 20 January 1876; “almost learnt … by heart” (letter of 24 December 1877/5 January 1878); letter to von Meck of 16–19 July 1880 (Old Style): played *Carmen* through; “in the full sense” a masterpiece; the most popular opera in the world within ten years.
- Tchaikovsky Research, Letter 1539: https://en.tchaikovsky-research.net/pages/Letter_1539 — the page carries the Russian text only; the English wording in the edge is our translation of the entry of 18 July (Old Style) («По-моему, это в полном смысле chef d’oeuvre … Я убеждён, что лет через десять «Carmen» будет самой популярной оперой в мире»).
- Tchaikovsky Research, Georges Bizet: https://en.tchaikovsky-research.net/pages/Georges_Bizet — the 1875 vocal score, Paris in January 1876, the 1878 letter. This page dates Letter 1539 “June–July 1880”; the letter’s own page gives 16/28–19/31 July, which the edge follows. (The Bizet page needed a browser-style request to fetch.)

**`bizet--nietzsche-carmen-genoa-1881`** — heard, 1881, documented. Politeama Theatre, Genoa, 27 November 1881; letter to his sister (“So strong, so impassioned, so graceful, so Southern!”); second hearing five days later; *The Case of Wagner* (1888): “for the twentieth time”, Bizet’s orchestration, “endless melody”.
- John W. Klein, “Nietzsche and Bizet”, *The Musical Quarterly* 11/4 (October 1925), pp. 482–505 (DOI 10.1093/mq/XI.4.482): scan at https://gwern.net/doc/fiction/opera/1925-klein.pdf, pp. 482–483. Klein’s translations of the letter are quoted briefly.
- Nietzsche, *The Case of Wagner*, trans. Anthony M. Ludovici (1911), Project Gutenberg eBook 25012: https://www.gutenberg.org/cache/epub/25012/pg25012.txt (section 1).

## Price (`modern.json`)

**`chadwick--price-new-england-conservatory-1903`** — studied-with, 1903, documented. New England Conservatory 1903–06, two diplomas; composition with Goodrich and Converse and private study with Chadwick.
- Rae Linda Brown, “Symphony No. 1 in E minor (1932)”, American Symphony Orchestra note, 15 April 1994: https://americansymphony.org/concert-notes/symphony-no-1-in-e-minor/ — states the private study with Chadwick, the director.
- Song of America, Florence Beatrice Price: https://songofamerica.net/composer/price-florence — private composition lessons with Chadwick.
- Huscher, Chicago Symphony Orchestra, 26 February 2024: https://chicagosymphony.org/inside-the-music/article/17666/florence-prices-symphony-no-1 — 1903 entry, two diplomas.
- Pointers only: English Wikipedia’s *Florence Price* cites Brown’s biography for study with Chadwick and Converse; Britannica returned HTTP 403 and was not opened. The earlier Price ledger (`price.md`) omitted a Chadwick claim for want of documentation; Brown’s note and Song of America supply it. The sources differ on who taught what, so the edge attributes the account to Brown.

**`dvorak--price-symphony-no-1-1931`** — modelled, 1931, documented. Huscher: syncopated bassoon opening “immediately recalls” the *New World*, four movements in the familiar sequence; Brown: Dvořák’s influence “most evident” in the first movement’s second theme; Dvořák’s American works inspired a generation; Wanamaker prize 1932; première 15 June 1933 under Stock.
- Huscher (URL above); Brown (URL above).

**`african-american-spirituals--price-fantasie-negre-1929`** — quoted, 1929, documented. *Fantasie nègre* (1929), dedicated to Margaret Bonds, takes its theme from “Sinner, Please Don’t Let This Harvest Pass”; Lara Downes on the first Fantasie; Speranza and Dunham ballet with Bonds at the piano.
- Samantha Ege, programme notes, Crossing Borders Music: https://crossingbordersmusic.org/notes/
- Arionne Nettles, WBEZ Curious City, 21 July 2022: https://www.wbez.org/curious-city/2022/07/21/who-was-florence-price (section “Legacy”).

**`marian-anderson--price-lincoln-memorial-1939`** — championed, 1939, documented. Constitution Hall refused; Lincoln Memorial concert, 9 April 1939, 75,000 people, six microphones, Vehanen; the three spirituals including Price’s arrangement; Brown on songs and arrangements written for Anderson.
- Cait Miller, Library of Congress, In The Muse, 12 May 2022: https://blogs.loc.gov/music/2022/05/marian-andersons-lincoln-memorial-moment/
- Dan Dykema, Encyclopedia of Arkansas (updated 7 April 2025): https://encyclopediaofarkansas.net/entries/florence-beatrice-smith-price-1742/ — titles the arrangement “My Soul’s Been Anchored in de Lord”; the Library of Congress prints “My Soul is Anchored in the Lord”.
- Brown (URL above).

**`price--margaret-bonds-chicago-mentoring-1932`** — taught, 1932, documented. Welcomed into the Bonds family in 1927; Estella Bonds took in Price and her daughters; Price teacher and mentor to Margaret; Fantasie nègre dedication; 1932 Wanamaker prizes; Nettles on Bonds under Price’s tutelage.
- Nettles, WBEZ (URL above); Ege (URL above); Dykema, Encyclopedia of Arkansas (URL above).
- Limits: no source dates the lessons, so the year 1932 is the Wanamaker year in which both composers won prizes. No start date for the shared household is given.

## Copland (`modern.json`)

**`nadia-boulanger--copland-fontainebleau-1921`** — studied-with, 1921, documented. Fontainebleau in May 1921; Boulanger’s harmony class; composition study from October; “I hesitated, because I had never heard of any composer who had studied with a woman”; 1924 meeting with Koussevitzky; Symphony for Organ and Orchestra, 1925, Boulanger soloist under Damrosch.
- Vivian Perlis, “The Man Behind The Music”: https://www.aaroncopland.com/about/the-man-behind-the-music/
- Michael Boriskin, Copland House timeline (1921, 1925): https://www.coplandhouse.org/aaron-copland/timeline/

**`copland--bernstein-first-meeting-1937`** — taught, 1937, documented. Meeting of 14 November 1937 (Rukeyser); *Piano Variations*; “Dear Pupil”; “the closest he ever came to having a real composition teacher”; the *El Salón México* arrangements; the Third Symphony cut.
- Michael Boriskin, “Aaron Copland at 125: A Defining Musical Friendship”, Leonard Bernstein Office, 18 November 2025: https://leonardbernstein.com/news/blog/310/aaron-copland-at-125-a-defining-musical-friendship
- Perlis (URL above): the cut as the only change Copland accepted.
- Copland, *El Salón México*, official work record (arrangements by Bernstein): https://www.aaroncopland.com/works/el-salon-mexico/
- Limits: the relationship was informal mentoring, which the claim states; the source says “many of the first performances” of the Third Symphony, and the edge follows that wording.

**`carlos-chavez--copland-el-salon-mexico-1932`** — championed, 1932, documented. Chávez arranged the 1932 visit and the first all-Copland concert (2 September, Conservatorio Nacional); took him to the dance hall; Copland’s programme note; première conducted by Chávez, Mexico City, 27 August 1937.
- Copland, *El Salón México*, official work record with Perlis’s note (URL above).
- Copland House timeline (1932, 1936; URL above).

**`william-hamilton-stepp--copland-rodeo-hoe-down-1942`** — quoted, 1942, documented. Lomax recording of Stepp’s “Bonaparte’s Retreat” (October 1937); the doubled tempo; De Mille’s request, April 1942; Ruth Crawford Seeger’s transcription in *Our Singing Country* (1941); “almost note for note” (Jabbour); “Hop Light Ladies” and “Gilderoy”; Copland probably never heard the field recording; *Rodeo* première, New York, 16 October 1942, Ballet Russe de Monte Carlo.
- Stephen Winick, Library of Congress, Folklife Today, 25 November 2013: https://blogs.loc.gov/folklife/2013/11/bill-stepp-aaron-copland-and-bonapartes-retreat/
- David S. Lynch, Library of Congress National Recording Registry essay: https://www.loc.gov/static/programs/national-recording-preservation-board/documents/BonapartesRetreat.pdf (gives April 1875 as Stepp’s birth and 26 October for the recording; Winick says only 1937, so the edge says “October 1937”).
- Copland, *Rodeo*, official work record: https://www.aaroncopland.com/works/rodeo-ballet/
- Stepp’s dates (1875–1957): Find a Grave memorial, https://www.findagrave.com/memorial/77200856/william_hamilton-stepp (opened); the Lynch essay and the Kentucky historical marker (https://www.hmdb.org/m.asp?m=313170, opened) confirm birth in 1875.

## Gershwin (`modern.json`)

**`charles-hambitzer--gershwin-piano-lessons-1913`** — studied-with, 1913, documented. “The first great musical influence in my life”; lessons from about early 1913 until Hambitzer’s death in 1918, frequency uncertain; concerts of 1912–14; Remick, May 1914.
- Library of Congress Music Division, George and Ira Gershwin Collection, finding aid (revised February 2025): https://tile.loc.gov/storage-services/service/gdc/gdcfindingaidpdfs/mu010014/mu010014.pdf, biographical chronology (read from the PDF text).
- Hambitzer’s birth year is not given there. English Wikipedia (pointer, https://en.wikipedia.org/wiki/Charles_Hambitzer) gives “1878 or 1881”, so the figure reads “c. 1878–1918”.

**`dubose-heyward--gershwin-porgy-and-bess-1933`** — set-text, 1933, documented. October 1926 reading of *Porgy*; November 1933 start after the draft libretto; twenty months (eleven composing, nine orchestrating); Boston 30 September and New York 10 October 1935; 124 performances; Duncan and Brown.
- LOC finding aid (URL above), chronology entries for 1926, 1933 and 1935; Heyward’s dates, 1885–1940, from its name heading.
- Gershwin estate, *Porgy and Bess*: https://gershwin.com/publications/porgy-and-bess/ (credits; the novel and the Heywards’ play).

## Cage (`modern.json`)

**`schoenberg--cage-lessons-1935`** — studied-with, 1935, documented. Buhlig, Cowell and Weiss; Schoenberg’s free teaching; group sessions from 18 March 1935; USC and UCLA classes; the “wall” exchange; the Cornish School rhythmic structure as a response to Schoenberg’s structural harmony.
- John Cage, “An Autobiographical Statement” (1990), John Cage Trust: https://johncage.org/cage-autobiographical-statement
- Paul van Emmerik, A John Cage Compendium, Chronology 1912–1971: https://cagecompendium.org/chronology/1912-1971/ (entries for 1934–35 and “18 March 1935–1937”).
- Left out: Peter Yates’s report of Schoenberg’s remark “an inventor — of genius”, which is second-hand.

**`satie--cage-black-mountain-festival-1948`** — heard, 1948, documented. Satie’s music met in Paris in 1930; Black Mountain, July–August 1948: twenty-five concerts, *Defense of Satie* (Satie against Beethoven), *Le Piège de Méduse* with Fuller and Elaine de Kooning, Cunningham’s “Monkey Dances” as Jonas; *Vexations* in *Contrepoints* no. 6 (1949); the first complete performance, 9–10 September 1963, Pocket Theatre.
- Cage, “An Autobiographical Statement” (URL above); Compendium chronology (entries for June 1930, 1 July–25 August 1948, 1949, 9–10 September 1963; URL above).
- The direction is Satie to Cage as the brief asks; `championed` would run Cage to Satie in this batch’s convention, so the kind is `heard`.

## Figures added

`romantic.json`: `gounod` (1818–1893), `halevy` (1799–1862, teacher); `schiller` and `nietzsche` repeated with fields identical to their other batches.
`modern.json`: `african-american-spirituals`, `marian-anderson` (1897–1993), `margaret-bonds` (1913–1972, from Ege’s notes), `chadwick` (1854–1931), `nadia-boulanger` (1887–1979), `carlos-chavez` (1899–1978), `william-hamilton-stepp`, `charles-hambitzer`, `dubose-heyward`. `bernstein` already existed in the batch.
Dates for Gounod, Halévy, Anderson, Chadwick, Boulanger and Chávez come from English Wikipedia’s summary lines (pointer only); they were not checked against a scholarly source.

## Existing edges changed

Plain mentions of John Cage and George Gershwin in `claim` text now link to `[[cage|John Cage]]` and `[[gershwin|George Gershwin]]` on first mention: `cage--boulez-sonatas-interludes`, `cage--feldman-webern-lobby`, `rothko--feldman-rothko-chapel`, `cage--adams-silence` (modern), `jazz--ravel-violin-sonata-blues` (favourites). `gershwin--ravel-new-york-meeting` already linked him.

## Result

Edges per composer after this change: Rossini 5 (4 documented, 1 disputed), Bizet 6 (including the Rossini edge), Price 5, Copland 4, Gershwin 3, Cage 5. Every `[[…]]` target in all four batches resolves.
