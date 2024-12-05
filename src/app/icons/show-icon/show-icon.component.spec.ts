import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowIconComponent } from './show-icon.component';

describe('ShowIconComponent', () => {
  let component: ShowIconComponent;
  let fixture: ComponentFixture<ShowIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
