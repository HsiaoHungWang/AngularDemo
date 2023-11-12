import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperMgmtComponent } from './shipper-mgmt.component';

describe('ShipperMgmtComponent', () => {
  let component: ShipperMgmtComponent;
  let fixture: ComponentFixture<ShipperMgmtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipperMgmtComponent]
    });
    fixture = TestBed.createComponent(ShipperMgmtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
