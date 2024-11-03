import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import emailjs from '@emailjs/browser';
import { CommonModule } from '@angular/common';
import { MailSendIconComponent } from '../../icons/mail-send-icon/mail-send-icon.component';
import { MailSuccessIconComponent } from '../../icons/mail-success-icon/mail-success-icon.component';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MailSendIconComponent,
    MailSuccessIconComponent,
  ],
  templateUrl: './contact-form.component.html',
})
export class ContactFormComponent {
  name = '';
  email = '';
  message = '';
  formStatus = '';

  serviceKey = 'service_kvtec2s';
  templateKey = 'template_dy2rgfu';
  userKey = 'G7hyajYSOa5-qOuTq';

  async onFormSubmit() {
    this.formStatus = 'loading';

    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    try {
      await emailjs.send(
        this.serviceKey,
        this.templateKey,
        templateParams,
        this.userKey
      );
      this.formStatus = 'success';
    } catch (error) {
      console.error('Błąd przy wysyłaniu e-maila:', error);
      this.formStatus = 'error';
    }
  }

  resetForm() {
    this.formStatus = '';
    this.name = '';
    this.email = '';
    this.message = '';
  }
}
