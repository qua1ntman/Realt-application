import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdsEditingComponent } from './ads-editing/ads-editing.component';
import { AdsModerationComponent } from './ads-moderation/ads-moderation.component';
import { AppealsComponent } from './appeals/appeals.component';


const adminRoutes: Routes = [
  {path: '', redirectTo: 'moderation', pathMatch: 'full' },
  {path: 'moderation', component: AdsModerationComponent},
  {path: 'edit', component: AdsEditingComponent},
  {path: 'appeals', component: AppealsComponent}
];

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent, children: adminRoutes},
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
