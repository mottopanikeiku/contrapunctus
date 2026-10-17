use std::{collections::{BTreeMap, HashMap}, fmt::{self, Write}, rc::Rc};

use roxmltree::{Document, Node};
use svgtypes::{SimplePathSegment, SimplifyingPathParser, Transform};

use crate::geometry::{self, Bars, Bounds, Note, Rule, System, Vertical, compose, point, round};

type Result<T, E = Box<dyn std::error::Error>> = std::result::Result<T, E>;

// SVG permits omitted leading zeroes. Integer hundredths avoid a temporary
// allocation for every coordinate and keep serialisation deterministic.
struct Num(f64);
impl fmt::Display for Num {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        let n = (self.0 * 100.0).round() as i64;
        if n < 0 { f.write_str("-")?; }
        let n = n.unsigned_abs();
        if n >= 100 || n == 0 { write!(f, "{}", n / 100)?; }
        let fraction = n % 100;
        if fraction > 0 {
            if fraction % 10 == 0 { write!(f, ".{}", fraction / 10)?; }
            else { write!(f, ".{fraction:02}")?; }
        }
        Ok(())
    }
}

#[derive(Clone, Copy, Default)]
struct Mark<'a> {
    class: &'a str,
    bar: &'a str,
    pos: &'a str,
}

#[derive(Clone, Copy)]
struct Context<'a> {
    transform: Transform,
    mark: Option<Mark<'a>>,
    staff: bool,
    barline: bool,
}

#[derive(Clone, Copy, Eq, PartialEq, Ord, PartialOrd, Default)]
struct Paint {
    no_fill: bool,
    stroke: Option<i64>,
    round: bool,
}

impl Paint {
    fn from_node(node: Node<'_, '_>, t: Transform) -> Result<Self> {
        let stroke = node.attribute("stroke").filter(|s| *s != "none");
        Ok(Self {
            no_fill: node.attribute("fill") == Some("none") || node.has_tag_name("line"),
            stroke: if stroke.is_some() {
                Some((number(node, "stroke-width", 1.0)? * t.a.hypot(t.b) * 100.0).round() as i64)
            } else { None },
            round: node.attribute("stroke-linecap") == Some("round"),
        })
    }

    fn attributes(self, out: &mut String) {
        if self.no_fill { out.push_str(" fill=\"none\""); }
        if let Some(width) = self.stroke {
            write!(out, " stroke=\"currentColor\" stroke-width=\"{}\"", Num(width as f64 / 100.0)).unwrap();
            if self.round { out.push_str(" stroke-linecap=\"round\" stroke-linejoin=\"round\""); }
        }
    }
}

struct Glyph {
    path: Rc<str>,
    bounds: Bounds,
    count: usize,
}

enum Draw<'a> {
    Glyph { id: usize, x: f64, y: f64, paint: Paint, mark: Option<Mark<'a>> },
    Element(String),
}

#[derive(Hash, Eq, PartialEq)]
struct PathKey<'a> {
    path: &'a str,
    linear: [u64; 4],
}

struct Page<'a> {
    width: f64,
    rules: Vec<Rule>,
    verticals: Vec<Vertical>,
    notes: Vec<Note<'a>>,
    glyphs: Vec<Glyph>,
    path_cache: HashMap<PathKey<'a>, usize>,
    outlines: HashMap<Rc<str>, usize>,
    draws: Vec<Draw<'a>>,
    batches: BTreeMap<Paint, String>,
    scratch: String,
}

pub struct PackedPage {
    pub svg: String,
    pub width: f64,
    pub height: f64,
    pub bars: Bars,
    pub systems: Vec<System>,
    pub marks: usize,
}

pub fn pack(source: &str, page_index: usize, prefix: &str) -> Result<PackedPage> {
    let document = Document::parse(source)?;
    let root = document.root_element();
    if !root.has_tag_name("svg") { return Err("input is not an SVG document".into()); }
    let vb: Vec<f64> = root.attribute("viewBox").ok_or("SVG has no viewBox")?
        .split(|c: char| c.is_whitespace() || c == ',').filter(|s| !s.is_empty())
        .map(str::parse).collect::<std::result::Result<_, _>>()?;
    if vb.len() != 4 || vb.iter().any(|n| !n.is_finite()) || vb[2] <= 0.0 || vb[3] <= 0.0 {
        return Err("invalid SVG viewBox".into());
    }
    let mut page = Page {
        width: vb[2], rules: Vec::new(), verticals: Vec::new(), notes: Vec::new(),
        glyphs: Vec::new(), path_cache: HashMap::new(), outlines: HashMap::new(),
        draws: Vec::new(), batches: BTreeMap::new(), scratch: String::with_capacity(128),
    };
    let context = Context { transform: Transform::default(), mark: None, staff: false, barline: false };
    page.walk(root, context)?;
    let geometry::PageGeometry { bars, systems } = geometry::bar_boxes(page_index, &mut page.rules, &page.verticals, &page.notes)?;
    let mut svg = String::with_capacity(source.len() / 4);
    write!(svg, "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"{} {} {} {}\" fill=\"currentColor\">",
        Num(vb[0]), Num(vb[1]), Num(vb[2]), Num(vb[3])).unwrap();
    svg.push_str("<defs>");
    for (id, glyph) in page.glyphs.iter().enumerate().filter(|(_, g)| g.count > 1) {
        write!(svg, "<path id=\"{prefix}-{id}\" d=\"{}\"/>", glyph.path).unwrap();
    }
    svg.push_str("</defs>");
    // All source ink is opaque currentColor. Coalescing equal-paint geometric
    // primitives leaves their appearance unchanged and removes thousands of DOM nodes.
    for (paint, path) in &page.batches {
        svg.push_str("<path");
        paint.attributes(&mut svg);
        write!(svg, " d=\"{path}\"/>").unwrap();
    }
    for draw in &page.draws {
        match draw {
            Draw::Element(element) => svg.push_str(element),
            Draw::Glyph { id, x, y, paint, mark } => {
                let glyph = &page.glyphs[*id];
                if glyph.count > 1 {
                    write!(svg, "<use href=\"#{prefix}-{id}\" x=\"{}\" y=\"{}\"", Num(*x), Num(*y)).unwrap();
                } else {
                    write!(svg, "<path d=\"{}\" transform=\"translate({} {})\"", glyph.path, Num(*x), Num(*y)).unwrap();
                }
                paint.attributes(&mut svg);
                mark_attributes(*mark, &mut svg);
                svg.push_str("/>");
            }
        }
    }
    svg.push_str("</svg>\n");
    let marks = root.descendants().filter(|n| n.attribute("data-bar").is_some()).count();
    for node in root.descendants().filter(|n| n.attribute("data-bar").is_some()) {
        let bar = node.attribute("data-bar").unwrap();
        if !bars.contains_key(bar) { return Err(format!("page {}: bar {bar} has no box", page_index + 1).into()); }
    }
    Ok(PackedPage { svg, width: round(vb[2]), height: round(vb[3]), bars, systems, marks })
}

impl<'a> Page<'a> {
    fn walk(&mut self, node: Node<'a, '_>, mut context: Context<'a>) -> Result<()> {
        if !node.is_element() { return Ok(()); }
        let tag = node.tag_name().name();
        if matches!(tag, "metadata" | "title" | "desc" | "style") { return Ok(()); }
        if let Some(transform) = node.attribute("transform") {
            context.transform = compose(context.transform, transform.parse()?);
        }
        if let Some(class) = node.attribute("class") {
            context.staff |= class.split_whitespace().any(|c| c == "staff");
            context.barline |= class.split_whitespace().any(|c| c == "barline");
            if class == "nh" || class == "rs" {
                context.mark = Some(Mark {
                    class, bar: node.attribute("data-bar").ok_or("marked glyph has no data-bar")?,
                    pos: node.attribute("data-pos").ok_or("marked glyph has no data-pos")?,
                });
            }
        }
        match tag {
            "svg" | "g" | "a" => {
                for child in node.children() { self.walk(child, context)?; }
            }
            "path" => self.path(node, context)?,
            "rect" => self.rect(node, context)?,
            "line" | "polygon" => self.lines(node, context)?,
            "text" => self.text(node, context)?,
            other => return Err(format!("unsupported LilyPond SVG element <{other}>").into()),
        }
        Ok(())
    }

    fn note(&mut self, mark: Option<Mark<'a>>, bounds: Bounds) {
        if let Some(mark) = mark {
            self.notes.push(Note { bar: mark.bar, bounds });
        }
    }

    fn path(&mut self, node: Node<'a, '_>, context: Context<'a>) -> Result<()> {
        let t = context.transform;
        let raw = node.attribute("d").ok_or("path has no d")?;
        let key = PathKey { path: raw, linear: [t.a.to_bits(), t.b.to_bits(), t.c.to_bits(), t.d.to_bits()] };
        let id = if let Some(&id) = self.path_cache.get(&key) { id } else {
            let linear = Transform::new(t.a, t.b, t.c, t.d, 0.0, 0.0);
            let (path, bounds) = path_data(raw, linear)?;
            let id = if let Some(&id) = self.outlines.get(path.as_str()) { id } else {
                let id = self.glyphs.len();
                let path: Rc<str> = path.into();
                self.outlines.insert(Rc::clone(&path), id);
                self.glyphs.push(Glyph { path, bounds, count: 0 });
                id
            };
            self.path_cache.insert(key, id);
            id
        };
        self.glyphs[id].count += 1;
        let bounds = self.glyphs[id].bounds.translated(t.e, t.f);
        self.note(context.mark, bounds);
        self.draws.push(Draw::Glyph { id, x: t.e, y: t.f, paint: Paint::from_node(node, t)?, mark: context.mark });
        Ok(())
    }

    fn rect(&mut self, node: Node<'a, '_>, context: Context<'a>) -> Result<()> {
        let t = context.transform;
        if t.b != 0.0 || t.c != 0.0 || t.a <= 0.0 || t.d <= 0.0 {
            return Err("rotated/reflected LilyPond rectangle is unsupported".into());
        }
        let (x, y) = point(t, number(node, "x", 0.0)?, number(node, "y", 0.0)?);
        let w = number(node, "width", 0.0)? * t.a;
        let h = number(node, "height", 0.0)? * t.d;
        let b = Bounds { x, y, right: x + w, bottom: y + h };
        self.note(context.mark, b);
        if context.mark.is_none() && w <= 1.0 && h >= 3.0 {
            self.verticals.push(Vertical { bounds: b, barline: context.barline });
        }
        let ry = number(node, "ry", number(node, "rx", 0.0)?)? * t.d;
        let rx = number(node, "rx", ry / t.d)? * t.a;
        let rx = rx.min(w / 2.0);
        let ry = ry.min(h / 2.0);
        let mut paint = Paint::from_node(node, t)?;
        let mut path = std::mem::take(&mut self.scratch);
        path.clear();
        if rx > 0.0 && ry > 0.0 && paint.stroke.is_none()
            && (rx - ry).abs() < 0.0001 && (rx * 2.0 - w.min(h)).abs() < 0.001 {
            // LilyPond's stems and ledger lines are capsules. Express them as
            // round-capped strokes instead of four-corner rounded rectangles.
            paint = Paint { no_fill: true, stroke: Some((w.min(h) * 100.0).round() as i64), round: true };
            if h >= w {
                write!(path, "M{} {}V{}", Num(x + w / 2.0), Num(y + ry), Num(y + h - ry)).unwrap();
            } else {
                write!(path, "M{} {}H{}", Num(x + rx), Num(y + h / 2.0), Num(x + w - rx)).unwrap();
            }
        } else if rx > 0.0 && ry > 0.0 {
            write!(path, "M{} {}H{}A{} {} 0 0 1 {} {}V{}A{} {} 0 0 1 {} {}H{}A{} {} 0 0 1 {} {}V{}A{} {} 0 0 1 {} {}Z",
                Num(x + rx), Num(y), Num(x + w - rx), Num(rx), Num(ry), Num(x + w), Num(y + ry),
                Num(y + h - ry), Num(rx), Num(ry), Num(x + w - rx), Num(y + h), Num(x + rx),
                Num(rx), Num(ry), Num(x), Num(y + h - ry), Num(y + ry), Num(rx), Num(ry), Num(x + rx), Num(y)).unwrap();
        } else {
            write!(path, "M{} {}h{}v{}h{}Z", Num(x), Num(y), Num(w), Num(h), Num(-w)).unwrap();
        }
        self.primitive(path, paint, context.mark);
        Ok(())
    }

    fn lines(&mut self, node: Node<'a, '_>, context: Context<'a>) -> Result<()> {
        let t = context.transform;
        let mut path = std::mem::take(&mut self.scratch);
        path.clear();
        let mut bounds = Bounds::empty();
        if node.has_tag_name("line") {
            let a = point(t, number(node, "x1", 0.0)?, number(node, "y1", 0.0)?);
            let b = point(t, number(node, "x2", 0.0)?, number(node, "y2", 0.0)?);
            bounds.point(a.0, a.1); bounds.point(b.0, b.1);
            if (a.1 - b.1).abs() < 0.01 && (a.0 - b.0).abs() > self.width * 0.25 {
                self.rules.push(Rule { x: a.0.min(b.0), right: a.0.max(b.0), y: a.1, staff: context.staff });
            }
            write!(path, "M{} {}", Num(a.0), Num(a.1)).unwrap();
            line_to(&mut path, a, b);
        } else {
            for (i, (x, y)) in svgtypes::PointsParser::from(node.attribute("points").ok_or("polygon has no points")?).enumerate() {
                let p = point(t, x, y);
                bounds.point(p.0, p.1);
                write!(path, "{}{} {}", if i == 0 { 'M' } else { 'L' }, Num(p.0), Num(p.1)).unwrap();
            }
            path.push('Z');
        }
        self.note(context.mark, bounds);
        self.primitive(path, Paint::from_node(node, t)?, context.mark);
        Ok(())
    }

    fn primitive(&mut self, path: String, paint: Paint, mark: Option<Mark<'a>>) {
        if mark.is_none() {
            self.batches.entry(paint).or_default().push_str(&path);
        } else {
            let mut out = String::from("<path");
            paint.attributes(&mut out);
            mark_attributes(mark, &mut out);
            write!(out, " d=\"{path}\"/>").unwrap();
            self.draws.push(Draw::Element(out));
        }
        self.scratch = path;
    }

    fn text(&mut self, node: Node<'a, '_>, context: Context<'a>) -> Result<()> {
        let t = context.transform;
        let mut out = String::from("<text");
        if t.a == 1.0 && t.b == 0.0 && t.c == 0.0 && t.d == 1.0 {
            write!(out, " x=\"{}\" y=\"{}\"", Num(t.e + number(node, "x", 0.0)?), Num(t.f + number(node, "y", 0.0)?)).unwrap();
        } else {
            write!(out, " transform=\"matrix({} {} {} {} {} {})\"", Num(t.a), Num(t.b), Num(t.c), Num(t.d), Num(t.e), Num(t.f)).unwrap();
        }
        text_attributes(node, &mut out)?;
        out.push_str(" style=\"white-space:pre\">");
        text_children(node, &mut out)?;
        out.push_str("</text>");
        self.draws.push(Draw::Element(out));
        Ok(())
    }
}

fn text_children(node: Node<'_, '_>, out: &mut String) -> Result<()> {
    for child in node.children() {
        if child.is_text() {
            let text = child.text().unwrap_or("");
            // Indentation around LilyPond's tspans is XML formatting, not music
            // text. Preserve deliberate spacing inside the spans themselves.
            if node.has_tag_name("tspan") || !text.trim().is_empty() { escape(text, out); }
        } else if child.has_tag_name("tspan") {
            out.push_str("<tspan");
            text_attributes(child, out)?;
            for name in ["x", "y", "dx", "dy"] {
                if child.attribute(name).is_some() { write!(out, " {name}=\"{}\"", Num(number(child, name, 0.0)?)).unwrap(); }
            }
            out.push('>'); text_children(child, out)?; out.push_str("</tspan>");
        } else if child.has_tag_name("a") { text_children(child, out)?; }
    }
    Ok(())
}

fn text_attributes(node: Node<'_, '_>, out: &mut String) -> Result<()> {
    for name in ["font-family", "font-style", "font-weight", "text-anchor"] {
        if let Some(value) = node.attribute(name) {
            write!(out, " {name}=\"").unwrap(); escape(value, out); out.push('"');
        }
    }
    if node.attribute("font-size").is_some() {
        write!(out, " font-size=\"{}\"", Num(number(node, "font-size", 0.0)?)).unwrap();
    }
    Ok(())
}

fn number(node: Node<'_, '_>, name: &str, default: f64) -> Result<f64> {
    let n = node.attribute(name).map(str::parse).transpose()?.unwrap_or(default);
    if !f64::is_finite(n) { return Err(format!("non-finite {name}").into()); }
    Ok(n)
}

fn mark_attributes(mark: Option<Mark<'_>>, out: &mut String) {
    if let Some(mark) = mark {
        write!(out, " class=\"{}\" data-bar=\"", mark.class).unwrap();
        escape(mark.bar, out);
        out.push_str("\" data-pos=\""); escape(mark.pos, out); out.push('"');
    }
}

fn escape(value: &str, out: &mut String) {
    for ch in value.chars() {
        match ch {
            '&' => out.push_str("&amp;"), '<' => out.push_str("&lt;"),
            '>' => out.push_str("&gt;"), '"' => out.push_str("&quot;"),
            _ => out.push(ch),
        }
    }
}

fn line_to(out: &mut String, a: (f64, f64), b: (f64, f64)) {
    if round(a.1) == round(b.1) { write!(out, "H{}", Num(b.0)).unwrap(); }
    else if round(a.0) == round(b.0) { write!(out, "V{}", Num(b.1)).unwrap(); }
    else { write!(out, "L{} {}", Num(b.0), Num(b.1)).unwrap(); }
}

fn path_data(raw: &str, t: Transform) -> Result<(String, Bounds)> {
    let mut out = String::with_capacity(raw.len());
    let mut bounds = Bounds::empty();
    let mut last = (0.0, 0.0);
    let mut start = last;
    for segment in SimplifyingPathParser::from(raw) {
        match segment? {
            SimplePathSegment::MoveTo { x, y } => {
                last = point(t, x, y); start = last; bounds.point(last.0, last.1);
                write!(out, "M{} {}", Num(last.0), Num(last.1)).unwrap();
            }
            SimplePathSegment::LineTo { x, y } => {
                let p = point(t, x, y); bounds.point(p.0, p.1);
                line_to(&mut out, last, p); last = p;
            }
            SimplePathSegment::CurveTo { x1, y1, x2, y2, x, y } => {
                let a = point(t, x1, y1); let b = point(t, x2, y2); let p = point(t, x, y);
                for (x, y) in [a, b, p] { bounds.point(x, y); }
                write!(out, "C{} {} {} {} {} {}", Num(a.0), Num(a.1), Num(b.0), Num(b.1), Num(p.0), Num(p.1)).unwrap();
                last = p;
            }
            SimplePathSegment::Quadratic { x1, y1, x, y } => {
                let a = point(t, x1, y1); let p = point(t, x, y);
                bounds.point(a.0, a.1); bounds.point(p.0, p.1);
                write!(out, "Q{} {} {} {}", Num(a.0), Num(a.1), Num(p.0), Num(p.1)).unwrap();
                last = p;
            }
            SimplePathSegment::ClosePath => { out.push('Z'); last = start; }
        }
    }
    if !bounds.x.is_finite() { return Err("empty glyph path".into()); }
    Ok((out, bounds))
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn bakes_small_glyph_scales_before_rounding() {
        let (path, bounds) = path_data("M0 0L250 125L250 -125z", "scale(0.004,-0.004)".parse().unwrap()).unwrap();
        assert_eq!(path, "M0 0L1 -.5V.5Z");
        assert_eq!(bounds.right, 1.0);
    }

    #[test]
    fn decimal_output_is_short_and_deterministic() {
        assert_eq!(format!("{} {} {} {}", Num(1.234), Num(-0.006), Num(0.0), Num(10.10)), "1.23 -.01 0 10.1");
    }
}
