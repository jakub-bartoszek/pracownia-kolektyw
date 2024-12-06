import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  links = [
    { href: './prace', title: 'Prace' },
    { href: './artysci', title: 'Artyści' },
    { href: './opinie', title: 'Opinie' },
  ];
}
