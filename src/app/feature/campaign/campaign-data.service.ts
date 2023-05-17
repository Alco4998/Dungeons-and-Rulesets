import { Injectable } from '@angular/core';
import { Campaign } from './campaign';
import { HttpClient } from '@angular/common/http';
import { OracleResponse } from '../../Common/data-service/response';
import { map } from 'rxjs/operators';
import { CampaignRequest } from './campaign-requests';
import { RestHelperService } from 'src/app/Common/data-service/rest-helper.service';
import { Character } from '../character/models/character';

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
    return this.restHelperService.get<Character>(CampaignRequest.readCharacters + campaignId);
  }

  public updateCampaign(campaign: Campaign) {
    return this.restHelperService.put<Campaign>(CampaignRequest.readCharacters + campaign.campaign_id, campaign);
  }
}
