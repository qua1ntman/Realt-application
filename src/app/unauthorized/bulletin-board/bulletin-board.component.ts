import { Component, OnInit } from '@angular/core';
import { Ad } from 'types/ad';

@Component({
  selector: 'app-bulletin-board',
  templateUrl: './bulletin-board.component.html',
  styleUrls: ['./bulletin-board.component.css']
})
export class BulletinBoardComponent implements OnInit {

  ads: Ad[]=[
    {
      pic: 'rgb(146, 150, 153)',
      date: new Date(2022, 2, 3).toLocaleDateString(),
      title: 'penthouse',
      price: 500000,
      location: 'Minsk'
    },
    {
      pic: 'rgb(136, 123, 153)',
      date: new Date(2022, 3, 3).toLocaleDateString(),
      title: 'penthouse',
      price: 125122,
      location: 'Minsk'
    },
    {
      pic: 'rgb(15, 122, 11)',
      date: new Date(2022, 1, 6).toLocaleDateString(),
      title: 'penthouse',
      price: 1262000,
      location: 'Minsk'
    },
    {
      pic: 'rgb(36, 40, 133)',
      date: new Date(2022, 1, 4).toLocaleDateString(),
      title: 'penthouse',
      price: 255000,
      location: 'Minsk'
    },
    {
      pic: 'rgb(32, 160, 83)',
      date: new Date(2022, 4, 6).toLocaleDateString(),
      title: 'penthouse',
      price: 124000,
      location: 'Minsk'
    },
    {
      pic: 'rgb(36, 50, 73)',
      date: new Date(2022, 3, 14).toLocaleDateString(),
      title: 'penthouse',
      price: 634000,
      location: 'Minsk'
    },
    {
      pic: 'rgb(16, 15, 15)',
      date: new Date(2022, 3, 22).toLocaleDateString(),
      title: 'penthouse',
      price: 445000,
      location: 'Minsk'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
