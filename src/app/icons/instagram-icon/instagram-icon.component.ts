import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-instagram-icon',
  standalone: true,
  imports: [],
  templateUrl: './instagram-icon.component.html',
})
export class InstagramIconComponent {
  @Input() size: string = '64px';
}
