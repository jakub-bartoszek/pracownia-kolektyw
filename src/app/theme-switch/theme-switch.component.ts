import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { MoonIconComponent } from '../icons/moon-icon/moon-icon.component';
import { isPlatformBrowser } from '@angular/common';
import { SunIconComponent } from "../icons/sun-icon/sun-icon.component";

@Component({
  selector: 'app-theme-switch',
  standalone: true,
  imports: [MoonIconComponent, SunIconComponent],
  templateUrl: './theme-switch.component.html',
})
export class ThemeSwitchComponent {
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      const savedTheme = localStorage.getItem('theme');
      const htmlElement = document.documentElement;

      if (savedTheme === 'dark') {
        htmlElement.classList.add('dark');
      } else {
        htmlElement.classList.remove('dark');
      }
    }
  }

  toggleTheme() {
    if (this.isBrowser) {
      const htmlElement = document.documentElement;
      const isDarkMode = htmlElement.classList.contains('dark');

      if (isDarkMode) {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
    }
  }
}
