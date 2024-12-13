import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/main/navbar/navbar.component';
import { FooterComponent } from '../../components/main/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from '../../components/main/auth-modal/auth-modal.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    RouterOutlet,
    AuthModalComponent,
    CommonModule,
  ],
  templateUrl: './main-layout.component.html',
})
export class MainLayoutComponent {
  isAuthModalOpen = false;

  constructor(private authService: AuthService) {
    this.subscribeToAuthModal();
  }

  private subscribeToAuthModal(): void {
    this.authService.isAuthModalOpen$.subscribe(
      (isOpen) => (this.isAuthModalOpen = isOpen)
    );
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
      const offsetPosition =
        section.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  }
}
