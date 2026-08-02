export interface FaqItem {
	q: string;
	a: string;
}

export const faq: FaqItem[] = [
	{
		q: '¿Y si no estoy de acuerdo con la nota que puso Yura?',
		a: 'La cambias. Yura propone la nota con el detalle de cada criterio; tú ajustas lo que quieras antes de publicar. Nada le llega al estudiante sin que tú lo apruebes: la última palabra siempre es tuya.',
	},
	{
		q: '¿Los talleres que genera sirven tal cual o me toca reescribirlos?',
		a: 'Salen de tu sílabo y de tus temas, así que llegan en tu contexto y con tu nivel de exigencia. Aun así los revisas y editas antes de publicar — cambias el enunciado, los pesos o el caso, y esa versión queda guardada para el próximo semestre.',
	},
	{
		q: '¿Cómo sé que califica parejo y no a la suerte?',
		a: 'Porque no inventa criterios: aplica los tuyos, uno por uno, con el peso que tú definiste (las métricas suman 100). Cada punto queda con la evidencia de dónde salió, y la entrega 1 se lee con la misma profundidad que la 128.',
	},
	{
		q: 'Un estudiante me reclama la nota. ¿Qué le muestro?',
		a: 'Abres su entrega y ves criterio por criterio qué obtuvo y por qué, con el fragmento de su trabajo que lo sustenta. La conversación deja de ser "usted me bajó puntos" y pasa a ser sobre el trabajo.',
	},
	{
		q: '¿Y si mis estudiantes hacen la entrega con IA?',
		a: 'No te vendemos un detector. Lo que hacemos es diseñar talleres que se resuelven con criterio: casos del presente, contexto local y decisiones que hay que sustentar. Además ves el proceso —cuándo trabajó, cómo avanzó—, no solo el documento final.',
	},
	{
		q: '¿Puedo entrar con un curso que ya empezó?',
		a: 'Sí. Cargas tu sílabo y tus rúbricas y arrancas en el próximo taller; no tienes que rehacer lo que ya calificaste. Muchos docentes entran a mitad de semestre justo cuando la corrección se les acumula.',
	},
	{
		q: '¿Qué pasa con el trabajo y los datos de mis estudiantes?',
		a: 'Las entregas se usan para calificarlas y darles feedback, nada más: no se publican ni se venden. En programación, el código vive en la cuenta de GitHub del estudiante y su historial sigue siendo de él.',
	},
];
