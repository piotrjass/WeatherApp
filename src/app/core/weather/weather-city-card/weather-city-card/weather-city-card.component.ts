import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-city-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-city-card.component.html',
  styleUrl: './weather-city-card.component.css',
})
export class WeatherCityCardComponent {
  @Input() City: string = '';
  @Input() Country: string = '';
  @Input() Temperature: number = 0;
  @Input() Desc: string = '';
  @Input() Date: string = '';
}
