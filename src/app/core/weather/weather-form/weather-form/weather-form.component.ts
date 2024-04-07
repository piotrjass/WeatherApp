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
  onCitySelectChange(): void {
    console.log('select city called!');
  }

  // onSubmit(f: NgForm) {
  //   const selectedRegion = f.value.region;
  //   const selectedCity = f.value.city;
  //   const selectedSort = f.value.sort;
  //   console.log('Selected region:', selectedRegion);
  //   console.log('Selected city:', selectedCity);
  //   console.log('Selected sort:', selectedSort);
  //   console.log('submitted!');
  // }

  // citiesArrays: string[] = [];
  // regionArrays: string[] = [];
  // getCities() {
  //   this.citiesArrays = this.weatherCardsService.getCitiesArray();
  // }
  // getRegions() {
  //   this.regionArrays = this.weatherCardsService.getRegionsArray();
  // }
  // ngOnInit(): void {}
}
