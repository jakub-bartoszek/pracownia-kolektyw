import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Review } from '../../../models/models';
import { ReviewsService } from '../../../services/reviews.service';

@Component({
  selector: 'app-admin-reviews-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-reviews-page.component.html',
})
export class AdminReviewsPageComponent {
  reviews: Review[] = [];

  constructor(private reviewsService: ReviewsService) {}

  async deleteReview(reviewId: string) {
    try {
      await this.reviewsService.removeReview(reviewId);
      this.loadReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  }

  loadReviews() {
    this.reviewsService.loadReviews().subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

  async ngOnInit(): Promise<void> {
    this.loadReviews();
  }
}
