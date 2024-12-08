import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { GalleryService } from '../../../services/gallery.service';
import { Artist, ImageData } from '../../../models/models';
import { ArtistsService } from '../../../services/artists.service';
import { UploadArtworkModalComponent } from '../../../components/main/upload-artwork-modal/upload-artwork-modal.component';

@Component({
  selector: 'app-admin-artworks-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, UploadArtworkModalComponent],
  templateUrl: './admin-artworks-page.component.html',
})
export class AdminArtworksPageComponent {
  artists: Artist[] = [];
  images: ImageData[] = [];
  isLoggedIn = false;
  isAdmin = false;
  isModalOpen = false;
  selectedImageUrl: string = '';
  isImageModalOpen: boolean = false;

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

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
  }

  getArtistFullName(artistId: string): string {
    return this.artistsService.getArtistFullName(artistId, this.artists);
  }

  async deleteImage(imageId: string, imageUrl: string): Promise<void> {
    if (confirm('Czy na pewno chcesz usunąć tę pracę?')) {
      await this.galleryService.deleteImage(imageId, imageUrl);
      this.images = this.images.filter((image) => image.id !== imageId);
    }
  }
}
