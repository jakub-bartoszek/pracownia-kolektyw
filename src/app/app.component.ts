import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
})
export class AppComponent {
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
