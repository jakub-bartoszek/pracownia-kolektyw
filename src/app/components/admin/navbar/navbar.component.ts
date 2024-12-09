import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArtworkIconComponent } from '../../../icons/artwork-icon/artwork-icon.component';
import { ArtistIconComponent } from '../../../icons/artist-icon/artist-icon.component';
import { ReviewIconComponent } from '../../../icons/review-icon/review-icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  links = [
    { href: './prace', title: 'Prace', icon: ArtworkIconComponent },
    { href: './artysci', title: 'Artyści', icon: ArtistIconComponent },
    { href: './opinie', title: 'Opinie', icon: ReviewIconComponent },
  ];
}
