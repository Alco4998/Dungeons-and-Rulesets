import { Injectable } from '@angular/core';
import { Campaign } from './campaign';
import { HttpClient } from '@angular/common/http';
import { OracleResponse } from '../data-service/response';
import { Character } from '../character/character';
import { map } from 'rxjs/operators';
import { campaignRequest } from './campaign-requests';

@Injectable({
  providedIn: 'root'
})
export class CampaignDataService {
  constructor(
    private http: HttpClient
  ) { }
  
  public getCampaignsAll() {
    return this.http.get<OracleResponse<Campaign>>(campaignRequest.readAll).pipe(
      map((response) => response.items)
    );
  }

  public getCampaignById(id: number) {
    return this.http.get<OracleResponse<Campaign>>(campaignRequest.read + id).pipe(
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
      map((response) => response.items)
    );
  }
}
