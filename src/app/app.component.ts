import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import axios from 'axios';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AuthComponent } from './auth/auth.component';
import { AuthService } from './services/auth.service';
import { ReviewsService } from './services/reviews.service';
import { Review } from './services/reviews.service';

interface Image {
  path: string;
  artist: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    RouterOutlet,
    NavbarComponent,
    FooterComponent,
    AuthComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class AppComponent implements OnInit {
  images: Image[] = [];
  reviews: Review[] = [];
  isAuthModalOpen = false;
  isLoggedIn = false;
  userEmail: string | null = null;
  userFirstName: string | null = null;
  userLastName: string | null = null;
  userReview: Review | null = null;
  newReviewContent: string = '';
  newReviewRate: number = 5;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private authService: AuthService,
    private reviewsService: ReviewsService
  ) {}

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

  openAuthModal() {
    this.isAuthModalOpen = true;
  }

  closeAuthModal() {
    this.isAuthModalOpen = false;
  }

  scrollToSection() {
    const section = document.getElementById('o-nas');
    if (section) {
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = sectionTop - 80;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  async addReview() {
    if (!this.newReviewContent) {
      return;
    }

    if (this.userReview) {
      console.log('You can only submit one review.');
      return;
    }

    const user = this.authService.currentUser;

    if (!user) {
      console.error('User is not logged in.');
      return;
    }

    try {
      await this.reviewsService.createReview(
        this.newReviewContent,
        this.newReviewRate,
        this.userFirstName,
        this.userLastName,
        user.uid
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
    const user = this.authService.currentUser;

    if (!user) {
      console.error('User is not logged in.');
      return;
    }

    try {
      await this.reviewsService.deleteUserReview(user.uid);
      this.userReview = null;
      this.loadReviews();
    } catch (error) {
      console.error('Error deleting review:', error);
    }
  }

  loadUserReview() {
    this.authService.currentUser$.subscribe(async (user) => {
      if (user) {
        const userReview = await this.reviewsService.getUserReview(user.uid);
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
      this.isLoggedIn = !!user;
      this.userEmail = user?.email || null;

      if (user) {
        this.authService.getUserInfo(user.uid).then((userInfo) => {
          if (userInfo) {
            this.userFirstName = userInfo.firstName;
            this.userLastName = userInfo.lastName;
          }
        });
      }
    });
  }
}
