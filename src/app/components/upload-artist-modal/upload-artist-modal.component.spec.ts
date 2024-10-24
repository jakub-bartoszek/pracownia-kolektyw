import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadArtistModalComponent } from './upload-artist-modal.component';

describe('UploadArtistModalComponent', () => {
  let component: UploadArtistModalComponent;
  let fixture: ComponentFixture<UploadArtistModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadArtistModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadArtistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
