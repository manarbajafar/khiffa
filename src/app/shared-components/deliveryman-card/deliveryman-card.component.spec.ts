import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymanCardComponent } from './deliveryman-card.component';

describe('DeliverymanCardComponent', () => {
  let component: DeliverymanCardComponent;
  let fixture: ComponentFixture<DeliverymanCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverymanCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
