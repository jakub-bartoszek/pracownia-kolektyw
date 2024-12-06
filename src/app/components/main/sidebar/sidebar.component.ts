import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavLinksComponent } from '../nav-links/nav-links.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NavLinksComponent],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Output() onLogin: EventEmitter<void> = new EventEmitter();
  @Input() isOpen: boolean = false;

  closeSidebar() {
    this.isOpen = false;
  }
}
