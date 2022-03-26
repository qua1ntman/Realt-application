import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminChatForAdminComponent } from './admin-chat-for-admin/admin-chat-for-admin.component';
import { AdsModerationComponent } from './ads-moderation/ads-moderation.component';
import { AdsEditingComponent } from './ads-editing/ads-editing.component';



@NgModule({
  declarations: [
    AdminChatForAdminComponent,
    AdsModerationComponent,
    AdsEditingComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
