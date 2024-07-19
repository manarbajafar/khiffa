import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSupportViewComponent } from './technical-support-view.component';

describe('TechnicalSupportViewComponent', () => {
  let component: TechnicalSupportViewComponent;
  let fixture: ComponentFixture<TechnicalSupportViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechnicalSupportViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnicalSupportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
