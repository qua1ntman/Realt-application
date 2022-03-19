import { Component, Output, EventEmitter, Input } from '@angular/core';
import { STATIC } from './header.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  openCabinet = false
  logo: string = STATIC.logoUrl

  @Output()
  changeAuthHidding: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input()
  loggedIn!: boolean;
}
