import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-nav-link',
  standalone: true,
  templateUrl: './nav-link.component.html',
})
export class NavLinkComponent {
  @Input() href: string = '#';
  @Input() title: string = '';
  @Input() content?: { href: string; title: string }[];
  @Input() isSidebar: boolean = false;
}
