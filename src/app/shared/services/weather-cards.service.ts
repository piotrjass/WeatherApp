import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherCardsService {
  constructor() {}

  citiesArrays: string[] = ['Wrocław', 'New York', 'Tokyo'];
  regionArrays: string[] = ['Poland', 'USA', 'Germany'];

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
