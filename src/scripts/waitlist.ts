/**
 * Envío a la Google Sheet de acceso anticipado.
 *
 * La hoja recibe tres columnas: Fecha (la pone el Apps Script), Email y Subject
 * —la materia que enseña el docente—. Ver GOOGLE_SHEETS_SETUP.md.
 */

const SCRIPT_URL = import.meta.env.PUBLIC_GOOGLE_SCRIPT_URL || '';

export const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function isEmail(value: string): boolean {
	return EMAIL_RE.test(value.trim());
}

export interface WaitlistEntry {
	email: string;
	/** Materia que enseña el docente. Vacío cuando el formulario no la pide. */
	subject?: string;
}

export async function submitToSheet({ email, subject = '' }: WaitlistEntry): Promise<void> {
	if (!SCRIPT_URL) {
		throw new Error('Configuración faltante: PUBLIC_GOOGLE_SCRIPT_URL');
	}

	const formData = new FormData();
	formData.append('email', email.trim());
	formData.append('subject', subject.trim());

	// Apps Script no responde con cabeceras CORS: la respuesta es opaca pero la fila se guarda.
	const response = await fetch(SCRIPT_URL, {
		method: 'POST',
		mode: 'no-cors',
		body: formData,
	});

	if (!response.ok && response.type !== 'opaque') {
		throw new Error('Error al guardar el registro');
	}
}
