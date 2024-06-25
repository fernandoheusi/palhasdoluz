import { Component, Input } from '@angular/core';
import { SumQuantity } from '../../app.component';
import { ProductInterface } from '../../models/Product';

@Component({
  selector: 'app-buy-button',
  standalone: true,
  imports: [],
  templateUrl: './buy-button.component.html',
  styleUrl: './buy-button.component.css'
})
export class BuyButtonComponent {
  @Input() sumQuantity:SumQuantity = ([])=>0;
  @Input() products: ProductInterface[] = []
  getTextMessage = ()=>{
    const textArray = this.products.reduce((acc:string[],current)=>{
      if(current.quantity>0) acc.push(`${current.quantity} - ${current.name}`)
      return acc
    },['Palhas do Luz, me ajudem!','Estou precisando de:'])
    return textArray.join('%0a')
  }
}
