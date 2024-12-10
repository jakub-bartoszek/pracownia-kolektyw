import { Component, OnInit } from '@angular/core';
import { UploadArtistModalComponent } from '../../../components/main/upload-artist-modal/upload-artist-modal.component';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Artist } from '../../../models/models';
import { ArtistsService } from '../../../services/artists.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-artists-page',
  standalone: true,
  imports: [UploadArtistModalComponent, CommonModule, RouterModule],
  templateUrl: './admin-artists-page.component.html',
})
export class AdminArtistsPageComponent implements OnInit {
  artists: Artist[] = [];
  isAdmin = false;
  isLoggedIn = false;
  isModalOpen = false;

  constructor(
    private authService: AuthService,
    private artistsService: ArtistsService
  ) {}

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  async ngOnInit(): Promise<void> {
    this.artists = await this.artistsService.loadArtists();

    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });

    this.authService.isAdmin$.subscribe((admin) => {
      this.isAdmin = admin;
    });
  }

  async deleteArtist(artistId: string): Promise<void> {
    if (confirm('Czy na pewno chcesz usunąć tę pracę?')) {
      await this.artistsService.removeArtist(artistId);
      this.artists = this.artists.filter((artist) => artist.id !== artistId);
    }
  }
}
