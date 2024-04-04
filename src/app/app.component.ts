import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopNavbarComponent } from './core/landing-page/top-navbar/top-navbar/top-navbar.component';
import { HeroSectionComponent } from './core/landing-page/hero-section/hero-section/hero-section.component';
import { FooterComponent } from './core/landing-page/footer/footer.component';
import { AirQualityCardsContainerComponent } from './core/landing-page/air-quality-cards-container/air-quality-cards-container/air-quality-cards-container.component';
import { WeatherCardsContainerComponent } from './core/landing-page/weather-cards-container/weather-cards-container/weather-cards-container.component';
import { BreakingLineComponent } from './core/landing-page/breaking-line/breaking-line/breaking-line.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopNavbarComponent,
    HeroSectionComponent,
    FooterComponent,
    AirQualityCardsContainerComponent,
    WeatherCardsContainerComponent,
    BreakingLineComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'AirQualityApp';
}
