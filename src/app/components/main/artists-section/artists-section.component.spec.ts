import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsSectionComponent } from './artists-section.component';

describe('ArtistsSectionComponent', () => {
  let component: ArtistsSectionComponent;
  let fixture: ComponentFixture<ArtistsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtistsSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ArtistsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
