import { Component, Output, EventEmitter} from '@angular/core';
import { UserSignInData } from 'types/user-sign-in-data';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  
  loggedUser: UserSignInData = {
    email: '',
    password: ''
  }

  @Output()
  changeSign = new EventEmitter()

  @Output()
  changeAuth = new EventEmitter()

  constructor() { }

  // Change sign in on sign up form
  change (event: any): void {
    this.changeSign.emit(true)
    event.stopPropagation();

  }
  // "Sign in" btn work if form is valid 
  changeAuthFunc(event: any) {
    if(this.isFormFilled()) {
      event.stopPropagation();
      this.changeAuth.emit(false)
    }
  }
  
  // Form validation for "Sign in" btn
  isFormFilled(): boolean {
    return Boolean(this.loggedUser.email && this.loggedUser.password)
  }

}
