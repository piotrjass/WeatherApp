import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../enviroments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AirQualityService {
  constructor(private http: HttpClient) {}

  selectedCity: string = '';
  selectedCityCoordinates: { lat: number; lon: number } = { lat: 0, lon: 0 };
  citiesDataObjectArray: any[] = [];
  sortedCitiesDataObjectArray: any[] = [];
  responseData$: Observable<any> | undefined;
  openWeatherMapAPIKey = environment.APPID;
  private regionSubject: BehaviorSubject<string> = new BehaviorSubject<string>(
    '',
  );
  selectedSort: string = '';
  setSelectedCity() {}
  async checkAirQuality() {
    //  find lat and lon
    const { lat, lon } = this.findLatAndLong();
    await this.getDataForASpecifiedCity(lat, lon);
    // send the request
    // add to the resultArray
  }

  findLatAndLong() {
    const city = this.citiesToChooseFrom.find(
      (city) => city.name === this.selectedCity,
    );
    if (city) {
      this.selectedCityCoordinates.lat = city.lat;
      this.selectedCityCoordinates.lon = city.lon;
      return { lat: city.lat, lon: city.lon };
    } else {
      console.error('City not found in the list.');
      return { lat: 0, lon: 0 };
    }
  }

  async getDataForASpecifiedCity(lat: number, lon: number) {
    try {
      const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${this.openWeatherMapAPIKey}`;
      this.http.get(url).subscribe((data: any) => {
        this.responseData$ = data;
        const { components } = data.list[0];
        const { co, no2, so2, pm2_5, pm10, nh3 } = components;
        this.citiesDataObjectArray.push({
          name: this.selectedCity,
          co,
          no2,
          so2,
          pm2_5,
          pm10,
          nh3,
        });
      });
    } catch (error) {
      console.error(error);
    }
  }

  sortByCityName() {
    this.sortedCitiesDataObjectArray = this.citiesDataObjectArray
      .slice()
      .sort((a, b) => a.name.localeCompare(b.name));
    this.updateArray();
  }
  updateArray() {
    this.citiesDataObjectArray = this.sortedCitiesDataObjectArray;
  }
  citiesToChooseFrom: any[] = [
    {
      name: 'Tokio',
      lat: 35,
      lon: 139,
    },
    {
      name: 'Benjing',
      lat: 39,
      lon: 116,
    },
    {
      name: 'Washington',
      lat: 38,
      lon: -77,
    },
    {
      name: 'Moscow',
      lat: 55,
      lon: 37,
    },
    {
      name: 'Cairo',
      lat: 30,
      lon: 31,
    },
  ];

  sortArray(): void {
    switch (this.selectedSort) {
      case 'Alphabetically':
        this.sortByCityName();
        break;
    }
  }

  mainCities: string[] = ['Puerto Rico', 'Wrocław', 'Yaktusk'];
  getMainCities() {
    return this.mainCities;
  }
}
