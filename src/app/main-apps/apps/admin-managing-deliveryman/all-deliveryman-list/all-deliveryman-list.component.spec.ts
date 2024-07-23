import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDeliverymanListComponent } from './all-deliveryman-list.component';

describe('AllDeliverymanListComponent', () => {
  let component: AllDeliverymanListComponent;
  let fixture: ComponentFixture<AllDeliverymanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDeliverymanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDeliverymanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
