import { Component, Input } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { Product, ProductInterface } from '../../models/Product';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    SvgComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  sumQuantity(products: ProductInterface[]){
    console.log('sumQuantity')
    let sum = 0;
    products.forEach(product=>sum += product.quantity)
    console.log({sum})
    return sum;
  };
  @Input() products: ProductInterface[] = []
}
