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
  logged: EventEmitter<boolean> = new EventEmitter<boolean>();

  changeSignInAndSignUp(value: boolean): void {
    this.isSignIn = value;
  }

  // Hide authorization
  changeAuth(value: boolean): void {
    this.changeAuthHidding.emit(value);
  }

  // Hide authorization + change header btns
  personLogged(value: boolean): void {
    console.log(value);
    this.changeAuth(value);
    this.logged.emit(!value);
  }
}
