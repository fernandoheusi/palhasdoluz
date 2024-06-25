import { Component, Input } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { SeparatorComponent } from '../separator/separator.component';
import { ProductInterface } from '../../models/Product';
import { BuyButtonComponent } from '../buy-button/buy-button.component';
import { SumQuantity } from '../../app.component';

export interface IncreaseCount {
  (): void;
}

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ProductsListComponent, AboutUsComponent, SeparatorComponent, BuyButtonComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

  @Input() products: ProductInterface[] = []
  @Input() sumQuantity: SumQuantity = ([])=>0;
}
