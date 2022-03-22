import { Component } from '@angular/core';
import { Ad } from 'types/ad';

@Component({
  selector: 'app-ads-editing',
  templateUrl: './ads-editing.component.html',
  styleUrls: ['./ads-editing.component.css']
})
export class AdsEditingComponent{

  ads: Ad[] = [
    {
      pic: '',
      title: 'House',
      location: 'Minsk',
      date: new Date(2022, 2, 4).toLocaleDateString(),
      price: 100000
    },
    {
      pic: '',
      title: 'Villa',
      location: 'Minsk',
      date: new Date(2022, 5, 14).toLocaleDateString(),
      price: 200000
    },
    {
      pic: '',
      title: 'Penthouse',
      location: 'Minsk',
      date: new Date(2022, 3, 22).toLocaleDateString(),
      price: 500000
    },
    {
      pic: '',
      title: 'Penthouse',
      location: 'Minsk',
      date: new Date(2022, 3, 22).toLocaleDateString(),
      price: 500000
    },
    {
      pic: '',
      title: 'Penthouse',
      location: 'Minsk',
      date: new Date(2022, 3, 22).toLocaleDateString(),
      price: 500000
    },
    {
      pic: '',
      title: 'Penthouse',
      location: 'Minsk',
      date: new Date(2022, 3, 22).toLocaleDateString(),
      price: 500000
    },
    {
      pic: '',
      title: 'Penthouse',
      location: 'Minsk',
      date: new Date(2022, 3, 22).toLocaleDateString(),
      price: 500000
    },
    {
      pic: '',
      title: 'Penthouse',
      location: 'Minsk',
      date: new Date(2022, 3, 22).toLocaleDateString(),
      price: 500000
    }
  ]

  constructor() { }

}
