import { AfterViewInit, Component, Input } from '@angular/core';
import { ProductInterface } from '../../models/Product';
import { ProductsService } from '../../services/products';
import { HeaderComponent } from '../../components/header/header.component';
import * as L from 'leaflet';

import { SeparatorComponent } from '../../components/separator/separator.component';
import { SellingPointsInterface, sellingPoints } from '../../mock/pontosDeVenda';

@Component({
  selector: 'app-pontos-de-venda',
  standalone: true,
  imports: [HeaderComponent, SeparatorComponent],
  templateUrl: './pontos-de-venda.component.html',
  styleUrl: './pontos-de-venda.component.css'
})

export class PontosDeVendaComponent implements AfterViewInit {
  private map:L.Map;
  private centroid:L.LatLngExpression= [-20.4810998, -54.635534 ];

  private onClick():void{
    console.log('oi')
  }

  icon = {
  icon: new L.DivIcon({
    className: 'my-div-icon',
    html: '<img class="my-div-image" src="../assets/palhas_icon.png" width="25px"/>'+
          '<span class="my-div-span">RAF Banff Airfield</span>'
    })
  };

  private initMap(): void {
    this.map = L.map('map', {
      center: this.centroid,
      zoom: 12
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 10,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    const locatedSellingPoints = sellingPoints.filter(sellingPoint => {
      return sellingPoint.coordenates.latitude != null && sellingPoint.coordenates.longitude != null
    })

    function getIcon(sellingPoint: SellingPointsInterface):L.MarkerOptions{
      const icon = {
        icon: new L.DivIcon({
          className: 'my-div-icon',
          html: '<img class="my-div-image" src="../assets/palhas_icon.png" width="25px"/>'+
                `<p class="my-div-span">${sellingPoint.name}</p>`
          })
        };
      return icon
  };

  function getOnClick(){
    
  }

    sellingPoints.forEach(sellingPoint => {
      L.marker([sellingPoint.coordenates.latitude ?? 0,sellingPoint.coordenates.longitude ?? 0], getIcon(sellingPoint)).addTo(this.map).on('click', this.onClick);
    })

    tiles.addTo(this.map);
  }

  constructor(private productsService: ProductsService) {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  get products() {
    return this.productsService.getProducts();
  }

}
