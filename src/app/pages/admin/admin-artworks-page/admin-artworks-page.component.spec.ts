import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtworksPageComponent } from './admin-artworks-page.component';

describe('AdminArtworksPageComponent', () => {
  let component: AdminArtworksPageComponent;
  let fixture: ComponentFixture<AdminArtworksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminArtworksPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArtworksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
