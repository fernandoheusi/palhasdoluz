import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { SeparatorComponent } from '../separator/separator.component';

export interface ProductInterface {
  name: string;
  value: string;
  picture: string;
  alt: string;
}

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductComponent,SeparatorComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})
export class ProductsListComponent {
  products: ProductInterface[] = [
    {
      name: 'ninho',
      value: 'R$ 5,00',
      picture: 'assets/Peda-(kahk-el-eid)-eid-and-ramadan-dates-sweets-PNG.png',
      alt: 'assets/ninho.png',
    },
    {
      name: 'paçoca',
      value: 'R$ 5,00',
      picture: 'assets/Peda-(kahk-el-eid)-eid-and-ramadan-dates-sweets-PNG.png',
      alt: 'assets/paçoca.png',
    },
    {
      name: 'morango',
      value: 'R$ 5,00',
      picture: 'assets/Peda-(kahk-el-eid)-eid-and-ramadan-dates-sweets-PNG.png',
      alt: 'assets/morango.png',
    },
    {
      name: 'capuccino',
      value: 'R$ 5,00',
      picture: 'assets/Peda-(kahk-el-eid)-eid-and-ramadan-dates-sweets-PNG.png',
      alt: 'assets/capuccino.png',
    },
    {
      name: 'chocolate',
      value: 'R$ 6,00',
      picture: 'assets/Peda-(kahk-el-eid)-eid-and-ramadan-dates-sweets-PNG.png',
      alt: 'assets/chocolate.png',
    },
  ]
}
