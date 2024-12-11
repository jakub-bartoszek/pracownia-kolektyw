import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExitIconComponent } from './exit-icon.component';

describe('ExitIconComponent', () => {
  let component: ExitIconComponent;
  let fixture: ComponentFixture<ExitIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExitIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExitIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
