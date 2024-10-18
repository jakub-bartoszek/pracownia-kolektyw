import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { AuthService } from '../../services/auth.service';
import { Observable } from 'rxjs';
import { User } from '@angular/fire/auth';

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

  user$: Observable<User | null>;
  constructor(private authService: AuthService) {
    this.user$ = this.authService.currentUser$;
  }

  triggerLogin() {
    this.onLogin.emit();
  }

  logout() {
    this.authService.logout().then(() => {
      console.log('Wylogowano pomyślnie');
    });
  }
}
