import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css'],
})
export class AuthorizationComponent {
  isSignIn: boolean = true;

  @Output()
  changeAuthHidding: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  personLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeSignInAndSignUp(value: boolean): void {
    this.isSignIn = value;
  }

  // Hide authorization + change header btns
  personLogged(value: boolean): void {
    this.changeAuthHidding.emit(value);
    this.personLoggedIn.emit(!value);
  }
}
