import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignDetailsComponent } from './feature/campaign/campaign-details/campaign-details.component';
import { HomePageComponent } from './feature/home/home-page/home-page.component';

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "campaign/:id", component: CampaignDetailsComponent },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
