import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { ReviewsService } from '../../../services/reviews.service';
import { Review } from '../../../models/models';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reviews-section',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reviews-section.component.html',
})
export class ReviewsSectionComponent {
  reviews: Review[] = [];
  isLoggedIn = false;
  isAdmin = false;
  images: ImageData[] = [];
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
      this.loadUserReview();
    } catch (error) {
      console.error('Error adding review:', error);
    }
  }

  async deleteReview(reviewId: string) {
    try {
      await this.reviewsService.removeReview(reviewId);
      this.userReview = null;
      this.loadReviews();
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

  loadReviews() {
    this.reviewsService.loadReviews().subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

  async ngOnInit(): Promise<void> {
    this.loadReviews();
    this.loadUserReview();

    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });

    this.authService.isAdmin$.subscribe((admin) => {
      this.isAdmin = admin;
    });
  }

  private resetReviewFields() {
    this.newReviewContent = '';
    this.newReviewRate = 5;
  }
}
