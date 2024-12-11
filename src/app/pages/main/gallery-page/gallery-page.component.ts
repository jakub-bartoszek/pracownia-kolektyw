import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GalleryService } from '../../../services/gallery.service';
import { Artist, ImageData } from '../../../models/models';
import { ArtistsService } from '../../../services/artists.service';
import { ImageModalComponent } from '../../../components/main/image-modal/image-modal.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ImageModalComponent],
  templateUrl: './gallery-page.component.html',
})
export class GalleryPageComponent implements OnInit {
  artists: Artist[] = [];
  images: ImageData[] = [];
  isModalOpen = false;
  selectedImageUrl: string = '';
  isImageModalOpen: boolean = false;

  constructor(
    private galleryService: GalleryService,
    private artistsService: ArtistsService
  ) {}

  async ngOnInit(): Promise<void> {
    this.artists = await this.artistsService.loadArtists();
    this.images = await this.galleryService.loadImages();
  }

  openImageModal(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
    this.isImageModalOpen = true;
  }

  closeImageModal() {
    this.isImageModalOpen = false;
    this.selectedImageUrl = '';
  }

  getArtistFullName(artistId: string): string {
    return this.artistsService.getArtistFullName(artistId, this.artists);
  }
}
