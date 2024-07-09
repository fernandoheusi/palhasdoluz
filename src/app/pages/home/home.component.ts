import { Component } from '@angular/core';
import { ProductsService } from '../../services/products';
import { NgIf } from '@angular/common';
import { HeaderComponent } from '../../components/header/header.component';
import { ContainerComponent } from '../../components/container/container.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgIf,
    HeaderComponent,
    ContainerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  get products() {
    return this.productsService.getProducts();
  }

  sumQuantity = this.productsService.sumQuantity;
}