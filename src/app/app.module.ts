import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule }   from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './authorization/sign-up/sign-up.component';
import { SignInComponent } from './authorization/sign-in/sign-in.component';
import { AdminComponent } from './admin/admin.component';
import { AdsModerationComponent } from './admin/ads-moderation/ads-moderation.component';
import { AdsEditingComponent } from './admin/ads-editing/ads-editing.component';
import { AppealsComponent } from './admin/appeals/appeals.component';
import { CabineteComponent } from './client/cabinete/cabinete.component';
import { EditAdPageComponent } from './client/edit-ad-page/edit-ad-page.component';
import { CreateNewAdPageComponent } from './client/create-new-ad-page/create-new-ad-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { HeaderComponent } from './header/header.component';
import { AuthorizationComponent } from './authorization/authorization.component';
import { ClickStopPropaginationDirective } from './directives/stop-propagination/click-stop-propagination.directive';
import { ChosenAdPageComponent } from './chosen-ad-page/chosen-ad-page.component';
import { ClientModule } from './client/client.module';
import { AdminModule } from './admin/admin.module';
import { AppDataService } from './services/app-data.service';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    AdminComponent,
    AdsModerationComponent,
    AdsEditingComponent,
    AppealsComponent,
    CabineteComponent,
    EditAdPageComponent,
    CreateNewAdPageComponent,
    MapPageComponent,
    HeaderComponent,
    FooterComponent,
    AuthorizationComponent,
    ClickStopPropaginationDirective,
    MainComponent,
    ChosenAdPageComponent,
  ],
  imports: [
    BrowserModule,
    ClientModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AdminModule,
  ],
  providers: [AppDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
