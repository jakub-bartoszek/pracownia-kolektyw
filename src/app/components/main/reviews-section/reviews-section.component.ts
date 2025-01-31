import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { ReviewsService } from '../../../services/reviews.service';
import { Review } from '../../../models/models';

@Component({
  selector: 'app-reviews-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews-section.component.html',
})
export class ReviewsSectionComponent {
  reviews: Review[] = [];
  isLoggedIn = false;
  userReview: Review | null = null;
  newReviewContent: string = '';
  newReviewRate: number = 5;

  constructor(
    private authService: AuthService,
    private reviewsService: ReviewsService
  ) {}

  openModal() {
    this.authService.openAuthModal();
  }

  async addReview() {
    try {
      await this.reviewsService.submitReview(
        this.newReviewContent,
        this.newReviewRate
      );
      this.resetReviewFields();
      await this.loadUserReview();
      this.reviews = await this.reviewsService.loadReviews();
    } catch (error) {
      console.error('Error adding review:', error);
    }
  }

  async deleteReview(reviewId: string) {
    try {
      await this.reviewsService.removeReview(reviewId);
      this.userReview = null;
      await this.loadUserReview();
      this.reviews = await this.reviewsService.loadReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  }

  async loadUserReview() {
    this.authService.currentUser$.subscribe(async (user) => {
      if (user) {
        this.userReview = await this.reviewsService.loadUserReview(user.uid);
      }
    });
  }

  async ngOnInit(): Promise<void> {
    this.reviews = await this.reviewsService.loadReviews();
    this.loadUserReview();

    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  private resetReviewFields() {
    this.newReviewContent = '';
    this.newReviewRate = 5;
  }
}
