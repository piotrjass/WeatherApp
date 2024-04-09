import { Component } from '@angular/core';
import { AirQualityService } from '../../../../shared/services/air-quality.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-air-quality-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './air-quality-form.component.html',
  styleUrl: './air-quality-form.component.css',
})
export class AirQualityFormComponent {
  constructor(public airQualityService: AirQualityService) {}
  selectedCity: string = '';
  onSubmit(f: NgForm): void {}
  citiesToChooseFrom: any[] = [
    {
      name: 'Tokio',
      lat: 35,
      lon: 139,
    },
    {
      name: 'Benjing',
      lat: 39,
      lon: 116,
    },
    {
      name: 'Washington',
      lat: 38,
      lon: -77,
    },
    {
      name: 'Moscow',
      lat: 55,
      lon: 37,
    },
    {
      name: 'Cairo',
      lat: 30,
      lon: 31,
    },
  ];
}
