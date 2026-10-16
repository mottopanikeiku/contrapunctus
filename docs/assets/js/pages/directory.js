// Progressive enhancement: all composers remain readable without this module.
const fold = (s) => s.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

export function mount(main) {
  const form = main.querySelector('[data-directory-filters]');
  if (!form) return;
  const query = form.elements.namedItem('q');
  const period = form.elements.namedItem('period');
  const recording = form.elements.namedItem('rec');
  const count = main.querySelector('[data-directory-count]');
  const empty = main.querySelector('[data-directory-empty]');
  const rows = [...main.querySelectorAll('#composer-list > li')];
  const events = new AbortController();

  function filter(updateUrl = true) {
    const words = fold(query.value.trim()).split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const row of rows) {
      const match = (!period.value || row.dataset.period === period.value)
        && (!recording.checked || Number(row.dataset.recordings) > 0)
        && words.every((word) => row.dataset.search.includes(word));
      row.hidden = !match;
      if (match) visible++;
    }
    count.textContent = visible === rows.length ? `${visible} composers` : `${visible} of ${rows.length} composers`;
    empty.hidden = visible > 0;
    if (updateUrl) {
      const url = new URL(location.href);
      for (const [key, value] of [['q', query.value.trim()], ['period', period.value], ['rec', recording.checked ? '1' : '']]) {
        if (value) url.searchParams.set(key, value);
        else url.searchParams.delete(key);
      }
      history.replaceState(history.state, '', url);
    }
  }

  function restore() {
    const params = new URLSearchParams(location.search);
    query.value = params.get('q') ?? '';
    period.value = params.get('period') ?? '';
    if (period.selectedIndex < 0) period.value = '';
    recording.checked = params.get('rec') === '1';
    filter(false);
  }

  query.addEventListener('input', () => filter(), { signal: events.signal });
  period.addEventListener('change', () => filter(), { signal: events.signal });
  recording.addEventListener('change', () => filter(), { signal: events.signal });
  form.addEventListener('submit', (event) => { event.preventDefault(); filter(); }, { signal: events.signal });
  form.addEventListener('reset', (event) => {
    event.preventDefault();
    query.value = '';
    period.value = '';
    recording.checked = false;
    filter();
  }, { signal: events.signal });
  window.addEventListener('popstate', restore, { signal: events.signal });
  restore();
  return () => events.abort();
}
