import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Artist, ImageData, Review } from '../../models/models';
import { ReviewsService } from '../../services/reviews.service';
import { AuthService } from '../../services/auth.service';
import { GalleryService } from '../../services/gallery.service';
import { ArtistsService } from '../../services/artists.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  reviews: Review[] = [];
  isLoggedIn = false;
  isAdmin = false;
  artists: Artist[] = [];
  images: ImageData[] = [];
  userReview: Review | null = null;
  newReviewContent: string = '';
  newReviewRate: number = 5;

  constructor(
    private authService: AuthService,
    private reviewsService: ReviewsService,
    private galleryService: GalleryService,
    private artistsService: ArtistsService
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

  async addReview() {
    try {
      await this.reviewsService.submitReview(
        this.newReviewContent,
        this.newReviewRate
      );
      this.resetReviewFields();
      this.loadUserReview();
      this.loadReviews();
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
    this.artists = await this.artistsService.loadArtists();
    this.images = await this.galleryService.loadImages();
    this.loadReviews();
    this.loadUserReview();

    this.authService.isLoggedIn$.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });

    this.authService.isAdmin$.subscribe((admin) => {
      this.isAdmin = admin;
    });
  }

  getArtistFullName(artistId: string): string {
    return this.artistsService.getArtistFullName(artistId, this.artists);
  }

  private resetReviewFields() {
    this.newReviewContent = '';
    this.newReviewRate = 5;
  }
}
