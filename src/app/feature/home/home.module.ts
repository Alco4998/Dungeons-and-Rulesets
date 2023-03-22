import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampainModule } from '../campain/campain.module';
import { HomePageComponent } from './home-page/home-page.component';

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    CampainModule,
  ]
})
export class HomeModule { }
