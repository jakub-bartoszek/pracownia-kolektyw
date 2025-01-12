import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-modal.component.html',
})
export class ImageModalComponent {
  @Input() imageUrl!: string;
  @Input() isOpen: boolean = false;
  @Output() closeImageModal = new EventEmitter<void>();

  onCloseImageModal() {
    this.closeImageModal.emit();
  }
}
