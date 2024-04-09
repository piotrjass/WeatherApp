import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment.development';
import { HttpClient } from '@angular/common/http';
// data extracted form xlxs file with all the cities sorted by region
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
  openWeatherMapAPIKey = environment.APPID;
  selectedRegionInService: string = '';
  selectedCityInService: string = '';
  citiesArrays: string[] = ['Warsaw', 'New York', 'Tokyo'];
  citiesToSelect: string[] = [];
  selectedCity: string = '';
  selectedSort: string = '';
  citiesDataObjectArray: any[] = [];
  sortedCitiesDataObjectArray: any[] = [];
  regionArrays: string[] = [
    'Europe',
    'Asia',
    'North America',
    'South America',
    'Oceania',
    'Africa',
  ];
  responseData$: Observable<any> | undefined;
  constructor(private http: HttpClient) {}
  private regionSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    '',
  );

  async getDataForASpecifiedCity() {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.selectedCity}&appid=${this.openWeatherMapAPIKey}`;
      this.http.get(url).subscribe((data: any) => {
        this.responseData$ = data;
        const weatherMain = data.weather[0].main;
        const weatherDescription = data.weather[0].description;
        const mainTemp = this.kelvinToCelsius(data.main.temp);
        const cityName = data.name;
        this.citiesDataObjectArray.push({
          cityName: cityName,
          temp: mainTemp,
          shortDesc: weatherMain,
          longDesc: weatherDescription,
        });
        console.log(this.citiesDataObjectArray);
      });
    } catch (error) {
      console.error(error);
    }
  }

  getDataForASpecifiedRegion(region: string) {}

  kelvinToCelsius(kelvin: number): number {
    const celsius = kelvin - 273.15;
    return Math.round(celsius);
  }

  setRegion(region: string): void {
    this.regionSubject.next(region);
    this.setCitiesToSelect(region);
    this.selectedCity = '';
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
    }
  }

  sortArray(): void {
    switch (this.selectedSort) {
      case 'Alphabetically':
        this.sortByCityName();
        break;
      case 'HighestTemp':
        this.sortByTemperatureDescending();
        break;
      case 'LowestTemp':
        this.sortByTemperatureAscending();
        break;
    }
  }

  sortByCityName() {
    this.sortedCitiesDataObjectArray = this.citiesDataObjectArray
      .slice()
      .sort((a, b) => a.cityName.localeCompare(b.cityName));
    this.updateArray();
  }

  updateArray() {
    this.citiesDataObjectArray = this.sortedCitiesDataObjectArray;
  }
  sortByTemperatureAscending() {
    this.sortedCitiesDataObjectArray = this.citiesDataObjectArray
      .slice()
      .sort((a, b) => a.temp - b.temp);
    console.log(this.sortedCitiesDataObjectArray);
    this.updateArray();
  }
  sortByTemperatureDescending() {
    this.sortedCitiesDataObjectArray = this.citiesDataObjectArray
      .slice()
      .sort((a, b) => b.temp - a.temp);
    this.updateArray();
    console.log(this.sortedCitiesDataObjectArray);
  }

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
