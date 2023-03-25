import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from '../Campaign';
import { CampaignDataService } from '../campaign-data.service';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent {
  public campaign?: Campaign;
  cards = [
    {
      title: "Rmr 5e",
      description: "War wick is after the big bad world",
      DMNotes: "hehe i am going to TPK them",
    }
  ];

  constructor(
    private campaignDataService: CampaignDataService,
    route: ActivatedRoute
  ) {
    const campaignId = route.snapshot.params["id"]
    this.campaign = this.campaignDataService.getCampaignById(campaignId) 
  };
}
