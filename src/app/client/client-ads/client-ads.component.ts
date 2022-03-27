import { Component, OnInit } from '@angular/core';
import { Ad } from 'types/ad';
import { AppDataService } from './../../services/app-data.service';

@Component({
  selector: 'app-client-ads',
  templateUrl: './client-ads.component.html',
  styleUrls: ['./client-ads.component.css']
})
export class ClientAdsComponent implements OnInit {


    ads!: Ad[]
  
    constructor(private appDataService: AppDataService) { }
  
    ngOnInit(): void {
      if (this.appDataService.adsData) {
        this.ads = this.appDataService.adsData
      } else {
        this.appDataService.getAdsDataHTTP().subscribe(data => this.ads = Object.values(data))
      }
    }

    editChosenAd(ad: Ad): void {
      this.appDataService.chosenAdDataForEdition(ad)
      ;
      
    }
  
}
