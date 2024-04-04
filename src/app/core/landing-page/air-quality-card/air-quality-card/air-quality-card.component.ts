import { Component, Input } from '@angular/core';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
// tabler icons
import { tablerIcons } from '@ng-icons/tabler-icons';
import { tablerBrandGithub } from '@ng-icons/tabler-icons';
// iconsax icons
import iconsaxIcons from '@ng-icons/iconsax';
import { saxWindBold } from '@ng-icons/iconsax/bold';
// remixicon icons
import remixicon from '@ng-icons/remixicon';
import { remixSurgicalMaskLine } from '@ng-icons/remixicon';
//
import bootstrapIcons from '@ng-icons/bootstrap-icons';
import { bootstrapFlower1 } from '@ng-icons/bootstrap-icons';

@Component({
  selector: 'app-air-quality-card',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './air-quality-card.component.html',
  styleUrl: './air-quality-card.component.css',
  viewProviders: [
    provideIcons({
      tablerBrandGithub,
      saxWindBold,
      remixSurgicalMaskLine,
      bootstrapFlower1,
    }),
  ],
})
export class AirQualityCardComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
  @Input() desc: string = '';
}
