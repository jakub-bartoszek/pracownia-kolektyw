import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';
import { ArtistsService } from '../../services/artists.service';

@Component({
  standalone: true,
  imports: [ReactiveFormsModule, NgxFileDropModule, CommonModule],
  selector: 'app-upload-artist-modal',
  templateUrl: './upload-artist-modal.component.html',
})
export class UploadArtistModalComponent {
  @Output() close = new EventEmitter<void>();
  artistForm: FormGroup;
  selectedFile: File | null = null;

  constructor(private fb: FormBuilder, private artistsService: ArtistsService) {
    this.artistForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      biography: [''],
      profileImage: [null],
    });
  }

  onFileDropped(files: NgxFileDropEntry[]): void {
    if (files.length > 0) {
      const droppedFile = files[0];
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file) => {
          this.selectedFile = file;
          this.artistForm.patchValue({ profileImage: file });
        });
      }
    }
  }

  removeFile(): void {
    this.selectedFile = null;
    this.artistForm.patchValue({ profileImage: null });
  }

  async onUpload() {
    if (this.artistForm.valid && this.selectedFile) {
      const artistData = {
        name: this.artistForm.value.firstName,
        surname: this.artistForm.value.lastName,
        biography: this.artistForm.value.biography,
      };

      try {
        await this.artistsService.addArtistWithProfileImage(
          artistData,
          this.selectedFile
        );
        this.close.emit();
      } catch (error) {
        console.error('Błąd podczas przesyłania artysty:', error);
      }
    }
  }

  closeModal() {
    this.close.emit();
  }
}
