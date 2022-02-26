import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent {

  isSignIn: boolean = true
  
  constructor() { }

  @Output()
  changeAuthHidding = new EventEmitter()
  @Output()
  logged = new EventEmitter()

  changeSignInAndSignUp(value: boolean): void {
    this.isSignIn = value
  }

  changeAuth(value: boolean): void {
    this.changeAuthHidding.emit(value)
  }

  personLogged(value: boolean): void {
    this.changeAuth(value)
    this.logged.emit(!value)
  }

}
