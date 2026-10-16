// A section map for long reading pages; nothing is hidden or revealed on scroll.
export function mount(main) {
  const toc = main.querySelector('.toc-bar');
  if (!toc) return;
  const scroller = toc.querySelector('.wrap');
  const links = [...toc.querySelectorAll('a[href^="#"]')];
  const sections = links.map((link) => main.querySelector(link.getAttribute('href')));
  const head = document.querySelector('.site-head');
  let observer;
  let active = -1;
  let offset = 0;

  function mark(index) {
    if (index === active) return;
    active = index;
    links.forEach((link, i) => {
      link.classList.toggle('on', i === index);
      if (i === index) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    // Keep the current item in the horizontal map without moving the document.
    const link = links[index].getBoundingClientRect();
    const box = scroller.getBoundingClientRect();
    if (link.left < box.left) scroller.scrollLeft -= box.left - link.left;
    else if (link.right > box.right) scroller.scrollLeft += link.right - box.right;
  }

  function locate() {
    let current = 0;
    for (let i = 0; i < sections.length; i++) {
      if (sections[i].getBoundingClientRect().top <= offset + 1) current = i;
      else break;
    }
    mark(current);
  }

  function observe() {
    observer?.disconnect();
    offset = (head?.getBoundingClientRect().height ?? 0) + toc.getBoundingClientRect().height + 12;
    // A narrow band immediately below the sticky navigation selects the section
    // that owns the reading position, even when a chapter is several screens tall.
    const bottom = Math.max(0, window.innerHeight - offset - 1);
    observer = new IntersectionObserver(locate, { rootMargin: `-${offset}px 0px -${bottom}px 0px`, threshold: 0 });
    sections.forEach((section) => observer.observe(section));
    locate();
  }

  const resize = new ResizeObserver(observe);
  if (head) resize.observe(head);
  resize.observe(toc);
  window.addEventListener('resize', observe);
  observe();
  return () => {
    observer.disconnect();
    resize.disconnect();
    window.removeEventListener('resize', observe);
  };
}
