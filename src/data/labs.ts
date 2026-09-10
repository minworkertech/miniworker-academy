/**
 * Contenido de Yura Labs: el pitch institucional para universidades
 * e institutos superiores. Fuente: brochure "Yura para instituciones".
 *
 * Regla de voz: Yura está en pre-piloto y no publica porcentajes de mejora,
 * horas ahorradas ni testimonios. Solo se afirma lo que ya está en producción.
 * Regla de largo: una idea por bloque y una frase por idea.
 */

export interface LabPain {
	icon: string;
	title: string;
	body: string;
}

/** El reinicio de cada período, visto desde quien lo sufre. */
export const labPains: LabPain[] = [
	{
		icon: 'file-plus-2',
		title: 'Todo empieza en blanco',
		body: 'Su primer día real no será construir desde cero: será entrar a código que no escribió y mejorarlo sin romperlo.',
	},
	{
		icon: 'layers',
		title: 'Nunca trabaja con otra carrera',
		body: 'Nunca con un diseñador, nunca con alguien que piense en el usuario. En la industria ese equipo no existe.',
	},
	{
		icon: 'building-2',
		title: 'La institución no acumula nada',
		body: 'Ni software en uso, ni evidencia de vinculación, ni trazabilidad. Solo una carpeta que nadie vuelve a abrir.',
	},
];

/**
 * Madurez del producto en seis períodos consecutivos, en porcentaje de la
 * altura del gráfico. Es el esquema del modelo, no un resultado medido.
 */
export const maturity = [16, 30, 46, 62, 80, 100];

/** Altura pareja de los seis proyectos que hoy se archivan al cierre. */
export const flatMaturity = 26;

export interface Handoff {
	title: string;
	body: string;
}

export const handoff: Handoff[] = [
	{
		title: 'Qué hereda el entrante',
		body: 'El repositorio, la deuda técnica documentada y la lista de lo pendiente.',
	},
	{
		title: 'Qué deja el saliente',
		body: 'Un traspaso escrito: qué construyó y por qué decidió lo que decidió. Cuenta para su nota.',
	},
	{
		title: 'Qué acumula la institución',
		body: 'Un producto en uso, la calidad por generación y la contribución de cada estudiante.',
	},
];

export interface PeriodStep {
	label: string;
	title: string;
	/** Admite <b> inline (se renderiza con set:html). */
	body: string;
}

export const periodSteps: PeriodStep[] = [
	{
		label: 'Apertura',
		title: 'No empieza en blanco',
		body: 'Hereda el repositorio, el traspaso y lo pendiente. Su primera tarea es <b>entender código ajeno</b>.',
	},
	{
		label: 'Durante',
		title: 'Cada PR se evalúa solo',
		body: 'El análisis corre sobre el código nuevo y responde en el propio Pull Request, con el estándar del docente. Se atribuye <b>por estudiante</b>.',
	},
	{
		label: 'Cierre',
		title: 'El producto pasa de generación',
		body: 'El equipo documenta el traspaso y la carrera elige quién continúa. Todo queda registrado.',
	},
];

export interface Audience {
	who: string;
	what: string;
}

export const audiences: Audience[] = [
	{ who: 'Estudiante', what: 'Trabajo real en un producto que usa gente.' },
	{ who: 'Docente', what: 'Ve quién aporta dentro de cada equipo, con evidencia.' },
	{ who: 'Institución', what: 'Evidencia de vinculación con fecha y autoría, generada sola.' },
	{ who: 'Comunidad', what: 'Software que no habría podido pagar, y mantenido.' },
];

export interface RoadmapStage {
	stage: string;
	title: string;
	items: string[];
	available?: boolean;
}

export const roadmap: RoadmapStage[] = [
	{
		stage: 'Disponible hoy',
		available: true,
		title: 'Ingeniería de software',
		items: [
			'Continuidad entre períodos, con traspaso documentado',
			'Evaluación automática en cada Pull Request',
			'Contribución individual dentro del grupo',
			'Tablero del docente con el estado de cada equipo',
		],
	},
	{
		stage: 'Lo siguiente',
		title: 'Diseño como segundo rol',
		items: [
			'Rol de diseño en el mismo equipo',
			'Evaluación anclada al artefacto, no al código',
			'Contribución individual sin repositorio',
		],
	},
	{
		stage: 'Después',
		title: 'El equipo de producto completo',
		items: [
			'Software, diseño, marketing y gestión juntos',
			'Cliente externo: GAD, fundación o PYME',
			'Métricas comparables entre cohortes',
		],
	},
];

export const notIs: Handoff[] = [
	{ title: 'No es un LMS', body: 'No gestiona notas ni contenidos. Convive con el que ya usas.' },
	{ title: 'No es un gestor de tareas', body: 'No compite con Notion ni con Jira.' },
	{
		title: 'No es un marketplace',
		body: 'Los productos son gratuitos para quien los recibe. Yura cobra licencia institucional.',
	},
];

/** Lo que pone la institución para arrancar el piloto. */
export const pilotChecks = [
	'Una asignatura de proyectos con al menos dos grupos',
	'Un docente dispuesto a mentorear en lugar de revisar entregas',
	'Un departamento interno como primer cliente',
	'El producto queda a nombre de la institución',
];
