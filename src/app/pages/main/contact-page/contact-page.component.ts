import { Component } from '@angular/core';
import { ContactSectionComponent } from '../../../components/main/contact-section/contact-section.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactSectionComponent],
  templateUrl: './contact-page.component.html',
})
export class ContactPageComponent {}
