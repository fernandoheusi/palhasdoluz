import { Component } from '@angular/core';
import { ProductsListComponent } from '../products-list/products-list.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { SeparatorComponent } from '../separator/separator.component';

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [ProductsListComponent, AboutUsComponent, SeparatorComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.css'
})
export class ContainerComponent {

}
