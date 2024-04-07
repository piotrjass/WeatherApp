import { Component } from '@angular/core';
import { TopNavbarComponent } from '../../../../core/landing-page/top-navbar/top-navbar/top-navbar.component';
import { WeatherFormComponent } from '../../../../core/weather/weather-form/weather-form/weather-form.component';
import { WeatherCityCardComponent } from '../../../../core/weather/weather-city-card/weather-city-card/weather-city-card.component';
import { WeatherCardsService } from '../../../services/weather-cards.service';
import { AirQualityCardComponent } from '../../../../core/landing-page/air-quality-card/air-quality-card/air-quality-card.component';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [
    TopNavbarComponent,
    WeatherFormComponent,
    WeatherCityCardComponent,
    AirQualityCardComponent,
  ],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.css',
})
export class WeatherPageComponent {
  constructor(private weatherCardsService: WeatherCardsService) {}
  citiesArrays: string[] = [];
  regionArrays: string[] = [];
  getCities() {
    this.citiesArrays = this.weatherCardsService.getCitiesArray();
  }
  getRegions() {
    this.regionArrays = this.weatherCardsService.getRegionsArray();
  }
}
