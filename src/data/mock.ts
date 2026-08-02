/** Contenido de la ventana de producto que se muestra en el hero. */

export interface MockNavEntry {
	group?: string;
	label?: string;
	count?: string;
	active?: boolean;
}

export const mockNav: MockNavEntry[] = [
	{ group: 'Enseñanza' },
	{ label: 'Resumen' },
	{ label: 'Talleres', count: '4' },
	{ label: 'Entregas', count: '12', active: true },
	{ label: 'Estudiantes', count: '128' },
	{ group: 'Gestión' },
	{ label: 'Rúbricas' },
	{ label: 'Exportar notas' },
];

export interface MockStat {
	label: string;
	value: string;
	unit?: string;
	detail: string;
	dimDetail?: boolean;
}

export const mockStats: MockStat[] = [
	{ label: 'Calificadas por Yura', value: '118', unit: '/128', detail: 'con rúbrica' },
	{ label: 'Promedio del curso', value: '78', unit: '%', detail: 'taller 05' },
	{ label: 'Feedback enviado', value: '118', detail: 'por entrega' },
	{ label: 'Sin entregar', value: '4', detail: 'cierra el 27 abr', dimDetail: true },
];

export interface MockRow {
	initials: string;
	name: string;
	meta: string;
	tag: string;
	tagTone: 'g' | 't' | 'a' | 'v';
	barTone?: 'g';
	score: number;
}

export const mockRows: MockRow[] = [
	{
		initials: 'AM',
		name: 'Andrés M.',
		meta: 'taller 05 · entrega calificada',
		tag: 'Al día',
		tagTone: 'g',
		score: 82,
	},
	{
		initials: 'JS',
		name: 'Juana S.',
		meta: 'taller 05 · feedback enviado',
		tag: 'Revisado',
		tagTone: 't',
		score: 74,
	},
	{
		initials: 'MG',
		name: 'María G.',
		meta: 'taller 05 · entrega tardía',
		tag: 'Tarde',
		tagTone: 'a',
		barTone: 'g',
		score: 91,
	},
];
