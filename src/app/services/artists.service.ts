import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from '@angular/fire/firestore';
import {
  getDownloadURL,
  ref,
  Storage,
  uploadBytes,
} from '@angular/fire/storage';
import { Artist } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  private defaultProfileImageUrl: string =
    'https://firebasestorage.googleapis.com/v0/b/pracownia-kolektyw.appspot.com/o/artists%2Fdefault-avatar.jpg?alt=media&token=3103c78e-ddf8-4b1f-a58d-713d3c75e6c1';

  constructor(private firestore: Firestore, private storage: Storage) {}

  async loadArtists(): Promise<Artist[]> {
    const querySnapshot = await getDocs(collection(this.firestore, 'artists'));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Artist[];
  }

  getArtistFullName(artistId: string, artists: Artist[]): string {
    const artist = artists.find((a) => a.id === artistId);
    return artist ? `${artist.name} ${artist.surname}` : 'Nieznany artysta';
  }

  async addArtistWithProfileImage(
    artist: Omit<Artist, 'profileImageUrl' | 'id'>,
    file?: File
  ): Promise<void> {
    let profileImageUrl: string;

    if (file) {
      const filePath = `artists/${Date.now()}_${file.name}`;
      const fileRef = ref(this.storage, filePath);
      const uploadResult = await uploadBytes(fileRef, file);
      profileImageUrl = await getDownloadURL(uploadResult.ref);
    } else {
      profileImageUrl = this.defaultProfileImageUrl;
    }

    const artistWithImage = { ...artist, profileImageUrl };
    const artistsCollection = collection(this.firestore, 'artists');
    await addDoc(artistsCollection, artistWithImage);
  }

  async getArtistById(id: string): Promise<Artist | null> {
    const artists = await this.loadArtists();
    return artists.find((artist) => artist.id === id) || null;
  }

  async removeArtist(artistId: string): Promise<void> {
    const artistDoc = doc(this.firestore, `artists/${artistId}`);
    await deleteDoc(artistDoc);
  }

  async updateArtist(
    artistId: string,
    updatedData: Partial<Artist>
  ): Promise<void> {
    const artistDoc = doc(this.firestore, `artists/${artistId}`);
    await updateDoc(artistDoc, updatedData);
  }

  async updateArtistWithProfileImage(
    artistId: string,
    updatedData: Partial<Artist>,
    file?: File
  ): Promise<void> {
    let profileImageUrl = updatedData.profileImageUrl;

    if (file) {
      const filePath = `artists/${Date.now()}_${file.name}`;
      const fileRef = ref(this.storage, filePath);
      const uploadResult = await uploadBytes(fileRef, file);
      profileImageUrl = await getDownloadURL(uploadResult.ref);
    }

    const artistDoc = doc(this.firestore, `artists/${artistId}`);
    await updateDoc(artistDoc, {
      ...updatedData,
      profileImageUrl: profileImageUrl || this.defaultProfileImageUrl,
    });
  }
}
