import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { UserSignInData } from 'types/user-sign-in-data';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  signin!: FormGroup;

  @Output()
  changeSign: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output()
  changeAuth: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Change sign in on sign up form
  changeSignUpOnSignInForm(event: MouseEvent): void {
    this.changeSign.emit(true);
    event.stopPropagation();
  }

  // "Sign in" btn work if form is valid
  changeAuthFunc(event: MouseEvent) {
    if (this.isFormFilled()) {
      event.stopPropagation();
      this.changeAuth.emit(false);
    }
  }

  isEmailCorrect(): boolean {
    return this.signin.get('email')!.valid;
  }

  isPasswordCorrect(): boolean {
    return this.signin.get('password')!.valid;
  }

  // Form validation for "Sign in" btn
  isFormFilled(): boolean {
    return Boolean(this.signin.value.email && this.signin.value.password);
  }

  ngOnInit(): void {
    this.signin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$'),
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }
}
