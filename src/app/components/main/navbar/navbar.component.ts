import {
  Component,
  EventEmitter,
  HostListener,
  Inject,
  OnInit,
  Output,
  PLATFORM_ID,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MenuToggleComponent } from '../menu-toggle/menu-toggle.component';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SidebarComponent, MenuToggleComponent, CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  links = [
    { href: '/o-nas', title: 'O nas' },
    { href: '/galeria', title: 'Galeria' },
    { href: '/uslugi', title: 'Usługi' },
    { href: '/artysci', title: 'Artyści' },
    { href: '/kontakt', title: 'Kontakt' },
  ];

  @Output() openModal: EventEmitter<void> = new EventEmitter();
  isSidebarOpen = true;
  isLoggedIn = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private authService: AuthService
  ) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    if (width >= 768 && this.isSidebarOpen) {
      this.isSidebarOpen = false;
    }
  }

  logout() {
    this.authService.logout().then(() => {});
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && window.innerWidth >= 768) {
      this.isSidebarOpen = false;
    }

    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }
}
