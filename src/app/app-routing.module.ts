import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignDetailsComponent } from './feature/campaign/campaign-details/campaign-details.component';
import { CharacterDetailsComponent } from './feature/character/character-details/character-details.component';
import { HomePageComponent } from './feature/home/home-page/home-page.component';

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "campaign/:id", component: CampaignDetailsComponent },
  { path: "character/:id", component: CharacterDetailsComponent },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
