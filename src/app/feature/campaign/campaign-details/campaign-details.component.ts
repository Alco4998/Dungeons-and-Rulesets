import { Component, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TextChange } from 'typescript';
import { CharacterDataService } from '../../character/character-data.service';
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
    campaignDataService: CampaignDataService,
    characterDataService: CharacterDataService,
    route: ActivatedRoute
  ) {
    const campaignId = route.snapshot.params["id"]
    this.campaign = campaignDataService.getCampaignById(campaignId as number)

    this.campaign!.players = characterDataService.getCharactersByCampaignId(campaignId);
  };

  public updateDescription(description: string) {
    if (description != this.campaign?.description) {
      this.campaign!.description = description;
      console.log(this.campaign?.description)
    }
  }

  public updateDMNotes(notes: string) {
    if (notes != this.campaign?.DMNotes) {
      this.campaign!.DMNotes = notes
    }
  }
}
