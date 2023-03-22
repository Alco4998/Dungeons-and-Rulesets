import { Injectable } from '@angular/core';
import { Campain } from './Campain';

@Injectable({
  providedIn: 'root'
})
export class CampainDataService {
  private data: Campain[] = [
    {
      CampainId: 1,
      Name: "Apple",
      Description: "Aple able the",
    }
  ]
  constructor() { }

  public getCampainById(id:number){
    return this.data.find(d => d.CampainId == id);
  }
  
}
