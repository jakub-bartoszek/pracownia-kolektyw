import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mail-send-icon',
  standalone: true,
  imports: [],
  templateUrl: './mail-send-icon.component.html',
})
export class MailSendIconComponent {
  @Input() size: string = '64px';
}
