import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment.development';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class LandingPageService {
  constructor(private http: HttpClient) {
    this.updateTemperaturesForCities();
  }
  private regionSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    '',
  );
  openWeatherMapAPIKey = environment.APPID;
  responseData$: Observable<any> | undefined;
  async getDataForASpecifiedCity(city: string) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.openWeatherMapAPIKey}`;
      this.http.get(url).subscribe((data: any) => {
        this.responseData$ = data;
        const mainTemp = this.kelvinToCelsius(data.main.temp);
        const cityName = data.name;
        console.log(mainTemp);
        return mainTemp;
      });
    } catch (error) {
      console.error(error);
    }
  }

  mainCities: any[] = [
    {
      city: 'Puerto rico',
      temperature: 25,
      desc: 'Take sunglasses and use SPF cream.',
      url: '../../../../../assets/weather/sunny.jpg',
    },
    {
      city: 'Warsaw',
      temperature: 10,
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

  async updateTemperaturesForCities() {
    for (let i = 0; i < this.mainCities.length; i++) {
      const cityName = this.mainCities[i].city;
      console.log('city is ', cityName);
      const temperature = await this.getDataForASpecifiedCity(cityName);
      console.log('temperature is' + temperature);
      this.mainCities[i].temperature = temperature;
    }
  }

  getCards() {
    return this.mainCities;
  }

  kelvinToCelsius(kelvin: number): number {
    const celsius = kelvin - 273.15;
    return Math.round(celsius);
  }
}
