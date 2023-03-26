import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeCampaignCardComponent } from './home-campaign-card/home-campaign-card.component';
import { HomeCharactersCardComponent } from './home-characters-card/home-characters-card.component';
import { RouterModule } from '@angular/router';
import { CampaignModule } from '../campaign/campaign.module';

@NgModule({
  declarations: [
    HomePageComponent,
    HomeCampaignCardComponent,
    HomeCharactersCardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    CampaignModule,
    MatCardModule,
    MatToolbarModule,
    LayoutModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule,
  ]
})
export class HomeModule { }
