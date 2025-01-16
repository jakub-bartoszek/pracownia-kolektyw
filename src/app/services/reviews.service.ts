import { Injectable } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  collectionData,
  serverTimestamp,
  Timestamp,
  query,
  where,
  getDocs,
  doc,
  deleteDoc,
} from '@angular/fire/firestore';
import { Observable, firstValueFrom } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Review } from '../models/models';

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor(private firestore: Firestore, private authService: AuthService) {}

  async loadReviews(): Promise<Review[]> {
    const querySnapshot = await getDocs(collection(this.firestore, 'reviews'));
    return querySnapshot.docs.map((doc) => {
      const data = doc.data(); // Pobranie surowych danych z dokumentu
      return {
        id: doc.id, // ID dokumentu
        content: data['content'], // Dostęp przez indeks
        name: data['name'], // Dostęp przez indeks
        date: this.formatTimestamp(data['date']), // Formatowanie daty
        rate: data['rate'], // Dostęp przez indeks
        userId: data['userId'], // Dostęp przez indeks
      } as Review; // Rzutowanie na typ Review
    });
  }
  

  async submitReview(content: string, rate: number): Promise<void> {
    const user = this.authService.currentUser;
    if (!user) throw new Error('User is not logged in.');

    const userInfo = await this.authService.getUserInfo(user.uid);
    if (!userInfo) throw new Error('User information not available.');

    const existingReview = await this.getUserReview(user.uid);
    if (existingReview) throw new Error('You have already submitted a review.');

    const review: Omit<Review, 'id' | 'date'> = {
      content,
      name: `${userInfo.firstName} ${userInfo.lastName}`,
      rate,
      userId: user.uid,
    };

    const reviewsCollection = collection(this.firestore, 'reviews');
    await addDoc(reviewsCollection, {
      ...review,
      date: serverTimestamp(),
    });
  }

  async getUserReview(userId: string): Promise<Review | null> {
    const reviewsCollection = collection(this.firestore, 'reviews');
    const userReviewQuery = query(
      reviewsCollection,
      where('userId', '==', userId)
    );
    const querySnapshot = await getDocs(userReviewQuery);

    if (!querySnapshot.empty) {
      const docData = querySnapshot.docs[0].data() as Review;
      return { ...docData, id: querySnapshot.docs[0].id };
    }
    return null;
  }

  async removeReview(reviewId: string): Promise<void> {
    const user = this.authService.currentUser;
    if (!user) throw new Error('User is not logged in.');

    const reviewDoc = doc(this.firestore, `reviews/${reviewId}`);
    const existingReview = await this.getUserReview(user.uid);
    const isAdmin = await firstValueFrom(this.authService.isAdmin$);

    if (existingReview?.id === reviewId || isAdmin) {
      await deleteDoc(reviewDoc);
    } else {
      throw new Error('You do not have permission to delete this review.');
    }
  }

  async loadUserReview(userId: string): Promise<Review | null> {
    return this.getUserReview(userId);
  }

  private formatTimestamp(timestamp: any): string {
    if (timestamp instanceof Timestamp) {
      const date = timestamp.toDate();
      const day = String(date.getDate()).padStart(2, '0');
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, '0');
      const minutes = String(date.getMinutes()).padStart(2, '0');
      return `${day}-${month}-${year} ${hours}:${minutes}`;
    }
    return '';
  }
}
