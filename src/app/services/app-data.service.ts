import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Ad } from 'types/ad';
import { Observable } from 'rxjs';
import { constants } from '../constants';
import { CITIES } from '../cities.mock';

@Injectable({
  providedIn: 'root',
})
export class AppDataService {
  currentUser: any;
  adsData: Ad[] = [
    {
      id: 2,
      pic: 'https://images.pexels.com/photos/955793/pexels-photo-955793.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      date: '2022-03-13T10:54:42.055Z',
      title: 'House 4',
      price: 30,
      location: 'Minsk region, Minsk, Esenina 22',
      description: 'Yeah, it is real house for your snail pet =)',
    },
    {
      id: 3,
      pic: 'https://q-xx.bstatic.com/images/hotel/max500/678/67878422.jpg',
      date: '2022-03-13T10:58:09.941Z',
      title: 'House 1',
      price: 40000,
      location: 'Gomel region, Gomel, Dachnaya 3',
      description: 'Cool wood house for weekend',
    },
    {
      id: 4,
      pic: 'https://ap.rdcpix.com/3b04a5138bbc8cd56cfc17168b345fd0l-m1509811918od-w480_h360_x2.webp',
      date: '2022-03-13T10:59:53.503Z',
      title: 'House 2',
      price: 90000,
      location: 'Vitebsk region, Polotsk, Kozlova 14',
      description: 'Big grey house on hill',
    },
    {
      id: 5,
      pic: 'https://blog.ipleaders.in/wp-content/uploads/2019/06/house-2483336_960_720-696x486.jpg',
      date: '2022-03-13T11:01:54.524Z',
      title: 'House 3',
      price: 350000,
      location: 'Minsk region, Molodechno, Skarini 5',
      description: 'House with grey roof and attractive flat grass',
    },
  ];
  chosenAd!: Ad;
  adEdition!: Ad;

  constructor(private http: HttpClient) {}

  chosenAdData(id: number) {
    this.chosenAd = this.adsData.find((ad) => ad.id === id)!;
  }

  chosenAdDataForEdition(ad: Ad) {
    this.adEdition = ad;
  }

  chosenAdEdited(ad: Ad) {
    this.adEdition = ad;
    this.adsData.forEach((thisAd) => {
      if (thisAd.id === ad.id) thisAd = ad;
    });
  }

  setRegionCities(regionSelected: string): string[] {
    switch (regionSelected) {
      case 'Minsk region':
        return CITIES.minskRegion;
      case 'Vitebsk region':
        return CITIES.vitebskRegion;
      case 'Mogilev region':
        return CITIES.mogilevRegion;
      case 'Gomel region':
        return CITIES.gomelRegion;
      case 'Grodno region':
        return CITIES.grodnoRegion;
      case 'Brest region':
        return CITIES.brestRegion;
      default:
        return CITIES.minskRegion;
    }
  }

  getAdsDataHTTP(): Observable<Object> {
    const url = `${constants.baseApiUrl}ads`;
    if (!this.adsData) {
      this.http.get(url).subscribe((data) => (this.adsData = Object.values(data)));
    }
    return this.http.get(url);
  }

  postNewAdHTTP(ad: any) {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozLCJmaXJzdE5hbWUiOiJNaXNoYSIsImxhc3ROYW1lIjoiQXNobGEiLCJlbWFpbCI6IkFzaGxhQG1haWwucnUiLCJyb2xlIjoiYWRtaW4ifSwiaWF0IjoxNjQ2NjQxODUyLCJleHAiOjE2NDY2NDU0NTJ9._XMqe4Cu1RqFbOtqdy9FwZ0kMiMOBtfv9mYxdqU7tGg';
    const url = `${constants.baseApiUrl}ads`;
    this.http.post(url, ad, {
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-Type': 'application/json',
      },
    });
  }

  putChangeAdDataHTTP(ad: Ad) {
    const url = `${constants.baseApiUrl}ads/${ad.id}`;
    const { id, ...newObj } = ad;
    this.http.put(url, newObj);
  }
}
