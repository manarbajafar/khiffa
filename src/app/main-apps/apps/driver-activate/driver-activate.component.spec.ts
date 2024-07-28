import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverActivateComponent } from './driver-activate.component';

describe('DriverActivateComponent', () => {
  let component: DriverActivateComponent;
  let fixture: ComponentFixture<DriverActivateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DriverActivateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverActivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
