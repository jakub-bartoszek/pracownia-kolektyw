import { Component, OnInit } from '@angular/core';
import { Artist, ImageData } from '../../models/models';
import { ActivatedRoute } from '@angular/router';
import { ArtistsService } from '../../services/artists.service';
import { CommonModule } from '@angular/common';
import { GalleryService } from '../../services/gallery.service';

@Component({
  selector: 'app-artist-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './artist-detail.component.html',
})
export class ArtistDetailComponent implements OnInit {
  artist: Artist | null = null;
  artworks: ImageData[] = [];

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
