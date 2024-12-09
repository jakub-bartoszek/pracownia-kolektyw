import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artwork-icon',
  standalone: true,
  imports: [],
  templateUrl: './artwork-icon.component.html',
})
export class ArtworkIconComponent {
  @Input() size: string = '32px';
}
