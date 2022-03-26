import { Component, OnInit } from '@angular/core';
import { Ad } from 'types/ad';
import { AppDataService } from './../../services/app-data.service';

@Component({
  selector: 'app-ads-moderation',
  templateUrl: './ads-moderation.component.html',
  styleUrls: ['./ads-moderation.component.css']
})
export class AdsModerationComponent implements OnInit{

  ads!: Ad[]

  constructor(private appDataService: AppDataService) { }

  ngOnInit(): void {
    if (this.appDataService.adsData) {
      this.ads = this.appDataService.adsData
    } else {
      this.appDataService.getAdsDataHTTP().subscribe(data => this.ads = Object.values(data))
    }
  }

  trackByFn(index: any, ad: any) {
    return index
  }
}
