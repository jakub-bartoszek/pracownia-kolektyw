import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sun-icon',
  templateUrl: './sun-icon.component.html',
  standalone: true,
})
export class SunIconComponent {
  @Input() color: string = '#000000';
  @Input() size: string = '64px';
}
