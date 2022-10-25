import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntiateBookingComponent } from './intiate-booking.component';

describe('IntiateBookingComponent', () => {
  let component: IntiateBookingComponent;
  let fixture: ComponentFixture<IntiateBookingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntiateBookingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntiateBookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
