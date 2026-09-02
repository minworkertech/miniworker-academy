export interface FaqItem {
	q: string;
	a: string;
}

export const faq: FaqItem[] = [
	{
		q: 'El currículo escribe una misma destreza para 2.º, 3.º y 4.º. ¿Cómo sé cuál me toca?',
		a: 'Esos tres grados forman un mismo subnivel —Elemental—, y por eso comparten el código de la destreza. El alcance de cada grado está desagregado aparte: donde el texto del subnivel dice «hasta 9 999», para 3.º dice «hasta 1 000». Yura te pone las dos versiones a la vista y tú eliges cuál va al documento.',
	},
	{
		q: '¿Y si mi institución no trabaja por trimestres?',
		a: 'Escríbenos. Hay colegios con quimestres, con parciales o con una matriz propia, y mientras estamos en acceso anticipado queremos verlos uno por uno. Déjanos tu caso al registrarte y te contactamos.',
	},
	{
		q: '¿Sale con el formato de mi institución?',
		a: 'Hoy sale en el formato del Ministerio. Si tu institución usa uno propio, con su membrete y sus anexos, escríbenos: nos pasas la matriz, la montamos contigo y queda cargada para que tus documentos salgan listos para firmar. Es justo lo que estamos construyendo ahora, así que cada caso que nos llega entra antes.',
	},
	{
		q: '¿Puedo editarlo?',
		a: 'Editas celda por celda y escribes tus propias actividades. Yura arma el borrador; el documento que se descarga es el que tú aprobaste.',
	},
];
