/* =============================================
   HUBLE — Custom Scrollbar
   Always visible, real-time drag, mint thumb
   ============================================= */

export function initScrollbar() {
  const scrollbar = document.getElementById('customScrollbar');
  const thumb = document.getElementById('customScrollbarThumb');
  if (!scrollbar || !thumb) return;

  let scrollTimeout;
  let isDragging = false;
  let dragStartY = 0;
  let dragStartThumbTop = 0;

  function getMetrics() {
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const thumbHeight = Math.max((clientHeight / scrollHeight) * clientHeight, 50);
    const maxThumbTop = clientHeight - thumbHeight;
    const maxScroll = scrollHeight - clientHeight;
    return { scrollHeight, clientHeight, thumbHeight, maxThumbTop, maxScroll };
  }

  function updateThumbFromScroll() {
    const { thumbHeight, maxThumbTop, maxScroll } = getMetrics();
    if (maxScroll <= 0) { thumb.style.display = 'none'; return; }
    thumb.style.display = 'block';
    const ratio = window.scrollY / maxScroll;
    thumb.style.height = thumbHeight + 'px';
    thumb.style.top = (ratio * maxThumbTop) + 'px';
  }

  // On scroll — update thumb position (not during drag, thumb leads)
  window.addEventListener('scroll', () => {
    if (!isDragging) updateThumbFromScroll();
    scrollbar.classList.add('scrolling');
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (!isDragging) scrollbar.classList.remove('scrolling');
    }, 1200);
  }, { passive: true });

  window.addEventListener('resize', updateThumbFromScroll, { passive: true });

  // DRAG — real-time: move thumb immediately, scroll follows
  thumb.addEventListener('mousedown', (e) => {
    e.preventDefault();
    e.stopPropagation();
    isDragging = true;
    dragStartY = e.clientY;
    dragStartThumbTop = parseFloat(thumb.style.top) || 0;
    scrollbar.classList.add('dragging', 'scrolling');
    document.body.style.userSelect = 'none';
    document.body.style.cursor = 'grabbing';
  });

  window.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const { maxThumbTop, maxScroll } = getMetrics();
    const deltaY = e.clientY - dragStartY;
    const newThumbTop = Math.max(0, Math.min(dragStartThumbTop + deltaY, maxThumbTop));

    // Move thumb immediately
    thumb.style.top = newThumbTop + 'px';

    // Scroll page to match
    const scrollRatio = newThumbTop / maxThumbTop;
    window.scrollTo(0, scrollRatio * maxScroll);
  });

  window.addEventListener('mouseup', () => {
    if (!isDragging) return;
    isDragging = false;
    scrollbar.classList.remove('dragging');
    document.body.style.userSelect = '';
    document.body.style.cursor = '';
    updateThumbFromScroll();
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      scrollbar.classList.remove('scrolling');
    }, 1200);
  });

  // Click on track to jump
  scrollbar.addEventListener('click', (e) => {
    if (e.target === thumb) return;
    const { maxThumbTop, maxScroll, thumbHeight } = getMetrics();
    const clickY = e.clientY - thumbHeight / 2;
    const newThumbTop = Math.max(0, Math.min(clickY, maxThumbTop));
    const scrollRatio = newThumbTop / maxThumbTop;
    window.scrollTo({ top: scrollRatio * maxScroll, behavior: 'smooth' });
  });

  updateThumbFromScroll();
}
