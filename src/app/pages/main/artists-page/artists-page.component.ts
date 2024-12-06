import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { UploadArtistModalComponent } from '../../../components/main/upload-artist-modal/upload-artist-modal.component';
import { ArtistsSectionComponent } from '../../../components/main/artists-section/artists-section.component';

@Component({
  standalone: true,
  imports: [
    UploadArtistModalComponent,
    CommonModule,
    RouterModule,
    ArtistsSectionComponent,
  ],
  selector: 'app-artists-page',
  templateUrl: './artists-page.component.html',
})
export class ArtistsPageComponent implements OnInit {
  isModalOpen = false;
  isAdmin = false;
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  async ngOnInit(): Promise<void> {
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
