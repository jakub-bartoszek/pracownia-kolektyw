import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewIconComponent } from './review-icon.component';

describe('ReviewIconComponent', () => {
  let component: ReviewIconComponent;
  let fixture: ComponentFixture<ReviewIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReviewIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
