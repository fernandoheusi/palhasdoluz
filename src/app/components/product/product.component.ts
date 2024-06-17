import { Component, Input } from '@angular/core';
import { ProductInterface } from '../products-list/products-list.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})



export class ProductComponent {
  #defaultProduct = {
    name: '',
    value: '0',
    // value: 0,
    picture: '',
    alt: '',
  }
  
  @Input() product: ProductInterface = this.#defaultProduct
  @Input() productName: string = ''
  @Input() productValue: string = ''
  @Input() productPicture: string = ''
  @Input() productAlt: string = ''
}
