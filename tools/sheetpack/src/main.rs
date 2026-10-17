mod geometry;
mod svg;

use std::{env, fs, io::BufReader, path::{Path, PathBuf}, process::ExitCode};

use serde::{Deserialize, Serialize};

use geometry::Bars;

type Result<T, E = Box<dyn std::error::Error>> = std::result::Result<T, E>;

#[derive(Serialize)]
struct PageIndex {
    src: String,
    w: f64,
    h: f64,
}

#[derive(Default, Serialize)]
struct Index {
    pages: Vec<PageIndex>,
    bars: Bars,
    #[serde(skip_serializing_if = "Vec::is_empty")]
    derived: Vec<String>,
}

#[derive(Deserialize)]
struct Score {
    bars: Vec<ScoreBar>,
}

#[derive(Deserialize)]
struct ScoreBar {
    n: String,
}

fn main() -> ExitCode {
    match run() {
        Ok(()) => ExitCode::SUCCESS,
        Err(error) => { eprintln!("sheetpack: {error}"); ExitCode::FAILURE }
    }
}

fn run() -> Result<()> {
    let mut args = env::args_os().skip(1);
    let Some(first) = args.next() else { return Err("usage: sheetpack --out DIRECTORY [--score SCORE.json] PAGE.svg [PAGE.svg ...]".into()); };
    if first == "--help" || first == "-h" {
        println!("sheetpack --out DIRECTORY [--score SCORE.json] PAGE.svg [PAGE.svg ...]\n\nPack unstacked LilyPond SVG pages, in the supplied page order.\n--score derives boxes for unmarked bars required by score.json.\nWrites p1.svg … pN.svg and index.json; replaces DIRECTORY after all pages and required bars pass.");
        return Ok(());
    }
    if first != "--out" { return Err("first argument must be --out".into()); }
    let output = PathBuf::from(args.next().ok_or("--out needs a directory")?);
    let mut inputs = Vec::new();
    let mut score = None;
    while let Some(arg) = args.next() {
        if arg == "--score" {
            score = Some(PathBuf::from(args.next().ok_or("--score needs a score.json path")?));
        } else {
            inputs.push(PathBuf::from(arg));
        }
    }
    if inputs.is_empty() { return Err("supply at least one unstacked SVG page".into()); }
    let parent = output.parent().filter(|p| !p.as_os_str().is_empty()).unwrap_or(Path::new("."));
    fs::create_dir_all(parent)?;
    let stem = output.file_name().ok_or("output must name a directory")?.to_string_lossy();
    let staging = parent.join(format!(".{stem}-sheetpack-{}", std::process::id()));
    fs::create_dir(&staging)?;
    let result = build(&inputs, &staging, &output, score.as_deref());
    if let Err(error) = result {
        let _ = fs::remove_dir_all(&staging);
        return Err(error);
    }
    // Keep the previous pack intact if any input page or bar index fails.
    let previous = parent.join(format!(".{stem}-previous-{}", std::process::id()));
    let replacing = output.exists();
    if replacing { fs::rename(&output, &previous)?; }
    if let Err(error) = fs::rename(&staging, &output) {
        if replacing { fs::rename(&previous, &output)?; }
        let _ = fs::remove_dir_all(&staging);
        return Err(error.into());
    }
    if replacing { fs::remove_dir_all(previous)?; }
    Ok(())
}

fn build(inputs: &[PathBuf], staging: &Path, output: &Path, score: Option<&Path>) -> Result<()> {
    let mut index = Index::default();
    let mut systems = Vec::new();
    let required: Option<Score> = score.map(|path| -> Result<Score> {
        Ok(serde_json::from_reader(BufReader::new(fs::File::open(path)?))?)
    }).transpose()?;
    let mut input_bytes = 0;
    let mut output_bytes = 0;
    let mut marks = 0;
    // Namespace definitions by piece and page: several inline pages may share a
    // document, so bare "glyph0" IDs would resolve against the wrong SVG.
    let piece = output.parent().and_then(Path::file_name).unwrap_or_default().to_string_lossy();
    let hash = piece.bytes().fold(2_166_136_261_u32, |hash, byte| (hash ^ u32::from(byte)).wrapping_mul(16_777_619));
    for (page, input) in inputs.iter().enumerate() {
        let source = fs::read_to_string(input)?;
        input_bytes += source.len();
        let packed = svg::pack(&source, page, &format!("s{hash:x}p{}", page + 1))
            .map_err(|error| format!("{}: {error}", input.display()))?;
        let src = format!("p{}.svg", page + 1);
        output_bytes += packed.svg.len();
        marks += packed.marks;
        fs::write(staging.join(&src), packed.svg)?;
        index.pages.push(PageIndex { src, w: packed.width, h: packed.height });
        for (bar, boxes) in packed.bars { index.bars.entry(bar).or_default().extend(boxes); }
        systems.extend(packed.systems);
    }
    if let Some(score) = required {
        index.derived = geometry::derive_missing(&mut index.bars, &systems, score.bars.iter().map(|bar| bar.n.as_str()))?;
    }
    let json = serde_json::to_vec(&index)?;
    output_bytes += json.len();
    fs::write(staging.join("index.json"), json)?;
    println!("{}: {} pages, {} bars ({} derived), {marks} marked glyphs; {input_bytes} → {output_bytes} bytes (including index)",
        output.display(), index.pages.len(), index.bars.len(), index.derived.len());
    Ok(())
}
