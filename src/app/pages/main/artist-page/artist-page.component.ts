import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Artist, ImageData } from '../../../models/models';
import { ArtistsService } from '../../../services/artists.service';
import { GalleryService } from '../../../services/gallery.service';

@Component({
  selector: 'app-artist-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './artist-page.component.html',
})
export class ArtistPageComponent implements OnInit {
  artist: Artist | null = null;
  artworks: ImageData[] = [];
  selectedProfileImageFile?: File;

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
