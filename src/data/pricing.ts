/** Sin registro se explora; el trimestre completo se paga una vez, sin suscripción. */

export interface Plan {
	name: string;
	price: string;
	priceNote: string;
	alt: string;
	audience: string;
	/** Admite <b> inline (se renderiza con set:html). */
	features: string[];
	highlight?: boolean;
}

export const plans: Plan[] = [
	{
		name: 'Explorar',
		price: '$0',
		priceNote: 'sin registro',
		alt: 'sin cuenta y sin tarjeta',
		audience: 'Para ver cómo trabaja Yura antes de decidir nada.',
		features: [
			'Planificas <b>una semana</b> y el documento sale entero',
			'Algunos bloques del currículo, para probar con lo tuyo',
			'Edición celda a celda y exportación a Word y PDF',
			'Entras y planificas: no hay que crear cuenta',
		],
	},
	{
		name: 'Yura completo',
		price: '$5',
		priceNote: 'por trimestre',
		alt: 'pago por trimestre',
		audience: 'Para armar de verdad lo que tienes que entregar.',
		features: [
			'La <b>micro del trimestre</b>: las 12 semanas, una vez por curso',
			'Todos los <b>PUD</b> de las unidades que entren en el trimestre',
			'El currículo completo de tu área y tu nivel, no una muestra',
			'Pagas solo el trimestre que usas: <b>sin renovación automática</b>',
		],
		highlight: true,
	},
];

export const earlyOffer =
	'Los 5 primeros docentes que se registren se llevan su primer trimestre completo gratis, sin tarjeta.';
