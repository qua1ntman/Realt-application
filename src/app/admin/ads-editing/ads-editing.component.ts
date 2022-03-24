import { Component } from '@angular/core';
import { AppDataService } from 'src/app/services/app-data.service';
import { Ad } from 'types/ad';

@Component({
  selector: 'app-ads-editing',
  templateUrl: './ads-editing.component.html',
  styleUrls: ['./ads-editing.component.css']
})
export class AdsEditingComponent{

  ads: Ad[]

  constructor(private appDataService: AppDataService) {
    this.ads = appDataService.adsData
  }

  trackByFn(index: number, ad: Object) {
    return index
  }
}
