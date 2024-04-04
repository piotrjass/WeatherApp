import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherCardsService {
  constructor() {}
  dataForCards: any[] = [
    {
      city: 'Puerto rico',
      temperature: 25,
      desc: 'Take sunglasses and use SPF cream.',
      url: '../../../../../assets/weather/sunny.png',
    },
    {
      city: 'Wrocław',
      temperature: 13,
      desc: 'First days of spring are comming.',
      url: '../../../../../assets/weather/autumnly.png',
    },
    {
      city: 'Yakutsk',
      temperature: -10,
      desc: 'Wear a thick jacket and gloves.',
      url: '../../../../../assets/weather/snowy.png',
    },
  ];
  getCards() {
    return this.dataForCards;
  }
}
