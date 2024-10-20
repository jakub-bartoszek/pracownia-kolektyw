import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { GalleryService } from '../../services/gallery.service';
import { Artist, ImageData } from '../../models/models';
import { ArtistsService } from '../../services/artists.service';
import { UploadArtworkModalComponent } from '../../components/upload-artwork-modal/upload-artwork-modal.component';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [
    RouterOutlet,
    ReactiveFormsModule,
    CommonModule,
    UploadArtworkModalComponent,
  ],
  templateUrl: './gallery.component.html',
})
export class GalleryComponent implements OnInit {
  artists: Artist[] = [];
  images: ImageData[] = [];
  isLoggedIn = false;
  isAdmin = false;
  isModalOpen = false;

  constructor(
    private galleryService: GalleryService,
    private authService: AuthService,
    private artistsService: ArtistsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.artists = await this.artistsService.loadArtists();
    this.images = await this.galleryService.loadImages();

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

  getArtistFullName(artistId: string): string {
    return this.artistsService.getArtistFullName(artistId, this.artists);
  }
}
