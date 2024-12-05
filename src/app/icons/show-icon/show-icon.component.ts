import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-icon',
  standalone: true,
  imports: [],
  templateUrl: './show-icon.component.html',
})
export class ShowIconComponent {
  @Input() size: string = '64px';
}
