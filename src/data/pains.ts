export interface Pain {
	icon: string;
	title: string;
	body: string;
}

export const pains: Pain[] = [
	{
		icon: 'clock',
		title: 'Nueve micros al año, más los PUD',
		body: 'Una micro por curso y por trimestre, y encima el PUD de cada unidad. Con tres cursos la cuenta se te va del fin de semana.',
	},
	{
		icon: 'table-2',
		title: 'Buscar la destreza cuesta más que escribir la actividad',
		body: 'Abrir el currículo, ubicar el código, copiar el indicador y el criterio. Y repetirlo fila por fila.',
	},
];
