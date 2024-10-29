import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';
import { AuthService } from '../../services/auth.service';
import { Artist } from '../../models/models';
import { UploadArtistModalComponent } from '../../components/upload-artist-modal/upload-artist-modal.component';

@Component({
  standalone: true,
  imports: [UploadArtistModalComponent, CommonModule, RouterModule],
  selector: 'app-artists',
  templateUrl: './artists.component.html',
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [];
  isModalOpen = false;
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

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }
}
