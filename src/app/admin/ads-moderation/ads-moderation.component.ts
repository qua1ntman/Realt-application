import { Component } from '@angular/core';
import { Ad } from 'types/ad';
import { AppDataService } from 'src/app/services/app-data.service';

@Component({
  selector: 'app-ads-moderation',
  templateUrl: './ads-moderation.component.html',
  styleUrls: ['./ads-moderation.component.css']
})
export class AdsModerationComponent {

  ads: Ad[]

  constructor(private appDataService: AppDataService) {
    this.ads = appDataService.adsData
  }

  trackByFn(index: number, ad: Object) {
    return index
  }
}
