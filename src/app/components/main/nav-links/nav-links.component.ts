import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-nav-links',
  standalone: true,
  imports: [CommonModule, NavLinkComponent],
  templateUrl: './nav-links.component.html',
})
export class NavLinksComponent {
  isAdmin = false;

  @Input() isSidebar: boolean = false;
  @Output() onLogin: EventEmitter<void> = new EventEmitter();

  links = [
    { href: '/o-nas', title: 'O nas' },
    { href: '/galeria', title: 'Galeria' },
    {
      href: '/uslugi',
      title: 'Usługi',
      content: [
        { href: '/uslugi/tatuaze', title: 'Tatuaże' },
        { href: '/uslugi/piercing', title: 'Piercing' },
      ],
    },
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
    this.authService.logout().then(() => {});
  }

  ngOnInit() {
    this.authService.isAdmin$.subscribe((admin) => {
      this.isAdmin = admin;
    });
  }
}
