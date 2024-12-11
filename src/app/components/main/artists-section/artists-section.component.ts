import { Component, OnInit } from '@angular/core';
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
export class ArtistsSectionComponent implements OnInit {
  artists: Artist[] = [];

  constructor(private artistsService: ArtistsService) {}

  async ngOnInit(): Promise<void> {
    this.artists = await this.artistsService.loadArtists();
  }
}
