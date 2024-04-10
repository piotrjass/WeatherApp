import { Component } from '@angular/core';
// animations library
import { RoughNotationModule } from 'ng-rough-notation';
@Component({
  selector: 'app-hero-section-main-text',
  standalone: true,
  imports: [RoughNotationModule],
  templateUrl: './hero-section-main-text.component.html',
  styleUrl: './hero-section-main-text.component.css',
})
export class HeroSectionMainTextComponent {}
