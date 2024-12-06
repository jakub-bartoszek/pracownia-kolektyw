import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './admin-page.component.html',
})
export class AdminPageComponent {}
