import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-city-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-city-card.component.html',
  styleUrl: './weather-city-card.component.css',
})
export class WeatherCityCardComponent {
  @Input() city: string = '';
  @Input() temperature: number = 0;
  @Input() longDesc: string = '';
  @Input() shortDesc: string = '';
  @Input() date: string = '';
}
