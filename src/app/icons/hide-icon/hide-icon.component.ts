import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hide-icon',
  standalone: true,
  imports: [],
  templateUrl: './hide-icon.component.html',
})
export class HideIconComponent {
  @Input() size: string = '64px';
}
