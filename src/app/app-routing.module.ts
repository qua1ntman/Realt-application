import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChosenAdPageComponent } from './chosen-ad-page/chosen-ad-page.component';
import { MainComponent } from './main/main.component';
import { MapPageComponent } from './map-page/map-page.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/ads', pathMatch: 'full' },
  { path: 'ads', component: MainComponent },
  { path: 'chosen_ad', component: ChosenAdPageComponent},
  { path: 'map', component: MapPageComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }






