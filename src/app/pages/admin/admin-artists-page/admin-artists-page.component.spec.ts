import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminArtistsPageComponent } from './admin-artists-page.component';

describe('AdminArtistsPageComponent', () => {
  let component: AdminArtistsPageComponent;
  let fixture: ComponentFixture<AdminArtistsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminArtistsPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminArtistsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
