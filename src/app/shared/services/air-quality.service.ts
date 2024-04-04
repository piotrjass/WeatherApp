import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AirQualityService {
  constructor() {}

  mainCities: string[] = ['Puerto Rico', 'Wrocław', 'Yaktusk'];
  getMainCities() {
    return this.mainCities;
  }
}
