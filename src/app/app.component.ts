import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { getProducts } from './services/products';
import { ProductInterface } from './models/Product';
import { HttpClientModule } from '@angular/common/http';
import { MatIcon, MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser'; 

export type SumQuantity = (products:ProductInterface[])=>number;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ContainerComponent, 
    HeaderComponent, 
    ProductsListComponent, 
    HttpClientModule, 
    MatIcon
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'palhasdoluz';
  products: ProductInterface[] = getProducts();
  sumQuantity(products: ProductInterface[]){
    let sum = 0;
    products.forEach(product=>sum += product.quantity)
    return sum;
  };
}
