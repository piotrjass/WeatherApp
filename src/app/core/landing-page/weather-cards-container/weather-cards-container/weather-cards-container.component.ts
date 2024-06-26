import { Component } from '@angular/core';
// components
import { WeatherCardComponent } from '../../weather-card/weather-card/weather-card.component';
import { WeatherCardsService } from '../../../../shared/services/weather-cards.service';
import { RouterModule, RouterLink } from '@angular/router';
// icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import bootstrapIcons from '@ng-icons/bootstrap-icons';
import {
  bootstrapGlobeAmericas,
  bootstrapArrowUpRightCircleFill,
} from '@ng-icons/bootstrap-icons';
import { LandingPageService } from '../../../../shared/services/landing-page.service';

@Component({
  selector: 'app-weather-cards-container',
  standalone: true,
  imports: [WeatherCardComponent, RouterModule, RouterLink, NgIconComponent],
  templateUrl: './weather-cards-container.component.html',
  styleUrl: './weather-cards-container.component.css',
  viewProviders: [
    provideIcons({ bootstrapGlobeAmericas, bootstrapArrowUpRightCircleFill }),
  ],
})
export class WeatherCardsContainerComponent {
  cards: any[] = [];
  constructor(
    private weatherCardsService: WeatherCardsService,
    private landingPageService: LandingPageService,
  ) {}
  ngOnInit(): void {
    this.cards = this.landingPageService.getCards();
  }
}
