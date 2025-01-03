import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Artist, ImageData } from '../../../models/models';
import { ArtistsService } from '../../../services/artists.service';
import { GalleryService } from '../../../services/gallery.service';
import { GallerySectionComponent } from '../../../components/main/gallery-section/gallery-section.component';

@Component({
  selector: 'app-artist-page',
  standalone: true,
  imports: [CommonModule, RouterModule, GallerySectionComponent],
  templateUrl: './artist-page.component.html',
})
export class ArtistPageComponent implements OnInit {
  artist: Artist | null = null;
  artworks: ImageData[] = [];
  selectedImageUrl: string = '';

  constructor(
    private route: ActivatedRoute,
    private artistsService: ArtistsService,
    private galleryService: GalleryService
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.artist = await this.artistsService.getArtistById(id);
      this.artworks = await this.galleryService.loadImagesByArtist(id);
    }
  }
}
