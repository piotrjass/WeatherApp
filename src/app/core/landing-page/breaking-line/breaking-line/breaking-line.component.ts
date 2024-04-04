import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-breaking-line',
  standalone: true,
  imports: [],
  templateUrl: './breaking-line.component.html',
  styleUrl: './breaking-line.component.css',
})
export class BreakingLineComponent {
  @Input() text: string = '';
}
