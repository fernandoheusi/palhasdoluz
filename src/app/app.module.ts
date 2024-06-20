import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SvgComponent } from './components/svg/svg.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    HttpClientModule,
    SvgComponent
  ]
})
export class AppModule { }
