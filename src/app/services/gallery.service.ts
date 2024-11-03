import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import {
  Storage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
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

  async loadImages(category?: 'piercing' | 'tattoo'): Promise<ImageData[]> {
    const querySnapshot = await getDocs(collection(this.firestore, 'images'));
    return querySnapshot.docs
      .map((doc) => {
        const data = doc.data() as {
          artistId: string;
          imageUrl: string;
          createdAt: any;
          category: 'piercing' | 'tattoo';
        };
        return {
          id: doc.id,
          artistId: data.artistId || '',
          imageUrl: data.imageUrl || '',
          category: data.category,
          createdAt: data.createdAt ? data.createdAt.toDate() : new Date(),
        } as ImageData;
      })
      .filter((image) => !category || image.category === category)
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async loadImagesByArtist(
    artistId: string,
    category?: 'piercing' | 'tattoo'
  ): Promise<ImageData[]> {
    const querySnapshot = await getDocs(collection(this.firestore, 'images'));
    return querySnapshot.docs
      .map((doc) => {
        const data = doc.data() as {
          artistId: string;
          imageUrl: string;
          createdAt: any;
          category: 'piercing' | 'tattoo';
        };
        return {
          id: doc.id,
          artistId: data.artistId || '',
          imageUrl: data.imageUrl || '',
          category: data.category,
          createdAt: data.createdAt ? data.createdAt.toDate() : new Date(),
        } as ImageData;
      })
      .filter(
        (image) =>
          image.artistId === artistId &&
          (!category || image.category === category)
      )
      .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
  }

  async uploadImage(
    file: File,
    artistId: string,
    category: 'piercing' | 'tattoo'
  ): Promise<void> {
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
      category,
      createdAt: new Date(),
    };

    await addDoc(collection(this.firestore, 'images'), data);

    window.location.reload();
  }

  async deleteImage(imageId: string, imageUrl: string): Promise<void> {
    const storageRef = ref(this.storage, imageUrl);
    await deleteObject(storageRef);

    const imageDocRef = doc(this.firestore, 'images', imageId);
    await deleteDoc(imageDocRef);
  }
}
