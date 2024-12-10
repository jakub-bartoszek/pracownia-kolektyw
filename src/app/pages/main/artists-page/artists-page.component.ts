import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtistsSectionComponent } from '../../../components/main/artists-section/artists-section.component';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, ArtistsSectionComponent],
  selector: 'app-artists-page',
  templateUrl: './artists-page.component.html',
})
export class ArtistsPageComponent {}
