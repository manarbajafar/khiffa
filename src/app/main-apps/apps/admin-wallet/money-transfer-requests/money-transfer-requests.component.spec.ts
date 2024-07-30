import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyTransferRequestsComponent } from './money-transfer-requests.component';

describe('MoneyTransferRequestsComponent', () => {
  let component: MoneyTransferRequestsComponent;
  let fixture: ComponentFixture<MoneyTransferRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyTransferRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyTransferRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
