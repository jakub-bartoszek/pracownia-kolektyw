import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { MenuIconComponent } from '../icons/menu-icon/menu-icon.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ThemeSwitchComponent,
    NavLinkComponent,
    MenuIconComponent,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {
  isSidebarOpen = true;

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
    if (window.innerWidth >= 768) {
      this.isSidebarOpen = false;
    }
  }
}
