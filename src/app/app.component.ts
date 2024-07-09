import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { ProductsService, getProducts } from './services/products';
import { ProductInterface } from './models/Product';
import { HttpClientModule } from '@angular/common/http';
import { SellingPointsService } from './services/sellingPoints';
// import { mapsKey } from '../assets/environment/environment.env.js';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})


export class AppComponent {
  title = 'palhasdoluz';

  constructor(private productsService: ProductsService, private sellingPointsService: SellingPointsService) {
  }

  get products() {
    return this.productsService.getProducts();
  }

  get sellingPoints() {
    return this.sellingPointsService.getSellingPoints();
  }

  sumQuantity() {
    return this.productsService.sumQuantity;
  }
}
