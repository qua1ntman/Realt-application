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


  change (event: any): void {
    this.changeSign.emit(true)
    event.stopPropagation();

  }

  changeAuthFunc(event: any) {
    this.changeAuth.emit(false)
    event.stopPropagation();
    if (this.loggedUser.email && this.loggedUser.password) {
      console.log(this.loggedUser);
    }
    
  }

  isFormFilled(): boolean {
    return Boolean(this.loggedUser.email && this.loggedUser.password)
  }

}
