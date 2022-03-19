import { Component, Input, OnInit } from '@angular/core';
import { Ad } from 'types/ad';
import { AppDataService } from './../services/app-data.service';

@Component({
  selector: 'app-chosen-ad-page',
  templateUrl: './chosen-ad-page.component.html',
  styleUrls: ['./chosen-ad-page.component.css']
})
export class ChosenAdPageComponent implements OnInit {

  chosenAd!: Ad

  constructor(private appDataService: AppDataService) { }

  ngOnInit(): void {
    let adData = this.appDataService.chosenAd
    this.chosenAd = adData
    console.log(this.chosenAd);
    
  }

}
