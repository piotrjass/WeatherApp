import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-card',
  standalone: true,
  imports: [],
  templateUrl: './weather-card.component.html',
  styleUrl: './weather-card.component.css',
})
export class WeatherCardComponent {
  @Input() city: string = '';
  @Input() temperature: number = 0;
  @Input() url: string = '';
  @Input() desc: string = '';
}
