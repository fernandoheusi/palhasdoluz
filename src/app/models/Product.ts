export class Product {
	name: string = '';
	value: number = 0;
	picture: string = '';
	alt: string = '';
	quantity: number = 0;

	constructor(name: string, value: number, picture: string, alt: string) {
		this.name = name;
		this.value = value;
		this.picture = picture;
		this.alt = alt;
	}

	increaseQuantity: ChangeQuantity = () => {
		this.quantity++
	}

	decreaseQuantity: ChangeQuantity = () => {
		if (this.quantity > 0) this.quantity--
	}
}

export interface ChangeQuantity {
  (): void;
}

export interface ProductInterface {
  name: string;
  value: number;
  picture: string;
  alt: string;
	quantity: number;
	increaseQuantity: ChangeQuantity;
	decreaseQuantity: ChangeQuantity;
}

export function defaultIncreaseCount(): void {
  return
}