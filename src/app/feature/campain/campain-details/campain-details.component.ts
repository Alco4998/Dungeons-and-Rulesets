import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Campain } from '../Campain';
import { CampainDataService } from '../campain-data.service';

@Component({
  selector: 'app-campain-details',
  templateUrl: './campain-details.component.html',
  styleUrls: ['./campain-details.component.scss']
})
export class CampainDetailsComponent implements OnInit {
  public campainId!: number;
  public campain?: Campain; 
  public editing = false;
  
  constructor(
    route: ActivatedRoute,
    campainDataService: CampainDataService,
  ) {
    this.campainId = route.snapshot.params["id"] as number;
    this.campain = campainDataService.getCampainById(this.campainId);
  }

  ngOnInit(): void {
  }

  changeMode() {
    this.editing = !this.editing;
    console.log("clicked")
  }
}
