use std::collections::BTreeMap;

use serde::Serialize;
use svgtypes::Transform;

#[derive(Clone, Copy, Debug)]
pub struct Bounds {
    pub x: f64,
    pub y: f64,
    pub right: f64,
    pub bottom: f64,
}

impl Bounds {
    pub fn empty() -> Self {
        Self { x: f64::INFINITY, y: f64::INFINITY, right: f64::NEG_INFINITY, bottom: f64::NEG_INFINITY }
    }

    pub fn point(&mut self, x: f64, y: f64) {
        self.x = self.x.min(x);
        self.y = self.y.min(y);
        self.right = self.right.max(x);
        self.bottom = self.bottom.max(y);
    }

    pub fn translated(self, x: f64, y: f64) -> Self {
        Self { x: self.x + x, y: self.y + y, right: self.right + x, bottom: self.bottom + y }
    }

    fn union(&mut self, other: Self) {
        self.point(other.x, other.y);
        self.point(other.right, other.bottom);
    }
}

pub fn compose(p: Transform, t: Transform) -> Transform {
    Transform::new(
        p.a * t.a + p.c * t.b, p.b * t.a + p.d * t.b,
        p.a * t.c + p.c * t.d, p.b * t.c + p.d * t.d,
        p.a * t.e + p.c * t.f + p.e, p.b * t.e + p.d * t.f + p.f,
    )
}

pub fn point(t: Transform, x: f64, y: f64) -> (f64, f64) {
    (t.a * x + t.c * y + t.e, t.b * x + t.d * y + t.f)
}

pub fn round(n: f64) -> f64 {
    let n = (n * 100.0).round() / 100.0;
    if n == 0.0 { 0.0 } else { n }
}

#[derive(Debug)]
pub struct Rule {
    pub x: f64,
    pub right: f64,
    pub y: f64,
    pub staff: bool,
}

#[derive(Debug)]
pub struct Vertical {
    pub bounds: Bounds,
    pub barline: bool,
}

#[derive(Debug)]
pub struct Note<'a> {
    pub bar: &'a str,
    pub bounds: Bounds,
}

// A tuple deliberately serialises as the public [pageIndex, x, y, w, h] array.
#[derive(Debug, Serialize)]
pub struct BarBox(pub usize, pub f64, pub f64, pub f64, pub f64);

pub type Bars = BTreeMap<String, Vec<BarBox>>;

pub struct System {
    pub page: usize,
    pub bounds: Bounds,
    pub staff_space: f64,
    pub barlines: Vec<f64>,
}

pub struct PageGeometry {
    pub bars: Bars,
    pub systems: Vec<System>,
}

/// Staff rules, rather than note pitches, determine the vertical extent. The
/// opening system barline joins all staves, including silent orchestral parts.
pub fn bar_boxes(
    page: usize,
    rules: &mut [Rule],
    verticals: &[Vertical],
    notes: &[Note<'_>],
) -> Result<PageGeometry, String> {
    rules.sort_by(|a, b| a.y.total_cmp(&b.y));
    let tagged = rules.iter().any(|r| r.staff);
    let lines: Vec<_> = rules.iter().filter(|r| !tagged || r.staff).collect();
    let mut staves: Vec<Bounds> = Vec::new();
    let mut i = 0;
    while i + 4 < lines.len() {
        let first = lines[i];
        let spacing = lines[i + 1].y - first.y;
        let staff = spacing > 0.2 && spacing < 3.0 && (1..5).all(|j| {
            let line = lines[i + j];
            (line.y - first.y - spacing * j as f64).abs() < 0.03
                && (line.x - first.x).abs() < 0.03
                && (line.right - first.right).abs() < 0.03
        });
        if staff {
            staves.push(Bounds { x: first.x, y: first.y, right: first.right, bottom: lines[i + 4].y });
            i += 5;
        } else {
            i += 1;
        }
    }
    if staves.is_empty() {
        return Err(format!("page {}: no five-line staves found", page + 1));
    }

    let mut systems: Vec<(Bounds, Vec<Bounds>)> = Vec::new();
    for staff in staves {
        let joins = systems.last().is_some_and(|(system, members)| {
            let previous = members.last().unwrap();
            verticals.iter().any(|v| {
                let b = v.bounds;
                b.x >= system.x - 2.0 && b.x <= system.x + 0.3
                    && b.y <= previous.y + 0.2 && b.bottom >= staff.bottom - 0.2
                    && (staff.x - previous.x).abs() < 0.3
            })
        });
        if joins {
            let (system, members) = systems.last_mut().unwrap();
            system.union(staff);
            members.push(staff);
        } else {
            systems.push((staff, vec![staff]));
        }
    }

    let mut groups = vec![BTreeMap::<&str, Bounds>::new(); systems.len()];
    for note in notes {
        let y = (note.bounds.y + note.bounds.bottom) / 2.0;
        let nearest = systems.iter().enumerate().min_by(|(_, (a, _)), (_, (b, _))| {
            distance(y, *a).total_cmp(&distance(y, *b))
        }).unwrap().0;
        groups[nearest].entry(note.bar).and_modify(|b| b.union(note.bounds)).or_insert(note.bounds);
    }

    let mut bars: Bars = BTreeMap::new();
    let mut geometry = Vec::with_capacity(systems.len());
    for ((system, staves), notes) in systems.into_iter().zip(groups) {
        let mut boundaries = Vec::new();
        for vertical in verticals {
            let b = vertical.bounds;
            if b.x < system.x - 0.3 || b.x > system.right + 0.3
                || b.bottom < system.y || b.y > system.bottom {
                continue;
            }
            // Untagged input is supported too: a barline must span precisely
            // one complete staff. This excludes ordinary stems and ledger lines.
            if vertical.barline
                || ((b.y - system.y).abs() < 0.2 && (b.bottom - system.bottom).abs() < 0.2)
                || staves.iter().any(|s| {
                    (b.y - s.y).abs() < 0.2 && (b.bottom - s.bottom).abs() < 0.2
                }) {
                boundaries.push((b.x + b.right) / 2.0);
            }
        }
        boundaries.sort_by(f64::total_cmp);
        boundaries.dedup_by(|a, b| (*a - *b).abs() < 0.12);
        let mut notes: Vec<_> = notes.into_iter().collect();
        notes.sort_by(|a, b| a.1.x.total_cmp(&b.1.x));
        for (i, &(bar, note)) in notes.iter().enumerate() {
            let previous = i.checked_sub(1).map(|j| notes[j].1.right).unwrap_or(f64::NEG_INFINITY);
            let next = notes.get(i + 1).map(|(_, b)| b.x).unwrap_or(f64::INFINITY);
            let left = boundaries.iter().rev().find(|&&x| x <= note.x + 0.05 && x >= previous - 0.05).copied();
            let right = boundaries.iter().find(|&&x| x >= note.right - 0.05 && x <= next + 0.05).copied();
            // A missing boundary falls back to note extents plus one staff space.
            let x = left.unwrap_or(note.x - 1.0).max(system.x);
            let end = right.unwrap_or(note.right + 1.0).min(system.right);
            if end <= x {
                return Err(format!("page {}: invalid horizontal extent for bar {bar}", page + 1));
            }
            bars.entry(bar.to_owned()).or_default().push(BarBox(
                page, round(x), round(system.y), round(end - x), round(system.bottom - system.y),
            ));
        }
        geometry.push(System {
            page, bounds: system, staff_space: (staves[0].bottom - staves[0].y) / 4.0,
            barlines: boundaries,
        });
    }
    Ok(PageGeometry { bars, systems: geometry })
}

/// Silent measures can have only unmarked multi-measure rests. Use neighbouring
/// marked bars and the source's barlines; never divide a gap into guessed widths.
pub fn derive_missing<'a>(
    bars: &mut Bars,
    systems: &[System],
    requested: impl IntoIterator<Item = &'a str>,
) -> Result<Vec<String>, String> {
    let mut missing = BTreeMap::new();
    for bar in requested {
        if !bars.contains_key(bar) {
            let number = bar.parse::<u32>().map_err(|_| format!("cannot derive non-numeric bar {bar}"))?;
            missing.insert(number, bar);
        }
    }
    if missing.is_empty() { return Ok(Vec::new()); }
    let existing: BTreeMap<u32, _> = bars.iter()
        .filter_map(|(bar, boxes)| bar.parse().ok().map(|n| (n, boxes.as_slice()))).collect();
    let missing: Vec<_> = missing.into_iter().collect();
    let mut additions = Vec::with_capacity(missing.len());
    let mut i = 0;
    while i < missing.len() {
        let begin = i;
        while i + 1 < missing.len() && missing[i].0.checked_add(1) == Some(missing[i + 1].0) { i += 1; }
        let group = &missing[begin..=i];
        let first = group[0].0;
        let last = group[group.len() - 1].0;
        let previous = existing.range(..first).next_back();
        let next = existing.range((std::ops::Bound::Excluded(last), std::ops::Bound::Unbounded)).next();
        if previous.is_none() && next.is_none()
            || previous.is_some_and(|(&n, _)| n + 1 != first)
            || next.is_some_and(|(&n, _)| last.checked_add(1) != Some(n)) {
            return Err(format!("cannot locate consecutive neighbours for bars {first}–{last}"));
        }
        let before = previous.and_then(|(_, boxes)| boxes.last());
        let after = next.and_then(|(_, boxes)| boxes.first());
        let system_for = |b: &BarBox| systems.iter().position(|s| {
            s.page == b.0 && (s.bounds.y - b.2).abs() < 0.02
                && (s.bounds.bottom - b.2 - b.4).abs() < 0.02
        }).ok_or_else(|| format!("cannot locate source system for bars {first}–{last}"));
        let start_system = before.map(&system_for).transpose()?.unwrap_or(0);
        let end_system = after.map(&system_for).transpose()?.unwrap_or(systems.len() - 1);
        if start_system > end_system {
            return Err(format!("source systems are out of order around bars {first}–{last}"));
        }
        let mut cells = Vec::with_capacity(group.len());
        for (offset, system) in systems[start_system..=end_system].iter().enumerate() {
            let si = start_system + offset;
            let start = before.filter(|_| si == start_system).map(|b| b.1 + b.3).unwrap_or(system.bounds.x);
            let end = after.filter(|_| si == end_system).map(|b| b.1).unwrap_or(system.bounds.right);
            if end - start < system.staff_space { continue; }
            if start_system == end_system && group.len() == 1 {
                cells.push(system_box(system, start, end));
                continue;
            }
            let closed = after.is_some() && si == end_system;
            let count = cells.len();
            let mut left = start;
            for &right in &system.barlines {
                // A double/repeat barline's adjacent strokes are one boundary,
                // not an additional empty measure.
                if right - left < system.staff_space || right > end + 0.02
                    || closed && end - right < system.staff_space {
                    continue;
                }
                cells.push(system_box(system, left, right));
                left = right;
            }
            if closed || cells.len() == count {
                cells.push(system_box(system, left, end));
            }
        }
        if cells.len() != group.len() {
            return Err(format!("cannot derive bars {first}–{last}: {} geometric intervals for {} bars", cells.len(), group.len()));
        }
        additions.extend(group.iter().zip(cells).map(|((_, bar), cell)| ((*bar).to_owned(), vec![cell])));
        i += 1;
    }
    let derived = additions.iter().map(|(bar, _)| bar.clone()).collect();
    bars.extend(additions);
    Ok(derived)
}

fn system_box(system: &System, start: f64, end: f64) -> BarBox {
    BarBox(system.page, round(start), round(system.bounds.y), round(end - start), round(system.bounds.bottom - system.bounds.y))
}

fn distance(y: f64, b: Bounds) -> f64 {
    (b.y - y).max(0.0) + (y - b.bottom).max(0.0)
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn joins_all_staves_and_keeps_split_bars_separate() {
        let mut rules = Vec::new();
        for y in [10., 20., 40., 50.] {
            for j in 0..5 {
                rules.push(Rule { x: 5., right: 95., y: y + j as f64, staff: true });
            }
        }
        let mut verticals = Vec::new();
        for y in [10., 40.] {
            verticals.push(Vertical { bounds: Bounds { x: 4.9, right: 5.1, y, bottom: y + 14. }, barline: false });
            for x in [30., 60.] {
                verticals.push(Vertical { bounds: Bounds { x: x - 0.05, right: x + 0.05, y, bottom: y + 4. }, barline: true });
            }
        }
        let notes = vec![
            Note { bar: "7", bounds: Bounds { x: 34., right: 55., y: 12., bottom: 13. } },
            Note { bar: "7", bounds: Bounds { x: 8., right: 25., y: 52., bottom: 53. } },
        ];
        let bars = bar_boxes(2, &mut rules, &verticals, &notes).unwrap().bars;
        assert_eq!(serde_json::to_string(&bars["7"]).unwrap(), "[[2,30.0,10.0,30.0,14.0],[2,5.0,40.0,25.0,14.0]]");
    }

    #[test]
    fn missing_barlines_use_padded_note_extents() {
        let mut rules: Vec<_> = (10..15)
            .map(|y| Rule { x: 5., right: 95., y: f64::from(y), staff: true })
            .collect();
        let notes = [
            Note { bar: "1", bounds: Bounds { x: 12., right: 24., y: 11., bottom: 12. } },
            Note { bar: "2", bounds: Bounds { x: 40., right: 55., y: 11., bottom: 12. } },
        ];
        let bars = bar_boxes(0, &mut rules, &[], &notes).unwrap().bars;
        assert_eq!(serde_json::to_string(&bars["1"]).unwrap(), "[[0,11.0,10.0,14.0,4.0]]");
        assert_eq!(serde_json::to_string(&bars["2"]).unwrap(), "[[0,39.0,10.0,17.0,4.0]]");
    }

    #[test]
    fn derives_silent_bars_between_neighbours_and_across_pages() {
        let systems = [
            System { page: 0, bounds: Bounds { x: 5., y: 10., right: 95., bottom: 24. }, staff_space: 1., barlines: vec![5., 30., 50., 70., 94., 94.6] },
            System { page: 1, bounds: Bounds { x: 5., y: 20., right: 95., bottom: 34. }, staff_space: 1., barlines: vec![5., 30., 60., 95.] },
        ];
        let mut bars = Bars::from([
            ("1".into(), vec![BarBox(0, 5., 10., 25., 14.)]),
            ("3".into(), vec![BarBox(0, 50., 10., 20., 14.)]),
            ("6".into(), vec![BarBox(1, 30., 20., 30., 14.)]),
        ]);
        let derived = derive_missing(&mut bars, &systems, ["1", "2", "3", "4", "5", "6", "2"]).unwrap();
        assert_eq!(derived, ["2", "4", "5"]);
        assert_eq!(serde_json::to_string(&bars["2"]).unwrap(), "[[0,30.0,10.0,20.0,14.0]]");
        assert_eq!(serde_json::to_string(&bars["4"]).unwrap(), "[[0,70.0,10.0,24.0,14.0]]");
        assert_eq!(serde_json::to_string(&bars["5"]).unwrap(), "[[1,5.0,20.0,25.0,14.0]]");
    }

    #[test]
    fn derives_consecutive_page_end_bars_without_counting_repeat_strokes() {
        let systems = [
            System { page: 0, bounds: Bounds { x: 5., y: 10., right: 95., bottom: 24. }, staff_space: 1., barlines: vec![30., 60., 94., 94.6] },
            System { page: 1, bounds: Bounds { x: 5., y: 20., right: 95., bottom: 34. }, staff_space: 1., barlines: vec![5., 30., 95.] },
        ];
        let mut bars = Bars::from([
            ("122".into(), vec![BarBox(0, 5., 10., 25., 14.)]),
            ("125".into(), vec![BarBox(1, 5., 20., 25., 14.)]),
        ]);
        assert_eq!(derive_missing(&mut bars, &systems, ["123", "124"]).unwrap(), ["123", "124"]);
        assert_eq!(serde_json::to_string(&bars["123"]).unwrap(), "[[0,30.0,10.0,30.0,14.0]]");
        assert_eq!(serde_json::to_string(&bars["124"]).unwrap(), "[[0,60.0,10.0,34.0,14.0]]");
    }

    #[test]
    fn uses_system_end_only_when_a_single_silent_bar_has_no_barline() {
        let systems = [System { page: 0, bounds: Bounds { x: 5., y: 10., right: 95., bottom: 24. }, staff_space: 1., barlines: vec![] }];
        let mut bars = Bars::from([("1".into(), vec![BarBox(0, 5., 10., 25., 14.)])]);
        assert!(derive_missing(&mut bars, &systems, ["2", "3"]).is_err());
        assert!(!bars.contains_key("2"));
        assert_eq!(derive_missing(&mut bars, &systems, ["2"]).unwrap(), ["2"]);
        assert_eq!(serde_json::to_string(&bars["2"]).unwrap(), "[[0,30.0,10.0,65.0,14.0]]");
    }

    #[test]
    fn rounds_without_negative_zero() {
        assert_eq!(round(-0.0001).to_bits(), 0.0_f64.to_bits());
        assert_eq!(round(12.3456), 12.35);
    }
}
