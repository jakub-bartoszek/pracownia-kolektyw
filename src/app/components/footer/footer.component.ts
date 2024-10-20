import { Component, Input } from '@angular/core';
import { FacebookIconComponent } from '../../icons/facebook-icon/facebook-icon.component';
import { InstagramIconComponent } from '../../icons/instagram-icon/instagram-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FacebookIconComponent, InstagramIconComponent],
  templateUrl: './footer.component.html',
})
export class FooterComponent {
  @Input() scrollToSection!: (sectionId: string) => void;
}
