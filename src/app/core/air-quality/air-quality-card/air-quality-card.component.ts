import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-air-quality-card',
  standalone: true,
  imports: [],
  templateUrl: './air-quality-card.component.html',
  styleUrl: './air-quality-card.component.css',
})
export class AirQualityCardComponent {
  @Input() City: string = '';
  @Input() Country: string = '';
  @Input() Temperature: number = 0;
  @Input() Desc: string = '';
  @Input() Date: string = '';
}
