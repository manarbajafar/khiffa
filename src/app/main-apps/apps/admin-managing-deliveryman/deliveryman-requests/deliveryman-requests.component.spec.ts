import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverymanRequestsComponent } from './deliveryman-requests.component';

describe('DeliverymanRequestsComponent', () => {
  let component: DeliverymanRequestsComponent;
  let fixture: ComponentFixture<DeliverymanRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverymanRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverymanRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
