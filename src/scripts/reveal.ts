/**
 * Entrada al hacer scroll.
 *
 * El estado inicial (invisible) lo pone este script con la clase `rv`, nunca
 * el HTML: si el JS no corre, o si el sistema pide menos movimiento, la
 * página se ve completa desde el primer frame.
 *
 * Los elementos dentro de un panel oculto también se observan: cuando el
 * panel aparece, el observer los reporta y entran igual.
 */
export function initReveal(): void {
	if (typeof IntersectionObserver === 'undefined') return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
	if (!items.length) return;

	items.forEach((item) => item.classList.add('rv'));

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				entry.target.classList.add('in');
				observer.unobserve(entry.target);
			});
		},
		{ threshold: 0, rootMargin: '0px 0px -12% 0px' }
	);

	items.forEach((item) => observer.observe(item));
}
