import { Injectable } from '@angular/core';
import { Campaign } from './campaign';
import { HttpClient } from '@angular/common/http';
import { OracleResponse } from '../../Common/data-service/response';
import { Character } from '../character/character';
import { map } from 'rxjs/operators';
import { CampaignRequest } from './campaign-requests';
import { RestHelperService } from 'src/app/Common/data-service/rest-helper.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignDataService {
  constructor(
    private restHelperService: RestHelperService,
    private http: HttpClient,
  ) { }

  public getCampaignsAll() {
    return this.restHelperService.get<Campaign>(CampaignRequest.readAll)
  }

  public getCampaignById(id: number) {
    return this.restHelperService.get<Campaign>(CampaignRequest.read + id).pipe(
      map((items) => {
        if (!items) { return; }
        return items[0]
      })
    );
  }

  public getCharactersByCampaignId(campaignId: number) {
    return this.http.get<OracleResponse<Character>>(CampaignRequest.readCharacters + campaignId).pipe(
      map((response) => response.items)
    );
  }
}
