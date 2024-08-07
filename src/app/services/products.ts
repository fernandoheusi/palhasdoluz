import { Product } from "../models/Product"
import { productsMock, ProductMock } from "../mock/products"
import { Injectable } from '@angular/core';
import { ProductInterface } from '../models/Product';

export function getProducts(){
	const products = productsMock.map((product: ProductMock) => {
		return new Product(product.name, product.value, product.picture, product.alt)
	})
	return products
}

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: ProductInterface[] = getProducts();

  getProducts(): ProductInterface[] {
    return this.products;
  }

  sumQuantity(): number {
    return this.products.reduce((sum, product) => sum + product.quantity, 0);
  }
}