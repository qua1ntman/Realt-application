import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ClientRoutingModule } from './client-routing.module';
import { ClientPageComponent } from './client-page/client-page.component';
import { AdminChatComponent } from './admin-chat/admin-chat.component';


@NgModule({
  declarations: [
    ClientPageComponent,
    AdminChatComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    ClientRoutingModule,
  ]
})
export class ClientModule { }
