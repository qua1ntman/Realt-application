import { Component, EventEmitter, Input, Output } from '@angular/core';
import { routes } from './../routes';
import { AppDataService } from './../services/app-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  router = routes;
  openCabinet = false;
  // loggedIn = this.appDataService.isUserLoggged;

  @Output()
  changeAuthHidding = new EventEmitter();
  @Input()
  loggedIn!: boolean;

  constructor(private appDataService: AppDataService) {}

  // Hide "Sign in" btn and chenge "Add new ad" btn
  changeAuth(): void {
    this.changeAuthHidding.emit(true);
  }

  // Open menu (as cabinet)
  openCabinetFunc(value: boolean): void {
    this.openCabinet = value;
  }
}
