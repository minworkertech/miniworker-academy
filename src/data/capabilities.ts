export interface Capability {
	icon: string;
	title: string;
	body: string;
}

export const capabilities: Capability[] = [
	{
		icon: 'file-plus-2',
		title: 'Talleres generados desde tu plan',
		body: 'Cada taller sale de tu sílabo y tus temas, no de una plantilla genérica. Los editas antes de publicar.',
	},
	{
		icon: 'message-square-text',
		title: 'Calificación con feedback por entrega',
		body: 'La IA aplica tu rúbrica criterio por criterio y devuelve al estudiante qué hizo bien y qué le faltó.',
	},
	{
		icon: 'activity',
		title: 'Métricas de proceso',
		body: 'Calidad, cadencia y consistencia del trabajo a lo largo del semestre, no solo la nota del final.',
	},
	{
		icon: 'scale',
		title: 'Evidencia objetiva y pareja',
		body: 'La entrega 1 y la 128 se leen con la misma profundidad. Cuando alguien reclame, abres la evidencia.',
	},
];
