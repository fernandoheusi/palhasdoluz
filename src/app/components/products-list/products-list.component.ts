import { Component, Input } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { SeparatorComponent } from '../separator/separator.component';
import { ProductInterface } from '../../models/Product';

@Component({
  selector: 'app-products-list',
  standalone: true,
  imports: [ProductComponent,SeparatorComponent],
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css'
})


export class ProductsListComponent {
  // products: ProductInterface[] = [
  //   {
  //     name: 'ninho',
  //     value: 'R$ 5,00',
  //     picture: 'assets/Peda-(kahk-el-eid)-eid-and-ramadan-dates-sweets-PNG.png',
  //     alt: 'assets/ninho.png',
  //   },
  //   {
  //     name: 'paçoca',
  //     value: 'R$ 5,00',
  //     picture: 'assets/Peda-(kahk-el-eid)-eid-and-ramadan-dates-sweets-PNG.png',
  //     alt: 'assets/paçoca.png',
  //   },
  //   {
  //     name: 'morango',
  //     value: 'R$ 5,00',
  //     picture: 'assets/Peda-(kahk-el-eid)-eid-and-ramadan-dates-sweets-PNG.png',
  //     alt: 'assets/morango.png',
  //   },
  //   {
  //     name: 'capuccino',
  //     value: 'R$ 5,00',
  //     picture: 'assets/Peda-(kahk-el-eid)-eid-and-ramadan-dates-sweets-PNG.png',
  //     alt: 'assets/capuccino.png',
  //   },
  //   {
  //     name: 'chocolate',
  //     value: 'R$ 6,00',
  //     picture: 'assets/Peda-(kahk-el-eid)-eid-and-ramadan-dates-sweets-PNG.png',
  //     alt: 'assets/chocolate.png',
  //   },
  // ]

  // productsListIncreaseCount:ChangeQuantity = () => {
  //   this.increaseCount()
  //   console.log('productIncreaseCount',this.count)
  // }

  // @Input() count:number = 0
  // @Input() increaseCount: ChangeQuantity=defaultIncreaseCount;
  @Input() products: ProductInterface[] = []
}