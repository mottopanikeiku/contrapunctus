# Contrapunctus

An illustrated atlas of 80 classical composers, with historical recordings, scores, paintings and maps.

[![The Contrapunctus home page over Vermeer's The Music Lesson](assets/hero.webp)](https://mottopanikeiku.github.io/contrapunctus/)

**[Open the atlas: mottopanikeiku.github.io/contrapunctus](https://mottopanikeiku.github.io/contrapunctus/)**

<p>
<img alt="The Concert Hall playing Gregorian chant over a spectrogram" src="assets/hall.webp" width="32%">
<img alt="The Web of Influence, a field of composer portraits and their connections" src="assets/influence.webp" width="32%">
<img alt="The Map, showing where composers lived in Vienna in 1805" src="assets/map.webp" width="32%">
</p>

## What's in it

- [The Concert Hall](https://mottopanikeiku.github.io/contrapunctus/hall.html): 386 recordings, about 48 hours, played in birth order from plainchant on. Notes appear as the music reaches them, and some pieces follow an engraved score bar by bar.
- [The Web of Influence](https://mottopanikeiku.github.io/contrapunctus/influence.html): 343 sourced links between composers, teachers, performers, painters and poets.
- [The Map](https://mottopanikeiku.github.io/contrapunctus/atlas-map.html): where composers lived, travelled and premiered, year by year from 1680 to 1990.
- [Composers](https://mottopanikeiku.github.io/contrapunctus/composers/index.html): biographies drawn from letters and memoirs, with playable notation examples and related art.
- [Journeys](https://mottopanikeiku.github.io/contrapunctus/journeys/index.html) and [performer comparisons](https://mottopanikeiku.github.io/contrapunctus/compare/index.html): six guided sequences, and the same passage in different recordings.
- A workshop on counterpoint through spectralism, a glossary, a timeline and a gallery. Press `/` to search.

## Run it

Node 22.12 or newer. The finished site is checked in under `docs/`, and GitHub Pages serves that folder straight from `main`.

```sh
npm ci
npm run serve
```

`npm run build` regenerates `docs/` from `content/` and `src/`, and `npm run validate` checks the content. Edit the sources, not the generated HTML. Writing rules are in [AUTHORING.md](AUTHORING.md), recording notes in [LISTENING.md](LISTENING.md), data formats in [CONTENT.md](CONTENT.md).

## Credits

- Recordings come from Wikimedia Commons and the Internet Archive under the public-domain or Creative Commons terms listed for each one. Where the Hall can't stream a piece, the composer page links to the artist's own channel.
- Paintings and portraits come from Wikimedia Commons; the [credits page](https://mottopanikeiku.github.io/contrapunctus/credits.html) gives source and licence for every image. The home page shows Vermeer's *The Music Lesson*.
- Scores use encodings from Mutopia, OpenScore and the Fryderyk Chopin Institute's Chopin First Editions Online, each under its own licence.
- [abcjs](https://abcjs.net) (MIT) renders the notation examples, the fonts are SIL OFL, and map outlines are public-domain [Natural Earth](https://www.naturalearthdata.com/about/terms-of-use/).

The repository has no project-wide licence. The media and third-party licences above apply to their own files.
