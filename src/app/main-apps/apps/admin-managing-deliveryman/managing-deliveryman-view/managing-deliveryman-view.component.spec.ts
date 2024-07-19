import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagingDeliverymanViewComponent } from './managing-deliveryman-view.component';

describe('ManagingDeliverymanViewComponent', () => {
  let component: ManagingDeliverymanViewComponent;
  let fixture: ComponentFixture<ManagingDeliverymanViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagingDeliverymanViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagingDeliverymanViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
