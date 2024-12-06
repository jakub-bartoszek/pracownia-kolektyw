import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminReviewsPageComponent } from './admin-reviews-page.component';

describe('AdminReviewsPageComponent', () => {
  let component: AdminReviewsPageComponent;
  let fixture: ComponentFixture<AdminReviewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminReviewsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminReviewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
