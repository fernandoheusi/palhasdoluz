import { Component, Input } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { SeparatorComponent } from '../separator/separator.component';
import { ProductInterface } from '../../models/Product';

export interface IncreaseCount {
  (): void;
}

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ProductsListComponent, AboutUsComponent, SeparatorComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {
  // count = 0;

  @Input() products: ProductInterface[] = []
}
