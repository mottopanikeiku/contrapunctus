use std::{fs, path::PathBuf, process::Command};

struct Workspace(PathBuf);
impl Drop for Workspace {
    fn drop(&mut self) { let _ = fs::remove_dir_all(&self.0); }
}

#[test]
fn packs_pages_preserves_rhythm_and_leaves_previous_pack_on_error() {
    let work = Workspace(std::env::temp_dir().join(format!("sheetpack-test-{}", std::process::id())));
    fs::create_dir(&work.0).unwrap();
    let mut source = String::from("<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 80\"><!-- drop --><metadata>drop</metadata><title>drop</title><g class=\"staff\">");
    for top in [10, 20] {
        for y in top..top + 5 {
            source.push_str(&format!("<line x1=\"5\" x2=\"95\" y1=\"{y}\" y2=\"{y}\" stroke=\"black\" stroke-width=\".1\"/>"));
        }
    }
    source.push_str("</g><rect x=\"4.9\" y=\"10\" width=\".2\" height=\"14\"/><g class=\"barline\"><rect x=\"29.95\" y=\"10\" width=\".1\" height=\"14\"/><rect x=\"59.95\" y=\"10\" width=\".1\" height=\"14\"/></g>");
    for (bar, x) in [("1", "12.3456"), ("2", "40.1234")] {
        source.push_str(&format!("<a href=\"textedit:///source.ly\"><g class=\"nh\" data-bar=\"{bar}\" data-pos=\"0.3333333333333333\"><g transform=\"translate({x},12)\"><path transform=\"scale(.004,-.004)\" d=\"M0 0L250 125L250 -125z\" fill=\"black\"/></g></g></a>"));
    }
    source.push_str("<text font-size=\"2\">\n<tspan>Allegro con brio</tspan>\n</text></svg>");
    let input = work.0.join("source.svg");
    let output = work.0.join("sheet");
    fs::write(&input, &source).unwrap();
    let run = || Command::new(env!("CARGO_BIN_EXE_sheetpack")).arg("--out").arg(&output).arg(&input).arg(&input).output().unwrap();
    let result = run();
    assert!(result.status.success(), "{}", String::from_utf8_lossy(&result.stderr));
    let packed = fs::read_to_string(output.join("p1.svg")).unwrap();
    let second = fs::read_to_string(output.join("p2.svg")).unwrap();
    let index: serde_json::Value = serde_json::from_slice(&fs::read(output.join("index.json")).unwrap()).unwrap();
    assert_eq!(index["pages"].as_array().unwrap().len(), 2);
    assert_eq!(index["bars"]["1"], serde_json::json!([[0,5.0,10.0,25.0,14.0],[1,5.0,10.0,25.0,14.0]]));
    assert_eq!(index["bars"]["2"][0], serde_json::json!([0,30.0,10.0,30.0,14.0]));
    let doc = roxmltree::Document::parse(&packed).unwrap();
    let second_doc = roxmltree::Document::parse(&second).unwrap();
    assert_eq!(doc.descendants().filter(|n| n.has_tag_name("use")).count(), 2);
    assert_eq!(doc.descendants().filter(|n| n.attribute("data-pos") == Some("0.3333333333333333")).count(), 2);
    let definition = doc.descendants().find(|n| n.attribute("id").is_some()).unwrap();
    let second_definition = second_doc.descendants().find(|n| n.attribute("id").is_some()).unwrap();
    assert_ne!(definition.attribute("id"), second_definition.attribute("id"));
    assert_eq!(definition.attribute("d"), Some("M0 0L1 -.5V.5Z"));
    assert!(!packed.contains("textedit:") && !packed.contains("black") && !packed.contains("drop"));
    assert!(packed.contains("x=\"12.35\""));
    assert!(packed.contains("style=\"white-space:pre\"><tspan>Allegro con brio</tspan></text>"));
    assert!(run().status.success());
    assert_eq!(packed, fs::read_to_string(output.join("p1.svg")).unwrap());
    let score = work.0.join("score.json");
    fs::write(&score, r#"{"bars":[{"n":"1"},{"n":"2"},{"n":"3"}],"notes":[]}"#).unwrap();
    let with_score = || Command::new(env!("CARGO_BIN_EXE_sheetpack")).arg("--out").arg(&output)
        .arg("--score").arg(&score).arg(&input).output().unwrap();
    let result = with_score();
    assert!(result.status.success(), "{}", String::from_utf8_lossy(&result.stderr));
    let complete_index = fs::read(output.join("index.json")).unwrap();
    let complete: serde_json::Value = serde_json::from_slice(&complete_index).unwrap();
    assert_eq!(complete["derived"], serde_json::json!(["3"]));
    assert_eq!(complete["bars"]["3"], serde_json::json!([[0,60.0,10.0,35.0,14.0]]));
    assert!(!output.join("p2.svg").exists());
    fs::write(&score, r#"{"bars":[{"n":"1"},{"n":"2"},{"n":"3"},{"n":"4"}]}"#).unwrap();
    assert!(!with_score().status.success());
    assert_eq!(complete_index, fs::read(output.join("index.json")).unwrap());
    fs::write(&input, "<svg viewBox=\"0 0 100 80\"><path d=\"M0 0L1 1\"/></svg>").unwrap();
    assert!(!run().status.success());
    assert_eq!(packed, fs::read_to_string(output.join("p1.svg")).unwrap());
}
