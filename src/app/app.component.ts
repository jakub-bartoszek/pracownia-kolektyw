import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

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
export class AppComponent {
  isAuthModalOpen = false;

  constructor(private authService: AuthService) {
    this.authService.isAuthModalOpen$.subscribe((isOpen) => {
      this.isAuthModalOpen = isOpen;
    });
  }

  scrollToSection(sectionName: string) {
    const section = document.getElementById(sectionName);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  openAuthModal() {
    this.authService.openAuthModal();
  }

  closeAuthModal() {
    this.authService.closeAuthModal();
  }
}
