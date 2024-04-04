import { Component } from '@angular/core';
import { TopNavbarItemComponent } from '../../top-navbar-item/top-navbar-item/top-navbar-item.component';
import { RouterModule } from '@angular/router';
import { AirQualityService } from '../../../../shared/services/air-quality.service';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [TopNavbarItemComponent, RouterModule],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {
  sections: string[] = ['Weather', 'Air Quality', 'More'];
}
