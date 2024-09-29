import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinksComponent } from '../nav-links/nav-links.component';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NavLinksComponent, ThemeSwitchComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() isOpen: boolean = false;

  closeSidebar() {
    this.isOpen = false;
  }
}
