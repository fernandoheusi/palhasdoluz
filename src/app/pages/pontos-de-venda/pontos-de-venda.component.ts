import { AfterViewInit, Component, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';
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
  @Inject(DOCUMENT) private document: Document

  private onClick():void{
    console.log('oi')
  }

  icon = {
  icon: new L.DivIcon({
    className: 'my-div-icon',
    html: '<img class="my-div-image" src="../assets/palhas_icon.png" width="25px" height="25px"/>'+
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
          html: `
                <div class="icon-div">
                  <img href=${sellingPoint.googleMapsUrl} class="my-div-image" src="../assets/palhas_icon.png" width="25px" height="25px"/>
                  <p class="my-div-span">${sellingPoint.name}</p>
                </div>
                `
          })
        };
      return icon
  };
  function goToUrl(sellingPoint: SellingPointsInterface):()=>void {
    return function (){window.open(
      `${sellingPoint.googleMapsUrl}`,
      '_blank' 
    );}
  }
  
  function getOnClick(sellingPoint: SellingPointsInterface):()=>void{
    return goToUrl(sellingPoint)
  }
  
  sellingPoints.forEach(sellingPoint => {
    // L.marker([sellingPoint.coordenates.latitude ?? 0,sellingPoint.coordenates.longitude ?? 0], getIcon(sellingPoint)).addTo(this.map).on('click', this.onClick);
    const correctedLatitude = (sellingPoint.coordenates.latitude ?? 0) - 0
    const correctedLongitude = (sellingPoint.coordenates.longitude ?? 0) + 0.00
    // L.marker([correctedLatitude,correctedLongitude], getIcon(sellingPoint)).addTo(this.map).on('click', getOnClick(sellingPoint)).bindPopup('A pretty CSS popup.<br> Easily customizable.')
    L.marker([correctedLatitude,correctedLongitude], getIcon(sellingPoint)).addTo(this.map).bindPopup(`<a href=${sellingPoint.googleMapsUrl} target=_blank>${sellingPoint.name}</a>`)
  })
  
  tiles.addTo(this.map);
}

  constructor(private productsService: ProductsService,) {
  }


  ngAfterViewInit(): void {
    this.initMap();
  }

  get products() {
    return this.productsService.getProducts();
  }

}
