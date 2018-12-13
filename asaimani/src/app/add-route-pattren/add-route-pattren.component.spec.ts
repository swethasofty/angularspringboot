import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoutePattrenComponent } from './add-route-pattren.component';

describe('AddRoutePattrenComponent', () => {
  let component: AddRoutePattrenComponent;
  let fixture: ComponentFixture<AddRoutePattrenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoutePattrenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoutePattrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
