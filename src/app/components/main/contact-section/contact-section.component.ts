import { Component, Input } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {}
