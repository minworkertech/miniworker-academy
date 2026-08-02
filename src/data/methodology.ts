export interface MethodologyRow {
	icon: string;
	title: string;
	body: string;
}

export const methodology: MethodologyRow[] = [
	{
		icon: 'briefcase',
		title: 'Practican lo que van a enfrentar',
		body: 'El taller parte de una situación que existe hoy en el ejercicio profesional de tu disciplina, con sus restricciones y sus datos incompletos.',
	},
	{
		icon: 'globe',
		title: 'Conscientes de la sociedad',
		body: 'Los problemas se toman del presente —lo que discute el país, el sector, la comunidad—, no de un enunciado sin contexto.',
	},
	{
		icon: 'layers',
		title: 'Del recordar al resolver',
		body: 'Los talleres se escalan por nivel de exigencia siguiendo Bloom: menos memorizar, más analizar, decidir y sustentar.',
	},
	{
		icon: 'building-2',
		title: 'Pertinencia para tu programa',
		body: 'Un curso cuyo contenido se puede mostrar: retos actuales, criterios explícitos y evidencia de lo que cada estudiante produjo.',
	},
];
