import { Component, OnInit } from '@angular/core';
import { Artist, ImageData } from '../../../models/models';
import { ArtistsService } from '../../../services/artists.service';
import { GalleryService } from '../../../services/gallery.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtistsSectionComponent } from '../../../components/main/artists-section/artists-section.component';
import { GallerySectionComponent } from '../../../components/main/gallery-section/gallery-section.component';

@Component({
  selector: 'app-piercing-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ArtistsSectionComponent,
    GallerySectionComponent,
  ],
  templateUrl: './piercing-page.component.html',
})
export class PiercingPageComponent implements OnInit {
  piercingArtists: Artist[] = [];
  piercingImages: ImageData[] = [];
  piercingStyles = [
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

  constructor(
    private artistsService: ArtistsService,
    private galleryService: GalleryService
  ) {}

  async ngOnInit(): Promise<void> {
    this.piercingArtists = (await this.artistsService.loadArtists()).filter(
      (artist) => artist.category === 'piercing'
    );
    this.piercingImages = await this.galleryService.loadImages('piercing');
  }
}
