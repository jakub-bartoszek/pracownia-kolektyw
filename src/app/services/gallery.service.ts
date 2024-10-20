import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  getDocs,
} from '@angular/fire/firestore';
import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
} from '@angular/fire/storage';
import { ArtistsService } from './artists.service';
import { ImageData } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  constructor(
    private firestore: Firestore,
    private storage: Storage,
    private artistsService: ArtistsService
  ) {}

  async loadImages(): Promise<ImageData[]> {
    const querySnapshot = await getDocs(collection(this.firestore, 'images'));
    return querySnapshot.docs
      .map((doc) => {
        const data = doc.data() as {
          artistId: string;
          imageUrl: string;
          createdAt: any;
        };
        return {
          id: doc.id,
          artistId: data.artistId || '',
          imageUrl: data.imageUrl || '',
          createdAt: data.createdAt ? data.createdAt.toDate() : new Date(),
        } as ImageData;
      })
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async uploadImage(file: File, artistId: string): Promise<void> {
    const artists = await this.artistsService.loadArtists();
    const artistExists = artists.some((artist) => artist.id === artistId);

    if (!artistExists) {
      throw new Error('Artist does not exist');
    }

    const filePath = `images/${file.name}`;
    const storageRef = ref(this.storage, filePath);

    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    const data = {
      artistId: artistId,
      imageUrl: downloadURL,
      createdAt: new Date(),
    };

    await addDoc(collection(this.firestore, 'images'), data);

    window.location.reload();
  }
}
