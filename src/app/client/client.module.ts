import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ClientRoutingModule } from './client-routing.module';
import { AdminChatComponent } from './admin-chat/admin-chat.component';
import { ClientComponent } from './client.component';
import { ClientAdsComponent } from './client-ads/client-ads.component';

@NgModule({
  declarations: [AdminChatComponent, ClientComponent, ClientAdsComponent],
  imports: [FormsModule, CommonModule, HttpClientModule, ClientRoutingModule],
})
export class ClientModule {}
