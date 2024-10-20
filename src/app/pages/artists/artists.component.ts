import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-artists',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './artists.component.html',
})
export class ArtistsComponent {
  artistForm: FormGroup;
  isModalOpen = false;

  constructor(private fb: FormBuilder, private firestore: Firestore) {
    this.artistForm = this.fb.group({
      name: [''],
      surname: [''],
    });
  }

  openModal(): void {
    this.isModalOpen = true;
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.artistForm.reset();
  }

  async addArtist(): Promise<void> {
    const artistData = this.artistForm.value;
    await addDoc(collection(this.firestore, 'artists'), artistData);
    this.closeModal();
  }
}
