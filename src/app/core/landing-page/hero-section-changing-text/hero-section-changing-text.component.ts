import { Component } from '@angular/core';
// animations
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  fadeInAnimation,
} from 'angular-animations';

@Component({
  selector: 'app-hero-section-changing-text',
  standalone: true,
  imports: [],
  templateUrl: './hero-section-changing-text.component.html',
  styleUrl: './hero-section-changing-text.component.css',
  animations: [
    fadeInOnEnterAnimation(),
    fadeOutOnLeaveAnimation(),
    fadeInAnimation(),
  ],
})
export class HeroSectionChangingTextComponent {}
