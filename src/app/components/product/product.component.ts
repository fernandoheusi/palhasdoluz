import { Component, Input } from '@angular/core';
import { ChangeQuantity, defaultIncreaseCount } from '../../models/Product';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})



export class ProductComponent {
  // #defaultProduct = {
  //   name: '',
  //   value: '0',
  //   picture: '',
  //   alt: '',
  // }

  // productIncreaseCount: ChangeQuantity = () => {
  //   this.productsListIncreaseCount()
  // }

  // @Input() product: ProductInterface = this.#defaultProduct
  @Input() productName: string = ''
  @Input() productValue: string = ''
  @Input() productPicture: string = ''
  @Input() productAlt: string = ''
  @Input() productQuantity: number = 0
  // @Input() productsListIncreaseCount: ChangeQuantity = defaultIncreaseCount
  @Input() increaseQuantity: ChangeQuantity = defaultIncreaseCount
  @Input() decreaseQuantity: ChangeQuantity = defaultIncreaseCount
}
