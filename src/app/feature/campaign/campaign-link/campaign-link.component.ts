import { Component, Input } from '@angular/core';
import { Campaign } from '../campaign';
import { CampaignDataService } from '../campaign-data.service';

@Component({
  selector: 'app-campaign-link',
  templateUrl: './campaign-link.component.html',
})
export class CampaignLinkComponent {
  @Input() campaignId!: number;
  public campaign?: Campaign

  constructor(
    private campaignDataService: CampaignDataService
  ) {
  }

  public get route() {
    return ["/campaign", this.campaignId]
  }

  ngOnChanges() {
    this.campaignDataService.getCampaignById(this.campaignId);
  }
}
