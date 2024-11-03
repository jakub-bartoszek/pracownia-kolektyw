import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mail-success-icon',
  standalone: true,
  imports: [],
  templateUrl: './mail-success-icon.component.html',
})
export class MailSuccessIconComponent {
  @Input() size: string = '64px';
}
