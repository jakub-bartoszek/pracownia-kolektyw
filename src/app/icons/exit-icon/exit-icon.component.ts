import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exit-icon',
  standalone: true,
  imports: [],
  templateUrl: './exit-icon.component.html',
})
export class ExitIconComponent {
  @Input() size: string = '32px';
}
