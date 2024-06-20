import { Product } from "../models/Product"
import { productsMock, ProductMock } from "../mock/products"

export function getProducts(){
	const products = productsMock.map((product: ProductMock) => {
		return new Product(product.name, product.value, product.picture, product.alt)
	})
	return products
}
