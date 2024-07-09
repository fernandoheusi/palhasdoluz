import { Component, Input } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { Product, ProductInterface } from '../../models/Product';
import { SumQuantity } from '../../app.component';
import { Router } from '@angular/router';


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
  constructor(private router: Router) { }

  @Input() sumQuantity: SumQuantity = ([])=>0;
  @Input() products: ProductInterface[] = []

  handleClick(route:string){
    this.router.navigateByUrl(route);
  }
}
