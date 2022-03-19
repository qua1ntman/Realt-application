import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { MapPageComponent } from './map-page/map-page.component';
import { AdminComponent } from './admin/admin.component';
import { ClientComponent } from './client/client.component';
import { routes } from './routes';
import { ChosenAdPageComponent } from './chosen-ad-page/chosen-ad-page.component';
const appRoutes: Routes = [
  { path: '', redirectTo: routes.main.routeMain, pathMatch: 'full' },
  { path: routes.main.routeMain, component: MainComponent },
  { path: routes.main.routeChosenAd, component: ChosenAdPageComponent },
  { path: routes.main.routeMain, component: MapPageComponent },

  {
    path: routes.admin.admin,
    component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then((mod) => mod.AdminModule),
  },
  {
    path: routes.client.client,
    component: ClientComponent,
    loadChildren: () => import('./client/client.module').then((mod) => mod.ClientModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
