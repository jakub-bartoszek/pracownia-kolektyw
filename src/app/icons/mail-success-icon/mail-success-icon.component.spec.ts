import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSuccessIconComponent } from './mail-success-icon.component';

describe('MailSuccessIconComponent', () => {
  let component: MailSuccessIconComponent;
  let fixture: ComponentFixture<MailSuccessIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailSuccessIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailSuccessIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
