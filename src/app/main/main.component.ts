import { Component } from '@angular/core';
import { Ad } from 'types/ad';
import { AppDataService } from '../services/app-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{

  //data sample
  ads: Ad[]

  constructor(private appDataService: AppDataService) {
    this.ads = appDataService.adsData
  }

  trackByFn(index: number, ad: Object) {
    return index
  }
}
