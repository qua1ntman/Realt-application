import { Component } from '@angular/core';
import { Ad } from 'types/ad';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent{

  //data sample
  ads: Ad[]=[
    {
      pic: this.randomColor(),
      date: new Date(2022, 2, 3).toLocaleDateString(),
      title: 'penthouse',
      price: 500000,
      location: 'Minsk'
    },
    {
      pic: this.randomColor(),
      date: new Date(2022, 3, 3).toLocaleDateString(),
      title: 'penthouse',
      price: 125122,
      location: 'Minsk'
    },
    {
      pic: this.randomColor(),
      date: new Date(2022, 1, 6).toLocaleDateString(),
      title: 'penthouse',
      price: 1262000,
      location: 'Minsk'
    },
    {
      pic: this.randomColor(),
      date: new Date(2022, 1, 4).toLocaleDateString(),
      title: 'penthouse',
      price: 255000,
      location: 'Minsk'
    },
    {
      pic: this.randomColor(),
      date: new Date(2022, 4, 6).toLocaleDateString(),
      title: 'penthouse',
      price: 124000,
      location: 'Minsk'
    },
    {
      pic: this.randomColor(),
      date: new Date(2022, 3, 14).toLocaleDateString(),
      title: 'penthouse',
      price: 634000,
      location: 'Minsk'
    },
    {
      pic: this.randomColor(),
      date: new Date(2022, 3, 22).toLocaleDateString(),
      title: 'penthouse',
      price: 445000,
      location: 'Minsk'
    },
  ]

  constructor() { }

  randomColor(): string {
    return `rgb(${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)}, ${Math.round(Math.random()*255)})`
  }


}
