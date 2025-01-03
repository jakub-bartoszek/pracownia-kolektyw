import { Component, OnInit } from '@angular/core';
import { Artist, ImageData } from '../../../models/models';
import { ArtistsService } from '../../../services/artists.service';
import { GalleryService } from '../../../services/gallery.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArtistsSectionComponent } from '../../../components/main/artists-section/artists-section.component';
import { GallerySectionComponent } from '../../../components/main/gallery-section/gallery-section.component';

@Component({
  selector: 'app-tattoos-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ArtistsSectionComponent,
    GallerySectionComponent,
  ],
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

  constructor(
    private artistsService: ArtistsService,
    private galleryService: GalleryService
  ) {}

  async ngOnInit(): Promise<void> {
    this.tattooArtists = (await this.artistsService.loadArtists()).filter(
      (artist) => artist.category === 'tattoo'
    );
    this.tattooImages = await this.galleryService.loadImages('tattoo');
  }
}
