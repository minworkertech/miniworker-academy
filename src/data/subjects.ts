/** Sugerencias del datalist "¿Qué materia enseñas?" del formulario de registro. */
export const subjectSuggestions = [
	'Programación',
	'Derecho',
	'Matemáticas',
	'Administración y negocios',
	'Ingeniería',
	'Medicina y salud',
	'Ciencias sociales',
	'Diseño y comunicación',
];

export interface Subject {
	name: string;
	status: string;
	statusTone: 't' | 'v';
	body: string;
	bullets: string[];
}

export const subjects: Subject[] = [
	{
		name: 'Programación',
		status: 'En piloto',
		statusTone: 't',
		body: 'Tus estudiantes trabajan como en un equipo real: GitHub, Pull Requests y code review. Cada entrega queda como un commit en su cuenta.',
		bullets: [
			'Yura mide calidad, cadencia y consistencia del código',
			'El estudiante termina con un perfil verificable',
			'Tú revisas donde tu criterio aporta',
		],
	},
	{
		name: 'Derecho',
		status: 'Próximamente',
		statusTone: 'v',
		body: 'Yura genera casos y talleres desde tu planificación y evalúa ensayos y argumentos con tu rúbrica, criterio por criterio.',
		bullets: [
			'Casos redactados a partir de tus temas',
			'Feedback sobre argumentación y uso de evidencia',
			'Se abre por acceso anticipado, contigo',
		],
	},
];
