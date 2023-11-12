import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperAddComponent } from './shipper-add.component';

describe('ShipperAddComponent', () => {
  let component: ShipperAddComponent;
  let fixture: ComponentFixture<ShipperAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShipperAddComponent]
    });
    fixture = TestBed.createComponent(ShipperAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
