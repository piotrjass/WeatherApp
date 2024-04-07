import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  african_cities,
  asian_cities,
  european_cities,
  noth_american_cities,
  oceania_cities,
  south_american_cities,
} from '../data/data';

@Injectable({
  providedIn: 'root',
})
export class WeatherCardsService {
  constructor() {}
  private regionSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    '',
  );
  setRegion(region: string): void {
    this.regionSubject.next(region);
  }

  getRegion(): Observable<string> {
    return this.regionSubject.asObservable();
  }

  setCitiesToSelect(region: string): void {
    switch (region) {
      case 'Africa':
        this.citiesToSelect = african_cities;
        break;
      case 'Asia':
        this.citiesToSelect = asian_cities;
        break;
      case 'Europe':
        this.citiesToSelect = european_cities;
        break;
      case 'North America':
        this.citiesToSelect = noth_american_cities;
        break;
      case 'Oceania':
        this.citiesToSelect = oceania_cities;
        break;
      case 'South America':
        this.citiesToSelect = south_american_cities;
        break;
      default:
        this.citiesToSelect = [];
        break;
    }
  }

  selectedRegionInService: string = '';
  selectedCityInService: string = '';
  citiesArrays: string[] = ['Warsaw', 'New York', 'Tokyo'];
  citiesToSelect: string[] = [];
  regionArrays: string[] = [
    'Europe',
    'Asia',
    'North America',
    'South America',
    'Oceania',
    'Africa',
  ];

  mainCities: any[] = [
    {
      city: 'Puerto rico',
      temperature: 25,
      desc: 'Take sunglasses and use SPF cream.',
      url: '../../../../../assets/weather/sunny.jpg',
    },
    {
      city: 'Wrocław',
      temperature: 13,
      desc: 'First days of spring are comming.',
      url: '../../../../../assets/weather/autumnly.jpg',
    },
    {
      city: 'Yakutsk',
      temperature: -10,
      desc: 'Wear a thick jacket and gloves.',
      url: '../../../../../assets/weather/snowy.jpg',
    },
  ];
  getCards() {
    return this.mainCities;
  }

  getCitiesArray() {
    return this.citiesArrays;
  }

  getRegionsArray() {
    return this.regionArrays;
  }
}
