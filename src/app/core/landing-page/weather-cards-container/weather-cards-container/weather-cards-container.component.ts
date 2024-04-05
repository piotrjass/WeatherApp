import { Component } from '@angular/core';
import { WeatherCardComponent } from '../../weather-card/weather-card/weather-card.component';
import { WeatherCardsService } from '../../../../shared/services/weather-cards.service';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-weather-cards-container',
  standalone: true,
  imports: [WeatherCardComponent, RouterModule, RouterLink],
  templateUrl: './weather-cards-container.component.html',
  styleUrl: './weather-cards-container.component.css',
})
export class WeatherCardsContainerComponent {
  cards: any[] = [];
  constructor(private weatherCardsService: WeatherCardsService) {}
  ngOnInit(): void {
    this.cards = this.weatherCardsService.getCards();
  }
}
