import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Artist } from '../../../models/models';
import { ArtistsService } from '../../../services/artists.service';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';

@Component({
  selector: 'app-admin-artist-page',
  standalone: true,
  imports: [CommonModule, FormsModule, NgxFileDropModule],
  templateUrl: './admin-artist-page.component.html',
})
export class AdminArtistPageComponent implements OnInit {
  artist: Artist | null = null;
  selectedProfileImageFile?: File;
  isImageEditModalOpen = false;

  openImageEditModal(): void {
    this.isImageEditModalOpen = true;
  }

  closeImageEditModal(): void {
    this.isImageEditModalOpen = false;
  }
  constructor(
    private route: ActivatedRoute,
    private artistsService: ArtistsService
  ) {}

  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.artist = await this.artistsService.getArtistById(id);
    }
  }

  onFileDropped(files: NgxFileDropEntry[]): void {
    if (files.length > 0) {
      const droppedFile = files[0];
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file) => {
          this.selectedProfileImageFile = file;
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

  async saveChanges(): Promise<void> {
    if (this.artist && this.artist.id) {
      try {
        await this.artistsService.updateArtistWithProfileImage(
          this.artist.id,
          {
            name: this.artist.name,
            surname: this.artist.surname,
            biography: this.artist.biography,
            category: this.artist.category,
          },
          this.selectedProfileImageFile
        );
      } catch (error) {
        console.error('Error updating artist:', error);
      }
    } else {
      console.error('Artist or artist ID is missing.');
    }
  }
}
