import { Injectable } from '@angular/core';
import { sellingPoints, SellingPointsInterface } from "../mock/pontosDeVenda";

export function getSellingPoints(){
  
	return sellingPoints
}

@Injectable({
  providedIn: 'root',
})
export class SellingPointsService {
  private sellingPoints: SellingPointsInterface[] = getSellingPoints();

  getSellingPoints(): SellingPointsInterface[] {
    return this.sellingPoints;
  }
}