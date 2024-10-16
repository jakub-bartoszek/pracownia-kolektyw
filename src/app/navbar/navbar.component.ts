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
import { NavLinkComponent } from '../nav-link/nav-link.component';
import { NavLinksComponent } from '../nav-links/nav-links.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MenuToggleComponent } from '../menu-toggle/menu-toggle.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NavLinkComponent,
    NavLinksComponent,
    SidebarComponent,
    MenuToggleComponent,
    CommonModule,
  ],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  @Output() openModal: EventEmitter<void> = new EventEmitter();

  isSidebarOpen = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

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

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      if (window.innerWidth >= 768) {
        this.isSidebarOpen = false;
      }
    }
  }
}
