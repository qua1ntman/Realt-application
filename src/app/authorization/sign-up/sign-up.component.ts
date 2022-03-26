import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppDataService } from '../../services/app-data.service';
import { AuthorithationService } from '../authorithation.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  signup!: FormGroup;

  constructor(private authService: AuthorithationService, private appDataService: AppDataService) {}

  @Output()
  changeSign: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  changeAuth: EventEmitter<boolean> = new EventEmitter<boolean>();

  // Change sign up on sign in form
  change(event: any): void {
    event.stopPropagation();
    this.changeSign.emit(false);
  }

  // "Sign up" btn work if form is valid
  changeAuthFunc(event: any) {
    if (this.isFormFilled()) {
      // const { firstName, lastName, email, phone, password } = this.signup.value;
      // this.authService
      //   .postRegisterUser({ firstName, lastName, email, phone, password })
      //   .subscribe((data) => (this.appDataService.currentUser = data));
      event.stopPropagation();
      this.changeAuth.emit(false);
    }
  }

  // Form validation for "Sign up" btn
  isFormFilled(): boolean {
    return Boolean(
      this.signup.value.firstName.length >= 3 &&
        this.signup.value.lastName.length >= 3 &&
        this.signup.value.email.match('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$') &&
        this.signup.value.phone.length >= 10 &&
        this.signup.value.password!.length >= 8
    );
  }

  ngOnInit(): void {
    this.signup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern('[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,4}$'),
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('[0-9]{12}'),
        Validators.minLength(12),
        Validators.maxLength(12),
      ]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    });
  }
}
