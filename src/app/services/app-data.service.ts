import { Injectable } from '@angular/core';
import { Ad } from 'types/ad';

@Injectable({
  providedIn: 'root'
})
export class AppDataService {
  adsData: Ad[]=[
    {
      id: 1,
      pic: this.randomColor(),
      date: new Date(2022, 2, 3).toLocaleDateString(),
      title: 'penthouse',
      price: 500000,
      location: 'Minsk'
    },
    {
      id: 2,
      pic: this.randomColor(),
      date: new Date(2022, 3, 3).toLocaleDateString(),
      title: 'penthouse',
      price: 125122,
      location: 'Minsk'
    },
    {
      id: 3,
      pic: this.randomColor(),
      date: new Date(2022, 1, 6).toLocaleDateString(),
      title: 'penthouse',
      price: 1262000,
      location: 'Minsk'
    },
    {
      id: 4,
      pic: this.randomColor(),
      date: new Date(2022, 1, 4).toLocaleDateString(),
      title: 'penthouse',
      price: 255000,
      location: 'Minsk'
    },
    {
      id: 5,
      pic: this.randomColor(),
      date: new Date(2022, 1, 4).toLocaleDateString(),
      title: 'penthouse',
      price: 255000,
      location: 'Minsk'
    },
    {
      id: 6,
      pic: this.randomColor(),
      date: new Date(2022, 1, 4).toLocaleDateString(),
      title: 'penthouse',
      price: 255000,
      location: 'Minsk'
    },
    {
      id: 7,
      pic: this.randomColor(),
      date: new Date(2022, 1, 4).toLocaleDateString(),
      title: 'penthouse',
      price: 255000,
      location: 'Minsk'
    },
    {
      id: 8,
      pic: this.randomColor(),
      date: new Date(2022, 1, 4).toLocaleDateString(),
      title: 'penthouse',
      price: 255000,
      location: 'Minsk'
    },
    {
      id: 9,
      pic: this.randomColor(),
      date: new Date(2022, 1, 4).toLocaleDateString(),
      title: 'penthouse',
      price: 255000,
      location: 'Minsk'
    },
    {
      id: 10,
      pic: this.randomColor(),
      date: new Date(2022, 4, 6).toLocaleDateString(),
      title: 'penthouse',
      price: 124000,
      location: 'Minsk'
    },
    {
      id: 11,
      pic: this.randomColor(),
      date: new Date(2022, 3, 14).toLocaleDateString(),
      title: 'penthouse',
      price: 634000,
      location: 'Minsk'
    },
    {
      id: 12,
      pic: this.randomColor(),
      date: new Date(2022, 3, 22).toLocaleDateString(),
      title: 'penthouse',
      price: 445000,
      location: 'Minsk'
    },
  ]
  chosenAd!: Ad

  constructor() { }

  randomColor(): string {
    return `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`
  }

  chosenAdData(id: number) {
    this.chosenAd = this.adsData.filter(ad => ad.id === id)[0]
  }
}
