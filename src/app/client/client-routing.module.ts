import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminChatComponent } from './admin-chat/admin-chat.component';
import { ClientPageComponent } from './client-page/client-page.component';
import { CreateNewAdPageComponent } from './create-new-ad-page/create-new-ad-page.component';


const myAdsRoutes: Routes = [
  {path: 'published', component: AdminChatComponent},
  {path: 'penging_review', component: AdminChatComponent},
  {path: 'refused', component: AdminChatComponent},
  {path: 'deactivated', component: AdminChatComponent},
];

const accountRoutes: Routes = [
  { path: 'create', component: CreateNewAdPageComponent},
  { path: 'client', redirectTo: '/client/my_page', pathMatch: 'full' },
  { path: 'client/my_page', component: ClientPageComponent, children: myAdsRoutes },
  { path: 'client/admin_chat', component: AdminChatComponent },
];

@NgModule({
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
