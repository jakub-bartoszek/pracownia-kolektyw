import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ServicesSectionComponent } from "../../../components/main/services-section/services-section.component";

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [RouterModule, ServicesSectionComponent],
  templateUrl: './services-page.component.html',
})
export class ServicesPageComponent {}
