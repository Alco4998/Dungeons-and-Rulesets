import { Injectable } from '@angular/core';
import { Campaign } from './campaign';

@Injectable({
  providedIn: 'root'
})
export class CampaignDataService {

  private data: Campaign[] = [
    {
      campaignId: 1,
      name: "Apple",
      description: "Aple able the",
    },
    {
      campaignId: 2,
      name: "Rmr 5e",
      description: "When do we level up?"
    }
  ]
  constructor() { }

  public getAllIds() {
    return this.data.map(c => c.campaignId)
  }
  getCampaignsAll() {
    return this.data;
  }

  public getCampaignById(id:number){
    return this.data.find(d => d.campaignId == id);
  }
}
