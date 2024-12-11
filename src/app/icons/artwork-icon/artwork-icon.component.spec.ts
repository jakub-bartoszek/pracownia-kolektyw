import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtworkIconComponent } from './artwork-icon.component';

describe('ArtworkIconComponent', () => {
  let component: ArtworkIconComponent;
  let fixture: ComponentFixture<ArtworkIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtworkIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtworkIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
