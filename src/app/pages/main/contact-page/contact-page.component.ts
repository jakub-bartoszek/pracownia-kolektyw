import { Component } from '@angular/core';
import { ContactFormComponent } from '../../../components/main/contact-form/contact-form.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-page.component.html'
})
export class ContactPageComponent {

}
