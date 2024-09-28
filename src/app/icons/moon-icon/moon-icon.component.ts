import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-moon-icon',
  templateUrl: './moon-icon.component.html',
  standalone: true,
})
export class MoonIconComponent {
  @Input() color: string = '#000000';
  @Input() size: string = '64px';
}
