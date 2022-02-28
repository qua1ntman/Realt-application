import { Component } from '@angular/core';
import { Ad } from 'types/ad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isWantToSignIn: boolean =false
  loggedIn: boolean = false
  chosenAd: Ad = {
    id: 0,
    pic: '',
    date: '',
    title: '',
    price: 0,
    location: ''
  }

  // Show or hide authoriation
  changeAuthoriationHidding(value: boolean): void {
    this.isWantToSignIn=value
  }

  // Hide "Sign in" btn and chenge "Add new ad" btn in header
  logged(value: boolean): void {
    this.loggedIn = value
  }

}
