import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampainLinkComponent } from './campain-link/campain-link.component';
import { CampainDetailsComponent } from './campain-details/campain-details.component';

@NgModule({
  declarations: [
    CampainLinkComponent,
    CampainDetailsComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CampainLinkComponent,
    CampainDetailsComponent,
  ] 
})
export class CampainModule { }
