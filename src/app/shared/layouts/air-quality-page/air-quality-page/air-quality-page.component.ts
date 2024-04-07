import { Component } from '@angular/core';
import { WeatherFormComponent } from '../../../../core/weather/weather-form/weather-form/weather-form.component';

import { WeatherCityCardComponent } from '../../../../core/weather/weather-city-card/weather-city-card/weather-city-card.component';
import { AirQualityCardComponent } from '../../../../core/air-quality/air-quality-card/air-quality-card.component';

@Component({
  selector: 'app-air-quality-page',
  standalone: true,
  imports: [
    WeatherFormComponent,
    WeatherCityCardComponent,
    AirQualityCardComponent,
  ],
  templateUrl: './air-quality-page.component.html',
  styleUrl: './air-quality-page.component.css',
})
export class AirQualityPageComponent {}
