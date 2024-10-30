import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GalleryService } from '../../services/gallery.service';
import { Artist } from '../../models/models';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgxFileDropModule, CommonModule],
  selector: 'app-upload-artwork-modal',
  templateUrl: './upload-artwork-modal.component.html',
})
export class UploadArtworkModalComponent {
  @Input() artists: Artist[] = [];
  @Output() close = new EventEmitter<void>();
  uploadForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private galleryService: GalleryService) {
    this.uploadForm = this.fb.group({
      artistId: ['', Validators.required],
      category: ['', Validators.required],
    });
  }

  onFileDropped(files: NgxFileDropEntry[]): void {
    if (files.length > 0) {
      const droppedFile = files[0];
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file) => {
          this.selectedFile = file;
        });
      }
    }
  }

  fileOver(event: any): void {
    console.log('File over', event);
  }

  fileLeave(event?: any): void {
    console.log('File leave', event);
  }

  removeFile(): void {
    this.selectedFile = null;
  }

  async onUpload() {
    if (this.uploadForm.valid && this.selectedFile) {
      const { artistId, category } = this.uploadForm.value;
      try {
        await this.galleryService.uploadImage(
          this.selectedFile,
          artistId,
          category
        );
        this.close.emit();
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  }

  closeModal() {
    this.close.emit();
  }
}
