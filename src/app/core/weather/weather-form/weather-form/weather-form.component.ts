import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
// components
import { WeatherCardsService } from '../../../../shared/services/weather-cards.service';

@Component({
  selector: 'app-weather-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-form.component.html',
  styleUrl: './weather-form.component.css',
})
export class WeatherFormComponent {
  constructor(public weatherCardsService: WeatherCardsService) {}
  regionName: string = '';
  selectedRegion: string = '';
  onSubmit(f: NgForm): void {
    this.weatherCardsService.setRegion(this.regionName);
  }
  onRegionChange(): void {
    this.weatherCardsService.setRegion(this.regionName);
  }
  onRegionSelectChange(): void {
    this.weatherCardsService.setRegion(
      this.weatherCardsService.selectedRegionInService,
    );
  }
  onCitySelectChange(): void {}
}
