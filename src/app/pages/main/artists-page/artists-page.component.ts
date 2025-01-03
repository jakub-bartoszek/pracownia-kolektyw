import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtistsSectionComponent } from '../../../components/main/artists-section/artists-section.component';
import { ArtistsService } from '../../../services/artists.service';
import { Artist } from '../../../models/models';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule, ArtistsSectionComponent],
  selector: 'app-artists-page',
  templateUrl: './artists-page.component.html',
})
export class ArtistsPageComponent implements OnInit {
  artists: Artist[] = [];
  constructor(private artistsService: ArtistsService) {}

  async ngOnInit(): Promise<void> {
    this.artists = await this.artistsService.loadArtists();
  }
}
