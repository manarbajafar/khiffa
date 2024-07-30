import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverTicketAnswerComponent } from './driver-ticket-answer.component';

describe('DriverTicketAnswerComponent', () => {
  let component: DriverTicketAnswerComponent;
  let fixture: ComponentFixture<DriverTicketAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverTicketAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverTicketAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
