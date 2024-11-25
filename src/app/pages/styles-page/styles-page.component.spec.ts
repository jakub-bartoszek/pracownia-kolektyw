import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesPageComponent } from './styles-page.component';

describe('StylesPageComponent', () => {
  let component: StylesPageComponent;
  let fixture: ComponentFixture<StylesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StylesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StylesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
