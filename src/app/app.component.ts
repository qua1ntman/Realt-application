import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isWantToSignIn: boolean =false
  loggedIn: boolean = false

  // Show or hide authoriation
  changeAuthoriationHidding(value: boolean): void {
    this.isWantToSignIn=value
  }

  // Hide "Sign in" btn and chenge "Add new ad" btn in header
  logged(value: boolean): void {
    this.loggedIn = value
  }

}
