import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from '../campaign';
import { CampaignDataService } from '../campaign-data.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent {
  public campaign?: Campaign;
  public isEditing = false;

  constructor(
    private campaignDataService: CampaignDataService,
    route: ActivatedRoute
  ) {
    const campaignId = route.snapshot.params["id"]
    this.campaign = this.campaignDataService.getCampaignById(campaignId as number) 
  };
}