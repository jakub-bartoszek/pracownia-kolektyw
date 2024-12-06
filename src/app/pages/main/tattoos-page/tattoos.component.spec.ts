import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattoosPageComponent } from './tattoos-page.component';

describe('TattoosComponent', () => {
  let component: TattoosPageComponent;
  let fixture: ComponentFixture<TattoosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TattoosPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TattoosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
