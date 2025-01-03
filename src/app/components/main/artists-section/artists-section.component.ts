import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtistsService } from '../../../services/artists.service';
import { Artist } from '../../../models/models';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-artists-section',
  templateUrl: './artists-section.component.html',
})
export class ArtistsSectionComponent {
  @Input() artists: Artist[] = [];
  @Input() headerPosition?: 'center' | 'left' = 'left';
  @Input() header: string = 'Nasi artyści';
}
