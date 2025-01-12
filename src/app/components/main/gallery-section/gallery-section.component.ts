import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ImageModalComponent } from '../image-modal/image-modal.component';
import { Artist, ImageData } from '../../../models/models';
import { ArtistsService } from '../../../services/artists.service';

@Component({
  selector: 'app-gallery-section',
  standalone: true,
  imports: [CommonModule, RouterModule, ImageModalComponent],
  templateUrl: './gallery-section.component.html',
})
export class GallerySectionComponent implements OnInit {
  @Input() images: ImageData[] = [];
  @Input() header: string = '';
  @Input() headerPosition: 'center' | 'left' = 'left';
  @Input() isWidget?: boolean = false;

  artists: Artist[] = [];
  selectedImageUrl: string = '';
  isImageModalOpen: boolean = false;

  constructor(private artistsService: ArtistsService) {}

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

  async ngOnInit(): Promise<void> {
    this.artists = await this.artistsService.loadArtists();
  }
}
