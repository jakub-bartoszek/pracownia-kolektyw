import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../../components/admin/navbar/navbar.component";

@Component({
  selector: 'app-admin-layout',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './admin-layout.component.html',
})
export class AdminLayoutComponent {}
