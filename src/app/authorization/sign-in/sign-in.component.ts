import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppDataService } from '../../services/app-data.service';
import { AuthorithationService } from '../authorithation.service';
import { UserSignInData } from 'types/user-sign-in-data';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  constructor(private authService: AuthorithationService, private appDataService: AppDataService) {}

  // Change sign in on sign up form
  change(event: any): void {
    this.changeSign.emit(true);
    event.stopPropagation();
  }

  // "Sign in" btn work if form is valid
  changeAuthFunc(event: any) {
    if (this.isFormFilled()) {
      this.authService
        .postLoginUser(this.signin.value.email, this.signin.value.password)
        .subscribe((data) => console.log(data.token));
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
    return Boolean(this.isPasswordCorrect() && this.isEmailCorrect());
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
