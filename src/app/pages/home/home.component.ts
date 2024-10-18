import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Review, ReviewsService } from '../../services/reviews.service';
import { AuthService } from '../../services/auth.service';
import { AuthComponent } from '../../components/auth/auth.component';
import axios from 'axios';

interface Image {
  path: string;
  artist: string;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    AuthComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  images: Image[] = [];
  reviews: Review[] = [];
  isLoggedIn = false;
  userReview: Review | null = null;
  newReviewContent: string = '';
  newReviewRate: number = 5;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private authService: AuthService,
    private reviewsService: ReviewsService
  ) {}

  openModal() {
    this.authService.openAuthModal();
  }

  scrollToSection(sectionName: string) {
    const section = document.getElementById(sectionName);
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  async fetchImages() {
    try {
      if (isPlatformBrowser(this.platformId)) {
        const url = `${window.location.origin}/images.json`;
        const response = await axios.get(url);
        this.images = response.data;
      }
    } catch (err) {
      console.error('Error fetching images:', err);
    }
  }

  async addReview() {
    try {
      await this.reviewsService.submitReview(
        this.newReviewContent,
        this.newReviewRate
      );
      this.newReviewContent = '';
      this.newReviewRate = 5;
      this.loadUserReview();
      this.loadReviews();
    } catch (error) {
      console.error('Error adding review:', error);
    }
  }

  async deleteReview() {
    try {
      await this.reviewsService.removeUserReview();
      this.userReview = null;
      this.loadReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  }

  loadUserReview() {
    this.authService.currentUser$.subscribe(async (user) => {
      if (user) {
        const userReview = await this.reviewsService.loadUserReview(user.uid);
        this.userReview = userReview;
      }
    });
  }

  loadReviews() {
    this.reviewsService.loadReviews().subscribe((reviews) => {
      this.reviews = reviews;
    });
  }

  ngOnInit(): void {
    this.fetchImages();
    this.loadReviews();
    this.loadUserReview();

    this.authService.currentUser$.subscribe((user) => {
      this.isLoggedIn = this.authService.isLoggedIn();
    });
  }
}
