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
  public screenWidth: any;  
  public screenHeight: any;  
    
  ngOnInit() {  
      this.screenWidth = window.innerWidth;  
      this.screenHeight = window.innerHeight;  
  }  

  @Input() products: ProductInterface[] = []

  calculateProductsListWidth() {
    const productsPerLine = this.screenWidth/220;
    return productsPerLine *120 + (productsPerLine-1)*20
  }
  
}