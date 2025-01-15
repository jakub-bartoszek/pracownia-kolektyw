import { Component, Input } from '@angular/core';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [ContactFormComponent, CommonModule],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  @Input() isWidget: boolean = false;
}
