import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { CommonModule } from '@angular/common';
import axios from 'axios';
import { isPlatformBrowser } from '@angular/common';

interface Image {
  path: string;
  artist: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    AuthComponent,
    CommonModule,
  ],
})
export class AppComponent implements OnInit {
  images: Image[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  async fetchImages() {
    try {
      if (isPlatformBrowser(this.platformId)) {
        const url = `${window.location.origin}/images/images.json`;
        const response = await axios.get(url);
        this.images = response.data;
      }
    } catch (err) {
      console.error('Error fetching images:', err);
    }
  }

  isAuthModalOpen = false;

  openAuthModal() {
    this.isAuthModalOpen = true;
  }

  closeAuthModal() {
    this.isAuthModalOpen = false;
  }

  scrollToSection() {
    const section = document.getElementById('o-nas');

    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionTop - 80;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  ngOnInit(): void {
    this.fetchImages();
  }
}
