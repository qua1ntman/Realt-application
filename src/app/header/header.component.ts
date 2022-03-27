import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  openCabinet: boolean = false

  @Output()
  changeAuthHidding = new EventEmitter()

  constructor() { }

  @Input()
  loggedIn!: boolean;

  // Hide "Sign in" btn and chenge "Add new ad" btn 
  changeAuth(): void {
    this.changeAuthHidding.emit(true)
  }

  // Open menu (as cabinet)
  openCabinetFunc(value: boolean): void {
    this.openCabinet = value
  }

}
