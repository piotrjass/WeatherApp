import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { WeatherCardsService } from '../../../../shared/services/weather-cards.service';

@Component({
  selector: 'app-weather-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './weather-form.component.html',
  styleUrl: './weather-form.component.css',
})
export class WeatherFormComponent {
  onSubmit(f: NgForm) {
    const selectedRegion = f.value.region;
    const selectedCity = f.value.city;
    const selectedSort = f.value.sort;
    console.log('Selected region:', selectedRegion);
    console.log('Selected city:', selectedCity);
    console.log('Selected sort:', selectedSort);
    console.log('submitted!');
  }
  constructor(private weatherCardsService: WeatherCardsService) {}
  citiesArrays: string[] = [];
  regionArrays: string[] = [];
  getCities() {
    this.citiesArrays = this.weatherCardsService.getCitiesArray();
  }
  getRegions() {
    this.regionArrays = this.weatherCardsService.getRegionsArray();
  }

  ngOnInit(): void {
    this.getCities();
    this.getRegions();
  }
}
