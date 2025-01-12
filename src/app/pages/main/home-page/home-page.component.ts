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
import { GallerySectionComponent } from '../../../components/main/gallery-section/gallery-section.component';
import { BannerComponent } from '../../../components/main/banner/banner.component';
import { ServicesSectionComponent } from "../../../components/main/services-section/services-section.component";

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
    GallerySectionComponent,
    BannerComponent,
    ServicesSectionComponent
],
  templateUrl: './home-page.component.html',
})
export class HomePageComponent implements OnInit {
  isLoggedIn = false;
  isAdmin = false;
  artists: Artist[] = [];
  images: ImageData[] = [];

  constructor(
    private authService: AuthService,
    private galleryService: GalleryService,
    private artistsService: ArtistsService
  ) {}

  openModal() {
    this.authService.openAuthModal();
  }

  scrollToSection(sectionName: string) {
    const section = document.getElementById(sectionName);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionTop - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
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

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;

        if (entry.isIntersecting) {
          element.classList.remove('opacity-0');
          element.classList.add('opacity-100');
        } else {
          element.classList.remove('opacity-100');
          element.classList.add('opacity-0');
        }
      });
    });

    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((element) => observer.observe(element));
  }
}
