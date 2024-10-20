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
import { Artist } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ArtistsService {
  constructor(private firestore: Firestore) {}

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

  async addArtist(artist: Artist): Promise<void> {
    const artistsCollection = collection(this.firestore, 'artists');
    await addDoc(artistsCollection, artist);
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
}
