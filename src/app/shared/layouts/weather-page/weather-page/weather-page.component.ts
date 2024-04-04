import { Component } from '@angular/core';
import { TopNavbarComponent } from '../../../../core/landing-page/top-navbar/top-navbar/top-navbar.component';

@Component({
  selector: 'app-weather-page',
  standalone: true,
  imports: [TopNavbarComponent],
  templateUrl: './weather-page.component.html',
  styleUrl: './weather-page.component.css',
})
export class WeatherPageComponent {}
