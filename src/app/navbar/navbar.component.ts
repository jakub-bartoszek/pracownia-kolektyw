import { Component } from '@angular/core';
import { ThemeSwitchComponent } from '../theme-switch/theme-switch.component';
import { NavLinkComponent } from '../nav-link/nav-link.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeSwitchComponent, NavLinkComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
