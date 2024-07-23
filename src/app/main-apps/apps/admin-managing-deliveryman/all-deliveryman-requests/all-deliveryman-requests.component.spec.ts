import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeliverymanRequestsComponent } from './all-deliveryman-requests.component';

describe('AllDeliverymanRequestsComponent', () => {
  let component: AllDeliverymanRequestsComponent;
  let fixture: ComponentFixture<AllDeliverymanRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDeliverymanRequestsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDeliverymanRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
