import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TatooAftercarePageComponent } from './tatoo-aftercare-page.component';

describe('TatooAftercarePageComponent', () => {
  let component: TatooAftercarePageComponent;
  let fixture: ComponentFixture<TatooAftercarePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TatooAftercarePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TatooAftercarePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
