export type BillingPeriod = 'm' | 's' | 'a';

/** Precios y textos alternativos por periodo de facturación (los cambia el toggle). */
export const billingOptions: { key: BillingPeriod; label: string }[] = [
	{ key: 'm', label: 'Mensual' },
	{ key: 's', label: 'Semestral' },
	{ key: 'a', label: 'Anual' },
];

export interface BillingPrices {
	basic: string;
	pro: string;
	altBasic: string;
	altPro: string;
}

export const billingPrices: Record<BillingPeriod, BillingPrices> = {
	m: {
		basic: '$20',
		pro: '$35',
		altBasic: 'o $18/mes semestral · $16/mes anual',
		altPro: 'o $31/mes semestral · $28/mes anual',
	},
	s: {
		basic: '$18',
		pro: '$31',
		altBasic: 'facturado por semestre · $20/mes mensual',
		altPro: 'facturado por semestre · $35/mes mensual',
	},
	a: {
		basic: '$16',
		pro: '$28',
		altBasic: 'facturado por año · $20/mes mensual',
		altPro: 'facturado por año · $35/mes mensual',
	},
};
