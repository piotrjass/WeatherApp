import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-air-quality-card',
  standalone: true,
  imports: [],
  templateUrl: './air-quality-card.component.html',
  styleUrl: './air-quality-card.component.css',
})
export class AirQualityCardComponent {
  @Input() name: string = '';
  @Input() co: number = 0;
  @Input() no2: number = 0;
  @Input() so2: number = 0;
  @Input() pm2_5: number = 0;
  @Input() pm10: number = 0;
  @Input() nh3: number = 0;
}
