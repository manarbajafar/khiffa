import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymanTransactionsComponent } from './deliveryman-transactions.component';

describe('DeliverymanTransactionsComponent', () => {
  let component: DeliverymanTransactionsComponent;
  let fixture: ComponentFixture<DeliverymanTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverymanTransactionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymanTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
