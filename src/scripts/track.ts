/**
 * Analytics ligero: Plausible / Umami / dataLayer.
 * Silencioso si no hay proveedor configurado.
 */
declare global {
	interface Window {
		plausible?: (name: string, options: { props: Record<string, unknown> }) => void;
		umami?: { track?: (name: string, props: Record<string, unknown>) => void };
		dataLayer?: Record<string, unknown>[];
	}
}

export function track(name: string, props: Record<string, unknown> = {}): void {
	try {
		window.plausible?.(name, { props });
		window.umami?.track?.(name, props);
		(window.dataLayer = window.dataLayer || []).push({ event: name, ...props });
	} catch {
		/* analytics nunca debe romper la página */
	}
}
