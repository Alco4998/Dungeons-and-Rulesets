import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampainDetailsComponent } from './feature/campain/campain-details/campain-details.component';
import { HomePageComponent } from './feature/home/home-page/home-page.component';

const routes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "campain/:id", component: CampainDetailsComponent },
  { path: "**", redirectTo: "/home" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
