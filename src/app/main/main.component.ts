import { Component, OnInit } from '@angular/core';
import { Ad } from 'types/ad';
import { routes } from '../routes';
import { AppDataService } from './../services/app-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  ads!: Ad[];
  clickedAd!: boolean;
  routes = routes.main;

  constructor(private appDataService: AppDataService) {}

  chosenAdFunc(adId: number): void {
    this.appDataService.chosenAdData(adId);
    this.clickedAd = true;
  }

  ngOnInit(): void {
    this.appDataService.getAdsDataHTTP().subscribe((data) => (this.ads = Object.values(data)));
  }

  trackByFn(index: any, ad: any) {
    return index;
  }
}
