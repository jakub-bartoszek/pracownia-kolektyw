import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [CommonModule, NavLinkComponent],
  templateUrl: './nav-links.component.html',
})
export class NavLinksComponent {
  @Input() isSidebar: boolean = false;
  @Output() onLogin: EventEmitter<void> = new EventEmitter();

  links = [
    { href: '/o-nas', title: 'O nas' },
    { href: '/portfolio', title: 'Portfolio' },
    { href: '/uslugi', title: 'Usługi' },
    { href: '/cennik', title: 'Cennik' },
    { href: '/artysci', title: 'Artyści' },
    { href: '/kontakt', title: 'Kontakt' },
  ];

  triggerLogin() {
    this.onLogin.emit();
  }
}
