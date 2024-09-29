import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-nav-link',
  standalone: true,
  templateUrl: './nav-link.component.html',
})
export class NavLinkComponent {
  @Input() href: string = '#';
  @Input() title: string = '';
  @Input() isSidebar: boolean = false;
}
