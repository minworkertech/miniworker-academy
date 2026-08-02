export interface Pain {
	icon: string;
	title: string;
	body: string;
}

export const pains: Pain[] = [
	{
		icon: 'moon',
		title: 'Calificas de noche y en fin de semana',
		body: 'Abres una entrega, lees, comentas, cierras. Multiplícalo por 120 estudiantes y por cada semana del semestre.',
	},
	{
		icon: 'rotate-ccw',
		title: 'Rehaces el material cada semestre',
		body: 'Los mismos talleres, otra vez desde cero, porque el archivo del semestre pasado ya no encaja con tu plan de este.',
	},
	{
		icon: 'table-2',
		title: 'Las notas viven en un Excel a mano',
		body: 'Copiar, pegar y cuadrar ponderaciones a las 2 a. m., rezando para que no falte una columna.',
	},
	{
		icon: 'search-x',
		title: 'No tienes evidencia de quién aprendió',
		body: 'Sabes quién entregó. Lo que no puedes mostrar es quién avanzó, en qué criterio y con qué prueba.',
	},
];
