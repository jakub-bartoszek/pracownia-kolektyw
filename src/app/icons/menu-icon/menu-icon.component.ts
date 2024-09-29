import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-icon',
  standalone: true,
  imports: [],
  templateUrl: './menu-icon.component.html',
})
export class MenuIconComponent {
  @Input() size: string = '64px';
}
