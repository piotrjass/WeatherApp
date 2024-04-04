import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// components
import { TopNavbarComponent } from '../../../../core/landing-page/top-navbar/top-navbar/top-navbar.component';
import { HeroSectionComponent } from '../../../../core/landing-page/hero-section/hero-section/hero-section.component';
import { FooterComponent } from '../../../../core/landing-page/footer/footer.component';
import { AirQualityCardsContainerComponent } from '../../../../core/landing-page/air-quality-cards-container/air-quality-cards-container/air-quality-cards-container.component';
import { WeatherCardsContainerComponent } from '../../../../core/landing-page/weather-cards-container/weather-cards-container/weather-cards-container.component';
import { BreakingLineComponent } from '../../../../core/landing-page/breaking-line/breaking-line/breaking-line.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    TopNavbarComponent,
    HeroSectionComponent,
    FooterComponent,
    AirQualityCardsContainerComponent,
    WeatherCardsContainerComponent,
    BreakingLineComponent,
    FooterComponent,
    RouterOutlet,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
