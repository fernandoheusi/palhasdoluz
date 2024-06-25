import { Component, Input } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { Product, ProductInterface } from '../../models/Product';
import { SumQuantity } from '../../app.component';

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
  @Input() sumQuantity: SumQuantity = ([])=>0;
  @Input() products: ProductInterface[] = []
}
