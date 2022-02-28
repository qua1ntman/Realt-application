import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Ad } from 'types/ad';
import { AppDataService } from './../services/app-data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit{

  ads!: Ad[]

  clickedAd!: boolean

  constructor(private appDataService: AppDataService) { }

  chosenAdFunc(adId: number): void {
    this.appDataService.chosenAdData(adId)
    this.clickedAd = true
  }

  ngOnInit(): void {
    this.ads = this.appDataService.adsData
  }

}
