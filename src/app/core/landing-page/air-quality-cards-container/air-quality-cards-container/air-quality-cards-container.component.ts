import { Component } from '@angular/core';
import { AirQualityCardComponent } from '../../air-quality-card/air-quality-card/air-quality-card.component';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
// tabler icons
import { tablerIcons } from '@ng-icons/tabler-icons';
import { tablerBrandGithub, tablerFlower } from '@ng-icons/tabler-icons';
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
  selector: 'app-air-quality-cards-container',
  standalone: true,
  imports: [AirQualityCardComponent],
  templateUrl: './air-quality-cards-container.component.html',
  styleUrl: './air-quality-cards-container.component.css',
  viewProviders: [
    provideIcons({
      tablerBrandGithub,
      saxWindBold,
      remixSurgicalMaskLine,
      bootstrapFlower1,
      tablerFlower,
    }),
  ],
})
export class AirQualityCardsContainerComponent {
  items: any[] = [
    {
      icon: 'saxWindBold',
      name: 'Air quality',
      desc: "How's the air in your city?",
    },
    {
      icon: 'bootstrapFlower1',
      name: 'Pollen',
      desc: 'Check alerts for  allergic patient.',
    },
    {
      icon: 'remixSurgicalMaskLine',
      name: 'Precautions',
      desc: 'If the air is bad, what can I do?',
    },
  ];
}
