import { Component } from '@angular/core';
// components
import { TopNavbarItemComponent } from '../../top-navbar-item/top-navbar-item/top-navbar-item.component';
// serivces
import { AirQualityService } from '../../../../shared/services/air-quality.service';
// router
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [TopNavbarItemComponent, RouterModule],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {
  sections: any[] = [
    {
      name: 'Weather',
      scrollToID: 'weather',
    },
    {
      name: 'Air Quality',
      scrollToID: 'air',
    },
    {
      name: 'Code',
      scrollToID: 'code',
    },
  ];
  scrollTo(sectionId: string) {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }
}
