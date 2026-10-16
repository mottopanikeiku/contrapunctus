// Shared by the static builder and the browser: date-window zoom without stretched labels.
const FIRST_YEAR = 1640;
const LAST_YEAR = 2030;
const WIDTH = 1400;
const LEFT = 24;
const RIGHT = 24;
const ROW = 56;
const yearX = (year) => LEFT + (year - FIRST_YEAR) / (LAST_YEAR - FIRST_YEAR) * (WIDTH - LEFT - RIGHT);

export function layoutTimeline(people, events, from = FIRST_YEAR, to = LAST_YEAR) {
  const scale = (to - from) / (LAST_YEAR - FIRST_YEAR);
  const left = yearX(from) - LEFT * scale;
  const width = WIDTH * scale;
  const right = left + width;
  const lanes = [];
  const placed = events.filter((event) => event.year >= from && event.year <= to).map((event) => {
    const x = yearX(event.year);
    const text = `${event.year} ${event.label}`;
    // A deliberately generous advance keeps the event lanes collision-free in Source Sans.
    const textWidth = text.length * 10.5 * scale;
    const labelX = Math.max(left + 12 * scale, Math.min(x + 10 * scale, right - textWidth - 12 * scale));
    let lane = lanes.findIndex((end) => end + 16 * scale < labelX);
    if (lane < 0) { lane = lanes.length; lanes.push(0); }
    lanes[lane] = labelX + textWidth;
    return { ...event, x, labelX, y: (58 + lane * 28) * scale };
  });
  const top = (82 + lanes.length * 28) * scale;
  const rows = people.filter((person) => person.born <= to && person.died >= from).map((person, index) => {
    const x = yearX(Math.max(person.born, from));
    const end = yearX(Math.min(person.died, to));
    const y = top + index * ROW * scale;
    const labelWidth = (person.name.length + person.dates.length + 2) * 10.5 * scale;
    return { ...person, x, width: Math.max(2 * scale, end - x), y,
      labelX: Math.max(left + 14 * scale, Math.min(x, right - labelWidth - 14 * scale)) };
  });
  const height = top + (rows.length * ROW + 16) * scale;
  return { left, width, height, scale, rows, events: placed, viewBox: `${left} 0 ${width} ${height}` };
}

export function mount(main) {
  const svg = main.querySelector('svg.tl');
  if (!svg) return;
  const controller = new AbortController();
  const { signal } = controller;
  const rows = [...svg.querySelectorAll('[data-life-select]')];
  const people = rows.map((node) => ({ id: node.dataset.lifeSelect, born: Number(node.dataset.born), died: Number(node.dataset.died), name: node.dataset.name, dates: node.dataset.dates }));
  const eventNodes = [...svg.querySelectorAll('[data-event]')];
  const events = eventNodes.map((node) => ({ id: node.dataset.event, year: Number(node.dataset.year), label: node.dataset.label }));
  const rowNodes = new Map(rows.map((node) => [node.dataset.lifeSelect, node]));
  const eventsById = new Map(eventNodes.map((node) => [node.dataset.event, node]));
  const panel = main.querySelector('[data-life-panel]');
  const list = main.querySelector('.tl-list');
  const chart = main.querySelector('.tl-wrap');
  const status = main.querySelector('[data-life-status]');
  const set = (node, values) => { for (const [name, value] of Object.entries(values)) node.setAttribute(name, value); };

  function zoom(from, to) {
    const layout = layoutTimeline(people, events, from, to);
    const s = layout.scale;
    svg.setAttribute('viewBox', layout.viewBox);
    svg.style.setProperty('--tl-scale', s);
    svg.querySelector('desc').textContent = `Lives overlapping ${from}–${to}, ordered by birth. Select a composer for dates, places and recordings.`;
    rows.forEach((node) => { node.style.display = 'none'; });
    for (const row of layout.rows) {
      const node = rowNodes.get(row.id);
      node.style.display = '';
      set(node.querySelector('.life-hit'), { x: layout.left, y: row.y, width: layout.width, height: ROW * s });
      set(node.querySelector('.life-bar'), { x: row.x, y: row.y + 30 * s, width: row.width, height: 12 * s });
      set(node.querySelector('text'), { x: row.labelX, y: row.y + 21 * s });
    }
    eventNodes.forEach((node) => { node.style.display = 'none'; });
    for (const event of layout.events) {
      const node = eventsById.get(event.id);
      node.style.display = '';
      set(node.querySelector('line'), { x1: event.x, x2: event.x, y1: event.y + 5 * s, y2: layout.height });
      set(node.querySelector('circle'), { cx: event.x, cy: event.y, r: 4 * s });
      set(node.querySelector('text'), { x: event.labelX, y: event.y + 5 * s });
    }
    for (const node of svg.querySelectorAll('[data-tick]')) {
      const year = Number(node.dataset.tick);
      node.style.display = year < from || year > to ? 'none' : '';
      set(node.querySelector('line'), { y1: 28 * s, y2: layout.height });
      const text = node.querySelector('text');
      if (text) set(text, { x: yearX(year) + 5 * s, y: 21 * s });
    }
    for (const node of list.querySelectorAll('[data-life-row]')) node.hidden = Number(node.dataset.born) > to || Number(node.dataset.died) < from;
    for (const group of list.querySelectorAll('[data-life-group]')) group.hidden = ![...group.querySelectorAll('[data-life-row]')].some((node) => !node.hidden);
    status.textContent = `${layout.rows.length} lives overlapping ${from}–${to}. Periods are overlapping editorial groupings, not fixed borders.`;
  }

  function selectLife(id) {
    const template = main.querySelector(`template[data-life-detail="${CSS.escape(id)}"]`);
    if (!template) return;
    panel.replaceChildren(template.content.cloneNode(true));
    panel.hidden = false;
    for (const node of rows) node.setAttribute('aria-expanded', String(node.dataset.lifeSelect === id));
    panel.focus();
  }

  main.addEventListener('click', (event) => {
    const period = event.target.closest('[data-window]');
    if (period) {
      for (const button of main.querySelectorAll('[data-window]')) button.setAttribute('aria-pressed', String(button === period));
      zoom(Number(period.dataset.from), Number(period.dataset.to));
      return;
    }
    const life = event.target.closest('[data-life-select]');
    if (life && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      selectLife(life.dataset.lifeSelect);
      return;
    }
    const toggle = event.target.closest('[data-life-list-toggle]');
    if (toggle) {
      const show = toggle.getAttribute('aria-pressed') !== 'true';
      toggle.setAttribute('aria-pressed', String(show));
      chart.hidden = show;
      list.classList.toggle('is-visible', show);
      toggle.textContent = show ? 'Show chart' : 'Read as a list';
    }
  }, { signal });
  return () => controller.abort();
}
