export function mount(main) {
  const form = main.querySelector('.collection-filters');
  const dialog = main.querySelector('dialog.viewer');
  if (!form || !dialog) return;
  const controller = new AbortController();
  const { signal } = controller;
  const records = [...main.querySelectorAll('[data-collection-record]')];
  const pairings = new Map(records.map((record) => [record, JSON.parse(record.dataset.pairings)]));
  const content = dialog.querySelector('[data-viewer-content]');
  const close = dialog.querySelector('[data-viewer-close]');
  const count = main.querySelector('[data-collection-count]');
  const empty = main.querySelector('[data-collection-empty]');
  let opener = null;
  const fold = (value) => value.normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

  function filter() {
    const relation = form.elements.relation.value;
    const period = form.elements.period.value;
    const maker = fold(form.elements.maker.value.trim());
    let images = 0;
    let texts = 0;
    for (const record of records) {
      const matches = (!maker || record.dataset.maker.includes(maker))
        && pairings.get(record).some((pair) => (!relation || pair.relation === relation)
          && (!period || pair.periods.includes(period)));
      record.hidden = !matches;
      if (matches) record.classList.contains('text-item') ? texts++ : images++;
    }
    count.textContent = `${images} ${images === 1 ? 'image or object' : 'images and objects'} · ${texts} ${texts === 1 ? 'text' : 'texts'}`;
    empty.hidden = images + texts > 0;
    main.querySelector('[data-images-section]').hidden = images === 0;
    main.querySelector('[data-texts-section]').hidden = texts === 0;
  }

  function open(id, trigger) {
    const template = main.querySelector(`template[data-object-detail="${CSS.escape(id)}"]`);
    if (!template) return;
    opener = trigger;
    content.replaceChildren(template.content.cloneNode(true));
    content.querySelector('img')?.removeAttribute('loading');
    if (!dialog.open) dialog.showModal();
    dialog.scrollTop = 0;
    close.focus();
  }

  main.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-object-open]');
    if (trigger && !event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) {
      event.preventDefault();
      open(trigger.dataset.objectOpen, trigger);
    }
    const permalink = event.target.closest('.object-permalink a');
    if (permalink) {
      event.preventDefault();
      history.pushState(null, '', permalink.hash);
      dialog.close();
      main.querySelector(permalink.hash)?.scrollIntoView({ block: 'start' });
    }
  }, { signal });
  close.addEventListener('click', () => dialog.close(), { signal });
  dialog.addEventListener('close', () => {
    content.replaceChildren();
    if (opener?.isConnected) opener.focus({ preventScroll: true });
    opener = null;
  }, { signal });
  dialog.addEventListener('click', (event) => {
    if (event.target !== dialog) return;
    const box = dialog.getBoundingClientRect();
    if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
  }, { signal });
  form.addEventListener('submit', (event) => event.preventDefault(), { signal });
  form.addEventListener('input', filter, { signal });
  form.addEventListener('change', filter, { signal });
  form.addEventListener('reset', () => queueMicrotask(filter), { signal });

  // Search results and citations land on the deduplicated object, not its first owner.
  function revealHash() {
    let id;
    try { id = decodeURIComponent(location.hash.slice(1)); } catch { return; }
    const record = records.find((item) => item.id === id);
    if (!record) return;
    form.reset();
    filter();
    const trigger = record.querySelector('[data-object-open]');
    if (trigger) open(id, trigger);
    else record.scrollIntoView({ block: 'start' });
  }
  window.addEventListener('hashchange', revealHash, { signal });
  revealHash();
  return () => {
    if (dialog.open) dialog.close();
    controller.abort();
    content.replaceChildren();
  };
}
