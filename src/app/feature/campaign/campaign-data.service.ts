import { Injectable } from '@angular/core';
import { Campaign } from './Campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignDataService {
  private data: Campaign[] = [
    {
      CampaignId: 1,
      Name: "Apple",
      Description: "Aple able the",
    }
  ]
  constructor() { }

  public getCampaignById(id:number){
    return this.data.find(d => d.CampaignId == id);
  }
  
}
