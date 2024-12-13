import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  @Input() isLoggedIn: boolean = false;
  @Input() isOpen: boolean = false;
  @Input() links: { href: string; title: string }[] = [];
  @Output() closeSidebar: EventEmitter<void> = new EventEmitter();
  @Output() login: EventEmitter<void> = new EventEmitter();
  @Output() logout: EventEmitter<void> = new EventEmitter();
  @Output() openAuthModal: EventEmitter<void> = new EventEmitter();

  onCloseSidebar() {
    this.closeSidebar.emit();
  }

  onLogin() {
    this.login.emit();
  }

  onLogout() {
    this.logout.emit();
  }

  onOpenAuthModal() {
    this.openAuthModal.emit();
  }
}
