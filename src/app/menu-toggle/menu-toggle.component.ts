import { Component, EventEmitter, Output } from '@angular/core';
import { MenuIconComponent } from "../icons/menu-icon/menu-icon.component";

@Component({
  selector: 'app-menu-toggle',
  templateUrl: './menu-toggle.component.html',
  standalone: true,
  imports: [MenuIconComponent],
})
export class MenuToggleComponent {
  @Output() toggleSidebar = new EventEmitter<void>();

  onToggle() {
    this.toggleSidebar.emit();
  }
}
