import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientComponent } from './client.component';
import { ClientAdsComponent } from './client-ads/client-ads.component';

@NgModule({
  declarations: [ClientComponent, ClientAdsComponent],
  imports: [CommonModule, ClientRoutingModule],
})
export class ClientModule {}
