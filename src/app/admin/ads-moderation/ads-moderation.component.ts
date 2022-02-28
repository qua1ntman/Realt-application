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
      this.ads = this.appDataService.adsData
  }
}
