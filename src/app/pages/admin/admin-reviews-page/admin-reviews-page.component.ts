import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Review } from '../../../models/models';
import { ReviewsService } from '../../../services/reviews.service';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-admin-reviews-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-reviews-page.component.html',
})
export class AdminReviewsPageComponent implements OnInit {
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
    } catch (error) {
      console.error('Error adding review:', error);
    }
  }

  async deleteReview(reviewId: string) {
    try {
      await this.reviewsService.removeReview(reviewId);
      this.userReview = null;
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  }



  async ngOnInit(): Promise<void> {
    this.reviews = await this.reviewsService.loadReviews();

    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
  }

  private resetReviewFields() {
    this.newReviewContent = '';
    this.newReviewRate = 5;
  }
}
