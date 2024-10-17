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
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

export interface Review {
  id?: string;
  content: string;
  name: string;
  date: any;
  rate: number;
  userId: string;
}

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  constructor(private firestore: Firestore, private authService: AuthService) {}

  loadReviews(): Observable<Review[]> {
    const reviewsCollection = collection(this.firestore, 'reviews');
    return collectionData(reviewsCollection, { idField: 'id' }).pipe(
      map((reviews: Review[]) =>
        reviews.map((review) => ({
          ...review,
          date: this.formatTimestamp(review.date),
        }))
      )
    ) as Observable<Review[]>;
  }

  async submitReview(content: string, rate: number): Promise<void> {
    const user = this.authService.currentUser;
    if (!user) {
      throw new Error('User is not logged in.');
    }

    const userInfo = await this.authService.getUserInfo(user.uid);
    if (!userInfo) {
      throw new Error('User information not available.');
    }

    const existingReview = await this.getUserReview(user.uid);
    if (existingReview) {
      throw new Error('You have already submitted a review.');
    }

    const review: Omit<Review, 'date'> = {
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

  async removeUserReview(): Promise<void> {
    const user = this.authService.currentUser;
    if (!user) {
      throw new Error('User is not logged in.');
    }

    const existingReview = await this.getUserReview(user.uid);
    if (existingReview && existingReview.id) {
      const reviewDoc = doc(this.firestore, `reviews/${existingReview.id}`);
      await deleteDoc(reviewDoc);
    } else {
      throw new Error('No review found to delete.');
    }
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

  async loadUserReview(userId: string): Promise<Review | null> {
    return this.getUserReview(userId);
  }
}
