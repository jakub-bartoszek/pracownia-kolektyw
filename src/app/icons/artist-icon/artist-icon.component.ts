import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-artist-icon',
  standalone: true,
  imports: [],
  templateUrl: './artist-icon.component.html',
})
export class ArtistIconComponent {
  @Input() size: string = '32px';
}
