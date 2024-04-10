import { Component } from '@angular/core';
// components
import { HeroSectionMainTextComponent } from '../../hero-section-main-text/hero-section-main-text.component';
import { HeroSectionChangingTextComponent } from '../../hero-section-changing-text/hero-section-changing-text.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [HeroSectionMainTextComponent, HeroSectionChangingTextComponent],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {}
