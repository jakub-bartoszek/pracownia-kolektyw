import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Artist, ImageData } from '../../../models/models';
import { AuthService } from '../../../services/auth.service';
import { GalleryService } from '../../../services/gallery.service';
import { ArtistsService } from '../../../services/artists.service';
import { ContactFormComponent } from '../../../components/main/contact-form/contact-form.component';
import { ArtistsSectionComponent } from '../../../components/main/artists-section/artists-section.component';
import { ReviewsSectionComponent } from '../../../components/main/reviews-section/reviews-section.component';
import { ImageModalComponent } from '../../../components/main/image-modal/image-modal.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ContactFormComponent,
    ArtistsSectionComponent,
    ReviewsSectionComponent,
    ImageModalComponent,
  ],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;
  artists: Artist[] = [];
  images: ImageData[] = [];
  selectedImageUrl: string = '';
  isImageModalOpen: boolean = false;

  constructor(
    private authService: AuthService,
    private galleryService: GalleryService,
    private artistsService: ArtistsService
  ) {}

  openModal() {
    this.authService.openAuthModal();
  }

  openImageModal(imageUrl: string) {
    this.selectedImageUrl = imageUrl;
    this.isImageModalOpen = true;
  }

  closeImageModal() {
    this.isImageModalOpen = false;
    this.selectedImageUrl = '';
  }

  scrollToSection(sectionName: string) {
    const section = document.getElementById(sectionName);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionTop - 80;
      window.scrollTo({
        top: offsetPosition,
      });
    }
  }

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

  getArtistFullName(artistId: string): string {
    return this.artistsService.getArtistFullName(artistId, this.artists);
  }
}
