import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { CommonModule } from '@angular/common';

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

  openAuthModal() {
    this.isAuthModalOpen = true;
    console.log('lol');
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
}
