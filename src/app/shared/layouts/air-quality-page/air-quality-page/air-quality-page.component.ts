import { Component } from '@angular/core';
import { AirQualityFormComponent } from '../../../../core/air-quality/air-quality-form/air-quality-form/air-quality-form.component';
import { AirQualityCardComponent } from '../../../../core/air-quality/air-quality-card/air-quality-card.component';
import { AirQualityService } from '../../../services/air-quality.service';

@Component({
  selector: 'app-air-quality-page',
  standalone: true,
  imports: [AirQualityFormComponent, AirQualityCardComponent],
  templateUrl: './air-quality-page.component.html',
  styleUrl: './air-quality-page.component.css',
})
export class AirQualityPageComponent {
  constructor(public airQualityService: AirQualityService) {}
  city: string = 'tokio';
}
