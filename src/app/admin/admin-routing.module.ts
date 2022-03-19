import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAdPageComponent } from '../client/edit-ad-page/edit-ad-page.component';
import { routes } from '../routes';
import { AdminChatForAdminComponent } from './admin-chat-for-admin/admin-chat-for-admin.component';
import { AdsEditingComponent } from './ads-editing/ads-editing.component';
import { AdsModerationComponent } from './ads-moderation/ads-moderation.component';

const adminRoutes: Routes = [
  { path: '', redirectTo: 'moderation', pathMatch: 'full' },
  { path: routes.admin.adminChild.moderation, component: AdsModerationComponent },
  { path: routes.admin.adminChild.edit, component: AdsEditingComponent },
  { path: routes.admin.adminChild.editPage, component: EditAdPageComponent },
  { path: routes.admin.adminChild.adminChat, component: AdminChatForAdminComponent },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
