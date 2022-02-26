import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

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

  changeAuth(): void {
    this.changeAuthHidding.emit(true)

  }

  openCabinetFunc(value: boolean): void {
    this.openCabinet = value
  }


}
