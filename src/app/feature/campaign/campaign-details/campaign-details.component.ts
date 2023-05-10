import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campaign } from '../campaign';
import { CampaignDataService } from '../campaign-data.service';
import { map, switchMap, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
    route: ActivatedRoute
  ) {
    const campaignId = route.snapshot.params["id"]
    campaignDataService.getCampaignById(campaignId).pipe(
      switchMap((campaign) => {
        return campaignDataService.getCharactersByCampaignId(campaignId).pipe(
          map((players) => {
            campaign!.players = players;
            return campaign
          }),
        );
      }),
    ).subscribe((campaign) => this.campaign = campaign)
  };

  toggleEditing() {
    if(this.isEditing) {
      this.sendUpdate();
    }

    this.isEditing = !this.isEditing
  }

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

  public sendUpdate() {
    console.log("Updating")
  }
}
