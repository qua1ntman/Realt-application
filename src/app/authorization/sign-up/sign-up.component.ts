import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../../../../types/user-sign-up-data';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent{

  user: User = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '', 
  } 

  constructor() { }

  @Output()
  changeSign = new EventEmitter()

  @Output()
  changeAuth = new EventEmitter()

  change (event: any): void {
    event.stopPropagation();
    this.changeSign.emit(false)
  }

  changeAuthFunc(event: any) {
    event.stopPropagation();
    this.changeAuth.emit(false)
  }

  isFormFilled(): boolean {
    return Boolean(
      this.user.firstName.length >= 3 &&
      this.user.lastName.length >= 3 &&
      this.user.email
        .match('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$') &&
      this.user.phone.length >= 10 &&
      this.user.password.length >= 8)
  }
}

