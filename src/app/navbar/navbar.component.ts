import { Component } from '@angular/core';
import { ThemeSwitchComponent } from "../theme-switch/theme-switch.component";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ThemeSwitchComponent],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent {}
