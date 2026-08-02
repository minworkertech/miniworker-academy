export interface Chip {
	icon: string;
	label: string;
}

export const chips: Chip[] = [
	{ icon: 'list-checks', label: 'respeta tus rúbricas' },
	{ icon: 'refresh-cw', label: 'convive con tu Moodle' },
	{ icon: 'languages', label: 'en español, precio LATAM' },
	{ icon: 'scale', label: 'evidencia objetiva' },
	{ icon: 'clock', label: 'menos horas corrigiendo' },
];

export interface ComparisonRow {
	topic: string;
	others: string;
	yura: string;
}

export const comparison: ComparisonRow[] = [
	{
		topic: 'Idioma',
		others: 'Interfaz y feedback en inglés; tú traduces al estudiante.',
		yura: 'Español LATAM de punta a punta: interfaz, feedback y soporte.',
	},
	{
		topic: 'Precio',
		others: 'Cobro por estudiante, en presupuesto de universidad grande.',
		yura: 'Pricing LATAM: lo puedes pagar tú, sin comité de compras.',
	},
	{
		topic: 'Tus formatos',
		others: 'Su rúbrica, su escala, su forma de calificar.',
		yura: 'Tus rúbricas y tus ponderaciones; la nota sale con tu fórmula.',
	},
	{
		topic: 'Moodle',
		others: 'Buscan reemplazar tu plataforma institucional.',
		yura: 'Convive: calificas en Yura y exportas cuando toque.',
	},
	{
		topic: 'Alcance',
		others: 'Pensadas para una disciplina, casi siempre código.',
		yura: 'Un motor por materia: empezamos con la tuya en acceso anticipado.',
	},
];
