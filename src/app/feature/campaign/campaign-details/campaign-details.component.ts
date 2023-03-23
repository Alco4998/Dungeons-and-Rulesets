import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-campaign-details',
  templateUrl: './campaign-details.component.html',
  styleUrls: ['./campaign-details.component.scss']
})
export class CampaignDetailsComponent {
  cards = [ 
    {
      title: "Rmr 5e",
      description: "War wick is after the big bad world",
      DMNotes: "hehe i am going to TPK them",
    }
  ]
}
