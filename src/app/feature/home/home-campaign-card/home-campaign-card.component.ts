import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Campaign } from '../../campaign/campaign';
import { CampaignDataService } from '../../campaign/campaign-data.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-campaign-card',
  templateUrl: './home-campaign-card.component.html',
})
export class HomeCampaignCardComponent {
  public campaigns$: Observable<Campaign[] | undefined>;

  constructor(
    campaignDataService: CampaignDataService,
  ) { 
    this.campaigns$ = campaignDataService.getCampaignsAll();
  }
}
