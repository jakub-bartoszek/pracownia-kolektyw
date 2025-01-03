import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GalleryService } from '../../../services/gallery.service';
import { ImageData } from '../../../models/models';
import { GallerySectionComponent } from '../../../components/main/gallery-section/gallery-section.component';

@Component({
  selector: 'app-gallery-page',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, GallerySectionComponent],
  templateUrl: './gallery-page.component.html',
})
export class GalleryPageComponent implements OnInit {
  images: ImageData[] = [];

  constructor(private galleryService: GalleryService) {}

  async ngOnInit(): Promise<void> {
    this.images = await this.galleryService.loadImages();
  }
}
