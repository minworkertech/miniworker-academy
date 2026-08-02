export interface Step {
	num: string;
	title: string;
	body: string;
	evidence: [string, string][];
}

export const steps: Step[] = [
	{
		num: '01',
		title: 'Cargas tu materia',
		body: 'Subes tu sílabo, tus temas y tus rúbricas una sola vez. Yura aprende tu plan, tu lenguaje y tus criterios de evaluación.',
		evidence: [
			['Sílabo', 'cargado'],
			['Temas del semestre', '14'],
			['Rúbricas', '3'],
		],
	},
	{
		num: '02',
		title: 'Yura genera y califica',
		body: 'Crea los talleres alineados a tu planificación y evalúa cada entrega con IA, aplicando tu rúbrica y devolviendo feedback al estudiante.',
		evidence: [
			['Talleres generados', 'por tema'],
			['Métricas de la rúbrica', 'suman 100'],
			['Feedback', 'por entrega'],
		],
	},
	{
		num: '03',
		title: 'Revisas y exportas',
		body: 'Ves notas y evidencia en tu dashboard, ajustas lo que quieras y exportas a Moodle con tus ponderaciones. La última palabra es tuya.',
		evidence: [
			['Nota del curso', 'con tu fórmula'],
			['Evidencia', 'por criterio'],
			['Exportar', 'Moodle · CSV'],
		],
	},
];
