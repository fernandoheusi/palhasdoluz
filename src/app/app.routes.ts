import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PontosDeVendaComponent } from './pages/pontos-de-venda/pontos-de-venda.component';

export const routes: Routes = [
	{path:'pontos',component: PontosDeVendaComponent},
	{path:'',component: HomeComponent}
];
