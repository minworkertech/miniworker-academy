export interface HonestyCard {
	title: string;
	/** Admite marcado inline (se renderiza con set:html). */
	body: string;
}

export const honestyCards: HonestyCard[] = [
	{
		title: 'No reemplaza tu pedagogía',
		body: 'Tú diseñas el curso, el currículum y los criterios. Yura ejecuta la parte mecánica; el juicio y la última palabra siguen siendo tuyos.',
	},
	{
		title: 'No todas las materias están abiertas hoy',
		body: 'Programación está en piloto. Las demás —incluida la tuya— se abren por acceso anticipado, en orden de demanda y contigo en el proceso.',
	},
	{
		title: 'Para código, tus estudiantes necesitan GitHub',
		body: 'Cada uno con su cuenta. Incluimos un mini-tutorial en español para la primera semana; con <span class="mono">git push</span> les alcanza.',
	},
	{
		title: 'No prometemos cifras que no hemos medido',
		body: 'Está diseñado para recuperarte decenas de horas por semestre. Cuando tengamos datos de los pilotos, los publicamos aquí con nombre y curso.',
	},
];
