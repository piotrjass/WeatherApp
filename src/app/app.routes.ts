import { Routes } from '@angular/router';
import { LandingPageComponent } from './shared/layouts/landing-page/landing-page/landing-page.component';
import { WeatherPageComponent } from './shared/layouts/weather-page/weather-page/weather-page.component';
import { AirQualityPageComponent } from './shared/layouts/air-quality-page/air-quality-page/air-quality-page.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'Home',
  },
  {
    path: 'weather',
    component: WeatherPageComponent,
    title: 'Weather',
  },
  {
    path: 'airquality',
    component: AirQualityPageComponent,
    title: 'AirQuality',
  },
];
