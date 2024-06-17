import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { HeaderComponent } from './components/header/header.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ContainerComponent, HeaderComponent, ProductsListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'palhasdoluz';
}
