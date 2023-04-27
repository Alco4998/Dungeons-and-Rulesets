import { Injectable } from '@angular/core';
import { Campaign } from './campaign';
import { HttpClient } from '@angular/common/http';
import { OracleResponse } from '../data-service/response';
import { campaignRequest } from './campaign-requests';
import { Character } from '../character/character';
import { map } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CampaignDataService {

  private data: Campaign[] = [
    {
      campaign_id: 1,
      name: "Apple",
      description: "Aple able the",
    },
    {
      campaign_id: 2,
      name: "Rmr 5e",
      description: "When do we level up?"
    }
  ]
  constructor(
    private http: HttpClient
  ) { }

  public getAllIds() {
    return this.data.map(c => c.campaign_id)
  }
  getCampaignsAll() {
    return this.http.get<OracleResponse<Campaign>>(campaignRequest.readAll).pipe(
      map((response) => {
        return response.items
      })
    );
  }

  public getCampaignById(id: number) {
    return this.http.get<OracleResponse<Campaign>>(campaignRequest.readCharacters + id).pipe(
      map((response) => {
        if (response.items) {
          return response.items[0]
        }
        return;
      })
    );
  }

  public getCharactersByCampaignId(campaignId: number) {
    return this.http.get<OracleResponse<Character>>(campaignRequest.readCharacters + campaignId).pipe(
      map((response) => {
        if (response.items) {
          return response.items
        }
        return EMPTY
      })
    );
  }
}
