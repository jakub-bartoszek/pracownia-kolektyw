import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiercingPageComponent } from './piercing-page.component';

describe('PiercingComponent', () => {
  let component: PiercingPageComponent;
  let fixture: ComponentFixture<PiercingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiercingPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PiercingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
