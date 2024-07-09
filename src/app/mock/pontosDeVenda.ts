export const sellingPoints = [
	{
		name: 'Q cerveja',
		coordenates: {
			latitude: null,
			longitude: null,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Comida À mineira',
		coordenates: {
			latitude: null,
			longitude: null,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Comitiva do Chope',
		coordenates: {
			latitude: -20.4796253,
			longitude: -54.585921,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Xadrez',
		coordenates: {
			latitude: -20.4741392,
			longitude: -54.6904484,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Da hora',
		coordenates: {
			latitude: -20.4741295,
			longitude: -54.6904485,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Extrabom',
		coordenates: {
			latitude: -20.4834000,
			longitude: -54.6691000,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Excelência',
		coordenates: {
			latitude: null,
			longitude: null,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Milena',
		coordenates: {
			latitude: null,
			longitude: null,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Up Beer',
		coordenates: {
			latitude: -20.4702542,
			longitude: -54.6378693,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Big',
		coordenates: {
			latitude: null,
			longitude: null,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Escova',
		coordenates: {
			latitude: -20.4935713,
			longitude: -54.6957601,
		},
		googleMapsUrl: null,
	},
	{
		name: 'JR Mercado',
		coordenates: {
			latitude: null,
			longitude: null,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Tendas',
		coordenates: {
			latitude: -20.4824421,
			longitude: -54.6624973,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Camargo',
		coordenates: {
			latitude: -20.4827808,
			longitude: -54.6731932,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Tex HOOKA',
		coordenates: {
			latitude: -20.4718858,
			longitude: -54.6454757,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Morumbi Beer',
		coordenates: {
			latitude: -20.4898292,
			longitude: -54.6062172,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Gelados',
		coordenates: {
			latitude: null,
			longitude: null,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Casa do ovo',
		coordenates: {
			latitude: null,
			longitude: null,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Amigão',
		coordenates: {
			latitude: -20.4930085,
			longitude: -54.7230606,
		},
		googleMapsUrl: null,
	},
	{
		name: 'Gordinho',
		coordenates: {
			latitude: null,
			longitude: null,
		},
		googleMapsUrl: null,
	},
]

interface Coordinates {
	latitude: number | null;
	longitude: number | null;	
}

export interface SellingPointsInterface {
	name: string;
	coordenates: Coordinates;
	googleMapsUrl: string | null;
}
