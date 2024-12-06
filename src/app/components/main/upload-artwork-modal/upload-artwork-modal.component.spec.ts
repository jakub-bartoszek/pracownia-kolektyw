import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadArtworkModalComponent } from './upload-artwork-modal.component';

describe('UploadArtworkModalComponent', () => {
  let component: UploadArtworkModalComponent;
  let fixture: ComponentFixture<UploadArtworkModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadArtworkModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadArtworkModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
