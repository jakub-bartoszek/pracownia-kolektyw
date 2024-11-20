import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';
import { AuthService } from '../../services/auth.service';
import { Artist } from '../../models/models';

@Component({
  standalone: true,
  imports: [CommonModule, RouterModule],
  selector: 'app-artists-section',
  templateUrl: './artists-section.component.html',
})
export class ArtistsSectionComponent implements OnInit {
  artists: Artist[] = [];
  isAdmin = false;
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private artistsService: ArtistsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.artists = await this.artistsService.loadArtists();

    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });

    this.authService.isAdmin$.subscribe((admin) => {
      this.isAdmin = admin;
    });
  }

  truncateBiography(biography: string, maxLength: number = 120): string {
    return biography.length > maxLength
      ? biography.substring(0, maxLength).trimEnd() + '...'
      : biography;
  }
}
