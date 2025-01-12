import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-services-section',
  standalone: true,
  imports: [],
  templateUrl: './services-section.component.html',
})
export class ServicesSectionComponent {
  @Input() headerPosition: 'center' | 'left' = 'left';
}
