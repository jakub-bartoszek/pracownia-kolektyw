import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { NavLinksComponent } from '../nav-links/nav-links.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MenuToggleComponent } from '../menu-toggle/menu-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    ThemeSwitchComponent,
    NavLinkComponent,
    NavLinksComponent,
    SidebarComponent,
    MenuToggleComponent,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isSidebarOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = (event.target as Window).innerWidth;
    if (width >= 768 && this.isSidebarOpen) {
      this.isSidebarOpen = false;
    }
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth >= 768) {
        this.isSidebarOpen = false;
      }
    }
  }
}
