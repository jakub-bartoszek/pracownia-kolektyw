import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-review-icon',
  standalone: true,
  imports: [],
  templateUrl: './review-icon.component.html',
})
export class ReviewIconComponent {
  @Input() size: string = '32px';
}
