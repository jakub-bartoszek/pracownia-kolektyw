import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MailSendIconComponent } from './mail-send-icon.component';

describe('MailSendIconComponent', () => {
  let component: MailSendIconComponent;
  let fixture: ComponentFixture<MailSendIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MailSendIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MailSendIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
