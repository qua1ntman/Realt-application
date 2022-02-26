import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdsEditingComponent } from './admin/ads-editing/ads-editing.component';
import { AdsModerationComponent } from './admin/ads-moderation/ads-moderation.component';
import { AppealsComponent } from './admin/appeals/appeals.component';

import { CabineteComponent } from './client/cabinete/cabinete.component';
import { CreateNewAdPageComponent } from './client/create-new-ad-page/create-new-ad-page.component';
import { MainComponent } from './main/main.component';
import { MapPageComponent } from './map-page/map-page.component';

const myAdsRoutes: Routes = [
  { path: '', redirectTo: '/published', pathMatch: 'full' },
  {path: 'my_adspublished', component: AdsModerationComponent},
  {path: 'penging_review', component: AdsEditingComponent},
  {path: 'refused', component: AdsEditingComponent},
  {path: 'deactivated', component: AdsEditingComponent},

];

const adminRoutes: Routes = [
  {path: '', redirectTo: 'moderation', pathMatch: 'full' },
  {path: 'moderation', component: AdsModerationComponent},
  {path: 'edit', component: AdsEditingComponent},
  {path: 'appeals', component: AppealsComponent}
];


const accountRoutes: Routes = [
  { path: '', redirectTo: '/my_ads', pathMatch: 'full' },
  {path: 'my_ads', component: AdsModerationComponent, children: myAdsRoutes},
  {path: 'chat', component: AdsEditingComponent},
];

const appRoutes: Routes = [
  { path: '', redirectTo: '/ads', pathMatch: 'full' },
  { path: 'account', component: CabineteComponent, children: accountRoutes },
  { path: 'admin', component: AdminComponent, children: adminRoutes},
  { path: 'ads', component: MainComponent },
  { path: 'create', component: CreateNewAdPageComponent},
  { path: 'map', component: MapPageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }






