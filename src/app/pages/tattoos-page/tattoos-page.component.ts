import { Component, OnInit } from '@angular/core';
import { Artist, ImageData } from '../../models/models';
import { ArtistsService } from '../../services/artists.service';
import { GalleryService } from '../../services/gallery.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ImageModalComponent } from "../../components/image-modal/image-modal.component";

@Component({
  selector: 'app-tattoos-page',
  standalone: true,
  imports: [CommonModule, RouterModule, ImageModalComponent],
  templateUrl: './tattoos-page.component.html',
})
export class TattoosPageComponent implements OnInit {
  tattooArtists: Artist[] = [];
  tattooImages: ImageData[] = [];
  tattooStyles = [
    {
      name: 'Realizm',
      description:
        'Detale, głębia i cieniowanie, które przenoszą sztukę na skórę.',
    },
    {
      name: 'Blackwork',
      description: 'Czysta czerń i geometryczne formy dla wyrazistego efektu.',
    },
    {
      name: 'Minimalizm',
      description: 'Subtelne, niewielkie wzory, które dyskretnie zdobią ciało.',
    },
  ];
  selectedImageUrl: string = '';
  isImageModalOpen: boolean = false;

  constructor(
    private artistsService: ArtistsService,
    private galleryService: GalleryService
  ) {}

  openImageModal(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
    this.isImageModalOpen = true;
  }

  closeImageModal() {
    this.isImageModalOpen = false;
    this.selectedImageUrl = '';
  }

  async ngOnInit(): Promise<void> {
    this.tattooArtists = (await this.artistsService.loadArtists()).filter(
      (artist) => artist.category === 'tattoo'
    );
    this.tattooImages = await this.galleryService.loadImages('tattoo');
  }

  getArtistFullName(artistId: string): string {
    return this.artistsService.getArtistFullName(artistId, this.tattooArtists);
  }
}
