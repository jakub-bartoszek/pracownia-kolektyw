import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-facebook-icon',
  standalone: true,
  imports: [],
  templateUrl: './facebook-icon.component.html',
})
export class FacebookIconComponent {
  @Input() size: string = '64px';
}
