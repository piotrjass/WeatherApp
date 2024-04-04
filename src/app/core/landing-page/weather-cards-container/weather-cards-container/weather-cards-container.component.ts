import { Component } from '@angular/core';
import { WeatherCardComponent } from '../../weather-card/weather-card/weather-card.component';
import { WeatherCardsService } from '../../../../shared/services/weather-cards.service';

@Component({
  selector: 'app-weather-cards-container',
  standalone: true,
  imports: [WeatherCardComponent],
  templateUrl: './weather-cards-container.component.html',
  styleUrl: './weather-cards-container.component.css',
})
export class WeatherCardsContainerComponent {
  cards: any[] = [];
  // constructor(private cardsService: CardsService) {}
  constructor(private weatherCardsService: WeatherCardsService) {}
  ngOnInit(): void {
    this.cards = this.weatherCardsService.getCards();
  }
}

// ../../../../../assets/weather/autumnly.png
