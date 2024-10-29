import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { AuthModalComponent } from './components/auth-modal/auth-modal.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    FooterComponent,
    NavbarComponent,
    AuthModalComponent,
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

  openAuthModal(): void {
    this.authService.openAuthModal();
  }

  closeAuthModal(): void {
    this.authService.closeAuthModal();
  }

  scrollToSection(sectionName: string): void {
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
}
