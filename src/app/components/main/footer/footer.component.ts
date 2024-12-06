import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FacebookIconComponent } from '../../../icons/facebook-icon/facebook-icon.component';
import { InstagramIconComponent } from '../../../icons/instagram-icon/instagram-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FacebookIconComponent, InstagramIconComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() scrollToSection!: (sectionId: string) => void;

  constructor(private router: Router) {}

  navigateAndScrollToSection(sectionId: string) {
    if (this.router.url === '/') {
      this.scrollToSection(sectionId);
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToSection(sectionId);
        }, 300);
      });
    }
  }
}
